import { Fragment } from 'react';
import { Lightbulb } from 'lucide-react';

/**
 * Renders inline markdown-style formatting inside a plain string:
 * - `**bold**`  -> <strong>
 * - `` `code` `` -> monospace inline code (for commands, filenames, tool syntax)
 */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="rounded border border-cyber-border bg-cyber-gray/80 px-1.5 py-0.5 font-mono text-[0.85em] text-cyber-green"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

type Block =
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'bullets'; items: string[] }
  | { type: 'code'; text: string }
  | { type: 'table'; header: string[]; rows: string[][] }
  | { type: 'paragraph'; text: string };

function parsePipeRow(line: string): string[] {
  let inner = line.trim();
  if (inner.startsWith('|')) inner = inner.slice(1);
  if (inner.endsWith('|')) inner = inner.slice(0, -1);
  return inner.split('|').map((c) => c.trim());
}

function isSeparatorRow(cells: string[]): boolean {
  return cells.every((c) => /^:?-{2,}:?$/.test(c.trim()));
}

/**
 * Groups a flat array of content strings into structured blocks:
 * - "## Heading" / "##Heading" -> heading (space after ## is optional)
 * - "> Tip text"        -> highlighted callout
 * - "1. First item"     -> ordered list (consecutive numbered lines are grouped)
 * - "- item" / "* item" -> bullet list (consecutive dash/asterisk lines are grouped)
 * - "```...```"         -> preformatted code / diagram block
 * - "TABLE\nCol1|Col2\nA|B"     -> comparison table (single string, "TABLE" prefix)
 * - "| Col1 | Col2 |" rows      -> comparison table (each row as its own array entry,
 *                                  standard markdown pipe-table style, separator row optional)
 * - anything else       -> paragraph (supports **bold** and `code` inline)
 */
function structureContent(content: string[]): Block[] {
  const blocks: Block[] = [];
  let currentList: string[] = [];
  let currentBullets: string[] = [];
  let currentTableRows: string[][] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push({ type: 'list', items: currentList });
      currentList = [];
    }
  };
  const flushBullets = () => {
    if (currentBullets.length > 0) {
      blocks.push({ type: 'bullets', items: currentBullets });
      currentBullets = [];
    }
  };
  const flushTable = () => {
    if (currentTableRows.length > 0) {
      const [header, ...rest] = currentTableRows;
      const rows = rest[0] && isSeparatorRow(rest[0]) ? rest.slice(1) : rest;
      blocks.push({ type: 'table', header, rows });
      currentTableRows = [];
    }
  };
  const flushAll = () => {
    flushList();
    flushBullets();
    flushTable();
  };

  for (const line of content) {
    const trimmed = line.trim();
    const numberedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    const bulletMatch = trimmed.match(/^[-*]\s+(.*)$/);
    const headingMatch = trimmed.match(/^##\s*(.*)$/);
    const isPipeRow = trimmed.startsWith('|') && trimmed.includes('|', 1);

    if (headingMatch) {
      flushAll();
      blocks.push({ type: 'heading', text: headingMatch[1] });
    } else if (/^TABLE\s*\n/.test(trimmed)) {
      flushAll();
      const rowsRaw = trimmed.replace(/^TABLE\s*\n/, '').split('\n').filter(Boolean);
      const header = rowsRaw[0].split('|').map((c) => c.trim());
      const rows = rowsRaw.slice(1).map((r) => r.split('|').map((c) => c.trim()));
      blocks.push({ type: 'table', header, rows });
    } else if (isPipeRow) {
      flushList();
      flushBullets();
      currentTableRows.push(parsePipeRow(trimmed));
    } else if (trimmed.startsWith('```') && trimmed.endsWith('```') && trimmed.length > 6) {
      flushAll();
      const inner = trimmed.slice(3, -3).replace(/^\n/, '').replace(/\n$/, '');
      blocks.push({ type: 'code', text: inner });
    } else if (trimmed.startsWith('> ')) {
      flushAll();
      blocks.push({ type: 'quote', text: trimmed.replace('> ', '') });
    } else if (numberedMatch) {
      flushBullets();
      flushTable();
      currentList.push(numberedMatch[1]);
    } else if (bulletMatch) {
      flushList();
      flushTable();
      currentBullets.push(bulletMatch[1]);
    } else {
      flushAll();
      blocks.push({ type: 'paragraph', text: trimmed });
    }
  }
  flushAll();

  return blocks;
}

export default function BlogArticleBody({ content }: { content: string[] }) {
  const blocks = structureContent(content);

  return (
    <div className="mt-12 space-y-7 text-[19px] leading-[1.9] text-gray-200">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2
                key={i}
                className="!mt-14 !mb-2 text-2xl font-bold text-white first:!mt-0 sm:text-3xl"
              >
                {block.text}
              </h2>
            );

          case 'quote':
            return (
              <div
                key={i}
                className="flex gap-3 rounded-lg border border-cyber-green/30 bg-cyber-green/5 px-5 py-4 text-[17px] leading-relaxed text-gray-200"
              >
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-cyber-green" />
                <p>{renderInline(block.text)}</p>
              </div>
            );

          case 'code':
            return (
              <pre
                key={i}
                className="overflow-x-auto rounded-lg border border-cyber-border bg-cyber-gray/60 p-5 font-mono text-[14px] leading-relaxed text-cyber-green"
              >
                {block.text}
              </pre>
            );

          case 'table':
            return (
              <div key={i} className="overflow-x-auto rounded-lg border border-cyber-border">
                <table className="w-full border-collapse text-[16px]">
                  <thead>
                    <tr className="border-b border-cyber-border bg-cyber-gray/60">
                      {block.header.map((cell, h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-left font-mono text-sm font-semibold text-cyber-green"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-b border-cyber-border/60 last:border-0">
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-3 text-gray-300">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'bullets':
            return (
              <ul key={i} className="space-y-2.5 pl-6">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue" />
                    <span className="text-cyber-blue/90">{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case 'list':
            return (
              <ol key={i} className="list-decimal space-y-3 pl-6 marker:font-mono marker:text-cyber-green">
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    {renderInline(item)}
                  </li>
                ))}
              </ol>
            );

          case 'paragraph':
          default:
            return <p key={i}>{renderInline(block.text)}</p>;
        }
      })}
    </div>
  );
}

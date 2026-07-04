'use client';

import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { terminalCommands } from '@/lib/data';

interface Line {
  type: 'input' | 'output';
  text: string;
}

const INTRO: Line[] = [
  { type: 'output', text: 'Welcome to the interactive terminal. Type "help" to see available commands.' },
];

export default function HackerTerminal() {
  const [lines, setLines] = useState<Line[]>(INTRO);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setHistory((h) => [...h, raw]);
    setHistoryIndex(-1);
    setLines((prev) => [...prev, { type: 'input', text: raw }]);

    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    if (cmd === 'projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      setLines((prev) => [...prev, { type: 'output', text: 'Navigating to #projects ...' }]);
      return;
    }

    if (cmd === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setLines((prev) => [...prev, { type: 'output', text: 'Navigating to #contact ...' }]);
      return;
    }

    const output = terminalCommands[cmd];
    if (output) {
      setLines((prev) => [...prev, ...output.map((text) => ({ type: 'output' as const, text }))]);
    } else {
      setLines((prev) => [
        ...prev,
        { type: 'output', text: `command not found: ${cmd} — type "help" for a list of commands` },
      ]);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  };

  return (
    <section id="terminal" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">09. // console</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            Hacker <span className="gradient-text">Console</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong corner-frame mt-10 overflow-hidden rounded-xl"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-2 border-b border-cyber-border bg-cyber-gray/60 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-cyber-red/70" />
            <span className="h-3 w-3 rounded-full bg-cyber-amber/70" />
            <span className="h-3 w-3 rounded-full bg-cyber-green/70" />
            <span className="ml-3 font-mono text-xs text-gray-400">guest@security-portfolio: ~</span>
          </div>

          <div className="h-80 overflow-y-auto p-4 font-mono text-sm">
            {lines.map((line, i) => (
              <div key={i} className={line.type === 'input' ? 'text-white' : 'text-cyber-green/90'}>
                {line.type === 'input' ? (
                  <span>
                    <span className="text-cyber-blue">guest@portfolio</span>
                    <span className="text-gray-500">:~$ </span>
                    {line.text}
                  </span>
                ) : (
                  <span className="whitespace-pre-wrap">{line.text}</span>
                )}
              </div>
            ))}

            <div className="mt-1 flex items-center">
              <span className="text-cyber-blue">guest@portfolio</span>
              <span className="text-gray-500">:~$&nbsp;</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal command input"
                className="flex-1 bg-transparent text-white outline-none"
              />
              <span className="blink-cursor h-4" />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>

        <p className="mt-3 text-center font-mono text-xs text-gray-500">
          try: <span className="text-cyber-green">whoami</span> · <span className="text-cyber-green">help</span> ·{' '}
          <span className="text-cyber-green">skills</span> · <span className="text-cyber-green">projects</span> ·{' '}
          <span className="text-cyber-green">contact</span>
        </p>
      </div>
    </section>
  );
}

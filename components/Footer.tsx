import { ShieldHalf } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-cyber-border/50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-gray-500 sm:flex-row">
        <div className="flex items-center gap-2 text-cyber-green">
          <ShieldHalf className="h-4 w-4" />
          <span>root@portfolio:~$</span>
        </div>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
        <p className="text-gray-600">Stay curious. Stay ethical.</p>
      </div>
    </footer>
  );
}

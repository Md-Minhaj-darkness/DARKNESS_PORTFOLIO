'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldHalf } from 'lucide-react';

const links = [
  
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#blog', label: 'Blog' },
  { href: '#terminal', label: 'Terminal' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-mono text-lg font-bold text-cyber-green">
          <ShieldHalf className="h-6 w-6" />
          <span className="gradient-text">root@Darkness</span>
        </a>

        <ul className="hidden items-center gap-7 font-mono text-sm text-gray-300 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring relative transition-colors hover:text-cyber-green"
              >
                <span className="text-cyber-green/60">./</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="focus-ring text-cyber-green lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass-strong mx-4 mt-3 overflow-hidden rounded-lg font-mono text-sm lg:hidden"
          >
            {links.map((link) => (
              <li key={link.href} className="border-b border-cyber-border/50 last:border-none">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3 text-gray-300 hover:bg-cyber-green/5 hover:text-cyber-green"
                >
                  <span className="text-cyber-green/60">./</span>
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

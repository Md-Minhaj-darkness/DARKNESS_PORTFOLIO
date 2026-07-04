'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const socials = [
  { icon: Mail, label: 'Email', href: `mailto:${siteConfig.email}` },
  { icon: Github, label: 'GitHub', href: siteConfig.github },
  { icon: Linkedin, label: 'LinkedIn', href: siteConfig.linkedin },
  { icon: Twitter, label: 'Twitter / X', href: siteConfig.twitter },
  { icon: MessageSquare, label: 'Discord', href: siteConfig.discord },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: wire this up to your form backend (e.g. Formspree, Resend, or an API route)
    setTimeout(() => setStatus('sent'), 1200);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">10. // contact</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-gray-400">
              Open to penetration testing engagements, bug bounty collaboration, and security
              research opportunities. Reach out through any channel below.
            </p>
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="cyber-card glass focus-ring flex items-center gap-3 rounded-lg px-4 py-3 text-gray-300 hover:text-cyber-green"
                >
                  <social.icon className="h-5 w-5 text-cyber-green" />
                  <span className="font-mono text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="glass-strong corner-frame rounded-xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block font-mono text-xs text-gray-400">
                  name
                </label>
                <input
                  id="name"
                  required
                  className="focus-ring w-full rounded-md border border-cyber-border bg-cyber-black/50 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyber-green"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block font-mono text-xs text-gray-400">
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="focus-ring w-full rounded-md border border-cyber-border bg-cyber-black/50 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyber-green"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1 block font-mono text-xs text-gray-400">
                subject
              </label>
              <input
                id="subject"
                required
                className="focus-ring w-full rounded-md border border-cyber-border bg-cyber-black/50 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyber-green"
                placeholder="Project inquiry"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1 block font-mono text-xs text-gray-400">
                message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="focus-ring w-full resize-none rounded-md border border-cyber-border bg-cyber-black/50 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyber-green"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="focus-ring mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-cyber-green py-3 font-mono text-sm font-semibold text-cyber-black transition-all hover:shadow-[0_0_20px_rgba(0,255,156,0.5)] disabled:opacity-70"
            >
              {status === 'idle' && (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
              {status === 'sending' && 'Transmitting...'}
              {status === 'sent' && (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message Sent
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

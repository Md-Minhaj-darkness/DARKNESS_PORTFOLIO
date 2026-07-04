'use client';

import { motion } from 'framer-motion';
import { aboutHighlights, siteConfig } from '@/lib/data';
import {
  ShieldCheck,
  Globe,
  Search,
  Crosshair,
  Code,
  Terminal as TerminalIcon,
  BookOpen,
} from 'lucide-react';

const icons = [ShieldCheck, Globe, Search, Crosshair, Code, TerminalIcon, BookOpen];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-cyber-green">01. // about</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass corner-frame rounded-xl p-6 font-mono text-sm leading-relaxed text-gray-300 sm:p-8"
          >
            <p className="mb-3 text-cyber-green">$ cat about_me.txt</p>
            <p className="whitespace-pre-line font-sans text-base text-gray-300">{siteConfig.about}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="cyber-card glass rounded-lg p-5"
                >
                  <Icon className="mb-3 h-6 w-6 text-cyber-green" />
                  <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

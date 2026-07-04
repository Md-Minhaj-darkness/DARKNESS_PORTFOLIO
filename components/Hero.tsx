'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import TerminalBackground from './TerminalBackground';
import { useTypingEffect } from '@/lib/useTypingEffect';
import { siteConfig } from '@/lib/data';

export default function Hero() {
  const typed = useTypingEffect({ words: siteConfig.typingWords });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <TerminalBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 flex items-center gap-2 font-mono text-sm text-cyber-green">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyber-green" />
            available_for_work.sh
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text text-glow-green">{siteConfig.name}</span>
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {siteConfig.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-cyber-green/30 bg-cyber-green/5 px-3 py-1 font-mono text-xs text-cyber-green"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="mt-6 h-9 font-mono text-lg text-cyber-blue sm:text-xl">
            <span className="text-gray-500">$ specialization --focus=</span>
            <span className="text-glow-blue">{typed}</span>
            <span className="blink-cursor h-5" />
          </div>

          <p className="mt-6 max-w-xl text-gray-400">
            Breaking systems ethically to help build stronger ones. Focused on offensive
            security, web application testing, and continuous hands-on research.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteConfig.resumeUrl}
              download
              className="focus-ring group flex items-center gap-2 rounded-md bg-cyber-green px-5 py-3 font-mono text-sm font-semibold text-cyber-black transition-all hover:shadow-[0_0_20px_rgba(0,255,156,0.5)]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="focus-ring flex items-center gap-2 rounded-md border border-cyber-blue/50 px-5 py-3 font-mono text-sm font-semibold text-cyber-blue transition-all hover:bg-cyber-blue/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 rounded-md border border-cyber-border px-5 py-3 font-mono text-sm text-gray-300 transition-all hover:border-cyber-green/50 hover:text-cyber-green"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 rounded-md border border-cyber-border px-5 py-3 font-mono text-sm text-gray-300 transition-all hover:border-cyber-green/50 hover:text-cyber-green"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="corner-frame relative h-64 w-64 animate-float rounded-2xl p-1 sm:h-80 sm:w-80">
            <div className="h-full w-full overflow-hidden rounded-2xl border border-cyber-green/30 bg-cyber-gray shadow-[0_0_40px_rgba(0,255,156,0.15)]">
              <Image
                src="https://drive.google.com/file/d/1Rj26bMHcM9w7otbRmPeJjG_GbGkSKE0M/view"
                alt={`${siteConfig.name} - profile photo`}
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -inset-3 -z-10 rounded-2xl border border-cyber-blue/20 animate-pulse-glow" />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="focus-ring absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cyber-green/70 hover:text-cyber-green"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}

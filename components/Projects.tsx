'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { projects, projectSections } from '@/lib/data';

export default function Projects() {
  const [active, setActive] = useState<(typeof projectSections)[number]>('Featured');

  const filtered = projects.filter((p) => p.section === active);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">03. // projects</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectSections.map((section) => (
            <button
              key={section}
              onClick={() => setActive(section)}
              className={`focus-ring rounded-full border px-4 py-2 font-mono text-xs transition-all sm:text-sm ${
                active === section
                  ? 'border-cyber-green bg-cyber-green/10 text-cyber-green shadow-[0_0_15px_rgba(0,255,156,0.2)]'
                  : 'border-cyber-border text-gray-400 hover:border-cyber-green/40 hover:text-cyber-green'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.length === 0 && (
              <p className="col-span-full text-center font-mono text-sm text-gray-500">
                No entries in this category yet.
              </p>
            )}
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="cyber-card glass flex flex-col overflow-hidden rounded-xl"
              >
                <div className="relative h-44 w-full overflow-hidden border-b border-cyber-border">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <span className="absolute right-3 top-3 rounded-full border border-cyber-blue/40 bg-cyber-black/70 px-2 py-1 font-mono text-[10px] text-cyber-blue">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold text-white">{project.title}</h3>
                    <span className="font-mono text-xs text-gray-500">{project.date}</span>
                  </div>
                  <p className="mb-4 flex-1 text-sm text-gray-400">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-cyber-border px-2 py-0.5 font-mono text-[11px] text-cyber-green/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 border-t border-cyber-border pt-4 font-mono text-xs">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring flex items-center gap-1 text-gray-300 hover:text-cyber-green"
                      >
                        <Github className="h-4 w-4" /> Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring flex items-center gap-1 text-gray-300 hover:text-cyber-blue"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Code2, Terminal, ShieldHalf, Wrench, LucideIcon } from 'lucide-react';
import { skillCategories } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Terminal,
  ShieldHalf,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">02. // skills</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="cyber-card glass rounded-xl p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg border border-cyber-green/30 bg-cyber-green/10 p-2">
                    <Icon className="h-5 w-5 text-cyber-green" />
                  </div>
                  <h3 className="font-mono text-lg font-semibold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex justify-between font-mono text-xs text-gray-300">
                        <span>{skill.name}</span>
                        <span className="text-cyber-blue">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-cyber-border/60">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: si * 0.05, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-cyber-green to-cyber-blue"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

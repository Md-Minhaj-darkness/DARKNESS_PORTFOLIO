'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Rocket, Bug, Medal, LucideIcon } from 'lucide-react';
import { achievements } from '@/lib/data';
import { Achievement } from '@/types';

const typeIcon: Record<Achievement['type'], LucideIcon> = {
  CTF: Trophy,
  Certification: Award,
  Hackathon: Rocket,
  'Bug Bounty': Bug,
  Award: Medal,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">04. // achievements</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            Wins &amp; <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = typeIcon[item.type];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="cyber-card glass flex items-start gap-4 rounded-lg p-5"
              >
                <div className="rounded-lg border border-cyber-amber/30 bg-cyber-amber/10 p-2.5">
                  <Icon className="h-5 w-5 text-cyber-amber" />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-cyber-blue">
                    {item.type}
                  </span>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">
                    {item.issuer} · {item.date}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

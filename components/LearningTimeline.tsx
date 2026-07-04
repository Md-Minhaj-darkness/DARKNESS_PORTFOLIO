'use client';

import { motion } from 'framer-motion';
import { learningJourney } from '@/lib/data';

export default function LearningTimeline() {
  return (
    <section id="journey" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">05. // journey</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            Learning <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative mt-14 pl-8">
          <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-cyber-green via-cyber-blue to-transparent" />
          {learningJourney.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[38px] top-1 h-3.5 w-3.5 rounded-full border-2 border-cyber-green bg-cyber-black shadow-[0_0_10px_rgba(0,255,156,0.6)]" />
              <div className="glass cyber-card rounded-lg p-5">
                <span className="font-mono text-xs text-cyber-blue">{item.year}</span>
                <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

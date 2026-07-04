'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { stats } from '@/lib/data';

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-mono">
      {display}+
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-cyber-border/50 bg-cyber-gray/30 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-3xl font-extrabold text-cyber-green text-glow-green sm:text-4xl">
              <Counter value={stat.value} />
            </div>
            <p className="mt-1 font-mono text-xs text-gray-400 sm:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

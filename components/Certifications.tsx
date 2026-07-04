'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Clock, Target } from 'lucide-react';
import { certifications } from '@/lib/data';

const statusStyles = {
  Completed: { icon: BadgeCheck, label: 'Completed', className: 'text-cyber-green border-cyber-green/40 bg-cyber-green/5' },
  'In Progress': { icon: Clock, label: 'In Progress', className: 'text-cyber-blue border-cyber-blue/40 bg-cyber-blue/5' },
  'Future Goal': { icon: Target, label: 'Future Goal', className: 'text-cyber-amber border-cyber-amber/40 bg-cyber-amber/5' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">07. // certifications</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            Certifications &amp; <span className="gradient-text">Badges</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => {
            const status = statusStyles[cert.status];
            const StatusIcon = status.icon;
            return (
              <motion.div
                key={cert.shortName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="cyber-card glass flex flex-col items-center rounded-xl p-6 text-center"
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 font-mono text-xs font-bold"
                  style={{ borderColor: cert.color, color: cert.color, boxShadow: `0 0 20px ${cert.color}33` }}
                >
                  {cert.shortName.length > 10 ? cert.shortName.split(' ')[0] : cert.shortName}
                </div>
                <h3 className="text-sm font-semibold text-white">{cert.name}</h3>
                <p className="mt-1 font-mono text-xs text-gray-500">{cert.issuer}</p>
                <span
                  className={`mt-3 flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[10px] ${status.className}`}
                >
                  <StatusIcon className="h-3 w-3" />
                  {status.label}
                  {cert.year ? ` · ${cert.year}` : ''}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { experience, education } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">06. // experience</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Experience timeline */}
          <div className="relative pl-8">
            <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-green to-transparent" />
            {experience.map((job, i) => (
              <motion.div
                key={job.role + job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                <span className="absolute -left-[38px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyber-blue bg-cyber-black">
                  <Briefcase className="h-3 w-3 text-cyber-blue" />
                </span>
                <div className="glass cyber-card rounded-lg p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-white">{job.role}</h3>
                    <span className="font-mono text-xs text-cyber-blue">{job.duration}</span>
                  </div>
                  <p className="mb-3 flex items-center gap-1 text-sm text-cyber-green">
                    {job.company}
                    <span className="flex items-center gap-1 text-gray-500">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </span>
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education cards */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-sm text-gray-400">
              <GraduationCap className="h-4 w-4 text-cyber-green" /> education
            </h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass cyber-card rounded-lg p-5"
                >
                  <h4 className="font-semibold text-white">{edu.degree}</h4>
                  <p className="text-sm text-cyber-green">{edu.institution}</p>
                  <p className="mt-1 font-mono text-xs text-gray-500">
                    {edu.duration} · {edu.location}
                  </p>
                  {edu.description && (
                    <p className="mt-2 text-sm text-gray-400">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight, TrendingUp } from 'lucide-react';
import { services } from '@/lib/data';
import { ServiceItem } from '@/types';

const leftModules = services.filter((_, i) => i % 2 === 0);
const rightModules = services.filter((_, i) => i % 2 === 1);

function ModuleCard({ service, connectSide }: { service: ServiceItem; connectSide: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`cyber-card glass relative rounded-lg px-5 py-4 ${
        connectSide === 'right'
          ? 'lg:before:absolute lg:before:right-[-25px] lg:before:top-1/2 lg:before:h-px lg:before:w-6 lg:before:bg-cyber-green/40'
          : 'lg:before:absolute lg:before:left-[-25px] lg:before:top-1/2 lg:before:h-px lg:before:w-6 lg:before:bg-cyber-green/40'
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyber-green" />
        <span className="font-mono text-[11px] text-gray-500">{service.id}</span>
      </div>
      <h3 className="font-semibold text-white">{service.title}</h3>
      <span
        className={`mt-1 inline-block font-mono text-[11px] tracking-wide ${
          service.status === 'ACTIVE' ? 'text-cyber-green' : 'text-cyber-amber'
        }`}
      >
        {service.status}
      </span>
    </motion.div>
  );
}

function HubCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-strong corner-frame relative z-10 rounded-xl p-6 shadow-[0_0_30px_rgba(0,255,156,0.1)]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cyber-green/40 bg-cyber-green/10">
          <ShieldCheck className="h-6 w-6 text-cyber-green" />
        </div>
        <div>
          <h3 className="font-mono text-lg font-semibold text-white">Security Services</h3>
          <a
            href="#services"
            className="focus-ring flex items-center gap-1 font-mono text-xs text-cyber-blue hover:text-cyber-green"
          >
            VIEW ALL <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="my-4 h-px bg-cyber-border" />

      <div className="flex items-center gap-3">
        <span className="font-mono text-2xl font-bold text-cyber-green">{services.length}</span>
        <TrendingUp className="h-4 w-4 text-cyber-green" />
        <svg viewBox="0 0 100 24" className="h-6 w-20 text-cyber-green/70">
          <polyline
            points="0,20 15,16 30,18 45,10 60,12 75,4 100,2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="mt-1 font-mono text-[11px] text-gray-500">active service modules</p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">00. // services</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            OUR <span className="gradient-text">SERVICES</span>
          </h2>
        </motion.div>

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-cyber-border bg-cyber-gray/20 p-6 sm:p-10">
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

          {/* Mobile / tablet: simple stacked layout */}
          <div className="relative z-10 space-y-5 lg:hidden">
            <HubCard />
            {services.map((service) => (
              <ModuleCard key={service.id} service={service} connectSide="left" />
            ))}
          </div>

          {/* Desktop: hub-and-spoke layout */}
          <div className="relative z-10 hidden lg:grid lg:grid-cols-[1fr_1.3fr_1fr] lg:items-center lg:gap-16">
            <div className="space-y-8">
              {leftModules.map((service) => (
                <ModuleCard key={service.id} service={service} connectSide="right" />
              ))}
            </div>

            <div className="mx-auto w-full max-w-sm">
              <HubCard />
            </div>

            <div className="space-y-8">
              {rightModules.map((service) => (
                <ModuleCard key={service.id} service={service} connectSide="left" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

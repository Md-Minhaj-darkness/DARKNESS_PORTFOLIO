'use client';

import MatrixRain from './MatrixRain';

export default function TerminalBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Matrix rain */}
      <MatrixRain />

      {/* Radial glow accents */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyber-green/10 blur-[100px]" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-cyber-blue/10 blur-[100px]" />

      {/* Scanline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-green/40 to-transparent animate-scan" />

      {/* Vignette to keep foreground readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/60 via-transparent to-cyber-black" />
    </div>
  );
}

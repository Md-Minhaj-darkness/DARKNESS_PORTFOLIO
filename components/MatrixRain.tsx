'use client';

import { useEffect, useRef } from 'react';

/**
 * Lightweight canvas-based matrix rain effect.
 * Uses requestAnimationFrame with a throttled interval and pauses
 * when the tab is hidden to keep CPU/GPU usage minimal.
 */
export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = 'アカサタナハマヤラワ0123456789ABCDEFXYZ$#@%&';
    const fontSize = 15;
    let columns = 0;
    let drops: number[] = [];
    let width = 0;
    let height = 0;

    const setup = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.floor((Math.random() * height) / fontSize));
    };

    setup();

    let animationId: number;
    let lastTime = 0;
    const fpsInterval = 1000 / 20; // throttle to ~20fps for performance

    const draw = (time: number) => {
      animationId = requestAnimationFrame(draw);
      if (time - lastTime < fpsInterval) return;
      lastTime = time;

      ctx.fillStyle = 'rgba(5, 7, 8, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = Math.random() > 0.95 ? '#00d9ff' : '#00ff9c';
        ctx.globalAlpha = 0.55;
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let visible = true;
    const handleVisibility = () => {
      visible = !document.hidden;
      if (visible) {
        animationId = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    const handleResize = () => setup();

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('resize', handleResize);
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-25"
      aria-hidden="true"
    />
  );
}

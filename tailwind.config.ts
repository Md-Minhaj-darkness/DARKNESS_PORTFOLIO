import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#050708',
          dark: '#0a0e0f',
          gray: '#12181a',
          border: '#1e2b2d',
          green: '#00ff9c',
          'green-dim': '#00cc7d',
          blue: '#00d9ff',
          'blue-dim': '#00a8cc',
          red: '#ff3b5c',
          amber: '#ffb800',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      animation: {
        'matrix-fall': 'matrix-fall linear infinite',
        blink: 'blink 1s step-end infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        scan: 'scan 4s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        'matrix-fall': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,255,156,0.3), 0 0 20px rgba(0,255,156,0.1)' },
          '50%': { boxShadow: '0 0 15px rgba(0,255,156,0.6), 0 0 40px rgba(0,255,156,0.2)' },
        },
        scan: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(2000%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(0,255,156,0.3)' },
          '50%': { borderColor: 'rgba(0,217,255,0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(0,255,156,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,156,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
};
export default config;

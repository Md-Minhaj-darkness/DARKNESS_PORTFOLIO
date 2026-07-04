# Cyber Security Portfolio

A premium, hacker-aesthetic portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion — designed for cybersecurity engineers, pentesters,
and bug bounty hunters.

## Features

- Matrix rain + animated terminal hero background (lightweight canvas, throttled to ~20fps, pauses on tab blur)
- Glassmorphism + neon cyberpunk UI (black / dark gray / green / blue palette)
- Typing animation cycling through specializations
- Animated skill bars, achievement cards, timeline, and counters
- Filterable projects grid (Featured / Labs / CTF Writeups / Security Research / Open Source)
- Certification badges (eJPT, PNPT, CEH, Security+, OSCP goal, Google Cybersecurity, Cisco)
- Interactive terminal console with real commands (`whoami`, `help`, `skills`, `projects`, `contact`, `clear`)
- Animated contact form (frontend only — wire up a backend, see below)
- SEO metadata, `robots.txt`, and `sitemap.ts`
- Fully responsive, accessible (focus rings, semantic headings, alt text)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize it

Almost everything content-related lives in **`lib/data.ts`** — one file, no hunting
through components:

- `siteConfig` — name, roles, typing words, email, socials, resume path
- `aboutHighlights` — About section highlight cards
- `skillCategories` — Programming / OS / Security / Tools skill bars
- `projects` — project cards (title, description, tech, category, section, links)
- `achievements` — CTF ranks, hackathons, bug bounty hall-of-fame entries
- `learningJourney` — beginner-to-professional timeline
- `experience` / `education` — work history and education cards
- `certifications` — badge grid
- `stats` — animated counters
- `blogPosts` — blog preview cards
- `terminalCommands` — output for the interactive terminal

### Replace placeholder assets

- `public/images/profile-placeholder.svg` → your real profile photo (update the `src` in `components/Hero.tsx`)
- `public/images/projects/placeholder-*.svg` → real project screenshots
- `public/resume/resume.pdf` → your actual resume

### Wire up the contact form

`components/Contact.tsx` currently simulates a submission. Connect it to a real
backend — a Next.js API route, [Resend](https://resend.com), or
[Formspree](https://formspree.io) — inside the `onSubmit` handler.

### Blog posts

The Blog section links to `/blog/[slug]`. Add a matching route
(`app/blog/[slug]/page.tsx`) with MDX or a headless CMS of your choice when you're
ready to publish full articles.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom cyber theme in `tailwind.config.ts`)
- Framer Motion for animations
- lucide-react for icons

## Build for production

```bash
npm run build
npm run start
```

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/data';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: `${siteConfig.name} | Cyber Security Engineer & Ethical Hacker`,
  description:
    'Portfolio of a Cyber Security Engineer specializing in penetration testing, web application security, OSINT, and vulnerability research.',
  keywords: [
    'Cyber Security',
    'Ethical Hacker',
    'Penetration Tester',
    'Bug Bounty Hunter',
    'Security Researcher',
    'OSINT',
    'Web Security',
    'Red Team',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Cyber Security Engineer`,
    description: 'Penetration testing, web security, OSINT, and vulnerability research portfolio.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Cyber Security Engineer`,
    description: 'Penetration testing, web security, OSINT, and vulnerability research portfolio.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-cyber-black font-sans antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

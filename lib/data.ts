import {
  Achievement,
  BlogPost,
  Certification,
  EducationItem,
  ExperienceItem,
  Project,
  SkillCategory,
  TimelineItem,
} from '@/types';

export const siteConfig = {
  name: 'Md Minhaj',
  role: 'Cyber Security Researcher & Penetration Tester',
  roles: ['Cyber Security Researcher', 'Ethical Hacker', 'Penetration Tester', 'Security Researcher', 'Bug Bounty Hunter'],
  typingWords: [
    'Penetration Testing',
    'Web Security',
    'Red Team',
    'OSINT',
    'Digital Forensics',
    'Network Security',
    'Malware Analysis',
  ],
  email: 'pentester.minhaj@gmail.com',
  github: 'https://github.com/Md-Minhaj-darkness',
  linkedin: 'https://www.linkedin.com/in/md-minhaj-darkness/',
  twitter: 'https://x.com/MDMINHA17101032',
  discord: 'https://discord.com/users/1316397974338797580',
  resumeUrl: '/resume/resume.pdf',
  location: 'Remote / Worldwide',
  about: `I'm a Cybersecurity Researcher, Penetration Tester, and Digital Forensics Practitioner specializing in offensive security, vulnerability research, and incident investigation. My expertise includes web application security, malware analysis, incident response, Linux, networking, and secure software development.

I enjoy discovering vulnerabilities, analyzing digital evidence, building security tools, and sharing practical cybersecurity knowledge through technical content and online training. I believe continuous learning is the foundation of staying ahead in cybersecurity.
.`,
};

export const aboutHighlights = [
  { title: 'Ethical Hacking', desc: 'Authorized offensive testing to uncover exploitable weaknesses before attackers do.' },
  { title: 'Web App Security', desc: 'Deep focus on OWASP Top 10, business logic flaws, and modern web attack surfaces.' },
  { title: 'Vulnerability Assessment', desc: 'Structured methodology for identifying, validating, and prioritizing risk.' },
  { title: 'Penetration Testing', desc: 'End-to-end engagements: recon, exploitation, privilege escalation, reporting.' },
  { title: 'Secure Coding', desc: 'Building and reviewing code with a security-first mindset from the ground up.' },
  { title: 'Linux & Networking', desc: 'Comfortable at the command line, from packet captures to kernel-level detail.' },
  { title: 'Continuous Learning', desc: 'Always in a lab, a CTF, or a writeup — the field moves fast and so do I.' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Bash', level: 88 },
      { name: 'JavaScript', level: 78 },
      { name: 'PHP', level: 70 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Operating Systems',
    icon: 'Terminal',
    skills: [
      { name: 'Kali Linux', level: 95 },
      { name: 'Ubuntu', level: 88 },
      { name: 'Windows', level: 82 },
    ],
  },
  {
    title: 'Security Domains',
    icon: 'ShieldHalf',
    skills: [
      { name: 'Web Pentesting', level: 92 },
      { name: 'API Security', level: 85 },
      { name: 'Network Security', level: 84 },
      { name: 'Active Directory', level: 75 },
      { name: 'OSINT', level: 86 },
      { name: 'Digital Forensics', level: 70 },
      { name: 'Malware Analysis', level: 65 },
      { name: 'Threat Hunting', level: 72 },
    ],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Burp Suite', level: 92 },
      { name: 'Nmap', level: 90 },
      { name: 'Metasploit', level: 82 },
      { name: 'Wireshark', level: 80 },
      { name: 'Nessus', level: 75 },
      { name: 'OWASP ZAP', level: 85 },
      { name: 'Hydra', level: 78 },
      { name: 'Gobuster', level: 88 },
      { name: 'ffuf', level: 85 },
      { name: 'SQLMap', level: 84 },
      { name: 'Nikto', level: 76 },
      { name: 'John the Ripper', level: 74 },
      { name: 'Hashcat', level: 74 },
      { name: 'BloodHound', level: 70 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Subdomain Takeover Scanner',
    description:
      'A CLI tool that automates passive enumeration and CNAME fingerprinting to flag potentially vulnerable subdomains across large scopes.',
    image: '/images/projects/placeholder-1.svg',
    technologies: ['Python', 'DNS', 'Requests', 'Asyncio'],
    category: 'Tooling',
    section: 'Featured',
    github: 'https://github.com/yourusername/subtakeover-scanner',
    demo: '',
    date: '2026',
  },
  {
    id: 'proj-2',
    title: 'Web App Pentest Report — E-Commerce Client',
    description:
      'Full black-box assessment covering authentication flaws, IDOR, and stored XSS with a remediation-focused report.',
    image: '/images/projects/placeholder-2.svg',
    technologies: ['Burp Suite', 'OWASP Top 10', 'Manual Testing'],
    category: 'Web Pentest',
    section: 'Featured',
    github: '',
    demo: '',
    date: '2026',
  },
  {
    id: 'proj-3',
    title: 'Internal Network Segmentation Audit',
    description:
      'Simulated lateral movement inside a segmented lab environment to validate firewall rules and VLAN isolation.',
    image: '/images/projects/placeholder-3.svg',
    technologies: ['Nmap', 'Wireshark', 'pfSense'],
    category: 'Network Security',
    section: 'Labs',
    github: 'https://github.com/yourusername/network-seg-lab',
    date: '2025',
  },
  {
    id: 'proj-4',
    title: 'HTB — "Forest" Writeup',
    description:
      'Active Directory box exploited via anonymous LDAP bind, then privilege escalation through certificate services.',
    image: '/images/projects/placeholder-4.svg',
    technologies: ['Active Directory', 'BloodHound', 'Impacket'],
    category: 'Network Security',
    section: 'CTF Writeups',
    github: 'https://github.com/yourusername/htb-writeups',
    date: '2025',
  },
  {
    id: 'proj-5',
    title: 'OSINT Framework for Employee Footprinting',
    description:
      'Research project mapping open-source techniques for corporate attack-surface discovery via employee digital footprints.',
    image: '/images/projects/placeholder-5.svg',
    technologies: ['OSINT', 'Python', 'Recon-ng'],
    category: 'OSINT',
    section: 'Security Research',
    github: 'https://github.com/yourusername/osint-footprint',
    date: '2025',
  },
  {
    id: 'proj-6',
    title: 'ffuf Wordlist Contribution',
    description:
      'Contributed curated fuzzing wordlists and fixed edge-case bugs in a popular open-source fuzzing project.',
    image: '/images/projects/placeholder-6.svg',
    technologies: ['ffuf', 'Go', 'Wordlists'],
    category: 'Tooling',
    section: 'Open Source',
    github: 'https://github.com/yourusername/ffuf-contrib',
    date: '2025',
  },
];

export const projectSections = ['Featured', 'Labs', 'CTF Writeups', 'Security Research', 'Open Source'] as const;

export const achievements: Achievement[] = [
  { title: 'Rank #12 — National CTF Finals', issuer: 'National Cyber League', date: '2026', type: 'CTF' },
  { title: 'eJPT Certified', issuer: 'INE / eLearnSecurity', date: '2025', type: 'Certification' },
  { title: 'Winner — University Hackathon', issuer: 'CyberFest', date: '2025', type: 'Hackathon' },
  { title: 'Hall of Fame', issuer: 'Bugcrowd', date: '2025', type: 'Bug Bounty' },
  { title: 'Top 50 — HackTheBox University CTF', issuer: 'HackTheBox', date: '2025', type: 'CTF' },
  { title: 'Best Security Research Award', issuer: 'Local Security Meetup', date: '2024', type: 'Award' },
];

export const learningJourney: TimelineItem[] = [
  { year: '2021', title: 'First Steps', description: 'Discovered ethical hacking through CTFs and started learning Linux fundamentals.' },
  { year: '2022', title: 'Foundations', description: 'Built networking and scripting fundamentals; completed first vulnerable-machine walkthroughs.' },
  { year: '2023', title: 'Specialization', description: 'Focused on web application security and started participating in bug bounty programs.' },
  { year: '2024', title: 'Certification & Community', description: 'Earned eJPT, began publishing writeups, and joined the local security community.' },
  { year: '2025', title: 'Professional Growth', description: 'Delivered first client pentest engagements and expanded into Active Directory attacks.' },
  { year: '2026', title: 'Today', description: 'Working toward OSCP while contributing to open-source security tooling.' },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Bug Bounty Hunter',
    company: 'SecureNet Consulting',
    duration: '2023 — Present',
    location: 'Remote',
    points: [
      'Conducted black-box and gray-box web application assessments on various programs via the HackerOne platform.',
      'Authored professional-grade findings reports with CVSS scoring and remediation guidance.',
      'Collaborated with blue team counterparts on detection validation post-engagement.',
    ],
  },
  {
    role: 'Security Research Intern',
    company: 'CyberLabs',
    duration: '2024 — 2025',
    location: 'Hybrid',
    points: [
      'Researched emerging CVEs and reproduced proof-of-concept exploits in isolated lab environments.',
      'Built internal tooling to automate recon phases of engagements, cutting setup time significantly.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Cyber Security',
    institution: 'Coursera / Udemy / Google / other online platforms',
    duration: '2022 — 2026',
    location: 'Online Learning',
    description: 'Focused coursework in network security, cryptography, and systems programming.',
  },
];

export const certifications: Certification[] = [
  { name: 'Ethical Hacking For Professionals', shortName: 'EHP', issuer: 'bytecapsuleit', status: 'Completed', year: '2025', color: '#00ff9c' },
  { name: 'Practical Network Penetration Tester', shortName: 'PNPT', issuer: 'TCM Security', status: 'In Progress', color: '#00d9ff' },
  { name: 'Basic to Advanced Digital Forensics & Cyber Crime Investigation', shortName: 'DFIR', issuer: 'bytecapsuleit', status: 'Completed', year: '2025', color: '#00ff9c' },
  { name: 'CompTIA Security+', shortName: 'Security+', issuer: 'CompTIA', status: 'In Progress', color: '#00d9ff' },
  { name: 'Offensive Security Certified Professional', shortName: 'OSCP', issuer: 'Offensive Security', status: 'Future Goal', color: '#ffb800' },
  { name: 'Google Cybersecurity Certificate', shortName: 'Google Cybersecurity', issuer: 'Google', status: 'Completed', year: '2024', color: '#00ff9c' },
  { name: 'Cisco Introduction to Cybersecurity', shortName: 'Cisco', issuer: 'Cisco Networking Academy', status: 'Completed', year: '2023', color: '#00d9ff' },
];

export const stats = [
  { label: 'Projects', value: 24 },
  { label: 'Labs Completed', value: 120 },
  { label: 'CTFs Played', value: 35 },
  { label: 'GitHub Contributions', value: 850 },
  { label: 'Certifications', value: 3 },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Understanding IDOR: Beyond the Basics',
    excerpt: 'A practical look at how Insecure Direct Object References slip past code review and how to hunt for them systematically.',
    date: 'Jun 2026',
    readTime: '6 min read',
    tags: ['Web Security', 'OWASP'],
    slug: 'understanding-idor',
  },
  {
    id: 'blog-2',
    title: 'My Subdomain Enumeration Methodology',
    excerpt: 'The passive and active recon workflow I use before touching a single endpoint during bug bounty hunting.',
    date: 'May 2026',
    readTime: '8 min read',
    tags: ['Recon', 'Bug Bounty'],
    slug: 'subdomain-enum-methodology',
  },
  {
    id: 'blog-3',
    title: 'Active Directory Attacks for Beginners',
    excerpt: 'Breaking down Kerberoasting, LLMNR poisoning, and BloodHound analysis for people new to AD security.',
    date: 'Apr 2026',
    readTime: '10 min read',
    tags: ['Active Directory', 'Red Team'],
    slug: 'ad-attacks-for-beginners',
  },
];

export const terminalCommands: Record<string, string[]> = {
  whoami: ['Cyber Security Engineer'],
  help: [
    'Available commands:',
    '  whoami     - display current user role',
    '  skills     - list core skill areas',
    '  projects   - jump to projects section',
    '  contact    - jump to contact section',
    '  clear      - clear the terminal',
  ],
  skills: [
    'Programming   : Python, Bash, JavaScript, PHP, SQL',
    'Security      : Web Pentesting, API Security, Network Security, OSINT',
    'Tools         : Burp Suite, Nmap, Metasploit, Wireshark, SQLMap',
  ],
};

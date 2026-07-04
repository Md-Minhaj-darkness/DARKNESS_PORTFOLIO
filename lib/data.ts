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
  { title: 'Digital Forensics', desc: 'Digital evidence acquisition, analysis, recovery, and cybercrime investigation using industry-standard forensic methodologies.' },
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
      { name: 'Digital Forensics', level: 82 },
      { name: 'Malware Analysis', level: 72 },
      { name: 'Threat Hunting', level: 82 },
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
  { title: 'Hall of Fame & bug bounty', issuer: 'HackerOne', date: '2025', type: 'Bug Bounty' },
  { title: 'ACP Certified', issuer: 'APISEC', date: '2025', type: 'Certification' },
  { title: 'TryHackMe Lab Solve', issuer: 'TryHackMe', date: '2025', type: 'CTF' },
  { title: 'Hall of Fame', issuer: 'Bugcrowd', date: '2025', type: 'Bug Bounty' },
  { title: 'Hall of Fame', issuer: 'Self Host Program', date: '2025', type: 'Bug Bounty' },
  { title: 'Lab & CTF Solve', issuer: 'Root-me', date: '2024', type: 'CTF' },
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
    company: 'HackerOne Platform',
    duration: '2023 — Present',
    location: 'Remote',
    points: [
      'Conducted black-box and gray-box web application assessments on various programs via the HackerOne platform.',
      'Authored professional-grade findings reports with CVSS scoring and remediation guidance.',
      'Collaborated with blue team counterparts on detection validation post-engagement.',
    ],
  },
  {
    role: 'jr. Penetration Tester',
    company: 'bytecapsuleit',
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
  { name: 'APIsec Certified Practitioner', shortName: 'ACP', issuer: 'APISEC', status: 'Completed', year: '2025', color: '#00ff9c' },
  { name: 'Basic to Advanced Digital Forensics & Cyber Crime Investigation', shortName: 'DFIR', issuer: 'bytecapsuleit', status: 'Completed', year: '2025', color: '#00ff9c' },
  { name: 'Mastering Android Bug Bounties with Personal PoC', shortName: 'MABB', issuer: 'Udemy', status: 'Completed', year: '2025', color: '#00ff9c' },
  { name: 'Offensive Security Certified Professional', shortName: 'OSCP', issuer: 'Offensive Security', status: 'Future Goal', color: '#ffb800' },
  { name: 'Offensive API Exploitation', shortName: 'API Exploitation', issuer: 'Udemy', status: 'Completed', year: '2024', color: '#00ff9c' },
  { name: 'Practical Bug Bounty', shortName: 'PBB', issuer: 'TCM Security', status: 'Completed', year: '2023', color: '#00ff9c' },
  { name: 'Practical API Hacking', shortName: 'PAH', issuer: 'TCM Security', status: 'Completed', year: '2023', color: '#00ff9c' },
];

export const stats = [
  { label: 'Projects', value: 60 },
  { label: 'Labs Completed', value: 120 },
  { label: 'CTFs Played', value: 10 },
  { label: 'GitHub Contributions', value: 100 },
  { label: 'Certifications', value: 10 },
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
    content: [
      'Insecure Direct Object References (IDOR) remain one of the most common — and most overlooked — vulnerabilities in modern web applications. They happen when an application exposes a reference to an internal object, like a database ID, without properly verifying that the requesting user is actually authorized to access it.',
      '## Why IDOR slips past code review',
      'Most IDOR bugs are not the result of bad code in isolation. They emerge from the gap between authentication (who are you) and authorization (what are you allowed to touch). A developer might correctly check that a user is logged in, but forget to check that the specific record being requested belongs to that user.',
      '## A systematic hunting approach',
      'Start by mapping every endpoint that accepts an identifier — user IDs, order numbers, invoice references, file paths. For each one, test with a second low-privilege account: does changing the ID let you view or modify data that should belong to someone else? Pay special attention to endpoints that were added later in a project\'s life, since they are more likely to have been bolted on without revisiting the authorization model.',
      '## Practical tips',
      'Automate the boring part: capture a full authenticated session with Burp Suite, then replay each request with a second account\'s session token instead of your own. Any response that still returns 200 with real data is worth a closer look. Also check indirect references — sequential IDs are the obvious case, but UUIDs and encoded references can still be vulnerable if they are guessable or leaked elsewhere in the app.',
      'IDOR is simple to explain but easy to miss at scale. Treating authorization checks as a first-class concern — tested on every single object-returning endpoint — is the only reliable defense.',
    ],
  },
  {
    id: 'blog-2',
    title: 'My Subdomain Enumeration Methodology',
    excerpt: 'The passive and active recon workflow I use before touching a single endpoint during bug bounty hunting.',
    date: 'May 2026',
    readTime: '8 min read',
    tags: ['Recon', 'Bug Bounty'],
    slug: 'subdomain-enum-methodology',
     content: [
      'Recon is where most bug bounty engagements are won or lost. A wider, more accurate view of the attack surface almost always beats a narrower but "deeper" look at a handful of known hosts.',
      '## Passive enumeration first',
      'Before sending a single packet to the target, I pull everything available from public sources: certificate transparency logs, historical DNS records, and search-engine indexed subdomains. This builds an initial list with zero risk of tipping off the target.',
      '## Active enumeration, carefully',
      'Once the passive list is exhausted, I move to active techniques — DNS brute-forcing with curated wordlists and permutation scanning based on naming patterns I noticed in the passive results. Rate limiting matters here: aggressive scanning can trigger WAF blocks or, worse, violate the program\'s scope rules.',
      '## Fingerprinting and prioritization',
      'Every discovered host gets fingerprinted for its underlying technology and HTTP status. I specifically flag hosts with dangling CNAME records pointing to unclaimed cloud services, since those are prime subdomain takeover candidates.',
      'The goal of this whole phase isn\'t just a longer list of hostnames — it\'s a prioritized map of where the interesting attack surface actually lives.',
    ],
  },
  {
    id: 'blog-3',
    title: 'Active Directory Attacks for Beginners',
    excerpt: 'Breaking down Kerberoasting, LLMNR poisoning, and BloodHound analysis for people new to AD security.',
    date: 'Apr 2026',
    readTime: '10 min read',
    tags: ['Active Directory', 'Red Team'],
    slug: 'ad-attacks-for-beginners',
    content: [
      'Active Directory sits at the center of most enterprise networks, which makes it one of the highest-value targets in an internal penetration test.',
      '## LLMNR/NBT-NS poisoning',
      'Many Windows networks still have legacy name-resolution protocols enabled that will happily respond to broadcast queries. By listening on the network and responding to these broadcasts, an attacker can capture password hashes as machines try to authenticate to a machine that does not really exist.',
      '## Kerberoasting',
      'Any authenticated domain user can request a service ticket for any service account with a registered Service Principal Name. That ticket is encrypted with the service account\'s password hash, which means it can be extracted and cracked offline — no elevated privileges required to get started.',
      '## Mapping the domain with BloodHound',
      'Once a foothold and some credentials are in hand, BloodHound turns raw AD relationships into a graph you can actually reason about: group memberships, ACLs, and session data reveal attack paths to Domain Admin that would be nearly impossible to spot manually.',
      'These three techniques form a natural starting sequence for anyone learning AD security: get initial credentials, escalate through service accounts, then use graph analysis to find the shortest path to full domain compromise.',
    ],
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
    'Programming   : Python, Bash, JavaScript, PHP, SQL, Rust',
    'Security      : Web Pentesting, API Security, Network Security, OSINT',
    'Tools         : Burp Suite, Nmap, Metasploit, Wireshark, SQLMap, more...',
  ],
};

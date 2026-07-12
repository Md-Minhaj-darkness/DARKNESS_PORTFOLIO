export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'Web Pentest' | 'Network Security' | 'OSINT' | 'Malware Analysis' | 'Tooling' | 'Forensics';
  section: 'Featured' | 'Labs' | 'CTF Writeups' | 'Security Research' | 'Open Source';
  github?: string;
  demo?: string;
  date: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  type: 'CTF' | 'Certification' | 'Hackathon' | 'Bug Bounty' | 'Award';
  description?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description?: string;
}

export interface Certification {
  name: string;
  shortName: string;
  issuer: string;
  status: 'Completed' | 'In Progress' | 'Future Goal';
  year?: string;
  color: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  status: 'ACTIVE' | 'COMING SOON';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  content: string[];
}

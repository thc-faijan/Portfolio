import type { NavItem, SocialLink } from '../types/portfolio'

export const profile = {
  name: 'Faijan Ansari',
  role: 'Web Application Penetration Tester',
  positioning: 'Cybersecurity & Web Application Security',
  availability: 'Open to Web Application Security Opportunities',
  email: 'faijan.official.cs@gmail.com',
  intro:
    'I focus on understanding how web applications work, identifying security weaknesses through authorized testing, and building a stronger practical security mindset.',
}

export const navigation: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Writeups', href: '#writeups' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/thc-faijan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thc-faijan' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/ThcFaijan' },
  { label: 'Email', href: `mailto:${profile.email}` },
]

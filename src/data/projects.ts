export type ProjectStatus = 'completed' | 'in-progress' | 'archived'

export interface Project {
  id: string
  title: string
  shortDescription: string
  description: string
  category: string[]
  technologies: string[]
  features: string[]
  securityRelevance?: string
  github?: string
  live?: string
  documentation?: string
  image?: string
  featured?: boolean
  status: ProjectStatus
  mark: string
}

export const projectCategories = ['All', 'Cybersecurity', 'Security Tools', 'Python', 'Automation', 'Web'] as const
export type ProjectCategory = typeof projectCategories[number]

export const projects: Project[] = [
  {
    id: 'rapidscan',
    title: 'RapidScan',
    shortDescription: 'A security and reconnaissance-oriented port scanning project.',
    description: 'RapidScan is a security-focused project centered on port scanning and reconnaissance workflows.',
    category: ['Cybersecurity', 'Security Tools'],
    technologies: [],
    features: [],
    securityRelevance: 'Supports the early reconnaissance stage of an authorized security assessment.',
    status: 'completed',
    mark: 'RS',
  },
  {
    id: 'falcon',
    title: 'Falcon',
    shortDescription: 'A VAPT and security tool project.',
    description: 'Falcon is a security project focused on vulnerability assessment and penetration-testing concepts.',
    category: ['Cybersecurity', 'Security Tools'],
    technologies: [],
    features: [],
    securityRelevance: 'Connects to practical vulnerability assessment and security testing workflows.',
    status: 'completed',
    mark: 'FC',
  },
  {
    id: 'secure-password-generator',
    title: 'S3CUR3 PASS G3N',
    shortDescription: 'A Python-based secure password generation utility.',
    description: 'A configurable password generator built around secure random generation and practical password customization.',
    category: ['Python', 'Security Tools', 'Automation'],
    technologies: ['Python', 'GitHub Actions'],
    features: [
      'Secure random generation using Python secrets',
      'Customizable password length and character selection',
      'Minimum numbers and special characters',
      'Ambiguous-character filtering',
      'Password strength estimation',
      'Batch generation and clipboard support',
      'Input validation',
      'Automated tests and GitHub Actions CI',
    ],
    securityRelevance: 'Demonstrates secure randomness, input handling, testing, and practical security utility design.',
    status: 'completed',
    featured: true,
    mark: 'SP',
  },
]

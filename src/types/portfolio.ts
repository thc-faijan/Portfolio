export interface NavItem {
  label: string
  href: `#${string}`
}

export interface SocialLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  categories: string[]
  github?: string
  live?: string
  featured?: boolean
  image?: string
}

export interface Experience {
  id: string
  role: string
  company?: string
  location?: string
  date?: string
  description: string
  responsibilities?: string[]
  technologies?: string[]
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date?: string
  credentialId?: string
  credentialUrl?: string
  image?: string
  category: string
}

export interface Writeup {
  id: string
  title: string
  platform: string
  topic: string
  date?: string
  tags: string[]
  difficulty?: string
  summary: string
  url?: string
  featured?: boolean
}

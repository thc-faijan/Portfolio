export interface Experience {
  id: string
  role: string
  organization: string
  employmentType?: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  mentor?: string
  description: string
  responsibilities?: string[]
  technologies?: string[]
  links?: { website?: string; credential?: string }
}

export const experiences: Experience[] = [
  {
    id: 'shadowfox-internship',
    role: 'Cybersecurity Intern',
    organization: 'ShadowFox',
    employmentType: 'Internship',
    startDate: '1 May 2026',
    endDate: '31 May 2026',
    mentor: 'Kalai Maha',
    description: 'A focused cybersecurity internship involving practical reconnaissance and web security exercises.',
    responsibilities: ['Port scanning with Nmap', 'Directory enumeration with Feroxbuster'],
    technologies: ['Nmap', 'Feroxbuster'],
  },
]

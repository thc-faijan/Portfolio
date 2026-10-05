export type WriteupDifficulty = 'Easy' | 'Medium' | 'Hard'
export type WriteupStatus = 'Completed' | 'Published' | 'In Progress'

export interface Writeup {
  id: string
  title: string
  platform?: string
  category: string
  summary: string
  description?: string
  date?: string
  difficulty?: WriteupDifficulty
  tags: string[]
  technologies?: string[]
  url?: string
  githubUrl?: string
  featured?: boolean
  status?: WriteupStatus
  mark?: string
}

// Add only real, completed learning notes or research with their source URLs.
export const writeups: Writeup[] = []

export const writeupCategories = ['All', ...Array.from(new Set(writeups.map((writeup) => writeup.category)))] as const

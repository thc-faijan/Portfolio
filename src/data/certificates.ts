export interface Certificate {
  id: string
  title: string
  issuer: string
  category: string
  issueDate?: string
  credentialId?: string
  credentialUrl?: string
  image?: string
  description?: string
  verified?: boolean
  featured?: boolean
}

// Keep this list empty until certificate records and their source details are provided.
export const certificates: Certificate[] = []

export const certificateCategories = ['All', 'Cybersecurity', 'Networking', 'Programming', 'Other'] as const
export type CertificateCategory = typeof certificateCategories[number]

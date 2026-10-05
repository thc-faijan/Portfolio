import type { ReactNode } from 'react'
import { SectionHeading } from './SectionHeading'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="section container" id={id} aria-labelledby={`${id}-title`}>
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} description={description} />
      {children}
    </section>
  )
}

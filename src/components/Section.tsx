import type { ReactNode } from 'react'

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
      <div className="section-heading reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </section>
  )
}

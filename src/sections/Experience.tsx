import { useState } from 'react'
import { Section } from '../components/Section'
import { experiences, type Experience as ExperienceRecord } from '../data/experience'

function ExperienceCard({ item }: { item: ExperienceRecord }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <article className="experience-card panel">
      <div className="experience-marker" aria-hidden="true"><span /></div>
      <div className="experience-card-content">
        <div className="experience-card-top"><span className="experience-date">{item.startDate} — {item.current ? 'Currently' : item.endDate}</span>{item.current && <span className="current-badge"><span />Currently</span>}</div>
        <h3>{item.role}</h3>
        <p className="experience-org">{item.organization} <span>·</span> {item.employmentType}</p>
        <p className="experience-description">{item.description}</p>
        {item.responsibilities && <><h4>Key work</h4><ul className={`experience-list ${expanded ? 'is-expanded' : ''}`}>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>{item.responsibilities.length > 1 && <button className="text-button" type="button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'View details'} <span aria-hidden="true">{expanded ? '↑' : '↓'}</span></button>}</>}
        <div className="experience-meta">{item.mentor && <span>Mentor: {item.mentor}</span>}{item.technologies?.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </div>
    </article>
  )
}

export function Experience() {
  return <Section id="experience" eyebrow="05 / Timeline" title="Experience" description="A concise record of practical cybersecurity experience, internships, and relevant hands-on work."><div className="experience-timeline">{experiences.map((item) => <ExperienceCard key={item.id} item={item} />)}</div></Section>
}

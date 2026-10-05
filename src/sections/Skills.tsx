import { useMemo, useState } from 'react'
import { Section } from '../components/Section'
import { GlassCard } from '../components/ui'
import { skillCategories, skills, type SkillCategory } from '../data/skills'

export function Skills() {
  const [category, setCategory] = useState<SkillCategory>('All')
  const filteredSkills = useMemo(() => category === 'All' ? skills : skills.filter((skill) => skill.category === category), [category])

  return (
    <Section id="skills" eyebrow="02 / Capability" title="Skills & Expertise" description="A practical skill set focused on web application security, reconnaissance, vulnerability assessment, Linux, and security automation.">
      <div className="filter-bar" role="group" aria-label="Filter skills by category">
        {skillCategories.map((item) => <button className={`filter-chip ${category === item ? 'is-selected' : ''}`} type="button" aria-pressed={category === item} key={item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <div className="skills-grid" aria-live="polite">
        {filteredSkills.map((skill) => <GlassCard className="skill-card" key={skill.id}><span className="tool-mark" aria-hidden="true">{skill.mark}</span><div className="skill-card-body"><p className="skill-category">{skill.category}</p><h3>{skill.name}</h3><p className="skill-description">{skill.description}</p><div className="tag-list">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></GlassCard>)}
      </div>
    </Section>
  )
}

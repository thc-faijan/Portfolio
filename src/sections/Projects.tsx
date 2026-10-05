import { useEffect, useMemo, useRef, useState } from 'react'
import { Section } from '../components/Section'
import { projects, projectCategories, type Project, type ProjectCategory } from '../data/projects'

function ProjectPreview({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className={`project-preview ${featured ? 'project-preview-featured' : ''}`} aria-hidden="true">
      <div className="preview-top"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /><span>{project.title.toLowerCase().replaceAll(' ', '-')}.log</span></div>
      <div className="preview-body"><span className="prompt">~/security/projects$</span><strong>{project.mark} / {project.status.replace('-', ' ')}</strong><span className="preview-rule" /><span className="preview-block" /><span className="preview-block short" /></div>
      <span className="preview-label">{project.category[0]} / PROJECT PREVIEW</span>
    </div>
  )
}

function ProjectCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  return (
    <article className="project-card panel">
      <ProjectPreview project={project} />
      <div className="project-card-content">
        <div className="project-card-heading"><p className="project-category">{project.category.join(' · ')}</p><span className={`project-status status-${project.status}`}>{project.status.replace('-', ' ')}</span></div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="tag-list">{project.technologies.length ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : <span>Details being documented</span>}</div>
        <button className="project-details-link" type="button" onClick={() => onSelect(project)}>View project details <span aria-hidden="true">↗</span></button>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        const dialog = closeButtonRef.current?.closest('[role="dialog"]')
        const focusable = dialog?.querySelectorAll<HTMLElement>('button, a[href]')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', handleKeyDown) }
  }, [onClose])

  return <div className="project-dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><div className="project-dialog panel" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title"><button className="dialog-close" type="button" aria-label="Close project details" ref={closeButtonRef} onClick={onClose}>×</button><ProjectPreview project={project} featured /><div className="project-dialog-content"><p className="project-category">{project.category.join(' · ')}</p><h3 id="project-dialog-title">{project.title}</h3><h4>Overview</h4><p>{project.description}</p>{project.features.length > 0 && <><h4>Key features</h4><ul className="project-feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></>}{project.securityRelevance && <><h4>Security relevance</h4><p>{project.securityRelevance}</p></>}<h4>Technologies</h4><div className="tag-list">{project.technologies.length ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : <span>Not specified</span>}</div><div className="project-links">{project.github && <a className="button button-small" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.live && <a className="button button-small button-ghost" href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a>}{project.documentation && <a className="button button-small button-ghost" href={project.documentation} target="_blank" rel="noreferrer">Documentation ↗</a>}</div></div></div></div>
}

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory>('All')
  const [search, setSearch] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const lastFocusedElement = useRef<HTMLElement | null>(null)
  const visibleProjects = useMemo(() => {
    const query = search.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category.includes(category)
      const searchable = [project.title, project.description, project.shortDescription, ...project.technologies, ...project.category].join(' ').toLowerCase()
      return matchesCategory && (!query || searchable.includes(query))
    })
  }, [category, search])
  const openModal = (project: Project) => {
    lastFocusedElement.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setSelectedProject(project)
  }
  const closeModal = () => {
    setSelectedProject(null)
    requestAnimationFrame(() => lastFocusedElement.current?.focus())
  }

  return <>
    <Section id="projects" eyebrow="04 / Selected work" title="Featured Projects" description="A focused look at practical cybersecurity, automation, programming, and security-testing work.">
      <p className="project-kicker">BUILD <span>•</span> BREAK <span>•</span> SECURE</p>
      <div className="project-controls"><div className="project-filters" role="group" aria-label="Filter projects by category">{projectCategories.map((item) => <button className={`filter-chip ${category === item ? 'is-selected' : ''}`} type="button" aria-pressed={category === item} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="project-search"><span className="sr-only">Search projects</span><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects..." /></label></div>
      {visibleProjects.length > 0 ? <><div className="featured-projects">{visibleProjects.filter((project) => project.featured).map((project) => <article className="featured-project panel" key={project.id}><ProjectPreview project={project} featured /><div className="featured-project-copy"><p className="project-category">{project.category.join(' · ')}</p><h3>{project.title}</h3><p>{project.description}</p><ul className="project-feature-list">{project.features.slice(0, 5).map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><button className="button button-small" type="button" onClick={() => openModal(project)}>Explore project <span aria-hidden="true">↗</span></button></div></article>)}</div><div className="projects-grid">{visibleProjects.filter((project) => !project.featured).map((project) => <ProjectCard key={project.id} project={project} onSelect={openModal} />)}</div></> : <div className="empty-state panel"><span className="empty-icon">⌁</span><h3>No projects match your search.</h3><p>Try another term or reset the project filters.</p><button className="button button-small" type="button" onClick={() => { setCategory('All'); setSearch('') }}>Reset filters</button></div>}
    </Section>
    {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
  </>
}

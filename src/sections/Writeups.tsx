import { useMemo, useState } from 'react'
import { Section } from '../components/Section'
import { writeups, writeupCategories, type Writeup, type WriteupDifficulty } from '../data/writeups'

function ResearchPreview({ writeup, featured = false }: { writeup: Writeup; featured?: boolean }) {
  return (
    <div className={`research-preview ${featured ? 'research-preview-featured' : ''}`} aria-hidden="true">
      <div className="preview-top"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /><span>research-note.md</span></div>
      <div className="research-preview-body"><span className="prompt">/security/research$</span><strong>{writeup.mark ?? 'WR'} / NOTES</strong><span className="preview-rule" /><span className="preview-block" /><span className="preview-block short" /></div>
      <span className="preview-label">DOCUMENTED LEARNING</span>
    </div>
  )
}

function DifficultyBadge({ difficulty }: { difficulty?: WriteupDifficulty }) {
  return difficulty ? <span className={`difficulty-badge difficulty-${difficulty.toLowerCase()}`}>{difficulty}</span> : null
}

function WriteupCard({ writeup, onOpen }: { writeup: Writeup; onOpen: (writeup: Writeup) => void }) {
  const external = Boolean(writeup.url)
  return (
    <article className="writeup-card panel">
      <ResearchPreview writeup={writeup} />
      <div className="writeup-card-copy">
        <div className="writeup-meta"><span>{writeup.platform}</span><span>{writeup.category}</span><DifficultyBadge difficulty={writeup.difficulty} /></div>
        <h3>{writeup.title}</h3>
        <p>{writeup.summary}</p>
        <div className="tag-list">{writeup.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {external ? <a className="text-button writeup-action" href={writeup.url} target="_blank" rel="noopener noreferrer">Read writeup <span aria-hidden="true">↗</span></a> : <button className="text-button writeup-action" type="button" onClick={() => onOpen(writeup)}>View details <span aria-hidden="true">↗</span></button>}
      </div>
    </article>
  )
}

function WriteupDetails({ writeup, onClose }: { writeup: Writeup; onClose: () => void }) {
  return <div className="writeup-dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><div className="writeup-dialog panel" role="dialog" aria-modal="true" aria-labelledby="writeup-dialog-title"><button className="dialog-close" type="button" aria-label="Close writeup details" onClick={onClose}>×</button><ResearchPreview writeup={writeup} featured /><div className="writeup-dialog-copy"><div className="writeup-meta"><span>{writeup.platform}</span><span>{writeup.category}</span><DifficultyBadge difficulty={writeup.difficulty} /></div><h3 id="writeup-dialog-title">{writeup.title}</h3><p>{writeup.description ?? writeup.summary}</p>{writeup.date && <p className="writeup-date">{writeup.date}</p>}{writeup.technologies && writeup.technologies.length > 0 && <><h4>Technologies</h4><div className="tag-list">{writeup.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></>}{writeup.githubUrl && <a className="button button-small" href={writeup.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>}</div></div></div>
}

export function Writeups() {
  const [category, setCategory] = useState<string>('All')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Writeup | null>(null)
  const visible = useMemo(() => {
    const query = search.trim().toLowerCase()
    return writeups.filter((writeup) => {
      const matchesCategory = category === 'All' || writeup.category === category
      const searchable = [writeup.title, writeup.summary, writeup.category, writeup.platform ?? '', ...writeup.tags, ...(writeup.technologies ?? [])].join(' ').toLowerCase()
      return matchesCategory && (!query || searchable.includes(query))
    })
  }, [category, search])
  const featured = visible.find((writeup) => writeup.featured)
  const cards = visible.filter((writeup) => writeup.id !== featured?.id)

  return (
    <>
      <Section id="writeups" eyebrow="07 / Research" title="Security Writeups" description="Practical security learning, testing methodology, and documented findings—added only when there is real work to share.">
        <div className="writeup-controls">
          <div className="project-filters" role="group" aria-label="Filter writeups by category">
            {writeupCategories.map((item) => <button className={`filter-chip ${category === item ? 'is-selected' : ''}`} type="button" aria-pressed={category === item} key={item} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <label className="project-search writeup-search"><span className="sr-only">Search writeups</span><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search writeups..." />{search && <button type="button" aria-label="Clear writeup search" onClick={() => setSearch('')}>×</button>}</label>
        </div>
        {featured && <article className="featured-writeup panel"><ResearchPreview writeup={featured} featured /><div className="featured-writeup-copy"><div className="writeup-meta"><span>{featured.platform}</span><span>{featured.category}</span><DifficultyBadge difficulty={featured.difficulty} /></div><h3>{featured.title}</h3><p>{featured.summary}</p><div className="tag-list">{featured.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{featured.url ? <a className="button button-small" href={featured.url} target="_blank" rel="noopener noreferrer">Read writeup ↗</a> : <button className="button button-small" type="button" onClick={() => setSelected(featured)}>View details ↗</button>}</div></article>}
        {cards.length > 0 && <div className="writeups-grid">{cards.map((writeup) => <WriteupCard key={writeup.id} writeup={writeup} onOpen={setSelected} />)}</div>}
        {!visible.length && <div className="empty-state panel"><span className="empty-icon">⌁</span><h3>{search ? 'No writeups match your search.' : 'Security notes will appear here.'}</h3><p>{search ? 'Try another term or reset the filters.' : 'No real writeups or research records have been added yet.'}</p>{search && <button className="button button-small" type="button" onClick={() => { setSearch(''); setCategory('All') }}>Reset filters</button>}</div>}
      </Section>
      {selected && <WriteupDetails writeup={selected} onClose={() => setSelected(null)} />}
    </>
  )
}

import { useEffect, useState } from 'react'
import { Section } from '../components/Section'
import { securityTools, type SecurityTool } from '../data/tools'

const featured = ['burp-suite', 'nmap', 'ffuf', 'sqlmap', 'metasploit', 'python', 'bash']

function ToolCard({ tool, onSelect }: { tool: SecurityTool; onSelect: (tool: SecurityTool) => void }) {
  return <button className="arsenal-card panel" type="button" onClick={() => onSelect(tool)}><span className="tool-mark" aria-hidden="true">{tool.mark}</span><span className="arsenal-card-copy"><strong>{tool.name}</strong><span>{tool.category}</span></span><span className="focus-arrow" aria-hidden="true">↗</span></button>
}

export function SecurityArsenal() {
  const [selectedTool, setSelectedTool] = useState<SecurityTool | null>(null)
  useEffect(() => {
    if (!selectedTool) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedTool(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedTool])

  return (
    <>
      <section className="featured-tools container" aria-labelledby="featured-tools-title">
        <div className="featured-heading"><p className="card-label" id="featured-tools-title">Key tools</p><span>Selected from the working toolkit</span></div>
        <div className="featured-strip">{featured.map((id) => { const tool = securityTools.find((item) => item.id === id); return tool ? <button type="button" className="featured-tool" key={tool.id} onClick={() => setSelectedTool(tool)}><span className="tool-mark" aria-hidden="true">{tool.mark}</span>{tool.name}</button> : null })}</div>
      </section>
      <Section id="arsenal" eyebrow="03 / Toolkit" title="Security Arsenal" description="Tools used across reconnaissance, enumeration, web application testing, security labs, password testing, and automation.">
        <div className="arsenal-layout">
          <div className="arsenal-groups">{['Reconnaissance', 'Web Enumeration', 'Web Application Security', 'Exploitation / Security Testing', 'Password Security', 'Automation'].map((group) => <div className="arsenal-group" key={group}><p className="card-label">{group}</p><div className="arsenal-grid">{securityTools.filter((tool) => tool.category === group).map((tool) => <ToolCard key={tool.id} tool={tool} onSelect={setSelectedTool} />)}</div></div>)}</div>
          <div className="workflow-card panel"><p className="card-label">My Security Workflow</p><p className="workflow-note">A conceptual flow for turning an unknown surface into useful security evidence.</p><ol>{['Recon', 'Enumeration', 'Attack Surface Mapping', 'Vulnerability Assessment', 'Manual Testing', 'Validation', 'Documentation'].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol></div>
        </div>
      </Section>
      {selectedTool && <div className="tool-dialog-backdrop" role="presentation" onClick={() => setSelectedTool(null)}><div className="tool-dialog panel" role="dialog" aria-modal="true" aria-labelledby="tool-dialog-title" onClick={(event) => event.stopPropagation()}><button className="dialog-close" type="button" aria-label="Close tool details" onClick={() => setSelectedTool(null)}>×</button><span className="tool-mark" aria-hidden="true">{selectedTool.mark}</span><p className="card-label">{selectedTool.category}</p><h3 id="tool-dialog-title">{selectedTool.name}</h3><p>{selectedTool.description}</p><div className="tag-list">{selectedTool.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>}
    </>
  )
}

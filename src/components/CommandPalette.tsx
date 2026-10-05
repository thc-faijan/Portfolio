import { useEffect, useRef, useState } from 'react'
import { navigation, profile, socialLinks } from '../data/profile'
import type { Theme } from '../hooks/useTheme'

interface CommandPaletteProps {
  open: boolean
  theme: Theme
  onClose: () => void
  onToggleTheme: () => void
}

export function CommandPalette({ open, theme, onClose, onToggleTheme }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const commands = [
    ...navigation.map((item) => ({ label: `Go to ${item.label}`, action: () => { window.location.hash = item.href.slice(1); onClose() } })),
    { label: 'Open Terminal', action: () => { window.location.hash = 'terminal'; onClose() } },
    { label: 'Open GitHub', action: () => openProfile('GitHub') },
    { label: 'Open LinkedIn', action: () => openProfile('LinkedIn') },
    { label: 'Open TryHackMe', action: () => openProfile('TryHackMe') },
    { label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`, action: () => { onToggleTheme(); onClose() } },
  ]
  const filtered = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()))

  function openProfile(label: string) {
    const url = socialLinks.find((link) => link.label === label)?.href
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  useEffect(() => {
    if (!open) return
    setQuery('')
    inputRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null
  return <div className="command-palette-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><div className="command-palette panel" role="dialog" aria-modal="true" aria-labelledby="command-palette-title"><div className="command-palette-header"><div><p className="card-label">Quick navigation</p><h2 id="command-palette-title">What do you want to explore?</h2></div><button className="dialog-close" type="button" aria-label="Close command palette" onClick={onClose}>×</button></div><input ref={inputRef} className="command-palette-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sections or actions..." aria-label="Search commands" />{filtered.length ? <div className="command-list">{filtered.map((command) => <button type="button" key={command.label} onClick={command.action}>{command.label}<span aria-hidden="true">↗</span></button>)}</div> : <p className="command-empty">No matching actions.</p>}<p className="command-hint">Press <kbd>Esc</kbd> to close</p></div></div>
}

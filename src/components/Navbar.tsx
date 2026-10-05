import { useState } from 'react'
import { navigation } from '../data/profile'
import type { Theme } from '../hooks/useTheme'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Faijan Ansari home">
          <span className="brand-mark" aria-hidden="true">F</span>
          <span>Faijan Ansari</span>
        </a>
        <button className="icon-button menu-toggle" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? '×' : '☰'}
        </button>
        <div className={`nav-menu ${open ? 'is-open' : ''}`} id="site-menu">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? '☼' : '☾'}
          </button>
          <span className="shortcut" aria-label="Command palette shortcut">⌘/Ctrl K</span>
          <a className="button button-small" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk</a>
        </div>
      </nav>
    </header>
  )
}

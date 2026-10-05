import { useEffect, useRef, useState } from 'react'
import { navigation } from '../data/profile'
import type { Theme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const activeSection = useActiveSection(navigation.map((item) => item.href.slice(1)))

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button')
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    menuRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

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
        <div className={`nav-menu ${open ? 'is-open' : ''}`} id="site-menu" ref={menuRef} aria-hidden={!open && undefined}>
          {navigation.map((item) => (
            <a className={activeSection === item.href.slice(1) ? 'active' : ''} key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
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

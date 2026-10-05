import { Navbar } from './components/Navbar'
import { useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { SecurityArsenal } from './sections/SecurityArsenal'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Certificates } from './sections/Certificates'
import { Writeups } from './sections/Writeups'
import { Terminal } from './sections/Terminal'
import { Contact } from './sections/Contact'
import { ResumeCTA } from './sections/ResumeCTA'
import { Footer } from './components/Footer'
import { CommandPalette } from './components/CommandPalette'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandPaletteOpen(true)
      }
    }
    document.addEventListener('keydown', handleShortcut)
    return () => document.removeEventListener('keydown', handleShortcut)
  }, [])

  return (
    <div id="top">
      <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <main>
        <Hero />
        <About />

        <Skills />
        <SecurityArsenal />

        <Projects />

        <Experience />
        <Certificates />

        <Writeups />

        <Terminal toggleTheme={toggleTheme} />

        <Contact />
        <ResumeCTA />
      </main>
      <Footer />
      <CommandPalette open={commandPaletteOpen} theme={theme} onClose={() => setCommandPaletteOpen(false)} onToggleTheme={toggleTheme} />
    </div>
  )
}

export default App

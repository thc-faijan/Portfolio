import { Navbar } from './components/Navbar'
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

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
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
    </div>
  )
}

export default App

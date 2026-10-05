import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { profile, socialLinks } from './data/profile'
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

        <Section id="contact" eyebrow="08 / Connect" title="Start a conversation." description="For opportunities, collaboration, or a thoughtful security discussion.">
          <div className="contact-card panel"><div><p className="card-label">Email</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a></div><div className="social-links">{socialLinks.slice(0, 3).map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div>
        </Section>
      </main>
      <footer className="footer container"><span>© {new Date().getFullYear()} Faijan Ansari</span><span>Built with curiosity, security, and code.</span></footer>
    </div>
  )
}

export default App

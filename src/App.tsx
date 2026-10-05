import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { profile, socialLinks } from './data/profile'
import { useTheme } from './hooks/useTheme'
import { Hero } from './sections/Hero'
import { About } from './sections/About'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />

        <Section id="skills" eyebrow="02 / Toolkit" title="Tools & technologies" description="A data-driven space for capabilities and tools, without artificial proficiency percentages.">
          <div className="empty-state panel"><span className="empty-icon">+</span><h3>Skills are being documented</h3><p>Verified tools, techniques, and practical notes will be added here as the portfolio evolves.</p></div>
        </Section>

        <Section id="projects" eyebrow="03 / Work" title="Selected projects" description="Projects will be presented with the problem, approach, technology, and outcome clearly separated.">
          <div className="empty-state panel"><span className="empty-icon">⌁</span><h3>No projects added yet</h3><p>This section is ready for real project data. No project details have been invented.</p></div>
        </Section>

        <Section id="experience" eyebrow="04 / Timeline" title="Experience" description="A clear record of roles, learning, and responsibility—added only when verified.">
          <div className="empty-state panel"><span className="empty-icon">◷</span><h3>Experience data pending</h3><p>Professional history can be added in <code>src/data/portfolio.ts</code>.</p></div>
        </Section>

        <Section id="certificates" eyebrow="05 / Credentials" title="Certificates" description="Credentials will link to their source of truth, never to fabricated verification.">
          <div className="empty-state panel"><span className="empty-icon">◇</span><h3>No certificates added yet</h3><p>Certificate metadata and verification links will appear here when provided.</p></div>
        </Section>

        <Section id="writeups" eyebrow="06 / Research" title="Writeups & notes" description="A future home for security learning, research, and practical writeups.">
          <div className="empty-state panel"><span className="empty-icon">↗</span><h3>No writeups added yet</h3><p>Only completed and verified work will be published in this section.</p></div>
        </Section>

        <Section id="terminal" eyebrow="07 / Interface" title="A safe portfolio terminal" description="The interactive command surface will be added in the next implementation phase.">
          <div className="terminal-preview panel"><p><span className="prompt">faijan@portfolio:~$</span> help</p><p className="muted">Available commands will appear here.</p><span className="cursor" /></div>
        </Section>

        <Section id="contact" eyebrow="08 / Connect" title="Start a conversation." description="For opportunities, collaboration, or a thoughtful security discussion.">
          <div className="contact-card panel"><div><p className="card-label">Email</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a></div><div className="social-links">{socialLinks.slice(0, 3).map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div>
        </Section>
      </main>
      <footer className="footer container"><span>© {new Date().getFullYear()} Faijan Ansari</span><span>Built with curiosity, security, and code.</span></footer>
    </div>
  )
}

export default App

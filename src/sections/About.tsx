import { focusAreas } from '../data/portfolio'
import { profile } from '../data/profile'
import { Section } from '../components/Section'

const details = [
  { label: 'Education', value: 'BCA in Cyber Security', mark: 'ED' },
  { label: 'Focus', value: 'Web Application Security', mark: '01' },
  { label: 'Approach', value: 'Hands-on security testing', mark: '02' },
  { label: 'Environment', value: 'Linux · Kali Linux', mark: '03' },
]

export function About() {
  return (
    <Section id="about" eyebrow="01 / Profile" title="Curiosity backed by careful practice." description="Building a security practice around understanding systems, testing assumptions, and documenting what matters.">
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">I&apos;m Faijan, a cybersecurity learner focused on Web Application Penetration Testing and the security of modern web applications.</p>
          <p>My learning is grounded in hands-on security labs, reconnaissance, vulnerability assessment, and the careful use of security tooling. I&apos;m interested in how applications behave under pressure, where trust boundaries break, and how clear findings can support better remediation.</p>
          <p>Alongside testing, I&apos;m developing Python and Bash automation skills to make repeatable security work more thoughtful and efficient. This portfolio will grow with verified projects, writeups, and credentials as they become available.</p>
        </div>
        <div className="about-details panel" aria-label="Profile details">
          {details.map((detail) => <div className="detail-row" key={detail.label}><span className="detail-mark" aria-hidden="true">{detail.mark}</span><span><span className="detail-label">{detail.label}</span><strong>{detail.value}</strong></span></div>)}
        </div>
      </div>
      <div className="focus-section">
        <div className="focus-heading"><p className="card-label">Currently focused on</p><p className="focus-note">Learning areas, not professional claims.</p></div>
        <div className="focus-grid">{focusAreas.slice(0, 6).map((area, index) => <div className="focus-item panel" key={area}><span className="focus-index">0{index + 1}</span><span>{area.replace('OWASP-style ', '')}</span><span className="focus-arrow" aria-hidden="true">↗</span></div>)}</div>
      </div>
      <p className="sr-only">{profile.name} is pursuing a focused path in web application security.</p>
    </Section>
  )
}

import { profile } from '../data/profile'
import { SocialLinks } from '../components/SocialLinks'
import { StatusIndicator } from '../components/ui'

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-stagger hero-stagger-1">
          <StatusIndicator>{profile.availability}</StatusIndicator>
        </div>
        <div className="hero-stagger hero-stagger-2">
          <p className="eyebrow">Security-minded. Evidence-led.</p>
          <h1 id="hero-title">{profile.name}<span className="accent">.</span></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-positioning">{profile.positioning}</p>
        </div>
        <p className="hero-intro hero-stagger hero-stagger-3">{profile.intro}</p>
        <div className="hero-actions hero-stagger hero-stagger-4">
          <a className="button" href="#projects">View my work <span aria-hidden="true">↗</span></a>
          <a className="button button-ghost" href="#contact">Contact me</a>
          {profile.resumeUrl ? <a className="resume-link" href={profile.resumeUrl} download>Download resume</a> : <span className="resume-link resume-unavailable" title="Resume will be available soon">Resume coming soon</span>}
        </div>
        <div className="hero-stagger hero-stagger-5"><SocialLinks /></div>
      </div>
      <div className="hero-visual panel hero-stagger hero-stagger-6" aria-label="Portfolio security focus visual">
        <div className="panel-top"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /><span className="panel-label">security-focus.log</span><span className="panel-state">ONLINE</span></div>
        <div className="terminal-lines">
          <p><span className="prompt">faijan@security:~$</span> whoami</p>
          <p className="output">Faijan Ansari</p>
          <p className="output">Web Application Penetration Tester</p>
          <p><span className="prompt">faijan@security:~$</span> focus</p>
          <p className="output focus-line"><span>Web Security</span><span>Reconnaissance</span><span>VAPT</span><span>Security Research</span></p>
          <p><span className="prompt">faijan@security:~$</span> <span className="cursor" /></p>
        </div>
        <div className="hero-meta"><span>WAPT / 01</span><span>AUTHORIZED TESTING</span></div>
        <div className="signal-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
      </div>
    </section>
  )
}

import { profile } from '../data/profile'

export function ResumeCTA() {
  if (!profile.resumeUrl) return null
  return <section className="resume-cta container" aria-labelledby="resume-title"><div className="resume-cta-inner panel"><div><p className="card-label">Next step</p><h2 id="resume-title">Interested in my security work?</h2><p>Explore my experience, projects, credentials, and practical security work.</p></div><div className="resume-actions"><a className="button button-small" href={profile.resumeUrl} target="_blank" rel="noreferrer">View resume ↗</a><a className="button button-small button-ghost" href={profile.resumeUrl} download>Download resume</a></div></div></section>
}

import { useEffect, useState } from 'react'
import { navigation, profile, socialLinks } from '../data/profile'

export function Footer() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <footer className="site-footer"><div className="footer container"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">F</span><span>{profile.name}</span></a><p>{profile.role}</p></div><div className="footer-column"><p className="card-label">Navigate</p><nav className="footer-links" aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="#contact">Contact</a></nav></div><div className="footer-column"><p className="card-label">Elsewhere</p><div className="footer-links">{socialLinks.filter((link) => link.label !== 'Email').map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}</div></div></div><div className="footer-bottom container"><span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span><span>Built with React, TypeScript &amp; modern web technologies.</span></div>{showTop && <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑<span>Back to top</span></button>}</footer>
}

import { socialLinks } from '../data/profile'

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {socialLinks.map((link) => {
        const external = link.href.startsWith('http')
        return <a key={link.label} href={link.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{link.label}</a>
      })}
    </div>
  )
}

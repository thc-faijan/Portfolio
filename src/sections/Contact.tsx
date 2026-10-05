import { useState, type FormEvent } from 'react'
import { Section } from '../components/Section'
import { profile, socialLinks } from '../data/profile'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

const initialValues: FormValues = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setStatus('Copy is unavailable in this browser. Select the email address to copy it manually.')
    }
  }

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = 'Please enter a valid email address.'
    if (!values.subject.trim()) nextErrors.subject = 'Please add a subject.'
    if (values.message.trim().length < 10) nextErrors.message = 'Please write at least 10 characters.'
    return nextErrors
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    const body = `Name: ${values.name.trim()}\nSender Email: ${values.email.trim()}\n\n${values.message.trim()}`
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setStatus('Opening your email client…')
  }

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
  }

  return <Section id="contact" eyebrow="09 / Connect" title="Let’s talk security." description="Open to conversations about Web Application Security, penetration testing, Application Security, and relevant opportunities or collaborations."><div className="contact-layout"><div className="contact-info"><p className="contact-lead">Looking for a Web Application Security opportunity where I can contribute, learn, and grow through hands-on security testing.</p><div className="contact-email-card panel"><p className="card-label">Email</p><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="copy-button" type="button" onClick={copyEmail}>{copied ? 'Email copied' : 'Copy email'}</button></div></div><div className="contact-socials">{socialLinks.filter((link) => link.label !== 'Email').map((link) => <a className="contact-social" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"><span>{link.label}</span><span aria-hidden="true">↗</span></a>)}</div></div><form className="contact-form panel" onSubmit={submit} noValidate><div className="form-grid"><label>Name<input value={values.name} onChange={(event) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />{errors.name && <span className="form-error" id="contact-name-error">{errors.name}</span>}</label><label>Email<input type="email" value={values.email} onChange={(event) => update('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />{errors.email && <span className="form-error" id="contact-email-error">{errors.email}</span>}</label></div><label>Subject<input value={values.subject} onChange={(event) => update('subject', event.target.value)} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'contact-subject-error' : undefined} />{errors.subject && <span className="form-error" id="contact-subject-error">{errors.subject}</span>}</label><label>Message<textarea rows={5} value={values.message} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />{errors.message && <span className="form-error" id="contact-message-error">{errors.message}</span>}</label><button className="button" type="submit">Open email client <span aria-hidden="true">↗</span></button>{status && <p className="form-status" role="status">{status}</p>}</form></div></Section>
}

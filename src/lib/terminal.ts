import { certificates } from '../data/certificates'
import { experiences } from '../data/experience'
import { profile, socialLinks } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { securityTools } from '../data/tools'
import { writeups } from '../data/writeups'

export interface TerminalContext {
  toggleTheme: () => void
}

export interface TerminalCommand {
  name: string
  aliases?: string[]
  description: string
  execute: (args: string[], context: TerminalContext) => string[]
}

const findSocialUrl = (label: string) => socialLinks.find((link) => link.label.toLowerCase() === label)?.href

const openSocial = (label: string) => {
  const url = findSocialUrl(label)
  if (!url) return [`${label} link is not configured.`]
  window.open(url, '_blank', 'noopener,noreferrer')
  return [`Opening ${label} in a new tab.`]
}

const groupedSkills = () => {
  const groups = new Map<string, string[]>()
  skills.forEach((skill) => groups.set(skill.category, [...(groups.get(skill.category) ?? []), skill.name]))
  return Array.from(groups, ([category, names]) => [`[${category.toUpperCase()}]`, ...names.map((name) => `  ${name}`)]).flat()
}

const groupedTools = () => {
  const groups = new Map<string, string[]>()
  securityTools.forEach((tool) => groups.set(tool.category, [...(groups.get(tool.category) ?? []), tool.name]))
  return Array.from(groups, ([category, names]) => [`[${category.toUpperCase()}]`, ...names.map((name) => `  ${name}`)]).flat()
}

const listRecords = (label: string, records: Array<{ title?: string; name?: string; role?: string; organization?: string }>) => records.length
  ? [label, '──────', ...records.map((record, index) => `0${index + 1}  ${record.title ?? record.name ?? `${record.role} — ${record.organization}`}`)]
  : [`No ${label.toLowerCase()} have been added yet.`]

export function createTerminalCommands(): TerminalCommand[] {
  return [
    { name: 'help', aliases: ['?'], description: 'Show available commands', execute: () => ['Available commands:', '', 'about          About Faijan', 'whoami         Display profile information', 'skills         List security skills', 'tools          List security tools', 'projects       Show projects', 'experience     Show experience', 'certificates   Show certifications', 'writeups       Show security writeups', 'contact        Contact information', 'github         Open GitHub profile', 'linkedin       Open LinkedIn profile', 'tryhackme      Open TryHackMe profile', 'neofetch       Portfolio system information', 'ls             List portfolio sections', 'pwd            Show current location', 'date           Show current date', 'theme          Toggle portfolio theme', 'clear          Clear terminal'] },
    { name: 'whoami', description: 'Display profile information', execute: () => [`Name        : ${profile.name}`, `Role        : ${profile.role}`, `Focus       : ${profile.positioning}`] },
    { name: 'about', description: 'About Faijan', execute: () => [profile.intro, '', `Education   : ${profile.education}`] },
    { name: 'skills', description: 'List security skills', execute: () => groupedSkills() },
    { name: 'tools', description: 'List security tools', execute: () => groupedTools() },
    { name: 'projects', description: 'Show projects', execute: (args) => listRecords('Projects', args.includes('--featured') ? projects.filter((project) => project.featured) : projects) },
    { name: 'experience', description: 'Show experience', execute: () => experiences.length ? experiences.flatMap((item) => [`${item.role} — ${item.organization}`, `  ${item.startDate} — ${item.endDate ?? 'Currently'}`, ...(item.responsibilities ?? []).map((responsibility) => `  • ${responsibility}`)]) : ['No experience records have been added yet.'] },
    { name: 'certificates', description: 'Show certifications', execute: () => listRecords('Certificates', certificates.map((certificate) => ({ title: `${certificate.title} — ${certificate.issuer}` }))) },
    { name: 'writeups', description: 'Show security writeups', execute: () => writeups.length ? writeups.flatMap((writeup, index) => [`0${index + 1}  ${writeup.title}`, `    ${writeup.platform ?? 'Unspecified'} • ${writeup.category}`, ...(writeup.url ? [`    ${writeup.url}`] : [])]) : ['No security writeups have been added yet.'] },
    { name: 'contact', description: 'Contact information', execute: () => [`Email    : ${profile.email}`, ...socialLinks.filter((link) => link.label !== 'Email').map((link) => `${link.label.padEnd(9)}: ${link.href}`)] },
    { name: 'github', description: 'Open GitHub profile', execute: () => openSocial('github') },
    { name: 'linkedin', description: 'Open LinkedIn profile', execute: () => openSocial('linkedin') },
    { name: 'tryhackme', description: 'Open TryHackMe profile', execute: () => openSocial('tryhackme') },
    { name: 'ls', description: 'List portfolio sections', execute: () => ['about/', 'skills/', 'projects/', 'experience/', 'certificates/', 'writeups/', 'contact/'] },
    { name: 'pwd', description: 'Show current location', execute: () => ['/home/faijan/portfolio'] },
    { name: 'date', description: 'Show current date', execute: () => [new Date().toLocaleString()] },
    { name: 'theme', description: 'Toggle portfolio theme', execute: (_, context) => { context.toggleTheme(); return ['Theme preference toggled.'] } },
    { name: 'neofetch', description: 'Portfolio system information', execute: () => ['      F A I J A N', `Name     : ${profile.name}`, `Role     : ${profile.role}`, 'Focus    : WAPT / AppSec', 'Shell    : Portfolio terminal'] },
  ]
}

export function resolveTerminalCommand(commands: TerminalCommand[], input: string) {
  const [name, ...args] = input.trim().toLowerCase().split(/\s+/)
  return { command: commands.find((command) => command.name === name || command.aliases?.includes(name)), args, name }
}

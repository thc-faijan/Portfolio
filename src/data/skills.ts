export interface Skill {
  id: string
  name: string
  category: string
  description: string
  tags: string[]
  mark: string
}

export const skillCategories = [
  'All',
  'Web Security',
  'Recon',
  'Security Testing',
  'Programming',
  'Environment',
] as const

export type SkillCategory = typeof skillCategories[number]

export const skills: Skill[] = [
  { id: 'wapt', name: 'Web Application Penetration Testing', category: 'Web Security', description: 'Assessing application behavior and trust boundaries through authorized testing.', tags: ['WAPT', 'Manual testing'], mark: 'WA' },
  { id: 'vulnerability-assessment', name: 'Vulnerability Assessment', category: 'Web Security', description: 'Identifying, validating, and documenting security weaknesses with remediation in mind.', tags: ['Assessment', 'Validation'], mark: 'VA' },
  { id: 'authentication-testing', name: 'Authentication Testing', category: 'Web Security', description: 'Reviewing login, identity, and session flows for security assumptions.', tags: ['Auth', 'Sessions'], mark: 'AU' },
  { id: 'authorization-testing', name: 'Authorization Testing', category: 'Web Security', description: 'Testing access boundaries and whether actions are limited to the right users.', tags: ['Access control', 'Roles'], mark: 'AC' },
  { id: 'input-validation', name: 'Input Validation', category: 'Web Security', description: 'Examining how applications handle untrusted input across common entry points.', tags: ['Input', 'Web'], mark: 'IV' },
  { id: 'session-security', name: 'Session Security', category: 'Web Security', description: 'Exploring session lifecycle, cookie behavior, and logout expectations.', tags: ['Cookies', 'Lifecycle'], mark: 'SS' },
  { id: 'api-security', name: 'API Security', category: 'Web Security', description: 'Applying web security thinking to API routes, data access, and request flows.', tags: ['APIs', 'Requests'], mark: 'AP' },
  { id: 'owasp-methodology', name: 'OWASP-style Testing Methodology', category: 'Web Security', description: 'Using structured web security concepts to guide practical assessment work.', tags: ['Methodology', 'OWASP-style'], mark: 'OW' },
  { id: 'nmap', name: 'Nmap', category: 'Recon', description: 'Mapping hosts and services as part of a measured reconnaissance process.', tags: ['Network', 'Discovery'], mark: 'NM' },
  { id: 'subfinder', name: 'Subfinder', category: 'Recon', description: 'Supporting passive subdomain discovery and attack surface mapping.', tags: ['Subdomains', 'Passive'], mark: 'SF' },
  { id: 'httpx', name: 'HTTPX', category: 'Recon', description: 'Identifying live HTTP services and useful response metadata.', tags: ['HTTP', 'Probing'], mark: 'HX' },
  { id: 'ffuf', name: 'FFUF', category: 'Recon', description: 'Exploring web content and parameters in controlled enumeration labs.', tags: ['Fuzzing', 'Content discovery'], mark: 'FF' },
  { id: 'feroxbuster', name: 'Feroxbuster', category: 'Recon', description: 'Supporting recursive content discovery during authorized testing.', tags: ['Enumeration', 'Web'], mark: 'FB' },
  { id: 'dns-enumeration', name: 'DNS Enumeration', category: 'Recon', description: 'Reviewing DNS records and relationships that inform an application’s surface.', tags: ['DNS', 'Recon'], mark: 'DNS' },
  { id: 'subdomain-enumeration', name: 'Subdomain Enumeration', category: 'Recon', description: 'Organizing discovered subdomains for clearer surface mapping.', tags: ['Assets', 'Mapping'], mark: 'SD' },
  { id: 'burp-suite', name: 'Burp Suite', category: 'Security Testing', description: 'Working with HTTP traffic to understand, replay, and test web requests.', tags: ['Proxy', 'Repeater', 'Testing'], mark: 'BS' },
  { id: 'sqlmap', name: 'SQLmap', category: 'Security Testing', description: 'Using controlled lab scenarios to understand database-input testing workflows.', tags: ['SQL', 'Validation'], mark: 'SM' },
  { id: 'metasploit', name: 'Metasploit', category: 'Security Testing', description: 'Exploring security testing concepts in authorized lab environments.', tags: ['Modules', 'Labs'], mark: 'MS' },
  { id: 'hydra', name: 'Hydra', category: 'Security Testing', description: 'Learning password-security testing concepts through controlled exercises.', tags: ['Auth', 'Labs'], mark: 'HY' },
  { id: 'hashcat', name: 'Hashcat', category: 'Security Testing', description: 'Studying password hash security and recovery workflows in labs.', tags: ['Hashes', 'Password security'], mark: 'HC' },
  { id: 'john', name: 'John the Ripper', category: 'Security Testing', description: 'Understanding password auditing workflows in authorized environments.', tags: ['Auditing', 'Hashes'], mark: 'JR' },
  { id: 'python', name: 'Python', category: 'Programming', description: 'Building a foundation for security automation and repeatable analysis.', tags: ['Automation', 'Scripting'], mark: 'PY' },
  { id: 'bash', name: 'Bash', category: 'Programming', description: 'Using shell scripting to connect tools and streamline repeatable tasks.', tags: ['Shell', 'Automation'], mark: 'SH' },
  { id: 'shell-scripting', name: 'Shell Scripting', category: 'Programming', description: 'Creating small, focused helpers for security learning workflows.', tags: ['CLI', 'Workflow'], mark: 'CLI' },
  { id: 'git', name: 'Git', category: 'Programming', description: 'Tracking code and experiments with a clear, reviewable history.', tags: ['Version control'], mark: 'GT' },
  { id: 'github', name: 'GitHub', category: 'Programming', description: 'Maintaining public project work and a structured development workflow.', tags: ['Collaboration', 'Code'], mark: 'GH' },
  { id: 'linux', name: 'Linux', category: 'Environment', description: 'Working in a flexible environment for security tooling and experimentation.', tags: ['OS', 'CLI'], mark: 'LX' },
  { id: 'kali-linux', name: 'Kali Linux', category: 'Environment', description: 'Using a security-focused environment for hands-on labs and testing practice.', tags: ['Security OS', 'Labs'], mark: 'KL' },
  { id: 'virtualbox', name: 'VirtualBox', category: 'Environment', description: 'Keeping security lab environments isolated and reproducible.', tags: ['Virtualization', 'Labs'], mark: 'VB' },
]

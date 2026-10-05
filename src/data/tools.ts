export interface SecurityTool {
  id: string
  name: string
  category: string
  description: string
  tags: string[]
  mark: string
  website?: string
  documentation?: string
}

export const securityTools: SecurityTool[] = [
  { id: 'nmap', name: 'Nmap', category: 'Reconnaissance', description: 'Host and service discovery for mapping an authorized target surface.', tags: ['Discovery', 'Network'], mark: 'NM' },
  { id: 'subfinder', name: 'Subfinder', category: 'Reconnaissance', description: 'Passive subdomain discovery for organizing reconnaissance.', tags: ['Subdomains', 'Passive'], mark: 'SF' },
  { id: 'httpx', name: 'HTTPX', category: 'Reconnaissance', description: 'HTTP probing to identify live services and response details.', tags: ['HTTP', 'Probing'], mark: 'HX' },
  { id: 'ffuf', name: 'FFUF', category: 'Web Enumeration', description: 'Controlled content and parameter discovery for web testing labs.', tags: ['Fuzzing', 'Content'], mark: 'FF' },
  { id: 'feroxbuster', name: 'Feroxbuster', category: 'Web Enumeration', description: 'Recursive web content enumeration during authorized assessment.', tags: ['Enumeration', 'Web'], mark: 'FB' },
  { id: 'burp-suite', name: 'Burp Suite', category: 'Web Application Security', description: 'Intercepting, replaying, and understanding HTTP requests during testing.', tags: ['Proxy', 'Repeater', 'Manual'], mark: 'BS' },
  { id: 'sqlmap', name: 'SQLmap', category: 'Web Application Security', description: 'A controlled lab tool for learning database-input testing workflows.', tags: ['SQL', 'Testing'], mark: 'SM' },
  { id: 'metasploit', name: 'Metasploit', category: 'Exploitation / Security Testing', description: 'Exploring exploitation concepts within authorized security labs.', tags: ['Modules', 'Labs'], mark: 'MS' },
  { id: 'hydra', name: 'Hydra', category: 'Password Security', description: 'Studying authentication and password testing in controlled environments.', tags: ['Auth', 'Labs'], mark: 'HY' },
  { id: 'hashcat', name: 'Hashcat', category: 'Password Security', description: 'Learning how password hashes are assessed in authorized exercises.', tags: ['Hashes', 'Auditing'], mark: 'HC' },
  { id: 'john', name: 'John the Ripper', category: 'Password Security', description: 'Exploring password auditing workflows in security labs.', tags: ['Hashes', 'Security'], mark: 'JR' },
  { id: 'python', name: 'Python', category: 'Automation', description: 'Building small helpers for repeatable security analysis and workflows.', tags: ['Scripting', 'Automation'], mark: 'PY' },
  { id: 'bash', name: 'Bash', category: 'Automation', description: 'Connecting command-line tools into focused, repeatable tasks.', tags: ['Shell', 'CLI'], mark: 'SH' },
]

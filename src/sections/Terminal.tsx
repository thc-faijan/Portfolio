import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { Section } from '../components/Section'
import { createTerminalCommands, resolveTerminalCommand, type TerminalCommand } from '../lib/terminal'

interface TerminalEntry {
  command?: string
  lines: string[]
}

const quickCommands = ['help', 'whoami', 'skills', 'projects', 'writeups', 'contact']

export function Terminal({ toggleTheme }: { toggleTheme: () => void }) {
  const commands = useMemo(createTerminalCommands, [])
  const [entries, setEntries] = useState<TerminalEntry[]>([{ lines: ['Type "help" to explore this portfolio.'] }])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const outputRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const output = outputRef.current
    if (output) output.scrollTop = output.scrollHeight
  }, [entries])

  const execute = (rawInput: string) => {
    const value = rawInput.trim()
    if (!value) return
    const { command, args, name } = resolveTerminalCommand(commands, value)
    if (name === 'clear') {
      setEntries([])
      setInput('')
      return
    }
    const lines = command ? command.execute(args, { toggleTheme }) : [`Command not found: ${name}`, '', 'Type "help" to see available commands.']
    setEntries((current) => [...current, { command: value, lines }])
    setHistory((current) => [value, ...current.filter((item) => item !== value)].slice(0, 30))
    setHistoryIndex(-1)
    setInput('')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') execute(input)
    else if (event.key === 'ArrowUp') {
      event.preventDefault()
      const nextIndex = Math.min(historyIndex + 1, history.length - 1)
      setHistoryIndex(nextIndex)
      setInput(history[nextIndex] ?? '')
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextIndex = Math.max(historyIndex - 1, -1)
      setHistoryIndex(nextIndex)
      setInput(nextIndex === -1 ? '' : history[nextIndex])
    } else if (event.key === 'Tab') {
      event.preventDefault()
      const matches = commands.map((command: TerminalCommand) => command.name).filter((name) => name.startsWith(input.toLowerCase()))
      if (matches.length === 1) setInput(matches[0])
      else if (matches.length > 1) setEntries((current) => [...current, { command: input, lines: [`Possible commands: ${matches.join(', ')}`] }])
    } else if (event.key.toLowerCase() === 'l' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault()
      setEntries([])
    }
  }

  return <Section id="terminal" eyebrow="08 / Interface" title="Interactive Terminal" description="Explore the portfolio through a lightweight interactive command-line interface."><div className="quick-commands" aria-label="Quick terminal commands">{quickCommands.map((command) => <button type="button" key={command} onClick={() => execute(command)}>{command}</button>)}</div><div className="terminal-window panel" onClick={() => inputRef.current?.focus()}><div className="terminal-header"><span className="terminal-lights"><i className="dot red" /><i className="dot yellow" /><i className="dot green" /></span><span>faijan@portfolio</span><span className="terminal-status"><span />Interactive Terminal</span></div><div className="terminal-output" ref={outputRef} aria-live="polite">{entries.map((entry, index) => <div className="terminal-entry" key={`${entry.command ?? 'welcome'}-${index}`}>{entry.command && <p><span className="terminal-prompt">faijan@portfolio:~$</span> {entry.command}</p>}{entry.lines.map((line, lineIndex) => <p className="terminal-line" key={`${index}-${lineIndex}`}>{line || '\u00a0'}</p>)}</div>)}<form className="terminal-form" onSubmit={(event) => { event.preventDefault(); execute(input) }}><label className="sr-only" htmlFor="terminal-input">Terminal command</label><span className="terminal-prompt">faijan@portfolio:~$</span><input id="terminal-input" ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={handleKeyDown} autoComplete="off" spellCheck={false} aria-label="Terminal command input" /></form></div></div></Section>
}

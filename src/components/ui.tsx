import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return <button className={`button button-${variant} ${className}`.trim()} {...props}>{children}</button>
}

export function IconButton({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`icon-button ${className}`.trim()} {...props} />
}

export function Container({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`container ${className}`.trim()} {...props} />
}

export function GlassCard({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <article className={`panel ${className}`.trim()} {...props} />
}

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`badge ${className}`.trim()}>{children}</span>
}

export function StatusIndicator({ children }: { children: ReactNode }) {
  return <span className="status"><span aria-hidden="true" />{children}</span>
}

export function Divider() {
  return <hr className="divider" />
}

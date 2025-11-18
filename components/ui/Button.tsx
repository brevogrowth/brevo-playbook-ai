import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils/helpers'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  icon?: LucideIcon
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  onClick,
  href,
  icon: Icon,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-brevo-green text-white hover:bg-opacity-90',
    secondary: 'bg-brevo-cream text-gray-dark hover:bg-brevo-mint',
    outline: 'bg-white border-2 border-brevo-green text-brevo-green hover:bg-brevo-cream',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all',
    'focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        download
        aria-disabled={disabled}
        {...(disabled && { 'aria-disabled': true, tabIndex: -1 })}
      >
        {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={baseClasses} disabled={disabled} type={type}>
      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
      {children}
    </button>
  )
}

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils/helpers'

interface CardProps {
  title: string
  description?: string
  icon?: LucideIcon
  children?: React.ReactNode
  variant?: 'default' | 'highlight' | 'success'
  onClick?: () => void
}

export default function Card({
  title,
  description,
  icon: Icon,
  children,
  variant = 'default',
  onClick,
}: CardProps) {
  const variantClasses = {
    default: 'bg-white border-gray-200 hover:border-brevo-green',
    highlight: 'bg-brevo-cream border-brevo-mint hover:border-brevo-green',
    success: 'bg-brevo-mint border-brevo-green',
  }

  const baseClasses = cn(
    'border-2 rounded-xl p-6 transition-all',
    variantClasses[variant],
    onClick &&
      'cursor-pointer hover:shadow-lg focus-within:ring-2 focus-within:ring-brevo-green focus-within:ring-offset-2'
  )

  const Component = onClick ? 'button' : 'div'

  return (
    <Component
      className={baseClasses}
      onClick={onClick}
      {...(onClick && {
        type: 'button',
        role: 'button',
        tabIndex: 0,
      })}
    >
      {Icon && (
        <div className="mb-4" aria-hidden="true">
          <Icon className="h-8 w-8 text-brevo-green" />
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      {description && <p className="mb-4 text-gray-600">{description}</p>}
      {children}
    </Component>
  )
}

'use client'

import { useState, useId } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { clamp, isNonEmptyString } from '@/lib/utils/helpers'

interface ToggleProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  level?: 1 | 2 | 3
}

export default function Toggle({ title, children, defaultOpen = false, level = 1 }: ToggleProps) {
  // Hooks must be called before any returns
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const id = useId()
  const buttonId = `toggle-button-${id}`
  const contentId = `toggle-content-${id}`

  // Validate props after hooks
  if (!isNonEmptyString(title)) {
    console.warn('Toggle: title is required and must be a non-empty string')
    return null
  }

  // Ensure level is within bounds
  const validLevel = clamp(level, 1, 3) as 1 | 2 | 3

  const headingClasses = {
    1: 'text-2xl font-semibold',
    2: 'text-xl font-semibold',
    3: 'text-lg font-medium',
  }

  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
      <button
        id={buttonId}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full items-center justify-between p-4 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
      >
        <span className={headingClasses[validLevel]} role="heading" aria-level={validLevel + 1}>
          {title}
        </span>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 flex-shrink-0 text-brevo-green" aria-hidden="true" />
        ) : (
          <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        )}
      </button>
      {isOpen && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t border-gray-100 p-4 pt-0"
        >
          {children}
        </div>
      )}
    </div>
  )
}

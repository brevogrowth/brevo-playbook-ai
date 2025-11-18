'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { timing } from '@/lib/constants/design-tokens'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = 'text', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), timing.copyFeedbackDuration)
    } catch (error) {
      console.error('Failed to copy code:', error)
    }
  }

  return (
    <div
      className="my-4 overflow-hidden rounded-lg border border-gray-200"
      role="region"
      aria-label={title || 'Code block'}
    >
      {title && (
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 px-4 py-2">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <span className="text-xs uppercase text-gray-500">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto bg-gray-50 p-4">
          <code className="font-mono text-sm" lang={language}>
            {code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          aria-label={copied ? 'Code copied' : 'Copy code to clipboard'}
          className="absolute right-2 top-2 rounded-md border border-gray-200 bg-white p-2 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
        >
          {copied ? (
            <Check className="h-4 w-4 text-brevo-green" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4 text-gray-600" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  )
}

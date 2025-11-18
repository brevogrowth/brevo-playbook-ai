'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { debounce } from '@/lib/utils/helpers'
import { timing } from '@/lib/constants/design-tokens'

interface SearchBarProps {
  placeholder?: string
}

interface SearchResult {
  title: string
  path: string
  section: string
}

const searchableContent: SearchResult[] = [
  // Getting Started
  {
    title: 'Getting Started - Welcome & Overview',
    path: '/ai-marketing/getting-started',
    section: 'Getting Started',
  },
  {
    title: 'AI Marketing in 2025',
    path: '/ai-marketing/getting-started',
    section: 'Getting Started',
  },
  {
    title: 'Maturity Assessment',
    path: '/ai-marketing/getting-started',
    section: 'Getting Started',
  },
  {
    title: 'Your First Steps',
    path: '/ai-marketing/getting-started',
    section: 'Getting Started',
  },
  {
    title: '10 Essential Prompts',
    path: '/ai-marketing/getting-started',
    section: 'Getting Started',
  },

  // Strategic Foundations
  {
    title: 'Strategic Foundations - Business Case',
    path: '/ai-marketing/strategic-foundations',
    section: 'Strategic Foundations',
  },
  {
    title: 'ROI Framework',
    path: '/ai-marketing/strategic-foundations',
    section: 'Strategic Foundations',
  },
  {
    title: 'Use Case Prioritization',
    path: '/ai-marketing/strategic-foundations',
    section: 'Strategic Foundations',
  },
  {
    title: 'Convincing Stakeholders',
    path: '/ai-marketing/strategic-foundations',
    section: 'Strategic Foundations',
  },
  {
    title: 'Team Organization',
    path: '/ai-marketing/strategic-foundations',
    section: 'Strategic Foundations',
  },

  // Content & SEO
  {
    title: 'Content & SEO - Executive Summary',
    path: '/ai-marketing/content',
    section: 'Content & SEO',
  },
  {
    title: 'Content Quick Wins',
    path: '/ai-marketing/content',
    section: 'Content & SEO',
  },
  {
    title: 'Blog Post Generation',
    path: '/ai-marketing/content',
    section: 'Content & SEO',
  },
  {
    title: 'Product Descriptions',
    path: '/ai-marketing/content',
    section: 'Content & SEO',
  },
  {
    title: 'SEO Optimization',
    path: '/ai-marketing/content',
    section: 'Content & SEO',
  },
  {
    title: 'Content Repurposing',
    path: '/ai-marketing/content',
    section: 'Content & SEO',
  },

  // Other sections...
  {
    title: 'Paid Media',
    path: '/ai-marketing/paid-media',
    section: 'Paid Media',
  },
  { title: 'Email & Lifecycle', path: '/ai-marketing/email', section: 'Email' },
  {
    title: 'Creative & Design',
    path: '/ai-marketing/creative',
    section: 'Creative',
  },
  {
    title: 'Analytics & Insights',
    path: '/ai-marketing/analytics',
    section: 'Analytics',
  },
  {
    title: 'Skills & Mastery',
    path: '/ai-marketing/skills',
    section: 'Skills',
  },
  {
    title: 'Governance',
    path: '/ai-marketing/governance',
    section: 'Governance',
  },
  {
    title: 'Resources Hub',
    path: '/ai-marketing/resources',
    section: 'Resources',
  },
]

export default function SearchBar({ placeholder = 'Search the playbook...' }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Debounced search function
  const performSearch = useMemo(
    () =>
      debounce((searchQuery: string) => {
        if (searchQuery.trim().length < 2) {
          setResults([])
          setIsOpen(false)
          return
        }

        const filtered = searchableContent.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.section.toLowerCase().includes(searchQuery.toLowerCase())
        )

        setResults(filtered.slice(0, 8))
        setIsOpen(filtered.length > 0)
      }, timing.searchDebounce),
    []
  )

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    performSearch(searchQuery)
  }

  const handleResultClick = (path: string) => {
    router.push(path)
    setQuery('')
    setResults([])
    setIsOpen(false)
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <label htmlFor="playbook-search" className="sr-only">
          Search the playbook
        </label>
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          id="playbook-search"
          type="search"
          aria-label="Search playbook content"
          aria-autocomplete="list"
          aria-controls="search-results"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-white border-opacity-20 bg-white bg-opacity-10 py-2 pl-9 pr-9 text-sm text-white placeholder-gray-300 focus:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
        />
        {query && (
          <button
            onClick={clearSearch}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 transform rounded text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
          >
            <X className="h-3 w-3" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          id="search-results"
          role="listbox"
          aria-label="Search results"
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg"
        >
          <div className="p-2">
            <p className="px-3 py-2 text-xs font-semibold uppercase text-gray-500">
              {results.length} result{results.length !== 1 ? 's' : ''}
            </p>
            {results.map((result, index) => (
              <button
                key={index}
                role="option"
                aria-selected={false}
                onClick={() => handleResultClick(result.path)}
                className="w-full rounded px-3 py-2 text-left transition-colors hover:bg-gray-50 focus:bg-gray-100 focus:outline-none"
              >
                <p className="text-sm font-medium text-gray-900">{result.title}</p>
                <p className="text-xs text-gray-500">{result.section}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

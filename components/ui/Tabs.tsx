'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils/helpers'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  if (!tabs || tabs.length === 0) {
    return null
  }

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div
        className="mb-6 flex flex-wrap gap-2 border-b border-gray-200"
        role="tablist"
        aria-label="Content tabs"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                'rounded-t-lg px-4 py-2 text-sm font-medium transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2',
                isActive
                  ? 'bg-brevo-green text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id

          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`tabpanel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={isActive ? 'block' : 'hidden'}
            >
              {tab.content}
            </div>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchBar from '@/components/features/SearchBar'
import { Menu, X } from 'lucide-react'
import { NAVIGATION_SECTIONS } from '@/lib/constants/navigation'

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="sidebar-nav"
        className="fixed left-4 top-4 z-50 rounded-lg bg-brevo-green p-2 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 lg:hidden"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar-nav"
        aria-label="Main navigation"
        className={`fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto bg-brevo-green transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} `}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="mb-8 block rounded transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brevo-green"
            >
              <h2 className="mb-1 text-2xl font-bold text-white">Brevo</h2>
              <p className="text-sm font-medium text-brevo-mint">AI Marketing Playbook</p>
            </Link>

            <div className="mb-6">
              <SearchBar />
            </div>

            <nav aria-label="Playbook sections">
              <ul className="space-y-1">
                {NAVIGATION_SECTIONS.map((section) => {
                  const Icon = section.icon
                  const isActive = pathname === section.path

                  return (
                    <li key={section.id}>
                      <Link
                        href={section.path}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brevo-green ${
                          isActive
                            ? 'bg-white font-semibold text-brevo-green'
                            : 'text-white hover:bg-white hover:bg-opacity-10'
                        } `}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm">{section.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Footer */}
          <div className="mt-6 border-t border-white border-opacity-20 pt-4">
            <p className="mb-2 whitespace-nowrap text-center text-xs text-white text-opacity-70">
              Made with ❤️ by Brevo marketing team
            </p>
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded text-center text-xs text-brevo-mint transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brevo-green"
            >
              Discover Brevo Customer Platform
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

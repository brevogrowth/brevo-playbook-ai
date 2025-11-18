import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AI Marketing Playbook | Brevo',
  description: 'Complete guide to help marketers adopt AI in their daily marketing operations',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-brevo-green focus:p-4 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}

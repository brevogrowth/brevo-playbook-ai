import Sidebar from './Sidebar'
import Breadcrumb, { BreadcrumbItem } from './Breadcrumb'
import { spacing } from '@/lib/constants/design-tokens'

interface PageLayoutProps {
  children: React.ReactNode
  breadcrumb: BreadcrumbItem[]
}

export default function PageLayout({ children, breadcrumb }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main id="main-content" className="flex-1 lg:ml-64">
        <div className={`${spacing.contentMaxWidth} mx-auto px-4 py-8 sm:px-6 lg:px-8`}>
          <Breadcrumb items={breadcrumb} />
          {children}
        </div>
      </main>
    </div>
  )
}

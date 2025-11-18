import { cn } from '@/lib/utils/helpers'

interface SkeletonTextProps {
  lines?: number
  className?: string
}

export default function SkeletonText({ lines = 3, className }: SkeletonTextProps) {
  return (
    <div className={cn('animate-pulse space-y-2', className)} aria-busy="true" aria-live="polite">
      {Array.from({ length: lines }).map((_, index) => {
        const isLast = index === lines - 1
        const width = isLast ? 'w-2/3' : 'w-full'

        return <div key={index} className={cn('h-4 rounded bg-gray-200', width)}></div>
      })}
      <span className="sr-only">Loading text...</span>
    </div>
  )
}

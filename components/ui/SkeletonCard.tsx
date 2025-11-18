export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl border-2 p-6" aria-busy="true" aria-live="polite">
      <div className="mb-4 h-12 w-12 rounded bg-gray-200"></div>
      <div className="mb-2 h-6 w-3/4 rounded bg-gray-200"></div>
      <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>
      <div className="h-4 w-5/6 rounded bg-gray-200"></div>
      <span className="sr-only">Loading content...</span>
    </div>
  )
}

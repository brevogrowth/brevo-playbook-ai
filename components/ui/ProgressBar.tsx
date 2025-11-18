import { clamp } from '@/lib/utils/helpers'

interface ProgressBarProps {
  current: number
  total: number
  label?: string
}

export default function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percentage = clamp(Math.round((current / total) * 100), 0, 100)

  return (
    <div
      className="w-full"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={label || 'Progress'}
    >
      {label && (
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm text-gray-600">
            {current}/{total}
          </span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-brevo-green transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
          aria-hidden="true"
        />
      </div>
      {label && <p className="sr-only mt-1 text-xs text-gray-500">{percentage}% complete</p>}
    </div>
  )
}

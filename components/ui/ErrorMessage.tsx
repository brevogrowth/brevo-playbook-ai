import { AlertCircle } from 'lucide-react'
import Button from './Button'

interface ErrorMessageProps {
  message?: string
  retry?: () => void
  className?: string
}

export default function ErrorMessage({
  message = 'Something went wrong',
  retry,
  className = '',
}: ErrorMessageProps) {
  return (
    <div className={`rounded-lg border-l-4 border-red-500 bg-red-50 p-5 ${className}`} role="alert">
      <div className="flex items-start gap-3">
        <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" aria-hidden="true" />
        <div className="flex-1">
          <h5 className="mb-2 font-semibold text-red-800">Error</h5>
          <p className="mb-3 text-sm text-red-700">{message}</p>
          {retry && (
            <Button
              onClick={retry}
              variant="outline"
              size="sm"
              className="border-red-500 text-red-600 hover:bg-red-50"
            >
              Try again
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

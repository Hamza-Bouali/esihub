import { Loader2, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  message?: string
  className?: string
}

export default function Loading({ size = 'md', message, className }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  }

  return (
    <div className={cn(
      'flex flex-col items-center justify-center space-y-4',
      size === 'lg' && 'min-h-[200px]',
      className
    )}>
      <div className="relative">
        <div className={cn(
          'animate-spin rounded-full border-2 border-blue-200 border-t-blue-600',
          sizeClasses[size]
        )}>
          <Loader2 className={cn('opacity-0', sizeClasses[size])} />
        </div>
        {size === 'lg' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-blue-600 animate-pulse" />
          </div>
        )}
      </div>
      {message && (
        <p className={cn(
          'text-blue-600 font-medium',
          size === 'sm' && 'text-sm',
          size === 'md' && 'text-base',
          size === 'lg' && 'text-lg'
        )}>
          {message}
        </p>
      )}
    </div>
  )
}

// Full page loading component
export function PageLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="h-16 w-16 mx-auto animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-blue-600 animate-pulse" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">ESIHUB</h2>
          <p className="text-blue-200">Chargement en cours...</p>
        </div>
      </div>
    </div>
  )
}

// Skeleton loading components
export function SkeletonCard() {
  return (
    <div className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg p-6 space-y-4 animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-white/20 rounded w-3/4"></div>
          <div className="h-3 bg-white/20 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-white/20 rounded"></div>
        <div className="h-3 bg-white/20 rounded w-5/6"></div>
      </div>
    </div>
  )
}

export function SkeletonList({ items = 3 }: { items?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4 animate-pulse">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })

    // Log error to monitoring service
    if (process.env.NODE_ENV === 'production') {
      console.error('Error boundary caught an error:', error, errorInfo)
      // Add Sentry or other error reporting here
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error!} retry={this.handleRetry} />
      }

      return <DefaultErrorFallback error={this.state.error!} retry={this.handleRetry} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, retry }: { error: Error; retry: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
          <CardTitle className="text-white text-xl">Oups ! Une erreur s'est produite</CardTitle>
          <CardDescription className="text-blue-200">
            Nous nous excusons pour la gêne occasionnée. L'équipe technique a été notifiée.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left text-sm text-red-300 bg-red-900/20 p-3 rounded-md">
              <summary className="cursor-pointer mb-2 font-medium">Détails de l'erreur</summary>
              <pre className="whitespace-pre-wrap break-words text-xs">
                {error.name}: {error.message}
                {error.stack && `\n${error.stack}`}
              </pre>
            </details>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={retry}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              size="sm"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Réessayer
            </Button>
            <Button
              onClick={() => (window.location.href = '/')}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
              size="sm"
            >
              <Home className="h-4 w-4 mr-2" />
              Accueil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ErrorBoundary

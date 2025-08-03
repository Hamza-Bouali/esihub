import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const healthCheck = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      checks: {
        memory: {
          status: 'ok',
          usage: process.memoryUsage(),
        },
        // Add more health checks as needed (database, external services, etc.)
      },
    }

    return NextResponse.json(healthCheck, { status: 200 })
  } catch {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: 'Health check failed',
      },
      { status: 503 }
    )
  }
}

import { withSentryConfig } from '@sentry/nextjs'

// Import your existing Next.js config
import nextConfig from './next.config'

const sentryWebpackPluginOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map uploading logs during build
  silent: true,
  ...(process.env.SENTRY_ORG && { org: process.env.SENTRY_ORG }),
  ...(process.env.SENTRY_PROJECT && { project: process.env.SENTRY_PROJECT }),
}
// Only enable Sentry in production
const configWithSentry = process.env.NODE_ENV === 'production' 
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
  : nextConfig

export default configWithSentry

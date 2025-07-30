#!/bin/bash

# Production deployment script for ESIHUB
set -e

echo "🚀 Starting ESIHUB production deployment..."

# Check if required environment variables are set
required_vars=("DATABASE_URL" "NEXTAUTH_SECRET" "NEXT_PUBLIC_APP_URL")
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "❌ Error: $var environment variable is not set"
        exit 1
    fi
done

echo "✅ Environment variables validated"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Run database migrations (if applicable)
echo "🗄️ Running database migrations..."
# npm run db:migrate

# Build the application
echo "🔨 Building application..."
npm run build

# Run health check
echo "🏥 Running health check..."
npm run health-check || {
    echo "❌ Health check failed"
    exit 1
}

echo "✅ ESIHUB deployment completed successfully!"

# Optional: Clean up old builds
echo "🧹 Cleaning up..."
npm run clean

echo "🎉 Deployment finished!"

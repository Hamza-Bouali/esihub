/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/dashboard/admin/*',
    '/login',
    '/register',
    '/_next/*',
  ],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/courses'),
    await config.transform(config, '/grades'),
    await config.transform(config, '/logo-generator'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/help'),
    await config.transform(config, '/faq'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/admin/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority and change frequency
    let priority = 0.7
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.includes('/courses') || path.includes('/grades')) {
      priority = 0.9
      changefreq = 'daily'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}

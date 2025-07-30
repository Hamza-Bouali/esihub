import { env } from './utils'

export const seoConfig = {
  title: 'ESIHUB - Everything in one place',
  description: 'La plateforme étudiante officielle de l\'École des Sciences de l\'Information. Accédez à vos cours, notes, absences et services administratifs.',
  keywords: [
    'ESI',
    'École des Sciences de l\'Information',
    'plateforme étudiante',
    'Maroc',
    'université',
    'cours',
    'notes',
    'DOCESI',
    'NOTESI',
    'REPORTESI',
    'étudiants',
    'ressources pédagogiques'
  ],
  authors: [
    { name: 'Khalid KASSI', url: 'https://www.linkedin.com/in/Khalid9ASSI' },
    { name: 'Achraf SANI', url: 'mailto:achraf.sani@esi.ac.ma' },
    { name: 'Hamza BOUALI', url: 'https://www.linkedin.com/in/hamza-bouali/' }
  ],
  creator: 'ESIHUB Team',
  publisher: 'École des Sciences de l\'Information',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['ar_MA', 'en_US'],
    url: env.APP_URL,
    siteName: 'ESIHUB',
    title: 'ESIHUB - Everything in one place',
    description: 'La plateforme étudiante officielle de l\'École des Sciences de l\'Information',
    images: [
      {
        url: `${env.APP_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ESIHUB - Plateforme étudiante ESI',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESIHUB - Everything in one place',
    description: 'La plateforme étudiante officielle de l\'École des Sciences de l\'Information',
    images: [`${env.APP_URL}/twitter-image.png`],
    creator: '@esihub',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb',
      },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL(env.APP_URL),
  alternates: {
    canonical: env.APP_URL,
    languages: {
      'fr-FR': env.APP_URL,
      'ar-MA': `${env.APP_URL}/ar`,
      'en-US': `${env.APP_URL}/en`,
    },
  },
  other: {
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
  },
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
}) {
  const pageTitle = title ? `${title} | ${seoConfig.title}` : seoConfig.title
  const pageDescription = description || seoConfig.description
  const pageUrl = `${env.APP_URL}${path}`
  const pageImage = image || seoConfig.openGraph.images[0]?.url

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: seoConfig.keywords,
    authors: seoConfig.authors,
    creator: seoConfig.creator,
    publisher: seoConfig.publisher,
    robots: noIndex ? { index: false, follow: false } : seoConfig.robots,
    openGraph: {
      ...seoConfig.openGraph,
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      images: [
        {
          url: pageImage || '',
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      ...seoConfig.twitter,
      title: pageTitle,
      description: pageDescription,
      images: [pageImage || ''],
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': pageUrl,
        'ar-MA': `${pageUrl}/ar`,
        'en-US': `${pageUrl}/en`,
      },
    },
  }
}

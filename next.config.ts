import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import { ACTIVE_LOCALE_PATTERN } from './lib/i18n'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')
const localizedSource = (path = '') => `/:locale(${ACTIVE_LOCALE_PATTERN})${path}`

const retiredProductRedirects = [
  ...['en', 'fr', 'es'].map((locale) => ({
    source: `/${locale}/notion-templates`,
    destination: `/${locale}/playbooks`,
    permanent: true,
  })),
  ...['en', 'fr', 'es'].flatMap((locale) => [
    {
      source: `/${locale}/quality-audit`,
      destination: locale === 'fr' ? '/fr/formation' : `/${locale}/training`,
      permanent: true,
    },
    {
      source: `/${locale}/audit-qualite`,
      destination: locale === 'fr' ? '/fr/formation' : `/${locale}/training`,
      permanent: true,
    },
    {
      source: `/${locale}/bespoke-process`,
      destination: `/${locale}/playbooks`,
      permanent: true,
    },
    {
      source: `/${locale}/process-sur-mesure`,
      destination: `/${locale}/playbooks`,
      permanent: true,
    },
  ]),
  {
    source: '/en/fb-audit-training',
    destination: '/en/formation-fb-restaurant',
    permanent: true,
  },
  {
    source: '/fr/audit-formation-fb',
    destination: '/fr/formation-fb-restaurant',
    permanent: true,
  },
]

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    const marketingCache = [
      {
        key: 'Cache-Control',
        value: 'public, s-maxage=86400, stale-while-revalidate=604800',
      },
    ]
    const downloadableAssetHeaders = [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',
      },
      {
        key: 'X-Robots-Tag',
        value: 'noindex',
      },
    ]

    return [
      { source: '/robots.txt', headers: marketingCache },
      { source: '/sitemap.xml', headers: marketingCache },
      { source: '/downloads/:path*', headers: downloadableAssetHeaders },
      { source: '/downloads/housekeeping-checklists/:path*', headers: downloadableAssetHeaders },
      { source: '/downloads/checklists/:path*', headers: downloadableAssetHeaders },
      {
        source: localizedSource('/portal'),
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: localizedSource('/portal/:path*'),
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      { source: localizedSource(), headers: marketingCache },
      { source: localizedSource('/playbooks'), headers: marketingCache },
      { source: localizedSource('/playbooks/:id'), headers: marketingCache },
      { source: localizedSource('/training'), headers: marketingCache },
      { source: localizedSource('/formation'), headers: marketingCache },
    ]
  },
  async rewrites() {
    return [
      ...(process.env.NODE_ENV === 'development' ? [{
        source: '/:locale/preview/:path*',
        destination: '/:locale/:path*',
      }] : []),
      {
        source: '/ingest/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/array/:path*',
        destination: 'https://eu-assets.i.posthog.com/array/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*',
      },
    ]
  },
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // Root URL without locale: explicit 301 so Google stops looping on the middleware redirect
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
      {
        source: localizedSource('/downloads/:path*'),
        destination: '/downloads/:path*',
        permanent: true,
      },
      {
        source: '/en/formation',
        destination: '/en/training',
        permanent: false,
      },
      {
        source: '/fr/training',
        destination: '/fr/formation',
        permanent: false,
      },
      ...retiredProductRedirects,
    ]
  },
}

export default withNextIntl(nextConfig)

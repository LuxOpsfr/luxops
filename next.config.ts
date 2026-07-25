import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import { ACTIVE_LOCALE_PATTERN } from './lib/i18n'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')
const localizedSource = (path = '') => `/:locale(${ACTIVE_LOCALE_PATTERN})${path}`

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
      { source: localizedSource('/blog'), headers: marketingCache },
      { source: localizedSource('/blog/:slug*'), headers: marketingCache },
      { source: localizedSource('/playbooks'), headers: marketingCache },
      { source: localizedSource('/playbooks/:id'), headers: marketingCache },
      { source: localizedSource('/hotel-sop'), headers: marketingCache },
      { source: localizedSource('/front-office-sop'), headers: marketingCache },
      { source: localizedSource('/housekeeping-sop'), headers: marketingCache },
      { source: localizedSource('/hotel-checklist'), headers: marketingCache },
      { source: localizedSource('/hotel-front-office-checklist'), headers: marketingCache },
      { source: localizedSource('/hotel-housekeeping-checklist'), headers: marketingCache },
      { source: localizedSource('/hotel-night-audit-checklist'), headers: marketingCache },
      { source: localizedSource('/hotel-staff-training'), headers: marketingCache },
      { source: localizedSource('/formation-equipe-hoteliere'), headers: marketingCache },
      { source: localizedSource('/formation-reception-hotel'), headers: marketingCache },
      { source: localizedSource('/formation-housekeeping-hotel'), headers: marketingCache },
      { source: localizedSource('/formation-fb-restaurant'), headers: marketingCache },
      { source: localizedSource('/formation-pre-ouverture'), headers: marketingCache },
      { source: localizedSource('/formation-chefs-de-service'), headers: marketingCache },
      { source: localizedSource('/training'), headers: marketingCache },
      { source: localizedSource('/formation'), headers: marketingCache },
      { source: localizedSource('/quality-audit'), headers: marketingCache },
      { source: localizedSource('/audit-qualite'), headers: marketingCache },
      { source: localizedSource('/bespoke-process'), headers: marketingCache },
      { source: localizedSource('/process-sur-mesure'), headers: marketingCache },
      { source: localizedSource('/free-hotel-procedures'), headers: marketingCache },
      { source: localizedSource('/hotel-fb-sop'), headers: marketingCache },
      { source: localizedSource('/food-and-beverage-service-sequence'), headers: marketingCache },
      { source: localizedSource('/sequence-service-restaurant-hotel'), headers: marketingCache },
      { source: localizedSource('/hotel-room-service-checklist'), headers: marketingCache },
      { source: localizedSource('/checklist-room-service-hotel'), headers: marketingCache },
      { source: localizedSource('/restaurant-opening-checklist'), headers: marketingCache },
      { source: localizedSource('/checklist-ouverture-restaurant'), headers: marketingCache },
      { source: localizedSource('/bar-opening-checklist'), headers: marketingCache },
      { source: localizedSource('/checklist-ouverture-bar'), headers: marketingCache },
      { source: localizedSource('/restaurant-closing-checklist'), headers: marketingCache },
      { source: localizedSource('/checklist-fermeture-restaurant'), headers: marketingCache },
      { source: localizedSource('/about'), headers: marketingCache },
      { source: localizedSource('/contact'), headers: marketingCache },
      { source: localizedSource('/resources'), headers: marketingCache },
    ]
  },
  async rewrites() {
    return [
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
        source: '/en/process-sur-mesure',
        destination: '/en/bespoke-process',
        permanent: true,
      },
      {
        source: '/en/formation',
        destination: '/en/training',
        permanent: true,
      },
      {
        source: '/en/audit-qualite',
        destination: '/en/quality-audit',
        permanent: true,
      },
      {
        source: '/fr/training',
        destination: '/fr/formation',
        permanent: true,
      },
      {
        source: '/fr/quality-audit',
        destination: '/fr/audit-qualite',
        permanent: true,
      },
      {
        source: '/en/hotel-staff-training',
        destination: '/en/formation-equipe-hoteliere',
        permanent: true,
      },
      {
        source: '/fr/hotel-staff-training',
        destination: '/fr/formation-equipe-hoteliere',
        permanent: true,
      },
      // Duplicate content: Google chose hotel-front-office-sop as canonical
      {
        source: '/en/blog/hotel-front-office-procedures',
        destination: '/en/blog/hotel-front-office-sop',
        permanent: true,
      },
      {
        source: '/fr/blog/hotel-front-office-procedures',
        destination: '/fr/blog/hotel-front-office-sop',
        permanent: true,
      },
      // Duplicate content: blog article duplicates standalone optimized page
      {
        source: '/en/blog/hotel-housekeeping-checklist',
        destination: '/en/hotel-housekeeping-checklist',
        permanent: true,
      },
      {
        source: '/fr/blog/hotel-housekeeping-checklist',
        destination: '/fr/hotel-housekeeping-checklist',
        permanent: true,
      },
      // No-locale URLs found by Googlebot: make redirect explicit and permanent
      {
        source: '/blog/hotel-room-service-sops',
        destination: '/en/blog/hotel-room-service-sops',
        permanent: true,
      },
      {
        source: '/blog/hotel-fb-restaurant-procedures',
        destination: '/en/blog/hotel-fb-restaurant-procedures',
        permanent: true,
      },
      // F&B SEO cluster: consolidate language variants and older checklist URLs
      {
        source: '/en/checklist-ouverture-restaurant',
        destination: '/en/restaurant-opening-checklist',
        permanent: true,
      },
      {
        source: '/fr/restaurant-opening-checklist',
        destination: '/fr/checklist-ouverture-restaurant',
        permanent: true,
      },
      {
        source: '/en/hotel-restaurant-opening-checklist',
        destination: '/en/restaurant-opening-checklist',
        permanent: true,
      },
      {
        source: '/fr/hotel-restaurant-opening-checklist',
        destination: '/fr/checklist-ouverture-restaurant',
        permanent: true,
      },
      {
        source: '/en/checklist-ouverture-restaurant-hotel',
        destination: '/en/restaurant-opening-checklist',
        permanent: true,
      },
      {
        source: '/fr/checklist-ouverture-restaurant-hotel',
        destination: '/fr/checklist-ouverture-restaurant',
        permanent: true,
      },
      {
        source: '/en/checklist-ouverture-bar',
        destination: '/en/bar-opening-checklist',
        permanent: true,
      },
      {
        source: '/fr/bar-opening-checklist',
        destination: '/fr/checklist-ouverture-bar',
        permanent: true,
      },
      {
        source: '/en/checklist-fermeture-restaurant',
        destination: '/en/restaurant-closing-checklist',
        permanent: true,
      },
      {
        source: '/fr/restaurant-closing-checklist',
        destination: '/fr/checklist-fermeture-restaurant',
        permanent: true,
      },
      {
        source: '/en/sequence-service-restaurant-hotel',
        destination: '/en/food-and-beverage-service-sequence',
        permanent: true,
      },
      {
        source: '/fr/food-and-beverage-service-sequence',
        destination: '/fr/sequence-service-restaurant-hotel',
        permanent: true,
      },
      {
        source: '/en/checklist-room-service-hotel',
        destination: '/en/hotel-room-service-checklist',
        permanent: true,
      },
      {
        source: '/fr/hotel-room-service-checklist',
        destination: '/fr/checklist-room-service-hotel',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)

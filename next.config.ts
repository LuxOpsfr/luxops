import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

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
        source: '/:locale(en|fr)/portal',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/:locale(en|fr)/portal/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      { source: '/:locale(en|fr)', headers: marketingCache },
      { source: '/:locale(en|fr)/blog', headers: marketingCache },
      { source: '/:locale(en|fr)/blog/:slug*', headers: marketingCache },
      { source: '/:locale(en|fr)/playbooks', headers: marketingCache },
      { source: '/:locale(en|fr)/playbooks/:id', headers: marketingCache },
      { source: '/:locale(en|fr)/hotel-sop', headers: marketingCache },
      { source: '/:locale(en|fr)/front-office-sop', headers: marketingCache },
      { source: '/:locale(en|fr)/housekeeping-sop', headers: marketingCache },
      { source: '/:locale(en|fr)/hotel-checklist', headers: marketingCache },
      { source: '/:locale(en|fr)/hotel-front-office-checklist', headers: marketingCache },
      { source: '/:locale(en|fr)/hotel-housekeeping-checklist', headers: marketingCache },
      { source: '/:locale(en|fr)/hotel-night-audit-checklist', headers: marketingCache },
      { source: '/:locale(en|fr)/hotel-staff-training', headers: marketingCache },
      { source: '/:locale(en|fr)/formation-equipe-hoteliere', headers: marketingCache },
      { source: '/:locale(en|fr)/formation-reception-hotel', headers: marketingCache },
      { source: '/:locale(en|fr)/formation-housekeeping-hotel', headers: marketingCache },
      { source: '/:locale(en|fr)/formation-fb-restaurant', headers: marketingCache },
      { source: '/:locale(en|fr)/formation-pre-ouverture', headers: marketingCache },
      { source: '/:locale(en|fr)/formation-chefs-de-service', headers: marketingCache },
      { source: '/:locale(en|fr)/training', headers: marketingCache },
      { source: '/:locale(en|fr)/formation', headers: marketingCache },
      { source: '/:locale(en|fr)/quality-audit', headers: marketingCache },
      { source: '/:locale(en|fr)/audit-qualite', headers: marketingCache },
      { source: '/:locale(en|fr)/bespoke-process', headers: marketingCache },
      { source: '/:locale(en|fr)/process-sur-mesure', headers: marketingCache },
      { source: '/:locale(en|fr)/free-hotel-procedures', headers: marketingCache },
      { source: '/:locale(en|fr)/hotel-fb-sop', headers: marketingCache },
      { source: '/:locale(en|fr)/food-and-beverage-service-sequence', headers: marketingCache },
      { source: '/:locale(en|fr)/sequence-service-restaurant-hotel', headers: marketingCache },
      { source: '/:locale(en|fr)/hotel-room-service-checklist', headers: marketingCache },
      { source: '/:locale(en|fr)/checklist-room-service-hotel', headers: marketingCache },
      { source: '/:locale(en|fr)/restaurant-opening-checklist', headers: marketingCache },
      { source: '/:locale(en|fr)/checklist-ouverture-restaurant', headers: marketingCache },
      { source: '/:locale(en|fr)/bar-opening-checklist', headers: marketingCache },
      { source: '/:locale(en|fr)/checklist-ouverture-bar', headers: marketingCache },
      { source: '/:locale(en|fr)/restaurant-closing-checklist', headers: marketingCache },
      { source: '/:locale(en|fr)/checklist-fermeture-restaurant', headers: marketingCache },
      { source: '/:locale(en|fr)/about', headers: marketingCache },
      { source: '/:locale(en|fr)/contact', headers: marketingCache },
      { source: '/:locale(en|fr)/resources', headers: marketingCache },
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
        source: '/:locale(en|fr)/downloads/:path*',
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

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
  async redirects() {
    return [
      // Root URL without locale — explicit 301 so Google stops looping on the middleware redirect
      {
        source: '/',
        destination: '/en',
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
      // No-locale URLs found by Googlebot — make redirect explicit and permanent
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
    ]
  },
}

export default withNextIntl(nextConfig)

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
    ]
  },
}

export default withNextIntl(nextConfig)

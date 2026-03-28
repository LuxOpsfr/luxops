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
    ]
  },
}

export default withNextIntl(nextConfig)

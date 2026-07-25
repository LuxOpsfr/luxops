import { SITE_URL, toActiveLocale } from './i18n'
import { alternatesForPath, localizedUrl } from './localized-routes'

export { SITE_URL }

export function localizedPath(locale: string, path = '') {
  return localizedUrl(locale, path || '/')
}

export function alternatesFor(path: string, xDefaultLocale = 'en') {
  return alternatesForPath(path, toActiveLocale(xDefaultLocale))
}

export function organizationSchema(locale: string) {
  const safeLocale = toActiveLocale(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'LuxOps',
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description:
      safeLocale === 'fr'
        ? "Playbooks, SOPs, audits et formations pour structurer les opérations des hôtels haut de gamme."
        : safeLocale === 'es'
          ? 'Playbooks, SOPs, auditorías de calidad y formación en el hotel para estructurar las operaciones de equipos hoteleros high-end.'
        : 'Hotel operations playbooks, SOPs, quality audits and on-property training for high-end hospitality teams.',
    sameAs: [],
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Place', name: 'Europe' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    knowsAbout: [
      'Hotel standard operating procedures',
      'Hotel operations management',
      'Housekeeping SOP',
      'Front office procedures',
      'Hotel staff training',
      'Hotel quality audit',
    ],
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

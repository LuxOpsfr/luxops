export const SITE_URL = 'https://www.luxops.fr'

export function localizedPath(locale: string, path = '') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}/${locale}${normalizedPath === '/' ? '' : normalizedPath}`
}

export function alternatesFor(path: string, xDefaultLocale = 'en') {
  return {
    en: localizedPath('en', path),
    fr: localizedPath('fr', path),
    'x-default': localizedPath(xDefaultLocale, path),
  }
}

export function organizationSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'LuxOps',
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description:
      locale === 'fr'
        ? "Playbooks, SOPs, audits et formations pour structurer les opérations des hôtels haut de gamme."
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

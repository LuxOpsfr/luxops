import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { AuditContent } from '../audit-qualite/page'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const auditMetadata = {
  en: {
    title: 'On-Site Hotel Quality Audit | LuxOps',
    description:
      'On-site operational quality audit to identify standards gaps, service friction points and practical improvement priorities across hotel departments.',
  },
  fr: {
    title: 'Audit qualité hôtelier sur site | LuxOps',
    description:
      'Audit qualité opérationnel sur site pour identifier les écarts de standards, les points de friction entre services et les priorités d’action à corriger.',
  },
  es: {
    title: 'Auditoría de calidad hotelera en sitio | LuxOps',
    description:
      'Auditoría operativa en sitio para identificar brechas de estándares, fricciones de servicio y prioridades de mejora prácticas entre departamentos hoteleros.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = auditMetadata[activeLocale as keyof typeof auditMetadata] ?? auditMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('qualityAudit', activeLocale),
      languages: alternatesForRoute('qualityAudit'),
    },
  }
}

export default async function QualityAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/audit-qualite')
  return <AuditContent locale={locale} />
}

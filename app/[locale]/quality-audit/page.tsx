import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { AuditContent } from '../audit-qualite/page'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'On-Site Hotel Quality Audit | LuxOps'
      : 'Audit qualité hôtelier sur site | LuxOps',
    description: isEn
      ? 'On-site operational quality audit to identify standards gaps, service friction points and practical improvement priorities across hotel departments.'
      : 'Audit qualité opérationnel sur site pour identifier les écarts de standards, les points de friction entre services et les priorités d’action à corriger.',
    alternates: {
      canonical: isEn ? 'https://www.luxops.fr/en/quality-audit' : 'https://www.luxops.fr/fr/audit-qualite',
      languages: {
        'en': 'https://www.luxops.fr/en/quality-audit',
        'fr': 'https://www.luxops.fr/fr/audit-qualite',
        'x-default': 'https://www.luxops.fr/en/quality-audit',
      },
    },
  }
}

export default async function QualityAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/audit-qualite')
  return <AuditContent locale={locale} />
}

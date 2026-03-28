import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { AuditContent } from '../audit-qualite/page'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Quality Audit | Operational Gap Analysis & Improvement Roadmap | LuxOps'
      : 'Audit Qualité Hôtelier | Analyse des Écarts Opérationnels et Feuille de Route | LuxOps',
    description: isEn
      ? 'On-site hotel audit covering 100+ operational criteria. Clear gap analysis by department and a prioritised improvement roadmap for management. Available on-property.'
      : "Audit hôtelier sur site. Plus de 100 critères évalués, analyse des écarts par département et feuille de route priorisée pour la direction. Demandez un devis.",
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

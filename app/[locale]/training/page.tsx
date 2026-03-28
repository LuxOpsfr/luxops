import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { FormationContent } from '../formation/page'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'On-Property Hotel Training | Operational Standards Implementation | LuxOps'
      : 'Formation sur Site pour Équipes Hôtelières | Déploiement de Standards Opérationnels | LuxOps',
    description: isEn
      ? 'On-site training for hotel teams. Procedures, service standards and SOP implementation. Half-day or full-day sessions for up to 15 participants, built around your property.'
      : "Formation opérationnelle en établissement pour équipes hôtelières. Procédures, standards de service et mise en place des SOPs. Demi-journée ou journée complète, jusqu'à 15 participants.",
    alternates: {
      canonical: isEn ? 'https://www.luxops.fr/en/training' : 'https://www.luxops.fr/fr/formation',
      languages: {
        'en': 'https://www.luxops.fr/en/training',
        'fr': 'https://www.luxops.fr/fr/formation',
        'x-default': 'https://www.luxops.fr/en/training',
      },
    },
  }
}

export default async function TrainingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/formation')
  return <FormationContent locale={locale} />
}

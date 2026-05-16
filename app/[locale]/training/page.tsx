import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { FormationContent } from '../formation/page'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Service Standards Training | LuxOps'
      : 'Formation standards de service | LuxOps',
    description: isEn
      ? 'On-property service standards training for hotel teams, pre-openings, seasonal reopenings, process rollout and department leadership.'
      : 'Formation sur site aux standards de service pour équipes hôtelières, pré-ouverture, réouverture saisonnière, mise en place des process et leadership des chefs de service.',
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

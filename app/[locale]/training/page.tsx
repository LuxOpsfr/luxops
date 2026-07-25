import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { FormationContent } from '../formation/page'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const trainingMetadata = {
  en: {
    title: 'Service Standards Training | LuxOps',
    description:
      'On-property service standards training for hotel teams, pre-openings, seasonal reopenings, process rollout and department leadership.',
  },
  fr: {
    title: 'Formation standards de service | LuxOps',
    description:
      'Formation sur site aux standards de service pour équipes hôtelières, pré-ouverture, réouverture saisonnière, mise en place des process et leadership des chefs de service.',
  },
  es: {
    title: 'Formación en estándares de servicio | LuxOps',
    description:
      'Formación en el hotel para equipos hoteleros: preaperturas, reaperturas estacionales, despliegue de procesos, estándares de servicio y liderazgo de departamento.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = trainingMetadata[activeLocale as keyof typeof trainingMetadata] ?? trainingMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('training', activeLocale),
      languages: alternatesForRoute('training'),
    },
  }
}

export default async function TrainingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/formation')
  return <FormationContent locale={locale} />
}

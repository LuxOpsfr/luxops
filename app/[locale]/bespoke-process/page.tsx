import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { ProcessContent } from '../process-sur-mesure/page'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const processMetadata = {
  en: {
    title: 'Bespoke Operational Process Creation | LuxOps',
    description:
      'Bespoke operational process creation for hospitality teams: SOPs, checklists, service sequences, handovers, controls and internal standards.',
  },
  fr: {
    title: 'Création de process sur-mesure | LuxOps',
    description:
      'Création de process opérationnels sur-mesure : SOP, checklists, séquences de service, passations, contrôles et standards internes.',
  },
  es: {
    title: 'Creación de procesos operativos a medida | LuxOps',
    description:
      'Creación de procesos operativos a medida para equipos hoteleros: SOPs, checklists, secuencias de servicio, handovers, controles y estándares internos.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = processMetadata[activeLocale as keyof typeof processMetadata] ?? processMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('bespokeProcess', activeLocale),
      languages: alternatesForRoute('bespokeProcess'),
    },
  }
}

export default async function BespokeProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  // FR visitors land on the French URL
  if (locale === 'fr') {
    redirect('/fr/process-sur-mesure')
  }

  return <ProcessContent locale={locale} />
}

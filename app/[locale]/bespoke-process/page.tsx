import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { ProcessContent } from '../process-sur-mesure/page'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Bespoke Operational Process Creation | LuxOps'
      : 'Création de process sur-mesure | LuxOps',
    description: isEn
      ? 'Bespoke operational process creation for hospitality teams: SOPs, checklists, service sequences, handovers, controls and internal standards.'
      : 'Création de process opérationnels sur-mesure : SOP, checklists, séquences de service, passations, contrôles et standards internes.',
    alternates: {
      canonical: 'https://www.luxops.fr/en/bespoke-process',
      languages: {
        'en': 'https://www.luxops.fr/en/bespoke-process',
        'fr': 'https://www.luxops.fr/fr/process-sur-mesure',
        'x-default': 'https://www.luxops.fr/en/bespoke-process',
      },
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

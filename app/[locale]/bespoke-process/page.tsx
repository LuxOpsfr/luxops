import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { ProcessContent } from '../process-sur-mesure/page'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Custom Hotel SOP Creation | Property-Specific Operational Procedures | LuxOps'
      : 'Création de Process Hôteliers Sur-Mesure | Procédures Opérationnelles Spécifiques | LuxOps',
    description: isEn
      ? 'Custom operational procedures for any hotel department. Property-specific SOPs written around your standards, team structure, and daily operations. PDF and Notion formats.'
      : "Procédures opérationnelles sur-mesure pour tout département hôtelier. SOPs construits autour de vos standards, de votre structure d'équipe et de votre fonctionnement quotidien.",
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

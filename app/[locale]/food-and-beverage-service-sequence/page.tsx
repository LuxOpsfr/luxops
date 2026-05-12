import { redirect } from 'next/navigation'
import { FbSeoResourcePage, getFbSeoMetadata } from '@/components/FbSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFbSeoMetadata('sequence', locale === 'fr' ? 'fr' : 'en')
}

export default async function FoodAndBeverageServiceSequencePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/sequence-service-restaurant-hotel')
  return <FbSeoResourcePage kind="sequence" locale="en" />
}

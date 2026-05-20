import { redirect } from 'next/navigation'
import { FbSeoResourcePage, getFbSeoMetadata } from '@/components/FbSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFbSeoMetadata('restaurantClosing', locale === 'fr' ? 'fr' : 'en')
}

export default async function RestaurantClosingChecklistPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/checklist-fermeture-restaurant')
  return <FbSeoResourcePage kind="restaurantClosing" locale="en" />
}

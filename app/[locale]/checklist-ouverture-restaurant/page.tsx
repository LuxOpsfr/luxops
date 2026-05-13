import { redirect } from 'next/navigation'
import { FbSeoResourcePage, getFbSeoMetadata } from '@/components/FbSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFbSeoMetadata('restaurantOpening', locale === 'fr' ? 'fr' : 'en')
}

export default async function ChecklistOuvertureRestaurantPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/restaurant-opening-checklist')
  return <FbSeoResourcePage kind="restaurantOpening" locale="fr" />
}

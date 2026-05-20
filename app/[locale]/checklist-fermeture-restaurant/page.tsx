import { redirect } from 'next/navigation'
import { FbSeoResourcePage, getFbSeoMetadata } from '@/components/FbSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFbSeoMetadata('restaurantClosing', locale === 'fr' ? 'fr' : 'en')
}

export default async function ChecklistFermetureRestaurantPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/restaurant-closing-checklist')
  return <FbSeoResourcePage kind="restaurantClosing" locale="fr" />
}

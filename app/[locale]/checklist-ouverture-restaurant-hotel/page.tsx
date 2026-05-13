import { redirect } from 'next/navigation'
import { getFbSeoMetadata } from '@/components/FbSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFbSeoMetadata('restaurantOpening', locale === 'fr' ? 'fr' : 'en')
}

export default async function ChecklistOuvertureRestaurantHotelPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  redirect(locale === 'fr' ? '/fr/checklist-ouverture-restaurant' : '/en/restaurant-opening-checklist')
}

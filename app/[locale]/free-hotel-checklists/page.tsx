import { redirect } from 'next/navigation'
import FreeHotelChecklistsHub, { getFreeHotelChecklistsMetadata } from '@/components/FreeHotelChecklistsHub'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFreeHotelChecklistsMetadata(locale === 'fr' ? 'fr' : 'en')
}

export default async function FreeHotelChecklistsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/checklists-hotel-gratuites')
  return <FreeHotelChecklistsHub locale="en" />
}

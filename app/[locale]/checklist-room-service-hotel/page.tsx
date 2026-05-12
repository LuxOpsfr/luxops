import { redirect } from 'next/navigation'
import { FbSeoResourcePage, getFbSeoMetadata } from '@/components/FbSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFbSeoMetadata('roomService', locale === 'fr' ? 'fr' : 'en')
}

export default async function ChecklistRoomServiceHotelPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/hotel-room-service-checklist')
  return <FbSeoResourcePage kind="roomService" locale="fr" />
}

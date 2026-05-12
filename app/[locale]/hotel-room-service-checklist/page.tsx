import { redirect } from 'next/navigation'
import { FbSeoResourcePage, getFbSeoMetadata } from '@/components/FbSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFbSeoMetadata('roomService', locale === 'fr' ? 'fr' : 'en')
}

export default async function HotelRoomServiceChecklistPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/checklist-room-service-hotel')
  return <FbSeoResourcePage kind="roomService" locale="en" />
}

import { redirect } from 'next/navigation'
import {
  getHotelProceduresManualMetadata,
  HotelProceduresManualPage,
} from '@/components/HotelProceduresManualPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getHotelProceduresManualMetadata(locale === 'fr' ? 'fr' : 'en')
}

export default async function ManuelProcedureHotelleriePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/hotel-operations-playbook')
  return <HotelProceduresManualPage locale="fr" />
}

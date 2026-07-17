import { redirect } from 'next/navigation'
import {
  getHotelProceduresManualMetadata,
  HotelProceduresManualPage,
} from '@/components/HotelProceduresManualPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getHotelProceduresManualMetadata(locale === 'fr' ? 'fr' : 'en')
}

export default async function HotelOperationsPlaybookPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/manuel-procedure-hotellerie')
  return <HotelProceduresManualPage locale="en" />
}

import { redirect } from 'next/navigation'
import {
  getHotelManagementRoutinesMetadata,
  HotelManagementRoutinesPage,
} from '@/components/HotelManagementRoutinesPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getHotelManagementRoutinesMetadata(locale === 'fr' ? 'fr' : 'en')
}

export default async function HotelManagementRoutinesRoute({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/rituels-management-hotelier')
  return <HotelManagementRoutinesPage locale="en" />
}

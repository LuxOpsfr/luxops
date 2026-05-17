import { redirect } from 'next/navigation'

export default async function HotelStaffTrainingRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  redirect(`/${locale}/formation-equipe-hoteliere`)
}

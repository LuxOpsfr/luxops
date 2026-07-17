import { redirect } from 'next/navigation'
import {
  getOperationsResourceMetadata,
  OperationsSeoResourcePage,
} from '@/components/OperationsSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getOperationsResourceMetadata('roomStatusDiscrepancy', locale === 'fr' ? 'fr' : 'en')
}

export default async function RoomStatusDiscrepancyReportPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/rapport-ecart-statut-chambre')
  return <OperationsSeoResourcePage kind="roomStatusDiscrepancy" locale="en" />
}

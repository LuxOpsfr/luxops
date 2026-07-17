import { redirect } from 'next/navigation'
import {
  getOperationsResourceMetadata,
  OperationsSeoResourcePage,
} from '@/components/OperationsSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getOperationsResourceMetadata('frontDeskHandover', locale === 'fr' ? 'fr' : 'en')
}

export default async function ModelePassationReceptionPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/front-desk-shift-handover-template')
  return <OperationsSeoResourcePage kind="frontDeskHandover" locale="fr" />
}

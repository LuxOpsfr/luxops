import { redirect } from 'next/navigation'
import {
  getOperationsResourceMetadata,
  OperationsSeoResourcePage,
} from '@/components/OperationsSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getOperationsResourceMetadata('guestComplaint', locale === 'fr' ? 'fr' : 'en')
}

export default async function GuestComplaintHandlingSopPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/procedure-reclamation-client')
  return <OperationsSeoResourcePage kind="guestComplaint" locale="en" />
}

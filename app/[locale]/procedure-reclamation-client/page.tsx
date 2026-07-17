import { redirect } from 'next/navigation'
import {
  getOperationsResourceMetadata,
  OperationsSeoResourcePage,
} from '@/components/OperationsSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getOperationsResourceMetadata('guestComplaint', locale === 'fr' ? 'fr' : 'en')
}

export default async function ProcedureReclamationClientPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/guest-complaint-handling-sop')
  return <OperationsSeoResourcePage kind="guestComplaint" locale="fr" />
}

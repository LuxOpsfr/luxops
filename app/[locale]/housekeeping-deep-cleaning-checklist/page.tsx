import { redirect } from 'next/navigation'
import {
  getOperationsResourceMetadata,
  OperationsSeoResourcePage,
} from '@/components/OperationsSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getOperationsResourceMetadata('hskDeepCleaning', locale === 'fr' ? 'fr' : 'en')
}

export default async function HousekeepingDeepCleaningChecklistPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/deep-cleaning-chambre')
  return <OperationsSeoResourcePage kind="hskDeepCleaning" locale="en" />
}

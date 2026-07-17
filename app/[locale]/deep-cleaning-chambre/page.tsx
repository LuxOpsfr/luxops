import { redirect } from 'next/navigation'
import {
  getOperationsResourceMetadata,
  OperationsSeoResourcePage,
} from '@/components/OperationsSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getOperationsResourceMetadata('hskDeepCleaning', locale === 'fr' ? 'fr' : 'en')
}

export default async function DeepCleaningChambrePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/housekeeping-deep-cleaning-checklist')
  return <OperationsSeoResourcePage kind="hskDeepCleaning" locale="fr" />
}

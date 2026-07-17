import { redirect } from 'next/navigation'
import {
  getOperationsResourceMetadata,
  OperationsSeoResourcePage,
} from '@/components/OperationsSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getOperationsResourceMetadata('breakfastService', locale === 'fr' ? 'fr' : 'en')
}

export default async function ChecklistServicePetitDejeunerPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/breakfast-service-checklist')
  return <OperationsSeoResourcePage kind="breakfastService" locale="fr" />
}

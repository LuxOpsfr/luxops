import { redirect } from 'next/navigation'
import {
  getOperationsResourceMetadata,
  OperationsSeoResourcePage,
} from '@/components/OperationsSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getOperationsResourceMetadata('breakfastService', locale === 'fr' ? 'fr' : 'en')
}

export default async function BreakfastServiceChecklistPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/checklist-service-petit-dejeuner')
  return <OperationsSeoResourcePage kind="breakfastService" locale="en" />
}

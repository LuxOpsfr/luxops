import { redirect } from 'next/navigation'
import {
  getLuxOpsTrainingMethodMetadata,
} from '@/components/LuxOpsTrainingMethodPage'
import LuxOpsTrainingMethodPage from '@/components/LuxOpsTrainingMethodPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getLuxOpsTrainingMethodMetadata(locale === 'fr' ? 'fr' : 'en')
}

export default async function MethodeFormationLuxOpsRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/luxops-training-method')
  return <LuxOpsTrainingMethodPage locale="fr" />
}

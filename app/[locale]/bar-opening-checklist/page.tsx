import { redirect } from 'next/navigation'
import { FbSeoResourcePage, getFbSeoMetadata } from '@/components/FbSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFbSeoMetadata('barOpening', locale === 'fr' ? 'fr' : 'en')
}

export default async function BarOpeningChecklistPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'fr') redirect('/fr/checklist-ouverture-bar')
  return <FbSeoResourcePage kind="barOpening" locale="en" />
}

import { redirect } from 'next/navigation'
import { FbSeoResourcePage, getFbSeoMetadata } from '@/components/FbSeoResourcePage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getFbSeoMetadata('barOpening', locale === 'fr' ? 'fr' : 'en')
}

export default async function ChecklistOuvertureBarPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== 'fr') redirect('/en/bar-opening-checklist')
  return <FbSeoResourcePage kind="barOpening" locale="fr" />
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import DepartmentTrainingPage from '@/components/DepartmentTrainingPage'
import { spaTrainingPageData, spaTrainingPathway } from '@/content/spa-training'
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (locale !== 'fr' && locale !== 'en') notFound()
  return {
    title: locale === 'fr' ? 'Formation Spa hôtelier : excellence de service | LuxOps' : 'Hotel Spa Staff Training & Service Excellence | LuxOps',
    description: spaTrainingPathway[locale].promise,
    alternates: { canonical: `https://www.luxops.fr/${locale}/formation-spa-hotel`, languages: { fr: 'https://www.luxops.fr/fr/formation-spa-hotel', en: 'https://www.luxops.fr/en/formation-spa-hotel', 'x-default': 'https://www.luxops.fr/en/formation-spa-hotel' } },
  }
}
export default async function SpaTrainingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'fr' && locale !== 'en') notFound()
  return <DepartmentTrainingPage locale={locale} department="spa" data={spaTrainingPageData[locale]} />
}

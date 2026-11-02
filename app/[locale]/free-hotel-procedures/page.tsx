import type { Metadata } from 'next'
import FreeChaptersResourceProposal from '@/components/FreeChaptersResourceProposal'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Free SOP Manual Sample | LuxOps'
      : 'Extrait gratuit des manuels SOP | LuxOps',
    description: isEn
      ? 'Explore a practical sample from a LuxOps SOP manual. Choose Front Office, Housekeeping, Food & Beverage, Spa or Revenue Management, in English and French.'
      : 'Découvrez un extrait d’un manuel SOP LuxOps : Front Office, Housekeeping, Food & Beverage, Spa ou Revenue Management, en français et en anglais.',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/free-hotel-procedures`,
      languages: {
        en: 'https://www.luxops.fr/en/free-hotel-procedures',
        fr: 'https://www.luxops.fr/fr/free-hotel-procedures',
        'x-default': 'https://www.luxops.fr/en/free-hotel-procedures',
      },
    },
  }
}

export default async function FreeHotelProceduresPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <FreeChaptersResourceProposal locale={locale === 'en' ? 'en' : 'fr'} />
}

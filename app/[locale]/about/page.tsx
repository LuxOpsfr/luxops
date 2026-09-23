import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import ExpertiseSection from '@/components/ExpertiseSection'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const aboutMetadata = {
  en: {
    title: 'About LuxOps | Hotel Operations Specialists',
    description:
      'LuxOps provides structured operational methods for high-end hotels. Playbooks, SOPs, audits and training built from years of real hotel operations experience.',
  },
  fr: {
    title: 'À Propos de LuxOps | Spécialistes des Opérations Hôtelières',
    description:
      "LuxOps propose des méthodes opérationnelles structurées pour hôtels haut de gamme. Playbooks, SOPs, audits et formations issus de l'exploitation hôtelière réelle.",
  },
  es: {
    title: 'Sobre LuxOps | Especialistas en operaciones hoteleras',
    description:
      'LuxOps ofrece métodos operativos estructurados para hoteles high-end: playbooks, SOPs, auditorías y formación creados desde años de experiencia real en operaciones hoteleras.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = aboutMetadata[activeLocale as keyof typeof aboutMetadata] ?? aboutMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('about', activeLocale),
      languages: alternatesForRoute('about'),
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <AboutContent locale={locale} />
}

function AboutContent({ locale }: { locale: string }) {
  const t = useTranslations('about_page')

  const expertise = [
    t('e1'), t('e2'), t('e3'), t('e4'), t('e5'), t('e6'),
  ]

  const values = [
    { title: t('v1_title'), desc: t('v1_desc') },
    { title: t('v2_title'), desc: t('v2_desc') },
    { title: t('v3_title'), desc: t('v3_desc') },
  ]

  return (
    <div className="bg-[#f5f1e9] pt-[var(--site-header-height)] text-[#0f211a]">
      <section className="border-b border-[rgba(32,35,31,0.14)] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">LuxOps</p>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.04] md:text-7xl">{t('title')}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5d665f]">{t('subtitle')}</p>
        </div>
      </section>
      <section className="bg-[#fcfbf8] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <h2 className="font-display text-4xl font-medium">{t('story_title')}</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-[#5d665f]">
              <p>{t('story_p1')}</p><p>{t('story_p2')}</p>
              <p className="border-l-2 border-[#a58658] pl-6 font-display text-2xl leading-snug text-[#0f211a]">{t('story_p3')}</p>
            </div>
          </div>
          <div className="border-t border-[rgba(32,35,31,0.18)] pt-6">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#a58658]">{t('expertise_title')}</h3>
            <ul className="space-y-0">
              {expertise.map((item) => <li key={item} className="border-b border-[rgba(32,35,31,0.12)] py-3 text-sm text-[#24362f]">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="font-display text-4xl font-medium">{t('values_title')}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="border-t border-[rgba(32,35,31,0.2)] pt-5">
                <span className="text-xs font-semibold text-[#a58658]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-2xl">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5d665f]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ExpertiseSection locale={locale} />
    </div>
  )
}

import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import ContactForm from '@/components/ContactForm'
import { Mail, Clock } from 'lucide-react'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const contactMetadata = {
  en: {
    title: 'Contact LuxOps | Hotel Operations Enquiries',
    description:
      'Get in touch with LuxOps about hotel SOP manuals, resources or on-property training. We usually respond within one business day.',
  },
  fr: {
    title: 'Contacter LuxOps | Renseignements Opérations Hôtelières',
    description:
      "Contactez LuxOps pour vos questions sur les manuels SOP, ressources ou formations hôtelières. Réponse habituelle sous un jour ouvré.",
  },
  es: {
    title: 'Contactar LuxOps | Consultas de operaciones hoteleras',
    description:
      'Contacta con LuxOps sobre manuales SOP, recursos o formación hotelera. Normalmente respondemos en un día laborable.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = contactMetadata[activeLocale as keyof typeof contactMetadata] ?? contactMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('contact', activeLocale),
      languages: alternatesForRoute('contact'),
    },
  }
}

export default function ContactPage() {
  return <ContactContent />
}

function ContactContent() {
  const t = useTranslations('contact_page')
  const tNav = useTranslations('nav')

  return (
    <div className="bg-[#f5f1e9] pt-[var(--site-header-height)] text-[#0f211a]">
      <section className="border-b border-[rgba(32,35,31,0.14)] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">{tNav('contact')}</p>
          <h1 className="font-display text-5xl font-medium leading-[1.04] md:text-7xl">{t('title')}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d665f]">{t('subtitle')}</p>
        </div>
      </section>
      <section className="bg-[#fcfbf8] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[1.7fr_0.8fr]">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div className="border-t border-[rgba(32,35,31,0.18)] pt-5">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#a58658]"><Mail size={15} />{t('email_label')}</div>
              <a href="mailto:contact@luxops.fr" className="text-base text-[#0f211a] underline underline-offset-4">contact@luxops.fr</a>
            </div>
            <div className="border-t border-[rgba(32,35,31,0.18)] pt-5">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#a58658]"><Clock size={15} />{t('response_time_label')}</div>
              <p className="text-sm leading-7 text-[#5d665f]">{t('response_time')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

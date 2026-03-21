import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import ContactForm from '@/components/ContactForm'
import { Mail, Clock } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Contact LuxOps | Hotel Operations Enquiries'
      : 'Contacter LuxOps | Renseignements Opérations Hôtelières',
    description: isEn
      ? 'Get in touch with the LuxOps team. Questions about hotel playbooks, SOPs, audits, custom processes or on-property training. We usually respond within one business day.'
      : "Contactez l'équipe LuxOps pour vos questions sur les playbooks, SOPs, audits, process sur-mesure ou formation hôtelière. Réponse habituellement sous un jour ouvré.",
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ContactContent locale={locale} />
}

function ContactContent({ locale }: { locale: string }) {
  const t = useTranslations('contact_page')

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section
        className="relative py-24 px-6 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(195,198,214,0.2)',
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-8"
            style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
          >
            <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
            {locale === 'en' ? 'Contact' : 'Contact'}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e] mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-[#4f6074] max-w-2xl leading-relaxed">{t('subtitle')}</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <div className="p-8" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                >
                  <Mail size={14} style={{ color: '#003d9b' }} />
                </div>
                <span className="font-bold text-[#0a1d2e] text-sm">{t('email_label')}</span>
              </div>
              <a
                href="mailto:contact@luxops.fr"
                className="text-[#4f6074] hover:text-[#003d9b] text-sm transition-colors"
              >
                contact@luxops.fr
              </a>
            </div>

            <div className="p-8" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                >
                  <Clock size={14} style={{ color: '#003d9b' }} />
                </div>
                <span className="font-bold text-[#0a1d2e] text-sm">{t('response_time_label')}</span>
              </div>
              <p className="text-[#4f6074] text-sm">{t('response_time')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

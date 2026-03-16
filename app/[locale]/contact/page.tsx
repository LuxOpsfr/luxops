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
      ? 'Get in touch with the LuxOps team. Questions about hotel playbooks, SOPs, audits, custom processes or on-property training. We respond within 24 hours.'
      : 'Contactez l\'équipe LuxOps pour vos questions sur les playbooks, SOPs, audits, process sur-mesure ou formation hôtelière. Réponse sous 24 heures.',
  }
}

export default function ContactPage() {
  return <ContactContent />
}

function ContactContent() {
  const t = useTranslations('contact_page')

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#111111] mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={16} className="text-[#111111]" />
                <span className="font-semibold text-[#111111] text-sm">{t('email_label')}</span>
              </div>
              <a
                href="mailto:contact@luxops.com"
                className="text-gray-400 hover:text-[#111111] text-sm transition-colors"
              >
                contact@luxops.com
              </a>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={16} className="text-[#111111]" />
                <span className="font-semibold text-[#111111] text-sm">Response Time</span>
              </div>
              <p className="text-gray-400 text-sm">{t('response_time')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Operations Notion Templates | Customisable SOP Systems | LuxOps'
      : 'Templates Notion pour Hôtels | Systèmes de SOPs Personnalisables | LuxOps',
    description: isEn
      ? 'Notion-based operational management workspaces for hotels. Customisable SOP library, procedures and standards structured for hotel teams. Available now.'
      : 'Espaces Notion de gestion opérationnelle pour hôtels. SOPs, procédures et standards structurés pour équipes hôtelières. Disponibles immédiatement.',
  }
}

export default async function NotionPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <NotionContent locale={locale} />
}

function NotionContent({ locale }: { locale: string }) {
  const t = useTranslations('notion_page')

  const features = [
    t('base_f1'),
    t('base_f2'),
    t('base_f3'),
    t('base_f4'),
    t('base_f5'),
    t('base_f6'),
    t('base_f7'),
    t('base_f8'),
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#111111] mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      {/* Base Template */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-3">{t('base_title')}</h2>
              <div className="text-4xl font-bold text-[#111111] mb-2">{t('base_price')}</div>
              <p className="text-gray-400 leading-relaxed mb-8">{t('base_desc')}</p>
              <ul className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-[#111111] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-[#111111] text-white font-semibold rounded-xl hover:bg-[#333333] transition-colors">
                {t('buy_base')}
              </button>
            </div>

            {/* Mockup */}
            <div className="bg-gray-50 rounded-2xl p-10 min-h-80 flex items-center justify-center border border-gray-100">
              <div className="text-center text-gray-300">
                <div className="text-6xl mb-4">🗂️</div>
                <p className="text-sm font-medium text-gray-400">Notion Template Preview</p>
                <p className="text-xs mt-1.5 text-gray-300">Demo video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Setup */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">{t('custom_title')}</h2>
          <div className="text-4xl font-bold text-white mb-4">{t('custom_price')}</div>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            {t('custom_desc')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111111] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            {t('custom_cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

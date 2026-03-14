import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <ProcessContent locale={locale} />
}

function ProcessContent({ locale }: { locale: string }) {
  const t = useTranslations('process_page')

  const formats = [t('f1'), t('f2'), t('f3')]
  const departments = [
    t('d1'), t('d2'), t('d3'), t('d4'),
    t('d5'), t('d6'), t('d7'), t('d8'),
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#111111] mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-400 mb-8">{t('subtitle')}</p>
          <div className="text-4xl font-bold text-[#111111]">{t('price')}</div>
          <div className="text-sm text-gray-400 mt-1">{t('price_note')}</div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">{t('desc')}</p>
            <h3 className="font-semibold text-[#111111] mb-4">{t('formats_title')}</h3>
            <ul className="space-y-2 mb-8">
              {formats.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-[#111111] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#111111] mb-4">{t('depts_title')}</h3>
            <div className="grid grid-cols-2 gap-3">
              {departments.map((d, i) => (
                <div
                  key={i}
                  className="px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 border border-gray-100"
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t('cta_title')}</h2>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111111] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            {t('cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

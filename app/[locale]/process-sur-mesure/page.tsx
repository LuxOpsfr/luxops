import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Custom Hotel SOP Creation | Tailored Operations Manuals | LuxOps' : 'Création de SOPs Hôteliers Sur-Mesure | Procédures Opérationnelles | LuxOps',
    description: isEn ? 'Custom operational process creation for hotel departments. Property-specific SOPs, procedures and operations manuals tailored to your brand and team.' : 'Création de process opérationnels sur-mesure pour les départements hôteliers. SOPs, procédures et manuels adaptés à votre établissement et vos standards.',
  }
}

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ProcessContent locale={locale} />
}

function ProcessContent({ locale }: { locale: string }) {
  const t = useTranslations('process_page')
  const isEn = locale === 'en'

  const formats = [t('f1'), t('f2'), t('f3')]
  const departments = [t('d1'), t('d2'), t('d3'), t('d4'), t('d5'), t('d6'), t('d7'), t('d8')]

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
            {isEn ? 'Bespoke Service' : 'Prestation sur-mesure'}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e] mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-[#4f6074] max-w-2xl leading-relaxed mb-10">{t('subtitle')}</p>
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <div className="font-display text-4xl font-extrabold text-[#003d9b]">{t('price')}</div>
              <div className="text-sm text-[#737685] mt-1">{t('price_note')}</div>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem', boxShadow: '0 8px 24px rgba(0,61,155,0.2)' }}
            >
              {t('cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#4f6074] leading-relaxed mb-10 text-lg">{t('desc')}</p>
            <h3 className="font-display font-bold text-[#0a1d2e] mb-6 uppercase tracking-widest text-xs">
              {t('formats_title')}
            </h3>
            <ul className="space-y-3">
              {formats.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#0a1d2e]">
                  <Check size={14} style={{ color: '#003d9b' }} className="flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#0a1d2e] mb-6 uppercase tracking-widest text-xs">
              {t('depts_title')}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {departments.map((d, i) => (
                <div
                  key={i}
                  className="px-4 py-3 text-sm font-medium text-[#003d9b]"
                  style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When useful + What we build */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
              {t('when_useful_title')}
            </h2>
            <div className="space-y-3">
              {[t('wu1'), t('wu2'), t('wu3'), t('wu4')].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white"
                  style={{ borderRadius: '0.125rem' }}
                >
                  <div
                    className="w-5 h-5 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="text-sm text-[#0a1d2e] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
              {t('what_we_build_title')}
            </h2>
            <div className="space-y-2">
              {[t('wb1'), t('wb2'), t('wb3'), t('wb4'), t('wb5')].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#003d9b]"
                  style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                >
                  <span className="w-1.5 h-1.5 flex-shrink-0 bg-[#003d9b]" style={{ borderRadius: '0.125rem' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#003d9b] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-8">
            {t('cta_title')}
          </h2>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#003d9b] font-bold hover:bg-[#f8f9ff] transition-colors"
            style={{ borderRadius: '0.125rem' }}
          >
            {t('cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

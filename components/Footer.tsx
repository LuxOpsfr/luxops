import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Mail } from 'lucide-react'
import CurrencySelector from '@/components/CurrencySelector'
import { toActiveLocale } from '@/lib/i18n'
import { localizedPath, localizedRoutePath } from '@/lib/localized-routes'

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const currentLocale = toActiveLocale(locale)
  const legalHref = currentLocale === 'fr' ? localizedPath('fr', '/legal') : localizedPath('en', '/legal')

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3">
              <span
                className="font-bold uppercase text-white"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  letterSpacing: '0.22em',
                  lineHeight: 1,
                }}
              >
                LuxOps
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t('tagline')}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-4 text-gray-400">
              {t('products')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={localizedRoutePath('playbooks', currentLocale)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('playbooks')}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoutePath('notionTemplates', currentLocale)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('notion')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-4 text-gray-400">
              {t('services')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={localizedRoutePath('qualityAudit', currentLocale)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('audit')}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoutePath('bespokeProcess', currentLocale)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('process')}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoutePath('training', currentLocale)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('training')}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoutePath('resources', currentLocale)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('resources')}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoutePath('blog', currentLocale)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-4 text-gray-400">
              {t('company')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={localizedRoutePath('about', currentLocale)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoutePath('contact', currentLocale)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('contact')}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@luxops.fr"
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Mail size={13} />
                  contact@luxops.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">{t('copyright')}</p>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <CurrencySelector locale={currentLocale} />
            <Link
              href={legalHref}
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              {t('legal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Mail } from 'lucide-react'

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold tracking-widest mb-3">LuxOps</div>
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
                  href={`/${locale}/playbooks`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('playbooks')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/notion-templates`}
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
                  href={`/${locale}/audit-qualite`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('audit')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/process-sur-mesure`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('process')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/formation`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('training')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/resources`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('resources')}
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
                  href={`/${locale}/about`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
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
          <Link
            href={`/${locale}/legal`}
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            {t('legal')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

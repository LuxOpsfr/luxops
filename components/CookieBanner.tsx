'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { toActiveLocale } from '@/lib/i18n'
import { localizedPath } from '@/lib/localized-routes'

export default function CookieBanner({ locale }: { locale: string }) {
  const t = useTranslations('cookie_banner')
  const [visible, setVisible] = useState(false)
  const activeLocale = toActiveLocale(locale)
  const legalHref = activeLocale === 'fr' ? localizedPath('fr', '/legal') : localizedPath('en', '/legal')

  useEffect(() => {
    const consent = localStorage.getItem('luxops_cookie_consent')
    if (consent) return

    const timer = window.setTimeout(() => setVisible(true), 0)
    return () => window.clearTimeout(timer)
  }, [])

  const accept = () => {
    localStorage.setItem('luxops_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('luxops_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-3xl mx-auto bg-[#1A2E44] text-white rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold mb-0.5">
            {t('title')}
          </p>
          <p className="text-xs text-white/60 leading-relaxed">
            {t('body')}
            <Link
              href={legalHref}
              className="underline text-white/80 hover:text-white"
            >
              {t('learn_more')}
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/60 hover:text-white transition-colors font-medium"
          >
            {t('decline')}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-white text-[#1A2E44] text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  )
}

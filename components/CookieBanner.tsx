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
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-3 sm:p-4">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-3 border border-[rgba(245,241,233,0.18)] bg-[#0f211a] px-4 py-4 text-[#f5f1e9] sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-5">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold mb-0.5">
            {t('title')}
          </p>
          <p className="text-xs leading-relaxed text-[rgba(245,241,233,0.64)]">
            {t('body')}
            <Link
              href={legalHref}
              className="underline text-[rgba(245,241,233,0.8)] hover:text-[#f5f1e9]"
            >
              {t('learn_more')}
            </Link>
          </p>
        </div>
        <div className="flex w-full flex-shrink-0 items-center justify-between gap-3 sm:w-auto sm:justify-start">
          <button
            onClick={decline}
            className="text-sm font-medium text-[rgba(245,241,233,0.64)] transition-colors hover:text-[#f5f1e9]"
          >
            {t('decline')}
          </button>
          <button
            onClick={accept}
            className="bg-[#f5f1e9] px-4 py-2 text-sm font-bold text-[#0f211a] transition-colors hover:bg-[#fcfbf8] sm:px-5"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ShieldCheck } from 'lucide-react'
import { toActiveLocale } from '@/lib/i18n'
import { localizedPath } from '@/lib/localized-routes'

export default function CookieBanner({ locale }: { locale: string }) {
  const t = useTranslations('cookie_banner')
  const [visible, setVisible] = useState(false)
  const activeLocale = toActiveLocale(locale)
  const legalHref = localizedPath(activeLocale, '/legal')

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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] px-3 pb-[max(12px,env(safe-area-inset-bottom))] sm:px-5 sm:pb-5">
      <div role="dialog" aria-label={t('title')} className="pointer-events-auto mx-auto flex max-w-[900px] flex-col gap-3 rounded-[20px] border border-[#d9cebb] bg-[#fbf8f2] p-4 text-[#173025] shadow-[0_16px_50px_rgba(15,33,26,.18)] sm:flex-row sm:items-center sm:gap-5 sm:px-5 sm:py-4">
        <div className="flex min-w-0 flex-1 gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eee5d4] text-[#806744]" aria-hidden="true"><ShieldCheck size={18} strokeWidth={1.7} /></span>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-5">{t('title')}</p>
            <p className="mt-0.5 text-xs leading-5 text-[#647067]">{t('body')}<Link href={legalHref} className="font-medium text-[#365347] underline decoration-[#b9a47e] underline-offset-[3px] hover:text-[#0f211a]">{t('learn_more')}</Link></p>
          </div>
        </div>
        <div className="flex shrink-0 gap-2 pl-12 sm:pl-0">
          <button onClick={decline} className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full border border-[#d5c9b5] px-4 text-xs font-semibold text-[#263d31] transition hover:bg-[#f0ece4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a58658] sm:flex-none">{t('decline')}</button>
          <button onClick={accept} className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full bg-[#0f211a] px-5 text-xs font-semibold text-white transition hover:bg-[#263d31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a58658] sm:flex-none">{t('accept')}</button>
        </div>
      </div>
    </div>
  )
}

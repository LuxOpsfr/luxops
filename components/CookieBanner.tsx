'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false)
  const isFr = locale === 'fr'

  useEffect(() => {
    const consent = localStorage.getItem('luxops_cookie_consent')
    if (!consent) setVisible(true)
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
            {isFr ? 'Ce site utilise des cookies' : 'This site uses cookies'}
          </p>
          <p className="text-xs text-white/60 leading-relaxed">
            {isFr
              ? "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic (Google Analytics). "
              : "We use cookies to improve your experience and analyze traffic (Google Analytics). "}
            <Link
              href={`/${locale}/legal`}
              className="underline text-white/80 hover:text-white"
            >
              {isFr ? 'En savoir plus' : 'Learn more'}
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/60 hover:text-white transition-colors font-medium"
          >
            {isFr ? 'Refuser' : 'Decline'}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-white text-[#1A2E44] text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isFr ? 'Accepter' : 'Accept'}
          </button>
        </div>
      </div>
    </div>
  )
}

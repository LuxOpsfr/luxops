'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Mail, MessageCircle, X } from 'lucide-react'

export default function QuickContact({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const fr = locale === 'fr'
  const whatsappHref = 'https://wa.me/33652084739'
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(20rem,calc(100vw-2.5rem))] border border-[#d9d1c4] bg-[#fcfbf8] p-5 text-[#0f211a] shadow-xl">
          <p className="font-display text-xl">{fr ? 'Parlons de votre projet' : 'Let’s talk about your project'}</p>
          <p className="mt-2 text-sm leading-6 text-[#3d4a41]">{fr ? 'Écrivez-nous directement ou envoyez-nous votre demande par e-mail.' : 'Message us directly or send your enquiry by email.'}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-[#0f211a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#274036]">
              <MessageCircle size={16} />WhatsApp
            </a>
            <Link href={`/${locale}/contact`} onClick={() => setOpen(false)} className="inline-flex items-center gap-2 border border-[#0f211a] px-4 py-3 text-sm font-semibold text-[#0f211a] hover:bg-[#eee9e0]">
              <Mail size={16} />{fr ? 'E-mail' : 'Email'}
            </Link>
          </div>
          <a href="tel:+33652084739" className="mt-3 block text-xs text-[#3d4a41] hover:text-[#0f211a]">+33 6 52 08 47 39</a>
        </div>
      )}
      <button type="button" aria-label={open ? (fr ? 'Fermer le contact' : 'Close contact') : (fr ? 'Ouvrir le contact' : 'Open contact')} aria-expanded={open} title={fr ? 'Contact rapide' : 'Quick contact'} onClick={() => setOpen(!open)} className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f211a] text-white shadow-lg hover:bg-[#274036] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f211a]">
        {open ? <X size={23} /> : <MessageCircle size={23} />}
      </button>
    </div>
  )
}

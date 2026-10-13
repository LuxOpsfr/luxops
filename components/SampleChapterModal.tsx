'use client'

import { useEffect, useRef, useState } from 'react'
import posthog from 'posthog-js'
import { Check, X } from 'lucide-react'

const departments = [
  { id: 'fo', fr: 'Front Office', en: 'Front Office' },
  { id: 'hsk', fr: 'Housekeeping', en: 'Housekeeping' },
  { id: 'fb', fr: 'Food & Beverage', en: 'Food & Beverage' },
  { id: 'spa', fr: 'Spa & Wellness', en: 'Spa & Wellness' },
] as const

type Props = { locale: string; onClose: () => void }

export default function SampleChapterModal({ locale, onClose }: Props) {
  const isEn = locale === 'en'
  const [department, setDepartment] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [emailSent, setEmailSent] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current()
    }
    window.addEventListener('keydown', handleKeyDown)
    dialogRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!department || !email) return
    setStatus('loading')
    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          department,
          locale,
          currentUrl: window.location.href,
          pathname: window.location.pathname,
          posthogDistinctId: posthog.get_distinct_id?.(),
          posthogSessionId: posthog.get_session_id?.(),
          requestChapterEmail: true,
          requestId: window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
        }),
      })
      if (!response.ok) throw new Error('Request failed')
      const result = await response.json()
      setEmailSent(Boolean(result.welcomeEmailSent))
      setStatus('success')
      posthog.capture('lead_magnet_submitted', { department, locale, source: 'playbooks_sample_modal' })
    } catch {
      setStatus('error')
    }
  }

  const selectedDepartment = departments.find((item) => item.id === department)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#101b16]/55 px-4 py-6 backdrop-blur-[3px]"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sample-chapter-title"
        tabIndex={-1}
        className="relative my-auto w-full max-w-[540px] rounded-[28px] border border-[#e8dfd0] bg-[#fcfbf8] p-6 shadow-[0_28px_90px_rgba(7,20,14,.3)] outline-none sm:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={isEn ? 'Close' : 'Fermer'}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#526158] transition hover:bg-[#f0ece4] hover:text-[#10251d]"
        >
          <X size={19} strokeWidth={1.7} />
        </button>

        {status === 'success' ? (
          <div className="py-5 text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8eee8] text-[#18362a]">
              <Check size={22} strokeWidth={1.8} />
            </div>
            <h2 id="sample-chapter-title" className="font-display text-3xl font-medium text-[#10251d]">
              {isEn ? 'Check your inbox' : 'Consultez votre boîte mail'}
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#626b64]">
              {emailSent
                ? (isEn
                    ? `The ${selectedDepartment?.en} sample chapter has been sent to ${email}.`
                    : `Le chapitre découverte ${selectedDepartment?.fr} a été envoyé à ${email}.`)
                : (isEn
                    ? 'This chapter has already been requested with this address. Please check your inbox.'
                    : 'Ce chapitre a déjà été demandé avec cette adresse. Vérifiez votre boîte mail.')}
            </p>
            <button type="button" onClick={onClose} className="mt-7 rounded-full bg-[#10251d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#294437]">
              {isEn ? 'Back to the manuals' : 'Revenir aux manuels'}
            </button>
          </div>
        ) : (
          <>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.17em] text-[#987746]">
              {isEn ? 'A chapter to explore' : 'Un chapitre à découvrir'}
            </p>
            <h2 id="sample-chapter-title" className="max-w-[420px] font-display text-[2rem] font-medium leading-tight tracking-[-.025em] text-[#10251d]">
              {isEn ? 'Choose a department' : 'Choisissez un département'}
            </h2>
            <p className="mt-2 max-w-[420px] text-sm leading-6 text-[#687169]">
              {isEn ? 'We will send the introductory chapter to your email.' : 'Nous vous envoyons le chapitre d’introduction par email.'}
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <fieldset>
                <legend className="mb-3 text-xs font-semibold text-[#34463a]">
                  {isEn ? 'Department' : 'Département'}
                </legend>
                <div className="grid grid-cols-2 gap-2">
                  {departments.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={department === item.id}
                      onClick={() => setDepartment(item.id)}
                      className={`min-h-12 rounded-xl border px-3 text-left text-sm transition ${department === item.id ? 'border-[#a58658] bg-[#f2eee5] font-semibold text-[#18362a]' : 'border-[#e5dfd4] bg-white text-[#4f5c52] hover:border-[#c6b38e]'}`}
                    >
                      {isEn ? item.en : item.fr}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label htmlFor="sample-chapter-email" className="mb-2 mt-5 block text-xs font-semibold text-[#34463a]">
                {isEn ? 'Email address' : 'Adresse email'}
              </label>
              <input
                id="sample-chapter-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={isEn ? 'name@hotel.com' : 'nom@hotel.com'}
                className="h-12 w-full rounded-xl border border-[#e5dfd4] bg-white px-4 text-sm text-[#23352b] outline-none transition placeholder:text-[#9a9d96] focus:border-[#a58658] focus:ring-2 focus:ring-[#a58658]/15"
              />
              {status === 'error' ? (
                <p role="alert" className="mt-3 text-sm text-[#9a3b32]">
                  {isEn ? 'The email could not be sent. Please try again.' : 'L’email n’a pas pu être envoyé. Réessayez.'}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={!department || !email || status === 'loading'}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#10251d] px-5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(16,37,29,.13)] transition hover:bg-[#294437] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {status === 'loading'
                  ? (isEn ? 'Sending…' : 'Envoi…')
                  : (isEn ? 'Email me the chapter' : 'Recevoir le chapitre par email')}
              </button>
              <p className="mt-3 text-center text-[11px] leading-5 text-[#848981]">
                {isEn ? 'The chapter download link will be sent to this address.' : 'Le lien de téléchargement du chapitre sera envoyé à cette adresse.'}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

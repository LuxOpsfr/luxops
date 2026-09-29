'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import BrandLogo from '@/components/BrandLogo'

const copy = {
  en: {
    eyebrow: 'Client portal', title: 'Reset your password', body: 'Enter the email address used for your LuxOps purchase.', label: 'Email', button: 'Send the reset link', loading: 'Sending...', successTitle: 'Check your inbox', success: 'If an account exists for this address, a secure reset link has been sent.', back: 'Back to sign in',
  },
  fr: {
    eyebrow: 'Espace client', title: 'Réinitialiser votre mot de passe', body: "Saisissez l'adresse utilisée lors de votre achat LuxOps.", label: 'E-mail', button: 'Envoyer le lien', loading: 'Envoi...', successTitle: 'Consultez votre messagerie', success: 'Si un compte existe pour cette adresse, un lien sécurisé vient de vous être envoyé.', back: 'Retour à la connexion',
  },
  es: {
    eyebrow: 'Portal de cliente', title: 'Restablecer tu contraseña', body: 'Introduce la dirección utilizada para tu compra de LuxOps.', label: 'Correo electrónico', button: 'Enviar el enlace', loading: 'Enviando...', successTitle: 'Revisa tu correo', success: 'Si existe una cuenta para esta dirección, se ha enviado un enlace seguro.', back: 'Volver al inicio de sesión',
  },
} as const

export default function ForgotPasswordPage() {
  const params = useParams()
  const locale = params.locale === 'fr' || params.locale === 'es' ? params.locale : 'en'
  const t = copy[locale]
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/auth/recovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      })
    } finally {
      setLoading(false)
      setSent(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-14">
      <Link href={`/${locale}`} className="mb-10 no-underline"><BrandLogo showMonogram /></Link>
      <div className="w-full max-w-[460px] border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-7 py-9 sm:px-10 sm:py-11">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a58658]">{t.eyebrow}</p>
        <h1 className="font-display mb-3 text-[2.25rem] font-medium leading-[1.05] text-[#0f211a]">{sent ? t.successTitle : t.title}</h1>
        <p className="mb-8 text-sm leading-6 text-[#687169]">{sent ? t.success : t.body}</p>
        {!sent && (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase text-[#0f211a]">{t.label}</label>
              <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full border border-[rgba(32,35,31,0.18)] bg-white px-4 py-3 text-sm focus:border-[#0f211a] focus:outline-none" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-[#0f211a] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#24362f] disabled:opacity-60">{loading ? t.loading : t.button}</button>
          </form>
        )}
        <p className="mt-7 text-center text-sm"><Link href={`/${locale}/portal/login`} className="font-semibold text-[#0f211a] underline underline-offset-4">{t.back}</Link></p>
      </div>
    </div>
  )
}

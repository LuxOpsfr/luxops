'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import BrandLogo from '@/components/BrandLogo'

const copy = {
  en: { eyebrow: 'Secure client access', title: 'Choose a new password', body: 'Use at least 8 characters.', password: 'New password', confirm: 'Confirm password', button: 'Save my password', loading: 'Saving...', mismatch: 'The passwords do not match.', short: 'Your password must contain at least 8 characters.', invalid: 'This reset link is invalid or has expired.', request: 'Request a new link', successTitle: 'Password updated', success: 'Your new password is ready. You can now access your resources.', portal: 'Access my portal' },
  fr: { eyebrow: 'Accès client sécurisé', title: 'Choisissez un nouveau mot de passe', body: 'Utilisez au moins 8 caractères.', password: 'Nouveau mot de passe', confirm: 'Confirmer le mot de passe', button: 'Enregistrer mon mot de passe', loading: 'Enregistrement...', mismatch: 'Les mots de passe ne correspondent pas.', short: 'Votre mot de passe doit contenir au moins 8 caractères.', invalid: 'Ce lien de réinitialisation est invalide ou a expiré.', request: 'Demander un nouveau lien', successTitle: 'Mot de passe mis à jour', success: 'Votre nouveau mot de passe est prêt. Vous pouvez maintenant accéder à vos ressources.', portal: 'Accéder à mon espace' },
  es: { eyebrow: 'Acceso seguro de cliente', title: 'Elige una nueva contraseña', body: 'Utiliza al menos 8 caracteres.', password: 'Nueva contraseña', confirm: 'Confirmar contraseña', button: 'Guardar mi contraseña', loading: 'Guardando...', mismatch: 'Las contraseñas no coinciden.', short: 'La contraseña debe contener al menos 8 caracteres.', invalid: 'Este enlace no es válido o ha caducado.', request: 'Solicitar un nuevo enlace', successTitle: 'Contraseña actualizada', success: 'Tu nueva contraseña está lista. Ya puedes acceder a tus recursos.', portal: 'Acceder a mi portal' },
} as const

export default function UpdatePasswordPage() {
  const params = useParams()
  const locale = params.locale === 'fr' || params.locale === 'es' ? params.locale : 'en'
  const t = copy[locale]
  const [ready, setReady] = useState(false)
  const [checking, setChecking] = useState(true)
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    let active = true
    let timeout: ReturnType<typeof setTimeout>
    let unsubscribe: (() => void) | undefined

    const initialize = async () => {
      const { supabase } = await import('@/lib/supabase')
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (active && session) {
          setReady(true)
          setChecking(false)
        }
      })
      unsubscribe = () => subscription.unsubscribe()
      const { data: { session } } = await supabase.auth.getSession()
      if (active && session) {
        setReady(true)
        setChecking(false)
      }
      timeout = setTimeout(() => active && setChecking(false), 2500)
    }

    initialize()
    return () => { active = false; clearTimeout(timeout); unsubscribe?.() }
  }, [])

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    if (password.length < 8) return setError(t.short)
    if (password !== confirmation) return setError(t.mismatch)
    setLoading(true)
    setError('')
    const { supabase } = await import('@/lib/supabase')
    const { error: updateError } = await supabase.auth.updateUser({ password })
    setLoading(false)
    if (updateError) return setError(updateError.message)
    setSuccess(true)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-14">
      <Link href={`/${locale}`} className="mb-10 no-underline"><BrandLogo showMonogram /></Link>
      <div className="w-full max-w-[460px] border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-7 py-9 sm:px-10 sm:py-11">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a58658]">{t.eyebrow}</p>
        <h1 className="font-display mb-3 text-[2.25rem] font-medium leading-[1.05] text-[#0f211a]">{success ? t.successTitle : t.title}</h1>
        <p className="mb-8 text-sm leading-6 text-[#687169]">{success ? t.success : t.body}</p>
        {checking ? <div className="h-1 w-full overflow-hidden bg-[#e7e0d5]"><div className="h-full w-1/2 animate-pulse bg-[#a58658]" /></div> : success ? (
          <Link href={`/${locale}/portal/dashboard`} className="block w-full bg-[#0f211a] py-3.5 text-center text-sm font-semibold text-white">{t.portal}</Link>
        ) : ready ? (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div><label className="mb-1.5 block text-xs font-semibold uppercase text-[#0f211a]">{t.password}</label><input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} className="w-full border border-[rgba(32,35,31,0.18)] bg-white px-4 py-3 text-sm focus:border-[#0f211a] focus:outline-none" /></div>
            <div><label className="mb-1.5 block text-xs font-semibold uppercase text-[#0f211a]">{t.confirm}</label><input type="password" required value={confirmation} onChange={(event) => setConfirmation(event.target.value)} className="w-full border border-[rgba(32,35,31,0.18)] bg-white px-4 py-3 text-sm focus:border-[#0f211a] focus:outline-none" /></div>
            {error && <p className="border border-red-100 bg-red-50 px-4 py-2.5 text-sm text-red-600">{error}</p>}
            <button type="submit" disabled={loading} className="w-full bg-[#0f211a] py-3.5 text-sm font-semibold text-white hover:bg-[#24362f] disabled:opacity-60">{loading ? t.loading : t.button}</button>
          </form>
        ) : (
          <div><p className="mb-5 text-sm text-[#687169]">{t.invalid}</p><Link href={`/${locale}/portal/forgot-password`} className="font-semibold text-[#0f211a] underline underline-offset-4">{t.request}</Link></div>
        )}
      </div>
    </div>
  )
}

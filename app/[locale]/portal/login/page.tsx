'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import posthog from 'posthog-js'
import { identifyPostHogUser } from '@/lib/posthogIdentity'

export default function LoginPage() {
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const isFr = locale === 'fr'

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { supabase } = await import('@/lib/supabase')
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error

      identifyPostHogUser(email, { locale, source: 'portal_login' })
      posthog.capture('user_logged_in', { locale })
      router.push(`/${locale}/portal/dashboard`)
    } catch {
      setError(isFr ? 'Connexion indisponible ou identifiants incorrects.' : 'Sign-in unavailable or incorrect credentials.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-14">
      <Link href={`/${locale}`} className="mb-10 no-underline">
        <span
          className="font-display text-[2.2rem] text-[#0f211a]"
          style={{
            lineHeight: 1,
          }}
        >
          LuxOps
        </span>
      </Link>

      <div className="w-full max-w-[460px] border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-7 py-9 sm:px-10 sm:py-11">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a58658]">
          {isFr ? 'Espace client' : 'Client portal'}
        </p>
        <h1 className="font-display text-[2.25rem] font-medium leading-[1.05] text-[#0f211a] mb-3">
          {isFr ? 'Accéder à mon espace' : 'Access my portal'}
        </h1>
        <p className="text-sm leading-6 text-[#687169] mb-8">
          {isFr ? 'Vos playbooks sont disponibles après connexion.' : 'Your playbooks are available after login.'}
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0f211a] mb-1.5 uppercase tracking-wide">
              {isFr ? 'Email' : 'Email'}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
              className="w-full bg-white px-4 py-3 border border-[rgba(32,35,31,0.18)] text-sm focus:outline-none focus:border-[#0f211a] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0f211a] mb-1.5 uppercase tracking-wide">
              {isFr ? 'Mot de passe' : 'Password'}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white px-4 py-3 border border-[rgba(32,35,31,0.18)] text-sm focus:outline-none focus:border-[#0f211a] transition-colors"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#0f211a] text-white text-sm font-semibold hover:bg-[#24362f] transition-colors disabled:opacity-60"
          >
            {loading ? (isFr ? 'Connexion...' : 'Signing in...') : (isFr ? 'Se connecter' : 'Sign in')}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          {isFr ? 'Pas encore de compte ?' : "Don't have an account?"}{' '}
          <Link href={`/${locale}/portal/register`} className="text-[#0f211a] font-semibold underline underline-offset-4">
            {isFr ? 'Créer un compte' : 'Create account'}
          </Link>
        </p>
      </div>

      <p className="mt-6 text-xs text-gray-400">
        <Link href={`/${locale}`} className="hover:text-[#1A2E44] transition-colors">
          {isFr ? '← Retour au site' : '← Back to site'}
        </Link>
      </p>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
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

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(isFr ? 'Email ou mot de passe incorrect.' : 'Incorrect email or password.')
      setLoading(false)
      return
    }

    identifyPostHogUser(email, { locale, source: 'portal_login' })
    posthog.capture('user_logged_in', { locale })
    router.push(`/${locale}/portal/dashboard`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <Link href={`/${locale}`} className="mb-8 no-underline">
        <span
          className="font-bold uppercase text-[#0a1d2e]"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            letterSpacing: '0.22em',
            lineHeight: 1,
          }}
        >
          LuxOps
        </span>
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-xl font-bold text-[#1A2E44] mb-1">
          {isFr ? 'Accéder à mon espace' : 'Access my portal'}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {isFr ? 'Vos playbooks sont disponibles après connexion.' : 'Your playbooks are available after login.'}
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1A2E44] mb-1.5 uppercase tracking-wide">
              {isFr ? 'Email' : 'Email'}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A2E44] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1A2E44] mb-1.5 uppercase tracking-wide">
              {isFr ? 'Mot de passe' : 'Password'}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A2E44] transition-colors"
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
            className="w-full py-2.5 bg-[#1A2E44] text-white text-sm font-semibold rounded-lg hover:bg-[#0f1e2e] transition-colors disabled:opacity-60"
          >
            {loading ? (isFr ? 'Connexion...' : 'Signing in...') : (isFr ? 'Se connecter' : 'Sign in')}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          {isFr ? 'Pas encore de compte ?' : "Don't have an account?"}{' '}
          <Link href={`/${locale}/portal/register`} className="text-[#0056D2] font-medium hover:underline">
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

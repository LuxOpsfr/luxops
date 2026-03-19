'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function RegisterPage() {
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const isFr = locale === 'fr'

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (password.length < 8) {
      setError(isFr ? 'Le mot de passe doit contenir au moins 8 caractères.' : 'Password must be at least 8 characters.')
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/${locale}/portal/dashboard`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <Link href={`/${locale}`} className="mb-8 text-[#1A2E44] font-bold text-xl tracking-widest">
          LuxOps
        </Link>
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-[#1A2E44] mb-2">
            {isFr ? 'Vérifiez votre email' : 'Check your email'}
          </h2>
          <p className="text-sm text-gray-500">
            {isFr
              ? `Un lien de confirmation a été envoyé à ${email}. Cliquez dessus pour accéder à votre espace.`
              : `A confirmation link has been sent to ${email}. Click it to access your portal.`}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <Link href={`/${locale}`} className="mb-8 text-[#1A2E44] font-bold text-xl tracking-widest">
        LuxOps
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-xl font-bold text-[#1A2E44] mb-1">
          {isFr ? 'Créer mon compte' : 'Create my account'}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {isFr
            ? 'Utilisez l\'email avec lequel vous avez effectué votre achat.'
            : 'Use the same email you used for your purchase.'}
        </p>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1A2E44] mb-1.5 uppercase tracking-wide">
              Email
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
              placeholder={isFr ? '8 caractères minimum' : 'Minimum 8 characters'}
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
            {loading ? (isFr ? 'Création...' : 'Creating...') : (isFr ? 'Créer mon compte' : 'Create account')}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          {isFr ? 'Déjà un compte ?' : 'Already have an account?'}{' '}
          <Link href={`/${locale}/portal/login`} className="text-[#0056D2] font-medium hover:underline">
            {isFr ? 'Se connecter' : 'Sign in'}
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

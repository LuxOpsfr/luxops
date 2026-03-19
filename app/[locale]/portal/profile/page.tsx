'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import PortalShell from '@/components/portal/PortalShell'
import { Save, CheckCircle } from 'lucide-react'

interface Profile {
  full_name: string
  hotel_name: string
  role: string
  notify_new_resources: boolean
  notify_updates: boolean
}

export default function ProfilePage() {
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string
  const isFr = locale === 'fr'

  const [email, setEmail] = useState('')
  const [userId, setUserId] = useState('')
  const [profile, setProfile] = useState<Profile>({
    full_name: '',
    hotel_name: '',
    role: '',
    notify_new_resources: true,
    notify_updates: true,
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.replace(`/${locale}/portal/login`); return }

      setEmail(session.user.email ?? '')
      setUserId(session.user.id)

      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (data) {
        setProfile({
          full_name: data.full_name ?? '',
          hotel_name: data.hotel_name ?? '',
          role: data.role ?? '',
          notify_new_resources: data.notify_new_resources ?? true,
          notify_updates: data.notify_updates ?? true,
        })
      }
      setLoading(false)
    }
    load()
  }, [locale, router])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    await supabase.from('profiles').upsert({
      id: userId,
      ...profile,
      updated_at: new Date().toISOString(),
    })

    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
        <div className="w-6 h-6 border-2 border-[#1A2E44] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <PortalShell locale={locale} email={email}>
      <div className="mb-8">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
          {isFr ? 'Paramètres' : 'Settings'}
        </p>
        <h1 className="text-2xl font-bold text-[#1A2E44]">
          {isFr ? 'Mon profil' : 'My profile'}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {isFr
            ? 'Informations sur votre établissement et préférences.'
            : 'Your property information and preferences.'}
        </p>
      </div>

      <form onSubmit={handleSave} className="grid gap-6">
        {/* Account info */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-sm font-bold text-[#1A2E44] mb-4 uppercase tracking-wide">
            {isFr ? 'Informations du compte' : 'Account information'}
          </h2>
          <div className="grid gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-400 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                {isFr ? 'Nom complet' : 'Full name'}
              </label>
              <input
                type="text"
                value={profile.full_name}
                onChange={e => setProfile({ ...profile, full_name: e.target.value })}
                placeholder={isFr ? 'Votre nom' : 'Your name'}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A2E44] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Property info */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-sm font-bold text-[#1A2E44] mb-4 uppercase tracking-wide">
            {isFr ? 'Votre établissement' : 'Your property'}
          </h2>
          <div className="grid gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                {isFr ? 'Nom de l\'hôtel' : 'Hotel name'}
              </label>
              <input
                type="text"
                value={profile.hotel_name}
                onChange={e => setProfile({ ...profile, hotel_name: e.target.value })}
                placeholder={isFr ? 'Ex : Hôtel Le Grand' : 'Ex: The Grand Hotel'}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A2E44] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                {isFr ? 'Votre poste' : 'Your role'}
              </label>
              <select
                value={profile.role}
                onChange={e => setProfile({ ...profile, role: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A2E44] transition-colors bg-white"
              >
                <option value="">{isFr ? 'Sélectionner...' : 'Select...'}</option>
                <option value="gm">{isFr ? 'Directeur Général' : 'General Manager'}</option>
                <option value="dop">{isFr ? 'Directeur des Opérations' : 'Director of Operations'}</option>
                <option value="fo_manager">{isFr ? 'Responsable Front Office' : 'Front Office Manager'}</option>
                <option value="hsk_manager">{isFr ? 'Gouvernante Générale' : 'Housekeeping Manager'}</option>
                <option value="fb_manager">{isFr ? 'Responsable F&B' : 'F&B Manager'}</option>
                <option value="spa_manager">{isFr ? 'Responsable Spa' : 'Spa Manager'}</option>
                <option value="hr">{isFr ? 'Ressources Humaines' : 'Human Resources'}</option>
                <option value="other">{isFr ? 'Autre' : 'Other'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-sm font-bold text-[#1A2E44] mb-4 uppercase tracking-wide">
            {isFr ? 'Notifications' : 'Notifications'}
          </h2>
          <div className="flex flex-col gap-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-medium text-[#1A2E44]">
                  {isFr ? 'Nouvelles ressources' : 'New resources'}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {isFr
                    ? 'Recevoir un email à chaque nouveau playbook ou template.'
                    : 'Get notified when a new playbook or template is released.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setProfile({ ...profile, notify_new_resources: !profile.notify_new_resources })}
                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ml-4 ${
                  profile.notify_new_resources ? 'bg-[#2E7D32]' : 'bg-gray-200'
                }`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  profile.notify_new_resources ? 'translate-x-5' : ''
                }`} />
              </button>
            </label>

            <div className="border-t border-gray-100" />

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-medium text-[#1A2E44]">
                  {isFr ? 'Mises à jour des ressources' : 'Resource updates'}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {isFr
                    ? 'Être informé des mises à jour de vos playbooks existants.'
                    : 'Be informed when your existing playbooks are updated.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setProfile({ ...profile, notify_updates: !profile.notify_updates })}
                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ml-4 ${
                  profile.notify_updates ? 'bg-[#2E7D32]' : 'bg-gray-200'
                }`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  profile.notify_updates ? 'translate-x-5' : ''
                }`} />
              </button>
            </label>
          </div>
        </div>

        {/* Save */}
        <div className="flex items-center justify-between">
          {saved && (
            <span className="flex items-center gap-2 text-sm text-[#2E7D32] font-medium">
              <CheckCircle size={16} />
              {isFr ? 'Profil enregistré' : 'Profile saved'}
            </span>
          )}
          <button
            type="submit"
            disabled={saving}
            className="ml-auto flex items-center gap-2 px-6 py-2.5 bg-[#1A2E44] text-white text-sm font-semibold rounded-lg hover:bg-[#0f1e2e] transition-colors disabled:opacity-60"
          >
            <Save size={15} />
            {saving
              ? (isFr ? 'Enregistrement...' : 'Saving...')
              : (isFr ? 'Enregistrer' : 'Save')}
          </button>
        </div>
      </form>
    </PortalShell>
  )
}

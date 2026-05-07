'use client'

import { useState } from 'react'
import { Download, ChevronRight, Check } from 'lucide-react'
import posthog from 'posthog-js'

const DEPARTMENTS = [
  {
    key: 'fo',
    en: 'Front Office',
    fr: 'Front Office',
    desc_en: '12 chapters · Check-in, concierge, complaint handling and guest relations procedures',
    desc_fr: '12 chapitres · Procédures de check-in, conciergerie, gestion des réclamations et relations clients',
  },
  {
    key: 'hsk',
    en: 'Housekeeping',
    fr: 'Housekeeping',
    desc_en: '10 chapters · Room cleaning, supervisor inspection, turndown and floor standards',
    desc_fr: '10 chapitres · Nettoyage des chambres, inspection superviseur, turndown et standards d\'étage',
  },
  {
    key: 'fb',
    en: 'Food & Beverage',
    fr: 'Food & Beverage',
    desc_en: '10 chapters · Service sequence, bar operations, room service and F&B standards',
    desc_fr: '10 chapitres · Séquence de service, bar, room service et standards F&B',
  },
  {
    key: 'spa',
    en: 'Spa & Wellness',
    fr: 'Spa & Wellness',
    desc_en: '9 chapters · Treatment protocols, guest journey, retail and wellness standards',
    desc_fr: '9 chapitres · Protocoles de soins, parcours client, retail et standards wellness',
  },
]

const DOWNLOAD_URLS: Record<string, { en: string; fr: string }> = {
  fo: { en: '/downloads/fo-intro-en.pdf', fr: '/downloads/fo-intro-fr.pdf' },
  hsk: { en: '/downloads/hsk-intro-en.pdf', fr: '/downloads/hsk-intro-fr.pdf' },
  fb: { en: '/downloads/fb-intro-en.pdf', fr: '/downloads/fb-intro-fr.pdf' },
  spa: { en: '/downloads/spa-intro-en.pdf', fr: '/downloads/spa-intro-fr.pdf' },
}

export default function LeadMagnetForm({ locale }: { locale: string }) {
  const isEn = locale === 'en'
  const [selected, setSelected] = useState<string>('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [downloadDept, setDownloadDept] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selected || !email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, department: selected, locale }),
      })
      if (!res.ok) throw new Error()
      setDownloadDept(selected)
      setStatus('success')
      posthog.capture('lead_magnet_submitted', {
        department: selected,
        locale,
      })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    const urls = DOWNLOAD_URLS[downloadDept]
    const dept = DEPARTMENTS.find(d => d.key === downloadDept)
    return (
      <div className="max-w-xl mx-auto text-center">
        <div
          className="w-12 h-12 bg-[#003d9b] flex items-center justify-center mx-auto mb-6"
          style={{ borderRadius: '0.125rem' }}
        >
          <Check className="text-white" size={24} />
        </div>
        <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] mb-3">
          {isEn ? 'Your chapter is ready' : 'Votre chapitre est prêt'}
        </h2>
        <p className="text-[#4f6074] mb-8 leading-relaxed">
          {isEn
            ? `Download the introduction chapter of the ${dept?.en} Playbook below. Both language versions are included.`
            : `Téléchargez ci-dessous le chapitre d'introduction du Playbook ${dept?.fr}. Les deux versions linguistiques sont incluses.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={urls.en}
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#003d9b] text-white font-bold text-sm"
            style={{ borderRadius: '0.125rem' }}
          >
            <Download size={16} /> English PDF
          </a>
          <a
            href={urls.fr}
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#003d9b] text-[#003d9b] font-bold text-sm"
            style={{ borderRadius: '0.125rem' }}
          >
            <Download size={16} /> PDF Français
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {DEPARTMENTS.map(dept => (
          <button
            type="button"
            key={dept.key}
            onClick={() => setSelected(dept.key)}
            className={`text-left p-5 border transition-all ${
              selected === dept.key
                ? 'border-[#003d9b] bg-[#eef4ff]'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            style={{ borderRadius: '0.125rem' }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="font-display font-bold text-[#0a1d2e] text-sm">
                {isEn ? dept.en : dept.fr}
              </span>
              {selected === dept.key && (
                <div
                  className="w-4 h-4 bg-[#003d9b] flex items-center justify-center flex-shrink-0"
                  style={{ borderRadius: '0.125rem' }}
                >
                  <Check className="text-white" size={10} />
                </div>
              )}
            </div>
            <p className="text-xs text-[#4f6074] leading-relaxed">
              {isEn ? dept.desc_en : dept.desc_fr}
            </p>
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={isEn ? 'Your email address' : 'Votre adresse email'}
          className="flex-1 px-4 py-3 border border-gray-200 text-sm text-[#0a1d2e] outline-none focus:border-[#003d9b]"
          style={{ borderRadius: '0.125rem' }}
        />
        <button
          type="submit"
          disabled={!selected || !email || status === 'loading'}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#003d9b] text-white font-bold text-sm disabled:opacity-40 transition-opacity whitespace-nowrap"
          style={{ borderRadius: '0.125rem' }}
        >
          {status === 'loading'
            ? (isEn ? 'Sending...' : 'Envoi...')
            : (isEn ? 'Get the Chapter' : 'Recevoir le chapitre')}
          {status !== 'loading' && <ChevronRight size={16} />}
        </button>
      </div>

      {!selected && (
        <p className="text-xs text-[#4f6074] mt-3">
          {isEn ? 'Select a department above to continue.' : 'Sélectionnez un département ci-dessus pour continuer.'}
        </p>
      )}
      {status === 'error' && (
        <p className="text-xs text-red-500 mt-3">
          {isEn ? 'Something went wrong. Please try again.' : 'Une erreur est survenue. Veuillez réessayer.'}
        </p>
      )}
    </form>
  )
}

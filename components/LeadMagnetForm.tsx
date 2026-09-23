'use client'

import { useEffect, useState } from 'react'
import { Download, ChevronRight, Check, ArrowRight, FileCheck2, BookOpen } from 'lucide-react'
import posthog from 'posthog-js'
import TrackedLink from '@/components/TrackedLink'
import { useCurrency } from '@/context/CurrencyContext'

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

const NEXT_STEPS: Record<string, {
  starter?: { slug: string; en: string; fr: string }
  playbook: { slug: string; en: string; fr: string }
}> = {
  fo: {
    starter: { slug: 'fo-starter-pack', en: 'Front Office Starter Pack', fr: 'Starter Pack Front Office' },
    playbook: { slug: 'fo', en: 'Front Office Playbook', fr: 'Playbook Front Office' },
  },
  hsk: {
    starter: { slug: 'hsk-starter-pack', en: 'Housekeeping Starter Pack', fr: 'Starter Pack Housekeeping' },
    playbook: { slug: 'hsk', en: 'Housekeeping Playbook', fr: 'Playbook Housekeeping' },
  },
  fb: {
    starter: { slug: 'fb-starter-pack', en: 'F&B Service Starter Pack', fr: 'Starter Pack F&B' },
    playbook: { slug: 'fb', en: 'F&B Playbook', fr: 'Playbook F&B' },
  },
  spa: {
    playbook: { slug: 'spa', en: 'Spa & Wellness Playbook', fr: 'Playbook Spa & Wellness' },
  },
}

export default function LeadMagnetForm({ locale }: { locale: string }) {
  const isEn = locale === 'en'
  const { formatProductPrice } = useCurrency()
  const [selected, setSelected] = useState<string>('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [downloadDept, setDownloadDept] = useState<string>('')

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('preview') === 'success') {
      const department = params.get('department') || 'hsk'
      if (DOWNLOAD_URLS[department]) {
        setDownloadDept(department)
        setStatus('success')
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selected || !email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          department: selected,
          locale,
          currentUrl: window.location.href,
          pathname: window.location.pathname,
          posthogDistinctId: posthog.get_distinct_id?.(),
          posthogSessionId: posthog.get_session_id?.(),
        }),
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
    const nextStep = NEXT_STEPS[downloadDept]
    return (
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-xl text-center">
          <div
            className="mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-[#0f211a]"
            style={{ borderRadius: '0.125rem' }}
          >
            <Check className="text-white" size={24} />
          </div>
          <h2 className="mb-3 font-display text-2xl font-medium text-[#0f211a]">
            {isEn ? 'Your chapter is ready' : 'Votre chapitre est prêt'}
          </h2>
          <p className="mb-8 leading-relaxed text-[#5d665f]">
            {isEn
              ? `Download the introduction chapter of the ${dept?.en} Playbook below. Both language versions are included.`
              : `Téléchargez ci-dessous le chapitre d'introduction du Playbook ${dept?.fr}. Les deux versions linguistiques sont incluses.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={urls.en}
              download
              className="inline-flex items-center justify-center gap-2 bg-[#0f211a] px-6 py-3 text-sm font-semibold text-white"
              style={{ borderRadius: '0.125rem' }}
            >
              <Download size={16} /> English PDF
            </a>
            <a
              href={urls.fr}
              download
              className="inline-flex items-center justify-center gap-2 border border-[#24362f] px-6 py-3 text-sm font-semibold text-[#24362f]"
              style={{ borderRadius: '0.125rem' }}
            >
              <Download size={16} /> PDF Français
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-[rgba(32,35,31,0.16)] pt-12 text-left">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#a58658]">
              {isEn ? 'Continue with the complete tools' : 'Poursuivre avec les outils complets'}
            </p>
            <h3 className="mb-3 font-display text-3xl font-medium text-[#0f211a]">
              {isEn ? 'Choose the level of detail you need' : 'Choisissez le niveau de détail dont vous avez besoin'}
            </h3>
            <p className="leading-relaxed text-[#5d665f]">
              {isEn
                ? 'The free chapter introduces the method. The Starter Pack provides editable daily tools, while the full Playbook brings together the complete department reference.'
                : 'Le chapitre gratuit présente la méthode. Le Starter Pack apporte des outils quotidiens modifiables, tandis que le Playbook réunit toute la référence du département.'}
            </p>
          </div>

          <div className={`grid gap-4 ${nextStep.starter ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            <div className="border border-[rgba(32,35,31,0.16)] bg-[#fcfbf8] p-6">
              <div className="mb-5 flex h-9 w-9 items-center justify-center bg-[#e7e0d5] text-[#24362f]">
                <Check size={17} />
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#737685]">01</p>
              <h4 className="mb-2 font-display text-lg font-medium text-[#0f211a]">
                {isEn ? 'Free chapter' : 'Chapitre gratuit'}
              </h4>
              <p className="text-sm leading-relaxed text-[#5d665f]">
                {isEn ? 'Method overview and introduction.' : 'Présentation de la méthode et introduction.'}
              </p>
            </div>

            {nextStep.starter ? (
              <div className="border border-[#a58658] bg-[#f5f1e9] p-6">
                <div className="mb-5 flex h-9 w-9 items-center justify-center bg-[#e7e0d5] text-[#24362f]">
                  <FileCheck2 size={17} />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#a58658]">02</p>
                <h4 className="mb-2 font-display text-lg font-medium text-[#0f211a]">
                  {isEn ? nextStep.starter.en : nextStep.starter.fr}
                </h4>
                <p className="mb-5 text-sm leading-relaxed text-[#5d665f]">
                  {isEn ? 'Editable checklists and tools for immediate use.' : 'Checklists et outils modifiables pour un usage immédiat.'}
                </p>
                <TrackedLink
                  href={`/${locale}/playbooks/${nextStep.starter.slug}`}
                  eventName="lead_magnet_next_step_clicked"
                  eventProperties={{ department: downloadDept, destination: 'starter_pack', locale }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#24362f]"
                >
                  {isEn ? `View at ${formatProductPrice('starter_pack')}` : `Voir à ${formatProductPrice('starter_pack')}`}
                  <ArrowRight size={15} />
                </TrackedLink>
              </div>
            ) : null}

            <div className="border border-[rgba(32,35,31,0.16)] bg-[#fcfbf8] p-6">
              <div className="mb-5 flex h-9 w-9 items-center justify-center bg-[#e7e0d5] text-[#24362f]">
                <BookOpen size={17} />
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#737685]">
                {nextStep.starter ? '03' : '02'}
              </p>
              <h4 className="mb-2 font-display text-lg font-medium text-[#0f211a]">
                {isEn ? nextStep.playbook.en : nextStep.playbook.fr}
              </h4>
              <p className="mb-5 text-sm leading-relaxed text-[#5d665f]">
                {isEn ? 'Complete SOP reference for the department.' : 'Référence SOP complète du département.'}
              </p>
              <TrackedLink
                href={`/${locale}/playbooks/${nextStep.playbook.slug}`}
                eventName="lead_magnet_next_step_clicked"
                eventProperties={{ department: downloadDept, destination: 'playbook', locale }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#24362f]"
              >
                {isEn ? `View at ${formatProductPrice('playbook')}` : `Voir à ${formatProductPrice('playbook')}`}
                <ArrowRight size={15} />
              </TrackedLink>
            </div>
          </div>
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
                ? 'border-[#a58658] bg-[#f5f1e9]'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            style={{ borderRadius: '0.125rem' }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="font-display text-sm font-medium text-[#0f211a]">
                {isEn ? dept.en : dept.fr}
              </span>
              {selected === dept.key && (
                <div
                  className="flex h-4 w-4 flex-shrink-0 items-center justify-center bg-[#0f211a]"
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
          className="flex-1 border border-[rgba(32,35,31,0.2)] px-4 py-3 text-sm text-[#0f211a] outline-none focus:border-[#a58658]"
          style={{ borderRadius: '0.125rem' }}
        />
        <button
          type="submit"
          disabled={!selected || !email || status === 'loading'}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#0f211a] px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
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

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, X } from 'lucide-react'
import posthog from 'posthog-js'
import TrackedLink from '@/components/TrackedLink'
import { useCurrency } from '@/context/CurrencyContext'

type DepartmentId = 'fo' | 'hsk' | 'fb' | 'spa'

interface DownloadDetail {
  department?: string
  checklist?: string
  checklist_name?: string
  target_url?: string
}

const PRODUCTS: Record<DepartmentId, {
  slug: string
  image: string
  name: { en: string; fr: string }
  headline: { en: string; fr: string }
  description: { en: string; fr: string }
  includesTools: boolean
}> = {
  fo: {
    slug: 'fo',
    image: '/images/editorial-hospitality/dept-front-office-v2.jpg',
    name: { en: 'Front Office', fr: 'Front Office' },
    headline: { en: 'Make every arrival feel considered.', fr: 'Soignez chaque arrivée, à chaque service.' },
    description: {
      en: 'From guest communication to shift handovers, give the front desk clear procedures to adapt and share.',
      fr: 'De la communication client aux passations, donnez à la réception des procédures à adapter et partager.',
    },
    includesTools: true,
  },
  hsk: {
    slug: 'hsk',
    image: '/images/editorial-hospitality/dept-housekeeping-v2.jpg',
    name: { en: 'Housekeeping', fr: 'Housekeeping' },
    headline: { en: 'Make every room meet the same standard.', fr: 'Le même standard, dans chaque chambre.' },
    description: {
      en: 'Go beyond a single checklist with room cleaning procedures, inspection standards and tools for your team.',
      fr: 'Allez au-delà d’une checklist avec des procédures de nettoyage, des standards d’inspection et des outils pour l’équipe.',
    },
    includesTools: true,
  },
  fb: {
    slug: 'fb',
    image: '/images/editorial-hospitality/dept-food-beverage-v2.jpg',
    name: { en: 'Food & Beverage', fr: 'Food & Beverage' },
    headline: { en: 'Give every service a clear sequence.', fr: 'Une méthode claire pour chaque service.' },
    description: {
      en: 'Connect opening checks to the full restaurant, bar and room service procedures your team can adapt.',
      fr: 'Reliez les contrôles d’ouverture aux procédures du restaurant, du bar et du room service à adapter.',
    },
    includesTools: true,
  },
  spa: {
    slug: 'spa',
    image: '/images/editorial-hospitality/dept-spa-wellness-v2.jpg',
    name: { en: 'Spa & Wellness', fr: 'Spa & Bien-être' },
    headline: { en: 'Make the guest journey feel seamless.', fr: 'Un parcours client fluide, du début à la fin.' },
    description: {
      en: 'Bring treatment protocols, room preparation and guest care into one operating reference for your spa.',
      fr: 'Réunissez les protocoles de soin, la préparation des cabines et l’accueil dans un même référentiel.',
    },
    includesTools: false,
  },
}

function resolveDepartment(detail: DownloadDetail): DepartmentId | null {
  const explicit = detail.department?.toLowerCase()
  if (explicit === 'fo' || explicit === 'front_office' || explicit === 'front-office') return 'fo'
  if (explicit === 'hsk' || explicit === 'housekeeping') return 'hsk'
  if (explicit === 'fb' || explicit === 'f&b' || explicit === 'food_and_beverage') return 'fb'
  if (explicit === 'spa') return 'spa'

  const source = `${detail.target_url ?? ''} ${detail.checklist ?? ''} ${detail.checklist_name ?? ''}`.toLowerCase()
  if (/housekeeping|room-attendant|bathroom|departure-room|chambre|gouvernante|salle-de-bain/.test(source)) return 'hsk'
  if (/front-desk|front-office|night-audit|reception|réception/.test(source)) return 'fo'
  if (/restaurant|room-service|bar-opening|bar-closing|f&b/.test(source)) return 'fb'
  if (/spa|wellness/.test(source)) return 'spa'
  return null
}

export default function DownloadFollowUp({ locale }: { locale: string }) {
  const isEn = locale === 'en'
  const { formatProductPrice } = useCurrency()
  const [department, setDepartment] = useState<DepartmentId | null>(null)

  useEffect(() => {
    let previewTimer: number | undefined
    if (process.env.NODE_ENV === 'development') {
      const params = new URLSearchParams(window.location.search)
      const previewDepartment = params.get('department')
      if (params.get('preview') === 'download' && previewDepartment && previewDepartment in PRODUCTS) {
        previewTimer = window.setTimeout(() => setDepartment(previewDepartment as DepartmentId), 0)
      }
    }

    function showFollowUp(event: Event) {
      const detail = (event as CustomEvent<DownloadDetail>).detail ?? {}
      const nextDepartment = resolveDepartment(detail)
      if (!nextDepartment) return

      setDepartment(nextDepartment)
      posthog.capture('download_follow_up_shown', {
        department: nextDepartment,
        checklist: detail.checklist ?? detail.checklist_name,
        target_url: detail.target_url,
        locale,
      })
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setDepartment(null)
    }

    window.addEventListener('luxops:download-follow-up', showFollowUp)
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      if (previewTimer !== undefined) window.clearTimeout(previewTimer)
      window.removeEventListener('luxops:download-follow-up', showFollowUp)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [locale])

  if (!department) return null

  const product = PRODUCTS[department]
  const language = isEn ? 'en' : 'fr'

  return (
    <aside
      role="region"
      aria-label={isEn ? 'Download next steps' : 'Suite du téléchargement'}
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[90] max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-[26px] border border-[#e7dfd1] bg-[#fcfbf8] text-[#0f211a] shadow-[0_26px_70px_rgba(15,33,26,0.23)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[460px] sm:rounded-[30px]"
    >
      <div className="relative h-[140px] overflow-hidden bg-[#23382d] sm:h-[158px]">
        <Image
          src={product.image}
          alt={isEn ? `${product.name.en} in a luxury hotel` : `${product.name.fr} dans un hôtel de luxe`}
          fill
          sizes="(min-width: 640px) 460px, calc(100vw - 24px)"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/65 via-transparent to-[#10251d]/20" />
        <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#10251d]/85 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm sm:left-6">
          <Check size={13} strokeWidth={2.2} />
          {isEn ? 'Your PDF is downloading' : 'Votre PDF se télécharge'}
        </span>
        <button
          type="button"
          onClick={() => setDepartment(null)}
          aria-label={isEn ? 'Close' : 'Fermer'}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-[#fcfbf8]/95 text-[#31463a] shadow-sm transition hover:bg-white hover:text-[#0f211a]"
        >
          <X size={18} />
        </button>
      </div>

      <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
        <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#937345]">
          {isEn ? `${product.name.en} · SOP manual` : `${product.name.fr} · Manuel SOP`}
        </p>
        <h2 className="mt-2 max-w-[390px] font-display text-[1.55rem] font-medium leading-[1.13] tracking-[-.025em] text-[#10251d] sm:text-[1.7rem]">
          {product.headline[language]}
        </h2>
        <p className="mt-2 text-[13px] leading-[1.55] text-[#5c6960]">
          {product.description[language]}
        </p>
        <p className="mt-3 text-[11px] font-medium leading-5 text-[#607066]">
          {isEn ? 'Editable PDF & PowerPoint · English & French' : 'PDF et PowerPoint modifiables · Français et anglais'}
          {product.includesTools ? (isEn ? ' · Practical tools included' : ' · Outils pratiques inclus') : ''}
        </p>
        <TrackedLink
          href={`/${locale}/playbooks/${product.slug}`}
          eventName="download_follow_up_clicked"
          eventProperties={{ department, destination: 'playbook', locale }}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full bg-[#10251d] px-5 text-[12px] font-semibold text-[#fcfbf8] shadow-[0_8px_18px_rgba(15,33,26,.15)] transition hover:-translate-y-0.5 hover:bg-[#243f31] sm:text-[13px]"
        >
          <span>{isEn ? 'Explore the complete manual' : 'Découvrir le manuel complet'}</span>
          <span className="inline-flex shrink-0 items-center gap-2">{formatProductPrice('playbook')} <ArrowRight size={16} /></span>
        </TrackedLink>
      </div>
    </aside>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, BookOpen, Check, FileCheck2, X } from 'lucide-react'
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
  starter?: { slug: string; en: string; fr: string }
  playbook: { slug: string; en: string; fr: string }
}> = {
  fo: {
    starter: { slug: 'fo-starter-pack', en: 'Front Office Starter Pack', fr: 'Starter Pack Front Office' },
    playbook: { slug: 'fo', en: 'Front Office Playbook', fr: 'Playbook Front Office' },
  },
  hsk: {
    starter: { slug: 'hsk-starter-pack', en: 'Housekeeping Inspection Kit', fr: 'Kit Inspection Housekeeping' },
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
      window.removeEventListener('luxops:download-follow-up', showFollowUp)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [locale])

  if (!department) return null

  const product = PRODUCTS[department]

  return (
    <aside
      role="region"
      aria-label={isEn ? 'Download next steps' : 'Suite du téléchargement'}
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[90] border border-[#cbd8e8] bg-white p-5 shadow-[0_22px_70px_rgba(10,29,46,0.24)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[430px] sm:p-6"
    >
      <button
        type="button"
        onClick={() => setDepartment(null)}
        aria-label={isEn ? 'Close' : 'Fermer'}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center text-[#4f6074] transition-colors hover:bg-[#eef4ff] hover:text-[#0a1d2e]"
      >
        <X size={18} />
      </button>

      <div className="mb-5 flex h-10 w-10 items-center justify-center bg-[#eef4ff] text-[#003d9b]">
        <Check size={19} />
      </div>
      <p className="mb-2 pr-10 font-display text-xl font-extrabold text-[#0a1d2e]">
        {isEn ? 'Your PDF download has started' : 'Le téléchargement de votre PDF a démarré'}
      </p>
      <p className="mb-6 text-sm leading-relaxed text-[#4f6074]">
        {product.starter
          ? isEn
            ? 'For editable files and the complete set of practical tools, continue with the Starter Pack.'
            : 'Pour obtenir les fichiers modifiables et l’ensemble des outils pratiques, poursuivez avec le Starter Pack.'
          : isEn
            ? 'For the complete department procedures and editable files, continue with the Playbook.'
            : 'Pour obtenir toutes les procédures du département et les fichiers modifiables, poursuivez avec le Playbook.'}
      </p>

      <div className="flex flex-col gap-3">
        {product.starter ? (
          <TrackedLink
            href={`/${locale}/playbooks/${product.starter.slug}`}
            eventName="download_follow_up_clicked"
            eventProperties={{ department, destination: 'starter_pack', locale }}
            className="inline-flex items-center justify-between gap-3 bg-[#003d9b] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#002f78]"
          >
            <span className="inline-flex items-center gap-2">
              <FileCheck2 size={17} />
              {isEn ? product.starter.en : product.starter.fr}
            </span>
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              {formatProductPrice('starter_pack')} <ArrowRight size={16} />
            </span>
          </TrackedLink>
        ) : null}

        <TrackedLink
          href={`/${locale}/playbooks/${product.playbook.slug}`}
          eventName="download_follow_up_clicked"
          eventProperties={{ department, destination: 'playbook', locale }}
          className="inline-flex items-center justify-between gap-3 border border-[#cbd8e8] px-5 py-3.5 text-sm font-bold text-[#0a1d2e] transition-colors hover:border-[#003d9b] hover:text-[#003d9b]"
        >
          <span className="inline-flex items-center gap-2">
            <BookOpen size={17} />
            {isEn ? product.playbook.en : product.playbook.fr}
          </span>
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            {formatProductPrice('playbook')} <ArrowRight size={16} />
          </span>
        </TrackedLink>
      </div>
    </aside>
  )
}

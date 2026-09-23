'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import posthog from 'posthog-js'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

interface TrainingQuoteFormData {
  name: string
  email: string
  company: string
  improvement: string
}

const trainingFormCopy = {
  en: {
    messageTitle: 'Training quote request',
    propertyEmailLabel: 'Property',
    improvementEmailLabel: 'What to improve',
    phoneEmailLabel: 'Phone',
    timeframeEmailLabel: 'Timing',
    participantsEmailLabel: 'Participants',
    subject: 'On-property training quote request',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'name@hotel.com',
    property: 'Property',
    propertyPlaceholder: 'Hotel or group name',
    improvement: 'What would you like to improve?',
    improvementPlaceholder: 'Tell us about the team, service or standards you want to develop.',
    phone: 'Phone',
    optional: 'Optional',
    timing: 'Timing',
    timingPlaceholder: 'Approximate timing',
    teamSize: 'Team size',
    teamSizePlaceholder: 'Approx.',
    required: 'Required',
    validEmailRequired: 'Valid email required',
    success: 'Thank you. Your training request has been sent.',
    error: 'The request could not be sent. Please email contact@luxops.fr.',
    sending: 'Sending...',
    submit: 'Discuss My Training Needs',
  },
  fr: {
    messageTitle: 'Demande de devis formation sur site',
    propertyEmailLabel: 'Etablissement',
    improvementEmailLabel: 'Objectif de formation',
    phoneEmailLabel: 'Téléphone',
    timeframeEmailLabel: 'Période envisagée',
    participantsEmailLabel: 'Nombre de collaborateurs',
    subject: 'Demande de devis formation sur site',
    name: 'Nom et prénom',
    namePlaceholder: 'Votre nom',
    email: 'Email',
    emailPlaceholder: 'name@hotel.com',
    property: 'Etablissement',
    propertyPlaceholder: 'Nom de l’hôtel ou du groupe',
    improvement: 'Que souhaitez-vous améliorer ?',
    improvementPlaceholder: 'Précisez le service, les standards ou les pratiques à renforcer.',
    phone: 'Téléphone',
    optional: 'Optionnel',
    timing: 'Période',
    timingPlaceholder: 'Période envisagée',
    teamSize: 'Collaborateurs',
    teamSizePlaceholder: 'Nombre estimé',
    required: 'Requis',
    validEmailRequired: 'Email valide requis',
    success: 'Merci. Votre demande formation a bien été envoyée.',
    error: 'La demande n’a pas pu être envoyée. Vous pouvez écrire à contact@luxops.fr.',
    sending: 'Envoi...',
    submit: 'Parler de votre formation',
  },
  es: {
    messageTitle: 'Solicitud de presupuesto de formación en el hotel',
    propertyEmailLabel: 'Hotel',
    improvementEmailLabel: 'Objetivo de formación',
    phoneEmailLabel: 'Teléfono',
    timeframeEmailLabel: 'Periodo previsto',
    participantsEmailLabel: 'Número de participantes',
    subject: 'Solicitud de presupuesto de formación en el hotel',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    email: 'Email',
    emailPlaceholder: 'nombre@hotel.com',
    property: 'Hotel',
    propertyPlaceholder: 'Nombre del hotel o grupo',
    improvement: '¿Qué quieres mejorar?',
    improvementPlaceholder: 'Describe el equipo, servicio o estándares que quieres desarrollar.',
    phone: 'Teléfono',
    optional: 'Opcional',
    timing: 'Periodo',
    timingPlaceholder: 'Periodo aproximado',
    teamSize: 'Tamaño del equipo',
    teamSizePlaceholder: 'Aprox.',
    required: 'Requerido',
    validEmailRequired: 'Email válido requerido',
    success: 'Gracias. Tu solicitud de formación se ha enviado.',
    error: 'No se ha podido enviar la solicitud. Puedes escribir a contact@luxops.fr.',
    sending: 'Enviando...',
    submit: 'Solicitar presupuesto de formación',
  },
} satisfies Partial<Record<Locale, Record<string, string>>>

export default function TrainingQuoteForm({ locale }: { locale: string }) {
  const activeLocale = toActiveLocale(locale)
  const copy = trainingFormCopy[activeLocale as keyof typeof trainingFormCopy] ?? trainingFormCopy.en
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TrainingQuoteFormData>()

  const onSubmit = async (data: TrainingQuoteFormData) => {
    setStatus('loading')

    const message = [
      copy.messageTitle,
      '',
      `${copy.propertyEmailLabel} : ${data.company}`,
      `${copy.improvementEmailLabel} : ${data.improvement}`,
    ].filter(Boolean).join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          subject: copy.subject,
          need_type: 'training',
          message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        reset()
        posthog.capture('training_quote_requested', {
          locale,
          has_improvement: true,
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const labelClass = 'mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#687169]'
  const fieldClass = 'w-full border border-[rgba(32,35,31,0.16)] bg-[#fcfbf8] px-3.5 py-2.5 text-sm text-[#0f211a] placeholder:text-[#8a938b] focus:outline-none focus:ring-2 focus:ring-[#a58658]/20 lg:py-2'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 lg:space-y-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-2">
        <div>
          <label className={labelClass}>{copy.name}</label>
          <input
            {...register('name', { required: true })}
            className={fieldClass}
            placeholder={copy.namePlaceholder}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{copy.required}</p>}
        </div>
        <div>
          <label className={labelClass}>{copy.email}</label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            type="email"
            className={fieldClass}
            placeholder={copy.emailPlaceholder}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{copy.validEmailRequired}</p>}
        </div>
      </div>

      <div>
        <div>
          <label className={labelClass}>{copy.property}</label>
          <input
            {...register('company', { required: true })}
            className={fieldClass}
            placeholder={copy.propertyPlaceholder}
          />
          {errors.company && <p className="text-xs text-red-600 mt-1">{copy.required}</p>}
        </div>
      </div>
      <div>
        <label className={labelClass}>{copy.improvement}</label>
        <textarea {...register('improvement', { required: true })} className={`${fieldClass} min-h-28 resize-y lg:min-h-20`} placeholder={copy.improvementPlaceholder} />
        {errors.improvement && <p className="mt-1 text-xs text-red-600">{copy.required}</p>}
      </div>

      {status === 'success' && (
        <div className="bg-[#e7e0d5] p-3.5 text-sm text-[#24362f]">
          {copy.success}
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 p-3.5 text-sm text-red-700">
          {copy.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#0f211a] px-6 py-3.5 text-sm font-semibold text-[#f5f1e9] transition-colors hover:bg-[#24362f] disabled:opacity-60 lg:py-3"
      >
        {status === 'loading' ? copy.sending : copy.submit}
      </button>
    </form>
  )
}

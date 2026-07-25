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
  phone?: string
  timeframe?: string
  participants?: string
}

const trainingFormCopy = {
  en: {
    messageTitle: 'Training quote request',
    propertyEmailLabel: 'Property',
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
    submit: 'Request a Training Quote',
  },
  fr: {
    messageTitle: 'Demande de devis formation sur site',
    propertyEmailLabel: 'Etablissement',
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
    submit: 'Demander un devis formation',
  },
  es: {
    messageTitle: 'Solicitud de presupuesto de formación en el hotel',
    propertyEmailLabel: 'Hotel',
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
      data.phone ? `${copy.phoneEmailLabel} : ${data.phone}` : null,
      data.timeframe ? `${copy.timeframeEmailLabel} : ${data.timeframe}` : null,
      data.participants ? `${copy.participantsEmailLabel} : ${data.participants}` : null,
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
          has_phone: Boolean(data.phone),
          has_timeframe: Boolean(data.timeframe),
          has_participants: Boolean(data.participants),
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const labelClass = 'block text-[10px] font-bold uppercase tracking-widest text-[#737685] mb-2'
  const fieldClass = 'w-full px-4 py-3 text-sm text-[#0a1d2e] bg-white border border-[#d8deea] focus:outline-none focus:ring-2 focus:ring-[#003d9b]/15'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{copy.property}</label>
          <input
            {...register('company', { required: true })}
            className={fieldClass}
            placeholder={copy.propertyPlaceholder}
          />
          {errors.company && <p className="text-xs text-red-600 mt-1">{copy.required}</p>}
        </div>
        <div>
          <label className={labelClass}>{copy.phone}</label>
          <input
            {...register('phone')}
            className={fieldClass}
            placeholder={copy.optional}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{copy.timing}</label>
          <input
            {...register('timeframe')}
            className={fieldClass}
            placeholder={copy.timingPlaceholder}
          />
        </div>
        <div>
          <label className={labelClass}>{copy.teamSize}</label>
          <input
            {...register('participants')}
            className={fieldClass}
            placeholder={copy.teamSizePlaceholder}
          />
        </div>
      </div>

      {status === 'success' && (
        <div className="p-4 text-sm text-[#003d9b] bg-[#eef4ff]">
          {copy.success}
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 text-sm text-red-700 bg-red-50">
          {copy.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#0a1d2e] transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? copy.sending : copy.submit}
      </button>
    </form>
  )
}

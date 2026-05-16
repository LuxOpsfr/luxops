'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import posthog from 'posthog-js'

interface TrainingQuoteFormData {
  name: string
  email: string
  company: string
  phone?: string
  timeframe?: string
  participants?: string
}

export default function TrainingQuoteForm({ locale }: { locale: string }) {
  const isEn = locale === 'en'
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
      isEn ? 'Training quote request' : 'Demande de devis formation sur site',
      '',
      `${isEn ? 'Property' : 'Etablissement'} : ${data.company}`,
      data.phone ? `${isEn ? 'Phone' : 'Téléphone'} : ${data.phone}` : null,
      data.timeframe ? `${isEn ? 'Timing' : 'Période envisagée'} : ${data.timeframe}` : null,
      data.participants ? `${isEn ? 'Participants' : 'Nombre de collaborateurs'} : ${data.participants}` : null,
    ].filter(Boolean).join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          subject: isEn ? 'On-property training quote request' : 'Demande de devis formation sur site',
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
          <label className={labelClass}>{isEn ? 'Name' : 'Nom et prénom'}</label>
          <input
            {...register('name', { required: true })}
            className={fieldClass}
            placeholder={isEn ? 'Your name' : 'Votre nom'}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{isEn ? 'Required' : 'Requis'}</p>}
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            type="email"
            className={fieldClass}
            placeholder="name@hotel.com"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{isEn ? 'Valid email required' : 'Email valide requis'}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{isEn ? 'Property' : 'Etablissement'}</label>
          <input
            {...register('company', { required: true })}
            className={fieldClass}
            placeholder={isEn ? 'Hotel or group name' : 'Nom de l’hôtel ou du groupe'}
          />
          {errors.company && <p className="text-xs text-red-600 mt-1">{isEn ? 'Required' : 'Requis'}</p>}
        </div>
        <div>
          <label className={labelClass}>{isEn ? 'Phone' : 'Téléphone'}</label>
          <input
            {...register('phone')}
            className={fieldClass}
            placeholder={isEn ? 'Optional' : 'Optionnel'}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{isEn ? 'Timing' : 'Période'}</label>
          <input
            {...register('timeframe')}
            className={fieldClass}
            placeholder={isEn ? 'Approximate timing' : 'Période envisagée'}
          />
        </div>
        <div>
          <label className={labelClass}>{isEn ? 'Team size' : 'Collaborateurs'}</label>
          <input
            {...register('participants')}
            className={fieldClass}
            placeholder={isEn ? 'Approx.' : 'Nombre estimé'}
          />
        </div>
      </div>

      {status === 'success' && (
        <div className="p-4 text-sm text-[#003d9b] bg-[#eef4ff]">
          {isEn
            ? 'Thank you. Your training request has been sent.'
            : 'Merci. Votre demande formation a bien été envoyée.'}
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 text-sm text-red-700 bg-red-50">
          {isEn
            ? 'The request could not be sent. Please email contact@luxops.fr.'
            : 'La demande n’a pas pu être envoyée. Vous pouvez écrire à contact@luxops.fr.'}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#0a1d2e] transition-colors disabled:opacity-60"
      >
        {status === 'loading'
          ? (isEn ? 'Sending...' : 'Envoi...')
          : (isEn ? 'Request a Training Quote' : 'Demander un devis formation')}
      </button>
    </form>
  )
}

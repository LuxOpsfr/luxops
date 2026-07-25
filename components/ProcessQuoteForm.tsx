'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import posthog from 'posthog-js'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

interface ProcessQuoteFormData {
  name: string
  email: string
  company: string
  phone?: string
  department?: string
  format?: string
  context?: string
}

const processFormCopy = {
  en: {
    messageTitle: 'Bespoke process quote request',
    propertyEmailLabel: 'Property',
    phoneEmailLabel: 'Phone',
    departmentEmailLabel: 'Department',
    formatEmailLabel: 'Expected format',
    contextEmailLabel: 'Context',
    subject: 'Bespoke process quote request',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'name@hotel.com',
    property: 'Property',
    propertyPlaceholder: 'Property or group name',
    phone: 'Phone',
    optional: 'Optional',
    department: 'Department',
    departmentPlaceholder: 'Front office, F&B, rooms...',
    format: 'Format',
    formatPlaceholder: 'SOP, checklist, training support...',
    context: 'Context',
    contextPlaceholder: 'What needs to be clarified, documented or rebuilt?',
    required: 'Required',
    validEmailRequired: 'Valid email required',
    success: 'Thank you. Your process request has been sent.',
    error: 'The request could not be sent. Please email contact@luxops.fr.',
    sending: 'Sending...',
    submit: 'Request a Process Quote',
  },
  fr: {
    messageTitle: 'Demande de devis process sur-mesure',
    propertyEmailLabel: 'Etablissement',
    phoneEmailLabel: 'Téléphone',
    departmentEmailLabel: 'Département',
    formatEmailLabel: 'Format attendu',
    contextEmailLabel: 'Contexte',
    subject: 'Demande de devis process sur-mesure',
    name: 'Nom et prénom',
    namePlaceholder: 'Votre nom',
    email: 'Email',
    emailPlaceholder: 'name@hotel.com',
    property: 'Etablissement',
    propertyPlaceholder: 'Nom de l’établissement ou du groupe',
    phone: 'Téléphone',
    optional: 'Optionnel',
    department: 'Département',
    departmentPlaceholder: 'Réception, F&B, étages...',
    format: 'Format',
    formatPlaceholder: 'SOP, checklist, support formation...',
    context: 'Contexte',
    contextPlaceholder: 'Ce qui doit être clarifié, documenté ou repris',
    required: 'Requis',
    validEmailRequired: 'Email valide requis',
    success: 'Merci. Votre demande de process a bien été envoyée.',
    error: 'La demande n’a pas pu être envoyée. Vous pouvez écrire à contact@luxops.fr.',
    sending: 'Envoi...',
    submit: 'Demander un devis process',
  },
  es: {
    messageTitle: 'Solicitud de presupuesto de proceso a medida',
    propertyEmailLabel: 'Hotel',
    phoneEmailLabel: 'Teléfono',
    departmentEmailLabel: 'Departamento',
    formatEmailLabel: 'Formato esperado',
    contextEmailLabel: 'Contexto',
    subject: 'Solicitud de presupuesto de proceso a medida',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    email: 'Email',
    emailPlaceholder: 'nombre@hotel.com',
    property: 'Hotel',
    propertyPlaceholder: 'Nombre del hotel o grupo',
    phone: 'Teléfono',
    optional: 'Opcional',
    department: 'Departamento',
    departmentPlaceholder: 'Recepción, F&B, pisos...',
    format: 'Formato',
    formatPlaceholder: 'SOP, checklist, soporte de formación...',
    context: 'Contexto',
    contextPlaceholder: '¿Qué debe aclararse, documentarse o reconstruirse?',
    required: 'Requerido',
    validEmailRequired: 'Email válido requerido',
    success: 'Gracias. Tu solicitud de proceso se ha enviado.',
    error: 'No se ha podido enviar la solicitud. Puedes escribir a contact@luxops.fr.',
    sending: 'Enviando...',
    submit: 'Solicitar presupuesto de proceso',
  },
} satisfies Partial<Record<Locale, Record<string, string>>>

export default function ProcessQuoteForm({ locale }: { locale: string }) {
  const activeLocale = toActiveLocale(locale)
  const copy = processFormCopy[activeLocale as keyof typeof processFormCopy] ?? processFormCopy.en
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProcessQuoteFormData>()

  const onSubmit = async (data: ProcessQuoteFormData) => {
    setStatus('loading')

    const message = [
      copy.messageTitle,
      '',
      `${copy.propertyEmailLabel} : ${data.company}`,
      data.phone ? `${copy.phoneEmailLabel} : ${data.phone}` : null,
      data.department ? `${copy.departmentEmailLabel} : ${data.department}` : null,
      data.format ? `${copy.formatEmailLabel} : ${data.format}` : null,
      data.context ? `${copy.contextEmailLabel} : ${data.context}` : null,
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
          need_type: 'process',
          message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        reset()
        posthog.capture('process_quote_requested', {
          locale,
          has_phone: Boolean(data.phone),
          has_department: Boolean(data.department),
          has_format: Boolean(data.format),
          has_context: Boolean(data.context),
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
          <label className={labelClass}>{copy.department}</label>
          <input
            {...register('department')}
            className={fieldClass}
            placeholder={copy.departmentPlaceholder}
          />
        </div>
        <div>
          <label className={labelClass}>{copy.format}</label>
          <input
            {...register('format')}
            className={fieldClass}
            placeholder={copy.formatPlaceholder}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{copy.context}</label>
        <textarea
          {...register('context')}
          rows={4}
          className={fieldClass}
          placeholder={copy.contextPlaceholder}
        />
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

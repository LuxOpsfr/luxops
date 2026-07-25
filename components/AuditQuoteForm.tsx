'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import posthog from 'posthog-js'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

interface AuditQuoteFormData {
  name: string
  email: string
  company: string
  phone?: string
  location?: string
  rooms?: string
  departments?: string
  context?: string
}

const auditFormCopy = {
  en: {
    messageTitle: 'Quality audit quote request',
    propertyEmailLabel: 'Property',
    phoneEmailLabel: 'Phone',
    locationEmailLabel: 'Location',
    roomsEmailLabel: 'Rooms',
    departmentsEmailLabel: 'Departments to review',
    contextEmailLabel: 'Context',
    subject: 'On-site quality audit quote request',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'name@hotel.com',
    property: 'Property',
    propertyPlaceholder: 'Property or group name',
    phone: 'Phone',
    optional: 'Optional',
    cityCountry: 'City / country',
    cityCountryPlaceholder: 'Paris, France',
    rooms: 'Rooms',
    roomsPlaceholder: 'Approx.',
    departments: 'Departments',
    departmentsPlaceholder: 'Front office, housekeeping, F&B...',
    context: 'Context',
    contextPlaceholder: 'What would you like to clarify or improve?',
    required: 'Required',
    validEmailRequired: 'Valid email required',
    success: 'Thank you. Your audit request has been sent.',
    error: 'The request could not be sent. Please email contact@luxops.fr.',
    sending: 'Sending...',
    submit: 'Request an Audit Quote',
  },
  fr: {
    messageTitle: 'Demande de devis audit qualité',
    propertyEmailLabel: 'Etablissement',
    phoneEmailLabel: 'Téléphone',
    locationEmailLabel: 'Ville / pays',
    roomsEmailLabel: 'Nombre de chambres',
    departmentsEmailLabel: 'Départements à auditer',
    contextEmailLabel: 'Contexte',
    subject: 'Demande de devis audit qualité sur site',
    name: 'Nom et prénom',
    namePlaceholder: 'Votre nom',
    email: 'Email',
    emailPlaceholder: 'name@hotel.com',
    property: 'Etablissement',
    propertyPlaceholder: 'Nom de l’établissement ou du groupe',
    phone: 'Téléphone',
    optional: 'Optionnel',
    cityCountry: 'Ville / pays',
    cityCountryPlaceholder: 'Paris, France',
    rooms: 'Chambres',
    roomsPlaceholder: 'Nombre estimé',
    departments: 'Départements',
    departmentsPlaceholder: 'Réception, housekeeping, F&B...',
    context: 'Contexte',
    contextPlaceholder: 'Ce que vous souhaitez clarifier, contrôler ou remettre à niveau',
    required: 'Requis',
    validEmailRequired: 'Email valide requis',
    success: 'Merci. Votre demande d’audit a bien été envoyée.',
    error: 'La demande n’a pas pu être envoyée. Vous pouvez écrire à contact@luxops.fr.',
    sending: 'Envoi...',
    submit: 'Demander un devis audit',
  },
  es: {
    messageTitle: 'Solicitud de presupuesto de auditoría de calidad',
    propertyEmailLabel: 'Hotel',
    phoneEmailLabel: 'Teléfono',
    locationEmailLabel: 'Ciudad / país',
    roomsEmailLabel: 'Número de habitaciones',
    departmentsEmailLabel: 'Departamentos a revisar',
    contextEmailLabel: 'Contexto',
    subject: 'Solicitud de presupuesto de auditoría de calidad en sitio',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    email: 'Email',
    emailPlaceholder: 'nombre@hotel.com',
    property: 'Hotel',
    propertyPlaceholder: 'Nombre del hotel o grupo',
    phone: 'Teléfono',
    optional: 'Opcional',
    cityCountry: 'Ciudad / país',
    cityCountryPlaceholder: 'Madrid, España',
    rooms: 'Habitaciones',
    roomsPlaceholder: 'Aprox.',
    departments: 'Departamentos',
    departmentsPlaceholder: 'Front office, housekeeping, F&B...',
    context: 'Contexto',
    contextPlaceholder: '¿Qué quieres aclarar, controlar o mejorar?',
    required: 'Requerido',
    validEmailRequired: 'Email válido requerido',
    success: 'Gracias. Tu solicitud de auditoría se ha enviado.',
    error: 'No se ha podido enviar la solicitud. Puedes escribir a contact@luxops.fr.',
    sending: 'Enviando...',
    submit: 'Solicitar presupuesto de auditoría',
  },
} satisfies Partial<Record<Locale, Record<string, string>>>

export default function AuditQuoteForm({ locale }: { locale: string }) {
  const activeLocale = toActiveLocale(locale)
  const copy = auditFormCopy[activeLocale as keyof typeof auditFormCopy] ?? auditFormCopy.en
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuditQuoteFormData>()

  const onSubmit = async (data: AuditQuoteFormData) => {
    setStatus('loading')

    const message = [
      copy.messageTitle,
      '',
      `${copy.propertyEmailLabel} : ${data.company}`,
      data.phone ? `${copy.phoneEmailLabel} : ${data.phone}` : null,
      data.location ? `${copy.locationEmailLabel} : ${data.location}` : null,
      data.rooms ? `${copy.roomsEmailLabel} : ${data.rooms}` : null,
      data.departments ? `${copy.departmentsEmailLabel} : ${data.departments}` : null,
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
          need_type: 'quality_audit',
          message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        reset()
        posthog.capture('audit_quote_requested', {
          locale,
          has_phone: Boolean(data.phone),
          has_location: Boolean(data.location),
          has_rooms: Boolean(data.rooms),
          has_departments: Boolean(data.departments),
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
          <label className={labelClass}>{copy.cityCountry}</label>
          <input
            {...register('location')}
            className={fieldClass}
            placeholder={copy.cityCountryPlaceholder}
          />
        </div>
        <div>
          <label className={labelClass}>{copy.rooms}</label>
          <input
            {...register('rooms')}
            className={fieldClass}
            placeholder={copy.roomsPlaceholder}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{copy.departments}</label>
        <input
          {...register('departments')}
          className={fieldClass}
          placeholder={copy.departmentsPlaceholder}
        />
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

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import posthog from 'posthog-js'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  need_type: string
  message: string
}

export default function ContactForm() {
  const t = useTranslations('contact_page')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
        posthog.capture('contact_form_submitted', {
          need_type: data.need_type || null,
          has_company: Boolean(data.company),
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 text-sm text-[#0a1d2e] bg-white focus:outline-none focus:ring-2 focus:ring-[#003d9b]/20 transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-widest text-[#737685] mb-2'
  const wrapClass = 'border border-[rgba(195,198,214,0.5)]'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{t('name')}</label>
          <div className={wrapClass} style={{ borderRadius: '0.125rem' }}>
            <input
              {...register('name', { required: true })}
              className={inputClass}
              style={{ borderRadius: '0.125rem' }}
              placeholder="Jean Dupont"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">Requis</p>}
        </div>
        <div>
          <label className={labelClass}>{t('email')}</label>
          <div className={wrapClass} style={{ borderRadius: '0.125rem' }}>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
              type="email"
              className={inputClass}
              style={{ borderRadius: '0.125rem' }}
              placeholder="jean@hotel.com"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">Email valide requis</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>{t('company')}</label>
        <div className={wrapClass} style={{ borderRadius: '0.125rem' }}>
          <input
            {...register('company')}
            className={inputClass}
            style={{ borderRadius: '0.125rem' }}
            placeholder="Hôtel de Paris"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{t('subject')}</label>
          <div className={wrapClass} style={{ borderRadius: '0.125rem' }}>
            <input
              {...register('subject')}
              className={inputClass}
              style={{ borderRadius: '0.125rem' }}
              placeholder="Front Office, Housekeeping..."
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>{t('need_type')}</label>
          <div className={wrapClass} style={{ borderRadius: '0.125rem' }}>
            <select
              {...register('need_type')}
              className={`${inputClass} cursor-pointer`}
              style={{ borderRadius: '0.125rem' }}
            >
              <option value="">{t('need_placeholder')}</option>
              <option value="playbooks">{t('need_playbooks')}</option>
              <option value="audit">{t('need_audit')}</option>
              <option value="process">{t('need_process')}</option>
              <option value="training">{t('need_training')}</option>
              <option value="notion">{t('need_notion')}</option>
              <option value="other">{t('need_other')}</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass}>{t('message')}</label>
        <div className={wrapClass} style={{ borderRadius: '0.125rem' }}>
          <textarea
            {...register('message', { required: true })}
            rows={6}
            className={`${inputClass} resize-none`}
            style={{ borderRadius: '0.125rem' }}
            placeholder="Décrivez votre projet..."
          />
        </div>
        {errors.message && <p className="text-red-500 text-xs mt-1">Requis</p>}
      </div>

      {status === 'success' && (
        <div
          className="p-4 text-sm text-[#003d9b]"
          style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
        >
          {t('success')}
        </div>
      )}
      {status === 'error' && (
        <div
          className="p-4 text-sm text-red-700"
          style={{ backgroundColor: '#fef2f2', borderRadius: '0.125rem' }}
        >
          {t('error')}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-4 text-white font-bold transition-all hover:opacity-90 disabled:opacity-60 text-sm"
        style={{
          background: 'linear-gradient(135deg, #003d9b, #0052cc)',
          borderRadius: '0.125rem',
        }}
      >
        {status === 'loading' ? t('sending') : t('send')}
      </button>
    </form>
  )
}

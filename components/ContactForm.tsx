'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
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
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111] transition-colors'
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t('name')}</label>
          <input
            {...register('name', { required: true })}
            className={inputClass}
            placeholder="Jean Dupont"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
        <div>
          <label className={labelClass}>{t('email')}</label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            type="email"
            className={inputClass}
            placeholder="jean@hotel.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Valid email required</p>
          )}
        </div>
      </div>
      <div>
        <label className={labelClass}>{t('company')}</label>
        <input
          {...register('company')}
          className={inputClass}
          placeholder="Hotel de Paris"
        />
      </div>
      <div>
        <label className={labelClass}>{t('subject')}</label>
        <input
          {...register('subject', { required: true })}
          className={inputClass}
          placeholder="Quality Audit / Playbook inquiry..."
        />
        {errors.subject && <p className="text-red-500 text-xs mt-1">Required</p>}
      </div>
      <div>
        <label className={labelClass}>{t('message')}</label>
        <textarea
          {...register('message', { required: true })}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">Required</p>}
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
          {t('success')}
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          {t('error')}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-3.5 bg-[#111111] text-white font-medium rounded-xl hover:bg-[#333333] transition-colors disabled:opacity-60 text-sm"
      >
        {status === 'loading' ? t('sending') : t('send')}
      </button>
    </form>
  )
}

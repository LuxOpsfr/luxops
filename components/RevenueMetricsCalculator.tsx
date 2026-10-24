'use client'

import { useState } from 'react'
import { calculateRevenueMetrics } from '@/lib/revenue-metrics'

export default function RevenueMetricsCalculator({ locale }: { locale: 'fr' | 'en' }) {
  const isFr = locale === 'fr'
  const [available, setAvailable] = useState('50')
  const [sold, setSold] = useState('38')
  const [revenue, setRevenue] = useState('5700')

  const result = calculateRevenueMetrics({ available, sold, revenue })
  const formatter = new Intl.NumberFormat(isFr ? 'fr-FR' : 'en-GB', { maximumFractionDigits: 2 })
  const hasFieldError = (fieldId: string) => {
    if (result.valid) return false
    if (fieldId === 'available-rooms') return result.reason === 'available'
    if (fieldId === 'sold-rooms') return ['sold', 'capacity', 'empty-sales'].includes(result.reason)
    return ['revenue', 'empty-sales'].includes(result.reason)
  }
  const errorMessages = isFr
    ? {
      available: 'Indiquez un nombre entier de chambres disponibles supérieur à zéro.',
      sold: 'Indiquez un nombre entier de chambres vendues, égal ou supérieur à zéro.',
      revenue: 'Indiquez un revenu hébergement HT positif ou nul, avec deux décimales au maximum.',
      capacity: 'Les chambres vendues ne peuvent pas dépasser les chambres disponibles.',
      'empty-sales': 'Un revenu positif exige au moins une chambre vendue.',
    }
    : {
      available: 'Enter a positive whole number of available rooms.',
      sold: 'Enter a non-negative whole number of rooms sold.',
      revenue: 'Enter non-negative room revenue with no more than two decimal places.',
      capacity: 'Rooms sold cannot exceed rooms available.',
      'empty-sales': 'Positive revenue requires at least one room sold.',
    }

  return (
    <section className="mb-12 rounded-2xl border border-[#d9c9aa] bg-[#f8f5ed] p-6 sm:p-8" aria-labelledby="revenue-calculator-title">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[.16em] text-[#92734a]">{isFr ? 'Outil pratique' : 'Practical tool'}</p>
      <h2 id="revenue-calculator-title" className="mb-3 font-display text-2xl text-[#0f211a]">
        {isFr ? 'Calculateur d’indicateurs hôteliers' : 'Hotel performance calculator'}
      </h2>
      <p className="mb-6 text-sm leading-6 text-[#536057]">
        {isFr
          ? 'Saisissez les données d’une nuit ou d’une période cohérente. Le revenu doit correspondre aux seules chambres, sur une même base fiscale. Une virgule décimale est acceptée.'
          : 'Enter figures for one night or a consistent period. Revenue should cover rooms only, on the same tax basis. A decimal comma is accepted.'}
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { id: 'available-rooms', label: isFr ? 'Chambres disponibles' : 'Rooms available', value: available, set: setAvailable, inputMode: 'numeric' as const },
          { id: 'sold-rooms', label: isFr ? 'Chambres vendues' : 'Rooms sold', value: sold, set: setSold, inputMode: 'numeric' as const },
          { id: 'room-revenue', label: isFr ? 'Revenu hébergement HT (€)' : 'Room revenue before tax (€)', value: revenue, set: setRevenue, inputMode: 'decimal' as const },
        ].map((field) => (
          <label key={field.id} htmlFor={field.id} className="block text-sm font-medium text-[#24362f]">
            {field.label}
            <input
              id={field.id}
              type="text"
              inputMode={field.inputMode}
              autoComplete="off"
              value={field.value}
              onChange={(event) => field.set(event.target.value)}
              aria-invalid={hasFieldError(field.id)}
              aria-describedby={hasFieldError(field.id) ? 'revenue-calculator-error' : undefined}
              className="mt-2 w-full rounded-lg border border-[#cfc8bb] bg-white px-3 py-2.5 text-[#0f211a] outline-none focus:border-[#92734a] focus:ring-2 focus:ring-[#92734a]/20"
            />
          </label>
        ))}
      </div>
      {!result.valid ? (
        <p id="revenue-calculator-error" className="mt-5 text-sm text-[#8b392e]" role="alert">
          {errorMessages[result.reason]}
        </p>
      ) : (
        <div className="mt-6 grid gap-3 sm:grid-cols-3" aria-live="polite">
          {[
            { label: isFr ? 'Taux d’occupation' : 'Occupancy', value: `${formatter.format(result.occupancy * 100)} %` },
            { label: 'ADR', value: result.adr !== null ? `${formatter.format(result.adr)} €` : '—' },
            { label: 'RevPAR', value: `${formatter.format(result.revpar)} €` },
          ].map((metric) => (
            <div key={metric.label} className="rounded-xl border border-[#e7e1d7] bg-white p-4">
              <p className="text-xs text-[#536057]">{metric.label}</p>
              <p className="mt-1 text-xl font-semibold text-[#0f211a]">{metric.value}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

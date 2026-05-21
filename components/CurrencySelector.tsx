'use client'

import { useCurrency } from '@/context/CurrencyContext'
import { SupportedCurrency } from '@/lib/pricing'

const OPTIONS: { currency: SupportedCurrency; labelEn: string; labelFr: string }[] = [
  { currency: 'EUR', labelEn: 'Europe / EUR', labelFr: 'Europe / EUR' },
  { currency: 'USD', labelEn: 'United States / USD', labelFr: 'États-Unis / USD' },
  { currency: 'GBP', labelEn: 'United Kingdom / GBP', labelFr: 'Royaume-Uni / GBP' },
  { currency: 'CAD', labelEn: 'Canada / CAD', labelFr: 'Canada / CAD' },
  { currency: 'AUD', labelEn: 'Australia / AUD', labelFr: 'Australie / AUD' },
]

export default function CurrencySelector({ locale }: { locale: string }) {
  const { currency, setCurrency } = useCurrency()
  const isEn = locale === 'en'

  return (
    <label className="flex flex-col gap-2 text-xs text-gray-500">
      <span className="font-semibold uppercase tracking-widest text-gray-500">
        {isEn ? 'Market / currency' : 'Marché / devise'}
      </span>
      <select
        value={currency}
        onChange={(event) => setCurrency(event.target.value as SupportedCurrency)}
        className="bg-[#171717] border border-white/10 text-gray-200 text-sm px-3 py-2 outline-none hover:border-white/25 focus:border-white/40"
        style={{ borderRadius: '0.125rem' }}
      >
        {OPTIONS.map((option) => (
          <option key={option.currency} value={option.currency}>
            {isEn ? option.labelEn : option.labelFr}
          </option>
        ))}
      </select>
    </label>
  )
}

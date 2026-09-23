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

export default function CurrencySelector({ locale, dark = false }: { locale: string; dark?: boolean }) {
  const { currency, setCurrency } = useCurrency()
  const isEn = locale === 'en'

  return (
    <label className="flex flex-col gap-2 text-xs">
      <span className={`font-semibold uppercase tracking-[0.14em] ${dark ? 'text-[#b9c2ba]' : 'text-[#687169]'}`}>
        {isEn ? 'Market / currency' : 'Marché / devise'}
      </span>
      <select
        value={currency}
        onChange={(event) => setCurrency(event.target.value as SupportedCurrency)}
        className={`border px-3 py-2 text-sm outline-none ${dark ? 'border-white/25 bg-[#102019] text-[#f5f1e9] hover:border-white/50 focus:border-white' : 'border-[rgba(32,35,31,0.18)] bg-[#f5f1e9] text-[#24362f] hover:border-[#9da99e] focus:border-[#24362f]'}`}
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

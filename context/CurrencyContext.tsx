'use client'

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import {
  currencyForCountry,
  formatPrice,
  getProductPrice,
  isSupportedCurrency,
  PricedProductType,
  SupportedCurrency,
} from '@/lib/pricing'
import { LOCALE_META, toLocale } from '@/lib/i18n'

const STORAGE_KEY = 'luxops_currency'

type CurrencyContextType = {
  currency: SupportedCurrency
  setCurrency: (currency: SupportedCurrency) => void
  priceFor: (productType: PricedProductType) => number
  formatProductPrice: (productType: PricedProductType) => string
}

const CurrencyContext = createContext<CurrencyContextType | null>(null)

export function CurrencyProvider({
  children,
  locale,
}: {
  children: ReactNode
  locale: string
}) {
  const localeDefaultCurrency = LOCALE_META[toLocale(locale)].defaultCurrency
  const defaultCurrency: SupportedCurrency = isSupportedCurrency(localeDefaultCurrency)
    ? localeDefaultCurrency
    : 'USD'
  // Keep the server and first client render identical, then resolve the visitor's market.
  const [currency, setCurrencyState] = useState<SupportedCurrency>(defaultCurrency)
  const manuallySelected = useRef(false)

  useEffect(() => {
    let active = true
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 5000)

    async function resolveCurrency(): Promise<SupportedCurrency> {
      try {
        const storedCurrency = window.localStorage.getItem(STORAGE_KEY)
        if (isSupportedCurrency(storedCurrency)) return storedCurrency
      } catch {
        // Storage can be blocked; country detection must still work.
      }

      try {
        const response = await fetch('/api/geo', { cache: 'no-store', signal: controller.signal })
        if (!response.ok) return 'USD'
        const data = await response.json()
        return currencyForCountry(typeof data?.country === 'string' ? data.country : null)
      } catch {
        return 'USD'
      }
    }

    void resolveCurrency().then((resolved) => {
      window.clearTimeout(timeout)
      // A slow geolocation response must never overwrite a manual choice.
      if (active && !manuallySelected.current) setCurrencyState(resolved)
    })

    return () => {
      active = false
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [])

  const setCurrency = useCallback((nextCurrency: SupportedCurrency) => {
    manuallySelected.current = true
    setCurrencyState(nextCurrency)
    try {
      window.localStorage.setItem(STORAGE_KEY, nextCurrency)
    } catch {
      // The selection remains usable for this visit even without browser storage.
    }
  }, [])

  const value = useMemo<CurrencyContextType>(
    () => ({
      currency,
      setCurrency,
      priceFor: (productType) => getProductPrice(productType, currency),
      formatProductPrice: (productType) => formatPrice(productType, currency, locale),
    }),
    [currency, locale, setCurrency],
  )

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider')
  return ctx
}

'use client'

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import {
  currencyForCountry,
  formatPrice,
  getProductPrice,
  isSupportedCurrency,
  PricedProductType,
  SupportedCurrency,
} from '@/lib/pricing'

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
  const defaultCurrency = locale === 'fr' ? 'EUR' : 'USD'
  const [currency, setCurrencyState] = useState<SupportedCurrency>(defaultCurrency)

  useEffect(() => {
    const storedCurrency = window.localStorage.getItem(STORAGE_KEY)

    if (isSupportedCurrency(storedCurrency)) {
      setCurrencyState(storedCurrency)
      return
    }

    fetch('/api/geo')
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { country?: string } | null) => {
        const detectedCurrency = currencyForCountry(data?.country)
        setCurrencyState(detectedCurrency)
      })
      .catch(() => {
        setCurrencyState(defaultCurrency)
      })
  }, [defaultCurrency])

  function setCurrency(nextCurrency: SupportedCurrency) {
    setCurrencyState(nextCurrency)
    window.localStorage.setItem(STORAGE_KEY, nextCurrency)
  }

  const value = useMemo<CurrencyContextType>(
    () => ({
      currency,
      setCurrency,
      priceFor: (productType) => getProductPrice(productType, currency),
      formatProductPrice: (productType) => formatPrice(productType, currency, locale),
    }),
    [currency, locale],
  )

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider')
  return ctx
}

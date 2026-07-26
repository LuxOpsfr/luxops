'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import {
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
  const [currency, setCurrencyState] = useState<SupportedCurrency>(() => {
    if (typeof window === 'undefined') return defaultCurrency

    const storedCurrency = window.localStorage.getItem(STORAGE_KEY)
    return isSupportedCurrency(storedCurrency) ? storedCurrency : defaultCurrency
  })

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

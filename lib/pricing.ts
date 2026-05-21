export type SupportedCurrency = 'EUR' | 'USD' | 'GBP' | 'CAD' | 'AUD'

export type PricedProductType = 'starter_pack' | 'playbook' | 'bundle'

export const SUPPORTED_CURRENCIES: SupportedCurrency[] = ['EUR', 'USD', 'GBP', 'CAD', 'AUD']

export const PRODUCT_PRICES: Record<PricedProductType, Record<SupportedCurrency, number>> = {
  starter_pack: {
    EUR: 29,
    USD: 29,
    GBP: 25,
    CAD: 39,
    AUD: 45,
  },
  playbook: {
    EUR: 67,
    USD: 67,
    GBP: 59,
    CAD: 89,
    AUD: 99,
  },
  bundle: {
    EUR: 199,
    USD: 199,
    GBP: 169,
    CAD: 269,
    AUD: 299,
  },
}

const EURO_COUNTRIES = new Set([
  'AT',
  'BE',
  'CY',
  'DE',
  'EE',
  'ES',
  'FI',
  'FR',
  'GR',
  'HR',
  'IE',
  'IT',
  'LT',
  'LU',
  'LV',
  'MT',
  'NL',
  'PT',
  'SI',
  'SK',
])

export function currencyForCountry(countryCode?: string | null): SupportedCurrency {
  const country = countryCode?.toUpperCase()

  if (!country) return 'USD'
  if (EURO_COUNTRIES.has(country)) return 'EUR'
  if (country === 'US') return 'USD'
  if (country === 'GB') return 'GBP'
  if (country === 'CA') return 'CAD'
  if (country === 'AU') return 'AUD'

  return 'USD'
}

export function isSupportedCurrency(currency: unknown): currency is SupportedCurrency {
  return typeof currency === 'string' && SUPPORTED_CURRENCIES.includes(currency as SupportedCurrency)
}

export function getProductPrice(productType: PricedProductType, currency: SupportedCurrency) {
  return PRODUCT_PRICES[productType][currency]
}

export function formatPrice(
  productType: PricedProductType,
  currency: SupportedCurrency,
  locale: string,
) {
  const amount = getProductPrice(productType, currency)
  return formatCurrencyAmount(amount, currency, locale)
}

export function formatCurrencyAmount(
  amount: number,
  currency: SupportedCurrency,
  locale: string,
) {
  const formatterLocale = locale === 'fr' ? 'fr-FR' : 'en-US'

  return new Intl.NumberFormat(formatterLocale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function stripeCurrency(currency: SupportedCurrency) {
  return currency.toLowerCase()
}

export type Currency = 'eur' | 'usd'

export type CatalogItem = {
  amount: number
  title: { en: string; fr: string }
  type: 'individual' | 'bundle'
}

export const PRICE_CATALOG: Record<string, CatalogItem> = {
  price_1TBZ94DVLJTOFkjUsH59B7x7: {
    amount: 67,
    title: { en: 'Front Office Playbook', fr: 'Playbook Front Office' },
    type: 'individual',
  },
  price_1TBZ9TDVLJTOFkjUwWnoKaGk: {
    amount: 67,
    title: { en: 'Housekeeping Playbook', fr: 'Playbook Housekeeping' },
    type: 'individual',
  },
  price_1TBZ9iDVLJTOFkjU3Os9VLRc: {
    amount: 67,
    title: { en: 'F&B Playbook', fr: 'Playbook F&B' },
    type: 'individual',
  },
  price_1TBZ9vDVLJTOFkjUT1FHhqUi: {
    amount: 67,
    title: { en: 'Spa & Wellness Playbook', fr: 'Playbook Spa & Wellness' },
    type: 'individual',
  },
  price_1TBZB5DVLJTOFkjUwmgvTPRW: {
    amount: 199,
    title: {
      en: 'Complete Bundle · All 4 Playbooks',
      fr: 'Bundle Complet · 4 Playbooks',
    },
    type: 'bundle',
  },
}

export function normalizeCurrency(value: unknown): Currency {
  return value === 'usd' ? 'usd' : 'eur'
}

export function formatPrice(amount: number, currency: Currency, locale = 'en') {
  if (currency === 'usd') return `$${amount}`
  return locale === 'fr' ? `${amount}€` : `€${amount}`
}

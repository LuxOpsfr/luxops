'use client'

import { PricedProductType } from '@/lib/pricing'
import { useCurrency } from '@/context/CurrencyContext'

export default function PriceDisplay({
  productType,
  className,
  suffix,
}: {
  productType: PricedProductType
  className?: string
  suffix?: string
}) {
  const { formatProductPrice } = useCurrency()

  return (
    <span className={className}>
      {formatProductPrice(productType)}
      {suffix ? ` ${suffix}` : ''}
    </span>
  )
}

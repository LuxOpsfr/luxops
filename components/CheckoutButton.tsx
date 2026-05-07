'use client'

import { useState } from 'react'
import posthog from 'posthog-js'

interface CheckoutButtonProps {
  priceId: string
  locale: string
  className?: string
  children: React.ReactNode
}

export default function CheckoutButton({ priceId, locale, className, children }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    posthog.capture('checkout_initiated', {
      price_id: priceId,
      locale,
    })
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, locale }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <button onClick={handleCheckout} disabled={loading} className={className}>
      {loading ? '...' : children}
    </button>
  )
}

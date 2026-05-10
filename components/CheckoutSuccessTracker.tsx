'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'

interface CheckoutSuccessTrackerProps {
  locale: string
}

export default function CheckoutSuccessTracker({ locale }: CheckoutSuccessTrackerProps) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const checkoutSessionId = params.get('session_id')

    posthog.capture('checkout_success_page_viewed', {
      checkout_session_id: checkoutSessionId,
      locale,
      pathname: window.location.pathname,
    })
  }, [locale])

  return null
}

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
})

const VALID_PRICE_IDS = new Set([
  'price_1TBZB5DVLJTOFkjUwmgvTPRW', // Bundle
  'price_1TBZ94DVLJTOFkjUsH59B7x7', // Front Office
  'price_1TBZ9TDVLJTOFkjUwWnoKaGk', // Housekeeping
  'price_1TBZ9iDVLJTOFkjU3Os9VLRc', // F&B
  'price_1TBZ9vDVLJTOFkjUT1FHhqUi', // Spa & Wellness
  'price_1TUONHDVLJTOFkjUjE391FrX', // Front Office Starter Pack
  'price_1TUONXDVLJTOFkjUYvR8PUiS', // Housekeeping Inspection Kit
])

function cleanMetadataValue(value: unknown) {
  return typeof value === 'string' && value.length <= 500 ? value : undefined
}

export async function POST(request: NextRequest) {
  try {
    const { priceId, locale, posthogDistinctId, posthogSessionId } = await request.json()

    if (!priceId || !VALID_PRICE_IDS.has(priceId)) {
      return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 })
    }

    const origin = request.headers.get('origin') || 'https://www.luxops.fr'
    const lang = locale === 'fr' ? 'fr' : 'en'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/${lang}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${lang}/playbooks`,
      locale: lang === 'fr' ? 'fr' : 'en',
      metadata: {
        locale: lang,
        ...(cleanMetadataValue(posthogDistinctId) && { posthog_distinct_id: cleanMetadataValue(posthogDistinctId) }),
        ...(cleanMetadataValue(posthogSessionId) && { posthog_session_id: cleanMetadataValue(posthogSessionId) }),
        price_ids: priceId,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[LuxOps Checkout Error]', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 },
    )
  }
}

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
])

export async function POST(request: NextRequest) {
  try {
    const { items, locale } = await request.json()

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items' }, { status: 400 })
    }

    for (const item of items) {
      if (!VALID_PRICE_IDS.has(item.priceId)) {
        return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 })
      }
    }

    const origin = request.headers.get('origin') || 'https://www.luxops.fr'
    const lang = locale === 'fr' ? 'fr' : 'en'

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      mode: 'payment',
      line_items: items.map((item: { priceId: string }) => ({
        price: item.priceId,
        quantity: 1,
      })),
      return_url: `${origin}/${lang}/success?session_id={CHECKOUT_SESSION_ID}`,
      locale: lang === 'fr' ? 'fr' : 'en',
      metadata: { locale: lang },
    })

    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (error) {
    console.error('[LuxOps Checkout Session Error]', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}

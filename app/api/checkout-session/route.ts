import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { normalizeCurrency, PRICE_CATALOG } from '@/lib/pricing'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
})

const VALID_PRICE_IDS = new Set(Object.keys(PRICE_CATALOG))

export async function POST(request: NextRequest) {
  try {
    const { items, locale, currency } = await request.json()

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
    const checkoutCurrency = normalizeCurrency(currency)
    const priceIds = items.map((item: { priceId: string }) => item.priceId)

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      mode: 'payment',
      line_items: items.map((item: { priceId: string }) => {
        const catalogItem = PRICE_CATALOG[item.priceId]

        if (checkoutCurrency === 'eur') {
          return {
            price: item.priceId,
            quantity: 1,
          }
        }

        return {
          price_data: {
            currency: checkoutCurrency,
            unit_amount: catalogItem.amount * 100,
            product_data: {
              name: catalogItem.title[lang],
              metadata: {
                original_price_id: item.priceId,
              },
            },
          },
          quantity: 1,
        }
      }),
      return_url: `${origin}/${lang}/success?session_id={CHECKOUT_SESSION_ID}`,
      locale: lang === 'fr' ? 'fr' : 'en',
      metadata: {
        locale: lang,
        currency: checkoutCurrency,
        priceIds: priceIds.join(','),
      },
    })

    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (error) {
    console.error('[LuxOps Checkout Session Error]', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 },
    )
  }
}

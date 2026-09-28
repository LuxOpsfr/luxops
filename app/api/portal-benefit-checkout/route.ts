import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { getPlaybookIds } from '@/lib/chapters'
import { isSupportedCurrency, stripeCurrency } from '@/lib/pricing'
import { getStripeClient } from '@/lib/stripe'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

const PORTAL_COUPON_ID = process.env.STRIPE_PORTAL_COUPON_ID || 'wWL1siZZ'

const MANUAL_PRICE_IDS: Record<string, string> = {
  'front-office': 'price_1TZRZZDVLJTOFkjUd3B9x44e',
  housekeeping: 'price_1TBZ9TDVLJTOFkjUwWnoKaGk',
  fb: 'price_1TZRYvDVLJTOFkjUNuiqbADG',
  spa: 'price_1TZRY9DVLJTOFkjUfkYQJAsW',
}

function promotionCodeFor(email: string) {
  const suffix = createHash('sha256').update(email.toLowerCase()).digest('hex').slice(0, 12).toUpperCase()
  return `LUXOPS20-${suffix}`
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')

    if (!token) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const supabase = getSupabaseAdmin()
    const { data: authData, error: authError } = await supabase.auth.getUser(token)
    const email = authData.user?.email?.toLowerCase()

    if (authError || !email) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
    }

    const { playbookId, locale, currency } = await request.json()
    const priceId = MANUAL_PRICE_IDS[playbookId]

    if (!priceId) {
      return NextResponse.json({ error: 'Invalid manual' }, { status: 400 })
    }

    const { data: purchases, error: purchasesError } = await supabase
      .from('purchases')
      .select('price_id')
      .ilike('email', email)

    if (purchasesError) {
      throw purchasesError
    }

    if (!purchases?.length) {
      return NextResponse.json({ error: 'A previous purchase is required' }, { status: 403 })
    }

    const ownedPlaybooks = new Set(
      purchases.flatMap(purchase => getPlaybookIds(String(purchase.price_id))),
    )

    if (ownedPlaybooks.has(playbookId)) {
      return NextResponse.json({ error: 'Manual already owned' }, { status: 409 })
    }

    const stripe = getStripeClient()
    const customers = await stripe.customers.list({ email, limit: 1 })
    const customer = customers.data[0] ?? await stripe.customers.create({
      email,
      metadata: { source: 'luxops_portal' },
    })

    const existingCodes = await stripe.promotionCodes.list({
      coupon: PORTAL_COUPON_ID,
      customer: customer.id,
      limit: 10,
    })
    let promotionCode = existingCodes.data[0]

    if (promotionCode?.times_redeemed) {
      return NextResponse.json({ error: 'Benefit already used' }, { status: 409 })
    }

    if (!promotionCode) {
      promotionCode = await stripe.promotionCodes.create({
        promotion: { type: 'coupon', coupon: PORTAL_COUPON_ID },
        code: promotionCodeFor(email),
        customer: customer.id,
        max_redemptions: 1,
        metadata: { source: 'luxops_portal' },
      })
    }

    const lang = locale === 'fr' || locale === 'es' ? locale : 'en'
    const checkoutCurrency = isSupportedCurrency(currency) ? currency : 'EUR'
    const origin = request.headers.get('origin') || 'https://www.luxops.fr'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer: customer.id,
      currency: stripeCurrency(checkoutCurrency),
      line_items: [{ price: priceId, quantity: 1 }],
      discounts: [{ promotion_code: promotionCode.id }],
      success_url: `${origin}/${lang}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${lang}/portal/dashboard`,
      locale: lang,
      metadata: {
        locale: lang,
        currency: checkoutCurrency,
        price_ids: priceId,
        portal_benefit: '20_percent',
        promotion_code_id: promotionCode.id,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[LuxOps Portal Benefit Checkout Error]', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}

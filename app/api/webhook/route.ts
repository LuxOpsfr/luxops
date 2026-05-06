import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { sendPlaybookEmail } from '@/lib/email'
import {
  DOWNLOADS,
  BUNDLE_PRICE_ID,
  ALL_PLAYBOOK_PRICE_IDS,
} from '@/lib/downloads'
import { PRICE_CATALOG } from '@/lib/pricing'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
})

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 },
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    )
  } catch (err) {
    console.error('[Webhook] Signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ received: true })
    }

    const customerEmail = session.customer_details?.email
    const customerName = session.customer_details?.name || 'there'

    if (!customerEmail) {
      console.error('[Webhook] No customer email found in session:', session.id)
      return NextResponse.json({ received: true })
    }

    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      expand: ['data.price'],
      limit: 10,
    })

    const lineItemPriceIds = lineItems.data
      .map((item) => (item.price as Stripe.Price)?.id)
      .filter(Boolean) as string[]

    const metadataPriceIds = (session.metadata?.priceIds || '')
      .split(',')
      .map((id) => id.trim())
      .filter((id) => Boolean(PRICE_CATALOG[id]))

    const priceIds =
      metadataPriceIds.length > 0 ? metadataPriceIds : lineItemPriceIds
    const locale = (session.metadata?.locale as string) || 'en'

    // Determine which playbooks to record in Supabase
    const playbookPriceIds = priceIds.includes(BUNDLE_PRICE_ID)
      ? ALL_PLAYBOOK_PRICE_IDS
      : priceIds

    // Insert each purchased playbook into Supabase
    for (const priceId of playbookPriceIds) {
      const download = DOWNLOADS[priceId]
      if (!download) continue

      const productName = locale === 'fr' ? download.titleFr : download.titleEn
      const lineItemAmount =
        lineItems.data.find(
          (item) => (item.price as Stripe.Price)?.id === priceId,
        )?.price?.unit_amount ?? 0
      const amount =
        lineItemAmount || (PRICE_CATALOG[priceId]?.amount ?? 0) * 100

      const { error } = await supabaseAdmin.from('purchases').upsert(
        {
          email: customerEmail,
          stripe_session_id: `${session.id}_${priceId}`,
          price_id: priceId,
          product_name: productName,
          amount,
          currency: session.currency ?? 'eur',
          locale,
          download_url: null, // Will be set when files are ready
        },
        { onConflict: 'stripe_session_id' },
      )

      if (error) {
        console.error(`[Webhook] Supabase insert error for ${priceId}:`, error)
      } else {
        console.log(
          `[Webhook] Purchase saved to Supabase: ${productName} → ${customerEmail}`,
        )
      }
    }

    // Send confirmation email
    console.log(
      `[Webhook] Sending email to ${customerEmail} — priceIds: ${priceIds.join(', ')}`,
    )

    try {
      await sendPlaybookEmail({
        to: customerEmail,
        name: customerName,
        priceIds,
        locale,
      })
      console.log(`[Webhook] Email sent to ${customerEmail}`)
    } catch (err) {
      console.error('[Webhook] Failed to send email:', err)
    }
  }

  return NextResponse.json({ received: true })
}

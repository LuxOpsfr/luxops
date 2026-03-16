import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { sendPlaybookEmail } from '@/lib/email'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
})

// Required: disable body parsing so we can verify the raw Stripe signature
export const config = {
  api: { bodyParser: false },
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('[Webhook] Signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Only handle successful payments
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    // Only process paid sessions
    if (session.payment_status !== 'paid') {
      return NextResponse.json({ received: true })
    }

    const customerEmail = session.customer_details?.email
    const customerName = session.customer_details?.name || 'there'

    if (!customerEmail) {
      console.error('[Webhook] No customer email found in session:', session.id)
      return NextResponse.json({ received: true })
    }

    // Retrieve line items to know which products were purchased
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      expand: ['data.price'],
      limit: 10,
    })

    const priceIds = lineItems.data
      .map(item => (item.price as Stripe.Price)?.id)
      .filter(Boolean) as string[]

    // Detect locale from session metadata or URL
    const locale = (session.metadata?.locale as string) || 'en'

    console.log(`[Webhook] Sending playbook email to ${customerEmail} — priceIds: ${priceIds.join(', ')}`)

    try {
      await sendPlaybookEmail({
        to: customerEmail,
        name: customerName,
        priceIds,
        locale,
      })
      console.log(`[Webhook] Email sent successfully to ${customerEmail}`)
    } catch (err) {
      console.error('[Webhook] Failed to send email:', err)
      // Don't return error — Stripe would retry the webhook
    }
  }

  return NextResponse.json({ received: true })
}

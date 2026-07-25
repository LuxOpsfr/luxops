import Stripe from 'stripe'

let stripe: Stripe | null = null

export function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY

  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is required to use Stripe')
  }

  stripe ??= new Stripe(secretKey, {
    apiVersion: '2026-02-25.clover',
  })

  return stripe
}

export function getStripeWebhookSecret() {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    throw new Error('STRIPE_WEBHOOK_SECRET is required to verify Stripe webhooks')
  }

  return webhookSecret
}

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { X, ShoppingCart, Trash2, ArrowRight, Lock } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import posthog from 'posthog-js'
import { useCurrency } from '@/context/CurrencyContext'
import { formatCurrencyAmount, PricedProductType } from '@/lib/pricing'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : Promise.resolve(null)

const cartCopy = {
  en: {
    title: 'Your Cart',
    emptyTitle: 'Your cart is empty',
    emptyText: 'Add a playbook to get started',
    total: 'Total',
    loading: 'Loading...',
    checkout: 'Proceed to Payment',
    securePayment: 'Secure payment via Stripe',
    back: 'Back to cart',
  },
  fr: {
    title: 'Votre Panier',
    emptyTitle: 'Votre panier est vide',
    emptyText: 'Ajoutez un playbook pour commencer',
    total: 'Total',
    loading: 'Chargement...',
    checkout: 'Passer au Paiement',
    securePayment: 'Paiement sécurisé via Stripe',
    back: 'Retour au panier',
  },
  es: {
    title: 'Tu carrito',
    emptyTitle: 'Tu carrito está vacío',
    emptyText: 'Añade un playbook para empezar',
    total: 'Total',
    loading: 'Cargando...',
    checkout: 'Proceder al pago',
    securePayment: 'Pago seguro con Stripe',
    back: 'Volver al carrito',
  },
} satisfies Partial<Record<Locale, Record<string, string>>>

interface CartDrawerProps {
  locale: string
}

export default function CartDrawer({ locale }: CartDrawerProps) {
  const { items, removeItem, isOpen, closeCart } = useCart()
  const [view, setView] = useState<'cart' | 'checkout'>('cart')
  const [loading, setLoading] = useState(false)
  const checkoutRef = useRef<{ destroy: () => void } | null>(null)
  const activeLocale = toActiveLocale(locale)
  const copy = cartCopy[activeLocale as keyof typeof cartCopy] ?? cartCopy.en
  const { currency, priceFor } = useCurrency()

  const getItemProductType = (item: { price: number; productType?: PricedProductType }) =>
    item.productType ?? (item.price === 29 ? 'starter_pack' : item.price === 199 ? 'bundle' : 'playbook')

  const itemPrice = (item: { price: number; productType?: PricedProductType }) =>
    priceFor(getItemProductType(item))

  const total = items.reduce((sum, item) => sum + itemPrice(item), 0)

  const resetCheckout = useCallback(() => {
    checkoutRef.current?.destroy()
    checkoutRef.current = null
    setView('cart')
    setLoading(false)
  }, [])

  const handleClose = () => {
    resetCheckout()
    closeCart()
  }

  useEffect(() => {
    if (!isOpen) {
      checkoutRef.current?.destroy()
      checkoutRef.current = null
    }
  }, [isOpen])

  // Mount Stripe embedded checkout when view changes to 'checkout'
  useEffect(() => {
    if (view !== 'checkout') return

    let cancelled = false

    async function mountCheckout() {
      const stripe = await stripePromise
      if (!stripe || cancelled) {
        setLoading(false)
        return
      }

      const checkout = await stripe.initEmbeddedCheckout({
        fetchClientSecret: async () => {
          const res = await fetch('/api/checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              items: items.map(i => ({ priceId: i.priceId })),
              locale,
              currency,
              posthogDistinctId: posthog.get_distinct_id(),
              posthogSessionId: posthog.get_session_id?.(),
            }),
          })
          const { clientSecret } = await res.json()
          return clientSecret
        },
      })

      if (cancelled) {
        checkout.destroy()
        return
      }

      checkoutRef.current = checkout
      checkout.mount('#stripe-embedded-checkout')
      setLoading(false)
    }

    mountCheckout().catch(err => {
      console.error(err)
      setLoading(false)
    })

    return () => {
      cancelled = true
    }
  }, [currency, items, locale, view])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-[#0f211a]/45 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#fcfbf8] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[rgba(32,35,31,0.12)] px-6 py-5">
          <div className="flex items-center gap-2.5">
            <ShoppingCart size={18} className="text-[#0f211a]" />
            <span className="font-semibold text-[#0f211a]">
              {copy.title}
            </span>
            {items.length > 0 && (
              <span className="bg-[#0f211a] px-2 py-0.5 text-xs font-medium text-white">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-[#687169] transition-colors hover:text-[#0f211a]"
          >
            <X size={20} />
          </button>
        </div>

        {view === 'cart' ? (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <ShoppingCart size={44} className="mb-4 text-[#a58658]/45" strokeWidth={1.5} />
                  <p className="text-sm text-[#687169]">
                    {copy.emptyTitle}
                  </p>
                  <p className="mt-1 text-xs text-[#687169]/65">
                    {copy.emptyText}
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-[rgba(32,35,31,0.1)]">
                  {items.map(item => (
                    <li key={item.priceId} className="flex items-center justify-between py-4">
                      <div>
                        <p className="text-sm font-medium text-[#0f211a]">{item.title}</p>
                        <p className="mt-0.5 text-sm text-[#687169]">
                          {formatCurrencyAmount(itemPrice(item), currency, locale)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.priceId)}
                        className="ml-4 p-1.5 text-[#687169]/55 transition-colors hover:text-[#a35d3d]"
                      >
                        <Trash2 size={15} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[rgba(32,35,31,0.12)] bg-[#f5f1e9] px-6 py-5">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm text-[#687169]">{copy.total}</span>
                  <span className="text-2xl font-bold text-[#0f211a]">
                    {formatCurrencyAmount(total, currency, locale)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setLoading(true)
                    setView('checkout')
                    posthog.capture('cart_checkout_started', {
                      item_count: items.length,
                      total,
                      currency,
                      items: items.map(i => ({
                        price_id: i.priceId,
                        title: i.title,
                        price: itemPrice(i),
                        currency,
                        product_type: getItemProductType(i),
                      })),
                    })
                  }}
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 bg-[#0f211a] py-3.5 font-semibold text-white transition-colors hover:bg-[#24362f] disabled:opacity-60"
                >
                  {loading ? copy.loading : copy.checkout}
                  {!loading && <ArrowRight size={16} />}
                </button>
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <Lock size={11} className="text-[#687169]/55" />
                  <p className="text-center text-xs text-[#687169]/65">
                    {copy.securePayment}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Back */}
            <div className="border-b border-[rgba(32,35,31,0.12)] px-6 py-3">
              <button
                onClick={() => {
                  checkoutRef.current?.destroy()
                  checkoutRef.current = null
                  setView('cart')
                }}
                className="flex items-center gap-1.5 text-sm text-[#687169] transition-colors hover:text-[#0f211a]"
              >
                ← {copy.back}
              </button>
            </div>

            {/* Stripe Embedded Checkout */}
            <div className="flex-1 overflow-y-auto">
              {loading && (
                <div className="flex items-center justify-center py-20">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#e7e0d5] border-t-[#0f211a]" />
                </div>
              )}
              <div id="stripe-embedded-checkout" />
            </div>
          </>
        )}
      </div>
    </>
  )
}

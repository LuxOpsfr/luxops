'use client'

import { useEffect, useRef, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { X, ShoppingCart, Trash2, ArrowRight, Lock } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CartDrawerProps {
  locale: string
}

export default function CartDrawer({ locale }: CartDrawerProps) {
  const { items, removeItem, isOpen, closeCart } = useCart()
  const [view, setView] = useState<'cart' | 'checkout'>('cart')
  const [loading, setLoading] = useState(false)
  const checkoutRef = useRef<{ destroy: () => void } | null>(null)
  const isEn = locale === 'en'

  const total = items.reduce((sum, item) => sum + item.price, 0)

  // Reset to cart view when drawer closes
  useEffect(() => {
    if (!isOpen) {
      checkoutRef.current?.destroy()
      checkoutRef.current = null
      setView('cart')
      setLoading(false)
    }
  }, [isOpen])

  // Mount Stripe embedded checkout when view changes to 'checkout'
  useEffect(() => {
    if (view !== 'checkout') return

    let cancelled = false

    async function mountCheckout() {
      const stripe = await stripePromise
      if (!stripe || cancelled) return

      const checkout = await stripe.initEmbeddedCheckout({
        fetchClientSecret: async () => {
          const res = await fetch('/api/checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              items: items.map(i => ({ priceId: i.priceId })),
              locale,
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
  }, [view])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <ShoppingCart size={18} className="text-[#111111]" />
            <span className="font-semibold text-[#111111]">
              {isEn ? 'Your Cart' : 'Votre Panier'}
            </span>
            {items.length > 0 && (
              <span className="px-2 py-0.5 bg-[#111111] text-white text-xs rounded-full font-medium">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 text-gray-400 hover:text-[#111111] transition-colors"
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
                  <ShoppingCart size={44} className="text-gray-200 mb-4" strokeWidth={1.5} />
                  <p className="text-gray-400 text-sm">
                    {isEn ? 'Your cart is empty' : 'Votre panier est vide'}
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    {isEn ? 'Add a playbook to get started' : 'Ajoutez un playbook pour commencer'}
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-50">
                  {items.map(item => (
                    <li key={item.priceId} className="flex items-center justify-between py-4">
                      <div>
                        <p className="text-sm font-medium text-[#111111]">{item.title}</p>
                        <p className="text-sm text-gray-400 mt-0.5">€{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.priceId)}
                        className="p-1.5 text-gray-300 hover:text-red-400 transition-colors ml-4"
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
              <div className="px-6 py-5 border-t border-gray-100 bg-white">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm text-gray-500">{isEn ? 'Total' : 'Total'}</span>
                  <span className="text-2xl font-bold text-[#111111]">€{total}</span>
                </div>
                <button
                  onClick={() => {
                    setLoading(true)
                    setView('checkout')
                  }}
                  disabled={loading}
                  className="w-full py-3.5 bg-[#111111] text-white font-semibold rounded-xl hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading
                    ? isEn ? 'Loading...' : 'Chargement...'
                    : isEn ? 'Proceed to Payment' : 'Passer au Paiement'}
                  {!loading && <ArrowRight size={16} />}
                </button>
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <Lock size={11} className="text-gray-300" />
                  <p className="text-center text-xs text-gray-300">
                    {isEn ? 'Secure payment via Stripe' : 'Paiement sécurisé via Stripe'}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Back */}
            <div className="px-6 py-3 border-b border-gray-100">
              <button
                onClick={() => {
                  checkoutRef.current?.destroy()
                  checkoutRef.current = null
                  setView('cart')
                }}
                className="text-sm text-gray-400 hover:text-[#111111] transition-colors flex items-center gap-1.5"
              >
                ← {isEn ? 'Back to cart' : 'Retour au panier'}
              </button>
            </div>

            {/* Stripe Embedded Checkout */}
            <div className="flex-1 overflow-y-auto">
              {loading && (
                <div className="flex items-center justify-center py-20">
                  <div className="w-6 h-6 border-2 border-gray-200 border-t-[#111111] rounded-full animate-spin" />
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

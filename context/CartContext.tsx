'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Currency, normalizeCurrency } from '@/lib/pricing'

export type CartItem = {
  priceId: string
  title: string
  price: number
}

type CartContextType = {
  items: CartItem[]
  currency: Currency
  setCurrency: (currency: Currency) => void
  addItem: (item: CartItem) => void
  removeItem: (priceId: string) => void
  clearCart: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window === 'undefined') return 'eur'
    return normalizeCurrency(window.localStorage.getItem('luxops_currency'))
  })

  function setCurrency(nextCurrency: Currency) {
    setCurrencyState(nextCurrency)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('luxops_currency', nextCurrency)
    }
  }

  function addItem(item: CartItem) {
    setItems((prev) =>
      prev.find((i) => i.priceId === item.priceId) ? prev : [...prev, item],
    )
    setIsOpen(true)
  }

  function removeItem(priceId: string) {
    setItems((prev) => prev.filter((i) => i.priceId !== priceId))
  }

  function clearCart() {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        currency,
        setCurrency,
        addItem,
        removeItem,
        clearCart,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

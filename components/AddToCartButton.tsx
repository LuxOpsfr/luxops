'use client'

import { Check } from 'lucide-react'
import { useCart, CartItem } from '@/context/CartContext'
import posthog from 'posthog-js'

interface Props {
  item: CartItem
  className?: string
  children: React.ReactNode
  addedLabel?: string
}

export default function AddToCartButton({ item, className, children, addedLabel }: Props) {
  const { addItem, items, openCart } = useCart()
  const inCart = items.some(i => i.priceId === item.priceId)

  function handleClick() {
    if (inCart) {
      openCart()
    } else {
      addItem(item)
      posthog.capture('playbook_added_to_cart', {
        price_id: item.priceId,
        title: item.title,
        price: item.price,
      })
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      {inCart ? (
        <span className="flex items-center justify-center gap-1.5">
          <Check size={14} />
          {addedLabel ?? 'Added'}
        </span>
      ) : (
        children
      )}
    </button>
  )
}

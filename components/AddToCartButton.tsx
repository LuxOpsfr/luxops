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
      const productType = item.productType ?? (item.price === 29 ? 'starter_pack' : item.price === 199 ? 'bundle' : 'playbook')
      posthog.capture('product_added_to_cart', {
        price_id: item.priceId,
        title: item.title,
        price: item.price,
        product_type: productType,
      })
      posthog.capture(productType === 'starter_pack' ? 'starter_pack_added_to_cart' : 'playbook_added_to_cart', {
        price_id: item.priceId,
        title: item.title,
        price: item.price,
        product_type: productType,
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

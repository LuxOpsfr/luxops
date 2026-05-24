'use client'

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'

type SamePageAnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: `#${string}`
  children: ReactNode
}

export function scrollToPageSection(hash: string) {
  const targetId = hash.replace(/^#/, '')
  const target = document.getElementById(targetId)

  if (!target) return

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function SamePageAnchor({
  href,
  children,
  onClick,
  target,
  ...props
}: SamePageAnchorProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)

    if (event.defaultPrevented || target) return

    event.preventDefault()
    scrollToPageSection(href)
  }

  return (
    <a href={href} target={target} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

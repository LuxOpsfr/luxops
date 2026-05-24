'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { scrollToPageSection } from '@/components/SamePageAnchor'

type TrackedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string
  eventName: string
  eventProperties?: Record<string, unknown>
  children: ReactNode
}

export default function TrackedLink({
  href,
  eventName,
  eventProperties,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  function getSamePageHash() {
    if (typeof window === 'undefined') return null

    if (href.startsWith('#')) return href

    try {
      const nextUrl = new URL(href, window.location.origin)
      const currentUrl = new URL(window.location.href)

      if (
        nextUrl.origin === currentUrl.origin &&
        nextUrl.pathname === currentUrl.pathname &&
        nextUrl.hash
      ) {
        return nextUrl.hash
      }
    } catch {
      return null
    }

    return null
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    posthog.capture(eventName, {
      target_url: href,
      current_url: window.location.href,
      pathname: window.location.pathname,
      ...eventProperties,
    })

    onClick?.(event)

    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }

    const samePageHash = getSamePageHash()
    if (samePageHash) {
      event.preventDefault()
      scrollToPageSection(samePageHash)
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}

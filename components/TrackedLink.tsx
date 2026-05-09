'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'

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
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    posthog.capture(eventName, {
      target_url: href,
      current_url: window.location.href,
      pathname: window.location.pathname,
      ...eventProperties,
    })

    onClick?.(event)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}

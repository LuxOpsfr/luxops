'use client'

import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import posthog from 'posthog-js'

export default function TrackSectionExposure({ children, eventName, properties }: { children: ReactNode; eventName: string; properties: Record<string, unknown> }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return
      posthog.capture(eventName, properties)
      observer.disconnect()
    }, { threshold: 0.5 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [eventName, properties])

  return <div ref={sectionRef}>{children}</div>
}

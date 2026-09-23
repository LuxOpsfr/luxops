'use client'

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function PortalPage() {
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string

  useEffect(() => {
    const routeFromSession = async () => {
      try {
        const { supabase } = await import('@/lib/supabase')
        const { data: { session } } = await supabase.auth.getSession()
        router.replace(session ? `/${locale}/portal/dashboard` : `/${locale}/portal/login`)
      } catch {
        router.replace(`/${locale}/portal/login`)
      }
    }

    routeFromSession()
  }, [locale, router])

  return null
}

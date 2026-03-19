'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import CookieBanner from './CookieBanner'

interface SiteShellProps {
  locale: string
  children: React.ReactNode
}

export default function SiteShell({ locale, children }: SiteShellProps) {
  const pathname = usePathname()
  const isPortal = pathname.includes('/portal')

  if (isPortal) {
    return <>{children}</>
  }

  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <CartDrawer locale={locale} />
      <CookieBanner locale={locale} />
    </>
  )
}

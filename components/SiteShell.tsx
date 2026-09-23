'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import CookieBanner from './CookieBanner'
import DownloadFollowUp from './DownloadFollowUp'
import QuickContact from './QuickContact'
import './seo-theme.css'
import './contrast.css'

interface SiteShellProps {
  locale: string
  children: React.ReactNode
}

export default function SiteShell({ locale, children }: SiteShellProps) {
  const pathname = usePathname()
  const isPortal = pathname.includes('/portal')
  const route = pathname.replace(/^\/(?:en|fr|es)(?:\/preview)?/, '')
  const isEditorial = route !== ''
    && route !== '/'
    && !/^\/(?:playbooks|training|formation|success|legal|contact)(?:\/|$)/.test(route)

  if (isPortal) {
    return <>{children}</>
  }

  return (
    <>
      <Header locale={locale} />
      <main className={isEditorial ? 'seo-theme' : undefined}>{children}</main>
      <Footer locale={locale} />
      <CartDrawer locale={locale} />
      <DownloadFollowUp locale={locale} />
      <CookieBanner locale={locale} />
      <QuickContact locale={locale} />
    </>
  )
}

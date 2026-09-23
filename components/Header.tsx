'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Globe, Menu, ShoppingCart, User, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ACTIVE_LOCALES, LOCALE_META, toActiveLocale } from '@/lib/i18n'
import { localizePathname, localizedPath, localizedRoutePath, routeSupportsLocale } from '@/lib/localized-routes'
import type { Locale } from '@/lib/i18n'

interface HeaderProps {
  locale: string
}

const headerCopy = {
  en: {
    tagline: 'Standardizing Excellence in High-End Hospitality',
    portal: 'Login',
    cart: 'Cart',
    toggleMenu: 'Toggle menu',
  },
  fr: {
    tagline: 'Standardizing Excellence in High-End Hospitality',
    portal: 'Connexion',
    cart: 'Panier',
    toggleMenu: 'Ouvrir le menu',
  },
  es: {
    tagline: 'Standardizing Excellence in High-End Hospitality',
    portal: 'Login',
    cart: 'Carrito',
    toggleMenu: 'Abrir menú',
  },
} satisfies Partial<Record<Locale, { tagline: string; portal: string; cart: string; toggleMenu: string }>>

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('nav')
  const [menuOpen, setMenuOpen] = useState(false)
  const currentLocale = toActiveLocale(locale)
  const copy = headerCopy[currentLocale as keyof typeof headerCopy] ?? headerCopy.en
  const portalHref = currentLocale === 'fr' ? localizedPath('fr', '/portal') : localizedPath('en', '/portal')
  const switchLocales = ACTIVE_LOCALES.filter((candidate) => candidate !== currentLocale)
  const pathname = usePathname()
  const { items, openCart } = useCart()

  const navLinks = [
    { routeId: 'playbooks' as const, label: currentLocale === 'fr' ? 'Manuels SOP' : currentLocale === 'es' ? 'Manuales SOP' : 'SOP Manuals' },
    { routeId: 'training' as const, label: t('training') },
  ]
    .filter((link) => routeSupportsLocale(link.routeId, currentLocale))
    .map((link) => ({
      href: localizedRoutePath(link.routeId, currentLocale),
      label: link.label,
    }))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(32,35,31,0.14)] bg-[#f5f1e9]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-5 md:px-12 lg:px-16" style={{ height: 'calc(var(--site-header-height) - 1px)' }}>
        <Link
          href={localizedRoutePath('home', currentLocale)}
          className="flex flex-col no-underline"
          style={{ gap: '6px' }}
        >
          <span
            className="text-[#0f211a]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.625rem',
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            LuxOps
          </span>
          <span
            className="hidden font-semibold uppercase text-[#687169] sm:block"
            style={{
              fontSize: '0.625rem',
              letterSpacing: 0,
              lineHeight: 1.2,
            }}
          >
            {copy.tagline}
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b py-1 text-[0.9rem] font-semibold transition-colors ${
                pathname === link.href
                  ? 'border-[#24362f] text-[#24362f]'
                  : 'border-transparent text-[#4f5a52] hover:border-[#9da99e] hover:text-[#24362f]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-2 text-sm text-[#687169] sm:flex">
            <Globe size={14} strokeWidth={1.5} />
            {switchLocales.map((targetLocale) => (
              <Link
                key={targetLocale}
                href={localizePathname(pathname, targetLocale)}
                className="font-semibold uppercase transition-colors hover:text-[#24362f]"
              >
                {LOCALE_META[targetLocale].shortLabel}
              </Link>
            ))}
          </div>

          <Link
            href={portalHref}
            className="p-1.5 text-[#4f5a52] transition-colors hover:text-[#24362f] lg:hidden"
            aria-label={copy.portal}
          >
            <User size={19} strokeWidth={1.5} />
          </Link>

          <button
            onClick={openCart}
            className="relative p-1.5 text-[#4f5a52] transition-colors hover:text-[#24362f]"
            aria-label={copy.cart}
          >
            <ShoppingCart size={19} strokeWidth={1.5} />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-[2px] bg-[#24362f] text-[10px] font-bold text-[#f5f1e9]">
                {items.length}
              </span>
            )}
          </button>

          <Link
            href={portalHref}
            className="hidden items-center border border-[#24362f] px-5 py-2 text-sm font-semibold text-[#24362f] transition-colors hover:bg-[#24362f] hover:text-[#f5f1e9] lg:inline-flex"
          >
            {copy.portal}
          </Link>

          <button
            className="p-1.5 text-[#4f5a52] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={copy.toggleMenu}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-[rgba(32,35,31,0.14)] bg-[#f5f1e9] px-6 py-5 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-1 text-sm font-semibold text-[#4f5a52] hover:text-[#24362f]"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 border-t border-[rgba(32,35,31,0.12)] pt-4 text-sm text-[#687169]">
            <Globe size={14} strokeWidth={1.5} />
            {switchLocales.map((targetLocale) => (
              <Link
                key={targetLocale}
                href={localizePathname(pathname, targetLocale)}
                onClick={() => setMenuOpen(false)}
                className="font-semibold uppercase transition-colors hover:text-[#24362f]"
              >
                {LOCALE_META[targetLocale].shortLabel}
              </Link>
            ))}
          </div>
          <Link
            href={portalHref}
            onClick={() => setMenuOpen(false)}
            className="py-1 text-sm font-semibold text-[#4f5a52] hover:text-[#24362f]"
          >
            {copy.portal}
          </Link>
          <Link
            href={portalHref}
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-[#24362f] px-4 py-3 text-sm font-semibold text-[#f5f1e9]"
          >
            {copy.portal}
          </Link>
        </div>
      )}
    </header>
  )
}

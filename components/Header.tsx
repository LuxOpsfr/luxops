'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Menu, X, Globe, ShoppingCart, User } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ACTIVE_LOCALES, LOCALE_META, toActiveLocale } from '@/lib/i18n'
import { localizePathname, localizedPath, localizedRoutePath } from '@/lib/localized-routes'
import type { Locale } from '@/lib/i18n'

interface HeaderProps {
  locale: string
}

const headerCopy = {
  en: {
    tagline: 'Standardizing Excellence in High-End Hospitality',
    portal: 'My account',
    cart: 'Cart',
    toggleMenu: 'Toggle menu',
  },
  fr: {
    tagline: 'L’Excellence Opérationnelle en Hôtellerie de Luxe',
    portal: 'Mon espace',
    cart: 'Panier',
    toggleMenu: 'Ouvrir le menu',
  },
  es: {
    tagline: 'Excelencia operativa para hotelería high-end',
    portal: 'Mi espacio',
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
    { href: localizedRoutePath('playbooks', currentLocale), label: t('playbooks') },
    { href: localizedRoutePath('training', currentLocale), label: t('training') },
    { href: localizedRoutePath('qualityAudit', currentLocale), label: t('audit') },
    { href: localizedRoutePath('bespokeProcess', currentLocale), label: t('process') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={localizedRoutePath('home', currentLocale)}
          className="flex flex-col gap-[3px] no-underline"
        >
          <span
            className="font-bold uppercase text-[#0a1d2e]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              letterSpacing: '0.22em',
              lineHeight: 1,
            }}
          >
            LuxOps
          </span>
          <span
            className="hidden lg:block text-[#003d9b] font-medium uppercase"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '7.5px',
              letterSpacing: '0.14em',
              lineHeight: 1,
              opacity: 0.75,
            }}
          >
            {copy.tagline}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-[#111111] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Globe size={14} />
            {switchLocales.map((targetLocale) => (
              <Link
                key={targetLocale}
                href={localizePathname(pathname, targetLocale)}
                className="font-semibold uppercase hover:text-[#111111] transition-colors"
              >
                {LOCALE_META[targetLocale].shortLabel}
              </Link>
            ))}
          </div>

          {/* Mon espace */}
          <Link
            href={portalHref}
            className="p-1.5 text-gray-600 hover:text-[#111111] transition-colors"
            aria-label={copy.portal}
          >
            <User size={20} />
          </Link>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative p-1.5 text-gray-600 hover:text-[#111111] transition-colors"
            aria-label={copy.cart}
          >
            <ShoppingCart size={20} />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#111111] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>

          {/* CTA */}
          <Link
            href={localizedRoutePath('contact', currentLocale)}
            className="hidden lg:inline-flex items-center px-4 py-2 bg-[#111111] text-white text-sm font-medium rounded-lg hover:bg-[#333333] transition-colors"
          >
            {t('get_in_touch')}
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-1.5 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={copy.toggleMenu}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#111111] py-1 font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={portalHref}
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-[#111111] py-1 font-medium text-sm"
          >
            {copy.portal}
          </Link>
          <Link
            href={localizedRoutePath('contact', currentLocale)}
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2.5 bg-[#111111] text-white text-sm font-medium rounded-lg mt-2"
          >
            {t('get_in_touch')}
          </Link>
        </div>
      )}
    </header>
  )
}

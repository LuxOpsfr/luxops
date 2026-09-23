import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Mail } from 'lucide-react'
import CurrencySelector from '@/components/CurrencySelector'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { localizedPath, localizedRoutePath, routeSupportsLocale } from '@/lib/localized-routes'
import type { LocalizedRouteId } from '@/lib/localized-routes'

interface FooterProps {
  locale: string
}

type FooterLink = {
  label: string
  routeId?: LocalizedRouteId
  href?: string
}

type FooterColumn = {
  title: string
  links: FooterLink[]
}

const footerCopy = {
  en: {
    tagline: 'Standardizing Excellence in High-End Hospitality.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'SOP manuals', routeId: 'playbooks' },
          { label: 'Training', routeId: 'training' },
          { label: 'Resources', routeId: 'resources' },
          { label: 'Blog', routeId: 'blog' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', routeId: 'about' },
          { label: 'Contact', routeId: 'contact' },
          { label: 'Legal notices', href: '/legal' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'Client login', href: '/portal/login' },
          { label: 'contact@luxops.fr', href: 'mailto:contact@luxops.fr' },
        ],
      },
    ],
  },
  fr: {
    tagline: 'Standardizing Excellence in High-End Hospitality.',
    columns: [
      {
        title: 'Découvrir',
        links: [
          { label: 'Manuels SOP', routeId: 'playbooks' },
          { label: 'Formation', routeId: 'training' },
          { label: 'Ressources', routeId: 'resources' },
          { label: 'Blog', routeId: 'blog' },
        ],
      },
      {
        title: 'LuxOps',
        links: [
          { label: 'À propos', routeId: 'about' },
          { label: 'Contact', routeId: 'contact' },
          { label: 'Mentions légales', href: '/legal' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'Connexion client', href: '/portal/login' },
          { label: 'contact@luxops.fr', href: 'mailto:contact@luxops.fr' },
        ],
      },
    ],
  },
  es: {
    tagline: 'Standardizing Excellence in High-End Hospitality.',
    columns: [
      {
        title: 'Explorar',
        links: [
          { label: 'Manuales SOP', routeId: 'playbooks' },
          { label: 'Formación', routeId: 'training' },
          { label: 'Recursos', routeId: 'resources' },
          { label: 'Blog', routeId: 'blog' },
        ],
      },
      {
        title: 'LuxOps',
        links: [
          { label: 'Sobre nosotros', routeId: 'about' },
          { label: 'Contacto', routeId: 'contact' },
          { label: 'Aviso legal', href: '/legal' },
        ],
      },
      {
        title: 'Contacto',
        links: [
          { label: 'Acceso cliente', href: '/portal/login' },
          { label: 'contact@luxops.fr', href: 'mailto:contact@luxops.fr' },
        ],
      },
    ],
  },
} satisfies Partial<Record<Locale, { tagline: string; columns: FooterColumn[] }>>

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer')
  const currentLocale = toActiveLocale(locale)
  const copy: { tagline: string; columns: FooterColumn[] } =
    footerCopy[currentLocale as keyof typeof footerCopy] ?? footerCopy.en

  const visibleColumns = copy.columns
    .map((column) => ({
      ...column,
      links: column.links.filter((link) => !link.routeId || routeSupportsLocale(link.routeId, currentLocale)),
    }))
    .filter((column) => column.links.length > 0)

  return (
    <footer className="border-t border-[#324138] bg-[#102019] text-[#f5f1e9]">
      <div className="mx-auto max-w-[1680px] px-6 py-14 md:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_repeat(3,1fr)]">
          <div className="md:col-span-1">
            <div className="mb-3">
              <span
                className="text-[#f5f1e9]"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.85rem',
                  fontWeight: 500,
                  lineHeight: 1,
                }}
              >
                LuxOps
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#b9c2ba]">{copy.tagline}</p>
          </div>

          {visibleColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#c3aa80]">
                {column.title}
              </h4>
              <ul className="space-y-2.5 border-t border-white/15 pt-4">
                {column.links.map((link: FooterLink) => {
                  const href = link.href
                    ? link.href.startsWith('/')
                      ? localizedPath(currentLocale, link.href)
                      : link.href
                    : link.routeId
                      ? localizedRoutePath(link.routeId, currentLocale)
                      : '#'
                  const isEmail = href.startsWith('mailto:')

                  return (
                    <li key={`${column.title}-${link.label}`}>
                      {isEmail ? (
                        <a
                          href={href}
                          className="flex items-center gap-2 text-sm text-[#b9c2ba] transition-colors hover:text-white"
                        >
                          <Mail size={13} strokeWidth={1.5} />
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={href}
                          className="text-sm text-[#b9c2ba] transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 md:flex-row">
          <p className="text-sm text-[#b9c2ba]">{t('copyright')}</p>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <CurrencySelector locale={currentLocale} dark />
          </div>
        </div>
      </div>
    </footer>
  )
}

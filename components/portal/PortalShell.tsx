'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { identifyPostHogUser, resetPostHogUser } from '@/lib/posthogIdentity'
import { BookOpen, ChevronDown, LogOut, UserRound } from 'lucide-react'
import BrandLogo from '@/components/BrandLogo'

interface PortalShellProps {
  locale: string
  email: string
  children: React.ReactNode
  preview?: boolean
}

export default function PortalShell({ locale, email, children, preview = false }: PortalShellProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [accountOpen, setAccountOpen] = useState(false)
  const accountRef = useRef<HTMLDivElement>(null)
  const lang = locale === 'fr' || locale === 'es' ? locale : 'en'
  const labels = {
    fr: { resources: 'Ma bibliothèque', profile: 'Mon profil', account: 'Mon compte', signOut: 'Déconnexion', preview: 'Aperçu local' },
    en: { resources: 'My library', profile: 'My profile', account: 'My account', signOut: 'Sign out', preview: 'Local preview' },
    es: { resources: 'Mi biblioteca', profile: 'Mi perfil', account: 'Mi cuenta', signOut: 'Cerrar sesión', preview: 'Vista previa local' },
  }[lang]

  useEffect(() => {
    if (!preview) identifyPostHogUser(email, { locale, source: 'portal_shell' })
  }, [email, locale, preview])

  useEffect(() => {
    const closeOnOutside = (event: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) setAccountOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAccountOpen(false)
    }
    document.addEventListener('mousedown', closeOnOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const allNavItems = [
    { href: `/${locale}/portal/dashboard`, label: labels.resources, icon: BookOpen },
    { href: `/${locale}/portal/profile`, label: labels.profile, icon: UserRound },
  ]
  const navItems = preview ? allNavItems.slice(0, 1) : allNavItems

  const handleSignOut = async () => {
    if (preview) return
    const { supabase } = await import('@/lib/supabase')
    await supabase.auth.signOut()
    resetPostHogUser()
    router.push(`/${locale}/portal/login`)
  }

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#10271f]">
      <header className="sticky top-0 z-40 border-b border-[#e8e3d8] bg-[#fbfaf7]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href={`/${locale}/portal/dashboard`} aria-label="LuxOps" className="shrink-0 no-underline">
            <BrandLogo compact showTagline showMonogram />
          </Link>

          <nav className="hidden h-full items-center gap-1 md:flex" aria-label="Espace client">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`inline-flex h-full items-center gap-2 border-b-2 px-5 text-[13px] font-semibold no-underline transition-colors ${active ? 'border-[#a98650] text-[#10271f]' : 'border-transparent text-[#727a72] hover:text-[#10271f]'}`}
                >
                  <Icon size={16} strokeWidth={1.8} />
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="relative" ref={accountRef}>
            <button
              type="button"
              aria-expanded={accountOpen}
              aria-haspopup="menu"
              onClick={() => setAccountOpen(value => !value)}
              className="inline-flex h-11 items-center gap-2.5 rounded-full border border-[#e8e3d8] bg-white/80 px-2.5 pr-3 text-left shadow-[0_2px_10px_rgba(16,39,31,0.04)] transition hover:border-[#c8b38e]"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e9e3d7] text-[#80613a]"><UserRound size={16} /></span>
              <span className="hidden text-xs font-semibold sm:block">{preview ? labels.preview : labels.account}</span>
              <ChevronDown size={14} className={`text-[#747a72] transition-transform ${accountOpen ? 'rotate-180' : ''}`} />
            </button>
            {accountOpen && (
              <div role="menu" className="absolute right-0 top-[calc(100%+10px)] z-50 w-60 rounded-2xl border border-[#e8e3d8] bg-[#fffefa] p-2 shadow-[0_18px_55px_rgba(16,39,31,0.14)]">
                {email && <><p className="truncate px-3 py-2 text-xs text-[#777d75]">{email}</p><div className="my-1 h-px bg-[#eee9df]" /></>}
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link key={href} href={href} onClick={() => setAccountOpen(false)} role="menuitem" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#263b32] no-underline hover:bg-[#f5f2eb]">
                    <Icon size={16} />{label}
                  </Link>
                ))}
                {!preview && <button type="button" onClick={handleSignOut} role="menuitem" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#747a72] hover:bg-[#f5f2eb]">
                  <LogOut size={16} />{labels.signOut}
                </button>}
              </div>
            )}
          </div>
        </div>

        <nav className="flex border-t border-[#eee9df] px-4 md:hidden" aria-label="Espace client">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return <Link key={href} href={href} className={`flex flex-1 items-center justify-center gap-2 border-b-2 py-3 text-xs font-semibold no-underline ${active ? 'border-[#a98650] text-[#10271f]' : 'border-transparent text-[#858a82]'}`}><Icon size={15} />{label}</Link>
          })}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[1320px] px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12">
        {children}
      </main>
    </div>
  )
}

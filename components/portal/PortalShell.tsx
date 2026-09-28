'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { identifyPostHogUser, resetPostHogUser } from '@/lib/posthogIdentity'
import {
  User,
  LogOut,
  Menu,
  BookOpen,
} from 'lucide-react'
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
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const lang = locale === 'fr' || locale === 'es' ? locale : 'en'
  const labels = {
    fr: { portal: 'Espace client', resources: 'Mes ressources', profile: 'Mon profil', signOut: 'Déconnexion' },
    en: { portal: 'Client portal', resources: 'My resources', profile: 'My profile', signOut: 'Sign out' },
    es: { portal: 'Espacio cliente', resources: 'Mis recursos', profile: 'Mi perfil', signOut: 'Cerrar sesión' },
  }[lang]

  useEffect(() => {
    if (!preview) identifyPostHogUser(email, { locale, source: 'portal_shell' })
  }, [email, locale, preview])

  const navItems = [
    {
      href: `/${locale}/portal/dashboard`,
      label: labels.resources,
      icon: BookOpen,
    },
    {
      href: `/${locale}/portal/profile`,
      label: labels.profile,
      icon: User,
    },
  ]

  const handleSignOut = async () => {
    if (preview) return
    const { supabase } = await import('@/lib/supabase')
    await supabase.auth.signOut()
    resetPostHogUser()
    router.push(`/${locale}/portal/login`)
  }

  const renderSidebar = () => (
    <aside className="flex min-h-screen w-[270px] flex-shrink-0 flex-col bg-[#0f211a] text-[#fcfbf8]">
      {/* Logo */}
      <div className="border-b border-white/10 px-7 py-7">
        <Link href={`/${locale}`} className="flex flex-col no-underline">
          <BrandLogo tone="light" showMonogram compact />
          <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
            {labels.portal}
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-2 px-4 py-7">
        {navItems.map(item => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 border-l-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-[#a58658] bg-white/10 text-white'
                  : 'border-transparent text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={17} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User + sign out */}
      <div className="border-t border-white/10 px-4 py-5">
        <p className="truncate px-4 pb-2 text-xs text-white/40">{email}</p>
        <button
          onClick={handleSignOut}
          disabled={preview}
          className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-white/60 transition-colors hover:text-white"
        >
          <LogOut size={17} />
          {labels.signOut}
        </button>
      </div>
    </aside>
  )

  return (
    <div className="flex min-h-screen bg-[#f5f1e9]">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex">
        {renderSidebar()}
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="flex">
            {renderSidebar()}
          </div>
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <div className="flex items-center justify-between border-b border-[#d8d0c3] bg-[#fcfbf8] px-5 py-4 text-[#0f211a] lg:hidden">
          <Link href={`/${locale}`} className="no-underline">
            <BrandLogo compact />
          </Link>
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
        </div>

        {/* Page content */}
        <main className="mx-auto w-full max-w-[1240px] flex-1 px-5 py-8 sm:px-8 lg:px-12 lg:py-11">
          {children}
        </main>
      </div>
    </div>
  )
}

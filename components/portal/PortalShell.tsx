'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import {
  LayoutDashboard,
  User,
  LogOut,
  Menu,
  X,
  BookOpen,
} from 'lucide-react'

interface PortalShellProps {
  locale: string
  email: string
  children: React.ReactNode
}

export default function PortalShell({ locale, email, children }: PortalShellProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isFr = locale === 'fr'

  const navItems = [
    {
      href: `/${locale}/portal/dashboard`,
      label: isFr ? 'Mes ressources' : 'My resources',
      icon: BookOpen,
    },
    {
      href: `/${locale}/portal/profile`,
      label: isFr ? 'Mon profil' : 'My profile',
      icon: User,
    },
  ]

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push(`/${locale}/portal/login`)
  }

  const Sidebar = () => (
    <aside className="w-64 flex-shrink-0 flex flex-col bg-[#1A2E44] text-white min-h-screen">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <Link href={`/${locale}`} className="font-bold text-lg tracking-widest text-white">
          LuxOps
        </Link>
        <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">
          {isFr ? 'Espace client' : 'Client portal'}
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
        {navItems.map(item => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-white/15 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon size={17} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User + sign out */}
      <div className="px-3 py-4 border-t border-white/10">
        <div className="px-3 py-2 mb-1">
          <p className="text-xs text-white/40 truncate">{email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <LogOut size={17} />
          {isFr ? 'Déconnexion' : 'Sign out'}
        </button>
      </div>
    </aside>
  )

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="flex">
            <Sidebar />
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
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#1A2E44] text-white">
          <Link href={`/${locale}`} className="font-bold tracking-widest">LuxOps</Link>
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
        </div>

        {/* Page content */}
        <main className="flex-1 px-6 py-8 max-w-5xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

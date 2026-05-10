import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Check, LayoutGrid, MessageSquare, BarChart2, Smartphone, X, AlertCircle, CheckCircle2 } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Operations Notion Templates | Customisable SOP Systems | LuxOps'
      : 'Templates Notion pour Hôtels | Systèmes de SOPs Personnalisables | LuxOps',
    description: isEn
      ? 'Notion-based operational management workspaces for hotels. Customisable SOP library, procedures and standards structured for hotel teams. Available now.'
      : 'Espaces Notion de gestion opérationnelle pour hôtels. SOPs, procédures et standards structurés pour équipes hôtelières. Disponibles immédiatement.',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/notion-templates`,
      languages: {
        'en': 'https://www.luxops.fr/en/notion-templates',
        'fr': 'https://www.luxops.fr/fr/notion-templates',
        'x-default': 'https://www.luxops.fr/en/notion-templates',
      },
    },
  }
}

const notionSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Hotel Operations Notion Template',
  description:
    'A complete Notion workspace for hotel operations management. Includes dashboards, checklists, task management, and reporting templates for all key departments.',
  offers: {
    '@type': 'Offer',
    price: '497',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: 'https://www.luxops.fr/en/notion-templates',
  },
}

export default async function NotionPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(notionSchema) }}
      />
      <NotionContent locale={locale} />
    </>
  )
}

function NotionContent({ locale }: { locale: string }) {
  const t = useTranslations('notion_page')
  const isEn = locale === 'en'

  const features = [
    t('base_f1'),
    t('base_f2'),
    t('base_f3'),
    t('base_f4'),
    t('base_f5'),
    t('base_f6'),
    t('base_f7'),
    t('base_f8'),
  ]

  const benefits = [
    {
      icon: <LayoutGrid size={20} style={{ color: '#003d9b' }} />,
      title: isEn ? 'Modular by Design' : 'Structure modulaire',
      desc: isEn
        ? 'Adapt by department, property, or workflow without rebuilding the structure. Each section works independently and connects to the whole.'
        : "Adaptez par département, par établissement ou par flux de travail sans tout reconstruire. Chaque section fonctionne de façon autonome et s'intègre à l'ensemble.",
    },
    {
      icon: <MessageSquare size={20} style={{ color: '#003d9b' }} />,
      title: isEn ? 'Faster Handovers' : 'Passations plus claires',
      desc: isEn
        ? 'Comments and mentions directly on tasks or procedures. Fewer missed follow-ups, clearer accountability between shifts and teams.'
        : 'Commentaires et mentions directement sur les tâches ou procédures. Moins de suivis manqués, une responsabilité plus claire entre les services.',
    },
    {
      icon: <BarChart2 size={20} style={{ color: '#003d9b' }} />,
      title: isEn ? 'One View Per Role' : 'Une vue par rôle',
      desc: isEn
        ? 'Managers, supervisors, and department heads each see what they need. Calendar, board, or table, filtered to their scope.'
        : 'Directeurs, superviseurs et chefs de département voient ce dont ils ont besoin. Calendrier, tableau ou liste, filtré selon leur périmètre.',
    },
    {
      icon: <Smartphone size={20} style={{ color: '#003d9b' }} />,
      title: isEn ? 'Mobile-Ready' : 'Accessible en mobilité',
      desc: isEn
        ? 'Floor checks, maintenance follow-up, room inspections, shift coordination. The workspace goes where the team goes.'
        : 'Rondes, suivi de maintenance, inspections de chambres, coordination de service. L\u2019espace de travail suit l\u2019\u00e9quipe sur le terrain.',
    },
  ]

  return (
    <div className="pt-16 bg-white">

      {/* Hero */}
      <section
        className="relative py-24 px-6 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(195,198,214,0.2)',
        }}
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-5 z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-8"
              style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
            >
              <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
              {isEn ? 'Notion Hub' : 'Hub Notion'}
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-none text-[#0a1d2e] mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-[#4f6074] max-w-lg leading-relaxed mb-10">
              {t('subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #003d9b, #0052cc)',
                  borderRadius: '0.125rem',
                  boxShadow: '0 8px 24px rgba(0,61,155,0.2)',
                }}
              >
                {isEn ? 'Get the Hub' : 'Découvrir le Hub'} <ArrowRight size={18} />
              </Link>
              <div
                className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[#003d9b]"
                style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
              >
                <span className="font-display text-2xl font-extrabold">{t('base_price')}</span>
              </div>
            </div>
          </div>

          {/* Right - Notion UI Mockup */}
          <div className="lg:col-span-7 relative">
            <div
              className="bg-white overflow-hidden flex flex-col font-sans"
              style={{
                borderRadius: '0.25rem',
                boxShadow: '0 20px 60px rgba(10,29,46,0.12), 0 0 0 1px rgba(195,198,214,0.4)',
                height: '480px',
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(195,198,214,0.3)', backgroundColor: '#f7f6f3' }}>
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4">
                  <div className="h-5 mx-auto max-w-[200px] rounded flex items-center justify-center" style={{ backgroundColor: 'rgba(195,198,214,0.3)' }}>
                    <span className="text-[10px] text-[#737685]">notion.so / grand-hotel-ops</span>
                  </div>
                </div>
              </div>

              {/* Notion Layout */}
              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-52 flex-shrink-0 flex flex-col p-3 gap-1" style={{ backgroundColor: '#f7f6f3', borderRight: '1px solid rgba(195,198,214,0.3)' }}>
                  <div className="flex items-center gap-2 px-2 py-1 mb-3">
                    <div className="w-5 h-5 rounded flex items-center justify-center text-[10px] text-white font-bold" style={{ backgroundColor: '#003d9b' }}>GH</div>
                    <span className="text-xs font-semibold text-[#0a1d2e] truncate">{isEn ? 'Grand Hotel Ops' : 'Grand Hôtel Ops'}</span>
                  </div>
                  <div className="space-y-0.5 text-xs text-[#737685]">
                    {(isEn ? [
                      { icon: '🏨', label: 'Operational Hub', active: true },
                      { icon: '🛎️', label: 'Front Office', active: false },
                      { icon: '🧹', label: 'Housekeeping', active: false },
                      { icon: '🍽️', label: 'F&B Ops', active: false },
                      { icon: '✨', label: 'Spa & Wellness', active: false },
                    ] : [
                      { icon: '🏨', label: 'Hub Opérations', active: true },
                      { icon: '🛎️', label: 'Front Office', active: false },
                      { icon: '🧹', label: 'Housekeeping', active: false },
                      { icon: '🍽️', label: 'F&B', active: false },
                      { icon: '✨', label: 'Spa & Wellness', active: false },
                    ]).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-2 py-1.5 rounded text-xs cursor-pointer"
                        style={item.active ? { backgroundColor: 'rgba(0,61,155,0.08)', color: '#003d9b', fontWeight: 600 } : {}}
                      >
                        <span className="text-sm">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t pt-3" style={{ borderColor: 'rgba(195,198,214,0.4)' }}>
                    <div className="text-[10px] font-bold text-[#737685] px-2 mb-2 tracking-wider uppercase">Resources</div>
                    {(isEn ? ['📋 Procedures', '📊 KPI Reporting', '👥 HR Team'] : ['📋 Procédures', '📊 Reporting KPI', '👥 Équipes RH']).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-[#737685] cursor-pointer">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white overflow-hidden flex flex-col">
                  {/* Cover */}
                  <div className="h-16 w-full relative flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(0,61,155,0.15), rgba(0,82,204,0.08))' }}>
                    <div className="absolute bottom-[-18px] left-10 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl" style={{ border: '1px solid rgba(195,198,214,0.3)' }}>🏨</div>
                  </div>
                  <div className="pt-8 px-10 pb-6 flex-1 overflow-hidden">
                    <h2 className="text-lg font-bold text-[#0a1d2e] mb-1">{isEn ? 'Grand Hotel Operations' : 'Grand Hôtel Opérations'}</h2>
                    <p className="text-[10px] text-[#737685] mb-4 italic">{isEn ? 'Last updated: 2 hours ago' : 'Dernière mise à jour : il y a 2 heures'}</p>

                    {/* Dept grid */}
                    <div className="text-xs font-bold text-[#737685] uppercase tracking-wider mb-2">{isEn ? 'Departments' : 'Départements'}</div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { icon: '🛎️', name: 'Reception', count: '12 SOPs' },
                        { icon: '🧹', name: 'Housekeeping', count: '8 SOPs' },
                        { icon: '🍽️', name: 'F&B Ops', count: '15 SOPs' },
                      ].map((d, i) => (
                        <div key={i} className="p-2.5 rounded cursor-pointer" style={{ border: '1px solid rgba(195,198,214,0.4)', backgroundColor: '#f8f9ff' }}>
                          <div className="text-base mb-1">{d.icon}</div>
                          <div className="text-[11px] font-bold text-[#0a1d2e]">{d.name}</div>
                          <div className="text-[9px] text-[#737685] mt-0.5">{d.count}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tasks table */}
                    <div className="text-xs font-bold text-[#737685] uppercase tracking-wider mb-2">{isEn ? 'Weekly Tracking' : 'Suivi Hebdomadaire'}</div>
                    <div className="rounded overflow-hidden" style={{ border: '1px solid rgba(195,198,214,0.3)' }}>
                      <div className="grid grid-cols-3 text-[9px] font-bold uppercase tracking-wider text-[#737685] px-3 py-1.5" style={{ backgroundColor: '#f8f9ff' }}>
                        <span>TÂCHE</span><span>STATUT</span><span>ASSIGNEE</span>
                      </div>
                      {(isEn ? [
                        { task: 'Morning Briefing', status: 'DONE', color: '#dcfce7', textColor: '#16a34a', initials: 'ML' },
                        { task: 'VIP Inspection 204', status: 'IN PROGRESS', color: '#dbeafe', textColor: '#1d4ed8', initials: 'JD' },
                        { task: 'Incident Report', status: 'TO DO', color: '#f3f4f6', textColor: '#6b7280', initials: 'SA' },
                      ] : [
                        { task: 'Briefing Matinal', status: 'FAIT', color: '#dcfce7', textColor: '#16a34a', initials: 'ML' },
                        { task: 'Inspection VIP 204', status: 'EN COURS', color: '#dbeafe', textColor: '#1d4ed8', initials: 'JD' },
                        { task: "Rapport d'Incidents", status: 'À FAIRE', color: '#f3f4f6', textColor: '#6b7280', initials: 'SA' },
                      ]).map((row, i) => (
                        <div key={i} className="grid grid-cols-3 px-3 py-2 items-center text-[10px]" style={{ borderTop: '1px solid rgba(195,198,214,0.2)' }}>
                          <span className="text-[#0a1d2e] font-medium truncate">{row.task}</span>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold inline-block w-fit" style={{ backgroundColor: row.color, color: row.textColor }}>{row.status}</span>
                          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ backgroundColor: '#eef4ff', color: '#003d9b' }}>{row.initials}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {isEn ? 'What this changes in daily operations' : "Ce que cela change dans l\u2019exploitation quotidienne"}
            </h2>
            <p className="text-lg text-[#4f6074] leading-relaxed">
              {isEn
                ? 'Four operational benefits, not software features.'
                : "Quatre b\u00e9n\u00e9fices op\u00e9rationnels, pas des fonctionnalit\u00e9s logicielles."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="p-8" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
                <div
                  className="w-10 h-10 flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                >
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-[#0a1d2e] mb-3">{b.title}</h3>
                <p className="text-[#4f6074] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento - What's Inside */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {isEn ? "One workspace. Multiple operational functions." : "Un espace de travail. Plusieurs fonctions op\u00e9rationnelles."}
            </h2>
            <p className="text-xl text-[#4f6074] max-w-2xl leading-relaxed">
              {isEn
                ? 'Hotels usually manage these functions across separate files, folders, and trackers. This brings them together.'
                : "Ces fonctions sont habituellement g\u00e9r\u00e9es dans des fichiers, dossiers et suivis s\u00e9par\u00e9s. Ce workspace les r\u00e9unit."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Kanban - Wide */}
            <div
              className="md:col-span-7 p-8 bg-white"
              style={{ borderRadius: '0.125rem', boxShadow: '0 2px 8px rgba(10,29,46,0.04)' }}
            >
              <div className="mb-6">
                <h3 className="font-display font-bold text-[#0a1d2e] mb-1">{isEn ? 'Maintenance Pipeline' : 'Pipeline de Maintenance'}</h3>
                <p className="text-xs text-[#737685] uppercase tracking-wider font-bold">{isEn ? 'Board View by Status' : 'Vue Board par Statut'}</p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {[
                  {
                    label: isEn ? 'Urgent' : 'Urgent',
                    color: '#fff7ed', textColor: '#c2410c',
                    items: [
                      { ref: isEn ? 'ROOM 402' : 'CHAMBRE 402', title: isEn ? 'AC Leak' : 'Fuite clim' },
                      { ref: isEn ? 'RECEPTION' : 'RECEPTION', title: isEn ? 'Terminal fault' : 'TPE défectueux' },
                    ],
                  },
                  {
                    label: isEn ? 'In Progress' : 'En Cours',
                    color: '#eff6ff', textColor: '#1d4ed8',
                    items: [
                      { ref: 'SPA', title: isEn ? 'Sauna filter change' : 'Changement filtres sauna' },
                    ],
                  },
                  {
                    label: isEn ? 'Done' : 'Terminé',
                    color: '#f0fdf4', textColor: '#16a34a',
                    items: [
                      { ref: isEn ? 'LOBBY' : 'LOBBY', title: isEn ? 'Lighting repair' : "Réparation éclairage" },
                    ],
                  },
                ].map((col, ci) => (
                  <div key={ci} className="min-w-[180px] flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded" style={{ backgroundColor: col.color, color: col.textColor }}>{col.label}</span>
                      <span className="text-[10px] text-[#737685]">{col.items.length}</span>
                    </div>
                    <div className="space-y-2">
                      {col.items.map((item, ii) => (
                        <div key={ii} className="p-3 bg-white rounded cursor-pointer" style={{ border: '1px solid rgba(195,198,214,0.4)', boxShadow: '0 1px 3px rgba(10,29,46,0.04)' }}>
                          <div className="text-[9px] text-[#737685] font-bold mb-1">{item.ref}</div>
                          <div className="text-xs font-medium text-[#0a1d2e]">{item.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SOP Toggles - Navy */}
            <div
              className="md:col-span-5 p-8 text-white flex flex-col justify-between"
              style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
            >
              <div>
                <h3 className="font-display font-bold text-white mb-6">
                  {isEn ? 'SOPs via Toggles' : 'Procédures par Toggles'}
                </h3>
                <div className="space-y-4">
                  {[
                    { label: isEn ? 'VIP Check-in (SOP-01)' : 'Check-in VIP (SOP-01)', open: false },
                    { label: isEn ? 'Complaint Management' : 'Gestion des Plaintes', open: true },
                    { label: isEn ? 'Security Protocol' : 'Protocole de Sécurité', open: false },
                  ].map((item, i) => (
                    <div key={i} className="border-b pb-3" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <span className="text-white text-xs">{item.open ? '▼' : '▶'}</span>
                        <span className="text-sm font-medium text-white">{item.label}</span>
                      </div>
                      {item.open && (
                        <div className="pl-5 pt-2 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                          {isEn ? '1. Listen actively\n2. Rephrase the issue\n3. Offer immediate compensation...' : '1. Écouter activement\n2. Reformuler le problème\n3. Proposer une compensation...'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs mt-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {isEn
                  ? 'Procedures accessible directly in the workspace: structured, searchable, and always current. No printed binders, no shared drives with outdated versions.'
                  : "Les proc\u00e9dures sont accessibles directement dans l\u2019espace de travail\u00a0: structur\u00e9es, consultables, toujours \u00e0 jour. Ni classeurs imprim\u00e9s, ni dossiers partag\u00e9s avec des versions obsol\u00e8tes."}
              </p>
            </div>

            {/* KPI Stats */}
            <div
              className="md:col-span-5 p-8 bg-white"
              style={{ borderRadius: '0.125rem', boxShadow: '0 2px 8px rgba(10,29,46,0.04)' }}
            >
              <div className="flex items-center gap-2 mb-6">
                <BarChart2 size={18} style={{ color: '#003d9b' }} />
                <h3 className="font-display font-bold text-[#0a1d2e]">{isEn ? 'Reporting & KPI' : 'Reporting & KPI'}</h3>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: isEn ? 'Tasks Done' : 'Tâches Faites', value: '94%' },
                  { label: isEn ? 'Staff Score' : 'Satisfaction Staff', value: '4.8/5' },
                  { label: isEn ? 'Incidents (7d)' : 'Incidents (7j)', value: '2' },
                ].map((stat, i) => (
                  <div key={i} className="p-3 text-center" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
                    <div className="font-display text-xl font-extrabold text-[#003d9b]">{stat.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-[#737685] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-16">
                {[25, 45, 35, 70, 55, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i === 6 ? '#003d9b' : i === 5 ? 'rgba(0,61,155,0.4)' : '#eef4ff',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* HR Base */}
            <div
              className="md:col-span-7 p-8"
              style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
            >
              <h3 className="font-display font-bold text-[#0a1d2e] mb-6">{isEn ? 'HR & Team Base' : 'Base RH & Équipes'}</h3>
              <div className="space-y-3">
                {[
                  { name: 'Sarah Meyer', role: isEn ? 'Front Office Manager' : 'Chef de Réception', tags: ['FR', 'EN'], status: null },
                  { name: 'Lucas Dubois', role: isEn ? "Clefs d'Or Concierge" : "Concierge Clefs d'Or", tags: [], status: 'ONBOARDED' },
                  { name: 'Marie Laurent', role: isEn ? 'Housekeeping Supervisor' : 'Gouvernante', tags: ['FR'], status: null },
                ].map((person, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white"
                    style={{ borderRadius: '0.125rem' }}
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                    >
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-[#0a1d2e] leading-none">{person.name}</div>
                      <div className="text-[10px] text-[#737685] mt-0.5 uppercase tracking-wider font-bold">{person.role}</div>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      {person.tags.map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 text-[9px] font-bold rounded" style={{ backgroundColor: '#eef4ff', color: '#003d9b' }}>{tag}</span>
                      ))}
                      {person.status && (
                        <span className="px-1.5 py-0.5 text-[9px] font-bold rounded" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>{person.status}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#737685] mt-4 leading-relaxed">
                {isEn
                  ? 'Track team composition, language skills, and onboarding status. New joiners follow a structured path rather than starting from informal knowledge transfer.'
                  : "Suivez la composition des \u00e9quipes, les comp\u00e9tences et le statut d\u2019int\u00e9gration. Les nouveaux arrivants disposent d\u2019un parcours structur\u00e9 plut\u00f4t que d\u2019une transmission informelle."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Notion - Comparison */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-12">
              {isEn ? 'Where documented standards become easier to apply.' : "L\u00e0 o\u00f9 les standards document\u00e9s deviennent plus simples \u00e0 appliquer."}
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <X size={18} className="text-red-500" />,
                  bg: '#fef2f2',
                  title: isEn ? 'One reliable system' : 'Un syst\u00e8me fiable',
                  desc: isEn
                    ? 'Replaces scattered spreadsheets, shared drives, and disconnected trackers with a single structured base that stays current.'
                    : "Remplace les feuilles de calcul dispers\u00e9es, les dossiers partag\u00e9s et les suivis d\u00e9connect\u00e9s par une base unique et structur\u00e9e, toujours \u00e0 jour.",
                },
                {
                  icon: <AlertCircle size={18} className="text-orange-500" />,
                  bg: '#fff7ed',
                  title: isEn ? 'Clearer operational follow-up' : 'Un suivi op\u00e9rationnel plus clair',
                  desc: isEn
                    ? 'Tasks are assigned, tracked, and visible across departments. Nothing falls through the gap between shifts or teams.'
                    : "Les t\u00e2ches sont assign\u00e9es, suivies et visibles dans tous les d\u00e9partements. Rien ne passe entre les mailles lors des passations ou changements d\u2019\u00e9quipe.",
                },
                {
                  icon: <CheckCircle2 size={18} className="text-green-500" />,
                  bg: '#f0fdf4',
                  title: isEn ? 'A live view of what is happening' : "Une vue en direct de l\u2019activit\u00e9",
                  desc: isEn
                    ? 'Dashboards show the current state of operations: tasks, incidents, KPIs, updated in real time without manual consolidation.'
                    : "Les tableaux de bord refl\u00e8tent l\u2019\u00e9tat r\u00e9el des op\u00e9rations\u00a0: t\u00e2ches, incidents, KPIs, mis \u00e0 jour en temps r\u00e9el, sans consolidation manuelle.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: item.bg, borderRadius: '0.125rem' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#0a1d2e] mb-2">{item.title}</h4>
                    <p className="text-[#4f6074] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="space-y-4">
            {/* Base */}
            <div className="p-10" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
              <div className="font-display text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">{isEn ? 'Base Template' : 'Template Base'}</div>
              <div className="font-display text-4xl font-extrabold text-[#003d9b] mb-2">{t('base_price')}</div>
              <p className="text-sm text-[#737685] mb-6">{t('base_desc')}</p>
              <ul className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#0a1d2e]">
                    <Check size={13} style={{ color: '#003d9b' }} className="flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold transition-all hover:opacity-90 w-full justify-center"
                style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem' }}
              >
                {t('buy_base')} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Custom */}
            <div
              className="p-10 text-white"
              style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
            >
              <div className="font-display text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {isEn ? 'Bespoke Setup' : 'Sur-Mesure'}
              </div>
              <div className="font-display text-4xl font-extrabold text-white mb-2">{t('custom_price')}</div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>{t('custom_desc')}</p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#003d9b] font-bold hover:bg-[#f8f9ff] transition-colors w-full justify-center"
                style={{ borderRadius: '0.125rem' }}
              >
                {t('custom_cta')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

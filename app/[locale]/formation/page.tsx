import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Check, BookOpen, Users2, Award } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Hotel Staff Training | On-Property Operational Training | LuxOps' : 'Formation Hôtelière | Formation Opérationnelle en Établissement | LuxOps',
    description: isEn ? 'On-property training for hotel teams. Operational procedures, service standards and SOP implementation. Half-day or full-day sessions for up to 15 participants.' : 'Formation opérationnelle en établissement. Standards de service et SOPs pour équipes hôtelières. Formats demi-journée ou journée entière, 15 participants.',
  }
}

export default async function FormationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <FormationContent locale={locale} />
}

function FormationContent({ locale }: { locale: string }) {
  const t = useTranslations('training_page')
  const isEn = locale === 'en'

  const topics = [t('t1'), t('t2'), t('t3'), t('t4'), t('t5'), t('t6')]

  const modules = isEn ? [
    {
      icon: <BookOpen size={28} style={{ color: '#003d9b' }} />,
      title: 'Playbook Implementation',
      desc: "We don't just hand over a manual. We run your team through the procedures, answer questions, and make sure the content is understood and adopted.",
      tags: ['Procedures', 'SOPs', 'Checklists'],
      wide: true,
    },
    {
      icon: null,
      stat: '95%',
      statLabel: 'adoption rate on new standards',
      wide: false,
      navy: true,
    },
    {
      icon: <Users2 size={24} style={{ color: '#003d9b' }} />,
      title: 'Service Standards Training',
      desc: 'Guest-facing behaviours, service sequences and communication standards. Built around your department context, not a generic script.',
      tags: ['Guest experience', 'Service sequences'],
      wide: false,
    },
    {
      icon: <Award size={24} style={{ color: '#003d9b' }} />,
      title: 'Management & Leadership',
      desc: 'Giving supervisors and heads of department the tools to monitor standards, run briefings, and keep quality consistent across shifts.',
      tags: ['Briefings', 'Quality control', 'Post-audit'],
      wide: false,
    },
  ] : [
    {
      icon: <BookOpen size={28} style={{ color: '#003d9b' }} />,
      title: "Mise en place des Playbooks",
      desc: "Nous ne livrons pas simplement un manuel. Nous accompagnons votre équipe à travers les procédures, répondons aux questions, et nous assurons que le contenu est compris et adopté.",
      tags: ['Procédures', 'SOPs', 'Checklists'],
      wide: true,
    },
    {
      icon: null,
      stat: '95%',
      statLabel: "taux d'adoption des nouveaux standards",
      wide: false,
      navy: true,
    },
    {
      icon: <Users2 size={24} style={{ color: '#003d9b' }} />,
      title: 'Standards de Service',
      desc: "Comportements en contact client, séquences de service et standards de communication. Construit autour du contexte de votre département.",
      tags: ["Expérience client", "Séquences de service"],
      wide: false,
    },
    {
      icon: <Award size={24} style={{ color: '#003d9b' }} />,
      title: 'Management & Leadership',
      desc: "Donner aux superviseurs et chefs de service les outils pour contrôler les standards, animer les briefings et maintenir la qualité sur tous les services.",
      tags: ['Briefings', 'Contrôle qualité', 'Post-audit'],
      wide: false,
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
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-end gap-10">
          {/* Left */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-8"
              style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
            >
              <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
              {isEn ? 'On-Property Training' : 'Formation en établissement'}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e] mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-[#4f6074] max-w-2xl leading-relaxed">{t('subtitle')}</p>
            <p className="text-sm text-[#737685] max-w-xl mt-4 leading-relaxed">{t('training_context')}</p>
          </div>
          {/* Right — floating stat card */}
          <div className="lg:w-72 flex-shrink-0">
            <div
              className="bg-white p-8"
              style={{ borderRadius: '0.125rem', boxShadow: '0 20px 60px rgba(10,29,46,0.10)', border: '1px solid rgba(195,198,214,0.2)' }}
            >
              <div className="font-display text-5xl font-extrabold text-[#003d9b] mb-1">15</div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#737685] mb-6">
                {isEn ? 'Max participants per session' : 'Participants max par session'}
              </div>
              <div className="space-y-3">
                {[
                  { icon: <Clock size={13} />, label: isEn ? '4h or 8h formats' : 'Formats 4h ou 8h' },
                  { icon: <Users size={13} />, label: isEn ? 'On your property' : 'Dans votre établissement' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#4f6074]">
                    <span style={{ color: '#003d9b' }}>{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento — training modules */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-16">
            {isEn ? 'What we cover' : 'Ce que nous couvrons'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Wide card — Playbook Implementation */}
            <div
              className="md:col-span-8 bg-white p-10 flex flex-col justify-between group"
              style={{ borderRadius: '0.125rem', borderLeft: '4px solid #003d9b', minHeight: '320px' }}
            >
              <div>
                <div
                  className="w-12 h-12 flex items-center justify-center mb-8"
                  style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                >
                  {modules[0].icon}
                </div>
                <h3 className="font-display font-bold text-[#0a1d2e] text-2xl mb-4">{modules[0].title}</h3>
                <p className="text-[#4f6074] leading-relaxed max-w-xl">{modules[0].desc}</p>
              </div>
              <div className="flex gap-2 mt-8 flex-wrap">
                {modules[0].tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-bold text-[#003d9b] uppercase tracking-wider"
                    style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Navy stat card */}
            <div
              className="md:col-span-4 p-10 flex flex-col items-center justify-center text-center text-white"
              style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
            >
              <div className="font-display text-6xl font-extrabold text-white mb-2">{modules[1].stat}</div>
              <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {modules[1].statLabel}
              </div>
              <div className="h-px w-12 mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
              <p className="text-sm italic" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {isEn
                  ? '"Training without follow-through is a briefing. We stay until it sticks."'
                  : '"Former sans suivi, c\u2019est juste un briefing. Nous restons jusqu\u2019\u00e0 l\u2019ancrage."'}
              </p>
            </div>

            {/* Service Standards */}
            <div
              className="md:col-span-6 p-10 bg-white flex flex-col justify-between"
              style={{ borderRadius: '0.125rem' }}
            >
              <div>
                <div
                  className="w-10 h-10 flex items-center justify-center mb-8"
                  style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                >
                  {modules[2].icon}
                </div>
                <h3 className="font-display font-bold text-[#0a1d2e] text-xl mb-3">{modules[2].title}</h3>
                <p className="text-[#4f6074] text-sm leading-relaxed">{modules[2].desc}</p>
              </div>
              <div className="flex gap-2 mt-6 flex-wrap">
                {modules[2].tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-bold text-[#737685] uppercase tracking-wider"
                    style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Management */}
            <div
              className="md:col-span-6 p-10 flex flex-col justify-between"
              style={{ backgroundColor: '#dae9ff', borderRadius: '0.125rem' }}
            >
              <div>
                <div
                  className="w-10 h-10 flex items-center justify-center mb-8 bg-white"
                  style={{ borderRadius: '0.125rem' }}
                >
                  {modules[3].icon}
                </div>
                <h3 className="font-display font-bold text-[#0a1d2e] text-xl mb-3">{modules[3].title}</h3>
                <p className="text-[#4f6074] text-sm leading-relaxed">{modules[3].desc}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {modules[3].tags?.slice(0, 2).map((tag, i) => (
                  <div
                    key={i}
                    className="p-3"
                    style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '0.125rem' }}
                  >
                    <div className="text-xs font-bold text-[#003d9b]">{tag}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-12">
            {isEn ? 'Training Formats' : 'Formats de Formation'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            {/* Half day */}
            <div className="p-10" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
              <div className="flex items-center gap-2 mb-6">
                <Clock size={14} style={{ color: '#003d9b' }} />
                <span className="text-xs font-bold uppercase tracking-widest text-[#003d9b]">{t('duration_half')}</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-[#0a1d2e] mb-3">{t('half_day')}</h3>
              <div className="font-display text-4xl font-extrabold text-[#003d9b] mb-4">{t('half_price')}</div>
              <div className="flex items-center gap-2 text-sm text-[#4f6074]">
                <Users size={13} />
                {t('max_participants')}
              </div>
            </div>

            {/* Full day */}
            <div
              className="p-10 text-white"
              style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Clock size={14} style={{ color: 'rgba(255,255,255,0.7)' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('duration_full')}</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-white mb-3">{t('full_day')}</h3>
              <div className="font-display text-4xl font-extrabold text-white mb-4">{t('full_price')}</div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <Users size={13} />
                {t('max_participants')}
              </div>
            </div>
          </div>

          {/* Topics */}
          <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
            {t('topics_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 text-sm text-[#0a1d2e] font-medium"
                style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
              >
                <Check size={14} style={{ color: '#003d9b' }} className="flex-shrink-0" />
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human quote section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0a1d2e' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '0.125rem' }}
            >
              {[
                { v: '15', l: isEn ? 'Max per session' : 'Max par session' },
                { v: '½ or 1d', l: isEn ? 'Format' : 'Format' },
                { v: '100%', l: isEn ? 'On your property' : 'Dans votre établissement' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="font-display text-2xl font-extrabold text-[#003d9b]">{s.v}</div>
                  <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="font-display text-5xl text-[#003d9b] mb-4" style={{ opacity: 0.3 }}>"</div>
            <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-white leading-snug mb-8">
              {isEn
                ? "Training without follow-through is just a briefing. We stay until the standards are embedded in your team's daily routine."
                : "Former sans ancrage, c'est juste un briefing. Nous restons jusqu'à ce que les standards soient intégrés dans le quotidien de votre équipe."}
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-10 h-px" style={{ backgroundColor: '#003d9b' }} />
              <div>
                <div className="text-sm font-bold text-white">LuxOps</div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {isEn ? 'On-Property Training' : 'Formation en Établissement'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#003d9b] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-8">
            {t('cta_title')}
          </h2>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#003d9b] font-bold hover:bg-[#f8f9ff] transition-colors"
            style={{ borderRadius: '0.125rem' }}
          >
            {t('cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

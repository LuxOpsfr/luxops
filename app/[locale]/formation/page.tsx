import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Check, BookOpen, Users2, Award, Library } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'On-Property Hotel Training | Operational Standards Implementation | LuxOps'
      : 'Formation Hôtelière en Établissement | Déploiement de Standards Opérationnels | LuxOps',
    description: isEn
      ? 'On-site training for hotel teams. Procedures, service standards and SOP implementation. Half-day or full-day sessions for up to 15 participants, built around your property.'
      : "Formation opérationnelle en établissement pour équipes hôtelières. Procédures, standards de service et mise en place des SOPs. Demi-journée ou journée complète, jusqu'à 15 participants.",
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
      title: 'Procedures & SOP Rollout',
      desc: "The most common gap in operational training is not knowledge; it is application. This session takes the team through the actual procedures: how they are structured, why each step matters, and how to apply them from the first shift onward. Not a presentation. A working session.",
      tags: ['SOPs', 'Procedures', 'Checklists'],
      wide: true,
    },
    {
      icon: null,
      stat: '95%',
      statLabel: 'adoption rate on new procedures',
      navy: true,
      wide: false,
    },
    {
      icon: <Users2 size={24} style={{ color: '#003d9b' }} />,
      title: 'Service Standards',
      desc: 'How to greet, respond, recover, and close interactions at every guest touchpoint. Service sequences and communication standards built around your department and team context. Teams leave knowing what is expected and why, not just what the script says.',
      tags: ['Guest contact', 'Service sequences', 'Communication'],
      wide: false,
    },
    {
      icon: <Award size={24} style={{ color: '#003d9b' }} />,
      title: 'Supervision & Team Leadership',
      desc: "For heads of department and supervisors: how to run effective briefings, monitor standard delivery across shifts, identify gaps early, and give feedback that raises performance rather than creating friction.",
      tags: ['Briefings', 'Quality monitoring', 'Post-audit'],
      wide: false,
    },
  ] : [
    {
      icon: <BookOpen size={28} style={{ color: '#003d9b' }} />,
      title: "Déploiement des Procédures et SOPs",
      desc: "Le principal écart dans la formation opérationnelle n'est pas le manque de connaissance, c'est le manque d'application. Cette session fait parcourir à l'équipe les procédures en détail : leur structure, la logique de chaque étape, et la façon de les appliquer dès le premier service. Pas une présentation. Une session de travail.",
      tags: ['SOPs', 'Procédures', 'Checklists'],
      wide: true,
    },
    {
      icon: null,
      stat: '95%',
      statLabel: "taux d'adoption des nouvelles procédures",
      navy: true,
      wide: false,
    },
    {
      icon: <Users2 size={24} style={{ color: '#003d9b' }} />,
      title: 'Standards de Service',
      desc: "Comment accueillir, répondre, gérer une situation et conclure chaque interaction client. Des séquences de service et des standards de communication construits autour du contexte de votre département. L'équipe repart avec une compréhension claire de ce qui est attendu, et pourquoi, pas seulement de ce que dit le script.",
      tags: ['Contact client', 'Séquences de service', 'Communication'],
      wide: false,
    },
    {
      icon: <Award size={24} style={{ color: '#003d9b' }} />,
      title: 'Encadrement et Leadership',
      desc: "Pour les chefs de service et superviseurs : animer des briefings efficaces, suivre l'application des standards sur chaque service, identifier les écarts en amont, et formuler des retours qui font progresser l'équipe sans créer de tensions.",
      tags: ['Briefings', 'Suivi qualité', 'Post-audit'],
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
            <p className="text-xl text-[#4f6074] max-w-2xl leading-relaxed mb-4">{t('subtitle')}</p>
            <p className="text-sm text-[#737685] max-w-xl leading-relaxed">{t('training_context')}</p>
          </div>

          {/* Right — stat card */}
          <div className="lg:w-72 flex-shrink-0">
            <div
              className="bg-white p-8"
              style={{
                borderRadius: '0.125rem',
                boxShadow: '0 20px 60px rgba(10,29,46,0.10)',
                border: '1px solid rgba(195,198,214,0.2)',
              }}
            >
              <div className="font-display text-5xl font-extrabold text-[#003d9b] mb-1">15</div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#737685] mb-6">
                {isEn ? 'Max participants per session' : 'Participants max par session'}
              </div>
              <div className="space-y-3">
                {[
                  { icon: <Clock size={13} />, label: isEn ? '4h or 8h formats' : 'Formats 4h ou 8h' },
                  { icon: <Users size={13} />, label: isEn ? 'Delivered on your property' : 'Menée dans votre établissement' },
                  { icon: <Library size={13} />, label: isEn ? 'Playbooks included per participant' : 'Playbooks remis à chaque participant' },
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

      {/* Bento — what we cover */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {isEn ? 'What the training covers' : 'Ce que la formation couvre'}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">
              {isEn
                ? "This is not just about presenting procedures. It is about making sure teams understand them, can apply them in real service conditions, and carry that into their daily work."
                : "Il ne s'agit pas seulement de présenter des procédures. Il s'agit de s'assurer que les équipes les comprennent, peuvent les appliquer dans des conditions de service réelles, et les intègrent dans leur fonctionnement quotidien."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Wide card — SOP Rollout */}
            <div
              className="md:col-span-8 bg-white p-10 flex flex-col justify-between"
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
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                {isEn
                  ? 'A manual on a shelf changes nothing. What changes things is a team that understands why the procedure exists.'
                  : "Un manuel sur une étagère ne change rien. Ce qui change les choses, c'est une équipe qui comprend pourquoi la procédure existe."}
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

            {/* Supervision & Leadership */}
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
            <div className="p-10 flex flex-col justify-between" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Clock size={14} style={{ color: '#003d9b' }} />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#003d9b]">{t('duration_half')}</span>
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[#0a1d2e] mb-3">{t('half_day')}</h3>
                <div className="font-display text-4xl font-extrabold text-[#003d9b] mb-4">{t('half_price')}</div>
                <div className="flex items-center gap-2 text-sm text-[#4f6074] mb-6">
                  <Users size={13} />
                  {t('max_participants')}
                </div>
                <p className="text-sm text-[#4f6074] leading-relaxed">{t('half_desc')}</p>
              </div>
            </div>

            {/* Full day */}
            <div
              className="p-10 flex flex-col justify-between text-white"
              style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Clock size={14} style={{ color: 'rgba(255,255,255,0.7)' }} />
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {t('duration_full')}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white mb-3">{t('full_day')}</h3>
                <div className="font-display text-4xl font-extrabold text-white mb-4">{t('full_price')}</div>
                <div className="flex items-center gap-2 text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <Users size={13} />
                  {t('max_participants')}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{t('full_desc')}</p>
              </div>
            </div>

          </div>

          {/* Playbooks inclus */}
          <div
            className="flex flex-col lg:flex-row items-center gap-8 p-8 mb-20"
            style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem', borderLeft: '4px solid #003d9b' }}
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white" style={{ borderRadius: '0.125rem' }}>
              <Library size={24} style={{ color: '#003d9b' }} />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-[#0a1d2e] text-lg mb-2">
                {isEn ? 'Playbooks included in every session' : 'Les playbooks sont inclus dans chaque session'}
              </h3>
              <p className="text-sm text-[#4f6074] leading-relaxed">
                {isEn
                  ? 'Every participant leaves the session with the relevant playbook. The procedures covered during training become a reference they can consult, apply and pass on to their team independently.'
                  : "Chaque participant repart avec le playbook du département concerné. Les procédures abordées pendant la formation deviennent une référence qu'ils peuvent consulter, appliquer et transmettre à leur équipe en toute autonomie."}
              </p>
            </div>
            <Link
              href={`/${locale}/playbooks`}
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 text-[#003d9b] font-bold text-sm border border-[#003d9b] hover:bg-[#003d9b] hover:text-white transition-colors"
              style={{ borderRadius: '0.125rem' }}
            >
              {isEn ? 'View playbooks' : 'Voir les playbooks'}
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Topics */}
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {t('topics_title')}
            </h2>
            <p className="text-[#4f6074] leading-relaxed text-sm">{t('topics_intro')}</p>
          </div>
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

      {/* Closing statement — dark */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0a1d2e' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* Stats sidebar */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div
              className="p-8 flex flex-col gap-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '0.125rem' }}
            >
              {[
                { v: '15', l: isEn ? 'Max per session' : 'Max par session' },
                { v: isEn ? '½ or 1d' : '½ ou 1j', l: isEn ? 'Format' : 'Format' },
                { v: '100%', l: isEn ? 'On your property' : 'Dans votre établissement' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="font-display text-2xl font-extrabold text-[#003d9b]">{s.v}</div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <div className="flex-1">
            <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-white leading-snug mb-8">
              {isEn
                ? "A training session without follow-through stays theoretical. The goal is not to present standards; it is to help teams understand them well enough to apply them consistently, without being reminded every shift."
                : "Une session de formation sans mise en application reste théorique. L'objectif n'est pas de présenter des standards, c'est d'aider les équipes à les comprendre assez bien pour les appliquer de façon constante, sans qu'on ait besoin de le redemander à chaque service."}
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

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ClipboardCheck,
  Hotel,
  ListChecks,
  Map,
  SearchCheck,
  Users2,
} from 'lucide-react'
import AuditQuoteForm from '@/components/AuditQuoteForm'
import SamePageAnchor from '@/components/SamePageAnchor'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'On-Site Hotel Quality Audit | LuxOps'
      : 'Audit qualité hôtelier sur site | LuxOps',
    description: isEn
      ? 'On-site operational quality audit to identify standards gaps, service friction points and practical improvement priorities across hotel departments.'
      : 'Audit qualité opérationnel sur site pour identifier les écarts de standards, les points de friction entre services et les priorités d’action à corriger.',
    alternates: {
      canonical: isEn ? 'https://www.luxops.fr/en/quality-audit' : 'https://www.luxops.fr/fr/audit-qualite',
      languages: {
        en: 'https://www.luxops.fr/en/quality-audit',
        fr: 'https://www.luxops.fr/fr/audit-qualite',
        'x-default': 'https://www.luxops.fr/en/quality-audit',
      },
    },
  }
}

export default async function AuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <AuditContent locale={locale} />
}

export function AuditContent({ locale }: { locale: string }) {
  const isEn = locale === 'en'
  const page = isEn ? englishContent : frenchContent

  return (
    <div className="pt-16 bg-white">
      <section
        className="px-6 py-20 lg:py-24 border-b border-[#e8edf5]"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eef4ff] text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-7">
              <span className="w-2 h-2 rounded-full bg-[#003d9b]" />
              {page.badge}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.98] text-[#0a1d2e] mb-6">
              {page.title}
            </h1>
            <p className="text-lg md:text-xl text-[#4f6074] leading-relaxed max-w-2xl mb-6">
              {page.subtitle}
            </p>
            <p className="text-sm text-[#737685] leading-relaxed max-w-2xl mb-8">
              {page.context}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <SamePageAnchor
                href="#audit-quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#0a1d2e] transition-colors"
              >
                {page.primaryCta}
                <ArrowRight size={16} />
              </SamePageAnchor>
              <SamePageAnchor
                href="#audit-situations"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0a1d2e] border border-[#d8deea] font-bold text-sm hover:border-[#003d9b] transition-colors"
              >
                {page.secondaryCta}
              </SamePageAnchor>
            </div>
          </div>

          <div id="audit-quote" className="bg-white border border-[#d8deea] shadow-[0_24px_70px_rgba(10,29,46,0.10)] p-8 lg:p-10 scroll-mt-28">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-[#eef4ff] flex items-center justify-center flex-shrink-0">
                <SearchCheck size={24} className="text-[#003d9b]" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-2">
                  {page.formTitle}
                </h2>
                <p className="text-sm text-[#4f6074] leading-relaxed">{page.formIntro}</p>
              </div>
            </div>
            <AuditQuoteForm locale={locale} />
          </div>
        </div>
      </section>

      <section id="audit-situations" className="px-6 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
              {page.situationsLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {page.situationsTitle}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">{page.situationsIntro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.situations.map((item, index) => (
              <div key={index} className="border border-[#e8edf5] bg-[#f8f9ff] p-6">
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[#0a1d2e] mb-3">{item.title}</h3>
                <p className="text-sm text-[#4f6074] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#f8f9ff]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
              {page.reviewLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-5">
              {page.reviewTitle}
            </h2>
            <p className="text-[#4f6074] leading-relaxed mb-6">{page.reviewIntro}</p>
            <Link
              href={isEn ? '/en/playbooks' : '/fr/playbooks'}
              className="inline-flex items-center gap-2 text-[#003d9b] font-bold text-sm hover:text-[#0a1d2e] transition-colors"
            >
              {page.playbooksLink}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.reviewPoints.map((item, index) => (
              <div key={index} className="bg-white border border-[#e8edf5] p-6">
                <CheckIcon />
                <h3 className="font-display font-bold text-[#0a1d2e] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4f6074] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
              {page.methodLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {page.methodTitle}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">{page.methodIntro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.methodSteps.map((step, index) => (
              <div key={index} className="border border-[#e8edf5] p-7">
                <div className="w-9 h-9 bg-[#003d9b] text-white flex items-center justify-center font-bold text-xs mb-5">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-lg font-bold text-[#0a1d2e] mb-3">{step.title}</h3>
                <p className="text-sm text-[#4f6074] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#f8f9ff]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
              {page.deliverablesLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-5">
              {page.deliverablesTitle}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">{page.deliverablesIntro}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.deliverables.map((item) => (
              <div key={item} className="bg-white border border-[#e8edf5] p-5 flex gap-3">
                <ClipboardCheck size={18} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#0a1d2e] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#0a1d2e]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#8fb7ff] mb-3">
              {page.afterLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5">
              {page.afterTitle}
            </h2>
            <p className="text-[#cbd5e1] leading-relaxed">{page.afterText}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-7 lg:p-8">
            <h3 className="font-display text-2xl font-extrabold text-white tracking-tight mb-4">
              {page.contactTitle}
            </h3>
            <p className="text-sm text-[#cbd5e1] leading-relaxed mb-6">{page.contactText}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={isEn ? '/en/training' : '/fr/formation'}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-white text-[#0a1d2e] font-bold text-sm hover:bg-[#eef4ff] transition-colors"
              >
                {page.trainingCta}
                <ArrowRight size={15} />
              </Link>
              <Link
                href={isEn ? '/en/bespoke-process' : '/fr/process-sur-mesure'}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-colors"
              >
                {page.processCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: page.schemaName,
            provider: {
              '@type': 'Organization',
              name: 'LuxOps',
              url: 'https://www.luxops.fr',
            },
            serviceType: page.schemaServiceType,
            areaServed: ['France', 'Belgium', 'Switzerland', 'Luxembourg', 'Monaco'],
            availableLanguage: ['French', 'English'],
          }),
        }}
      />
    </div>
  )
}

function CheckIcon() {
  return <ListChecks size={20} className="text-[#003d9b] mb-4" />
}

const frenchContent = {
  badge: 'Audit sur site',
  title: 'Audit qualité opérationnel',
  subtitle:
    'Une analyse terrain pour identifier les écarts de standards, les points de friction entre services et les priorités d’action à traiter en premier.',
  context:
    'L’audit part de ce qui se passe réellement dans l’établissement : exécution du service, contrôles, passations, documentation existante et régularité des standards. L’objectif est de donner à la direction une lecture claire, utilisable et priorisée.',
  primaryCta: 'Demander un devis audit',
  secondaryCta: 'Voir quand auditer',
  formTitle: 'Parlez-nous de votre besoin audit',
  formIntro:
    'Quelques informations suffisent pour comprendre le contexte et revenir vers vous avec un format adapté.',
  situationsLabel: 'Quand auditer',
  situationsTitle: 'Utile quand la qualité doit être objectivée, pas seulement ressentie',
  situationsIntro:
    'Un audit qualité permet de sortir des impressions générales. Il met en évidence ce qui tient, ce qui varie selon les shifts et ce qui demande une action structurée.',
  situations: [
    {
      icon: <Hotel size={20} className="text-[#003d9b]" />,
      title: 'Pré-ouverture ou reprise',
      text: 'Vérifier que les standards, les supports et les réflexes opérationnels sont prêts avant la montée en charge.',
    },
    {
      icon: <ClipboardCheck size={20} className="text-[#003d9b]" />,
      title: 'Baisse de régularité',
      text: 'Identifier pourquoi l’expérience varie selon les jours, les équipes, les étages ou les points de contact client.',
    },
    {
      icon: <Users2 size={20} className="text-[#003d9b]" />,
      title: 'Alignement management',
      text: 'Donner aux chefs de service une base commune pour décider, contrôler et corriger sans rester dans le ressenti.',
    },
    {
      icon: <Map size={20} className="text-[#003d9b]" />,
      title: 'Plan d’action',
      text: 'Prioriser les corrections : ce qui doit être traité tout de suite, ce qui demande une formation et ce qui relève des process.',
    },
  ],
  reviewLabel: 'Périmètre',
  reviewTitle: 'Ce que nous observons sur place',
  reviewIntro:
    'Le périmètre est adapté à l’établissement. L’audit peut couvrir un département précis ou plusieurs services lorsque les écarts viennent surtout des liaisons entre équipes.',
  playbooksLink: 'Voir les playbooks opérationnels',
  reviewPoints: [
    {
      title: 'Standards physiques',
      text: 'Chambres, espaces publics, mise en place, détails visibles, critères de libération et méthodes d’auto-contrôle.',
    },
    {
      title: 'Séquences de service',
      text: 'Accueil, demandes client, gestion des réclamations, service en salle, passations et moments sensibles du parcours client.',
    },
    {
      title: 'Contrôles et suivi',
      text: 'Briefings, inspections, reporting, remontées d’écarts, arbitrages et suivi managérial après correction.',
    },
    {
      title: 'Documentation réelle',
      text: 'Procédures existantes, checklists, supports de formation et manière dont les équipes les utilisent vraiment.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Une lecture terrain, structurée et directement exploitable',
  methodIntro:
    'L’audit ne consiste pas à chercher des défauts isolés. Il sert à comprendre pourquoi les écarts apparaissent, où ils se répètent et quelles actions auront le plus d’impact.',
  methodSteps: [
    {
      title: 'Préparation',
      text: 'Revue du contexte, des supports existants, des départements concernés et des priorités de la direction.',
    },
    {
      title: 'Observation',
      text: 'Présence sur site pendant les vrais moments d’exploitation : prise de poste, service, inspection, passation et contrôle.',
    },
    {
      title: 'Analyse',
      text: 'Classement des écarts par département, niveau d’impact, cause probable et priorité d’action.',
    },
    {
      title: 'Restitution',
      text: 'Débrief clair avec la direction, feuille de route priorisée et recommandations activables.',
    },
  ],
  deliverablesLabel: 'Livrables',
  deliverablesTitle: 'Ce que reçoit la direction',
  deliverablesIntro:
    'Les livrables sont conçus comme des supports de décision. Ils doivent permettre d’agir rapidement, pas simplement documenter ce qui a été observé.',
  deliverables: [
    'Rapport d’audit structuré',
    'Constats par département',
    'Analyse des écarts de standards',
    'Priorités d’action classées',
    'Liste d’actions rapides',
    'Débrief avec la direction',
  ],
  afterLabel: 'Après l’audit',
  afterTitle: 'Transformer les constats en actions concrètes',
  afterText:
    'Selon les écarts observés, la suite peut prendre plusieurs formes : création ou reprise de process, formation sur site, accompagnement des chefs de service ou mise en place d’outils de contrôle plus simples.',
  contactTitle: 'Besoin d’un accompagnement après audit ?',
  contactText:
    'L’audit peut rester une intervention ponctuelle ou devenir le point de départ d’un travail plus complet sur les standards, les procédures et la transmission aux équipes.',
  trainingCta: 'Voir la formation',
  processCta: 'Voir les process sur-mesure',
  schemaName: 'Audit qualité opérationnel sur site',
  schemaServiceType: 'Audit qualité opérationnel',
}

const englishContent = {
  badge: 'On-site audit',
  title: 'Operational quality audit',
  subtitle:
    'An on-site assessment to identify standards gaps, service friction points and the improvement priorities that should be handled first.',
  context:
    'The audit starts from what is actually happening on property: service execution, controls, handovers, existing documentation and standards consistency. The goal is to give management a clear, usable and prioritised view.',
  primaryCta: 'Request an audit quote',
  secondaryCta: 'See when to audit',
  formTitle: 'Tell us about your audit need',
  formIntro:
    'A few details are enough to understand the context and suggest the right audit format.',
  situationsLabel: 'When to audit',
  situationsTitle: 'Useful when quality needs evidence, not only impressions',
  situationsIntro:
    'A quality audit moves the discussion away from broad impressions. It shows what holds, what varies by shift and what needs structured action.',
  situations: [
    {
      icon: <Hotel size={20} className="text-[#003d9b]" />,
      title: 'Pre-opening or restart',
      text: 'Check that standards, tools and operational habits are ready before volume increases.',
    },
    {
      icon: <ClipboardCheck size={20} className="text-[#003d9b]" />,
      title: 'Inconsistent execution',
      text: 'Identify why the experience varies by day, team, floor or guest touchpoint.',
    },
    {
      icon: <Users2 size={20} className="text-[#003d9b]" />,
      title: 'Management alignment',
      text: 'Give department heads a shared basis to decide, control and correct without relying on impressions.',
    },
    {
      icon: <Map size={20} className="text-[#003d9b]" />,
      title: 'Action planning',
      text: 'Prioritise what should be fixed now, what needs training and what belongs in documented processes.',
    },
  ],
  reviewLabel: 'Scope',
  reviewTitle: 'What we observe on site',
  reviewIntro:
    'Scope is adapted to the property. The audit can cover one department or several teams when quality gaps mostly come from handovers and coordination.',
  playbooksLink: 'View operational playbooks',
  reviewPoints: [
    {
      title: 'Physical standards',
      text: 'Rooms, public areas, setup, visible details, release criteria and self-control methods.',
    },
    {
      title: 'Service sequences',
      text: 'Welcome, guest requests, complaints, restaurant service, handovers and sensitive moments in the guest journey.',
    },
    {
      title: 'Controls and follow-up',
      text: 'Briefings, inspections, reporting, issue escalation, management decisions and follow-up after correction.',
    },
    {
      title: 'Real documentation use',
      text: 'Existing procedures, checklists, training supports and how teams actually use them during operations.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'A field-based view, structured for action',
  methodIntro:
    'The audit is not about finding isolated defects. It is built to understand why gaps appear, where they repeat and which actions will have the strongest impact.',
  methodSteps: [
    {
      title: 'Preparation',
      text: 'Review of context, existing materials, departments involved and management priorities.',
    },
    {
      title: 'Observation',
      text: 'On-site presence during real operating moments: shift start, service, inspection, handover and control.',
    },
    {
      title: 'Analysis',
      text: 'Gaps are classified by department, impact level, likely cause and action priority.',
    },
    {
      title: 'Debrief',
      text: 'Clear management debrief, prioritised roadmap and practical recommendations.',
    },
  ],
  deliverablesLabel: 'Deliverables',
  deliverablesTitle: 'What management receives',
  deliverablesIntro:
    'Deliverables are designed as decision tools. They should help management act quickly, not simply document what was observed.',
  deliverables: [
    'Structured audit report',
    'Findings by department',
    'Standards gap analysis',
    'Prioritised action plan',
    'Quick-win action list',
    'Management debrief',
  ],
  afterLabel: 'After the audit',
  afterTitle: 'Turn findings into concrete action',
  afterText:
    'Depending on the gaps observed, the next step can be process creation, on-site training, department head support or simpler control tools.',
  contactTitle: 'Need support after the audit?',
  contactText:
    'The audit can remain a one-off intervention or become the starting point for broader work on standards, procedures and team transmission.',
  trainingCta: 'View training',
  processCta: 'View bespoke process',
  schemaName: 'On-site operational quality audit',
  schemaServiceType: 'Operational quality audit',
}

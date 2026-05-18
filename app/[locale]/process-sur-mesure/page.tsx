import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Layers3,
  PencilRuler,
  Settings2,
  Users2,
} from 'lucide-react'
import ProcessQuoteForm from '@/components/ProcessQuoteForm'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Bespoke Operational Process Creation | LuxOps'
      : 'Création de process sur-mesure | LuxOps',
    description: isEn
      ? 'Bespoke operational process creation for hospitality teams: SOPs, checklists, service sequences, handovers, controls and internal standards.'
      : 'Création de process opérationnels sur-mesure : SOP, checklists, séquences de service, passations, contrôles et standards internes.',
    alternates: {
      canonical: isEn ? 'https://www.luxops.fr/en/bespoke-process' : 'https://www.luxops.fr/fr/process-sur-mesure',
      languages: {
        en: 'https://www.luxops.fr/en/bespoke-process',
        fr: 'https://www.luxops.fr/fr/process-sur-mesure',
        'x-default': 'https://www.luxops.fr/en/bespoke-process',
      },
    },
  }
}

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ProcessContent locale={locale} />
}

export function ProcessContent({ locale }: { locale: string }) {
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
              <a
                href="#process-quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#0a1d2e] transition-colors"
              >
                {page.primaryCta}
                <ArrowRight size={16} />
              </a>
              <a
                href="#process-situations"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0a1d2e] border border-[#d8deea] font-bold text-sm hover:border-[#003d9b] transition-colors"
              >
                {page.secondaryCta}
              </a>
            </div>
          </div>

          <div id="process-quote" className="bg-white border border-[#d8deea] shadow-[0_24px_70px_rgba(10,29,46,0.10)] p-8 lg:p-10 scroll-mt-28">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-[#eef4ff] flex items-center justify-center flex-shrink-0">
                <PencilRuler size={24} className="text-[#003d9b]" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-2">
                  {page.formTitle}
                </h2>
                <p className="text-sm text-[#4f6074] leading-relaxed">{page.formIntro}</p>
              </div>
            </div>
            <ProcessQuoteForm locale={locale} />
          </div>
        </div>
      </section>

      <section id="process-situations" className="px-6 py-20 bg-white">
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
              {page.scopeLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-5">
              {page.scopeTitle}
            </h2>
            <p className="text-[#4f6074] leading-relaxed mb-6">{page.scopeIntro}</p>
            <Link
              href={isEn ? '/en/playbooks' : '/fr/playbooks'}
              className="inline-flex items-center gap-2 text-[#003d9b] font-bold text-sm hover:text-[#0a1d2e] transition-colors"
            >
              {page.playbooksLink}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.scopePoints.map((item, index) => (
              <div key={index} className="bg-white border border-[#e8edf5] p-6">
                <CheckCircle2 size={20} className="text-[#003d9b] mb-4" />
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
              <a
                href="#process-quote"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-white text-[#0a1d2e] font-bold text-sm hover:bg-[#eef4ff] transition-colors"
              >
                {page.finalCta}
                <ArrowRight size={15} />
              </a>
              <Link
                href={isEn ? '/en/quality-audit' : '/fr/audit-qualite'}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-colors"
              >
                {page.auditCta}
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

const frenchContent = {
  badge: 'Process sur-mesure',
  title: 'Création de process sur-mesure',
  subtitle:
    'Des SOP, checklists et supports opérationnels construits autour de votre établissement, de vos standards et de vos équipes.',
  context:
    'La prestation sert à clarifier ce qui doit être fait, dans quel ordre, par qui et avec quel niveau d’exigence. Elle peut partir de vos documents existants, d’un besoin précis ou d’un département à structurer entièrement.',
  primaryCta: 'Demander un devis process',
  secondaryCta: 'Voir les cas adaptés',
  formTitle: 'Parlez-nous du process à créer',
  formIntro:
    'Quelques informations suffisent pour comprendre le périmètre, le département concerné et le type de support attendu.',
  situationsLabel: 'Quand créer un process',
  situationsTitle: 'Utile quand les méthodes existent, mais ne sont pas assez claires ou pas assez transmises',
  situationsIntro:
    'Un process sur-mesure permet de transformer une façon de travailler en support utilisable : pour former, contrôler, transmettre et maintenir un standard dans la durée.',
  situations: [
    {
      icon: <FileText size={20} className="text-[#003d9b]" />,
      title: 'Procédures absentes',
      text: 'Les pratiques existent sur le terrain, mais elles ne sont pas encore documentées de manière claire et exploitable.',
    },
    {
      icon: <Users2 size={20} className="text-[#003d9b]" />,
      title: 'Méthodes différentes selon les équipes',
      text: 'Chaque shift ou chaque manager fonctionne avec ses propres habitudes, ce qui crée des écarts dans l’expérience client.',
    },
    {
      icon: <Layers3 size={20} className="text-[#003d9b]" />,
      title: 'Ouverture ou repositionnement',
      text: 'L’établissement doit formaliser ses standards avant une ouverture, une réouverture, une montée en gamme ou un changement d’organisation.',
    },
    {
      icon: <Settings2 size={20} className="text-[#003d9b]" />,
      title: 'Process existants à reprendre',
      text: 'Les documents existent déjà, mais ils sont trop longs, trop théoriques ou peu utilisés par les équipes au quotidien.',
    },
  ],
  scopeLabel: 'Périmètre',
  scopeTitle: 'Ce qui peut être construit',
  scopeIntro:
    'Le livrable dépend du besoin réel : procédure complète, checklist terrain, trame de briefing, support de contrôle, guide manager ou parcours client. L’objectif n’est pas de produire plus de documents, mais de produire les bons supports.',
  playbooksLink: 'Voir les playbooks opérationnels',
  scopePoints: [
    {
      title: 'SOP opérationnelles',
      text: 'Procédures étape par étape pour cadrer une séquence, un poste, une situation client ou un standard départemental.',
    },
    {
      title: 'Checklists et contrôles',
      text: 'Supports simples pour vérifier l’exécution, sécuriser les passations, suivre les écarts et faciliter les inspections.',
    },
    {
      title: 'Supports de formation',
      text: 'Documents utilisables pour expliquer les attentes, accompagner l’intégration et aider les managers à transmettre le standard.',
    },
    {
      title: 'Standards internes',
      text: 'Mise en forme de vos valeurs, de votre parcours client, de vos exigences qualité et de vos règles de fonctionnement.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Une rédaction à partir du terrain, pas d’un modèle générique',
  methodIntro:
    'Le travail commence par votre réalité opérationnelle. On clarifie le besoin, on analyse les supports existants, puis on rédige des documents utilisables par les équipes et validés avec vous.',
  methodSteps: [
    {
      title: 'Cadrage',
      text: 'Définition du département, des situations à couvrir, du format attendu et du niveau de détail nécessaire.',
    },
    {
      title: 'Analyse',
      text: 'Relecture des documents existants, compréhension des méthodes actuelles et identification des points à clarifier.',
    },
    {
      title: 'Rédaction',
      text: 'Création des procédures, checklists ou supports avec un vocabulaire adapté à vos équipes et à votre positionnement.',
    },
    {
      title: 'Validation',
      text: 'Revue avec vous avant livraison finale afin que les supports soient justes, cohérents et prêts à être déployés.',
    },
  ],
  deliverablesLabel: 'Livrables',
  deliverablesTitle: 'Des supports prêts à utiliser',
  deliverablesIntro:
    'Les formats sont définis selon l’usage : lecture manager, formation, affichage opérationnel, contrôle quotidien ou support de passation.',
  deliverables: [
    'SOP complètes par séquence ou par département',
    'Checklists imprimables pour les équipes terrain',
    'Trames de briefing et supports de passation',
    'Guides managers pour contrôler et accompagner',
    'Formats PDF et PowerPoint selon le besoin',
    'Versions française et anglaise possibles',
  ],
  afterLabel: 'Suite possible',
  afterTitle: 'Un process peut aussi devenir une formation ou un audit',
  afterText:
    'Une fois les supports créés, ils peuvent servir de base à une formation sur site, à une reprise des standards avec les chefs de service ou à un audit qualité pour vérifier l’application réelle.',
  contactTitle: 'Vous avez un besoin précis à structurer ?',
  contactText:
    'Décrivez le département, la situation ou le support attendu. Nous revenons vers vous avec une approche adaptée.',
  finalCta: 'Demander un devis process',
  auditCta: 'Voir l’audit qualité',
  schemaName: 'Création de process sur-mesure',
  schemaServiceType: 'Création de procédures opérationnelles sur-mesure',
}

const englishContent = {
  badge: 'Bespoke process',
  title: 'Bespoke operational process creation',
  subtitle:
    'SOPs, checklists and operational documents built around your property, your standards and the way your teams work.',
  context:
    'The goal is to clarify what should happen, in which order, by whom and to what standard. The work can start from existing documents, a specific operational gap or a department that needs to be structured from the ground up.',
  primaryCta: 'Request a process quote',
  secondaryCta: 'See when it helps',
  formTitle: 'Tell us what needs to be created',
  formIntro:
    'A few details are enough to understand the scope, department involved and expected format.',
  situationsLabel: 'When to create a process',
  situationsTitle: 'Useful when methods exist, but are not clear enough or not consistently transferred',
  situationsIntro:
    'A bespoke process turns the way work should be done into a usable operating reference: for training, control, handovers and long-term consistency.',
  situations: [
    {
      icon: <FileText size={20} className="text-[#003d9b]" />,
      title: 'Missing procedures',
      text: 'The practices exist on the floor, but they are not yet documented in a clear and usable way.',
    },
    {
      icon: <Users2 size={20} className="text-[#003d9b]" />,
      title: 'Different methods across teams',
      text: 'Each shift or manager works with their own habits, creating gaps in the guest experience.',
    },
    {
      icon: <Layers3 size={20} className="text-[#003d9b]" />,
      title: 'Opening or repositioning',
      text: 'The property needs to formalise standards before an opening, reopening, repositioning or organisational change.',
    },
    {
      icon: <Settings2 size={20} className="text-[#003d9b]" />,
      title: 'Existing process cleanup',
      text: 'Documents already exist, but they are too long, too theoretical or rarely used by teams day to day.',
    },
  ],
  scopeLabel: 'Scope',
  scopeTitle: 'What can be built',
  scopeIntro:
    'The deliverable depends on the real need: full procedure, floor checklist, briefing template, control sheet, manager guide or guest journey standard. The point is not to create more documents, but the right ones.',
  playbooksLink: 'View operational playbooks',
  scopePoints: [
    {
      title: 'Operational SOPs',
      text: 'Step-by-step procedures for a sequence, role, guest situation or departmental standard.',
    },
    {
      title: 'Checklists and controls',
      text: 'Simple tools to verify execution, secure handovers, track gaps and support inspections.',
    },
    {
      title: 'Training supports',
      text: 'Documents that explain expectations, support onboarding and help managers transfer the standard.',
    },
    {
      title: 'Internal standards',
      text: 'Formalisation of brand values, guest journey, quality expectations and operating rules.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Written from the operation, not from a generic template',
  methodIntro:
    'The work starts from your operational reality. We clarify the need, review existing material and write documents that teams can actually use.',
  methodSteps: [
    {
      title: 'Scope',
      text: 'Define the department, situations to cover, expected format and level of detail required.',
    },
    {
      title: 'Review',
      text: 'Review existing documents, understand current practices and identify what needs to be clarified.',
    },
    {
      title: 'Drafting',
      text: 'Create the procedures, checklists or supports with language adapted to your teams and positioning.',
    },
    {
      title: 'Validation',
      text: 'Review with you before final delivery so the material is accurate, coherent and ready to roll out.',
    },
  ],
  deliverablesLabel: 'Deliverables',
  deliverablesTitle: 'Documents ready to use',
  deliverablesIntro:
    'Formats are defined according to the use case: manager reference, training, operational display, daily control or handover support.',
  deliverables: [
    'Full SOPs by sequence or department',
    'Printable checklists for operational teams',
    'Briefing and handover templates',
    'Manager guides for control and follow-up',
    'PDF and PowerPoint formats depending on the need',
    'English and French versions available',
  ],
  afterLabel: 'Possible next step',
  afterTitle: 'A process can also become training or an audit base',
  afterText:
    'Once the documents are created, they can support on-property training, department head coaching or a quality audit to verify real application.',
  contactTitle: 'Need to structure a specific process?',
  contactText:
    'Share the department, situation or expected support. We will come back with an adapted approach.',
  finalCta: 'Request a process quote',
  auditCta: 'View quality audit',
  schemaName: 'Bespoke operational process creation',
  schemaServiceType: 'Bespoke operational procedure creation',
}

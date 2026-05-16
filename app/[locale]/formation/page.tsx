import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Hotel,
  Users2,
} from 'lucide-react'
import TrainingQuoteForm from '@/components/TrainingQuoteForm'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Service Standards Training | LuxOps'
      : 'Formation standards de service | LuxOps',
    description: isEn
      ? 'On-property service standards training for hotel teams, pre-openings, seasonal reopenings, process rollout and department leadership.'
      : 'Formation sur site aux standards de service pour équipes hôtelières, pré-ouverture, réouverture saisonnière, mise en place des process et leadership des chefs de service.',
    alternates: {
      canonical: isEn ? 'https://www.luxops.fr/en/training' : 'https://www.luxops.fr/fr/formation',
      languages: {
        en: 'https://www.luxops.fr/en/training',
        fr: 'https://www.luxops.fr/fr/formation',
        'x-default': 'https://www.luxops.fr/en/training',
      },
    },
  }
}

export default async function FormationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <FormationContent locale={locale} />
}

export function FormationContent({ locale }: { locale: string }) {
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
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
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
                href="#training-quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#0a1d2e] transition-colors"
              >
                {page.primaryCta}
                <ArrowRight size={16} />
              </a>
              <a
                href="#training-situations"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0a1d2e] border border-[#d8deea] font-bold text-sm hover:border-[#003d9b] transition-colors"
              >
                {page.secondaryCta}
              </a>
            </div>
          </div>

          <div id="training-quote" className="bg-white border border-[#d8deea] shadow-[0_24px_70px_rgba(10,29,46,0.10)] p-8 lg:p-10 scroll-mt-28">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-[#eef4ff] flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-[#003d9b]" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-2">
                  {page.formTitle}
                </h2>
                <p className="text-sm text-[#4f6074] leading-relaxed">{page.formIntro}</p>
              </div>
            </div>
            <TrainingQuoteForm locale={locale} />
          </div>
        </div>
      </section>

      <section id="training-situations" className="px-6 py-20 bg-white">
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
              {page.methodLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-5">
              {page.methodTitle}
            </h2>
            <p className="text-[#4f6074] leading-relaxed mb-6">{page.methodIntro}</p>
            <Link
              href={`/${locale}/playbooks`}
              className="inline-flex items-center gap-2 text-[#003d9b] font-bold text-sm hover:text-[#0a1d2e] transition-colors"
            >
              {page.playbooksLink}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.methodPoints.map((item, index) => (
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
              {page.departmentsLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {page.departmentsTitle}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">{page.departmentsIntro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {page.departments.map((department) => (
              <div key={department.title} className="border border-[#e8edf5] p-7">
                <h3 className="font-display text-xl font-bold text-[#0a1d2e] mb-4">{department.title}</h3>
                <ul className="space-y-3">
                  {department.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#4f6074] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#003d9b] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#0a1d2e]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#8fb7ff] mb-3">
              {page.flexLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5">
              {page.flexTitle}
            </h2>
            <p className="text-[#cbd5e1] leading-relaxed">{page.flexText}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-7 lg:p-8">
            <h3 className="font-display text-2xl font-extrabold text-white tracking-tight mb-4">
              {page.contactTitle}
            </h3>
            <p className="text-sm text-[#cbd5e1] leading-relaxed mb-6">{page.contactText}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0a1d2e] font-bold text-sm hover:bg-[#eef4ff] transition-colors"
            >
              {page.contactCta}
              <ArrowRight size={16} />
            </Link>
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
  badge: 'Formation sur site',
  title: 'Formation standards de service',
  subtitle:
    'Des sessions terrain pour aider vos collaborateurs à comprendre, appliquer et maintenir des standards de service clairs.',
  context:
    'LuxOps accompagne les établissements dans la mise en place des process LuxOps ou de leurs propres standards internes : procédures, valeurs de marque, séquences de service, posture managériale et réflexes opérationnels.',
  primaryCta: 'Demander un devis formation',
  secondaryCta: 'Voir les situations adaptées',
  formTitle: 'Parlez-nous de votre besoin formation',
  formIntro:
    'Quelques informations suffisent pour comprendre le contexte et revenir vers vous avec un format adapté.',
  situationsLabel: 'Quand former',
  situationsTitle: 'Une formation utile quand les standards doivent tenir sur le terrain',
  situationsIntro:
    'La formation n’est pas pensée comme un cours générique. Elle sert à installer des méthodes visibles pendant le service, à clarifier les attentes et à aider les managers à faire vivre les standards dans la durée.',
  situations: [
    {
      icon: <Hotel size={20} className="text-[#003d9b]" />,
      title: 'Pré-ouverture',
      text: 'Structurer les réflexes avant l’arrivée des premiers clients : accueil, parcours client, coordination entre services, standards et valeurs de l’établissement.',
    },
    {
      icon: <BriefcaseBusiness size={20} className="text-[#003d9b]" />,
      title: 'Réouverture saisonnière',
      text: 'Remettre les équipes en rythme avant la saison, harmoniser les méthodes et sécuriser les points sensibles dès les premiers jours.',
    },
    {
      icon: <ClipboardCheck size={20} className="text-[#003d9b]" />,
      title: 'Validation des acquis',
      text: 'Revoir les fondamentaux en cours d’année, contrôler la compréhension des standards et corriger les écarts avant qu’ils deviennent des habitudes.',
    },
    {
      icon: <Users2 size={20} className="text-[#003d9b]" />,
      title: 'Chefs de service',
      text: 'Former les responsables à mieux briefer, accompagner, contrôler et faire progresser les équipes sans transformer le management en simple rappel à l’ordre.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Des standards expliqués, pratiqués puis transmis',
  methodIntro:
    'La session part toujours du réel : vos équipes, vos points de contact client, vos procédures existantes et les écarts observés. Les supports LuxOps servent de base structurée, mais la formation peut aussi s’appuyer sur vos propres process et valeurs internes.',
  playbooksLink: 'Voir les playbooks opérationnels',
  methodPoints: [
    {
      title: 'Compréhension',
      text: 'Les collaborateurs comprennent pourquoi le standard existe, pas seulement ce qu’il faut faire.',
    },
    {
      title: 'Mise en pratique',
      text: 'Les séquences sont travaillées à partir de situations vécues : accueil, demande client, réclamation, passation, inspection ou service.',
    },
    {
      title: 'Transmission',
      text: 'Les chefs de service repartent avec une logique claire pour maintenir le niveau après la formation.',
    },
    {
      title: 'Adaptation',
      text: 'Les exemples sont adaptés à votre établissement, à votre positionnement et au niveau de maturité de vos équipes.',
    },
  ],
  departmentsLabel: 'Périmètre',
  departmentsTitle: 'Des modules construits autour des vrais moments de service',
  departmentsIntro:
    'Le contenu est défini selon vos priorités. Une session peut cibler un département précis ou travailler les points de liaison entre plusieurs services.',
  departments: [
    {
      title: 'Réception et relation client',
      items: ['Accueil et première impression', 'Gestion des demandes et réclamations', 'Passations et communication inter-services'],
    },
    {
      title: 'Housekeeping et qualité chambre',
      items: ['Standards de chambre', 'Inspection et auto-contrôle', 'Coordination avec la réception et la maintenance'],
    },
    {
      title: 'F&B et service',
      items: ['Séquence de service', 'Posture en salle et communication client', 'Briefings, mise en place et gestion des imprévus'],
    },
  ],
  flexLabel: 'Accompagnement flexible',
  flexTitle: 'Un format adapté à votre réalité terrain',
  flexText:
    'La formation peut être centrée sur les standards de service, la mise en place de process, l’accompagnement des chefs de service, l’intégration des collaborateurs ou un besoin plus spécifique lié à votre établissement.',
  contactTitle: 'Un besoin différent ?',
  contactText:
    'Pour un audit, une création de process, un accompagnement plus large ou une demande sur-mesure, vous pouvez nous contacter directement.',
  contactCta: 'Nous contacter',
  schemaName: 'Formation standards de service',
  schemaServiceType: 'Formation sur site aux standards de service',
}

const englishContent = {
  badge: 'On-property training',
  title: 'Service standards training',
  subtitle:
    'Hands-on sessions that help your teams understand, apply and maintain clear service standards.',
  context:
    'LuxOps supports properties with the rollout of LuxOps processes or their own internal standards: procedures, brand values, service sequences, management posture and operational habits.',
  primaryCta: 'Request a training quote',
  secondaryCta: 'See when it helps',
  formTitle: 'Tell us about your training need',
  formIntro:
    'A few details are enough to understand the context and suggest the right training format.',
  situationsLabel: 'When to train',
  situationsTitle: 'Useful when standards need to hold on the floor',
  situationsIntro:
    'The training is not a generic classroom session. It is designed to install working methods, clarify expectations and help managers keep standards alive over time.',
  situations: [
    {
      icon: <Hotel size={20} className="text-[#003d9b]" />,
      title: 'Pre-opening',
      text: 'Structure team habits before the first guests arrive: welcome, guest journey, interdepartment coordination, standards and property values.',
    },
    {
      icon: <BriefcaseBusiness size={20} className="text-[#003d9b]" />,
      title: 'Seasonal reopening',
      text: 'Bring teams back into rhythm before the season, align methods and secure sensitive service points from day one.',
    },
    {
      icon: <ClipboardCheck size={20} className="text-[#003d9b]" />,
      title: 'Skills validation',
      text: 'Review core standards during the year, confirm understanding and correct gaps before they become habits.',
    },
    {
      icon: <Users2 size={20} className="text-[#003d9b]" />,
      title: 'Department leadership',
      text: 'Help managers brief, coach, control and support their teams without reducing management to repeated reminders.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Standards explained, practised and passed on',
  methodIntro:
    'The session starts from reality: your teams, your guest touchpoints, your existing procedures and the gaps you see on the floor. LuxOps materials provide structure, but training can also be built around your own internal processes and values.',
  playbooksLink: 'View operational playbooks',
  methodPoints: [
    {
      title: 'Understanding',
      text: 'Team members understand why the standard exists, not only what they are expected to do.',
    },
    {
      title: 'Practice',
      text: 'Sequences are worked through using real situations: welcome, guest request, complaint, handover, inspection or service.',
    },
    {
      title: 'Transmission',
      text: 'Department heads leave with a clear logic to maintain the level after the session.',
    },
    {
      title: 'Adaptation',
      text: 'Examples are adapted to your property, positioning and team maturity.',
    },
  ],
  departmentsLabel: 'Scope',
  departmentsTitle: 'Modules built around real service moments',
  departmentsIntro:
    'Content is defined according to your priorities. A session can target one department or focus on the handovers between departments.',
  departments: [
    {
      title: 'Front Office and guest relations',
      items: ['Welcome and first impression', 'Requests and complaint handling', 'Handovers and interdepartment communication'],
    },
    {
      title: 'Housekeeping and room quality',
      items: ['Room standards', 'Inspection and self-control', 'Coordination with reception and maintenance'],
    },
    {
      title: 'F&B and service',
      items: ['Service sequence', 'Floor posture and guest communication', 'Briefings, setup and service recovery'],
    },
  ],
  flexLabel: 'Flexible support',
  flexTitle: 'A format adapted to your operational reality',
  flexText:
    'Training can focus on service standards, process rollout, department leadership, team onboarding or a more specific need linked to your property.',
  contactTitle: 'Need something different?',
  contactText:
    'For an audit, custom process work, broader support or a bespoke request, you can contact us directly.',
  contactCta: 'Contact us',
  schemaName: 'Service standards training',
  schemaServiceType: 'On-property service standards training',
}

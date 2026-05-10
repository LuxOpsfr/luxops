import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'How to Improve Hotel Operations: Front Office, Housekeeping & Service Quality | LuxOps'
      : 'Comment améliorer les opérations hôtelières : réception, Housekeeping et qualité de service | LuxOps',
    description: isEN
      ? 'Practical guide to improving hotel operations: written SOPs, role-specific checklists, shift structure, quality control and staff training. Built for hotel managers and department heads.'
      : 'Guide pratique pour améliorer les opérations hôtelières : procédures écrites, checklists par rôle, structure des services, contrôle qualité et formation. Conçu pour les directeurs d\'hôtel.',
    keywords: isEN
      ? 'how to improve hotel operations, how to improve front office operations in hotel, improve hotel service quality, hotel operations improvement, hotel operational efficiency, hotel management best practices'
      : 'améliorer opérations hôtelières, améliorer réception hôtel, qualité service hôtel, efficacité opérationnelle hôtel, meilleures pratiques gestion hôtel, améliorer standards hôtel',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/how-to-improve-hotel-operations`,
      languages: {
        'en': 'https://www.luxops.fr/en/how-to-improve-hotel-operations',
        'fr': 'https://www.luxops.fr/fr/how-to-improve-hotel-operations',
        'x-default': 'https://www.luxops.fr/en/how-to-improve-hotel-operations',
      },
    },
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

type Lever = { title: string; body: string[] }
type FAQItem = { q: string; a: string }

// ─── EN Content ───────────────────────────────────────────────────────────────

const LEVERS_EN: Lever[] = [
  {
    title: 'Lever 1: Write the SOPs that do not exist yet',
    body: [
      'The procedures that matter most are usually the ones that were never written down. Check-in for a standard arrival: most hotels have a rough SOP. What happens when the assigned room is not clean at arrival time: most hotels rely on improvisation.',
      'Start with your highest-friction moments. Where do guest complaints concentrate? Where does re-work happen most often? Where do handovers break down? These are the procedures that need to be written first. A VIP arrival protocol. A billing dispute script. A DND escalation process. A shift handover template.',
      'The SOP does not need to be long. It needs to be specific enough that a new team member can follow it correctly on their first attempt without asking a colleague. If it requires interpretation, it is not finished yet.',
    ],
  },
  {
    title: 'Lever 2: Replace generic checklists with role-specific ones',
    body: [
      'A checklist that covers everything covers nothing. When one document is shared across a whole department, no one is personally accountable for any item on it. When the same opening checklist is used by a first-day hire and a five-year veteran, neither is served by it.',
      'The most effective hotel checklists are built around three parameters: one role, one moment in the shift, one defined control point. A front desk agent opening checklist. A housekeeping supervisor room inspection form. A night auditor pre-closing sequence. Each is short, specific and owned by one person.',
      'When a checklist item is consistently skipped, the problem is almost always structural: the step is unclear, the information is hard to find or the timing is wrong. Fix the checklist before correcting the person.',
    ],
  },
  {
    title: 'Lever 3: Fix shift handovers before anything else',
    body: [
      'The moment information is lost most consistently in any hotel is the shift handover. A guest complaint not resolved before the end of a shift. A maintenance ticket that was verbal and never logged. A VIP pre-arrival request noted on paper and left at the desk.',
      'A structured handover document, not a verbal briefing and not an email chain, is one of the highest-leverage changes a hotel can make. It should cover: open complaints and their current status, room blocks and priority arrivals, pending follow-up items and anything unusual from the shift. It takes five minutes to complete and prevents hours of recovery work.',
      'Implement it in front office and housekeeping simultaneously. The two departments handle the same rooms and the same guests. When their handover formats are incompatible, gaps fall through at the intersection.',
    ],
  },
  {
    title: 'Lever 4: Build quality control into the shift, not after it',
    body: [
      'Quality control is most effective when it happens before the guest experiences the problem. A supervisor room inspection before check-in, not after the complaint. A pre-service mise en place check before the restaurant opens. A folio review the evening before checkout.',
      'This requires defining the inspection moments and the minimum frequency for each department. Housekeeping: 20% of rooms inspected daily, 100% on VIP and same-day arrivals. Front office: billing review the evening before for all departures. F&B: opening checklist signed off by a manager, not self-reported by the opening team.',
      'The key shift is this: quality control is a management function, not a corrective one. It exists to prevent the problem, not to document it after it happened.',
    ],
  },
  {
    title: 'Lever 5: Train to the written standard, not by observation',
    body: [
      'Training by shadowing is the default in most hotels. A new room attendant follows an experienced one for a few days. A new receptionist observes shifts before taking the desk. The problem: they learn the habits, both good and bad, of whoever trained them. Those habits vary by person.',
      'Training to a written standard means the SOP and the checklist are the training material, not someone else\'s practice. The trainer demonstrates the procedure step by step against the written document. The trainee is assessed against the same document. The standard is what is being transferred, not a personal interpretation of it.',
      'This only works when the SOPs exist and are maintained. Which is why it comes last: you cannot train to a standard that has not been written.',
    ],
  },
]

const SEQUENCE_EN = [
  'Identify the top 3 to 5 friction points across your operation: where guest complaints concentrate, where re-work happens most often, where handovers break down.',
  'Write the missing SOPs for those specific situations first. Do not start with low-stakes procedures.',
  'Build role-specific checklists for each control point in those procedures.',
  'Implement structured shift handovers in every department at the same time.',
  'Train the team against the written standard, not from memory.',
  'Introduce department-level quality audits monthly and track scores over time.',
]

// ─── FR Content ───────────────────────────────────────────────────────────────

const LEVERS_FR: Lever[] = [
  {
    title: 'Levier 1 : Écrire les procédures qui n\'existent pas encore',
    body: [
      'Les procédures qui comptent le plus sont généralement celles qui n\'ont jamais été rédigées. Le check-in d\'une arrivée standard : la plupart des hôtels ont une procédure approximative. Ce qui se passe quand la chambre attribuée n\'est pas prête à l\'arrivée du client : la plupart des hôtels s\'en remettent à l\'improvisation.',
      'Commencez par vos moments à plus forte friction. Où se concentrent les réclamations clients ? Où le re-travail est-il le plus fréquent ? Où les passations se dégradent-elles ? Ce sont ces procédures qu\'il faut rédiger en premier. Un protocole d\'arrivée VIP. Un script de gestion de litige de facturation. Une procédure d\'escalade DND. Un modèle de passation de service.',
      'La procédure n\'a pas besoin d\'être longue. Elle doit être suffisamment précise pour qu\'un nouveau collaborateur puisse la suivre correctement dès sa première utilisation sans demander à un collègue. Si elle nécessite une interprétation, elle n\'est pas encore terminée.',
    ],
  },
  {
    title: 'Levier 2 : Remplacer les checklists génériques par des checklists par rôle',
    body: [
      'Une checklist qui couvre tout ne couvre rien. Quand un document est partagé à l\'ensemble d\'un département, personne n\'est personnellement responsable d\'aucun point. Quand la même checklist d\'ouverture est utilisée par un nouveau collaborateur et un professionnel de cinq ans d\'expérience, aucun des deux n\'en tire vraiment profit.',
      'Les checklists hôtelières les plus efficaces sont construites autour de trois paramètres : un rôle, un moment du service, un point de contrôle défini. Une checklist d\'ouverture de service pour le réceptionniste. Un formulaire d\'inspection chambre pour la gouvernante d\'étage. Une séquence pré-fermeture pour l\'auditeur de nuit. Chacune est courte, précise et appartient à une seule personne.',
      'Quand un point de checklist est systématiquement sauté, le problème est presque toujours structurel : l\'étape est floue, l\'information est difficile à trouver ou le timing est inadapté. Corriger la checklist avant de corriger la personne.',
    ],
  },
  {
    title: 'Levier 3 : Corriger les passations de service avant tout le reste',
    body: [
      'Le moment où l\'information se perd le plus régulièrement dans un hôtel, c\'est la passation de service. Une réclamation client non résolue avant la fin du service. Un ticket de maintenance transmis verbalement et jamais consigné. Une demande pré-arrivée VIP notée sur un bout de papier laissé au comptoir.',
      'Un document de passation structuré, ni un brief verbal ni une chaîne d\'emails, est l\'un des changements à plus fort levier qu\'un hôtel puisse opérer. Il doit couvrir : les réclamations ouvertes et leur statut, les blocages de chambres et les arrivées prioritaires, les suivis en attente et tout ce qui a été inhabituel dans le service. Cinq minutes à compléter, des heures de travail correctif évitées.',
      'Mettez-le en place simultanément à la réception et au housekeeping. Les deux départements gèrent les mêmes chambres et les mêmes clients. Quand leurs formats de passation sont incompatibles, les écarts tombent exactement à l\'intersection.',
    ],
  },
  {
    title: 'Levier 4 : Intégrer le contrôle qualité dans le service, pas après',
    body: [
      'Le contrôle qualité est le plus efficace quand il intervient avant que le client ne subisse le problème. Une inspection chambre superviseur avant le check-in, pas après la réclamation. Un contrôle de mise en place avant l\'ouverture du restaurant. Une vérification de facture la veille du départ.',
      'Cela implique de définir les moments d\'inspection et la fréquence minimale pour chaque département. Housekeeping : 20 % des chambres inspectées chaque jour, 100 % sur les arrivées VIP et les arrivées du jour. Réception : revue de facturation la veille pour tous les départs. F&B : checklist d\'ouverture validée par un manager, pas auto-déclarée par l\'équipe ouvrante.',
      'Le changement de posture essentiel : le contrôle qualité est une fonction managériale, pas une fonction corrective. Il existe pour prévenir le problème, pas pour le documenter après qu\'il s\'est produit.',
    ],
  },
  {
    title: 'Levier 5 : Former au standard écrit, pas par observation',
    body: [
      'La formation par observation est la norme dans la plupart des hôtels. Une nouvelle femme de chambre suit une expérimentée pendant quelques jours. Un nouveau réceptionniste observe des services avant de prendre le poste. Le problème : il ou elle apprend les habitudes, bonnes et mauvaises, de la personne qui l\'a formée. Ces habitudes varient d\'une personne à l\'autre.',
      'Former au standard écrit signifie que la procédure et la checklist sont le support de formation, pas la pratique de quelqu\'un d\'autre. Le formateur démontre la procédure étape par étape en suivant le document écrit. Le stagiaire est évalué sur ce même document. C\'est le standard qui se transmet, pas une interprétation personnelle de celui-ci.',
      'Cela ne fonctionne que si les procédures existent et sont maintenues à jour. C\'est pourquoi ce levier arrive en dernier : on ne peut pas former à un standard qui n\'a pas été rédigé.',
    ],
  },
]

const SEQUENCE_FR = [
  'Identifier les 3 à 5 points de friction les plus importants de votre opération : où se concentrent les réclamations clients, où le re-travail est le plus fréquent, où les passations se dégradent.',
  'Rédiger les procédures manquantes pour ces situations spécifiques en premier. Ne pas commencer par des procédures à faible enjeu.',
  'Construire des checklists par rôle pour chaque point de contrôle de ces procédures.',
  'Mettre en place des passations de service structurées dans chaque département simultanément.',
  'Former l\'équipe au standard écrit, pas de mémoire.',
  'Instaurer des audits qualité mensuels par département et suivre les scores dans le temps.',
]

const FAQ_EN: FAQItem[] = [
  {
    q: 'What are the biggest operational challenges in hotels?',
    a: 'The most consistent operational challenges are: service inconsistency across shifts (the same procedure handled differently by different team members), poor handover quality (information lost between shifts), under-documented exception handling (staff improvising on billing disputes, complaints and emergencies) and reactive quality control (problems identified after a guest complaint rather than before). All four are system problems, not staff problems.',
  },
  {
    q: 'How do SOPs improve hotel operations?',
    a: 'SOPs improve hotel operations by converting institutional knowledge into a documented standard. When a procedure is written down, it can be trained consistently, verified against a checklist and corrected when it breaks down. Without written SOPs, operational quality depends on individual experience, which means it varies by shift and disappears when key staff leave.',
  },
  {
    q: 'How do you improve front office operations in a hotel?',
    a: 'The highest-impact improvements in hotel front office operations come from three areas: structured shift handovers (so nothing is lost between shifts), billing verification the evening before departure (to eliminate checkout disputes) and documented exception protocols for the situations that happen regularly but have never been written down, such as room-not-ready on arrival or billing disputes. Training the team to the written procedure rather than by shadowing maintains these improvements across staff turnover.',
  },
  {
    q: 'How do you measure hotel operational performance?',
    a: 'The most practical operational metrics for hotels include: guest complaint rate per 100 rooms, room inspection pass rate (percentage of rooms passing supervisor inspection on first check), shift handover compliance rate, response time to in-room requests and billing error rate at checkout. These are all measurable from existing systems without additional software.',
  },
  {
    q: 'What is the first thing to fix in a hotel with inconsistent service?',
    a: 'Start with the shift handover. It is the most common source of dropped information in a hotel and the one that affects the most departments simultaneously. A structured handover document, implemented in front office and housekeeping first, typically produces visible results within two to three weeks and creates the foundation for every other improvement.',
  },
]

const FAQ_FR: FAQItem[] = [
  {
    q: 'Quels sont les principaux défis opérationnels dans les hôtels ?',
    a: 'Les défis opérationnels les plus récurrents sont : l\'incohérence du service d\'un shift à l\'autre (la même procédure gérée différemment selon les collaborateurs), la qualité défaillante des passations (information perdue entre les services), la gestion non documentée des situations hors standard (réclamations, litiges de facturation, urgences gérés à l\'instinct) et le contrôle qualité réactif (problèmes identifiés après la réclamation client plutôt qu\'avant). Ce sont tous des problèmes de système, pas des problèmes de personnel.',
  },
  {
    q: 'Comment les procédures SOP améliorent-elles les opérations hôtelières ?',
    a: 'Les procédures SOP améliorent les opérations hôtelières en convertissant la connaissance institutionnelle en standard documenté. Quand une procédure est écrite, elle peut être formée de façon cohérente, vérifiée par une checklist et corrigée quand elle dysfonctionne. Sans procédures écrites, la qualité opérationnelle dépend de l\'expérience individuelle, ce qui signifie qu\'elle varie d\'un service à l\'autre et disparaît quand les collaborateurs clés partent.',
  },
  {
    q: 'Comment améliorer les opérations de réception dans un hôtel ?',
    a: 'Les améliorations à plus fort impact sur les opérations de réception hôtelière concernent trois domaines : les passations de service structurées (pour ne rien perdre entre les services), la vérification de facturation la veille du départ (pour éliminer les litiges au check-out) et les protocoles documentés pour les situations hors standard qui arrivent régulièrement mais n\'ont jamais été écrites, comme la chambre non prête à l\'arrivée ou un litige de facturation. Former l\'équipe à la procédure écrite plutôt que par observation maintient ces améliorations malgré le turnover.',
  },
  {
    q: 'Comment mesurer la performance opérationnelle d\'un hôtel ?',
    a: 'Les indicateurs opérationnels les plus pratiques pour un hôtel incluent : taux de réclamation par 100 chambres, taux de passage à l\'inspection superviseur (pourcentage de chambres validées du premier coup), taux de conformité des passations de service, délai de réponse aux demandes en chambre et taux d\'erreur de facturation au check-out. Tous ces indicateurs sont mesurables à partir des systèmes existants, sans logiciel supplémentaire.',
  },
  {
    q: 'Par quoi commencer dans un hôtel avec un service incohérent ?',
    a: 'Commencez par la passation de service. C\'est la source la plus fréquente de perte d\'information dans un hôtel et celle qui impacte le plus de départements simultanément. Un document de passation structuré, mis en place d\'abord à la réception et au housekeeping, produit généralement des résultats visibles en deux à trois semaines et crée la base sur laquelle reposent toutes les autres améliorations.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HowToImproveHotelOperationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const levers = isEN ? LEVERS_EN : LEVERS_FR
  const sequence = isEN ? SEQUENCE_EN : SEQUENCE_FR
  const faq = isEN ? FAQ_EN : FAQ_FR

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isEN
      ? 'How to Improve Hotel Operations: What Actually Works'
      : 'Comment améliorer les opérations hôtelières : ce qui fonctionne vraiment',
    description: isEN
      ? 'Practical guide to improving hotel operations: SOPs, checklists, shift handovers, quality control and training.'
      : 'Guide pratique pour améliorer les opérations hôtelières : procédures, checklists, passations, contrôle qualité et formation.',
    author: { '@type': 'Organization', name: 'LuxOps', url: 'https://www.luxops.fr' },
    publisher: {
      '@type': 'Organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      logo: { '@type': 'ImageObject', url: 'https://www.luxops.fr/og-image.png' },
    },
    url: `https://www.luxops.fr/${locale}/how-to-improve-hotel-operations`,
    inLanguage: locale,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-[#1A2E44] text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              {isEN ? 'Hotel Operations' : 'Opérations hôtelières'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {isEN
                ? 'How to Improve Hotel Operations: What Actually Works'
                : 'Comment améliorer les opérations hôtelières : ce qui fonctionne vraiment'}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              {isEN
                ? 'Five practical levers for hotel managers covering SOPs, checklists, shift handovers, quality control and training. No generic advice. Only what changes performance in practice.'
                : 'Cinq leviers pratiques pour les directeurs d\'hôtel couvrant les procédures, les checklists, les passations de service, le contrôle qualité et la formation. Pas de conseils génériques. Uniquement ce qui change les performances en pratique.'}
            </p>
            <Link
              href={`/${locale}/free-hotel-procedures`}
              className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
            >
              {isEN ? 'Download a Free Procedure Chapter' : 'Télécharger un chapitre de procédure gratuit'}
            </Link>
          </div>
        </section>

        {/* Intro */}
        <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
              {isEN
                ? 'The most common source of operational inconsistency'
                : 'La source la plus fréquente d\'incohérence opérationnelle'}
            </h2>
            {isEN ? (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most hotel operations problems are not staff problems. They are system problems. The same task gets
                  done differently by different people not because one person is better than another, but because the
                  standard for that task was never written down. When the standard exists only in the head of the most
                  experienced team member, it disappears the moment that person moves to another property.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The five levers below address the most consistent gaps found across front office, housekeeping and
                  F&B operations in independent and luxury properties. None of them require additional headcount. All
                  of them require management time and consistent follow-through to implement correctly.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  La plupart des problèmes opérationnels dans les hôtels ne sont pas des problèmes de personnel. Ce sont
                  des problèmes de système. La même tâche est réalisée différemment par des personnes différentes non
                  pas parce que l&apos;une est meilleure que l&apos;autre, mais parce que le standard de cette tâche
                  n&apos;a jamais été écrit. Quand le standard n&apos;existe que dans la tête du collaborateur le plus
                  expérimenté, il disparaît au moment où cette personne rejoint un autre établissement.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Les cinq leviers ci-dessous s&apos;attaquent aux lacunes les plus récurrentes constatées dans les
                  opérations de réception, de housekeeping et de F&B dans les hôtels indépendants et de luxe. Aucun
                  ne nécessite de recrutement supplémentaire. Tous nécessitent du temps de management et une mise en
                  oeuvre cohérente.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Five levers */}
        {levers.map((lever, li) => (
          <section key={li} className={`py-16 px-6 ${li % 2 === 1 ? 'bg-gray-50' : ''}`}>
            <div className="max-w-3xl mx-auto">
              <div className="flex gap-4 items-start mb-6">
                <span className="text-4xl font-bold text-gray-100 flex-shrink-0 leading-none pt-1">
                  {String(li + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-bold text-[#1A2E44]">{lever.title}</h2>
              </div>
              <div className="space-y-4">
                {lever.body.map((para, pi) => (
                  <p key={pi} className="text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Lead magnet mid-page */}
        <section
          className="py-10 border-y"
          style={{ backgroundColor: '#eef4ff', borderColor: 'rgba(195,198,214,0.3)' }}
        >
          <div className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-2">
                {isEN ? 'Free resource' : 'Ressource gratuite'}
              </p>
              <p className="font-bold text-[#0a1d2e] text-lg mb-1">
                {isEN
                  ? 'Download a free chapter from any department playbook'
                  : "Téléchargez un chapitre gratuit d'un playbook de votre choix"}
              </p>
              <p className="text-sm text-[#4f6074]">
                {isEN
                  ? 'See what structured hotel procedures look like in practice: Front Office, Housekeeping, F&B or Spa.'
                  : 'Découvrez à quoi ressemblent des procédures hôtelières structurées : Réception, Housekeeping, F&B ou Spa.'}
              </p>
            </div>
            <Link
              href={`/${locale}/free-hotel-procedures`}
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm flex-shrink-0 hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem' }}
            >
              {isEN ? 'Download free' : 'Télécharger gratuitement'} <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Sequence */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
              {isEN ? 'The sequence that works' : 'La séquence qui fonctionne'}
            </h2>
            <div className="space-y-4">
              {sequence.map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div
                    className="w-7 h-7 rounded-full bg-[#1A2E44] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    {i + 1}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{step}</p>
                </div>
              ))}
            </div>
            {isEN ? (
              <p className="text-gray-500 text-sm mt-8 leading-relaxed">
                None of these steps is technically complex. All of them require sustained management attention to make
                them hold over time. The properties that maintain consistent service are not the ones with the best
                staff. They are the ones with the best systems.
              </p>
            ) : (
              <p className="text-gray-500 text-sm mt-8 leading-relaxed">
                Aucune de ces étapes n&apos;est techniquement complexe. Toutes nécessitent une attention managériale
                soutenue pour tenir dans le temps. Les établissements qui maintiennent un service cohérent ne sont pas
                ceux qui ont le meilleur personnel. Ce sont ceux qui ont les meilleurs systèmes.
              </p>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
              {isEN ? 'Frequently Asked Questions' : 'Questions fréquentes'}
            </h2>
            <div className="space-y-6">
              {faq.map(({ q, a }, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-[#1A2E44] mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Related resources' : 'Ressources associées'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: `/${locale}/hotel-sop`,
                title: isEN ? 'Hotel SOP Templates' : 'Modèles de SOP Hôtel',
                desc: isEN ? 'Complete standard operating procedures for all departments' : 'Procédures opérationnelles complètes pour tous les départements',
              },
              {
                href: `/${locale}/hotel-checklist`,
                title: isEN ? 'Hotel Operational Checklists' : 'Checklists Opérationnelles Hôtel',
                desc: isEN ? 'What makes hotel checklists useful in practice' : 'Ce qui rend les checklists hôtelières utiles en pratique',
              },
              {
                href: `/${locale}/hotel-audit-checklist`,
                title: isEN ? 'Hotel Quality Audit Checklist' : 'Checklist Audit Qualité Hôtel',
                desc: isEN ? '28-criteria scoring grid for all departments' : 'Grille de notation 28 critères sur tous les départements',
              },
              {
                href: `/${locale}/front-office-sop`,
                title: isEN ? 'Front Office SOP Guide' : 'Guide SOP Réception',
                desc: isEN ? 'Standard operating procedures for hotel reception' : 'Procédures opérationnelles pour la réception hôtelière',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-gray-200 rounded-xl p-5 hover:border-[#1A2E44] transition-colors group"
              >
                <p className="font-semibold text-[#1A2E44] group-hover:underline">{link.title}</p>
                <p className="text-sm text-gray-500 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              {isEN
                ? 'The operational tools to make it happen'
                : 'Les outils opérationnels pour y parvenir'}
            </h2>
            <p className="text-gray-300 mb-8">
              {isEN
                ? 'The LuxOps playbooks provide the procedures, checklists and training guides for all four departments. Built to be deployed immediately, not adapted for six months before use.'
                : 'Les playbooks LuxOps fournissent les procédures, les checklists et les guides de formation pour les quatre départements. Conçus pour être déployés immédiatement, pas adaptés pendant six mois avant utilisation.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/playbooks`}
                className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
              >
                {isEN ? 'View All Playbooks' : 'Voir tous les Playbooks'}
              </Link>
              <Link
                href={`/${locale}/free-hotel-procedures`}
                className="inline-block border border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-white/10"
              >
                {isEN ? 'Download a Free Chapter' : 'Télécharger un chapitre gratuit'}
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

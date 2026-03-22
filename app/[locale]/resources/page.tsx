import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Operations Resources | SOP & Standards Guide | LuxOps'
      : 'Ressources Opérationnelles Hôtelières | Guide SOPs & Standards | LuxOps',
    description: isEn
      ? 'Expert guidance on hotel operational standards, SOPs and procedures. Questions and answers for hotel GMs, department heads and hospitality professionals.'
      : 'Conseils experts sur les standards opérationnels, SOPs et procédures hôtelières. Réponses pratiques pour DG, chefs de département et équipes opérationnelles.',
  }
}

const enFaqs = [
  {
    q: 'What is a hotel SOP?',
    a: 'A hotel SOP is a written set of instructions that defines how a specific task should be performed in a hotel department. When procedures are written clearly, teams can work to the same standard across shifts, regardless of who is on duty. Without that documentation, the quality of a check-in or a room inspection depends on the individual doing it, which is not a reliable foundation. SOPs cover the full operational range: arrival and departure sequences at the front desk, room inspection criteria in housekeeping, service sequences in F&B, booking procedures in spa. LuxOps provides department-specific playbooks built from real hotel work, not from generic operations templates.',
    link: '/playbooks',
    linkLabel: 'Explore our operational playbooks',
  },
  {
    q: 'What should a hotel operations manual include?',
    a: 'A useful manual covers all the departments that interact with guests or support the guest experience: Front Office, Housekeeping, F&B, Spa, Concierge, Engineering and HR. For each one, it should document the procedures teams follow daily, the service standards they work to, quality checklists used for inspection, and escalation paths when something goes wrong. It should also include onboarding material so new team members have a clear reference from their first shift. The key distinction between a manual that works and one that does not is whether it is built for daily use and not one filed away for audits. LuxOps playbooks are organised by department and built to serve as working operational references.',
    link: '/playbooks',
    linkLabel: 'View hotel operations playbooks',
  },
  {
    q: 'How are housekeeping SOPs structured?',
    a: 'Housekeeping SOPs typically organise around three operational areas. The first is room preparation: the entry sequence, task order, and quality criteria for a room ready for the guest. The second is linen and amenity management: par levels, replenishment cycles, and handling procedures that keep supplies consistent across floors. The third is the inspection process: room release checklists, supervisory sign-off, and how defects are logged and escalated. Additional procedures cover turndown service, deep-cleaning schedules, lost and found, and guest requests. Each SOP should be specific enough that someone new to the department can follow it without asking a supervisor. The LuxOps Housekeeping Playbook covers all of this across approximately 220 pages.',
    link: '/playbooks',
    linkLabel: 'Housekeeping Playbook',
  },
  {
    q: 'What are hotel service standards?',
    a: 'Service standards define what good execution looks like at every guest-facing moment, from how an arrival is handled to how a complaint is managed. They specify response times, greeting language, presentation requirements, and how the team communicates across departments. Standards give teams a reference point beyond personal judgment. The challenge is not defining them. Most properties have an idea of what they want. The challenge is keeping them consistently applied as staff change and services evolve. Embedding standards in SOPs, training sessions, and daily briefings is what moves them from aspiration to practice.',
    link: null,
    linkLabel: null,
  },
  {
    q: 'How do hotels maintain operational consistency?',
    a: 'Most inconsistency in hotel operations traces back to the same source: knowledge that lives in people\'s heads rather than in written procedures. When a long-serving team member leaves, a shift supervisor is absent, or a new hire joins mid-season, the standard reverts to what each individual knows. Documented procedures give the team a clear reference. Structured training embeds those procedures into daily habits. Regular quality reviews catch drift before it shows up in guest feedback. Properties that rely on informal knowledge transfer will see their service quality track their staffing. LuxOps offers quality audits and custom process creation for properties building this structure.',
    link: '/audit-qualite',
    linkLabel: 'Learn about our quality audit',
  },
  {
    q: 'What is a hotel playbook?',
    a: 'A useful hotel playbook gives teams one place to find the procedures, service standards, scripts, and checklists they need to work properly. It is organised by department and written for daily operational use, not as a reference document for managers, but as a working tool for the people delivering the service. Unlike a generic policy document, a playbook contains the actual steps: how a check-in runs, what a room inspection covers, how a complaint gets escalated. LuxOps playbooks cover Front Office, Housekeeping, F&B and Spa, and are available in both English and French.',
    link: '/playbooks',
    linkLabel: 'Browse operational playbooks',
  },
  {
    q: 'How are hotel procedures documented?',
    a: 'Procedures can live in different formats: printed binders, PDF guides, shared drives, or digital workspaces like Notion or SharePoint. The format matters less than whether the procedures are findable, readable, and current. A well-structured manual that is two years out of date is less useful than a simpler document the team actually references. Digital systems have real advantages for maintenance: version control, easier updates, and access from the floor during a shift. Notion-based workspaces work well for multi-department operations because they allow different views and access levels by team. LuxOps delivers procedures in PDF and Notion formats, and can build custom Notion workspaces adapted to a property\'s structure.',
    link: '/notion-templates',
    linkLabel: 'Explore Notion templates for hotels',
  },
  {
    q: 'What makes an effective housekeeping SOP?',
    a: 'Specificity is what separates a useful housekeeping SOP from one that gets ignored. The procedure needs to define the task clearly, give the steps in order, and set quality benchmarks that can actually be verified: not "the room should be clean" but what clean means at each inspection point. It should also account for the variations that come up regularly on the floor: occupied versus vacant rooms, VIP arrivals, deep-cleaning cycles. And it should be written for the room attendant, not for the operations director. If the person executing the task cannot follow the SOP without asking questions, the SOP has not done its job.',
    link: null,
    linkLabel: null,
  },
  {
    q: 'How do hotels train staff on operational procedures?',
    a: 'Training that works is built around the actual procedures the team uses, not delivered separately from them. The structure that holds up in practice involves three stages: an initial onboarding period where new team members are walked through the SOPs governing their role, a supervised period where they execute tasks with direct observation and feedback, and ongoing reinforcement through briefings and quality reviews. The gap in most properties is not the first stage; it is the third. Standards drift when reinforcement stops. On-property training sessions built around a property\'s specific procedures are significantly more effective than generic hospitality workshops. LuxOps offers half-day and full-day sessions designed around your team\'s operational context.',
    link: '/formation',
    linkLabel: 'On-property training sessions',
  },
  {
    q: 'What operational standards apply to high-end hotels?',
    a: 'High-end hotel operations are expected to hold a consistent level across every department and every shift: precise arrivals handling, zero-defect room presentation, proactive guest recognition, fast response to requests, and inter-departmental communication that does not leave guests waiting on a handover. These expectations do not change with the night or the team on duty. What separates properties that deliver on them from those that struggle is not the quality of their standards document. It is whether those standards are embedded in daily operations through procedures, training, and regular review. LuxOps works with independent and high-end properties to build the operational structure that makes consistent execution achievable.',
    link: null,
    linkLabel: null,
  },
]

const frFaqs = [
  {
    q: 'Qu\'est-ce qu\'un SOP hôtelier ?',
    a: 'Un SOP hôtelier est un ensemble d\'instructions écrites qui définit comment une tâche précise doit être réalisée dans un département. Quand les procédures sont clairement rédigées, les équipes peuvent travailler au même standard d\'un service à l\'autre, quel que soit le collaborateur en poste. Sans cette documentation, la qualité d\'un check-in ou d\'une inspection de chambre dépend de la personne qui l\'exécute. Les SOPs couvrent l\'ensemble du spectre opérationnel : séquences d\'arrivée et de départ à la réception, critères d\'inspection des chambres en housekeeping, séquences de service en F&B, procédures de réservation au spa. LuxOps propose des playbooks par département issus du travail hôtelier réel, pas de templates opérationnels génériques.',
    link: '/playbooks',
    linkLabel: 'Découvrir nos playbooks opérationnels',
  },
  {
    q: 'Que doit contenir un manuel opérationnel hôtelier ?',
    a: 'Un manuel utile couvre tous les départements en contact avec les clients ou qui soutiennent leur expérience : Front Office, Housekeeping, F&B, Spa, Conciergerie, Maintenance et RH. Pour chacun, il doit documenter les procédures quotidiennes, les standards de service de référence, les checklists d\'inspection et les chemins d\'escalade quand quelque chose ne se passe pas comme prévu. Il doit aussi inclure des supports d\'intégration pour que les nouveaux collaborateurs aient une référence claire dès leur premier service. La différence entre un manuel qui fonctionne et un qui ne fonctionne pas, c\'est la structure pour un usage quotidien concret — pas un document classé pour les audits. Les playbooks LuxOps sont organisés par département et construits pour servir de références opérationnelles actives.',
    link: '/playbooks',
    linkLabel: 'Voir les playbooks hôteliers',
  },
  {
    q: 'Comment sont structurées les procédures housekeeping ?',
    a: 'Les procédures housekeeping s\'organisent autour de trois domaines opérationnels. Le premier est la préparation des chambres : la séquence d\'entrée, l\'ordre des tâches et les critères de qualité qui définissent à quoi ressemble une chambre prête pour le client. Le deuxième est la gestion du linge et des amenities : niveaux de par stock, cycles de réapprovisionnement et protocoles de manipulation qui maintiennent la régularité des approvisionnements sur les étages. Le troisième est le processus d\'inspection : checklists de libération de chambre, validation par le superviseur, et comment les défauts sont notés et remontés. Des procédures complémentaires couvrent le service de couverture, les nettoyages approfondis, les objets trouvés et les demandes clients. Le Playbook Housekeeping LuxOps couvre l\'ensemble de ces éléments sur environ 220 pages.',
    link: '/playbooks',
    linkLabel: 'Playbook Housekeeping',
  },
  {
    q: 'Que sont les standards de service hôtelier ?',
    a: 'Les standards de service définissent ce que signifie bien faire à chaque moment de contact avec le client — de la façon dont une arrivée est gérée à la façon dont une réclamation est traitée. Ils précisent des éléments concrets : les délais de réponse, le langage d\'accueil, les exigences de présentation, et comment les équipes communiquent entre départements. Les standards donnent à l\'équipe un point de référence au-delà du jugement individuel. Le défi n\'est pas de les définir — la plupart des établissements savent ce qu\'ils veulent. Le défi est de les maintenir appliqués de façon constante au fil des rotations et des évolutions de service. Les intégrer aux SOPs, aux sessions de formation et aux briefings quotidiens est ce qui fait passer un standard de l\'intention à la pratique.',
    link: null,
    linkLabel: null,
  },
  {
    q: 'Comment les hôtels maintiennent-ils la constance opérationnelle ?',
    a: 'La réponse honnête est que la plupart des incohérences dans les opérations hôtelières remontent à la même source : des savoirs qui vivent dans les têtes plutôt que dans des procédures écrites. Quand un collaborateur expérimenté part, qu\'un superviseur est absent ou qu\'un nouveau rejoint l\'équipe en pleine saison, le standard revient à ce que chaque individu connaît. Des procédures documentées donnent à l\'équipe un référentiel clair. Une formation structurée ancre ces procédures dans les habitudes quotidiennes. Des revues qualité régulières détectent les dérives avant qu\'elles n\'apparaissent dans les avis clients. Les établissements qui s\'appuient sur la transmission informelle verront leur qualité de service suivre l\'état de leurs effectifs. LuxOps propose des audits qualité et de la création de process pour les établissements qui construisent cette structure.',
    link: '/audit-qualite',
    linkLabel: 'En savoir plus sur notre audit qualité',
  },
  {
    q: 'Qu\'est-ce qu\'un playbook hôtelier ?',
    a: 'Un playbook hôtelier utile donne aux équipes un seul endroit où trouver les procédures, standards de service, scripts et checklists dont elles ont besoin pour bien travailler. Il est organisé par département et rédigé pour un usage opérationnel quotidien, pas comme un document de référence pour les managers, mais comme un outil de travail pour les personnes qui font le service. Contrairement à un document de politique générale, un playbook contient les étapes réelles : comment se déroule un check-in, ce que couvre une inspection de chambre, comment une réclamation est escaladée. Les playbooks LuxOps couvrent le Front Office, le Housekeeping, le F&B et le Spa, et sont disponibles en français et en anglais.',
    link: '/playbooks',
    linkLabel: 'Voir les playbooks opérationnels',
  },
  {
    q: 'Comment documenter les procédures hôtelières ?',
    a: 'Les procédures peuvent prendre différentes formes : classeurs imprimés, guides PDF, drives partagés ou espaces de travail numériques comme Notion ou SharePoint. Le format importe moins que le fait que les procédures soient trouvables, lisibles et à jour. Un manuel parfaitement structuré mais vieux de deux ans est moins utile qu\'un document simple que l\'équipe consulte vraiment. Les systèmes numériques ont des avantages réels pour la maintenance : contrôle des versions, mises à jour facilitées et accès depuis le terrain. Les espaces Notion fonctionnent bien pour les opérations multi-départements parce qu\'ils permettent différentes vues et niveaux d\'accès selon le rôle. LuxOps livre les procédures en format PDF et Notion, et peut construire des espaces Notion adaptés à la structure d\'un établissement.',
    link: '/notion-templates',
    linkLabel: 'Découvrir les templates Notion pour hôtels',
  },
  {
    q: 'Qu\'est-ce qui fait une bonne procédure housekeeping ?',
    a: 'La précision est ce qui distingue une procédure housekeeping utile d\'une procédure ignorée. Elle doit définir la tâche clairement, donner les étapes dans l\'ordre, et fixer des repères de qualité vérifiables — pas "la chambre doit être propre" mais ce que propre signifie à chaque point d\'inspection. Elle doit aussi tenir compte des variations qui se présentent vraiment sur le terrain : chambre occupée ou vacante, arrivée VIP, nettoyage approfondi. Elle doit être rédigée pour le valet de chambre, pas pour le directeur des opérations. Si la personne qui exécute la tâche ne peut pas suivre la procédure sans poser de questions, la procédure n\'a pas rempli son rôle.',
    link: null,
    linkLabel: null,
  },
  {
    q: 'Comment former le personnel aux procédures opérationnelles ?',
    a: 'Une formation qui fonctionne est construite autour des procédures réelles que l\'équipe utilise, pas délivrée indépendamment d\'elles. La structure qui tient en pratique comprend trois phases : une période d\'intégration initiale où les nouveaux collaborateurs parcourent les SOPs qui régissent leur rôle, une période supervisée où ils exécutent les tâches avec observation directe et retour, et un renforcement continu via des briefings et des revues qualité. Le manque dans la plupart des établissements n\'est pas la première phase ; c\'est la troisième. Les standards dérivent quand le renforcement s\'arrête. Des sessions de formation en établissement construites autour des procédures spécifiques de votre propriété sont nettement plus efficaces qu\'une formation hôtelière générique. LuxOps propose des sessions demi-journée et journée entière conçues autour du contexte opérationnel de votre équipe.',
    link: '/formation',
    linkLabel: 'Formation opérationnelle en établissement',
  },
  {
    q: 'Quels standards opérationnels s\'appliquent aux hôtels haut de gamme ?',
    a: 'Les opérations d\'un hôtel haut de gamme sont censées tenir un niveau constant sur tous les départements et tous les services : une gestion des arrivées précise, une présentation des chambres sans défaut, une reconnaissance proactive des clients, des délais de réponse rapides et une communication inter-départements qui ne laisse pas les clients attendre sur une passation. Ces attentes ne changent pas avec le service ou l\'équipe en poste. Ce qui distingue les établissements qui y répondent de ceux qui peinent n\'est pas la qualité de leur document de standards. C\'est si ces standards sont réellement ancrés dans les opérations quotidiennes via des procédures, une formation et des revues régulières. LuxOps accompagne les établissements indépendants et haut de gamme dans la construction de la structure qui rend une exécution constante atteignable.',
    link: null,
    linkLabel: null,
  },
]

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'
  const faqs = isEn ? enFaqs : frFaqs

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#111111] mb-4">
            {isEn ? 'Hotel Operations Resources' : 'Ressources Opérationnelles Hôtelières'}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {isEn
              ? 'Practical guidance on hotel SOPs, procedures, and service standards. Built around how hotel departments actually operate.'
              : 'R\u00e9ponses pratiques sur les SOPs h\u00f4teliers, les proc\u00e9dures op\u00e9rationnelles et les standards de service. Construites autour du fonctionnement r\u00e9el des d\u00e9partements h\u00f4teliers.'}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#111111] mb-12">
            {isEn ? 'Operational Standards & SOPs' : 'Standards Opérationnels & SOPs'}
          </h2>

          <div className="space-y-10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-10 last:border-0">
                <h3 className="text-xl font-semibold text-[#111111] mb-4">{faq.q}</h3>
                <p className="text-gray-500 leading-relaxed text-base mb-4">{faq.a}</p>
                {faq.link && faq.linkLabel && (
                  <Link
                    href={`/${locale}${faq.link}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:gap-3 transition-all"
                  >
                    {faq.linkLabel} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#111111] to-[#333333]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isEn
              ? 'Putting structure behind these questions'
              : 'Mettre de la structure derri\u00e8re ces questions'}
          </h2>
          <p className="text-gray-300 mb-10 text-lg font-light">
            {isEn
              ? 'If these are the operational questions your property is working through, LuxOps provides the tools to act on them. Playbooks, custom process creation, and on-property training built for real hotel teams.'
              : 'Si ce sont les questions op\u00e9rationnelles que votre \u00e9tablissement cherche \u00e0 r\u00e9soudre, LuxOps propose les outils pour y r\u00e9pondre concr\u00e8tement. Playbooks, cr\u00e9ation de process sur-mesure et formation en \u00e9tablissement con\u00e7us pour les \u00e9quipes h\u00f4teli\u00e8res r\u00e9elles.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/playbooks`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111111] font-semibold rounded-xl hover:bg-gray-100 transition-colors text-base"
            >
              {isEn ? 'Explore Playbooks' : 'Découvrir les Playbooks'} <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-xl hover:border-white/60 transition-colors text-base"
            >
              {isEn ? 'Book a Consultation' : 'Réserver une Consultation'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

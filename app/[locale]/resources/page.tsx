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
    a: 'A hotel SOP (Standard Operating Procedure) is a documented set of instructions that defines how a specific task or process should be performed within a hotel department. SOPs ensure consistent execution regardless of who is on shift, reducing errors and maintaining service quality. They cover everything from check-in procedures at the front desk to room inspection checklists in housekeeping. Well-structured hotel SOPs are the foundation of operational consistency. LuxOps provides complete, department-specific SOP playbooks built from real hotel operations.',
    link: '/playbooks',
    linkLabel: 'Explore our operational playbooks',
  },
  {
    q: 'What should a hotel operations manual include?',
    a: 'A hotel operations manual should cover all key departments: Front Office, Housekeeping, Food & Beverage, Spa, Concierge, Engineering and HR. For each department, it should document service standards, step-by-step procedures, quality control checklists, communication protocols and escalation paths. It should also include onboarding guides, brand standards, and guest journey touchpoints. The manual should be structured for practical daily use, not just reference. LuxOps playbooks are organised by department and designed to function as complete, ready-to-use operations manuals.',
    link: '/playbooks',
    linkLabel: 'View hotel operations playbooks',
  },
  {
    q: 'How are housekeeping SOPs structured?',
    a: 'Effective housekeeping SOPs are structured around three core areas: room preparation (entry procedures, sequence of tasks, quality standards), linen and amenity management (par levels, replenishment cycles, handling protocols), and inspection processes (room release checklists, supervisory sign-off, defect reporting). Additional sections cover deep-cleaning schedules, turndown service standards, lost and found procedures, and guest request handling. Each procedure should be specific enough for a new team member to follow without supervision. LuxOps Housekeeping Playbook covers all of these with approximately 220 pages of documented procedures.',
    link: '/playbooks',
    linkLabel: 'Housekeeping Playbook',
  },
  {
    q: 'What are hotel service standards?',
    a: 'Hotel service standards define the expected level of quality and consistency at each guest touchpoint — from arrival and check-in to dining, housekeeping, and departure. They specify response times, greeting protocols, presentation requirements, communication tone, and escalation procedures. Standards are typically set at brand level and then adapted for each property. Documenting them clearly is what allows teams to deliver consistent experiences regardless of staff changes. Service standards should be embedded in SOPs, training materials and daily briefings.',
    link: null,
    linkLabel: null,
  },
  {
    q: 'How do hotels maintain operational consistency?',
    a: 'Operational consistency in hotels comes from three things working together: documented procedures, structured training, and regular quality review. When all three are in place, service quality becomes predictable and less dependent on individual staff. Documented SOPs eliminate ambiguity. Training embeds the standards into daily practice. Audits identify drift before it affects the guest experience. Properties that rely on informal knowledge transfer tend to see inconsistency spike with turnover. LuxOps offers audits and custom process creation to help hotels build this foundation.',
    link: '/audit-qualite',
    linkLabel: 'Learn about our quality audit',
  },
  {
    q: 'What is a hotel playbook?',
    a: 'A hotel playbook is a comprehensive operational guide for a specific department. Unlike a general policy document, a playbook contains step-by-step procedures, service scripts, checklists, standards references and quality benchmarks — everything a team needs to operate consistently. Playbooks are designed for daily use, not shelf storage. They should be formatted clearly, logically ordered, and written at a level appropriate for the full team. LuxOps operational playbooks cover Front Office, Housekeeping, F&B and Spa, and are available in English and French.',
    link: '/playbooks',
    linkLabel: 'Browse operational playbooks',
  },
  {
    q: 'How are hotel procedures documented?',
    a: 'Hotel procedures can be documented in several formats: printed manuals, PDF guides, digital workspaces (such as Notion or SharePoint), or training platforms. The format matters less than the structure and accessibility. Procedures should be easy to find, easy to read, and kept up to date. Digital systems allow for version control and easier updates. Notion-based systems, in particular, offer good flexibility for multi-department operations management. LuxOps delivers procedures in PDF and Notion formats, and can build custom Notion workspaces for hotel teams.',
    link: '/notion-templates',
    linkLabel: 'Explore Notion templates for hotels',
  },
  {
    q: 'What makes an effective housekeeping SOP?',
    a: 'An effective housekeeping SOP is specific, actionable and written for the team member who will execute it — not for management. It should define the task clearly, specify the sequence of actions, include quality benchmarks (what does "clean" look like?), and indicate how long each task should take. It should also account for variations such as occupied vs vacant rooms, VIP arrivals and deep-cleaning cycles. Clarity and precision are what turn a standard into a usable tool. Vague standards lead to inconsistent rooms; precise ones lead to predictable quality.',
    link: null,
    linkLabel: null,
  },
  {
    q: 'How do hotels train staff on operational procedures?',
    a: 'Effective hotel staff training on procedures involves three stages: initial onboarding (structured introduction to standards and SOPs), supervised practice (hands-on execution with observation and feedback), and ongoing reinforcement (briefings, refresher sessions and quality reviews). Training should be built around the documented procedures, not delivered separately from them. On-property training sessions that directly reference the team\'s own SOPs are more effective than generic workshops. LuxOps offers half-day and full-day training sessions for hotel teams, designed around your property\'s specific procedures.',
    link: '/formation',
    linkLabel: 'On-property training sessions',
  },
  {
    q: 'What operational standards apply to high-end hotels?',
    a: 'High-end hotels are expected to meet elevated standards across every department: precise greeting protocols, zero-defect room presentation, proactive guest recognition, rapid response times and seamless inter-departmental communication. These standards are often codified in brand manuals but must be adapted to each property\'s layout, team size and guest profile. What distinguishes top-performing properties is not the existence of standards, but the consistency with which they are applied — which depends on documentation, training and regular review. LuxOps works with properties to build the operational structure that makes consistent performance achievable.',
    link: null,
    linkLabel: null,
  },
]

const frFaqs = [
  {
    q: 'Qu\'est-ce qu\'un SOP hôtelier ?',
    a: 'Un SOP hôtelier (Standard Operating Procedure) est un ensemble d\'instructions documentées qui définit comment une tâche ou un process doit être exécuté au sein d\'un département hôtelier. Les SOPs garantissent une exécution cohérente quelle que soit l\'équipe en place, réduisent les erreurs et maintiennent la qualité de service. Ils couvrent aussi bien les procédures de check-in à la réception que les checklists d\'inspection des chambres en housekeeping. Des SOPs bien structurés sont le fondement de la constance opérationnelle. LuxOps propose des playbooks complets par département, issus de l\'exploitation hôtelière réelle.',
    link: '/playbooks',
    linkLabel: 'Découvrir nos playbooks opérationnels',
  },
  {
    q: 'Que doit contenir un manuel opérationnel hôtelier ?',
    a: 'Un manuel opérationnel hôtelier doit couvrir tous les départements clés : Front Office, Housekeeping, Food & Beverage, Spa, Concierge, Maintenance et RH. Pour chaque département, il doit documenter les standards de service, les procédures étape par étape, les checklists de contrôle qualité, les protocoles de communication et les processus d\'escalade. Il doit également inclure des guides d\'intégration, les standards de marque et les étapes clés du parcours client. Le manuel doit être structuré pour un usage quotidien concret. Les playbooks LuxOps sont organisés par département et conçus pour servir de manuels opérationnels complets et directement utilisables.',
    link: '/playbooks',
    linkLabel: 'Voir les playbooks hôteliers',
  },
  {
    q: 'Comment sont structurées les procédures housekeeping ?',
    a: 'Des procédures housekeeping efficaces s\'organisent autour de trois axes : la préparation des chambres (séquence d\'entrée, ordre des tâches, standards de qualité), la gestion du linge et des amenités (niveaux de stock, cycles de réapprovisionnement, protocoles de manipulation), et les processus d\'inspection (checklists de libération de chambre, validation par le superviseur, signalement des défauts). Des sections complémentaires couvrent le nettoyage approfondi, les protocoles de couverture, les objets trouvés et les demandes clients. Chaque procédure doit être suffisamment précise pour qu\'un nouvel employé puisse l\'exécuter sans supervision. Le Playbook Housekeeping LuxOps couvre l\'ensemble de ces éléments sur environ 220 pages.',
    link: '/playbooks',
    linkLabel: 'Playbook Housekeeping',
  },
  {
    q: 'Que sont les standards de service hôtelier ?',
    a: 'Les standards de service hôtelier définissent le niveau de qualité et de constance attendu à chaque étape du parcours client — de l\'arrivée et du check-in jusqu\'au repas, au housekeeping et au départ. Ils précisent les délais de réponse, les protocoles d\'accueil, les exigences de présentation, le ton de communication et les procédures d\'escalade. Ces standards sont généralement définis au niveau de la marque, puis adaptés à chaque établissement. Les documenter clairement est ce qui permet aux équipes de délivrer une expérience constante indépendamment des rotations de personnel. Les standards de service doivent être intégrés aux SOPs, aux supports de formation et aux briefings quotidiens.',
    link: null,
    linkLabel: null,
  },
  {
    q: 'Comment les hôtels maintiennent-ils la constance opérationnelle ?',
    a: 'La constance opérationnelle dans les hôtels repose sur trois éléments qui fonctionnent ensemble : des procédures documentées, une formation structurée et des revues qualité régulières. Quand les trois sont en place, la qualité de service devient prévisible et moins dépendante des individus. Les SOPs documentés éliminent l\'ambiguïté. La formation ancre les standards dans la pratique quotidienne. Les audits identifient les dérives avant qu\'elles n\'affectent l\'expérience client. Les établissements qui s\'appuient sur une transmission informelle des savoirs sont les premiers touchés par les effets du turnover. LuxOps propose des audits et de la création de process pour aider les hôtels à construire cette base.',
    link: '/audit-qualite',
    linkLabel: 'En savoir plus sur notre audit qualité',
  },
  {
    q: 'Qu\'est-ce qu\'un playbook hôtelier ?',
    a: 'Un playbook hôtelier est un guide opérationnel complet dédié à un département spécifique. Contrairement à un document de politique générale, un playbook contient des procédures étape par étape, des scripts de service, des checklists, des références de standards et des repères qualité — tout ce dont une équipe a besoin pour opérer de façon cohérente. Les playbooks sont conçus pour un usage quotidien, pas pour rester sur une étagère. Ils doivent être clairs, logiquement organisés et rédigés à un niveau accessible à l\'ensemble de l\'équipe. Les playbooks LuxOps couvrent le Front Office, le Housekeeping, le F&B et le Spa, et sont disponibles en français et en anglais.',
    link: '/playbooks',
    linkLabel: 'Voir les playbooks opérationnels',
  },
  {
    q: 'Comment documenter les procédures hôtelières ?',
    a: 'Les procédures hôtelières peuvent être documentées sous plusieurs formats : manuels imprimés, guides PDF, espaces de travail numériques (Notion, SharePoint) ou plateformes de formation. Le format importe moins que la structure et l\'accessibilité. Les procédures doivent être faciles à retrouver, lisibles et régulièrement mises à jour. Les systèmes numériques permettent le contrôle des versions et facilitent les modifications. Les espaces Notion offrent notamment une bonne flexibilité pour la gestion opérationnelle multi-départements. LuxOps livre les procédures en format PDF et Notion, et peut construire des espaces Notion sur-mesure pour les équipes hôtelières.',
    link: '/notion-templates',
    linkLabel: 'Découvrir les templates Notion pour hôtels',
  },
  {
    q: 'Qu\'est-ce qui fait une bonne procédure housekeeping ?',
    a: 'Une procédure housekeeping efficace est précise, actionnable et rédigée pour le collaborateur qui va l\'exécuter — pas pour la direction. Elle doit définir clairement la tâche, préciser la séquence d\'actions, inclure des repères qualité (à quoi ressemble une chambre "propre" ?) et indiquer le temps alloué à chaque étape. Elle doit également prendre en compte les variations : chambre occupée ou vacante, arrivée VIP, nettoyage approfondi. La clarté et la précision sont ce qui transforme un standard en outil utilisable. Des standards vagues produisent des chambres inégales ; des standards précis produisent une qualité prévisible.',
    link: null,
    linkLabel: null,
  },
  {
    q: 'Comment former le personnel aux procédures opérationnelles ?',
    a: 'La formation efficace du personnel hôtelier aux procédures comprend trois étapes : l\'intégration initiale (présentation structurée des standards et des SOPs), la pratique supervisée (exécution en situation avec observation et retour), et le renforcement continu (briefings, sessions de remise à niveau et revues qualité). La formation doit s\'appuyer sur les procédures documentées, pas être déconnectée d\'elles. Des sessions de formation en établissement directement basées sur les SOPs de votre propriété sont plus efficaces que des ateliers génériques. LuxOps propose des sessions demi-journée et journée entière pour les équipes hôtelières, conçues autour des procédures spécifiques de votre établissement.',
    link: '/formation',
    linkLabel: 'Formation opérationnelle en établissement',
  },
  {
    q: 'Quels standards opérationnels s\'appliquent aux hôtels haut de gamme ?',
    a: 'Les hôtels haut de gamme doivent répondre à des standards élevés dans chaque département : protocoles d\'accueil précis, présentation des chambres sans défaut, reconnaissance proactive des clients, délais de réponse courts et communication inter-départements fluide. Ces standards sont souvent codifiés dans les manuels de marque mais doivent être adaptés à chaque établissement selon sa configuration, la taille de ses équipes et son profil de clientèle. Ce qui distingue les établissements les plus performants, ce n\'est pas l\'existence de standards mais la constance avec laquelle ils sont appliqués — ce qui dépend de la documentation, de la formation et des revues régulières. LuxOps accompagne les établissements dans la construction de la structure opérationnelle qui rend cette constance atteignable.',
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
              ? 'Expert guidance on operational standards, SOPs and procedures for high-end hospitality.'
              : 'Conseils experts sur les standards opérationnels, SOPs et procédures pour l\'hôtellerie haut de gamme.'}
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
              ? 'Need Ready-to-Use Operational Resources?'
              : 'Besoin de Ressources Opérationnelles Directement Utilisables ?'}
          </h2>
          <p className="text-gray-300 mb-10 text-lg font-light">
            {isEn
              ? 'LuxOps provides complete playbooks, custom process creation and on-property training.'
              : 'LuxOps propose des playbooks complets, de la création de process sur-mesure et de la formation en établissement.'}
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

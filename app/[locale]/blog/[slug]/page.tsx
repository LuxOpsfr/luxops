import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle2 } from 'lucide-react'
import { articles } from '@/content/blog/articles'
import { breadcrumbSchema, faqSchema as buildFaqSchema, localizedPath } from '@/lib/seo'
import TrackedLink from '@/components/TrackedLink'

// Keywords per article - improves indexation signals for Google
const KEYWORDS_EN: Record<string, string> = {
  'hotel-operations-playbook': 'hotel operations playbook, hotel SOP, hotel procedures manual, hotel operations guide, luxury hotel management',
  'how-to-write-hotel-sops': 'how to write hotel SOPs, hotel standard operating procedures, hotel SOP template, hotel procedure writing',
  'hotel-front-office-sop': 'hotel front office SOP, hotel reception procedures, front desk standard operating procedures, check-in SOP hotel',
  'hotel-housekeeping-checklist': 'hotel housekeeping checklist, housekeeping SOP, room attendant checklist, hotel cleaning checklist',
  'hotel-fb-service-standards': 'hotel F&B service standards, hotel restaurant service procedures, food and beverage SOP hotel',
  'hotel-front-office-procedures': 'hotel front office procedures, hotel reception SOP, check-in check-out procedures hotel',
  'housekeeping-room-inspection': 'hotel room inspection checklist, housekeeping supervisor inspection, room inspection checklist, inspection checklist in housekeeping, room inspection meaning, room inspection procedure hotel, quality control housekeeping',
  'hotel-fb-restaurant-procedures': 'hotel restaurant service procedures, F&B procedures hotel, restaurant SOP hotel, sequence of service hotel',
  'hotel-spa-wellness-sops': 'hotel spa SOP, wellness procedures hotel, spa standard operating procedures, spa treatment protocol hotel',
  'hotel-room-service-sops': 'hotel room service SOP, in-room dining procedures, room service standards hotel',
  'hotel-standard-operating-procedures': 'hotel standard operating procedures, hotel SOP, hotel SOP template, hotel operations procedures, how to write hotel SOPs',
  'hotel-front-desk-procedures': 'hotel front desk procedures, front desk SOP hotel, hotel check-in procedures, hotel check-out SOP, hotel front desk checklist',
  'hotel-staff-training-service-standards': 'hotel staff training, hotel service standards training, how to train hotel staff, on-property hotel training, hotel training program, luxury hotel training',
  'hotel-staff-turnover-training': 'hotel staff turnover, reduce hotel staff turnover, hotel employee retention, hotel training retention, hospitality staff turnover, on-property hotel training, hotel turnover reduction, hotel staff attrition',
  'hotel-new-hire-onboarding': 'hotel new hire onboarding, hotel onboarding program, hotel staff first 90 days, hotel employee onboarding, hospitality onboarding, hotel onboarding checklist, new hotel employee integration, hotel staff retention onboarding',
  'hotel-room-attendant-checklist': 'hotel room attendant checklist, room attendant SOP, departure room cleaning checklist, stayover room cleaning checklist, housekeeping room attendant duties',
  'hotel-front-desk-checklist': 'hotel front desk checklist, front desk shift checklist hotel, hotel check-in checklist, hotel check-out checklist, front desk handover checklist',
  'hotel-dnd-procedure': 'hotel DND procedure, housekeeping do not disturb procedure, hotel do not disturb SOP, DND room housekeeping, hotel welfare check DND',
  'hotel-room-cleaning-checklist': 'hotel room cleaning checklist, hotel room cleaning SOP, hotel housekeeping checklist, departure room cleaning checklist, stayover room cleaning checklist, room attendant checklist',
  'hotel-housekeeping-supervisor-checklist': 'hotel housekeeping supervisor checklist, housekeeping supervisor inspection checklist, hotel room inspection checklist, Clean Inspected hotel room status, housekeeping quality control checklist',
  'hotel-bathroom-cleaning-sop': 'hotel bathroom cleaning SOP, hotel bathroom cleaning checklist, housekeeping bathroom cleaning procedure, hotel bathroom inspection checklist, hotel cleaning SOP',
}

const KEYWORDS_FR: Record<string, string> = {
  'hotel-operations-playbook': 'playbook opérations hôtel, SOP hôtel, procédures hôtelières, guide opérations hôtel, gestion hôtel luxe',
  'how-to-write-hotel-sops': 'rédiger SOP hôtel, procédures opérationnelles hôtel, modèle SOP hôtelier, écrire procédures hôtel',
  'hotel-front-office-sop': 'SOP réception hôtel, procédures front office hôtel, standard opérationnel réception hôtel',
  'hotel-housekeeping-checklist': 'checklist housekeeping hôtel, SOP housekeeping, checklist femme de chambre, procédures ménage hôtel',
  'hotel-fb-service-standards': 'standards service F&B hôtel, procédures restaurant hôtel, SOP restauration hôtel',
  'hotel-front-office-procedures': 'procédures réception hôtel, SOP front office, procédures check-in check-out hôtel',
  'housekeeping-room-inspection': 'inspection chambre hôtel, checklist inspection superviseur, checklist inspection housekeeping, procédure inspection chambre hôtel, gouvernante étage inspection, contrôle qualité housekeeping',
  'hotel-fb-restaurant-procedures': 'procédures service restaurant hôtel, SOP restauration hôtel, séquence service restaurant hôtel',
  'hotel-spa-wellness-sops': 'SOP spa hôtel, procédures bien-être hôtel, standard opérationnel spa hôtel, protocole soin spa hôtel',
  'hotel-room-service-sops': 'SOP room service hôtel, procédures service en chambre, standards room service hôtel',
  'hotel-standard-operating-procedures': 'procédures opérationnelles hôtelières, SOP hôtel, modèle SOP hôtelières, procédures opérations hôtel',
  'hotel-front-desk-procedures': 'procédures réception hôtel, SOP réception hôtelière, procédures check-in hôtel, SOP check-out hôtel, checklist réception hôtel',
  'hotel-staff-training-service-standards': 'formation personnel hôtelier, formation standards de service hôtel, former équipes hôtelières, formation sur site hôtel, programme formation hôtelière, formation hôtel luxe',
  'hotel-staff-turnover-training': 'turn-over hôtelier, réduire turn-over hôtel, fidélisation équipes hôtelières, formation hôtelière rétention, formation sur site hôtel, stabilité équipes hôtel, turn-over hôtellerie restauration',
  'hotel-new-hire-onboarding': 'onboarding hôtelier, intégration nouvelles recrues hôtel, programme onboarding hôtel, intégration collaborateurs hôtellerie, fidélisation nouvelles recrues hôtel, 90 premiers jours hôtel, onboarding structuré hôtel',
  'hotel-room-attendant-checklist': 'checklist équipier étage hôtel, checklist femme de chambre hôtel, chambre à blanc checklist, recouche housekeeping, SOP housekeeping hôtel',
  'hotel-front-desk-checklist': 'checklist réception hôtel, checklist check-in hôtel, checklist check-out hôtel, passation réception hôtel, main courante réception hôtel',
  'hotel-dnd-procedure': 'procédure DND hôtel, procédure ne pas déranger hôtel, SOP housekeeping DND, chambre DND hôtel, contrôle sécurité DND hôtel',
  'hotel-room-cleaning-checklist': 'checklist de nettoyage de chambre hôtel, checklist chambre à blanc hôtel, procédure de nettoyage de chambre hôtel, recouche hôtel, checklist femme de chambre hôtel, Room Attendant checklist',
  'hotel-housekeeping-supervisor-checklist': 'checklist pour gouvernante hôtel, checklist inspection chambre hôtel, checklist gouvernante étage, contrôle qualité en housekeeping, statut Clean Inspected hôtel',
  'hotel-bathroom-cleaning-sop': 'SOP de nettoyage de salle de bain hôtel, procédure de nettoyage de salle de bain hôtel, checklist salle de bain hôtel, contrôle salle de bain par la gouvernante, procédure de housekeeping hôtel',
}

const CONTENT_UPGRADES: Record<string, {
  en: { title: string; intro: string; items: string[] }
  fr: { title: string; intro: string; items: string[] }
}> = {
  'hotel-standard-operating-procedures': {
    en: {
      title: 'Manager checklist before writing SOPs',
      intro: 'Before documenting procedures, align the operational standard. This prevents the SOP from becoming a description of bad habits.',
      items: [
        'List the five highest-volume tasks in the department',
        'Define who owns each task, who approves exceptions and who records completion',
        'Document the normal sequence and the most common failure cases',
        'Add the evidence required: checklist, PMS note, handover line, inspection score or manager sign-off',
      ],
    },
    fr: {
      title: 'Checklist manager avant de rédiger des SOPs',
      intro: "Avant d'écrire les procédures, alignez le standard opérationnel. Cela évite de documenter simplement les mauvaises habitudes existantes.",
      items: [
        'Lister les cinq tâches les plus fréquentes du département',
        "Définir qui réalise, qui valide les exceptions et qui trace l'exécution",
        'Documenter la séquence normale et les cas de rupture les plus fréquents',
        'Ajouter la preuve attendue : checklist, note PMS, ligne de passation, score inspection ou validation manager',
      ],
    },
  },
  'hotel-front-desk-procedures': {
    en: {
      title: 'Front desk procedures that should never stay informal',
      intro: 'These routines create the highest risk when they depend only on memory or individual experience.',
      items: [
        'Room not ready at arrival',
        'Guest disputes a charge at check-out',
        'VIP request missing from the handover',
        'Late arrival during night audit',
        'Walk-in request when the hotel is close to full occupancy',
      ],
    },
    fr: {
      title: 'Procédures réception à ne jamais laisser informelles',
      intro: "Ces routines créent le plus de risque lorsqu'elles reposent uniquement sur la mémoire ou l'expérience individuelle.",
      items: [
        "Chambre non prête à l'arrivée",
        'Client qui conteste une facturation au départ',
        'Demande VIP absente de la passation',
        "Arrivée tardive pendant l'audit de nuit",
        "Walk-in lorsque l'hôtel est presque complet",
      ],
    },
  },
  'housekeeping-room-inspection': {
    en: {
      title: 'Room inspection criteria worth tracking',
      intro: 'A supervisor checklist should make quality measurable, not just visible.',
      items: [
        'Guest-facing defects: hair, dust, stains, fingerprints and odours',
        'Operational defects: missing amenities, incorrect linen count, maintenance issues',
        'Brand defects: setup, presentation, spacing and welcome details',
        'Follow-up defects: items that require maintenance, minibar, laundry or front office action',
      ],
    },
    fr: {
      title: "Critères d'inspection chambre à suivre",
      intro: 'Une checklist superviseur doit rendre la qualité mesurable, pas seulement visible.',
      items: [
        'Défauts visibles client : cheveux, poussière, taches, traces et odeurs',
        'Défauts opérationnels : amenities manquants, linge incorrect, maintenance',
        'Défauts de marque : mise en place, présentation, espacement et attentions',
        'Suivis requis : maintenance, minibar, pressing ou action réception',
      ],
    },
  },
  'hotel-staff-training-service-standards': {
    en: {
      title: 'Signals that service standards training is working',
      intro: 'Training should change what happens on shift, not only what people can repeat in a room.',
      items: [
        'Supervisors hear the same service language across different shifts',
        'New hires can explain why the standard exists, not only recite it',
        'Guest recovery decisions follow the same escalation rules',
        'Briefings reference real situations from the previous day',
      ],
    },
    fr: {
      title: 'Signaux qu’une formation aux standards fonctionne',
      intro: 'La formation doit changer ce qui se passe en service, pas seulement ce que les équipes savent répéter en salle.',
      items: [
        'Les superviseurs entendent le même langage de service selon les shifts',
        'Les nouvelles recrues expliquent pourquoi le standard existe',
        "Les décisions de service recovery suivent les mêmes règles d'escalade",
        'Les briefings s’appuient sur des situations réelles de la veille',
      ],
    },
  },
}

const PLAYBOOK_EXCERPTS: Record<string, {
  en: {
    label: string
    title: string
    intro: string
    rows: { term: string; detail: string }[]
    ctaText: string
    ctaHref: string
    secondaryCtaText?: string
    secondaryCtaHref?: string
  }
  fr: {
    label: string
    title: string
    intro: string
    rows: { term: string; detail: string }[]
    ctaText: string
    ctaHref: string
    secondaryCtaText?: string
    secondaryCtaHref?: string
  }
}> = {
  'housekeeping-room-inspection': {
    en: {
      label: 'Free excerpt from the LuxOps Housekeeping Playbook',
      title: 'Departure room inspection: the LuxOps control flow',
      intro:
        'This extract is adapted from Chapter 6, Quality Control & Inspections. It shows how the playbook turns room inspection into a repeatable supervisor routine, not a subjective final look.',
      rows: [
        { term: 'Self-inspection', detail: 'Every room, owned by the room attendant before the room is marked Clean.' },
        { term: 'Departure inspection', detail: '100% of departure rooms, physically verified by a supervisor before release.' },
        { term: 'Stayover spot checks', detail: '20 to 30% of stayover rooms daily, prioritising newer attendants, VIPs and previous complaints.' },
        { term: 'Scoring model', detail: '100 points: Bathroom 35, Bedroom 35, Presentation 20, Maintenance 10. Pass threshold: 90.' },
        { term: 'Critical rule', detail: 'A Clean room is not sellable. Only an Inspected room may be assigned by Front Office.' },
      ],
      ctaText: 'View the Housekeeping Playbook',
      ctaHref: '/en/playbooks/hsk',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Housekeeping LuxOps',
      title: 'Inspection chambre départ : le flux de contrôle LuxOps',
      intro:
        'Cet extrait est adapté du chapitre Contrôle Qualité & Inspections. Il transforme l’inspection chambre en routine superviseur mesurable, pas en simple coup d’oeil subjectif.',
      rows: [
        { term: 'Auto-contrôle', detail: 'Chaque chambre, réalisé par la femme de chambre avant le passage en statut propre.' },
        { term: 'Inspection départ', detail: '100% des chambres départ, vérifiées physiquement par la gouvernante avant libération.' },
        { term: 'Recouches', detail: '20 à 30% des recouches contrôlées chaque jour, avec priorité aux nouveaux collaborateurs, VIP et réclamations.' },
        { term: 'Score', detail: '100 points : salle de bain 35, chambre 35, présentation 20, maintenance 10. Seuil de passage : 90.' },
        { term: 'Règle critique', detail: 'Une chambre propre n’est pas vendable. Seule une chambre inspectée peut être attribuée par la réception.' },
      ],
      ctaText: 'Voir le Playbook Housekeeping',
      ctaHref: '/fr/playbooks/hsk',
    },
  },
  'hotel-standard-operating-procedures': {
    en: {
      label: 'Playbook-based SOP example',
      title: 'What “specific enough” looks like in a hotel SOP',
      intro:
        'A real SOP does not say “clean the room well.” It defines timing, ownership, sequence, exceptions and the status update that allows the next department to act.',
      rows: [
        { term: 'Trigger', detail: 'Departure room after guest checkout.' },
        { term: 'Timing', detail: '45-60 minutes for a standard room, 75-90 minutes for a suite, full inspection required before release.' },
        { term: 'Sequence', detail: 'Initial assessment, bathroom deep clean, bedroom cleaning, bed making, closet/storage, minibar, final presentation.' },
        { term: 'Exception', detail: 'Guest belongings found during initial assessment: stop cleaning and follow Lost & Found immediately.' },
        { term: 'Handover', detail: 'Attendant sets Clean; supervisor inspects and sets Inspected; Front Office may now assign the room.' },
      ],
      ctaText: 'Get the SOP Playbooks',
      ctaHref: '/en/playbooks',
    },
    fr: {
      label: 'Exemple SOP issu du playbook',
      title: 'À quoi ressemble une SOP hôtelière assez précise',
      intro:
        'Une vraie SOP ne dit pas “bien nettoyer la chambre”. Elle définit le timing, le responsable, la séquence, les exceptions et le statut qui permet au département suivant d’agir.',
      rows: [
        { term: 'Déclencheur', detail: 'Chambre départ après check-out client.' },
        { term: 'Timing', detail: '45-60 minutes pour une chambre standard, 75-90 minutes pour une suite, inspection obligatoire avant libération.' },
        { term: 'Séquence', detail: 'Évaluation initiale, salle de bain, chambre, lit, penderie, minibar, présentation finale.' },
        { term: 'Exception', detail: 'Objet client trouvé pendant l’évaluation initiale : arrêt du nettoyage et procédure objets trouvés.' },
        { term: 'Passation', detail: 'La chambre passe en propre, puis la gouvernante inspecte et libère en inspectée pour la réception.' },
      ],
      ctaText: 'Voir les Playbooks SOP',
      ctaHref: '/fr/playbooks',
    },
  },
  'how-to-write-hotel-sops': {
    en: {
      label: 'Free SOP structure from LuxOps',
      title: 'The five fields every hotel SOP should include',
      intro:
        'The LuxOps playbooks use SOPs as operating tools. Each procedure is written so a new team member can understand what happens before, during and after the task.',
      rows: [
        { term: 'Purpose', detail: 'Why the procedure exists and what guest or operational risk it protects.' },
        { term: 'Owner', detail: 'Who performs the task, who verifies it and who can approve exceptions.' },
        { term: 'Sequence', detail: 'The exact order of actions, including scripts or timing where relevant.' },
        { term: 'Quality check', detail: 'How the result is verified: checklist, score, PMS status, photo, signature or supervisor inspection.' },
        { term: 'Escalation', detail: 'What to do when the standard cannot be met: maintenance issue, guest complaint, DND, missing stock or lost property.' },
      ],
      ctaText: 'Download a free playbook chapter',
      ctaHref: '/en/free-hotel-procedures',
    },
    fr: {
      label: 'Structure SOP gratuite issue de LuxOps',
      title: 'Les cinq champs que chaque SOP hôtelière doit contenir',
      intro:
        'Les playbooks LuxOps traitent les SOP comme des outils opérationnels. Chaque procédure doit permettre à un nouveau collaborateur de comprendre ce qui se passe avant, pendant et après la tâche.',
      rows: [
        { term: 'Objectif', detail: 'Pourquoi la procédure existe et quel risque client ou opérationnel elle protège.' },
        { term: 'Responsable', detail: 'Qui réalise, qui vérifie et qui peut valider les exceptions.' },
        { term: 'Séquence', detail: 'L’ordre exact des actions, avec scripts ou timing quand nécessaire.' },
        { term: 'Contrôle qualité', detail: 'Comment le résultat est vérifié : checklist, score, PMS, photo, signature ou inspection.' },
        { term: 'Escalade', detail: 'Que faire si le standard ne peut pas être tenu : maintenance, réclamation, DND, stock manquant ou objet trouvé.' },
      ],
      ctaText: 'Télécharger un chapitre gratuit',
      ctaHref: '/fr/free-hotel-procedures',
    },
  },
  'hotel-operations-playbook': {
    en: {
      label: 'What LuxOps playbooks contain',
      title: 'A playbook is a system, not a folder of documents',
      intro:
        'The Housekeeping Playbook alone includes room cleaning, turndown, guest services, inspections, inventory, team management, health and safety and sustainability. The commercial value is the way these chapters connect.',
      rows: [
        { term: 'Room cleaning', detail: 'Service times, 7-phase departure sequence, stayover rules, suite adjustments and DND protocol.' },
        { term: 'Quality control', detail: 'Self-inspection, 100% departure inspections, 20-30% stayover checks and deficiency tracking.' },
        { term: 'Guest services', detail: 'Laundry, shoe polishing, request handling, LEARN complaint recovery and Lost & Found.' },
        { term: 'Inventory', detail: 'Par levels, linen lifecycle, amenity standards, chemical safety, FIFO storage and CPOR tracking.' },
        { term: 'Management', detail: 'Role clarity, assignment sheets, supervisor ratios, daily checklist and performance metrics.' },
      ],
      ctaText: 'View all playbooks',
      ctaHref: '/en/playbooks',
    },
    fr: {
      label: 'Ce que contiennent les playbooks LuxOps',
      title: 'Un playbook est un système, pas un dossier de documents',
      intro:
        'Le Playbook Housekeeping couvre à lui seul nettoyage chambre, couverture, services client, inspections, stocks, management, santé-sécurité et durabilité. La valeur vient surtout de la façon dont ces chapitres se connectent.',
      rows: [
        { term: 'Nettoyage chambre', detail: 'Temps de passage, séquence départ en 7 phases, recouche, suites et protocole DND.' },
        { term: 'Contrôle qualité', detail: 'Auto-contrôle, 100% des départs inspectés, 20-30% des recouches contrôlées et suivi des défauts.' },
        { term: 'Services client', detail: 'Laundry, cirage, demandes client, méthode LEARN et objets trouvés.' },
        { term: 'Stocks', detail: 'Par levels, cycle du linge, amenities, sécurité produits, FIFO et CPOR.' },
        { term: 'Management', detail: 'Rôles, feuilles de route, ratios superviseur, checklist quotidienne et métriques.' },
      ],
      ctaText: 'Voir tous les playbooks',
      ctaHref: '/fr/playbooks',
    },
  },
  'hotel-front-office-sop': {
    en: {
      label: 'Free excerpt from the LuxOps Front Office Playbook',
      title: 'Front office SOPs need trigger, sequence and escalation',
      intro:
        'This extract is adapted from the check-in, guest communication and handover chapters. The point is not to script reception like a call centre, but to make the critical moments consistent across every shift.',
      rows: [
        { term: 'Pre-arrival review', detail: 'Review arrivals in the PMS, flag VIPs and special occasions, verify room assignments and communicate requests before the guest arrives.' },
        { term: 'Check-in sequence', detail: 'Confirm stay details, verify ID, review requests, process payment or pre-authorisation, issue keys and update the PMS immediately.' },
        { term: 'Room not ready', detail: 'Store luggage, offer a waiting option, set a clear timing and contact the guest before they need to chase the desk.' },
        { term: 'Complaint handling', detail: 'Listen, empathise, apologise, resolve and notify. Active complaints must be shared in every handover until closed.' },
        { term: 'Shift handover', detail: 'Open requests, VIP notes, billing issues, room moves and recent complaints are documented so the next shift can act without rediscovery.' },
      ],
      ctaText: 'View the Front Office Playbook',
      ctaHref: '/en/playbooks/fo',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Front Office LuxOps',
      title: 'Une SOP réception doit définir déclencheur, séquence et escalade',
      intro:
        'Cet extrait est adapté des chapitres check-in, communication client et passation. L’objectif n’est pas de rendre la réception robotique, mais de rendre les moments critiques cohérents sur chaque shift.',
      rows: [
        { term: 'Revue pré-arrivée', detail: 'Revoir les arrivées PMS, identifier VIP et occasions spéciales, vérifier les attributions et communiquer les demandes avant l’arrivée client.' },
        { term: 'Séquence check-in', detail: 'Confirmer le séjour, vérifier l’identité, revoir les demandes, gérer paiement ou préautorisation, remettre les clés et mettre à jour le PMS.' },
        { term: 'Chambre non prête', detail: 'Prendre les bagages, proposer une attente claire, donner un timing et recontacter le client avant qu’il ne relance la réception.' },
        { term: 'Réclamation', detail: 'Écouter, reconnaître, s’excuser, résoudre et notifier. Toute réclamation active reste en passation jusqu’à clôture.' },
        { term: 'Passation', detail: 'Demandes ouvertes, VIP, facturation, room moves et réclamations récentes sont tracés pour que le shift suivant agisse sans repartir de zéro.' },
      ],
      ctaText: 'Voir le Playbook Front Office',
      ctaHref: '/fr/playbooks/fo',
    },
  },
  'hotel-front-desk-procedures': {
    en: {
      label: 'Free excerpt from the LuxOps Front Office Playbook',
      title: 'The front desk procedure stack that protects every shift',
      intro:
        'The Front Office Playbook documents the routines that create the most guest impact and operational risk: check-in, check-out, billing review, complaint recovery and night handover.',
      rows: [
        { term: 'Arrival control', detail: 'Arrivals, VIPs, preferences, pre-authorisations and room readiness are reviewed before the first peak check-in wave.' },
        { term: 'Billing review', detail: 'Room charges, F&B, minibar, spa, deposits and adjustments are verified before payment is taken at departure.' },
        { term: 'Late check-out', detail: 'Decision factors include occupancy, VIP status, housekeeping capacity and demand before any extension is confirmed.' },
        { term: 'Dispute recovery', detail: 'The desk listens, reviews documentation, explains clearly, escalates where needed and records the outcome in the guest profile.' },
        { term: 'Night audit handover', detail: 'Open folios, discrepancies, high balances and next-day arrivals are prepared before the morning team starts.' },
      ],
      ctaText: 'View the Front Office Starter Pack',
      ctaHref: '/en/playbooks/fo-starter-pack',
      secondaryCtaText: 'View the Front Office Playbook',
      secondaryCtaHref: '/en/playbooks/fo',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Front Office LuxOps',
      title: 'Le socle de procédures réception qui protège chaque shift',
      intro:
        'Le Playbook Front Office documente les routines à plus fort impact client et opérationnel : check-in, check-out, revue facturation, gestion des réclamations et passation de nuit.',
      rows: [
        { term: 'Contrôle arrivées', detail: 'Arrivées, VIP, préférences, préautorisations et disponibilité chambres sont vérifiés avant le premier pic de check-in.' },
        { term: 'Revue facturation', detail: 'Chambre, F&B, minibar, spa, acomptes et ajustements sont contrôlés avant encaissement au départ.' },
        { term: 'Late check-out', detail: 'La décision tient compte de l’occupation, du statut client, de la capacité housekeeping et de la demande avant confirmation.' },
        { term: 'Litige client', detail: 'La réception écoute, vérifie les preuves, explique clairement, escalade si nécessaire et trace la résolution dans le profil client.' },
        { term: 'Passation audit de nuit', detail: 'Folios ouverts, écarts, soldes élevés et arrivées du lendemain sont préparés avant l’arrivée de l’équipe matin.' },
      ],
      ctaText: 'Voir le Starter Pack Front Office',
      ctaHref: '/fr/playbooks/fo-starter-pack',
      secondaryCtaText: 'Voir le Playbook Front Office',
      secondaryCtaHref: '/fr/playbooks/fo',
    },
  },
  'hotel-fb-service-standards': {
    en: {
      label: 'Free excerpt from the LuxOps F&B Playbook',
      title: 'Restaurant service standards become useful when they are sequenced',
      intro:
        'This extract is adapted from the restaurant service, mise en place and recovery chapters. A good F&B standard tells the team what to prepare, what to say, what to check and when to escalate.',
      rows: [
        { term: 'Pre-service briefing', detail: 'Covers reservations, VIPs, allergies, menu changes, unavailable items, station allocation and expected service pressure.' },
        { term: 'Mise en place', detail: 'Station setup is verified before opening: tableware, service tools, POS readiness, water, bread, condiments and backup stock.' },
        { term: 'Order taking', detail: 'The team confirms covers, pace, allergies, dietary restrictions and sequencing before sending the order.' },
        { term: 'Service pacing', detail: 'Drinks, starters, mains, clearing and dessert are coordinated so the table never feels abandoned or rushed.' },
        { term: 'Recovery', detail: 'A wrong dish, delay or allergen concern is acknowledged immediately, owned by one person and escalated before the guest repeats it.' },
      ],
      ctaText: 'View the F&B Starter Pack',
      ctaHref: '/en/playbooks/fb-starter-pack',
      secondaryCtaText: 'View the F&B Playbook',
      secondaryCtaHref: '/en/playbooks/fb',
    },
    fr: {
      label: 'Extrait gratuit du Playbook F&B LuxOps',
      title: 'Les standards F&B deviennent utiles quand ils sont séquencés',
      intro:
        'Cet extrait est adapté des chapitres service restaurant, mise en place et recovery. Un bon standard F&B précise quoi préparer, quoi dire, quoi vérifier et quand escalader.',
      rows: [
        { term: 'Briefing pré-service', detail: 'Réservations, VIP, allergies, changements menu, ruptures, allocation des rangs et pression attendue du service.' },
        { term: 'Mise en place', detail: 'Le poste est vérifié avant ouverture : vaisselle, matériel de service, POS, eau, pain, condiments et stock de secours.' },
        { term: 'Prise de commande', detail: 'L’équipe confirme couverts, rythme, allergies, régimes et séquençage avant d’envoyer la commande.' },
        { term: 'Rythme du service', detail: 'Boissons, entrées, plats, débarrassage et dessert sont coordonnés pour éviter attente excessive ou précipitation.' },
        { term: 'Recovery', detail: 'Erreur plat, délai ou allergène sont reconnus immédiatement, portés par une personne et escaladés avant que le client ne répète.' },
      ],
      ctaText: 'Voir le Starter Pack F&B',
      ctaHref: '/fr/playbooks/fb-starter-pack',
      secondaryCtaText: 'Voir le Playbook F&B',
      secondaryCtaHref: '/fr/playbooks/fb',
    },
  },
  'hotel-fb-restaurant-procedures': {
    en: {
      label: 'Free excerpt from the LuxOps F&B Playbook',
      title: 'The restaurant SOP sequence from briefing to close',
      intro:
        'Hotel restaurant procedures need a full operating rhythm. The playbook links briefing, setup, sequence of service, issue recovery and closing handover so the next service inherits a clean operation.',
      rows: [
        { term: 'Opening briefing', detail: 'The shift starts with covers, VIPs, special requests, menu knowledge, allergies and service roles aligned.' },
        { term: 'Station readiness', detail: 'Each station is checked for cleanliness, complete setup, backup mise en place and operational POS access.' },
        { term: 'Sequence of service', detail: 'Greeting, seating, menu presentation, order taking, delivery, clearing and farewell follow one shared rhythm.' },
        { term: 'Guest issue', detail: 'The server owns the first response, informs the supervisor and closes the loop with the guest after resolution.' },
        { term: 'Closing handover', detail: 'Open checks, guest comments, stock issues, maintenance needs and next-service preparation are passed clearly.' },
      ],
      ctaText: 'View the F&B Starter Pack',
      ctaHref: '/en/playbooks/fb-starter-pack',
      secondaryCtaText: 'View the F&B Playbook',
      secondaryCtaHref: '/en/playbooks/fb',
    },
    fr: {
      label: 'Extrait gratuit du Playbook F&B LuxOps',
      title: 'La séquence SOP restaurant, du briefing à la clôture',
      intro:
        'Les procédures restaurant hôtel doivent suivre un vrai rythme opérationnel. Le playbook relie briefing, mise en place, séquence de service, recovery et passation pour que le service suivant reparte proprement.',
      rows: [
        { term: 'Briefing ouverture', detail: 'Couverts, VIP, demandes spéciales, connaissance menu, allergies et rôles de service sont alignés.' },
        { term: 'Poste prêt', detail: 'Chaque rang est contrôlé : propreté, mise en place complète, stock de secours et accès POS opérationnel.' },
        { term: 'Séquence service', detail: 'Accueil, placement, présentation menu, commande, envoi, débarrassage et départ suivent un rythme partagé.' },
        { term: 'Incident client', detail: 'Le serveur porte la première réponse, informe le superviseur et boucle avec le client après résolution.' },
        { term: 'Passation clôture', detail: 'Notes ouvertes, commentaires clients, problèmes stock, besoins maintenance et préparation du service suivant sont transmis.' },
      ],
      ctaText: 'Voir le Starter Pack F&B',
      ctaHref: '/fr/playbooks/fb-starter-pack',
      secondaryCtaText: 'Voir le Playbook F&B',
      secondaryCtaHref: '/fr/playbooks/fb',
    },
  },
  'hotel-room-service-sops': {
    en: {
      label: 'Free excerpt from the LuxOps F&B Playbook',
      title: 'Room service SOPs are logistics, presentation and timing',
      intro:
        'Room service fails when order capture, tray setup, delivery timing and tray collection are treated as separate habits. The F&B playbook turns them into one controlled flow.',
      rows: [
        { term: 'Order capture', detail: 'Confirm room number, guest name, timing, allergies, modifiers, payment status and any access instruction before sending.' },
        { term: 'Tray setup', detail: 'Tray or trolley presentation is checked for temperature, covers, cutlery, condiments, napkin, glassware and bill folder.' },
        { term: 'Delivery timing', detail: 'The promised time is realistic, tracked and updated if kitchen or lift delays make the original timing impossible.' },
        { term: 'In-room delivery', detail: 'Knock, announce, confirm placement preference, present items, explain bill or signature and leave the room cleanly.' },
        { term: 'Tray collection', detail: 'Collection is planned, not left to guest corridors. Outstanding trays are followed during floor rounds and shift handover.' },
      ],
      ctaText: 'View the F&B Starter Pack',
      ctaHref: '/en/playbooks/fb-starter-pack',
      secondaryCtaText: 'View the F&B Playbook',
      secondaryCtaHref: '/en/playbooks/fb',
    },
    fr: {
      label: 'Extrait gratuit du Playbook F&B LuxOps',
      title: 'Le room service, c’est logistique, présentation et timing',
      intro:
        'Le room service se dégrade quand prise de commande, dressage, timing de livraison et débarrassage sont traités séparément. Le playbook F&B en fait un seul flux contrôlé.',
      rows: [
        { term: 'Prise de commande', detail: 'Confirmer chambre, nom client, timing, allergies, modifications, paiement et consigne d’accès avant envoi.' },
        { term: 'Dressage plateau', detail: 'Plateau ou trolley contrôlé : température, couverts, condiments, serviette, verrerie et pochette addition.' },
        { term: 'Timing livraison', detail: 'Le délai promis est réaliste, suivi et mis à jour si cuisine ou ascenseur rendent le timing impossible.' },
        { term: 'Livraison chambre', detail: 'Frapper, annoncer, confirmer l’emplacement, présenter les items, expliquer addition ou signature et sortir proprement.' },
        { term: 'Débarrassage', detail: 'La collecte est planifiée, pas abandonnée aux couloirs. Les plateaux ouverts sont suivis en ronde et en passation.' },
      ],
      ctaText: 'Voir le Starter Pack F&B',
      ctaHref: '/fr/playbooks/fb-starter-pack',
      secondaryCtaText: 'Voir le Playbook F&B',
      secondaryCtaHref: '/fr/playbooks/fb',
    },
  },
  'hotel-spa-wellness-sops': {
    en: {
      label: 'Free excerpt from the LuxOps Spa & Wellness Playbook',
      title: 'Spa SOPs connect room setup, guest journey and safety',
      intro:
        'This extract is adapted from treatment room, guest journey and quality control chapters. Spa standards must protect both the sensory experience and the safety of the treatment.',
      rows: [
        { term: 'Room readiness', detail: 'Before each treatment: temperature, lighting, music, scent, linen, face cradle, robe, slippers, trolley and waste are checked.' },
        { term: 'Consultation', detail: 'Health changes, contraindications, pressure preferences and expectations are confirmed before treatment begins.' },
        { term: 'Therapist conduct', detail: 'Voice, movement, draping, transitions and guest communication are controlled because proximity makes every detail visible.' },
        { term: 'Post-treatment', detail: 'Belongings are confirmed, treatment record completed, product recommendation noted and room status updated.' },
        { term: 'Quality control', detail: 'Daily pre-opening inspections and monthly treatment observations turn quality into coaching, not surveillance.' },
      ],
      ctaText: 'View the Spa & Wellness Playbook',
      ctaHref: '/en/playbooks/spa',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Spa & Wellness LuxOps',
      title: 'Les SOP spa relient préparation, parcours client et sécurité',
      intro:
        'Cet extrait est adapté des chapitres treatment room, parcours client et contrôle qualité. Les standards spa protègent à la fois l’expérience sensorielle et la sécurité du soin.',
      rows: [
        { term: 'Cabine prête', detail: 'Avant chaque soin : température, lumière, musique, parfum, linge, têtière, peignoir, chaussons, trolley et poubelle sont contrôlés.' },
        { term: 'Consultation', detail: 'Changements santé, contre-indications, préférence de pression et attentes sont confirmés avant le début du soin.' },
        { term: 'Conduite thérapeute', detail: 'Voix, mouvement, draping, transitions et communication sont maîtrisés car la proximité rend chaque détail visible.' },
        { term: 'Après-soin', detail: 'Effets personnels confirmés, fiche soin complétée, recommandation produit notée et statut cabine mis à jour.' },
        { term: 'Contrôle qualité', detail: 'Inspections quotidiennes pré-ouverture et observations mensuelles transforment la qualité en coaching, pas en surveillance.' },
      ],
      ctaText: 'Voir le Playbook Spa & Wellness',
      ctaHref: '/fr/playbooks/spa',
    },
  },
  'hotel-staff-training-service-standards': {
    en: {
      label: 'Playbook-based training excerpt',
      title: 'Train teams on procedures, not slogans',
      intro:
        'The strongest hotel training sessions use documented procedures as the spine. Teams practise the exact moments they face on shift: guest welcome, inspection, recovery, handover and escalation.',
      rows: [
        { term: 'Procedure walkthrough', detail: 'The trainer explains the operational trigger, the expected sequence and what good looks like in the guest experience.' },
        { term: 'Role practice', detail: 'Team members rehearse the moment using real hotel cases: late room, billing dispute, delayed order or complaint.' },
        { term: 'Supervisor observation', detail: 'Managers watch for timing, language, body position, handover discipline and decision quality.' },
        { term: 'Feedback loop', detail: 'Feedback is specific, immediate and linked to the standard, so the team knows exactly what to repeat or adjust.' },
        { term: 'Briefing reinforcement', detail: 'The same standard returns in shift briefings, checklist reviews and manager follow-up until it becomes normal behaviour.' },
      ],
      ctaText: 'View on-site hotel training',
      ctaHref: '/en/training',
    },
    fr: {
      label: 'Extrait formation basé sur les playbooks',
      title: 'Former les équipes sur des procédures, pas sur des slogans',
      intro:
        'Les meilleures formations hôtelières utilisent les procédures documentées comme colonne vertébrale. Les équipes pratiquent les moments exacts vécus en service : accueil, inspection, recovery, passation et escalade.',
      rows: [
        { term: 'Déroulé procédure', detail: 'Le formateur explique le déclencheur, la séquence attendue et ce que le client doit percevoir.' },
        { term: 'Mise en situation', detail: 'Les équipes répètent des cas réels : chambre tardive, litige facturation, commande retardée ou réclamation.' },
        { term: 'Observation manager', detail: 'Les managers observent timing, langage, posture, discipline de passation et qualité de décision.' },
        { term: 'Feedback', detail: 'Le retour est précis, immédiat et relié au standard pour savoir quoi répéter ou ajuster.' },
        { term: 'Renforcement briefing', detail: 'Le même standard revient en briefing, revue checklist et suivi manager jusqu’à devenir un réflexe.' },
      ],
      ctaText: 'Voir la formation hôtelière sur site',
      ctaHref: '/fr/formation',
    },
  },
  'hotel-staff-turnover-training': {
    en: {
      label: 'Playbook-based training excerpt',
      title: 'Procedure-based training reduces early friction',
      intro:
        'Turnover becomes more expensive when new hires learn through fragments. A playbook-based training system gives them the operating map before habits become inconsistent.',
      rows: [
        { term: 'First-week clarity', detail: 'New hires know the department’s core routines, quality gates, escalation points and vocabulary from the start.' },
        { term: 'Consistent coaching', detail: 'Supervisors coach from the same written standard instead of passing on personal preferences.' },
        { term: 'Fewer interruptions', detail: 'Basic questions move from repeated supervisor interruptions to documented references and structured practice.' },
        { term: 'Visible progress', detail: 'Managers can see which procedures are understood, observed and ready for independent execution.' },
        { term: 'Retention signal', detail: 'When expectations are clear, early stress drops and the new hire can feel progress instead of confusion.' },
      ],
      ctaText: 'View on-site hotel training',
      ctaHref: '/en/training',
    },
    fr: {
      label: 'Extrait formation basé sur les playbooks',
      title: 'La formation par procédures réduit la friction des débuts',
      intro:
        'Le turnover coûte plus cher quand les nouvelles recrues apprennent par fragments. Une formation basée sur les playbooks donne la carte opérationnelle avant que les habitudes ne divergent.',
      rows: [
        { term: 'Clarté semaine 1', detail: 'Les nouvelles recrues connaissent routines clés, contrôles qualité, escalades et vocabulaire du département dès le départ.' },
        { term: 'Coaching cohérent', detail: 'Les superviseurs coachent depuis le même standard écrit, pas depuis des préférences individuelles.' },
        { term: 'Moins d’interruptions', detail: 'Les questions de base basculent des interruptions répétées vers des références documentées et de la pratique structurée.' },
        { term: 'Progression visible', detail: 'Les managers voient quelles procédures sont comprises, observées et prêtes à être réalisées en autonomie.' },
        { term: 'Signal rétention', detail: 'Quand les attentes sont claires, le stress initial baisse et la recrue ressent une progression plutôt qu’une confusion.' },
      ],
      ctaText: 'Voir la formation hôtelière sur site',
      ctaHref: '/fr/formation',
    },
  },
  'hotel-new-hire-onboarding': {
    en: {
      label: 'Playbook-based onboarding excerpt',
      title: 'A 30/60/90 onboarding system needs documented standards',
      intro:
        'Hotel onboarding works when the first months are mapped to real operating standards. The playbooks give new hires a reference they can revisit after the first training session.',
      rows: [
        { term: 'Day 1', detail: 'Role expectations, grooming, guest language, safety rules, reporting lines and the department’s most important quality standards.' },
        { term: 'Week 1', detail: 'Shadowing around core procedures: opening, guest interaction, task sequence, checklist use and handover.' },
        { term: 'Week 2', detail: 'Supervised execution of repeatable tasks with immediate coaching against the written standard.' },
        { term: 'Day 30', detail: 'Manager check on confidence, gaps, procedure knowledge and any friction with tools or team rhythm.' },
        { term: 'Day 90', detail: 'Independence review: which standards are stable, which need coaching and which responsibilities can expand.' },
      ],
      ctaText: 'View on-site hotel training',
      ctaHref: '/en/training',
    },
    fr: {
      label: 'Extrait onboarding basé sur les playbooks',
      title: 'Un onboarding 30/60/90 jours a besoin de standards documentés',
      intro:
        'L’onboarding hôtelier fonctionne quand les premiers mois sont reliés aux vrais standards opérationnels. Les playbooks donnent aux recrues une référence à reprendre après la première formation.',
      rows: [
        { term: 'Jour 1', detail: 'Attentes du rôle, grooming, langage client, sécurité, lignes hiérarchiques et standards qualité essentiels du département.' },
        { term: 'Semaine 1', detail: 'Observation des procédures clés : ouverture, interaction client, séquence tâche, checklist et passation.' },
        { term: 'Semaine 2', detail: 'Exécution supervisée des tâches répétables avec coaching immédiat depuis le standard écrit.' },
        { term: 'Jour 30', detail: 'Point manager sur confiance, écarts, connaissance des procédures et frictions avec outils ou rythme équipe.' },
        { term: 'Jour 90', detail: 'Revue autonomie : standards acquis, points à coacher et responsabilités pouvant être élargies.' },
      ],
      ctaText: 'Voir la formation hôtelière sur site',
      ctaHref: '/fr/formation',
    },
  },
  'hotel-room-attendant-checklist': {
    en: {
      label: 'Free excerpt from the LuxOps Housekeeping Playbook',
      title: 'Room attendant checklist: the LuxOps daily sequence',
      intro: 'This extract is adapted from the room cleaning standards chapter. It links trolley setup, room entry, departure cleaning, stayover service and final self-inspection.',
      rows: [
        { term: 'Departure room', detail: '45-60 minutes for a standard room, following the 7-phase sequence before supervisor inspection.' },
        { term: 'Stayover', detail: '25-35 minutes, refresh without disturbing guest belongings or preferences.' },
        { term: 'DND', detail: 'Do not knock, do not enter, document and follow the property contact protocol.' },
        { term: 'Release rule', detail: 'Room attendant marks Clean; supervisor releases as Inspected.' },
      ],
      ctaText: 'View the Housekeeping Playbook',
      ctaHref: '/en/playbooks/hsk',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Housekeeping LuxOps',
      title: 'Checklist équipier d’étage : la séquence quotidienne LuxOps',
      intro: 'Cet extrait est adapté du chapitre Standards & procédures de nettoyage des chambres. Il relie chariot, entrée en chambre, chambre à blanc, recouche et auto-contrôle final.',
      rows: [
        { term: 'Chambre à blanc', detail: '45-60 minutes pour une chambre standard, avec séquence en 7 phases avant inspection gouvernante.' },
        { term: 'Recouche', detail: '25-35 minutes, rafraîchir la chambre sans déranger les affaires ni les préférences client.' },
        { term: 'DND', detail: 'Ne pas frapper, ne pas entrer, documenter et suivre le protocole de contact de l’établissement.' },
        { term: 'Libération', detail: 'L’équipier passe en Propre ; la gouvernante libère en Inspectée.' },
      ],
      ctaText: 'Voir le Playbook Housekeeping',
      ctaHref: '/fr/playbooks/hsk',
    },
  },
  'hotel-room-cleaning-checklist': {
    en: {
      label: 'Free excerpt from the LuxOps Housekeeping Playbook',
      title: 'Room cleaning sequence: the 7 phases that keep quality stable',
      intro: 'This extract is adapted from Chapter 2, Room Cleaning Standards & Procedures. It turns room cleaning into a repeatable operating flow for departure rooms and stayovers.',
      rows: [
        { term: 'Trolley first', detail: 'Stock linen, amenities, chemicals and colour-coded microfibres before leaving the pantry.' },
        { term: 'Entry protocol', detail: 'Knock, announce, wait, repeat, open partially and announce again before entering.' },
        { term: 'Departure room', detail: '45-60 minutes for a standard room, using the 7-phase sequence from assessment to final presentation.' },
        { term: 'Stayover', detail: '25-35 minutes, refresh the room without disturbing guest belongings or preferences.' },
        { term: 'Self-check', detail: 'The attendant stands at the doorway and inspects the room as the next guest would.' },
      ],
      ctaText: 'View the Housekeeping Playbook',
      ctaHref: '/en/playbooks/hsk',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Housekeeping LuxOps',
      title: 'Séquence de nettoyage de chambre : les 7 phases qui stabilisent la qualité',
      intro: 'Cet extrait est adapté du chapitre Standards & procédures de nettoyage des chambres. Il transforme le service de chambre en flux opérationnel répétable, aussi bien pour une chambre à blanc que pour une recouche.',
      rows: [
        { term: 'Chariot d’abord', detail: 'Préparer linge, amenities, produits et microfibres code couleur avant de quitter l’office.' },
        { term: 'Entrée chambre', detail: 'Frapper, annoncer, attendre, répéter, ouvrir partiellement puis annoncer à nouveau avant d’entrer.' },
        { term: 'Chambre à blanc', detail: '45-60 minutes pour une chambre standard, avec séquence en 7 phases jusqu’à la présentation finale.' },
        { term: 'Recouche', detail: '25-35 minutes, rafraîchir la chambre sans déranger les affaires ni préférences client.' },
        { term: 'Auto-contrôle', detail: 'Le Room Attendant se place à la porte et inspecte la chambre comme le prochain client.' },
      ],
      ctaText: 'Voir le Playbook Housekeeping',
      ctaHref: '/fr/playbooks/hsk',
    },
  },
  'hotel-housekeeping-supervisor-checklist': {
    en: {
      label: 'Free excerpt from the LuxOps Housekeeping Playbook',
      title: 'Supervisor inspection: Clean is not ready for sale',
      intro: 'This extract is adapted from Chapter 6, Quality Control & Inspections. It defines the control point between housekeeping and front desk room assignment.',
      rows: [
        { term: 'Clean', detail: 'Set by the Room Attendant after cleaning. The room is not sellable yet.' },
        { term: 'Inspected', detail: 'Set by the supervisor after physical checklist inspection. Front Office may assign it.' },
        { term: '100% departures', detail: 'Every departure room is inspected before release in high-standard properties.' },
        { term: '20-30% stayovers', detail: 'Stayover spot checks prioritise new attendants, VIPs, long stays and previous complaints.' },
        { term: '90/100 threshold', detail: 'LuxOps scoring uses Bathroom 35, Bedroom 35, Presentation 20 and Maintenance 10.' },
      ],
      ctaText: 'View the Housekeeping Playbook',
      ctaHref: '/en/playbooks/hsk',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Housekeeping LuxOps',
      title: 'Inspection gouvernante : Clean n’est pas attribuable',
      intro: 'Cet extrait est adapté du chapitre Contrôle Qualité & Inspections. Il définit le point de contrôle entre le service de housekeeping et l’attribution par la réception.',
      rows: [
        { term: 'Clean', detail: 'Statut posé par le Room Attendant après nettoyage. La chambre n’est pas encore vendable.' },
        { term: 'Inspected', detail: 'Statut posé par la gouvernante après inspection physique checklist. La réception peut attribuer.' },
        { term: '100% départs', detail: 'Chaque chambre départ est inspectée avant libération dans un établissement haut de gamme.' },
        { term: '20-30% recouches', detail: 'Les contrôles recouche priorisent nouveaux équipiers, VIP, longs séjours et réclamations.' },
        { term: 'Seuil 90/100', detail: 'Le score LuxOps répartit salle de bain 35, chambre 35, présentation 20 et maintenance 10.' },
      ],
      ctaText: 'Voir le Playbook Housekeeping',
      ctaHref: '/fr/playbooks/hsk',
    },
  },
  'hotel-bathroom-cleaning-sop': {
    en: {
      label: 'Free excerpt from the LuxOps Housekeeping Playbook',
      title: 'Bathroom SOP: clean to dirty, top to bottom',
      intro: 'This extract is adapted from the bathroom standards section of the room cleaning chapter. It gives attendants and supervisors the same sequence and inspection language.',
      rows: [
        { term: 'Mirror first', detail: 'Clean glass and mirrors with the dedicated cloth and check from several angles.' },
        { term: 'Vanity and chrome', detail: 'Clean basin, counter, drain and faucet, then dry-polish to remove water spots.' },
        { term: 'Shower or bath', detail: 'Remove soap residue, scale and hair from walls, fixtures, drain and floor.' },
        { term: 'Toilet last', detail: 'Exterior, seat, underside, bowl, under-rim, base and behind toilet are cleaned last.' },
        { term: 'Final rule', detail: 'No hair anywhere. Floor dry, amenities aligned, scent fresh and neutral.' },
      ],
      ctaText: 'View the Housekeeping Playbook',
      ctaHref: '/en/playbooks/hsk',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Housekeeping LuxOps',
      title: 'SOP de salle de bain : du propre vers le sale, du haut vers le bas',
      intro: 'Cet extrait est adapté de la section salle de bain du chapitre sur le nettoyage des chambres. Il donne aux Room Attendants et aux gouvernantes la même séquence et le même langage d’inspection.',
      rows: [
        { term: 'Miroir d’abord', detail: 'Nettoyer vitres et miroirs avec la microfibre dédiée puis vérifier sous plusieurs angles.' },
        { term: 'Vasque et chrome', detail: 'Nettoyer plan, bonde et robinetterie, puis lustrer pour supprimer les traces d’eau.' },
        { term: 'Douche ou baignoire', detail: 'Retirer savon, calcaire et cheveux des parois, robinetteries, bonde et sol.' },
        { term: 'Toilettes en dernier', detail: 'Extérieur, abattant, dessous, cuvette, sous-rebord, base et arrière sont nettoyés en dernier.' },
        { term: 'Règle finale', detail: 'Aucun cheveu. Sol sec, amenities alignés, odeur fraîche et neutre.' },
      ],
      ctaText: 'Voir le Playbook Housekeeping',
      ctaHref: '/fr/playbooks/hsk',
    },
  },
  'hotel-front-desk-checklist': {
    en: {
      label: 'Free excerpt from the LuxOps Front Office Playbook',
      title: 'Front desk checklist: what the shift must control',
      intro: 'This extract is adapted from the check-in, check-out and communication chapters. It turns front desk work into a shift control system.',
      rows: [
        { term: 'Opening', detail: 'Review arrivals, departures, VIPs, room status, open complaints and billing issues.' },
        { term: 'Check-in', detail: 'Confirm stay, ID, requests, payment or pre-authorisation, keys and PMS update.' },
        { term: 'Check-out', detail: 'Verify folio, process payment, close invoice and notify housekeeping.' },
        { term: 'Handover', detail: 'Log pending requests, complaints, room moves, billing issues and unusual decisions.' },
      ],
      ctaText: 'View the Front Office Playbook',
      ctaHref: '/en/playbooks/fo',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Front Office LuxOps',
      title: 'Checklist réception : ce que le shift doit contrôler',
      intro: 'Cet extrait est adapté des chapitres check-in, check-out et communication client. Il transforme la réception en système de contrôle du shift.',
      rows: [
        { term: 'Prise de poste', detail: 'Revoir arrivées, départs, VIP, statut chambres, réclamations ouvertes et litiges de facturation.' },
        { term: 'Check-in', detail: 'Confirmer séjour, identité, demandes, paiement ou Pre-Authorization, clés et mise à jour PMS.' },
        { term: 'Check-out', detail: 'Vérifier le folio, traiter le paiement, clôturer la facture et notifier le housekeeping.' },
        { term: 'Passation', detail: 'Tracer demandes en attente, réclamations, room moves, litiges facture et décisions inhabituelles.' },
      ],
      ctaText: 'Voir le Playbook Front Office',
      ctaHref: '/fr/playbooks/fo',
    },
  },
  'hotel-dnd-procedure': {
    en: {
      label: 'Free excerpt from the LuxOps Housekeeping Playbook',
      title: 'DND procedure: privacy first, safety always',
      intro: 'This extract is adapted from the DND protocol. The goal is to respect privacy while maintaining documentation, service continuity and safety awareness.',
      rows: [
        { term: 'Do not enter', detail: 'If DND is active, housekeeping does not knock and does not enter.' },
        { term: 'Contact time', detail: 'Attempt contact at the property-defined time, often around 2:00 PM for daytime service.' },
        { term: 'Door message', detail: 'Leave a discreet message if there is no answer, inviting the guest to request service.' },
        { term: '24 hours', detail: 'Extended DND triggers supervisor and duty manager escalation for a welfare check.' },
      ],
      ctaText: 'View the Housekeeping Playbook',
      ctaHref: '/en/playbooks/hsk',
    },
    fr: {
      label: 'Extrait gratuit du Playbook Housekeeping LuxOps',
      title: 'Procédure DND : vie privée d’abord, sécurité toujours',
      intro: 'Cet extrait est adapté du protocole DND. L’objectif est de respecter la tranquillité du client tout en maintenant documentation, continuité de service et vigilance sécurité.',
      rows: [
        { term: 'Ne pas entrer', detail: 'Si le DND est actif, le housekeeping ne frappe pas et n’entre pas.' },
        { term: 'Contact', detail: 'Tentative de contact à l’heure définie par l’établissement, souvent autour de 14h00 en journée.' },
        { term: 'Message', detail: 'Sans réponse, laisser un message discret sous la porte pour proposer le service.' },
        { term: '24 heures', detail: 'Un DND prolongé déclenche l’escalade superviseur et manager en duty pour contrôle sécurité.' },
      ],
      ctaText: 'Voir le Playbook Housekeeping',
      ctaHref: '/fr/playbooks/hsk',
    },
  },
}

const ARTICLE_PRODUCT_CTAS: Record<string, {
  en: {
    label: string
    title: string
    text: string
    primaryText: string
    primaryHref: string
    secondaryText: string
    secondaryHref: string
  }
  fr: {
    label: string
    title: string
    text: string
    primaryText: string
    primaryHref: string
    secondaryText: string
    secondaryHref: string
  }
}> = {
  'housekeeping-room-inspection': {
    en: {
      label: 'Housekeeping tools',
      title: 'Need a practical room inspection toolkit?',
      text: 'Use the inspection kit for ready-to-use control sheets, or the full playbook for the complete housekeeping SOP system.',
      primaryText: 'View the Housekeeping Inspection Kit',
      primaryHref: '/en/playbooks/hsk-starter-pack',
      secondaryText: 'View the Housekeeping Playbook',
      secondaryHref: '/en/playbooks/hsk',
    },
    fr: {
      label: 'Outils housekeeping',
      title: 'Besoin d’un kit pratique pour contrôler les chambres ?',
      text: 'Utilisez le kit inspection pour les feuilles de contrôle prêtes à l’emploi, ou le playbook complet pour toute la structure SOP du département.',
      primaryText: 'Voir le Kit Inspection Housekeeping',
      primaryHref: '/fr/playbooks/hsk-starter-pack',
      secondaryText: 'Voir le Playbook Housekeeping',
      secondaryHref: '/fr/playbooks/hsk',
    },
  },
  'hotel-standard-operating-procedures': {
    en: {
      label: 'Hotel SOP tools',
      title: 'Need SOP templates your team can actually use?',
      text: 'Start with focused starter packs for daily tools, or browse the full department playbooks for the complete SOP structure.',
      primaryText: 'View Starter Packs',
      primaryHref: '/en/playbooks#starter-packs',
      secondaryText: 'View SOP Playbooks',
      secondaryHref: '/en/playbooks#department-playbooks',
    },
    fr: {
      label: 'Outils SOP hôtel',
      title: 'Besoin de modèles SOP vraiment utilisables par vos équipes ?',
      text: 'Commencez avec des starter packs ciblés pour les outils du quotidien, ou consultez les playbooks complets par département.',
      primaryText: 'Voir les starter packs',
      primaryHref: '/fr/playbooks#starter-packs',
      secondaryText: 'Voir les playbooks SOP',
      secondaryHref: '/fr/playbooks#department-playbooks',
    },
  },
  'hotel-front-desk-procedures': {
    en: {
      label: 'Front Office tools',
      title: 'Need ready-to-use front desk procedures?',
      text: 'Start with practical templates for daily reception work, or go deeper with the complete Front Office Playbook.',
      primaryText: 'View the Front Office Starter Pack',
      primaryHref: '/en/playbooks/fo-starter-pack',
      secondaryText: 'View the Front Office Playbook',
      secondaryHref: '/en/playbooks/fo',
    },
    fr: {
      label: 'Outils Front Office',
      title: 'Besoin de procédures réception prêtes à utiliser ?',
      text: 'Commencez avec des modèles pratiques pour le quotidien de la réception, ou allez plus loin avec le Playbook Front Office complet.',
      primaryText: 'Voir le Starter Pack Front Office',
      primaryHref: '/fr/playbooks/fo-starter-pack',
      secondaryText: 'Voir le Playbook Front Office',
      secondaryHref: '/fr/playbooks/fo',
    },
  },
  'hotel-fb-service-standards': {
    en: {
      label: 'F&B tools',
      title: 'Need ready-to-use F&B service tools?',
      text: 'Start with practical restaurant, bar and room service checklists, or go deeper with the complete F&B Playbook.',
      primaryText: 'View the F&B Starter Pack',
      primaryHref: '/en/playbooks/fb-starter-pack',
      secondaryText: 'View the F&B Playbook',
      secondaryHref: '/en/playbooks/fb',
    },
    fr: {
      label: 'Outils F&B',
      title: 'Vous voulez des outils F&B prêts à utiliser sur le terrain ?',
      text: 'Le Starter Pack rassemble des checklists pratiques pour le restaurant, le bar et le room service. Le Playbook F&B complet va plus loin avec toute la structure SOP du département.',
      primaryText: 'Voir le Starter Pack F&B',
      primaryHref: '/fr/playbooks/fb-starter-pack',
      secondaryText: 'Voir le Playbook F&B',
      secondaryHref: '/fr/playbooks/fb',
    },
  },
  'hotel-fb-restaurant-procedures': {
    en: {
      label: 'Restaurant service tools',
      title: 'Need a practical restaurant service toolkit?',
      text: 'Use the F&B Starter Pack for opening, closing, briefing and recovery tools, or the full playbook for the complete SOP structure.',
      primaryText: 'View the F&B Starter Pack',
      primaryHref: '/en/playbooks/fb-starter-pack',
      secondaryText: 'View the F&B Playbook',
      secondaryHref: '/en/playbooks/fb',
    },
    fr: {
      label: 'Outils restaurant',
      title: 'Pour structurer le service restaurant sans repartir de zéro',
      text: 'Le Starter Pack F&B regroupe les outils d’ouverture, de fermeture, de briefing et de recovery. Le Playbook complet apporte ensuite toute la structure SOP du service restaurant.',
      primaryText: 'Voir le Starter Pack F&B',
      primaryHref: '/fr/playbooks/fb-starter-pack',
      secondaryText: 'Voir le Playbook F&B',
      secondaryHref: '/fr/playbooks/fb',
    },
  },
  'hotel-room-service-sops': {
    en: {
      label: 'Room service tools',
      title: 'Need a room service checklist your team can use today?',
      text: 'Use the F&B Starter Pack for room service controls, order taking, tray setup and recovery scripts, or the full playbook for the complete F&B SOP system.',
      primaryText: 'View the F&B Starter Pack',
      primaryHref: '/en/playbooks/fb-starter-pack',
      secondaryText: 'View the F&B Playbook',
      secondaryHref: '/en/playbooks/fb',
    },
    fr: {
      label: 'Outils room service',
      title: 'Pour fiabiliser le room service dès le prochain shift',
      text: 'Le Starter Pack F&B couvre les contrôles room service, la prise de commande, le dressage du plateau et les scripts de recovery. Le Playbook complet apporte la structure SOP F&B dans son ensemble.',
      primaryText: 'Voir le Starter Pack F&B',
      primaryHref: '/fr/playbooks/fb-starter-pack',
      secondaryText: 'Voir le Playbook F&B',
      secondaryHref: '/fr/playbooks/fb',
    },
  },
  'hotel-room-cleaning-checklist': {
    en: {
      label: 'Housekeeping tools',
      title: 'Need printable room cleaning tools?',
      text: 'Download the role-based housekeeping checklists, or use the inspection kit to standardise supervisor controls.',
      primaryText: 'Download printable checklists',
      primaryHref: '/en/hotel-housekeeping-checklist',
      secondaryText: 'View the Housekeeping Inspection Kit',
      secondaryHref: '/en/playbooks/hsk-starter-pack',
    },
    fr: {
      label: 'Outils housekeeping',
      title: 'Besoin de checklists de nettoyage de chambre imprimables ?',
      text: 'Téléchargez les checklists housekeeping par poste, ou utilisez le kit inspection pour standardiser les contrôles gouvernante.',
      primaryText: 'Télécharger les checklists',
      primaryHref: '/fr/hotel-housekeeping-checklist',
      secondaryText: 'Voir le Kit Inspection Housekeeping',
      secondaryHref: '/fr/playbooks/hsk-starter-pack',
    },
  },
}

function productCtaEventName(href: string) {
  if (href.includes('starter-pack')) return 'starter_pack_cta_clicked'
  if (href.includes('hotel-housekeeping-checklist')) return 'pdf_pack_cta_clicked'
  if (href.includes('free-hotel-procedures')) return 'free_chapter_cta_clicked'
  if (href.includes('playbooks')) return 'playbook_cta_clicked'
  return 'seo_cta_clicked'
}

export async function generateStaticParams() {
  const locales = ['en', 'fr']
  return articles.flatMap((article) =>
    locales.map((locale) => ({ locale, slug: article.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  const content = locale === 'en' ? article.en : article.fr
  const keywords = locale === 'en' ? KEYWORDS_EN[slug] : KEYWORDS_FR[slug]
  return {
    title: content.title + ' | LuxOps',
    description: content.description,
    ...(keywords && { keywords }),
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/blog/${slug}`,
      languages: {
        'en': `https://www.luxops.fr/en/blog/${slug}`,
        'fr': `https://www.luxops.fr/fr/blog/${slug}`,
        'x-default': `https://www.luxops.fr/en/blog/${slug}`,
      },
    },
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const isEn = locale === 'en'
  const content = isEn ? article.en : article.fr

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.description,
    datePublished: content.date,
    dateModified: content.date,
    url: `https://www.luxops.fr/${locale}/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.luxops.fr/${locale}/blog/${slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.luxops.fr/og-image.png',
      },
    },
    inLanguage: locale,
  }

  const faqJsonLd = content.faqs && content.faqs.length > 0
    ? buildFaqSchema(content.faqs)
    : null
  const breadcrumbs = breadcrumbSchema([
    { name: 'LuxOps', url: localizedPath(locale) },
    { name: isEn ? 'Blog' : 'Guides', url: localizedPath(locale, '/blog') },
    { name: content.title, url: localizedPath(locale, `/blog/${slug}`) },
  ])
  const upgrade = CONTENT_UPGRADES[slug]?.[isEn ? 'en' : 'fr']
  const playbookExcerpt = PLAYBOOK_EXCERPTS[slug]?.[isEn ? 'en' : 'fr']
  const productCta = ARTICLE_PRODUCT_CTAS[slug]?.[isEn ? 'en' : 'fr']

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-3xl mx-auto px-6">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#111111] transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              {isEn ? 'All articles' : 'Tous les articles'}
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock size={12} />
                {content.readTime}
              </span>
              <span className="text-xs text-gray-300">·</span>
              <span className="text-xs text-gray-400">{content.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
              {content.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">{content.intro}</p>
          </div>
        </section>

        {productCta && (
          <section className="py-10 bg-white border-b border-gray-100">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-3">
                {productCta.label}
              </p>
              <h2 className="text-2xl font-bold text-[#111111] mb-3">{productCta.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto mb-6">
                {productCta.text}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <TrackedLink
                  href={productCta.primaryHref}
                  eventName={productCtaEventName(productCta.primaryHref)}
                  eventProperties={{
                    source_page: `/${locale}/blog/${slug}`,
                    placement: 'article_intro_cta',
                    cta_label: productCta.primaryText,
                    cta_position: 'primary',
                    article_slug: slug,
                  }}
                  className="inline-flex min-w-[240px] items-center justify-center gap-2 rounded-lg bg-[#003d9b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#002d7a] transition-colors"
                >
                  {productCta.primaryText} <ArrowRight size={16} />
                </TrackedLink>
                <TrackedLink
                  href={productCta.secondaryHref}
                  eventName={productCtaEventName(productCta.secondaryHref)}
                  eventProperties={{
                    source_page: `/${locale}/blog/${slug}`,
                    placement: 'article_intro_cta',
                    cta_label: productCta.secondaryText,
                    cta_position: 'secondary',
                    article_slug: slug,
                  }}
                  className="inline-flex min-w-[240px] items-center justify-center gap-2 rounded-lg border border-[#003d9b] px-5 py-3 text-sm font-semibold text-[#003d9b] hover:bg-[#eef4ff] transition-colors"
                >
                  {productCta.secondaryText} <ArrowRight size={16} />
                </TrackedLink>
              </div>
            </div>
          </section>
        )}

        {/* Lead magnet - right after intro, before any H2 */}
        {(() => {
          const DEPT_MAP: Record<string, { titleEn: string; titleFr: string }> = {
            'housekeeping-room-inspection': {
              titleEn: 'Download a free chapter of the Housekeeping Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Housekeeping',
            },
            'hotel-room-attendant-checklist': {
              titleEn: 'Download a free chapter of the Housekeeping Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Housekeeping',
            },
            'hotel-room-cleaning-checklist': {
              titleEn: 'Download a free chapter of the Housekeeping Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Housekeeping',
            },
            'hotel-housekeeping-supervisor-checklist': {
              titleEn: 'Download a free chapter of the Housekeeping Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Housekeeping',
            },
            'hotel-bathroom-cleaning-sop': {
              titleEn: 'Download a free chapter of the Housekeeping Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Housekeeping',
            },
            'hotel-dnd-procedure': {
              titleEn: 'Download a free chapter of the Housekeeping Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Housekeeping',
            },
            'hotel-front-office-sop': {
              titleEn: 'Download a free chapter of the Front Office Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Réception',
            },
            'hotel-front-office-procedures': {
              titleEn: 'Download a free chapter of the Front Office Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Réception',
            },
            'hotel-front-desk-procedures': {
              titleEn: 'Download a free chapter of the Front Office Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Réception',
            },
          }
          const lm = DEPT_MAP[slug] ?? {
            titleEn: 'Download a free introductory chapter',
            titleFr: "Téléchargez un chapitre d'introduction gratuit",
          }
          return (
            <section
              className="py-10 border-t border-b"
              style={{ backgroundColor: '#eef4ff', borderColor: 'rgba(195,198,214,0.3)' }}
            >
              <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-2">
                    {isEn ? 'Free resource' : 'Ressource gratuite'}
                  </p>
                  <p className="font-bold text-[#0a1d2e] text-lg mb-1">
                    {isEn ? lm.titleEn : lm.titleFr}
                  </p>
                  <p className="text-sm text-[#4f6074]">
                    {isEn
                      ? 'See what structured hotel procedures look like in practice.'
                      : 'Découvrez à quoi ressemblent des procédures hôtelières structurées.'}
                  </p>
                </div>
                <Link
                  href={`/${locale}/free-hotel-procedures`}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm flex-shrink-0 hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem' }}
                >
                  {isEn ? 'Download free' : 'Télécharger gratuitement'} <ArrowRight size={16} />
                </Link>
              </div>
            </section>
          )
        })()}

        {/* Playbook excerpt - proof and CTA early in the read */}
        {playbookExcerpt && (
          <section className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-3xl mx-auto px-6">
              <div className="rounded-xl border border-[#d8e6f7] bg-[#f4f8ff] p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#003d9b] mb-3">
                  {playbookExcerpt.label}
                </p>
                <h2 className="text-2xl font-bold text-[#111111] mb-3">{playbookExcerpt.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{playbookExcerpt.intro}</p>
                <div className="divide-y divide-[#dbe8ff] rounded-lg overflow-hidden border border-[#dbe8ff] bg-white mb-6">
                  {playbookExcerpt.rows.map((row) => (
                    <div key={row.term} className="grid sm:grid-cols-[150px_1fr] gap-3 p-4">
                      <h3 className="font-semibold text-[#111111] text-sm">{row.term}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{row.detail}</p>
                    </div>
                  ))}
                </div>
                {!productCta && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={playbookExcerpt.ctaHref}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#003d9b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#002d7a] transition-colors"
                    >
                      {playbookExcerpt.ctaText} <ArrowRight size={16} />
                    </Link>
                    {playbookExcerpt.secondaryCtaText && playbookExcerpt.secondaryCtaHref && (
                      <Link
                        href={playbookExcerpt.secondaryCtaHref}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#003d9b] px-5 py-3 text-sm font-semibold text-[#003d9b] hover:bg-white transition-colors"
                      >
                        {playbookExcerpt.secondaryCtaText} <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Article body - all sections */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose-style">
              <nav className="mb-12 rounded-xl border border-gray-100 bg-gray-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  {isEn ? 'In this guide' : 'Dans ce guide'}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {content.sections.map((section) => (
                    <a key={section.h2} href={`#${section.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-sm font-medium text-[#111111] hover:underline">
                      {section.h2}
                    </a>
                  ))}
                </div>
              </nav>
              {content.sections.map((section, i) => (
                <div key={i} id={section.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-[#111111] mb-4">{section.h2}</h2>
                  {section.content && (
                    <p className="text-gray-500 leading-relaxed mb-6">{section.content}</p>
                  )}
                  {section.h3Items && (
                    <div className="space-y-6">
                      {section.h3Items.map((item, j) => (
                        <div key={j}>
                          <h3 className="text-lg font-semibold text-[#111111] mb-2">{item.heading}</h3>
                          <p className="text-gray-500 leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {upgrade && (
                <div className="mb-12 rounded-xl border border-[#dbe8ff] bg-[#f4f8ff] p-8">
                  <h2 className="text-2xl font-bold text-[#111111] mb-3">{upgrade.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{upgrade.intro}</p>
                  <div className="space-y-3">
                    {upgrade.items.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[#003d9b]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Conclusion */}
              <div className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed italic">{content.conclusion}</p>
              </div>

              {/* FAQ section */}
              {content.faqs && content.faqs.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#111111] mb-8">
                    {isEn ? 'Frequently Asked Questions' : 'Foire aux questions'}
                  </h2>
                  <div className="space-y-6">
                    {content.faqs.map((faq, i) => (
                      <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-[#111111] mb-2">{faq.question}</h3>
                        <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related resources */}
        {(() => {
          const RELATED: Record<string, { href: string; labelEn: string; labelFr: string; descEn: string; descFr: string }[]> = {
            'hotel-operations-playbook': [
              { href: '/hotel-sop', labelEn: 'Hotel SOP Templates', labelFr: 'Modèles SOP Hôtel', descEn: 'Complete standard operating procedures for every hotel department.', descFr: 'Procédures opérationnelles complètes pour chaque département hôtelier.' },
              { href: '/hotel-checklist', labelEn: 'Hotel Operational Checklists', labelFr: 'Checklists Opérationnelles Hôtel', descEn: 'What makes a hotel checklist actually useful in practice.', descFr: 'Ce qui rend une checklist hôtelière vraiment utile en pratique.' },
            ],
            'how-to-write-hotel-sops': [
              { href: '/hotel-sop', labelEn: 'Hotel SOP Templates', labelFr: 'Modèles SOP Hôtel', descEn: 'Complete standard operating procedures for every hotel department.', descFr: 'Procédures opérationnelles complètes pour chaque département hôtelier.' },
              { href: '/front-office-sop', labelEn: 'Front Office SOP', labelFr: 'SOP Réception Hôtel', descEn: 'Procedures built around how the front desk actually works.', descFr: 'Procédures construites autour du fonctionnement réel de la réception.' },
            ],
            'hotel-front-office-sop': [
              { href: '/front-office-sop', labelEn: 'Front Office SOP', labelFr: 'SOP Réception Hôtel', descEn: 'Procedures built around how the front desk actually works.', descFr: 'Procédures construites autour du fonctionnement réel de la réception.' },
              { href: '/hotel-checklist', labelEn: 'Hotel Operational Checklists', labelFr: 'Checklists Opérationnelles Hôtel', descEn: 'What makes a hotel checklist actually useful in practice.', descFr: 'Ce qui rend une checklist hôtelière vraiment utile en pratique.' },
            ],
            'hotel-housekeeping-checklist': [
              { href: '/hotel-housekeeping-checklist', labelEn: 'Housekeeping Checklists', labelFr: 'Checklists Housekeeping', descEn: 'Checklists by role and shift: trolley setup, room sequence, supervisor inspection, handover.', descFr: 'Checklists par rôle et service : chariot, remise en état, inspection superviseur, passation.' },
              { href: '/housekeeping-sop', labelEn: 'Housekeeping SOP', labelFr: 'SOP Housekeeping', descEn: 'The procedures behind every housekeeping checklist.', descFr: 'Les procédures derrière chaque checklist housekeeping.' },
            ],
            'hotel-fb-service-standards': [
              { href: '/hotel-fb-sop', labelEn: 'Hotel F&B SOP', labelFr: 'SOP F&B hôtel', descEn: 'The pillar guide for restaurant, bar, room service and service recovery procedures.', descFr: 'Le guide pilier pour procédures restaurant, bar, room service et recovery client.' },
              { href: '/playbooks/fb-starter-pack', labelEn: 'F&B Starter Pack', labelFr: 'Starter Pack F&B', descEn: 'Practical checklists, scripts and control tools for daily F&B service.', descFr: 'Checklists, scripts et outils de contrôle pour le service F&B quotidien.' },
            ],
            'hotel-fb-restaurant-procedures': [
              { href: '/hotel-fb-sop', labelEn: 'Hotel F&B SOP', labelFr: 'SOP F&B hôtel', descEn: 'The complete F&B SOP structure around service sequence, mise en place and controls.', descFr: 'La structure SOP F&B complète autour de la séquence de service, mise en place et contrôles.' },
              { href: '/playbooks/fb-starter-pack', labelEn: 'F&B Starter Pack', labelFr: 'Starter Pack F&B', descEn: 'Opening checklist, closing checklist, briefing template and recovery scripts.', descFr: 'Checklist ouverture, checklist fermeture, briefing et scripts recovery.' },
            ],
            'hotel-room-service-sops': [
              { href: '/hotel-fb-sop', labelEn: 'Hotel F&B SOP', labelFr: 'SOP F&B hôtel', descEn: 'Room service connected to the wider restaurant, bar and F&B control system.', descFr: 'Room service relié au système de contrôle restaurant, bar et F&B.' },
              { href: '/playbooks/fb-starter-pack', labelEn: 'F&B Starter Pack', labelFr: 'Starter Pack F&B', descEn: 'Room service checklist, guest recovery scripts and service control tools.', descFr: 'Checklist room service, scripts recovery et outils de contrôle de service.' },
            ],
            'hotel-front-office-procedures': [
              { href: '/front-office-sop', labelEn: 'Front Office SOP', labelFr: 'SOP Réception Hôtel', descEn: 'Procedures built around how the front desk actually works.', descFr: 'Procédures construites autour du fonctionnement réel de la réception.' },
              { href: '/hotel-checklist', labelEn: 'Hotel Operational Checklists', labelFr: 'Checklists Opérationnelles Hôtel', descEn: 'What makes a hotel checklist actually useful in practice.', descFr: 'Ce qui rend une checklist hôtelière vraiment utile en pratique.' },
            ],
            'housekeeping-room-inspection': [
              { href: '/housekeeping-sop', labelEn: 'Housekeeping SOP Templates', labelFr: 'Procédures housekeeping', descEn: 'The procedures behind every room inspection, from trolley setup to supervisor sign-off.', descFr: 'Les procédures derrière chaque inspection de chambre, du chariot à la validation superviseur.' },
              { href: '/hotel-housekeeping-checklist', labelEn: 'Housekeeping Checklists', labelFr: 'Checklists housekeeping', descEn: 'Checklists by role and shift: room attendant, supervisor inspection, handover.', descFr: 'Checklists par rôle et service : équipier, inspection superviseur, passation.' },
            ],
            'hotel-room-attendant-checklist': [
              { href: '/hotel-housekeeping-checklist', labelEn: 'Housekeeping Checklist', labelFr: 'Checklist housekeeping', descEn: 'The full checklist system for room attendants and supervisors.', descFr: 'Le système complet de checklists pour équipiers et gouvernantes.' },
              { href: '/housekeeping-sop', labelEn: 'Housekeeping SOP', labelFr: 'SOP Housekeeping', descEn: 'The procedures behind daily room cleaning and inspection.', descFr: 'Les procédures derrière la remise en état et l’inspection.' },
            ],
            'hotel-room-cleaning-checklist': [
              { href: '/hotel-housekeeping-checklist', labelEn: 'Hotel Housekeeping Checklist', labelFr: 'Checklist pour le service de housekeeping', descEn: 'Role-based checklists for room attendants and supervisors.', descFr: 'Checklists par rôle pour Room Attendants et gouvernantes.' },
              { href: '/housekeeping-sop', labelEn: 'Housekeeping SOP', labelFr: 'SOP Housekeeping', descEn: 'The procedures behind room cleaning, inspection and handover.', descFr: 'Les procédures derrière nettoyage chambre, inspection et passation.' },
            ],
            'hotel-housekeeping-supervisor-checklist': [
              { href: '/hotel-housekeeping-checklist', labelEn: 'Housekeeping Checklists', labelFr: 'Checklists pour le service de housekeeping', descEn: 'Room attendant, supervisor, inspection and quality scoring checklists.', descFr: 'Checklists Room Attendant, gouvernante, inspection et score qualité.' },
              { href: '/blog/housekeeping-room-inspection', labelEn: 'Room Inspection Checklist', labelFr: 'Checklist inspection chambre', descEn: 'A deeper room inspection framework for quality control.', descFr: 'Un cadre d’inspection chambre plus détaillé pour le contrôle qualité.' },
            ],
            'hotel-bathroom-cleaning-sop': [
              { href: '/blog/hotel-room-cleaning-checklist', labelEn: 'Hotel Room Cleaning Checklist', labelFr: 'Checklist de nettoyage de chambre d’hôtel', descEn: 'The complete room cleaning sequence around the bathroom SOP.', descFr: 'La séquence chambre complète autour de la SOP salle de bain.' },
              { href: '/housekeeping-sop', labelEn: 'Housekeeping SOP', labelFr: 'SOP Housekeeping', descEn: 'The procedure library behind consistent housekeeping operations.', descFr: 'La bibliothèque de procédures derrière un housekeeping constant.' },
            ],
            'hotel-front-desk-checklist': [
              { href: '/front-office-sop', labelEn: 'Front Office SOP', labelFr: 'SOP Réception Hôtel', descEn: 'Reception, check-in, billing, handover and night audit procedures.', descFr: 'Accueil, check-in, facturation, passation et audit de nuit.' },
              { href: '/hotel-front-office-checklist', labelEn: 'Front Office Checklist', labelFr: 'Checklist Réception Hôtel', descEn: 'Shift opening, check-in, handover and quality scoring.', descFr: 'Prise de poste, check-in, passation et contrôle qualité.' },
            ],
            'hotel-dnd-procedure': [
              { href: '/hotel-housekeeping-checklist', labelEn: 'Housekeeping Checklist', labelFr: 'Checklist housekeeping', descEn: 'The full housekeeping checklist and room release flow.', descFr: 'La checklist housekeeping complète et le flux de libération chambre.' },
              { href: '/housekeeping-sop', labelEn: 'Housekeeping SOP', labelFr: 'SOP Housekeeping', descEn: 'Operational procedures for room attendants and supervisors.', descFr: 'Procédures opérationnelles pour équipiers et gouvernantes.' },
            ],
            'hotel-staff-turnover-training': [
              { href: '/training', labelEn: 'On-property training', labelFr: 'Formation sur site', descEn: 'Structured training formats built around your actual procedures and service standards.', descFr: 'Formats de formation structurés autour de vos propres procédures et standards de service.' },
              { href: '/hotel-sop', labelEn: 'Hotel SOP templates', labelFr: 'Modèles SOP hôtel', descEn: 'The documented procedures that give your team a consistent standard to work from.', descFr: 'Les procédures documentées qui donnent à vos équipes un référentiel commun.' },
            ],
            'hotel-new-hire-onboarding': [
              { href: '/training', labelEn: 'On-property training', labelFr: 'Formation sur site', descEn: 'Build the structured onboarding system your new hires need to stay past 90 days.', descFr: "Construisez le système d'onboarding structuré dont vos nouvelles recrues ont besoin pour rester au-delà de 90 jours." },
              { href: '/hotel-sop', labelEn: 'Hotel SOP templates', labelFr: 'Modèles SOP hôtel', descEn: 'The written procedures library every new hire should have access to from day one.', descFr: 'La bibliothèque de procédures écrites que chaque nouvelle recrue devrait pouvoir consulter dès le premier jour.' },
            ],
          }
          const links = RELATED[slug]
          if (!links) return null
          return (
            <section className="py-12 bg-gray-50 border-t border-gray-100">
              <div className="max-w-3xl mx-auto px-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                  {isEn ? 'Related resources' : 'Ressources associées'}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {links.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${locale}${item.href}`}
                      className="group block border border-gray-200 rounded-xl p-5 bg-white hover:border-[#1A2E44] hover:shadow-sm transition-all"
                    >
                      <p className="font-semibold text-[#111111] group-hover:underline text-sm mb-1">
                        {isEn ? item.labelEn : item.labelFr}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {isEn ? item.descEn : item.descFr}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )
        })()}

        {/* CTA */}
        <section className="py-16 bg-[#111111]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              {isEn ? 'Ready to structure your operations?' : 'Prêt à structurer vos opérations ?'}
            </h2>
            <Link
              href={`/${locale}${content.cta.href.replace('/en', '').replace('/fr', '')}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111111] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              {content.cta.text} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

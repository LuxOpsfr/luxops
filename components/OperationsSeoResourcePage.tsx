import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  ListChecks,
  ShieldCheck,
} from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import { breadcrumbSchema, faqSchema, localizedPath } from '@/lib/seo'

type Locale = 'en' | 'fr'
export type OperationsResourceKind =
  | 'frontDeskHandover'
  | 'guestComplaint'
  | 'hskDeepCleaning'
  | 'breakfastService'
  | 'roomStatusDiscrepancy'

type Faq = {
  question: string
  answer: string
}

type Step = {
  title: string
  body: string
}

type ChecklistBlock = {
  title: string
  items: string[]
}

type RelatedLink = {
  href: string
  label: string
  text: string
}

type ProductLink = {
  title: string
  body: string
  href: string
  cta: string
  eventName: string
}

type ResourceContent = {
  slug: string
  alternateSlug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string
  eyebrow: string
  h1: string
  subtitle: string
  sourceNote: string
  sourceDetail: string
  sectionLabel: string
  sectionTitle: string
  sectionIntro: string
  steps: Step[]
  checklistTitle: string
  checklistIntro: string
  checklistBlocks: ChecklistBlock[]
  product: ProductLink
  playbook: ProductLink
  relatedTitle: string
  relatedText: string
  relatedLinks: RelatedLink[]
  faqs: Faq[]
  finalTitle: string
  finalText: string
}

const CONTENT: Record<OperationsResourceKind, Record<Locale, ResourceContent>> = {
  frontDeskHandover: {
    en: {
      slug: '/front-desk-shift-handover-template',
      alternateSlug: '/modele-passation-reception',
      title: 'Front Desk Shift Handover Template',
      metaTitle: 'Front Desk Shift Handover Template | LuxOps',
      metaDescription:
        'A practical front desk shift handover template for reception teams: arrivals, departures, VIPs, billing, complaints, traces and pending guest requests.',
      keywords:
        'front desk shift handover template, hotel reception handover, front office shift handover, hotel front desk checklist, reception shift checklist',
      eyebrow: 'Front Office handover',
      h1: 'Front Desk Shift Handover Template',
      subtitle:
        'A practical structure for reception teams to transfer pending arrivals, departures, guest requests, billing follow-up and sensitive cases without losing information between shifts.',
      sourceNote:
        'Built from the handover logic used in the LuxOps Front Office Starter Pack and Front Office Playbook.',
      sourceDetail:
        'The full paid resources include editable handover templates, check-in and check-out SOPs, guest communication scripts and the wider Front Office operating reference.',
      sectionLabel: 'Shift control',
      sectionTitle: 'What a front desk handover must capture',
      sectionIntro:
        'The purpose of the handover is not to tell the next team everything that happened. It is to transfer what still matters for guest experience, billing accuracy and operational continuity.',
      steps: [
        {
          title: 'Start with the live room situation',
          body:
            'Confirm remaining arrivals, departures not yet closed, room moves, out of order rooms, early check-ins and late check-outs. The next shift must understand what can still change during the day.',
        },
        {
          title: 'Separate guest requests from internal notes',
          body:
            'A guest request needs an owner, a deadline and a status. Internal notes are useful context, but they should not hide actions that still need to be completed.',
        },
        {
          title: 'Make billing visible before checkout',
          body:
            'Open balances, missing guarantees, declined cards, disputes, deposits and corrections should be transferred clearly. Billing issues left vague usually become checkout complaints.',
        },
        {
          title: 'Escalate sensitive cases explicitly',
          body:
            'Complaints, VIP expectations, compensation decisions and service recovery actions must be named directly. A sensitive case should not be buried in a general shift note.',
        },
      ],
      checklistTitle: 'Handover sections to include',
      checklistIntro:
        'Use this structure as the basis for a written handover at each shift change.',
      checklistBlocks: [
        {
          title: 'Guest movement',
          items: [
            'Expected arrivals, late arrivals and no-show risk',
            'Departures not yet completed',
            'Room moves, early arrivals and late departures',
            'VIPs, repeat guests and special attention guests',
          ],
        },
        {
          title: 'Operational follow-up',
          items: [
            'Pending traces and guest requests',
            'Open complaints and recovery actions',
            'Wake-up calls, transport requests and luggage storage',
            'Maintenance issues affecting guests or room readiness',
          ],
        },
        {
          title: 'Billing and cashiering',
          items: [
            'High balances and missing payment guarantees',
            'Deposits, pre-authorizations and declined cards',
            'Open folio corrections and disputed charges',
            'Cash float discrepancy and payment terminal issue',
          ],
        },
        {
          title: 'Sign-off',
          items: [
            'Name of outgoing team member',
            'Name of incoming team member',
            'Time of handover',
            'Supervisor validation when required',
          ],
        },
      ],
      product: {
        title: 'Front Office Starter Pack',
        body:
          'Use the Starter Pack when you need editable checklists, a handover template, complaint scripts and practical front desk tools for daily use.',
        href: '/playbooks/fo-starter-pack',
        cta: 'View Front Office Starter Pack',
        eventName: 'fo_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Full Front Office Playbook',
        body:
          'Use the full playbook when you need the complete SOP reference for check-in, check-out, guest communication, billing, night audit, concierge and management routines.',
        href: '/playbooks/fo',
        cta: 'View Front Office Playbook',
        eventName: 'fo_playbook_cta_clicked',
      },
      relatedTitle: 'Continue with Front Office procedures',
      relatedText:
        'These linked pages keep the Front Office cluster connected around daily reception work, checklist use and night audit controls.',
      relatedLinks: [
        {
          href: '/hotel-front-office-checklist',
          label: 'Front Office Checklist',
          text: 'Daily reception checklist for opening, live shift controls and handover.',
        },
        {
          href: '/hotel-night-audit-checklist',
          label: 'Night Audit Checklist',
          text: 'Night audit controls for billing, reports, room status and daily closure.',
        },
        {
          href: '/front-office-sop',
          label: 'Front Office SOP',
          text: 'Central page for Front Office SOPs, starter pack and playbook links.',
        },
      ],
      faqs: [
        {
          question: 'What should be included in a front desk shift handover?',
          answer:
            'A front desk handover should include pending arrivals, departures, VIPs, guest requests, open complaints, billing issues, room moves, wake-up calls, transport requests and any sensitive case that needs supervisor attention.',
        },
        {
          question: 'Should the handover be written or verbal?',
          answer:
            'It should be written first and then reviewed verbally when the incoming shift arrives. A verbal handover alone depends too much on memory and often loses billing, complaint or follow-up details.',
        },
        {
          question: 'Who validates the handover?',
          answer:
            'In a structured reception operation, the outgoing agent prepares the handover and the incoming agent confirms it. A supervisor or duty manager should validate sensitive cases, cashiering discrepancies and unresolved complaints.',
        },
      ],
      finalTitle: 'Turn handovers into a reliable front desk routine',
      finalText:
        'Start with a simple template, then move to editable tools and the full SOP reference when the team needs a complete Front Office structure.',
    },
    fr: {
      slug: '/modele-passation-reception',
      alternateSlug: '/front-desk-shift-handover-template',
      title: 'Modèle de passation réception',
      metaTitle: 'Modèle de passation réception | LuxOps',
      metaDescription:
        'Modèle pratique de passation réception : arrivées, départs, VIP, facturation, réclamations, traces PMS et demandes clients en attente.',
      keywords:
        'modèle passation réception, passation réception hôtel, passation front office, checklist réception, fiche passation réception',
      eyebrow: 'Passation réception',
      h1: 'Modèle de passation réception',
      subtitle:
        'Une structure simple pour transmettre les arrivées, départs, demandes clients, suivis de facturation et dossiers sensibles sans perdre d’information entre deux shifts.',
      sourceNote:
        'Construit à partir de la logique de passation utilisée dans le Starter Pack Front Office et le Playbook Front Office LuxOps.',
      sourceDetail:
        'Les ressources complètes incluent les modèles modifiables de passation, les SOP check-in et check-out, les scripts de communication client et toute la référence opérationnelle Front Office.',
      sectionLabel: 'Contrôle de shift',
      sectionTitle: 'Ce qu’une passation réception doit vraiment transmettre',
      sectionIntro:
        'La passation ne sert pas à raconter tout ce qui s’est passé. Elle sert à transmettre ce qui reste important pour l’expérience client, la facturation et la continuité opérationnelle.',
      steps: [
        {
          title: 'Commencer par la situation chambres',
          body:
            'Confirmer les arrivées restantes, les départs non clôturés, les room moves, les chambres hors service, les early check-ins et les late check-outs. Le shift suivant doit comprendre ce qui peut encore évoluer.',
        },
        {
          title: 'Séparer les demandes clients des notes internes',
          body:
            'Une demande client doit avoir un responsable, une échéance et un statut. Les notes internes donnent du contexte, mais elles ne doivent pas masquer les actions qui restent à faire.',
        },
        {
          title: 'Rendre la facturation visible avant le départ',
          body:
            'Soldes élevés, garanties manquantes, cartes refusées, litiges, dépôts et corrections doivent être transmis clairement. Les points flous deviennent souvent des réclamations au check-out.',
        },
        {
          title: 'Nommer clairement les dossiers sensibles',
          body:
            'Réclamations, attentes VIP, décisions de compensation et actions de recovery doivent être indiquées directement. Un dossier sensible ne doit pas être noyé dans une note générale.',
        },
      ],
      checklistTitle: 'Rubriques à inclure dans la passation',
      checklistIntro:
        'Cette structure peut servir de base pour une fiche de passation écrite à chaque changement de shift.',
      checklistBlocks: [
        {
          title: 'Mouvements clients',
          items: [
            'Arrivées attendues, arrivées tardives et risque de no-show',
            'Départs non finalisés',
            'Room moves, early arrivals et late departures',
            'VIP, repeat guests et clients nécessitant une attention particulière',
          ],
        },
        {
          title: 'Suivi opérationnel',
          items: [
            'Traces PMS et demandes clients en attente',
            'Réclamations ouvertes et actions de recovery',
            'Wake-up calls, demandes de transport et bagagerie',
            'Problèmes techniques impactant un client ou une chambre',
          ],
        },
        {
          title: 'Facturation et caisse',
          items: [
            'Soldes élevés et garanties de paiement manquantes',
            'Dépôts, Pre-Authorizations et cartes refusées',
            'Corrections de facture ouvertes et charges contestées',
            'Écart de caisse ou problème de terminal de paiement',
          ],
        },
        {
          title: 'Validation',
          items: [
            'Nom du collaborateur sortant',
            'Nom du collaborateur entrant',
            'Heure de passation',
            'Validation superviseur lorsque nécessaire',
          ],
        },
      ],
      product: {
        title: 'Starter Pack Front Office',
        body:
          'Utilisez le Starter Pack si vous avez besoin de checklists modifiables, d’un modèle de passation, de scripts réclamation et d’outils réception utilisables au quotidien.',
        href: '/playbooks/fo-starter-pack',
        cta: 'Voir le Starter Pack Front Office',
        eventName: 'fo_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Playbook Front Office complet',
        body:
          'Utilisez le playbook complet si vous avez besoin de toute la référence SOP pour le check-in, le check-out, la communication client, la facturation, le night audit, la conciergerie et le management.',
        href: '/playbooks/fo',
        cta: 'Voir le Playbook Front Office',
        eventName: 'fo_playbook_cta_clicked',
      },
      relatedTitle: 'Continuer avec les procédures Front Office',
      relatedText:
        'Ces pages relient le cluster Front Office autour du travail réception, des checklists quotidiennes et des contrôles night audit.',
      relatedLinks: [
        {
          href: '/hotel-front-office-checklist',
          label: 'Checklist réception',
          text: 'Checklist quotidienne pour ouverture de shift, contrôles en service et passation.',
        },
        {
          href: '/hotel-night-audit-checklist',
          label: 'Checklist night audit',
          text: 'Contrôles night audit pour facturation, rapports, statuts chambres et clôture.',
        },
        {
          href: '/front-office-sop',
          label: 'SOP Front Office',
          text: 'Page centrale pour les SOP Front Office, le starter pack et le playbook.',
        },
      ],
      faqs: [
        {
          question: 'Que doit contenir une passation réception ?',
          answer:
            'Une passation réception doit contenir les arrivées en attente, les départs, VIP, demandes clients, réclamations ouvertes, points de facturation, room moves, wake-up calls, transports et tout dossier sensible à suivre.',
        },
        {
          question: 'La passation doit-elle être écrite ou orale ?',
          answer:
            'Elle doit d’abord être écrite, puis reprise oralement avec le shift entrant. Une passation seulement orale dépend trop de la mémoire et fait souvent perdre des informations de facturation, réclamation ou suivi client.',
        },
        {
          question: 'Qui valide la passation ?',
          answer:
            'Le collaborateur sortant prépare la passation et le collaborateur entrant la confirme. Un superviseur ou manager de duty doit valider les dossiers sensibles, les écarts de caisse et les réclamations non résolues.',
        },
      ],
      finalTitle: 'Transformer la passation en vrai rituel de réception',
      finalText:
        'Commencez avec une structure simple, puis passez aux outils modifiables et à la référence SOP complète si l’équipe a besoin d’un cadre Front Office plus complet.',
    },
  },
  guestComplaint: {
    en: {
      slug: '/guest-complaint-handling-sop',
      alternateSlug: '/procedure-reclamation-client',
      title: 'Guest Complaint Handling SOP',
      metaTitle: 'Guest Complaint Handling SOP for Hotels | LuxOps',
      metaDescription:
        'A practical guest complaint handling SOP for hotel teams: listen, clarify, log, recover, follow up and close the loop without losing ownership.',
      keywords:
        'guest complaint handling SOP, hotel complaint procedure, hotel service recovery, guest complaint script, front office complaint handling',
      eyebrow: 'Guest recovery',
      h1: 'Guest Complaint Handling SOP',
      subtitle:
        'A clear method for handling guest complaints with ownership, calm communication, service recovery and proper follow-up between teams.',
      sourceNote:
        'Adapted from the complaint handling and guest communication logic used in the LuxOps Front Office Playbook.',
      sourceDetail:
        'The paid Front Office resources include complaint scripts, escalation rules, handover templates and full guest communication standards.',
      sectionLabel: 'Service recovery',
      sectionTitle: 'A complaint needs ownership before compensation',
      sectionIntro:
        'The first risk in complaint handling is not the compensation amount. It is the guest having to repeat the issue because nobody clearly owns the case.',
      steps: [
        {
          title: 'Listen without defending the operation',
          body:
            'Let the guest explain the issue fully. Do not interrupt with explanations about occupancy, staffing, systems or internal constraints. The first response should show that the complaint has been heard.',
        },
        {
          title: 'Clarify the impact and urgency',
          body:
            'Confirm what happened, when it happened, who is affected and what the guest needs now. A noisy room, billing error and missed wake-up call do not require the same timing or escalation.',
        },
        {
          title: 'Own the next action',
          body:
            'One person must take ownership, even if another department needs to solve the issue. The guest should know who is following up and when they will hear back.',
        },
        {
          title: 'Close the loop after recovery',
          body:
            'A complaint is not closed when a solution is sent. It is closed when the guest confirms the issue has been resolved or the manager has made the final decision.',
        },
      ],
      checklistTitle: 'Complaint handling checklist',
      checklistIntro:
        'This checklist keeps the team focused on facts, guest impact, ownership and follow-up.',
      checklistBlocks: [
        {
          title: 'Listen and acknowledge',
          items: [
            'Stop other tasks and give the guest full attention',
            'Use a calm tone and acknowledge the inconvenience',
            'Avoid blaming another department or colleague',
            'Thank the guest for raising the issue',
          ],
        },
        {
          title: 'Clarify and log',
          items: [
            'Confirm room number, guest name and contact preference',
            'Clarify time, location and impact of the issue',
            'Log the case in PMS or the guest request tracker',
            'Assign an owner and a follow-up time',
          ],
        },
        {
          title: 'Recover',
          items: [
            'Fix the operational issue first when possible',
            'Offer options when the solution is not immediate',
            'Escalate compensation decisions when required',
            'Inform affected departments before the guest has to repeat the story',
          ],
        },
        {
          title: 'Follow up',
          items: [
            'Contact the guest within the promised timing',
            'Confirm the issue is resolved or explain the next step',
            'Update the handover if the case remains open',
            'Close the case only after final confirmation',
          ],
        },
      ],
      product: {
        title: 'Front Office Starter Pack',
        body:
          'Includes guest communication scripts, complaint handling tools, handover templates and practical reception checklists.',
        href: '/playbooks/fo-starter-pack',
        cta: 'View Front Office Starter Pack',
        eventName: 'fo_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Front Office Playbook',
        body:
          'Use the full playbook for the complete guest journey, communication standards, escalation logic and department SOP reference.',
        href: '/playbooks/fo',
        cta: 'View Front Office Playbook',
        eventName: 'fo_playbook_cta_clicked',
      },
      relatedTitle: 'Related service standards',
      relatedText:
        'Complaint handling connects naturally with reception checklists, handovers and service standards training.',
      relatedLinks: [
        {
          href: '/front-desk-shift-handover-template',
          label: 'Shift Handover Template',
          text: 'Make sure open complaints are transferred clearly between shifts.',
        },
        {
          href: '/hotel-front-office-checklist',
          label: 'Front Office Checklist',
          text: 'Keep the reception team aligned before, during and after the shift.',
        },
        {
          href: '/training',
          label: 'Service Standards Training',
          text: 'Train teams on posture, guest communication and recovery routines.',
        },
      ],
      faqs: [
        {
          question: 'What is a guest complaint handling SOP?',
          answer:
            'It is a written procedure that defines how a team receives, logs, escalates, resolves and follows up on guest complaints. It reduces improvisation and makes ownership clear.',
        },
        {
          question: 'Should every complaint be compensated?',
          answer:
            'No. Compensation is only one possible recovery action. The first priority is to understand the impact, fix the operational issue and communicate clearly. Compensation should follow the property policy.',
        },
        {
          question: 'Who should own a guest complaint?',
          answer:
            'The person receiving the complaint can own the follow-up, but serious cases should be escalated to the supervisor or duty manager. Ownership must be clear to the guest and to the team.',
        },
      ],
      finalTitle: 'Make complaint handling consistent across shifts',
      finalText:
        'Use the starter pack for scripts and daily tools, then move to the complete Front Office Playbook when the team needs the full guest journey reference.',
    },
    fr: {
      slug: '/procedure-reclamation-client',
      alternateSlug: '/guest-complaint-handling-sop',
      title: 'Procédure réclamation client',
      metaTitle: 'Procédure réclamation client | LuxOps',
      metaDescription:
        'Procédure pratique pour gérer une réclamation client : écouter, clarifier, tracer, corriger, suivre et clôturer le dossier sans perdre la responsabilité.',
      keywords:
        'procédure réclamation client hôtel, gestion réclamation client, service recovery hôtel, traitement plainte client, script réclamation réception',
      eyebrow: 'Recovery client',
      h1: 'Procédure réclamation client',
      subtitle:
        'Une méthode claire pour traiter les réclamations avec responsabilité, communication calme, action corrective et suivi entre les services.',
      sourceNote:
        'Adaptée des standards de communication client et de gestion des réclamations du Playbook Front Office LuxOps.',
      sourceDetail:
        'Les ressources Front Office complètes incluent des scripts réclamation, règles d’escalade, modèles de passation et standards de communication client.',
      sectionLabel: 'Service recovery',
      sectionTitle: 'Une réclamation a besoin d’un responsable avant une compensation',
      sectionIntro:
        'Le premier risque dans une réclamation n’est pas le montant du geste commercial. C’est que le client doive répéter son problème parce que personne ne suit réellement le dossier.',
      steps: [
        {
          title: 'Écouter sans défendre l’organisation',
          body:
            'Laisser le client expliquer le problème entièrement. Ne pas interrompre avec des explications sur l’occupation, les effectifs, les systèmes ou les contraintes internes. La première réponse doit montrer que la réclamation est entendue.',
        },
        {
          title: 'Clarifier l’impact et l’urgence',
          body:
            'Confirmer ce qui s’est passé, quand, qui est concerné et ce dont le client a besoin maintenant. Une chambre bruyante, une erreur de facturation et un wake-up call manqué ne se traitent pas avec le même timing.',
        },
        {
          title: 'Prendre la responsabilité de la prochaine action',
          body:
            'Une personne doit porter le suivi, même si un autre service doit résoudre le problème. Le client doit savoir qui revient vers lui et dans quel délai.',
        },
        {
          title: 'Clôturer après vérification',
          body:
            'Une réclamation n’est pas clôturée quand une solution est envoyée. Elle est clôturée lorsque le client confirme que le problème est résolu ou que le manager a pris la décision finale.',
        },
      ],
      checklistTitle: 'Checklist de traitement réclamation',
      checklistIntro:
        'Cette structure aide l’équipe à rester concentrée sur les faits, l’impact client, la responsabilité et le suivi.',
      checklistBlocks: [
        {
          title: 'Écouter et reconnaître',
          items: [
            'Interrompre les autres tâches et donner toute son attention au client',
            'Utiliser un ton calme et reconnaître le désagrément',
            'Éviter de blâmer un autre service ou un collègue',
            'Remercier le client d’avoir signalé le problème',
          ],
        },
        {
          title: 'Clarifier et tracer',
          items: [
            'Confirmer nom du client, numéro de chambre et canal de contact souhaité',
            'Clarifier l’heure, le lieu et l’impact du problème',
            'Consigner le dossier dans le PMS ou le tracker de demandes client',
            'Attribuer un responsable et un délai de suivi',
          ],
        },
        {
          title: 'Corriger',
          items: [
            'Résoudre d’abord le problème opérationnel quand c’est possible',
            'Proposer des options si la solution n’est pas immédiate',
            'Escalader les décisions de compensation lorsque nécessaire',
            'Informer les services concernés avant que le client ait à répéter son histoire',
          ],
        },
        {
          title: 'Suivre',
          items: [
            'Recontacter le client dans le délai annoncé',
            'Confirmer que le problème est résolu ou expliquer la prochaine étape',
            'Mettre à jour la passation si le dossier reste ouvert',
            'Clôturer uniquement après confirmation finale',
          ],
        },
      ],
      product: {
        title: 'Starter Pack Front Office',
        body:
          'Inclut des scripts de communication client, outils de traitement réclamation, modèles de passation et checklists réception.',
        href: '/playbooks/fo-starter-pack',
        cta: 'Voir le Starter Pack Front Office',
        eventName: 'fo_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Playbook Front Office',
        body:
          'Utilisez le playbook complet pour le parcours client, les standards de communication, la logique d’escalade et toute la référence SOP du service.',
        href: '/playbooks/fo',
        cta: 'Voir le Playbook Front Office',
        eventName: 'fo_playbook_cta_clicked',
      },
      relatedTitle: 'Standards de service liés',
      relatedText:
        'Le traitement des réclamations se relie naturellement aux checklists réception, aux passations et à la formation standards de service.',
      relatedLinks: [
        {
          href: '/modele-passation-reception',
          label: 'Modèle de passation réception',
          text: 'Transmettre clairement les réclamations ouvertes entre deux shifts.',
        },
        {
          href: '/hotel-front-office-checklist',
          label: 'Checklist réception',
          text: 'Garder l’équipe réception alignée avant, pendant et après le shift.',
        },
        {
          href: '/formation',
          label: 'Formation standards de service',
          text: 'Former les équipes à la posture, à la communication client et au recovery.',
        },
      ],
      faqs: [
        {
          question: 'Qu’est-ce qu’une procédure de réclamation client ?',
          answer:
            'C’est une procédure écrite qui définit comment une équipe reçoit, trace, escalade, résout et suit une réclamation. Elle réduit l’improvisation et clarifie la responsabilité du dossier.',
        },
        {
          question: 'Faut-il compenser chaque réclamation ?',
          answer:
            'Non. La compensation n’est qu’une option. La priorité est de comprendre l’impact, corriger le problème opérationnel et communiquer clairement. Le geste commercial doit suivre la politique de l’établissement.',
        },
        {
          question: 'Qui doit suivre une réclamation client ?',
          answer:
            'La personne qui reçoit la réclamation peut porter le suivi, mais les dossiers sensibles doivent être escaladés au superviseur ou au manager de duty. La responsabilité doit être claire pour le client et pour l’équipe.',
        },
      ],
      finalTitle: 'Rendre le traitement des réclamations régulier entre les shifts',
      finalText:
        'Utilisez le Starter Pack pour les scripts et outils quotidiens, puis le Playbook Front Office complet lorsque l’équipe a besoin de toute la référence parcours client.',
    },
  },
  hskDeepCleaning: {
    en: {
      slug: '/housekeeping-deep-cleaning-checklist',
      alternateSlug: '/deep-cleaning-chambre',
      title: 'Housekeeping Deep Cleaning Checklist',
      metaTitle: 'Housekeeping Deep Cleaning Checklist | LuxOps',
      metaDescription:
        'A practical housekeeping deep cleaning checklist for guest rooms, bathrooms, high-touch points, furniture, floors, minibar and supervisor inspection.',
      keywords:
        'housekeeping deep cleaning checklist, hotel room deep cleaning checklist, room cleaning checklist, housekeeping cleaning procedure, bathroom deep cleaning checklist',
      eyebrow: 'Housekeeping control',
      h1: 'Housekeeping Deep Cleaning Checklist',
      subtitle:
        'A structured checklist for deep cleaning rooms and bathrooms with clear zones, high-touch controls, defect reporting and supervisor sign-off.',
      sourceNote:
        'Adapted from the room cleaning, bathroom cleaning and supervisor inspection logic used in the LuxOps Housekeeping Playbook.',
      sourceDetail:
        'The paid Housekeeping resources include editable inspection sheets, room attendant tools, supervisor controls and the complete department SOP reference.',
      sectionLabel: 'Deep cleaning sequence',
      sectionTitle: 'Deep cleaning starts with zones, not random tasks',
      sectionIntro:
        'A deep clean only works when the attendant follows a stable sequence. The supervisor then checks the room against the same zones, so cleaning and inspection speak the same language.',
      steps: [
        {
          title: 'Prepare the room before cleaning',
          body:
            'Open curtains, ventilate the room, secure guest property if relevant, remove waste and strip linen before starting detailed cleaning. Preparation prevents cross-contamination and repeated handling.',
        },
        {
          title: 'Work from high to low',
          body:
            'Start with high dusting, lights, vents, frames and upper surfaces before moving to desks, bedside tables, furniture, skirting boards and floors.',
        },
        {
          title: 'Treat bathroom as a separate zone',
          body:
            'The bathroom requires its own sequence: mirror, sink, fittings, shower or bath, toilet, amenities, floor and final smell check. It should not be mixed with bedroom cleaning.',
        },
        {
          title: 'Log defects during the clean',
          body:
            'A deep clean is also a room condition check. Damaged furniture, stained upholstery, leaking taps, loose fittings and recurring odours should be logged before the supervisor inspection.',
        },
      ],
      checklistTitle: 'Deep cleaning control points',
      checklistIntro:
        'Use these blocks to turn a deep clean into a repeatable and inspectable room process.',
      checklistBlocks: [
        {
          title: 'Bedroom',
          items: [
            'Headboard, bedside tables, lamps and switches cleaned',
            'Desk, chair, wardrobe, safe and drawers checked',
            'High-touch points disinfected',
            'Upholstery inspected for stains and odours',
          ],
        },
        {
          title: 'Bathroom',
          items: [
            'Mirror, sink, taps and chrome polished',
            'Shower, bath, tiles and glass treated for limescale',
            'Toilet cleaned exterior first, interior last',
            'Amenities, towels and paper products replaced to standard',
          ],
        },
        {
          title: 'Floor and final setup',
          items: [
            'Floor vacuumed or mopped according to material',
            'Minibar, coffee setup and collateral aligned',
            'Lighting, temperature and smell checked',
            'Room photographed or signed off if required',
          ],
        },
        {
          title: 'Supervisor inspection',
          items: [
            'Room inspected clockwise using the same zones',
            'Defects logged with room number and priority',
            'Room returned to attendant if standard is not met',
            'Final status updated only after inspection',
          ],
        },
      ],
      product: {
        title: 'Housekeeping Inspection Kit',
        body:
          'Use the kit when you need editable room inspection checklists, supervisor control sheets and defect tracking tools.',
        href: '/playbooks/hsk-starter-pack',
        cta: 'View Housekeeping Inspection Kit',
        eventName: 'hsk_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Housekeeping Playbook',
        body:
          'Use the full playbook for room attendant procedures, linen logic, cleaning protocols, inspection standards and department management routines.',
        href: '/playbooks/hsk',
        cta: 'View Housekeeping Playbook',
        eventName: 'hsk_playbook_cta_clicked',
      },
      relatedTitle: 'Continue with housekeeping controls',
      relatedText:
        'These pages connect deep cleaning with room cleaning, bathroom controls and supervisor inspection.',
      relatedLinks: [
        {
          href: '/hotel-housekeeping-checklist',
          label: 'Housekeeping Checklist',
          text: 'Free printable checklists for room attendant, public areas and supervisor inspection.',
        },
        {
          href: '/housekeeping-sop',
          label: 'Housekeeping SOP',
          text: 'Complete structure for room cleaning, recouche, bathroom and inspection procedures.',
        },
        {
          href: '/blog/hotel-bathroom-cleaning-sop',
          label: 'Bathroom Cleaning SOP',
          text: 'Detailed bathroom cleaning logic for mirrors, fittings, shower, toilet and floor.',
        },
      ],
      faqs: [
        {
          question: 'What is the difference between room cleaning and deep cleaning?',
          answer:
            'Daily room cleaning resets the room for guest use. Deep cleaning goes further by treating high dusting, fixtures, upholstery, limescale, defects and areas that are not covered in the same depth during every daily clean.',
        },
        {
          question: 'How often should a room be deep cleaned?',
          answer:
            'The frequency depends on room category, occupancy, seasonality and brand standard. Many properties plan rotating deep cleans, with additional deep cleans after long stays, incidents or repeated inspection defects.',
        },
        {
          question: 'Who signs off a deep clean?',
          answer:
            'A supervisor or floor gouvernante should inspect and release the room. The person who cleans the room should not be the only person validating the final status.',
        },
      ],
      finalTitle: 'Make deep cleaning easier to inspect',
      finalText:
        'Start with a clear zone checklist, then use editable supervisor tools and the complete Housekeeping Playbook when you need a stronger department standard.',
    },
    fr: {
      slug: '/deep-cleaning-chambre',
      alternateSlug: '/housekeeping-deep-cleaning-checklist',
      title: 'Checklist deep cleaning chambre',
      metaTitle: 'Checklist deep cleaning chambre | LuxOps',
      metaDescription:
        'Checklist pratique pour le deep cleaning chambre : salle de bain, points de contact, mobilier, sols, minibar, défauts et inspection gouvernante.',
      keywords:
        'checklist deep cleaning chambre, deep cleaning housekeeping, nettoyage approfondi chambre, procédure deep cleaning, checklist housekeeping, inspection chambre gouvernante',
      eyebrow: 'Contrôle housekeeping',
      h1: 'Checklist deep cleaning chambre',
      subtitle:
        'Une checklist structurée pour réaliser un deep cleaning chambre avec zones claires, salle de bain, points de contact, défauts à signaler et validation gouvernante.',
      sourceNote:
        'Adaptée des séquences de nettoyage chambre, salle de bain et inspection gouvernante du Playbook Housekeeping LuxOps.',
      sourceDetail:
        'Les ressources Housekeeping complètes incluent les grilles d’inspection modifiables, outils femme ou valet de chambre, contrôles gouvernante et toute la référence SOP du département.',
      sectionLabel: 'Séquence de nettoyage',
      sectionTitle: 'Un deep cleaning chambre commence par des zones, pas par une liste au hasard',
      sectionIntro:
        'Le deep cleaning fonctionne quand la séquence reste stable. La gouvernante contrôle ensuite la chambre avec les mêmes zones, ce qui aligne le nettoyage et l’inspection.',
      steps: [
        {
          title: 'Préparer la chambre avant de nettoyer',
          body:
            'Ouvrir les rideaux, ventiler, sécuriser les effets clients si nécessaire, retirer les déchets et enlever le linge avant le nettoyage détaillé. La préparation évite les manipulations répétées.',
        },
        {
          title: 'Travailler du haut vers le bas',
          body:
            'Commencer par les poussières hautes, luminaires, grilles, cadres et surfaces hautes, puis descendre vers bureau, chevets, mobilier, plinthes et sols.',
        },
        {
          title: 'Traiter la salle de bain comme une zone séparée',
          body:
            'La salle de bain a sa propre séquence : miroir, vasque, robinetterie, douche ou baignoire, WC, amenities, sol et contrôle odeur final. Elle ne doit pas être mélangée avec le nettoyage de la chambre.',
        },
        {
          title: 'Signaler les défauts pendant le nettoyage',
          body:
            'Un deep cleaning sert aussi à vérifier l’état de la chambre. Mobilier abîmé, tissu taché, fuite, fixation desserrée ou odeur récurrente doivent être signalés avant l’inspection.',
        },
      ],
      checklistTitle: 'Points de contrôle du deep cleaning',
      checklistIntro:
        'Ces blocs permettent de transformer le deep cleaning chambre en séquence répétable et contrôlable.',
      checklistBlocks: [
        {
          title: 'Chambre',
          items: [
            'Tête de lit, chevets, lampes et interrupteurs nettoyés',
            'Bureau, chaise, penderie, coffre et tiroirs contrôlés',
            'Points de contact désinfectés',
            'Tissus et assises inspectés pour taches et odeurs',
          ],
        },
        {
          title: 'Salle de bain',
          items: [
            'Miroir, vasque, robinetterie et chromes polis',
            'Douche, baignoire, faïence et paroi traitées contre le calcaire',
            'WC nettoyé extérieur d’abord, intérieur en dernier',
            'Amenities, linge et papier remis selon le standard',
          ],
        },
        {
          title: 'Sol et mise en place finale',
          items: [
            'Sol aspiré ou lavé selon le revêtement',
            'Minibar, plateau de courtoisie et supports clients alignés',
            'Éclairage, température et odeur contrôlés',
            'Photo ou signature de validation si le standard le prévoit',
          ],
        },
        {
          title: 'Inspection gouvernante',
          items: [
            'Chambre inspectée dans le même ordre de zones',
            'Défauts consignés avec numéro de chambre et priorité',
            'Chambre retournée à l’équipier si le standard n’est pas atteint',
            'Statut final mis à jour uniquement après inspection',
          ],
        },
      ],
      product: {
        title: 'Housekeeping Inspection Kit',
        body:
          'Utilisez le kit si vous avez besoin de grilles d’inspection modifiables, feuilles de contrôle gouvernante et outils de suivi des défauts.',
        href: '/playbooks/hsk-starter-pack',
        cta: 'Voir le Housekeeping Inspection Kit',
        eventName: 'hsk_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Playbook Housekeeping',
        body:
          'Utilisez le playbook complet pour les procédures femme ou valet de chambre, le linge, les protocoles de nettoyage, les inspections et la gestion du département.',
        href: '/playbooks/hsk',
        cta: 'Voir le Playbook Housekeeping',
        eventName: 'hsk_playbook_cta_clicked',
      },
      relatedTitle: 'Continuer avec les contrôles housekeeping',
      relatedText:
        'Ces pages relient le deep cleaning chambre à la chambre, à la salle de bain et à l’inspection gouvernante.',
      relatedLinks: [
        {
          href: '/hotel-housekeeping-checklist',
          label: 'Checklist housekeeping',
          text: 'Checklists gratuites pour chambre, lieux publics et inspection gouvernante.',
        },
        {
          href: '/housekeeping-sop',
          label: 'SOP housekeeping',
          text: 'Structure complète pour chambre à blanc, recouche, salle de bain et inspection.',
        },
        {
          href: '/blog/hotel-bathroom-cleaning-sop',
          label: 'SOP nettoyage salle de bain',
          text: 'Méthode détaillée pour miroir, robinetterie, douche, WC et sol.',
        },
      ],
      faqs: [
        {
          question: 'Quelle différence entre nettoyage chambre et deep cleaning ?',
          answer:
            'Le nettoyage quotidien remet la chambre en état pour le client. Le deep cleaning va plus loin avec les poussières hautes, équipements, tissus, calcaire, défauts et zones qui ne sont pas traitées avec la même profondeur à chaque passage.',
        },
        {
          question: 'À quelle fréquence prévoir un deep cleaning chambre ?',
          answer:
            'La fréquence dépend de la catégorie de chambre, de l’occupation, de la saison et du standard. Beaucoup d’établissements planifient une rotation, avec des passages supplémentaires après long séjour, incident ou défaut récurrent.',
        },
        {
          question: 'Qui valide un deep cleaning ?',
          answer:
            'Une gouvernante d’étage ou superviseur doit inspecter et libérer la chambre. La personne qui nettoie ne doit pas être la seule à valider le statut final.',
        },
      ],
      finalTitle: 'Rendre le deep cleaning plus facile à contrôler',
      finalText:
        'Commencez avec une checklist par zones, puis utilisez les outils modifiables de supervision et le Playbook Housekeeping complet pour renforcer le standard du département.',
    },
  },
  breakfastService: {
    en: {
      slug: '/breakfast-service-checklist',
      alternateSlug: '/checklist-service-petit-dejeuner',
      title: 'Breakfast Service Checklist',
      metaTitle: 'Breakfast Service Checklist | LuxOps',
      metaDescription:
        'A breakfast service checklist for hotel and resort teams: buffet setup, mise en place, guest flow, replenishment, allergens, clearance and closing handover.',
      keywords:
        'breakfast service checklist, hotel breakfast checklist, breakfast buffet checklist, F&B breakfast service SOP, restaurant breakfast checklist',
      eyebrow: 'F&B breakfast',
      h1: 'Breakfast Service Checklist',
      subtitle:
        'A practical checklist for breakfast teams covering setup, buffet readiness, guest flow, replenishment, allergens, table maintenance and closing handover.',
      sourceNote:
        'Adapted from the breakfast, mise en place and service control logic used in the LuxOps F&B Playbook.',
      sourceDetail:
        'The paid F&B resources include editable service checklists, opening and closing controls, room service tools, briefing templates and the complete F&B operating reference.',
      sectionLabel: 'Morning service control',
      sectionTitle: 'Breakfast needs rhythm before volume arrives',
      sectionIntro:
        'Breakfast is often the highest-volume service of the day. The team needs a clear setup, visible replenishment standards and a simple handover before the rush starts.',
      steps: [
        {
          title: 'Prepare the room before opening',
          body:
            'Check lighting, music, temperature, table setup, buffet labels, service stations and guest flow before the first guest enters.',
        },
        {
          title: 'Control buffet presentation',
          body:
            'Food presentation should be full, clean and labelled. Utensils, plates, cups, napkins and service tools must be available before the guest notices a shortage.',
        },
        {
          title: 'Run replenishment by priority',
          body:
            'High-demand items, hot food, coffee, juices, bakery and clean plates need assigned owners. Replenishment should be proactive, not only reactive.',
        },
        {
          title: 'Close without losing information',
          body:
            'Closing should include leftovers, wastage notes, defects, guest feedback, equipment issues and handover points for the next breakfast service.',
        },
      ],
      checklistTitle: 'Breakfast checklist structure',
      checklistIntro:
        'Use these blocks to organize the shift from opening setup to closing handover.',
      checklistBlocks: [
        {
          title: 'Before opening',
          items: [
            'Room clean, tables aligned and stations stocked',
            'Buffet labels, allergen information and menus checked',
            'Coffee, juice, bakery, hot items and cold items ready',
            'Team briefing completed with occupancy and VIP notes',
          ],
        },
        {
          title: 'During service',
          items: [
            'Guest greeted and seated or guided to buffet',
            'Buffet replenished before trays look empty',
            'Tables cleared and reset without disturbing guests',
            'Allergen requests escalated to the manager or chef when needed',
          ],
        },
        {
          title: 'Quality controls',
          items: [
            'Hot food temperature and presentation checked',
            'Coffee quality, cup availability and milk station monitored',
            'Floor, buffet and table areas kept clean during peak time',
            'Guest complaints or repeated delays logged for follow-up',
          ],
        },
        {
          title: 'Closing',
          items: [
            'Buffet cleared according to hygiene standard',
            'Wastage, shortages and equipment issues noted',
            'Tables, stations and back area reset',
            'Handover prepared for the next shift or next breakfast service',
          ],
        },
      ],
      product: {
        title: 'F&B Service Starter Pack',
        body:
          'Use the Starter Pack for service checklists, opening and closing tools, restaurant sequence, room service controls and practical F&B templates.',
        href: '/playbooks/fb-starter-pack',
        cta: 'View F&B Starter Pack',
        eventName: 'fb_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Full F&B Playbook',
        body:
          'Use the full playbook for restaurant, breakfast, bar, wine, room service, guest interaction, mise en place, management and quality standards.',
        href: '/playbooks/fb',
        cta: 'View F&B Playbook',
        eventName: 'fb_playbook_cta_clicked',
      },
      relatedTitle: 'Continue with F&B checklists',
      relatedText:
        'Breakfast service connects naturally with restaurant opening, service sequence, closing and room service standards.',
      relatedLinks: [
        {
          href: '/restaurant-opening-checklist',
          label: 'Restaurant Opening Checklist',
          text: 'Opening controls for mise en place, stations, team briefing and readiness.',
        },
        {
          href: '/food-and-beverage-service-sequence',
          label: 'Service Sequence',
          text: 'Service flow from guest arrival to farewell with timing standards.',
        },
        {
          href: '/restaurant-closing-checklist',
          label: 'Restaurant Closing Checklist',
          text: 'Closing controls, reset, defects, wastage and handover.',
        },
      ],
      faqs: [
        {
          question: 'What should a breakfast checklist include?',
          answer:
            'It should include room setup, buffet readiness, allergen information, team briefing, replenishment ownership, table maintenance, guest feedback, hygiene controls and closing handover.',
        },
        {
          question: 'Can this be used outside hotels?',
          answer:
            'Yes. The structure can apply to resorts, serviced residences, restaurants, cafés or any venue running a structured breakfast service.',
        },
        {
          question: 'Is breakfast service part of the F&B SOP?',
          answer:
            'Yes. Breakfast is a dedicated F&B procedure because it has a specific rhythm, guest flow, replenishment logic, buffet controls and closing requirements.',
        },
      ],
      finalTitle: 'Turn breakfast into a controlled daily service',
      finalText:
        'Use the checklist for immediate structure, then continue with the F&B Starter Pack and Playbook when the team needs editable tools and complete SOPs.',
    },
    fr: {
      slug: '/checklist-service-petit-dejeuner',
      alternateSlug: '/breakfast-service-checklist',
      title: 'Checklist service petit déjeuner',
      metaTitle: 'Checklist service petit déjeuner | LuxOps',
      metaDescription:
        'Checklist service petit déjeuner : mise en place, buffet, flux client, réassort, allergènes, débarrassage, clôture et passation.',
      keywords:
        'checklist service petit déjeuner, checklist buffet petit déjeuner, procédure petit déjeuner, SOP petit déjeuner, service petit déjeuner restaurant',
      eyebrow: 'Petit déjeuner F&B',
      h1: 'Checklist service petit déjeuner',
      subtitle:
        'Une checklist pratique pour structurer la mise en place, le buffet, le flux client, le réassort, les allergènes, le débarrassage et la passation de fin de service.',
      sourceNote:
        'Adaptée des logiques petit déjeuner, mise en place et contrôle de service du Playbook F&B LuxOps.',
      sourceDetail:
        'Les ressources F&B complètes incluent les checklists de service modifiables, contrôles d’ouverture et de fermeture, outils room service, modèles de briefing et toute la référence opérationnelle F&B.',
      sectionLabel: 'Contrôle du service matin',
      sectionTitle: 'Le petit déjeuner demande du rythme avant l’arrivée du volume',
      sectionIntro:
        'Le petit déjeuner est souvent le service avec le plus fort volume. L’équipe a besoin d’une mise en place claire, de standards de réassort visibles et d’une passation simple avant le rush.',
      steps: [
        {
          title: 'Préparer la salle avant l’ouverture',
          body:
            'Contrôler lumière, musique, température, dressage des tables, étiquetage buffet, stations de service et circulation client avant l’arrivée du premier client.',
        },
        {
          title: 'Contrôler la présentation du buffet',
          body:
            'La présentation doit être garnie, propre et correctement étiquetée. Couverts, assiettes, tasses, serviettes et ustensiles doivent être disponibles avant que le client ne remarque un manque.',
        },
        {
          title: 'Organiser le réassort par priorité',
          body:
            'Produits très demandés, chaud, café, jus, viennoiseries et assiettes propres doivent avoir un responsable identifié. Le réassort doit être anticipé, pas seulement réactif.',
        },
        {
          title: 'Fermer sans perdre l’information',
          body:
            'La fermeture doit reprendre les restes, pertes, défauts, retours clients, problèmes matériel et points de passation pour le prochain service petit déjeuner.',
        },
      ],
      checklistTitle: 'Structure de checklist petit déjeuner',
      checklistIntro:
        'Ces blocs organisent le shift de la mise en place d’ouverture jusqu’à la passation de clôture.',
      checklistBlocks: [
        {
          title: 'Avant ouverture',
          items: [
            'Salle propre, tables alignées et stations approvisionnées',
            'Étiquettes buffet, informations allergènes et menus contrôlés',
            'Café, jus, viennoiseries, chaud et froid prêts',
            'Briefing réalisé avec occupation, VIP et points sensibles',
          ],
        },
        {
          title: 'Pendant le service',
          items: [
            'Client accueilli, installé ou orienté vers le buffet',
            'Buffet réassorti avant que les plats ne paraissent vides',
            'Tables débarrassées et redressées sans gêner les clients',
            'Demandes allergènes escaladées au manager ou au chef si nécessaire',
          ],
        },
        {
          title: 'Contrôles qualité',
          items: [
            'Température et présentation du chaud vérifiées',
            'Qualité café, tasses disponibles et station lait suivies',
            'Sol, buffet et tables maintenus propres pendant le rush',
            'Réclamations ou retards récurrents consignés pour suivi',
          ],
        },
        {
          title: 'Clôture',
          items: [
            'Buffet débarrassé selon le standard hygiène',
            'Pertes, ruptures et problèmes matériel notés',
            'Tables, stations et back office remis en ordre',
            'Passation préparée pour le shift suivant ou le prochain service petit déjeuner',
          ],
        },
      ],
      product: {
        title: 'Starter Pack F&B',
        body:
          'Utilisez le Starter Pack pour les checklists de service, outils d’ouverture et fermeture, séquence restaurant, contrôles room service et modèles F&B pratiques.',
        href: '/playbooks/fb-starter-pack',
        cta: 'Voir le Starter Pack F&B',
        eventName: 'fb_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Playbook F&B complet',
        body:
          'Utilisez le playbook complet pour restaurant, petit déjeuner, bar, vin, room service, interaction client, mise en place, management et standards qualité.',
        href: '/playbooks/fb',
        cta: 'Voir le Playbook F&B',
        eventName: 'fb_playbook_cta_clicked',
      },
      relatedTitle: 'Continuer avec les checklists F&B',
      relatedText:
        'Le service petit déjeuner se relie naturellement à l’ouverture restaurant, à la séquence de service, à la fermeture et au room service.',
      relatedLinks: [
        {
          href: '/checklist-ouverture-restaurant',
          label: 'Checklist ouverture restaurant',
          text: 'Contrôles d’ouverture pour mise en place, stations, briefing et readiness.',
        },
        {
          href: '/sequence-service-restaurant-hotel',
          label: 'Séquence de service',
          text: 'Déroulé de service de l’accueil au départ client, avec repères de timing.',
        },
        {
          href: '/checklist-fermeture-restaurant',
          label: 'Checklist fermeture restaurant',
          text: 'Contrôles de fermeture, reset, défauts, pertes et passation.',
        },
      ],
      faqs: [
        {
          question: 'Que doit contenir une checklist petit déjeuner ?',
          answer:
            'Elle doit couvrir la mise en place, le buffet, les informations allergènes, le briefing, les responsabilités de réassort, le débarrassage, les contrôles hygiène, les retours clients et la passation.',
        },
        {
          question: 'Peut-on l’utiliser hors hôtellerie ?',
          answer:
            'Oui. La structure peut s’appliquer à un resort, une résidence avec services, un restaurant, un coffee shop ou tout lieu avec un service petit déjeuner organisé.',
        },
        {
          question: 'Le petit déjeuner fait-il partie des SOP F&B ?',
          answer:
            'Oui. Le petit déjeuner mérite une procédure dédiée parce que son rythme, son flux client, sa logique de réassort, ses contrôles buffet et sa clôture sont spécifiques.',
        },
      ],
      finalTitle: 'Transformer le petit déjeuner en service maîtrisé',
      finalText:
        'Utilisez la checklist pour structurer rapidement le service, puis continuez avec le Starter Pack F&B et le Playbook lorsque l’équipe a besoin d’outils modifiables et de SOP complètes.',
    },
  },
  roomStatusDiscrepancy: {
    en: {
      slug: '/room-status-discrepancy-report',
      alternateSlug: '/rapport-ecart-statut-chambre',
      title: 'Room Status Discrepancy Report',
      metaTitle: 'Room Status Discrepancy Report | LuxOps',
      metaDescription:
        'A practical room status discrepancy report for hotel front office and housekeeping teams: PMS status, physical room status, owner, priority and follow-up.',
      keywords:
        'room status discrepancy report, hotel room status discrepancy, housekeeping front office discrepancy, PMS room status, hotel room status report',
      eyebrow: 'Rooms control',
      h1: 'Room Status Discrepancy Report',
      subtitle:
        'A practical control sheet for reconciling PMS status, physical room status, housekeeping inspection and front desk availability before the guest experience is affected.',
      sourceNote:
        'Built from the room status, housekeeping inspection and front desk handover logic used in the LuxOps Housekeeping and Front Office Playbooks.',
      sourceDetail:
        'The paid resources include supervisor inspection tools, reception handovers, room readiness controls and the complete SOP references for Housekeeping and Front Office.',
      sectionLabel: 'PMS and floor alignment',
      sectionTitle: 'A room status discrepancy is an operational risk, not just a PMS issue',
      sectionIntro:
        'When the PMS says one thing and the floor says another, check-in slows down, housekeeping loses time and the guest can receive the wrong information. The report gives both departments one shared version of the room status.',
      steps: [
        {
          title: 'Compare PMS status with physical status',
          body:
            'Start with rooms where availability matters most: arrivals, VIPs, early check-ins, room moves and late check-outs. Confirm whether the physical room matches the PMS status.',
        },
        {
          title: 'Name the discrepancy clearly',
          body:
            'Use simple labels: PMS clean but room not inspected, PMS dirty but room released, room occupied but PMS vacant, room vacant but guest belongings found, maintenance issue not reflected in PMS.',
        },
        {
          title: 'Assign one owner for the correction',
          body:
            'Each discrepancy needs an owner: housekeeping supervisor, front desk supervisor, maintenance or duty manager. Without ownership, discrepancies are discussed but not corrected.',
        },
        {
          title: 'Close the loop before releasing the room',
          body:
            'The room should only be released after the physical status, inspection status and PMS status match. The final update must be visible to both front office and housekeeping.',
        },
      ],
      checklistTitle: 'Discrepancy report fields',
      checklistIntro:
        'These fields keep the report short enough for daily use while preserving the information needed to resolve the issue.',
      checklistBlocks: [
        {
          title: 'Room identification',
          items: [
            'Room number and room type',
            'Current PMS status',
            'Physical room status confirmed on floor',
            'Arrival, departure, stayover or room move impact',
          ],
        },
        {
          title: 'Discrepancy type',
          items: [
            'Clean in PMS, not inspected on floor',
            'Dirty in PMS, physically ready',
            'Occupied in PMS, vacant on floor',
            'Vacant in PMS, guest belongings or activity found',
          ],
        },
        {
          title: 'Resolution',
          items: [
            'Owner assigned with department and name',
            'Priority marked according to guest impact',
            'Action completed and time recorded',
            'Final PMS update confirmed',
          ],
        },
        {
          title: 'Handover',
          items: [
            'Open discrepancies transferred to next shift',
            'VIP or arrival impact highlighted separately',
            'Maintenance blocker escalated if room cannot be released',
            'Supervisor sign-off completed',
          ],
        },
      ],
      product: {
        title: 'Housekeeping Inspection Kit',
        body:
          'Use the kit when you need editable inspection controls, supervisor sheets and practical room readiness tools.',
        href: '/playbooks/hsk-starter-pack',
        cta: 'View Housekeeping Inspection Kit',
        eventName: 'hsk_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Housekeeping Playbook',
        body:
          'Use the full playbook when you need complete housekeeping SOPs, inspection standards, linen logic, team routines and room release controls.',
        href: '/playbooks/hsk',
        cta: 'View Housekeeping Playbook',
        eventName: 'hsk_playbook_cta_clicked',
      },
      relatedTitle: 'Connect room status with front desk operations',
      relatedText:
        'Room discrepancies sit between housekeeping and reception, so the page links both operational clusters.',
      relatedLinks: [
        {
          href: '/hotel-housekeeping-checklist',
          label: 'Housekeeping Checklist',
          text: 'Printable room and supervisor checklists for floor control.',
        },
        {
          href: '/front-desk-shift-handover-template',
          label: 'Front Desk Handover Template',
          text: 'Transfer room moves, pending arrivals and open discrepancies between shifts.',
        },
        {
          href: '/hotel-front-office-checklist',
          label: 'Front Office Checklist',
          text: 'Daily reception checks for arrivals, room readiness and handover.',
        },
      ],
      faqs: [
        {
          question: 'What is a room status discrepancy?',
          answer:
            'It is a mismatch between the room status shown in the PMS and the physical status confirmed on the floor. Common examples include rooms marked clean but not inspected, rooms marked dirty but ready, or rooms showing vacant while guest belongings remain inside.',
        },
        {
          question: 'Who should manage room status discrepancies?',
          answer:
            'Housekeeping and front office should manage them together. The housekeeping supervisor confirms the physical status, while reception or the duty manager ensures the PMS and guest-facing information are corrected.',
        },
        {
          question: 'When should discrepancies be checked?',
          answer:
            'They should be checked before check-in peak, before VIP arrivals, during room move periods and at shift handover. Night audit can also flag unresolved discrepancies for the morning team.',
        },
      ],
      finalTitle: 'Keep PMS status and floor reality aligned',
      finalText:
        'Use a simple report for daily control, then move to editable inspection tools and complete SOPs when the team needs a stronger rooms operation.',
    },
    fr: {
      slug: '/rapport-ecart-statut-chambre',
      alternateSlug: '/room-status-discrepancy-report',
      title: 'Rapport écart statut chambre',
      metaTitle: 'Rapport écart statut chambre | LuxOps',
      metaDescription:
        'Rapport pratique pour gérer les écarts de statut chambre entre PMS, réalité terrain, inspection housekeeping et disponibilité réception.',
      keywords:
        'rapport écart statut chambre, discrepancy room status, statut chambre PMS, écart housekeeping réception, room status hôtel',
      eyebrow: 'Contrôle chambres',
      h1: 'Rapport écart statut chambre',
      subtitle:
        'Une fiche de contrôle pour réconcilier statut PMS, statut réel de la chambre, inspection housekeeping et disponibilité réception avant impact client.',
      sourceNote:
        'Construit à partir des logiques room status, inspection housekeeping et passation réception des Playbooks Housekeeping et Front Office LuxOps.',
      sourceDetail:
        'Les ressources complètes incluent les outils d’inspection gouvernante, modèles de passation réception, contrôles room readiness et références SOP Housekeeping et Front Office.',
      sectionLabel: 'Alignement PMS et terrain',
      sectionTitle: 'Un écart de statut chambre est un risque opérationnel, pas seulement un problème PMS',
      sectionIntro:
        'Quand le PMS indique une chose et que le terrain en montre une autre, le check-in ralentit, le housekeeping perd du temps et le client peut recevoir une mauvaise information. Le rapport donne aux deux services une vision commune du statut chambre.',
      steps: [
        {
          title: 'Comparer le statut PMS avec le statut réel',
          body:
            'Commencer par les chambres à fort impact : arrivées, VIP, early check-ins, room moves et late check-outs. Confirmer si la situation terrain correspond au statut PMS.',
        },
        {
          title: 'Nommer clairement l’écart',
          body:
            'Utiliser des libellés simples : PMS clean mais chambre non inspectée, PMS dirty mais chambre libérée, chambre occupée PMS mais vide terrain, chambre vacante PMS mais effets client présents, problème technique non reflété dans le PMS.',
        },
        {
          title: 'Attribuer un responsable de correction',
          body:
            'Chaque écart doit avoir un responsable : gouvernante d’étage, superviseur réception, maintenance ou manager de duty. Sans responsable, les écarts sont discutés mais rarement clôturés.',
        },
        {
          title: 'Clôturer avant de libérer la chambre',
          body:
            'La chambre ne doit être libérée que lorsque le statut réel, le statut inspection et le statut PMS correspondent. La mise à jour finale doit être visible pour la réception et le housekeeping.',
        },
      ],
      checklistTitle: 'Champs à prévoir dans le rapport',
      checklistIntro:
        'Ces champs gardent le rapport assez court pour un usage quotidien tout en conservant les informations nécessaires à la résolution.',
      checklistBlocks: [
        {
          title: 'Identification chambre',
          items: [
            'Numéro et type de chambre',
            'Statut PMS actuel',
            'Statut réel confirmé à l’étage',
            'Impact arrivée, départ, recouche ou room move',
          ],
        },
        {
          title: 'Type d’écart',
          items: [
            'Clean dans le PMS, non inspectée à l’étage',
            'Dirty dans le PMS, physiquement prête',
            'Occupée dans le PMS, vide sur le terrain',
            'Vacante dans le PMS, effets client ou activité constatés',
          ],
        },
        {
          title: 'Résolution',
          items: [
            'Responsable assigné avec service et nom',
            'Priorité indiquée selon impact client',
            'Action réalisée et heure notée',
            'Mise à jour PMS finale confirmée',
          ],
        },
        {
          title: 'Passation',
          items: [
            'Écarts ouverts transmis au shift suivant',
            'Impact VIP ou arrivée signalé séparément',
            'Blocage maintenance escaladé si la chambre ne peut pas être libérée',
            'Validation superviseur effectuée',
          ],
        },
      ],
      product: {
        title: 'Housekeeping Inspection Kit',
        body:
          'Utilisez le kit si vous avez besoin de grilles d’inspection modifiables, feuilles de contrôle gouvernante et outils room readiness.',
        href: '/playbooks/hsk-starter-pack',
        cta: 'Voir le Housekeeping Inspection Kit',
        eventName: 'hsk_starter_pack_cta_clicked',
      },
      playbook: {
        title: 'Playbook Housekeeping',
        body:
          'Utilisez le playbook complet pour les SOP housekeeping, standards d’inspection, logique linge, routines équipe et contrôles de libération chambre.',
        href: '/playbooks/hsk',
        cta: 'Voir le Playbook Housekeeping',
        eventName: 'hsk_playbook_cta_clicked',
      },
      relatedTitle: 'Relier le statut chambre aux opérations réception',
      relatedText:
        'Les écarts de statut chambre se situent entre housekeeping et réception, donc cette page relie les deux clusters opérationnels.',
      relatedLinks: [
        {
          href: '/hotel-housekeeping-checklist',
          label: 'Checklist housekeeping',
          text: 'Checklists chambre et gouvernante pour le contrôle terrain.',
        },
        {
          href: '/modele-passation-reception',
          label: 'Modèle de passation réception',
          text: 'Transmettre room moves, arrivées en attente et écarts ouverts entre shifts.',
        },
        {
          href: '/hotel-front-office-checklist',
          label: 'Checklist réception',
          text: 'Contrôles quotidiens réception pour arrivées, room readiness et passation.',
        },
      ],
      faqs: [
        {
          question: 'Qu’est-ce qu’un écart de statut chambre ?',
          answer:
            'C’est un décalage entre le statut affiché dans le PMS et la réalité constatée sur le terrain. Exemples fréquents : chambre clean mais non inspectée, chambre dirty mais prête, chambre indiquée vacante alors que des effets client sont présents.',
        },
        {
          question: 'Qui doit gérer les écarts de statut chambre ?',
          answer:
            'Le housekeeping et la réception doivent les gérer ensemble. La gouvernante confirme la réalité terrain, tandis que la réception ou le manager de duty garantit la correction du PMS et de l’information donnée au client.',
        },
        {
          question: 'Quand contrôler les écarts de statut ?',
          answer:
            'Avant le pic de check-in, avant les arrivées VIP, pendant les périodes de room move et lors des passations. Le night audit peut aussi signaler les écarts non résolus pour l’équipe du matin.',
        },
      ],
      finalTitle: 'Aligner le PMS avec la réalité terrain',
      finalText:
        'Utilisez un rapport simple pour le contrôle quotidien, puis passez aux outils modifiables d’inspection et aux SOP complètes si l’équipe a besoin d’un cadre rooms plus solide.',
    },
  },
}

export function getOperationsResourceMetadata(kind: OperationsResourceKind, locale: Locale): Metadata {
  const content = CONTENT[kind][locale]
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    alternates: {
      canonical: localizedPath(locale, content.slug),
      languages: {
        en: localizedPath('en', locale === 'en' ? content.slug : content.alternateSlug),
        fr: localizedPath('fr', locale === 'fr' ? content.slug : content.alternateSlug),
        'x-default': localizedPath('en', locale === 'en' ? content.slug : content.alternateSlug),
      },
    },
  }
}

export function OperationsSeoResourcePage({
  kind,
  locale,
}: {
  kind: OperationsResourceKind
  locale: Locale
}) {
  const content = CONTENT[kind][locale]
  const isEN = locale === 'en'
  const sourcePage = `/${locale}${content.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: content.h1,
        description: content.metaDescription,
        author: { '@id': 'https://www.luxops.fr/#organization' },
        publisher: { '@id': 'https://www.luxops.fr/#organization' },
        mainEntityOfPage: localizedPath(locale, content.slug),
        inLanguage: locale,
      },
      breadcrumbSchema([
        { name: 'LuxOps', url: localizedPath(locale) },
        { name: content.title, url: localizedPath(locale, content.slug) },
      ]),
      faqSchema(content.faqs),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-white">
        <section className="bg-[#1A2E44] text-white px-6 pt-36 md:pt-40 pb-18 md:pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
              <ClipboardCheck size={15} />
              {content.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{content.h1}</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-5">
              {content.subtitle}
            </p>
            <p className="text-sm text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-9">
              {content.sourceNote}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrackedLink
                href={`/${locale}${content.product.href}`}
                eventName={content.product.eventName}
                eventProperties={{ source_page: sourcePage, position: 'hero' }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1A2E44] px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {content.product.cta}
                <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href={`/${locale}${content.playbook.href}`}
                eventName={content.playbook.eventName}
                eventProperties={{ source_page: sourcePage, position: 'hero' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {content.playbook.cta}
              </TrackedLink>
              <TrackedLink
                href={`/${locale}/free-hotel-procedures`}
                eventName="free_chapter_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'hero' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {isEN ? 'Download a Free Chapter' : 'Télécharger un chapitre gratuit'}
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="py-10 px-6 bg-[#F6F8FB] border-b border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 md:items-center">
            <div className="w-12 h-12 rounded-full bg-[#E7F0FF] flex items-center justify-center flex-shrink-0">
              <FileText size={22} className="text-[#0056D2]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-2">
                {isEN ? 'Source note' : 'Note source'}
              </p>
              <p className="text-gray-700 leading-relaxed">{content.sourceDetail}</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                {content.sectionLabel}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">{content.sectionTitle}</h2>
              <p className="text-gray-600 leading-relaxed">{content.sectionIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {content.steps.map((step) => (
                <article key={step.title} className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex gap-4">
                    <span className="w-10 h-10 rounded-lg bg-[#0056D2] text-white font-bold flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-[#111111] mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#F6F8FB] border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                {isEN ? 'Practical checklist' : 'Checklist pratique'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">{content.checklistTitle}</h2>
              <p className="text-gray-600 leading-relaxed">{content.checklistIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {content.checklistBlocks.map((block) => (
                <ChecklistCard key={block.title} block={block} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
            <ProductCard content={content.product} locale={locale} sourcePage={sourcePage} primary />
            <ProductCard content={content.playbook} locale={locale} sourcePage={sourcePage} />
          </div>
        </section>

        <section className="py-16 px-6 bg-[#F6F8FB] border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-3">
                {isEN ? 'Internal resources' : 'Ressources liées'}
              </p>
              <h2 className="text-3xl font-bold text-[#111111] mb-3">{content.relatedTitle}</h2>
              <p className="text-gray-600 leading-relaxed">{content.relatedText}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {content.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="group border border-gray-200 bg-white rounded-xl p-5 hover:border-[#0056D2] hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-[#111111] mb-2 group-hover:text-[#0056D2] transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{link.text}</p>
                    </div>
                    <ArrowRight size={17} className="text-[#0056D2] flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#111111] mb-8">
              {isEN ? 'Frequently asked questions' : 'Questions fréquentes'}
            </h2>
            <div className="space-y-6">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#111111] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <ShieldCheck size={21} />
              </span>
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <ListChecks size={21} />
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{content.finalTitle}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">{content.finalText}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrackedLink
                href={`/${locale}${content.product.href}`}
                eventName={content.product.eventName}
                eventProperties={{ source_page: sourcePage, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {content.product.cta}
                <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href={`/${locale}/free-hotel-procedures`}
                eventName="free_chapter_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {isEN ? 'Download a Free Chapter' : 'Télécharger un chapitre gratuit'}
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function ChecklistCard({ block }: { block: ChecklistBlock }) {
  return (
    <article className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-[#111111] mb-4">{block.title}</h3>
      <div className="space-y-3">
        {block.items.map((item) => (
          <div key={item} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
            <CheckCircle2 size={16} className="text-[#0056D2] flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

function ProductCard({
  content,
  locale,
  sourcePage,
  primary = false,
}: {
  content: ProductLink
  locale: Locale
  sourcePage: string
  primary?: boolean
}) {
  return (
    <div className={primary ? 'border border-[#D7E4F7] bg-[#F4F8FF] rounded-xl p-8' : 'border border-gray-200 rounded-xl p-8'}>
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5">
        <ClipboardCheck size={24} className={primary ? 'text-[#0056D2]' : 'text-[#1A2E44]'} />
      </div>
      <p className={primary ? 'text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4' : 'text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4'}>
        {primary ? (locale === 'en' ? 'Practical toolkit' : 'Kit pratique') : (locale === 'en' ? 'Full reference' : 'Référence complète')}
      </p>
      <h2 className="text-3xl font-bold text-[#111111] mb-4">{content.title}</h2>
      <p className="text-gray-600 leading-relaxed mb-6">{content.body}</p>
      <TrackedLink
        href={`/${locale}${content.href}`}
        eventName={content.eventName}
        eventProperties={{ source_page: sourcePage, position: primary ? 'starter_block' : 'playbook_block' }}
        className={primary
          ? 'inline-flex items-center gap-2 bg-[#0056D2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0046B8] transition-colors'
          : 'inline-flex items-center gap-2 border border-[#1A2E44] text-[#1A2E44] px-6 py-3 rounded-lg font-semibold hover:bg-[#1A2E44] hover:text-white transition-colors'}
      >
        {content.cta}
        <ArrowRight size={17} />
      </TrackedLink>
    </div>
  )
}

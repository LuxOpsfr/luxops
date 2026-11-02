'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, BookOpen, Check, Download } from 'lucide-react'
import type { BlogArticle } from '@/content/blog/articles'
import FrontOfficeExcerptDialog from '@/components/FrontOfficeExcerptDialog'
import PriceDisplay from '@/components/PriceDisplay'
import TrackedLink from '@/components/TrackedLink'

type Locale = 'fr' | 'en'
type Slug = 'hotel-front-desk-procedures' | 'hotel-bathroom-cleaning-sop' | 'hotel-room-service-sops' | 'housekeeping-room-inspection' | 'hotel-housekeeping-supervisor-checklist' | 'hotel-spa-wellness-sops' | 'hotel-fb-restaurant-procedures' | 'hotel-front-office-sop' | 'hotel-room-cleaning-checklist'
type Copy = { eyebrow: string; answerTitle: string; answerIntro: string; steps: string[]; bridgeTitle: string; bridgeText: string; pdfLabel?: string; pdfHref?: string; downloadTitle?: string; related: { href: string; title: string }[] }
type Config = { productId: 'fo' | 'hsk' | 'fb' | 'spa'; department: string; sampleTitle: Record<Locale, string>; samplePages: Record<Locale, number>; image: string; copy: Record<Locale, Copy> }

const CONFIG: Record<Slug, Config> = {
  'hotel-front-desk-procedures': {
    productId: 'fo', department: 'Front Office', sampleTitle: { fr: 'Communication client', en: 'Guest Communication' }, samplePages: { fr: 29, en: 28 }, image: '/images/editorial-hospitality/hero-reception-natural-v4.png',
    copy: {
      fr: { eyebrow: 'Procédure réception · réponse pratique', answerTitle: 'La procédure réception en six contrôles', answerIntro: 'Une réception fiable suit la même logique à chaque vacation : préparer, vérifier, accueillir, traiter les écarts, sécuriser le départ et transmettre.', steps: ['Avant l’arrivée : vérifier réservations, préférences, VIP, garanties et statut des chambres.', 'Au check-in : confirmer identité, réservation, tarif, paiement et informations utiles au séjour.', 'Attribuer uniquement une chambre libérée après inspection par le housekeeping.', 'En cas d’exception : annoncer une solution, un responsable et un délai, puis tracer la demande.', 'Avant le check-out : contrôler folio, extras, dépôts et ajustements pour éviter les litiges.', 'À la passation : transmettre demandes ouvertes, incidents, soldes et arrivées à suivre.'], bridgeTitle: 'Une procédure utile doit tenir pendant tous les shifts', bridgeText: 'Le manuel Front Office transforme ces contrôles en séquences de travail, règles d’escalade et outils modifiables pour l’équipe. Consultez un vrai chapitre avant de décider.', pdfLabel: 'Télécharger la checklist réception', pdfHref: '/downloads/checklists/fr/checklist-quotidienne-reception.pdf', related: [{ href: '/fr/hotel-front-office-checklist', title: 'Checklist quotidienne réception' }, { href: '/fr/hotel-night-audit-checklist', title: 'Checklist Night Audit' }, { href: '/fr/modele-passation-reception', title: 'Modèle de passation réception' }] },
      en: { eyebrow: 'Front desk procedure · practical answer', answerTitle: 'The front desk procedure in six controls', answerIntro: 'A reliable front desk follows the same logic on every shift: prepare, verify, welcome, resolve exceptions, secure departure and hand over.', steps: ['Before arrival: review reservations, preferences, VIPs, guarantees and room status.', 'At check-in: confirm identity, reservation, rate, payment and essential stay information.', 'Assign only rooms released after a physical Housekeeping inspection.', 'For exceptions: name a solution, an owner and a time frame, then record the request.', 'Before check-out: review folio, extras, deposits and adjustments to prevent disputes.', 'At handover: pass on open requests, incidents, balances and arrivals requiring attention.'], bridgeTitle: 'A useful procedure must work on every shift', bridgeText: 'The Front Office manual turns these controls into service sequences, escalation rules and editable team tools. Read a real chapter before deciding.', pdfLabel: 'Download the front desk checklist', pdfHref: '/downloads/checklists/en/front-desk-daily-checklist.pdf', related: [{ href: '/en/hotel-front-office-checklist', title: 'Front desk daily checklist' }, { href: '/en/hotel-night-audit-checklist', title: 'Night Audit checklist' }, { href: '/en/front-desk-shift-handover-template', title: 'Front desk shift handover template' }] },
    },
  },
  'hotel-bathroom-cleaning-sop': {
    productId: 'hsk', department: 'Housekeeping', sampleTitle: { fr: 'Espaces communs & nettoyages spéciaux', en: 'Public Areas & Specialty Cleaning' }, samplePages: { fr: 41, en: 33 }, image: '/images/editorial-hospitality/housekeeping-cottonbro-6466482.jpg',
    copy: {
      fr: { eyebrow: 'Nettoyage salle de bain · méthode', answerTitle: 'L’ordre de nettoyage à appliquer', answerIntro: 'La séquence va du propre vers le sale et du haut vers le bas. Le contrôle final se fait depuis le point de vue du client.', steps: ['Retirer linge usagé, déchets et produits ouverts ; repérer tout effet personnel.', 'Aérer, éclairer et préparer les chiffons adaptés à chaque zone.', 'Nettoyer miroir et verre, puis vasque, plan, robinetterie et douche ou baignoire.', 'Traiter les toilettes en dernier avec le matériel réservé à cette zone.', 'Nettoyer et sécher le sol, remettre les amenities, puis vérifier cheveux, traces, odeur et alignement.'], bridgeTitle: 'La checklist vérifie. Le manuel fixe la méthode.', bridgeText: 'Pour rendre ce résultat constant d’une chambre et d’une équipe à l’autre, le manuel Housekeeping détaille les séquences, inspections et contrôles qualité.', pdfLabel: 'Télécharger la checklist salle de bain', pdfHref: '/downloads/checklists/fr/checklist-nettoyage-salle-de-bain-hotel.pdf', related: [{ href: '/fr/hotel-housekeeping-checklist', title: 'Toutes les checklists housekeeping' }, { href: '/fr/blog/housekeeping-room-inspection', title: 'Inspection de chambre' }, { href: '/fr/blog/hotel-room-cleaning-checklist', title: 'Checklist nettoyage de chambre' }] },
      en: { eyebrow: 'Bathroom cleaning SOP · method', answerTitle: 'The cleaning order to follow', answerIntro: 'Work from clean to dirty and top to bottom. Make the final check from the guest’s point of view.', steps: ['Remove used linen, waste and opened products; check for guest belongings.', 'Ventilate, switch on the lights and prepare colour-coded cloths for each zone.', 'Clean mirror and glass, then vanity, basin, chrome and shower or bath.', 'Clean the toilet last with tools reserved for that area.', 'Clean and dry the floor, restock amenities, then check for hair, marks, odour and alignment.'], bridgeTitle: 'The checklist verifies. The manual sets the method.', bridgeText: 'To make the result consistent across rooms and shifts, the Housekeeping manual details cleaning sequences, inspections and quality control.', pdfLabel: 'Download the bathroom checklist', pdfHref: '/downloads/checklists/en/hotel-bathroom-cleaning-checklist.pdf', related: [{ href: '/en/hotel-housekeeping-checklist', title: 'All Housekeeping checklists' }, { href: '/en/blog/housekeeping-room-inspection', title: 'Room inspection procedure' }, { href: '/en/blog/hotel-room-cleaning-checklist', title: 'Room cleaning checklist' }] },
    },
  },
  'hotel-room-service-sops': {
    productId: 'fb', department: 'Food & Beverage', sampleTitle: { fr: 'Bar & service des boissons', en: 'Bar & Beverage Service' }, samplePages: { fr: 17, en: 17 }, image: '/images/editorial-hospitality/fb-room-service.png',
    copy: {
      fr: { eyebrow: 'SOP room service · séquence', answerTitle: 'De la commande au débarrassage', answerIntro: 'Le room service se pilote comme un seul parcours. Une erreur de prise de commande ou de timing se voit immédiatement à la porte de la chambre.', steps: ['Confirmer chambre, nom, couverts, commande, allergies, préférences et délai annoncé.', 'Relire la commande avant de la transmettre en cuisine.', 'Vérifier température, présentation, couverts, boissons, condiments et addition avant le départ.', 'Frapper, attendre l’accord du client, installer selon sa préférence et présenter les plats.', 'Expliquer le débarrassage, suivre les retards et fermer la commande dans le système.'], bridgeTitle: 'Un service en chambre cohérent se prépare en amont', bridgeText: 'Le manuel F&B rassemble les standards de service, les contrôles de mise en place et les outils modifiables pour les équipes restaurant, bar et room service.', pdfLabel: 'Télécharger la checklist room service', pdfHref: '/downloads/checklists/fr/checklist-room-service.pdf', related: [{ href: '/fr/checklist-room-service-hotel', title: 'Checklist room service' }, { href: '/fr/hotel-fb-sop', title: 'Procédures F&B' }, { href: '/fr/blog/hotel-fb-restaurant-procedures', title: 'Procédures restaurant' }] },
      en: { eyebrow: 'Room service SOP · sequence', answerTitle: 'From order taking to tray collection', answerIntro: 'In-room dining is one connected journey. An order or timing error becomes immediately visible at the guest’s door.', steps: ['Confirm room, name, covers, order, allergies, preferences and promised time.', 'Repeat the order before sending it to the kitchen.', 'Check temperature, presentation, cutlery, beverages, condiments and bill before dispatch.', 'Knock, wait for permission, set up where the guest prefers and present each item.', 'Explain tray collection, manage delays proactively and close the order in the system.'], bridgeTitle: 'Consistent room service starts before delivery', bridgeText: 'The F&B manual brings together service standards, setup checks and editable tools for restaurant, bar and room service teams.', pdfLabel: 'Download the room service checklist', pdfHref: '/downloads/checklists/en/room-service-checklist.pdf', related: [{ href: '/en/hotel-room-service-checklist', title: 'Room service checklist' }, { href: '/en/hotel-fb-sop', title: 'F&B procedures' }, { href: '/en/blog/hotel-fb-restaurant-procedures', title: 'Restaurant procedures' }] },
    },
  },
  'housekeeping-room-inspection': {
    productId: 'hsk', department: 'Housekeeping', sampleTitle: { fr: 'Espaces communs & nettoyages spéciaux', en: 'Public Areas & Specialty Cleaning' }, samplePages: { fr: 41, en: 33 }, image: '/images/editorial-hospitality/housekeeping-cottonbro-6466482.jpg',
    copy: {
      fr: { eyebrow: 'Inspection chambre · contrôle qualité', answerTitle: 'La chambre propre n’est pas encore libérée', answerIntro: 'Le départ passe de « propre » à « inspecté » uniquement après le contrôle physique d’une gouvernante ou d’un responsable.', steps: ['Contrôler la première impression depuis la porte : odeur, température, lit, lumière et ordre.', 'Inspecter chambre et salle de bain selon un parcours fixe, sans oublier les zones à risque.', 'Tester équipements, amenities et détails de présentation.', 'Tracer les écarts par chambre et demander une correction précise.', 'Réinspecter puis libérer la chambre dans le PMS ; transmettre le statut à la réception.'], bridgeTitle: 'Transformer les défauts en standard partagé', bridgeText: 'Le manuel Housekeeping relie inspection, statut des chambres, méthode de nettoyage, score qualité et accompagnement des équipes.', pdfLabel: 'Télécharger la checklist gouvernante', pdfHref: '/downloads/housekeeping-checklists/fr/checklist-gouvernante-etage-superviseur.pdf', related: [{ href: '/fr/hotel-housekeeping-checklist', title: 'Checklists housekeeping gratuites' }, { href: '/fr/blog/hotel-bathroom-cleaning-sop', title: 'Nettoyage de salle de bain' }, { href: '/fr/blog/hotel-housekeeping-supervisor-checklist', title: 'Checklist superviseur' }] },
      en: { eyebrow: 'Room inspection · quality control', answerTitle: 'A clean room is not yet released', answerIntro: 'A departure room moves from Clean to Inspected only after a supervisor or manager has physically checked it.', steps: ['Assess the first impression from the doorway: scent, temperature, bed, lighting and order.', 'Inspect bedroom and bathroom in a fixed sequence, including high-risk areas.', 'Test equipment, amenities and presentation details.', 'Log defects by room and request a specific correction.', 'Reinspect, release the room in the PMS and communicate its status to Front Office.'], bridgeTitle: 'Turn defects into a shared standard', bridgeText: 'The Housekeeping manual connects inspection, room status, cleaning methods, quality scoring and team coaching.', pdfLabel: 'Download the supervisor checklist', pdfHref: '/downloads/housekeeping-checklists/en/floor-housekeeping-supervisor-checklist.pdf', related: [{ href: '/en/hotel-housekeeping-checklist', title: 'Free Housekeeping checklists' }, { href: '/en/blog/hotel-bathroom-cleaning-sop', title: 'Bathroom cleaning SOP' }, { href: '/en/blog/hotel-housekeeping-supervisor-checklist', title: 'Supervisor checklist' }] },
    },
  },
  'hotel-housekeeping-supervisor-checklist': {
    productId: 'hsk', department: 'Housekeeping', sampleTitle: { fr: 'Espaces communs & nettoyages spéciaux', en: 'Public Areas & Specialty Cleaning' }, samplePages: { fr: 41, en: 33 }, image: '/images/editorial-hospitality/housekeeping-cottonbro-6466482.jpg',
    copy: {
      fr: {
        eyebrow: 'Checklist gouvernante · inspection et libération',
        answerTitle: 'Les six contrôles de la gouvernante avant de libérer une chambre',
        answerIntro: 'Le statut « propre » signale le travail terminé par l’équipier. La chambre ne passe à « inspectée » qu’après un contrôle physique et une éventuelle correction.',
        steps: [
          'Prioriser les départs, arrivées anticipées, VIP, chambres bloquées et demandes de la réception.',
          'Répartir les chambres selon la charge réelle et vérifier linge, produits, chariots et équipements.',
          'Inspecter depuis la porte, puis suivre le même parcours : chambre, salle de bain, équipements et présentation.',
          'Noter chaque écart par chambre et donner une correction précise à la personne concernée.',
          'Réinspecter les points corrigés avant de passer la chambre à « inspectée » dans le PMS.',
          'Transmettre la disponibilité à la réception et utiliser les défauts récurrents pour coacher l’équipe.',
        ],
        bridgeTitle: 'Une inspection reproductible sur chaque étage',
        bridgeText: 'Le manuel Housekeeping relie la checklist aux standards de nettoyage, aux statuts des chambres et au suivi des défauts. Ouvrez un vrai chapitre pour voir comment les procédures sont présentées.',
        pdfLabel: 'Télécharger la checklist gouvernante', pdfHref: '/downloads/housekeeping-checklists/fr/checklist-gouvernante-etage-superviseur.pdf', downloadTitle: 'Besoin de la checklist gouvernante d’étage ?',
        related: [{ href: '/fr/blog/housekeeping-room-inspection', title: 'Inspection de chambre' }, { href: '/fr/blog/hotel-room-cleaning-checklist', title: 'Nettoyage de chambre' }, { href: '/fr/hotel-housekeeping-checklist', title: 'Checklists Housekeeping' }],
      },
      en: {
        eyebrow: 'Supervisor checklist · inspection and release',
        answerTitle: 'Six supervisor checks before releasing a room',
        answerIntro: 'Clean means the attendant has finished. A room becomes Inspected only after a physical check and any required correction.',
        steps: [
          'Prioritise departures, early arrivals, VIPs, blocked rooms and Front Office requests.',
          'Allocate rooms by actual workload and check linen, supplies, trolleys and equipment.',
          'Inspect from the doorway, then follow a fixed route through bedroom, bathroom, equipment and presentation.',
          'Log each defect by room and assign a specific correction to the relevant team member.',
          'Reinspect corrected points before changing the PMS status to Inspected.',
          'Tell Front Office the room is ready and use recurring defects for team coaching.',
        ],
        bridgeTitle: 'Make inspection repeatable on every floor',
        bridgeText: 'The Housekeeping manual connects the checklist with cleaning standards, room status and defect tracking. Open a real chapter to see how the procedures are presented.',
        pdfLabel: 'Download the supervisor checklist', pdfHref: '/downloads/housekeeping-checklists/en/floor-housekeeping-supervisor-checklist.pdf', downloadTitle: 'Need the printable supervisor checklist?',
        related: [{ href: '/en/blog/housekeeping-room-inspection', title: 'Room inspection procedure' }, { href: '/en/blog/hotel-room-cleaning-checklist', title: 'Room cleaning checklist' }, { href: '/en/hotel-housekeeping-checklist', title: 'Housekeeping checklists' }],
      },
    },
  },
  'hotel-spa-wellness-sops': {
    productId: 'spa', department: 'Spa & Wellness', sampleTitle: { fr: 'Carte de soins & techniques', en: 'Treatment Menu & Techniques' }, samplePages: { fr: 16, en: 16 }, image: '/images/editorial-hospitality/spa-treatment-room.png',
    copy: {
      fr: {
        eyebrow: 'SOP Spa · parcours de soin',
        answerTitle: 'Une procédure Spa, de la préparation à la remise en état',
        answerIntro: 'Le protocole doit rendre l’expérience constante sans rendre le soin mécanique. Chaque étape précise ce que l’équipe vérifie, communique et transmet.',
        steps: [
          'Avant l’ouverture, contrôler la cabine, le linge, les produits, la température, l’hygiène et le planning.',
          'Accueillir le client et confirmer le soin, ses préférences, les précautions et le temps disponible.',
          'Appliquer la séquence de soin prévue en adaptant pression, confort et communication au client.',
          'Conclure le soin sans précipitation : retour au calme, conseils adaptés et prochaines étapes.',
          'Remettre la cabine en état : nettoyage, linge, consommables, équipement et statut de disponibilité.',
          'Tracer les incidents, demandes et retours utiles pour la prochaine équipe.',
        ],
        bridgeTitle: 'Des standards clairs, sans effacer la personnalisation',
        bridgeText: 'Le manuel Spa & Wellness détaille le parcours client, les protocoles, la conduite des praticiens et l’organisation des cabines. Son chapitre consultable montre la forme réelle du document.',
        related: [{ href: '/fr/free-hotel-procedures', title: 'Extraits gratuits des manuels' }, { href: '/fr/hotel-sop', title: 'Guide des SOP hôtelières' }, { href: '/fr/resources', title: 'Toutes les ressources' }],
      },
      en: {
        eyebrow: 'Spa SOP · treatment journey',
        answerTitle: 'A Spa procedure from preparation to room reset',
        answerIntro: 'A protocol should make the experience consistent without making the treatment mechanical. Each stage says what the team checks, communicates and hands over.',
        steps: [
          'Before opening, check the treatment room, linen, products, temperature, hygiene and schedule.',
          'Welcome the guest and confirm the treatment, preferences, precautions and available time.',
          'Follow the treatment sequence while adapting pressure, comfort and communication to the guest.',
          'Close without rushing: allow recovery, offer relevant advice and explain next steps.',
          'Reset the room: clean surfaces, replace linen and consumables, check equipment and update availability.',
          'Record incidents, requests and feedback that matter to the next shift.',
        ],
        bridgeTitle: 'Clear standards that leave room for personalisation',
        bridgeText: 'The Spa & Wellness manual covers the guest journey, treatment protocols, therapist conduct and room operations. Its readable chapter shows the real document format.',
        related: [{ href: '/en/free-hotel-procedures', title: 'Free manual chapters' }, { href: '/en/hotel-sop', title: 'Hotel SOP guide' }, { href: '/en/resources', title: 'All resources' }],
      },
    },
  },
  'hotel-fb-restaurant-procedures': {
    productId: 'fb', department: 'Food & Beverage', sampleTitle: { fr: 'Bar & service des boissons', en: 'Bar & Beverage Service' }, samplePages: { fr: 17, en: 17 }, image: '/images/editorial-hospitality/fb-breakfast-buffet.png',
    copy: {
      fr: {
        eyebrow: 'Procédures restaurant · séquence de service',
        answerTitle: 'Du briefing à la fermeture : la séquence restaurant',
        answerIntro: 'Un service fluide commence avant l’arrivée du premier client et se termine par une passation exploitable. Voici les contrôles à rendre explicites.',
        steps: [
          'Faire le briefing : réservations, groupes, allergies signalées, menu, ruptures et répartition des rôles.',
          'Contrôler la salle, les tables, le matériel, le POS, les stocks et la coordination avec la cuisine.',
          'Accueillir, installer, présenter l’offre et confirmer les besoins particuliers avant la prise de commande.',
          'Cadencer boissons et plats, vérifier la satisfaction au bon moment et traiter tout écart sans attendre.',
          'Contrôler l’addition, remercier le client et remettre la table selon le standard.',
          'Fermer caisse et postes, noter les incidents, les manquants et les consignes pour le service suivant.',
        ],
        bridgeTitle: 'Transformer une séquence en standard de service',
        bridgeText: 'Le manuel F&B documente les gestes, contrôles et passations pour le restaurant, le bar et le room service. Consultez son chapitre réel avant d’explorer le manuel complet.',
        pdfLabel: 'Télécharger la checklist d’ouverture', pdfHref: '/downloads/checklists/fr/checklist-ouverture-restaurant.pdf',
        related: [{ href: '/fr/checklist-ouverture-restaurant', title: 'Checklist ouverture restaurant' }, { href: '/fr/blog/hotel-room-service-sops', title: 'Procédure room service' }, { href: '/fr/hotel-fb-sop', title: 'Ressources F&B' }],
      },
      en: {
        eyebrow: 'Restaurant SOP · service sequence',
        answerTitle: 'From briefing to close: the restaurant sequence',
        answerIntro: 'Smooth service starts before the first guest arrives and ends with a usable handover. These are the checks the team should make explicit.',
        steps: [
          'Brief the team on reservations, groups, known allergies, menu changes, shortages and roles.',
          'Check dining room, tables, equipment, POS, stock and coordination with the kitchen.',
          'Welcome and seat guests, explain the offer and confirm special requirements before taking orders.',
          'Pace beverages and courses, check satisfaction at the right moment and resolve gaps promptly.',
          'Verify the bill, thank the guest and reset the table to standard.',
          'Close tills and stations; log incidents, shortages and instructions for the next service.',
        ],
        bridgeTitle: 'Turn a sequence into a service standard',
        bridgeText: 'The F&B manual documents actions, checks and handovers for restaurant, bar and room service. Read its real chapter before exploring the complete manual.',
        pdfLabel: 'Download the opening checklist', pdfHref: '/downloads/checklists/en/restaurant-opening-checklist.pdf',
        related: [{ href: '/en/restaurant-opening-checklist', title: 'Restaurant opening checklist' }, { href: '/en/blog/hotel-room-service-sops', title: 'Room service SOP' }, { href: '/en/hotel-fb-sop', title: 'F&B resources' }],
      },
    },
  },
  'hotel-front-office-sop': {
    productId: 'fo', department: 'Front Office', sampleTitle: { fr: 'Communication client', en: 'Guest Communication' }, samplePages: { fr: 29, en: 28 }, image: '/images/editorial-hospitality/hero-reception-natural-v4.png',
    copy: {
      fr: {
        eyebrow: 'SOP Front Office · mode d’emploi',
        answerTitle: 'Ce que doit contenir une SOP réception utilisable',
        answerIntro: 'Une SOP efficace décrit une situation précise et donne à chaque vacation la même marche à suivre, y compris lorsqu’une exception survient.',
        steps: [
          'Nommer le scénario et son déclencheur : arrivée, départ, réclamation, changement de chambre ou passation.',
          'Attribuer un responsable et les informations à vérifier avant d’agir : PMS, identité, paiement et statut chambre.',
          'Écrire la séquence observable, avec les mots à dire et les contrôles à effectuer.',
          'Prévoir les exceptions, le niveau d’autonomie et le point d’escalade vers un responsable.',
          'Indiquer ce qui doit être enregistré dans le PMS et transmis à l’équipe suivante.',
          'Tester la procédure en situation réelle, former l’équipe et réviser les écarts récurrents.',
        ],
        bridgeTitle: 'Du document au réflexe partagé par la réception',
        bridgeText: 'Le manuel Front Office regroupe ces procédures de service, de communication et de contrôle dans un référentiel modifiable. Son chapitre consultable permet de juger le contenu avant achat.',
        pdfLabel: 'Télécharger la checklist réception', pdfHref: '/downloads/checklists/fr/checklist-quotidienne-reception.pdf',
        related: [{ href: '/fr/blog/hotel-front-desk-procedures', title: 'Procédure réception étape par étape' }, { href: '/fr/hotel-front-office-checklist', title: 'Checklist quotidienne réception' }, { href: '/fr/modele-passation-reception', title: 'Modèle de passation' }],
      },
      en: {
        eyebrow: 'Front Office SOP · practical framework',
        answerTitle: 'What a usable Front Office SOP should contain',
        answerIntro: 'A useful SOP covers one specific situation and gives every shift the same course of action, including when an exception occurs.',
        steps: [
          'Name the scenario and trigger: arrival, departure, complaint, room move or shift handover.',
          'Assign an owner and the facts to verify first: PMS record, identity, payment and room status.',
          'Write observable steps, including what to say and what to check.',
          'Define exceptions, decision authority and when to escalate to a manager.',
          'Specify what must be recorded in the PMS and handed to the next shift.',
          'Test the SOP in service, train the team and revise recurring gaps.',
        ],
        bridgeTitle: 'From document to a shared front desk reflex',
        bridgeText: 'The Front Office manual brings service, communication and control procedures into one editable reference. Its readable chapter lets you assess the content before buying.',
        pdfLabel: 'Download the front desk checklist', pdfHref: '/downloads/checklists/en/front-desk-daily-checklist.pdf',
        related: [{ href: '/en/blog/hotel-front-desk-procedures', title: 'Front desk procedure step by step' }, { href: '/en/hotel-front-office-checklist', title: 'Front desk daily checklist' }, { href: '/en/front-desk-shift-handover-template', title: 'Shift handover template' }],
      },
    },
  },
  'hotel-room-cleaning-checklist': {
    productId: 'hsk', department: 'Housekeeping', sampleTitle: { fr: 'Espaces communs & nettoyages spéciaux', en: 'Public Areas & Specialty Cleaning' }, samplePages: { fr: 41, en: 33 }, image: '/images/editorial-hospitality/housekeeping-cottonbro-6466482.jpg',
    copy: {
      fr: {
        eyebrow: 'Nettoyage de chambre · checklist opérationnelle',
        answerTitle: 'La chambre à blanc en sept phases contrôlables',
        answerIntro: 'Une checklist efficace suit la séquence réelle du travail et se termine par un autocontrôle. La libération pour la vente dépend ensuite de l’inspection de la gouvernante.',
        steps: [
          'Préparer chariot, linge, produits et matériel ; lire les priorités et consignes de la chambre.',
          'Frapper, annoncer le service, attendre et respecter les effets personnels et le statut du client.',
          'Ouvrir, aérer, retirer déchets et linge usagé ; repérer maintenance et objets oubliés.',
          'Nettoyer et désinfecter la salle de bain dans un ordre fixe, puis sécher et réapprovisionner.',
          'Dépoussiérer la chambre du haut vers le bas et refaire le lit selon le standard.',
          'Vérifier équipements, minibar, amenities, sols, vitres et présentation finale.',
          'Faire l’autocontrôle depuis la porte, signaler les défauts et passer la chambre à « propre » pour inspection.',
        ],
        bridgeTitle: 'Une chambre propre, puis une chambre inspectée',
        bridgeText: 'Le manuel Housekeeping précise les méthodes de nettoyage, le contrôle qualité et la responsabilité de chaque étape. Le chapitre consultable montre comment ces standards sont documentés.',
        pdfLabel: 'Télécharger la checklist chambre à blanc', pdfHref: '/downloads/checklists/fr/checklist-chambre-a-blanc.pdf', downloadTitle: 'Besoin de checklists de nettoyage de chambre imprimables ?',
        related: [{ href: '/fr/blog/hotel-bathroom-cleaning-sop', title: 'Nettoyage de salle de bain' }, { href: '/fr/blog/housekeeping-room-inspection', title: 'Inspection de chambre' }, { href: '/fr/hotel-housekeeping-checklist', title: 'Checklists Housekeeping' }],
      },
      en: {
        eyebrow: 'Room cleaning · operational checklist',
        answerTitle: 'Departure room cleaning in seven checkable phases',
        answerIntro: 'An effective checklist follows the actual cleaning sequence and ends with a self-check. The room is released for sale only after supervisor inspection.',
        steps: [
          'Prepare trolley, linen, supplies and tools; review room priorities and special instructions.',
          'Knock, announce service, wait and respect guest belongings and room status.',
          'Open and ventilate; remove waste and used linen; note maintenance issues and lost property.',
          'Clean and disinfect the bathroom in a fixed order, then dry and restock it.',
          'Dust the bedroom top to bottom and make the bed to standard.',
          'Check equipment, minibar, amenities, floors, glass and final presentation.',
          'Self-inspect from the doorway, report defects and mark the room Clean for supervisor inspection.',
        ],
        bridgeTitle: 'First Clean, then Inspected',
        bridgeText: 'The Housekeeping manual sets out cleaning methods, quality control and ownership of each stage. The readable chapter shows how those standards are documented.',
        pdfLabel: 'Download the departure room checklist', pdfHref: '/downloads/checklists/en/departure-room-cleaning-checklist.pdf', downloadTitle: 'Need printable room cleaning tools?',
        related: [{ href: '/en/blog/hotel-bathroom-cleaning-sop', title: 'Bathroom cleaning SOP' }, { href: '/en/blog/housekeeping-room-inspection', title: 'Room inspection' }, { href: '/en/hotel-housekeeping-checklist', title: 'Housekeeping checklists' }],
      },
    },
  },
}

type Props = { locale: Locale; slug: Slug; article: BlogArticle; extra?: { title: string; intro: string; items: string[] }; excerpt?: { label: string; title: string; intro: string; rows: { term: string; detail: string }[] } }

export default function BlogSearchLandingPreview({ locale, slug, article, extra, excerpt }: Props) {
  const [readerOpen, setReaderOpen] = useState(false)
  const [pdfClicked, setPdfClicked] = useState(false)
  const isEn = locale === 'en'
  const config = CONFIG[slug]
  const copy = config.copy[locale]
  const productHref = `/${locale}/playbooks/${config.productId}`
  const coverName = config.productId === 'fo' ? 'front-office' : config.productId
  const coverExt = config.productId === 'fo' ? 'png' : 'jpg'
  const cover = `/Previews/${coverName}-chapter04/${locale}/page-01.${coverExt}`
  const productLabel = isEn ? `${config.department} SOP Manual` : `Manuel SOP ${config.department}`
  const productEvent = { article_slug: slug, placement: 'blog_search_preview', product: config.productId }

  return <main className="min-h-screen bg-[#fcfbf8] pb-24 text-[#10251d]">
    <header className="border-b border-[#e8dfd1] bg-[#f5f1e9] px-5 pb-8 pt-[calc(var(--site-header-height)+2rem)] sm:px-8 lg:pb-10">
      <div className="mx-auto max-w-[1200px]">
        <Link href={`/${locale}/blog`} className="inline-flex items-center gap-1 text-xs font-semibold text-[#5b665e] hover:underline">← {isEn ? 'All guides' : 'Tous les guides'}</Link>
        <p className="mt-6 text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{copy.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.25rem,4.6vw,3.75rem)] font-medium leading-[1.06] tracking-[-.025em]">{article.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#526257]">{article.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#practical-answer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#10251d] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#263c31]">{isEn ? 'Go to the practical answer' : 'Voir la réponse pratique'}<ArrowRight size={15} /></a>
          {copy.pdfHref && <TrackedLink href={copy.pdfHref} download eventName="free_checklist_download_clicked" eventProperties={{ article_slug: slug, placement: 'blog_hero', department: config.productId }} onClick={() => setPdfClicked(true)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#baa783] bg-white px-5 py-2.5 text-xs font-semibold text-[#10251d] hover:bg-[#eee6d7]"><Download size={15} />{copy.pdfLabel}</TrackedLink>}
        </div>
      </div>
    </header>

    <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-9 sm:px-8 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-8">
      <div className="min-w-0">
        <section id="practical-answer" className="scroll-mt-24 rounded-[22px] border border-[#dacdb7] bg-white p-6 shadow-[0_5px_20px_rgba(20,37,29,.04)] sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'The answer first' : 'La réponse d’abord'}</p>
          <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">{copy.answerTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-[#526257]">{copy.answerIntro}</p>
          <ol className="mt-5 grid gap-2.5">{copy.steps.map((step, index) => <li key={step} className="flex gap-3 rounded-xl bg-[#f7f4ee] p-3.5 text-sm leading-6 text-[#32483a]"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e9ddca] text-xs font-bold text-[#705630]">{index + 1}</span><span>{step}</span></li>)}</ol>
          {copy.downloadTitle && <h2 className="mt-6 font-display text-xl leading-tight">{copy.downloadTitle}</h2>}
          <div className="mt-5 flex flex-wrap items-center gap-3">{copy.pdfHref && <TrackedLink href={copy.pdfHref} download eventName="free_checklist_download_clicked" eventProperties={{ article_slug: slug, placement: 'blog_answer', department: config.productId }} onClick={() => setPdfClicked(true)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#baa783] px-4 py-2.5 text-xs font-semibold text-[#10251d]"><Download size={15} />{copy.pdfLabel}</TrackedLink>}<a href="#full-guide" className="inline-flex min-h-11 items-center gap-1 text-xs font-semibold text-[#244437] underline underline-offset-2">{isEn ? 'Read the detailed procedure' : 'Lire la procédure détaillée'}<ArrowRight size={14} /></a></div>
          {pdfClicked && <p role="status" className="mt-3 text-xs text-[#526257]">{isEn ? 'The PDF is ready. The detailed method and a manual sample are below.' : 'Le PDF est prêt. La méthode détaillée et un extrait du manuel figurent ci-dessous.'}</p>}
        </section>

        <section className="mt-7 rounded-[22px] border border-[#d8c8ad] bg-[#f3eee4] p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{productLabel}</p>
          <h2 className="mt-2 font-display text-[clamp(1.7rem,3vw,2.3rem)] leading-tight">{copy.bridgeTitle}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526257]">{copy.bridgeText}</p>
          <div className="mt-5 flex flex-wrap gap-3"><button type="button" onClick={() => setReaderOpen(true)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#baa783] bg-white px-4 py-2.5 text-xs font-semibold"><BookOpen size={15} />{isEn ? 'Read a real sample chapter' : 'Lire un vrai chapitre extrait'}</button><TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={productEvent} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#10251d] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#263c31]">{isEn ? 'Explore the complete manual' : 'Découvrir le manuel complet'} · <PriceDisplay productType="playbook" /><ArrowRight size={14} /></TrackedLink></div>
        </section>

        <figure className="mt-8 overflow-hidden rounded-[20px] border border-[#e5dccf] bg-[#eee6d7]"><Image src={config.image} alt={isEn ? `${config.department} hotel operations` : `Opérations hôtelières ${config.department}`} width={1080} height={720} sizes="(max-width: 1024px) 100vw, 850px" className="aspect-[2/1] w-full object-cover" /></figure>

        <article id="full-guide" className="mt-11 scroll-mt-24">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'Detailed guide' : 'Guide détaillé'}</p>
          <p className="mt-2 font-display text-3xl">{isEn ? 'The full procedure, point by point' : 'La procédure complète, point par point'}</p>
          <p className="mt-4 text-sm leading-7 text-[#46594c]">{article.intro}</p>
          <nav aria-label={isEn ? 'Article contents' : 'Sommaire de l’article'} className="mt-5 rounded-[18px] border border-[#e5dccf] bg-white p-5"><p className="text-xs font-semibold uppercase tracking-[.12em] text-[#96764a]">{isEn ? 'In this guide' : 'Dans ce guide'}</p><ul className="mt-3 grid gap-2 sm:grid-cols-2">{article.sections.map((section, index) => <li key={section.h2}><a href={`#article-section-${index}`} className="text-xs leading-5 text-[#244437] underline underline-offset-2">{section.h2}</a></li>)}</ul></nav>
          {article.sections.map((section, index) => <section id={`article-section-${index}`} key={section.h2} className="mt-9 scroll-mt-24 border-b border-[#e6ded1] pb-8 last:border-0"><h2 className="font-display text-[1.65rem] leading-tight">{section.h2}</h2><p className="mt-3 text-sm leading-7 text-[#46594c]">{section.content}</p>{section.h3Items && <div className="mt-5 space-y-5">{section.h3Items.map(item => <div key={item.heading}><h3 className="text-sm font-semibold text-[#183529]">{item.heading}</h3><p className="mt-1 text-sm leading-7 text-[#526257]">{item.text}</p></div>)}</div>}{index === 1 && <TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ ...productEvent, placement: 'blog_body' }} className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#244437] underline underline-offset-2">{isEn ? 'See the complete SOP manual' : 'Voir le manuel SOP complet'}<ArrowRight size={14} /></TrackedLink>}</section>)}
        </article>

        {extra && <section className="mt-10 rounded-[18px] border border-[#e5dccf] bg-white p-6"><h2 className="font-display text-2xl">{extra.title}</h2><p className="mt-2 text-sm leading-6 text-[#526257]">{extra.intro}</p><ul className="mt-4 space-y-2">{extra.items.map(item => <li key={item} className="flex gap-2 text-sm leading-6 text-[#46594c]"><Check size={16} className="mt-1 shrink-0 text-[#a58658]" />{item}</li>)}</ul></section>}
        {excerpt && <section className="mt-10"><p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{excerpt.label}</p><h2 className="mt-2 font-display text-2xl">{excerpt.title}</h2><p className="mt-3 text-sm leading-6 text-[#526257]">{excerpt.intro}</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{excerpt.rows.map(row => <div key={row.term} className="rounded-xl border border-[#e5dccf] bg-white p-4"><h3 className="text-sm font-semibold">{row.term}</h3><p className="mt-1 text-xs leading-5 text-[#526257]">{row.detail}</p></div>)}</div></section>}
        <p className="mt-10 rounded-[18px] bg-[#f4f0e8] p-5 text-sm leading-7 text-[#46594c]">{article.conclusion}</p>
        {article.faqs && article.faqs.length > 0 && <section className="mt-11"><h2 className="font-display text-3xl">{isEn ? 'Frequently Asked Questions' : 'Foire aux questions'}</h2><div className="mt-5 space-y-4">{article.faqs.map(item => <div key={item.question} className="border-b border-[#e5dccf] pb-4"><h3 className="text-sm font-semibold">{item.question}</h3><p className="mt-2 text-sm leading-6 text-[#526257]">{item.answer}</p></div>)}</div></section>}
        <section className="mt-11 rounded-[22px] bg-[#10251d] p-6 text-white sm:p-8"><h2 className="font-display text-2xl">{isEn ? 'Ready to structure your operations?' : 'Prêt à structurer vos opérations ?'}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#d9e1d9]">{copy.bridgeText}</p><TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ ...productEvent, placement: 'blog_end' }} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#eee6d7] px-5 py-2.5 text-xs font-semibold text-[#10251d]">{isEn ? 'Explore the complete manual' : 'Découvrir le manuel complet'} · <PriceDisplay productType="playbook" /><ArrowRight size={14} /></TrackedLink></section>
        <section className="mt-11"><h2 className="font-display text-2xl">{isEn ? 'Related free resources' : 'Ressources gratuites associées'}</h2><div className="mt-4 grid gap-2 sm:grid-cols-2">{copy.related.map(item => <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center justify-between gap-2 rounded-xl border border-[#e5dccf] bg-white px-4 py-2 text-xs font-semibold text-[#244437] hover:border-[#ad9061]">{item.title}<ArrowRight size={14} className="shrink-0" /></Link>)}</div></section>
      </div>

      <aside className="hidden self-start lg:sticky lg:top-[calc(var(--site-header-height)+1rem)] lg:block"><div className="overflow-hidden rounded-[22px] border border-[#d8c8ad] bg-white shadow-[0_12px_32px_rgba(20,37,29,.08)]"><button type="button" onClick={() => setReaderOpen(true)} className="flex w-full flex-col items-center bg-[#eee6d7] px-6 pb-4 pt-5 text-left"><span className="relative block h-[275px] w-[195px] overflow-hidden rounded-[3px_9px_9px_3px] border border-[#d3c5aa] bg-[#10251d] shadow-[11px_14px_20px_rgba(19,33,24,.17)]"><Image src={cover} alt={isEn ? `Real ${config.department} sample chapter cover` : `Couverture du vrai chapitre extrait ${config.department}`} fill sizes="195px" className="object-cover" /></span><span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold"><BookOpen size={15} />{isEn ? 'Read 12 sample pages' : 'Lire 12 pages en aperçu'}<ArrowRight size={14} /></span></button><div className="p-5"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#96764a]">{productLabel}</p><h2 className="mt-2 font-display text-[1.5rem] leading-tight">{copy.bridgeTitle}</h2><p className="mt-2 text-xs leading-5 text-[#5b665e]">{copy.bridgeText}</p><TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ ...productEvent, placement: 'blog_sidebar' }} className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#10251d] px-4 py-2.5 text-xs font-semibold text-white">{isEn ? 'View the manual' : 'Voir le manuel'} · <PriceDisplay productType="playbook" /><ArrowRight size={14} /></TrackedLink></div></div></aside>
    </div>
    {readerOpen && <FrontOfficeExcerptDialog locale={locale} startPage={1} productId={config.productId} chapterNumber={4} chapterTitle={config.sampleTitle[locale]} chapterPages={config.samplePages[locale]} presentation="document" onClose={() => setReaderOpen(false)} />}
  </main>
}

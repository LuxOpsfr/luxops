export interface BlogSection {
  h2: string
  content: string
  h3Items?: { heading: string; text: string }[]
}

export interface BlogArticle {
  title: string
  description: string
  date: string
  readTime: string
  intro: string
  sections: BlogSection[]
  conclusion: string
  cta: { text: string; href: string }
  faqs?: { question: string; answer: string }[]
}

export interface BilingualArticle {
  slug: string
  en: BlogArticle
  fr: BlogArticle
}

export const articles: BilingualArticle[] = [
  {
    slug: 'hotel-operations-playbook',
    en: {
      title: 'What Is a Hotel Operations Playbook? (And Why Every Property Needs One)',
      description:
        'A hotel operations playbook is a structured collection of SOPs, service standards, and procedures for every department. Learn what it contains, why it matters, and how to implement one.',
      date: '2026-03-10',
      readTime: '7 min read',
      intro:
        'Most operational problems in hotels are not complex. They are the result of procedures that were never written down. The check-in that runs differently depending on who is at the desk. The housekeeping inspection that varies by room attendant. The complaint that gets handled inconsistently because there is no agreed standard. A hotel operations playbook is how properties fix that. Not all at once, but department by department, shift by shift.',
      sections: [
        {
          h2: 'What Is a Hotel Operations Playbook?',
          content:
            'A hotel operations playbook is a structured, department-by-department reference that documents the procedures, service standards, and protocols your team needs to work consistently. It is the institutional memory of the property: what experienced staff carry in their heads, written down and made accessible to everyone. When it works well, a new team member joining on a Monday can follow the same standard as someone who has been at the property for three years.',
          h3Items: [
            {
              heading: 'SOPs (Standard Operating Procedures)',
              text: 'Step-by-step instructions for recurring tasks: check-in, room turndown, complaint handling, mise en place, treatment preparation. Each one written so there is no room for interpretation during a busy shift.',
            },
            {
              heading: 'Service Standards',
              text: 'The expected quality, pace, tone, and presentation for every guest interaction. Standards define what good looks like at your property: not in general terms, but specifically, so the team knows when they have met it.',
            },
            {
              heading: 'Role Responsibilities',
              text: 'Clear accountability by position so every team member understands their scope and where handover to another role happens.',
            },
            {
              heading: 'Guest Journey Touchpoints',
              text: 'A mapped view of the full guest experience from pre-arrival to departure, with the corresponding staff actions at each stage. Useful for onboarding and for identifying gaps in service coverage.',
            },
          ],
        },
        {
          h2: 'Why Hotels Without a Playbook Struggle',
          content:
            "Most hotel operational problems trace back to the same root cause: knowledge that lives in people's heads rather than on paper. When those people leave, and in hospitality turnover is high, that knowledge leaves with them. A new hire starts from scratch. The team runs slightly differently every shift. Guests notice, even if they cannot name what is wrong.",
          h3Items: [
            {
              heading: 'Inconsistent Guest Experience',
              text: "When standards only live in people's heads, every shift runs slightly differently. A guest who stays twice may have two entirely different experiences: same room, same price, different quality.",
            },
            {
              heading: 'Slow Onboarding',
              text: "Without documented procedures, new staff spend weeks learning informally through observation and correction. A playbook cuts that significantly and reduces the errors that frustrate guests during the first weeks of a new hire's tenure.",
            },
            {
              heading: 'Management Dependency',
              text: 'When nothing is written down, supervisors spend their time fielding basic questions instead of running the floor. A playbook shifts that dynamic and gives the team the autonomy to work to a standard without constant oversight.',
            },
          ],
        },
        {
          h2: 'What a Hotel Operations Playbook Covers',
          content:
            'A useful playbook reflects how the hotel actually runs, department by department. At LuxOps, playbooks are structured around four core operational areas, each with dedicated procedures and service standards built from real hotel work.',
          h3Items: [
            {
              heading: 'Front Office',
              text: 'Check-in and check-out procedures, upselling protocols, concierge standards, telephone etiquette, complaint handling workflows, VIP arrival sequences.',
            },
            {
              heading: 'Housekeeping',
              text: 'Room inspection checklists (50+ criteria per room type), linen management, turndown service protocols, deep cleaning schedules, lost and found procedures.',
            },
            {
              heading: 'Food & Beverage',
              text: 'Restaurant service sequence, bar mise en place, room service procedures, buffet setup standards, banquet service protocols, allergen communication.',
            },
            {
              heading: 'Spa & Wellness',
              text: 'Treatment delivery standards, therapist conduct protocols, booking management, wellness programme structure, pre- and post-treatment care.',
            },
          ],
        },
        {
          h2: 'How to Implement a Playbook in Your Property',
          content:
            'A playbook only delivers value when it is embedded in daily operations. A PDF that sits in a shared folder and is never opened serves no purpose. These are the steps that actually make a playbook stick.',
          h3Items: [
            {
              heading: '1. Start with your highest-impact department',
              text: 'Do not start with the rarest or most complex procedure. Pick a high-frequency task where inconsistency is already visible: check-in, room inspection, complaint handling. Start there, see the results, then build from it.',
            },
            {
              heading: '2. Involve department heads',
              text: 'The people doing the work know how it actually gets done. Have department heads review and contribute to their section, not just sign off on it. Procedures that reflect reality get followed. Ones that do not, do not.',
            },
            {
              heading: '3. Train, do not just distribute',
              text: 'A playbook introduced in a training session lands differently from one sent as an email attachment. Walking the team through it, letting them ask questions, practicing the steps: that is how adoption happens.',
            },
            {
              heading: '4. Review quarterly',
              text: 'Operations change. A playbook that is six months out of date quietly starts working against you. Staff follow the document, not the current standard, or they stop following it entirely. Build a review schedule from the start.',
            },
          ],
        },
        {
          h2: 'Ready-Made Playbooks vs. Building From Scratch',
          content:
            'Building a full hotel operations playbook from scratch takes months and requires the kind of operational expertise most properties cannot dedicate internally. Ready-made playbooks built from real hotel experience give you a professionally structured foundation to adapt for your property, rather than starting from nothing. LuxOps playbooks cover Front Office, Housekeeping, F&B, and Spa, each running between 200 and 280 pages of documented procedures and service standards.',
        },
      ],
      conclusion:
        'A hotel operations playbook is not a bureaucratic document. It is what lets teams deliver consistent, reliable service regardless of who is on shift. Whether built from scratch or adapted from a structured template, the value shows up quickly: shorter onboarding times, fewer errors, and guests who get the same experience on their second visit as their first.',
      cta: { text: 'View Our Playbooks', href: '/en/playbooks' },
    },
    fr: {
      title: "Playbook opérationnel : structurer les SOP, standards et routines par département",
      description:
        "Un playbook opérationnel regroupe les SOPs, standards de service, checklists et routines de passation dont les équipes ont besoin pour travailler avec constance.",
      date: '2026-03-10',
      readTime: '7 min de lecture',
      intro:
        "La plupart des problèmes opérationnels ne sont pas complexes. Ils viennent souvent de procédures qui n’ont jamais été écrites clairement. Le check-in qui se déroule différemment selon qui est à la réception. L’inspection de chambre qui varie d’un valet à l’autre. La réclamation traitée de façon incohérente parce qu’il n’existe pas de standard établi. Un playbook opérationnel règle ce sujet département par département, shift par shift.",
      sections: [
        {
          h2: "Qu’est-ce qu’un playbook opérationnel ?",
          content:
            "Un playbook opérationnel est un document de référence structuré, département par département, qui documente les procédures, standards de service et protocoles dont les équipes ont besoin pour travailler de façon constante. C’est la mémoire opérationnelle de l’établissement : ce que les collaborateurs expérimentés portent dans leur tête, mis par écrit et rendu accessible à tous. Quand il fonctionne bien, un nouveau collaborateur arrivé le lundi peut travailler au même standard que quelqu’un présent depuis trois ans.",
          h3Items: [
            {
              heading: 'SOPs (procédures opérationnelles standard)',
              text: "Instructions pas-à-pas pour les tâches récurrentes : check-in, service de couverture, gestion des réclamations, mise en place, préparation des soins. Chacune rédigée pour ne laisser aucune place à l\'interprétation en plein service.",
            },
            {
              heading: 'Standards de service',
              text: "La qualité, le rythme, le ton et la présentation attendus pour chaque interaction client. Les standards définissent ce que bien faire signifie dans votre établissement, pas en termes généraux, mais de façon précise, pour que l\'équipe sache quand elle l\'a atteint.",
            },
            {
              heading: 'Responsabilités par poste',
              text: "Une responsabilité claire par fonction pour que chaque collaborateur comprenne son périmètre et l\'endroit où la passation vers un autre poste doit s\'effectuer.",
            },
            {
              heading: 'Parcours client',
              text: "Une vue cartographiée de l’expérience complète, de la pré-arrivée au départ, avec les actions des équipes à chaque étape. Utile pour l’intégration et pour identifier les angles morts dans la couverture de service.",
            },
          ],
        },
        {
          h2: "Pourquoi les établissements sans playbook peinent à performer",
          content:
            "La plupart des problèmes opérationnels ont la même cause : des savoirs qui vivent dans les têtes plutôt que sur un support clair. Quand ces personnes partent, ces savoirs partent avec elles. Un nouveau collaborateur repart de zéro. L’équipe fonctionne un peu différemment à chaque service. Les clients le sentent, même s’ils ne savent pas toujours l’expliquer.",
          h3Items: [
            {
              heading: 'Expérience client incohérente',
              text: "Quand les standards ne vivent que dans les têtes, chaque service se déroule légèrement différemment. Un client qui séjourne deux fois peut vivre deux expériences différentes : même chambre, même prix, qualité variable.",
            },
            {
              heading: 'Intégration lente',
              text: "Sans procédures documentées, les nouveaux collaborateurs passent des semaines à apprendre de façon informelle, par observation et correction. Un playbook réduit significativement ce délai et diminue les erreurs qui agacent les clients pendant les premières semaines d\'un nouveau.",
            },
            {
              heading: 'Dépendance au management',
              text: "Quand rien n\'est écrit, les superviseurs passent leur temps à répondre à des questions basiques au lieu de gérer le service. Un playbook change cette dynamique et donne à l\'équipe l\'autonomie de travailler selon un standard sans supervision constante.",
            },
          ],
        },
        {
          h2: 'Ce que couvre un playbook opérationnel',
          content:
            "Un playbook utile reflète le fonctionnement réel de l’établissement, département par département. Les playbooks LuxOps sont structurés autour de quatre domaines opérationnels centraux, chacun avec des procédures et standards de service issus du terrain.",
          h3Items: [
            {
              heading: 'Front Office',
              text: "Procédures de check-in et check-out, protocoles d'upselling, standards conciergerie, étiquette téléphonique, processus de gestion des réclamations, séquences d'arrivée VIP.",
            },
            {
              heading: 'Housekeeping',
              text: "Checklists d'inspection des chambres (50+ critères par type de chambre), gestion du linge, protocoles de service de couverture, plannings de nettoyage approfondi.",
            },
            {
              heading: 'F&B',
              text: "Séquence de service restaurant, mise en place bar, procédures room service, standards buffet, protocoles banquet, communication sur les allergènes.",
            },
            {
              heading: 'Spa & Wellness',
              text: "Standards de délivrance des soins, protocoles de conduite du thérapeute, gestion des réservations, structure du programme bien-être.",
            },
          ],
        },
        {
          h2: 'Comment mettre en place un playbook dans votre établissement',
          content:
            "Un playbook ne délivre de la valeur que lorsqu\'il est ancré dans les opérations quotidiennes. Un PDF qui dort dans un dossier partagé sans jamais être ouvert ne sert à rien. Voici les étapes qui font réellement tenir un playbook dans la durée.",
          h3Items: [
            {
              heading: '1. Commencez par le département à plus fort impact',
              text: "Ne commencez pas par la procédure la plus rare ou la plus complexe. Choisissez une tâche à haute fréquence où l\'incohérence est déjà visible : check-in, inspection de chambre, gestion des réclamations. Commencez là, constatez les résultats, puis développez.",
            },
            {
              heading: '2. Impliquez les chefs de département',
              text: "Les personnes qui font le travail savent comment il se déroule vraiment. Faites participer les chefs de département à la rédaction de leur section, pas seulement à sa validation. Les procédures qui correspondent à la réalité sont suivies. Les autres ne le sont pas.",
            },
            {
              heading: '3. Formez, ne distribuez pas simplement',
              text: "Un playbook présenté lors d\'une session de formation a un impact très différent d\'un PDF envoyé par email. Faire parcourir les étapes, laisser l\'équipe poser des questions, pratiquer les séquences : c\'est comme ça que l\'adoption se produit.",
            },
            {
              heading: '4. Révisez trimestriellement',
              text: "Les opérations évoluent. Un playbook obsolète de six mois commence silencieusement à travailler contre vous : l\'équipe suit le document plutôt que le standard actuel, ou elle arrête de le suivre. Intégrez un calendrier de révision dès le départ.",
            },
          ],
        },
        {
          h2: 'Playbooks prêts à l’emploi ou construction depuis zéro',
          content:
            "Construire un playbook opérationnel complet depuis zéro prend des mois et requiert une expertise opérationnelle que la plupart des établissements ne peuvent pas dédier en interne. Les playbooks prêts à l’emploi construits à partir de l’expérience terrain donnent une base structurée à adapter à l’établissement, plutôt que de partir d’une page blanche. Les playbooks LuxOps couvrent le Front Office, le housekeeping, le F&B et le spa, chacun représentant entre 200 et 280 pages de procédures et standards documentés.",
        },
      ],
      conclusion:
        "Un playbook opérationnel n’est pas un document bureaucratique. C’est ce qui permet aux équipes de délivrer un service fiable et constant, quel que soit le collaborateur en poste. Construit depuis zéro ou adapté à partir d’un modèle structuré, la valeur se concrétise rapidement : intégration plus rapide, moins d’erreurs et clients qui retrouvent le même niveau de service à chaque passage.",
      cta: { text: 'Voir les playbooks et starter packs', href: '/fr/playbooks' },
    },
  },
  {
    slug: 'how-to-write-hotel-sops',
    en: {
      title: 'How to Write Hotel SOPs: The LuxOps Playbook Method',
      description:
        'Learn how to write hotel SOPs using a playbook structure: trigger, owner, sequence, standard, exception, handover and supervisor check. Includes hotel SOP examples.',
      date: '2026-03-12',
      readTime: '8 min read',
      intro:
        'Writing hotel SOPs sounds straightforward until you try to use them on shift. A useful SOP is not a polished policy paragraph. It is a playbook page: the trigger that starts the task, the role that owns it, the exact sequence, the quality standard, the exceptions, the escalation path and the handover evidence. This guide shows how to write hotel standard operating procedures in the same format used inside the LuxOps playbooks, with examples from housekeeping and front desk operations.',
      sections: [
        {
          h2: 'What Makes a Good Hotel SOP?',
          content:
            'The difference between an SOP that gets used and one that ends up ignored is usually not the content. It is the format and the level of precision. Here are the four things that matter most.',
          h3Items: [
            {
              heading: 'Actionable, not descriptive',
              text: 'An SOP should tell someone exactly what to do, step by step. Not describe the outcome in general terms. "Greet the guest by name within 10 seconds of approach" is actionable. "Ensure guests feel welcomed" is not. There is no way to verify it was done correctly.',
            },
            {
              heading: 'The right level of detail',
              text: 'Too little detail and the SOP is useless. Too much and nobody reads it under time pressure. The practical test: a competent new hire with no property-specific experience should be able to follow it independently.',
            },
            {
              heading: 'Role-specific',
              text: 'Each SOP should belong to one role or department. A combined front desk and concierge SOP creates ambiguity over who does what and when. Separate them, with a clear handover point.',
            },
            {
              heading: 'Consistently formatted',
              text: 'Across departments, SOPs should follow the same structure, the same naming convention, the same version format. This makes the whole system easier to navigate and maintain over time.',
            },
          ],
        },
        {
          h2: 'The LuxOps Structure for a Hotel SOP',
          content:
            'Every SOP should contain the same operating fields in the same order. This is what turns a hotel SOP from a document into a usable playbook page that a new hire, supervisor and department head can all work from.',
          h3Items: [
            {
              heading: 'Trigger',
              text: 'Define exactly when the SOP starts. Examples: guest approaches the front desk for check-in, departure room appears on the housekeeping assignment sheet, DND still displayed at 2:00 PM, guest disputes a minibar charge at check-out.',
            },
            {
              heading: 'Owner and verifier',
              text: 'Separate who performs the task from who releases it. In housekeeping, the room attendant marks the room Clean, but the supervisor marks it Inspected. At the front desk, the agent handles the interaction, but a supervisor approves compensation above the defined authority.',
            },
            {
              heading: 'Sequence',
              text: 'Write the actions in the physical order they happen. For a departure room: initial assessment, bathroom deep clean, bedroom cleaning, bed making, closet and storage, minibar and beverage area, final presentation. For check-in: arrival review, welcome, identity verification, registration, payment, key issue, PMS update.',
            },
            {
              heading: 'Measurable standard',
              text: 'Attach the quality target to the procedure. A housekeeping SOP can include 45-60 minutes for a standard departure, 25-35 minutes for a stayover, no hair anywhere in the bathroom, and a 90/100 room inspection pass threshold.',
            },
            {
              heading: 'Exceptions and escalation',
              text: 'This is where most SOPs fail. Define what happens when the room is not ready, the card is declined, a guest item is found, a DND sign remains active, a complaint is recent, or a maintenance fault blocks room release.',
            },
            {
              heading: 'Handover evidence',
              text: 'Close the SOP with the evidence that the next person needs: PMS status, inspection score, defect log, guest profile note, shift log entry, signed checklist or manager approval. A procedure is not finished until the handover is usable.',
            },
          ],
        },
        {
          h2: 'Step-by-Step: Writing Your First Hotel SOP',
          content:
            'Here is a practical process for writing an SOP, based on methods applied across real hotel operations.',
          h3Items: [
            {
              heading: 'Step 1: Choose the right starting point',
              text: 'Start with a high-frequency task that already has visible consistency problems. A check-in sequence. A room inspection process. A complaint handling flow. Not the rarest scenario. The most common one, because that is where inconsistency causes the most damage.',
            },
            {
              heading: 'Step 2: Observe the best performer',
              text: 'Find the person in the team who executes this task most reliably and watch them do it. Document each discrete action as it happens. Do not rely on memory and do not ask them to describe it afterwards. Watching is the only way to capture what actually happens.',
            },
            {
              heading: 'Step 3: Draft in plain language',
              text: 'Write as if explaining to someone who has never worked in a hotel. No jargon, no passive voice, no vague qualifiers like "as needed" or "appropriately". If you cannot define what good looks like, the SOP cannot either.',
            },
            {
              heading: 'Step 4: Test with a new team member',
              text: 'Give the draft to someone who does not know the task and ask them to follow it. Every point where they hesitate or ask a question is a gap in the SOP, not in their ability.',
            },
            {
              heading: 'Step 5: Validate with the department head',
              text: "Get sign-off from the department head. This creates accountability and confirms the SOP reflects the property's actual standards, not just a general version of them.",
            },
            {
              heading: 'Step 6: Version and store centrally',
              text: 'Assign a version number and a review date. Store in a system the team can access on shift: a shared drive, a Notion workspace, or printed binders by department. If it is hard to find, it will not be used.',
            },
          ],
        },
        {
          h2: 'Common Mistakes to Avoid',
          content:
            'These errors appear repeatedly across hotel operations when teams try to build their own SOP library. Each one is avoidable.',
          h3Items: [
            {
              heading: 'Writing for compliance, not for use',
              text: 'Many SOPs are written to satisfy a brand audit, not to help staff do their jobs. If the document is not genuinely useful to the person executing the task, it will not be used. The audit will have achieved nothing operationally.',
            },
            {
              heading: 'Too much text, no visual structure',
              text: 'Dense paragraphs are hard to read mid-task. Numbered steps, clear headers, and occasional tables make SOPs scannable under queue pressure or during a service sequence.',
            },
            {
              heading: "Writing procedures that don't match reality",
              text: 'An SOP based on how a manager imagines the task should be done, rather than how it actually happens on the floor, gets ignored immediately. Start from observation, always.',
            },
            {
              heading: 'No review cadence',
              text: 'An SOP that was accurate eighteen months ago may now contradict current systems, equipment, or standards. Build the review schedule into the process from day one, or it will not happen.',
            },
          ],
        },
        {
          h2: 'Use a Playbook Template Instead of a Blank Page',
          content:
            'Writing a full hotel SOP library from scratch is a substantial project. A working operation needs procedures for front desk, housekeeping, F&B, spa, night audit, Lost & Found, DND, room inspection, complaints, handovers and training. The value of a playbook template is that the operational logic is already built: sequence, timing, standards, exception rules and supervisor controls. Your work becomes customisation for your property, not invention from a blank page.',
        },
      ],
      conclusion:
        'The best hotel SOPs read like operational tools, not office documents. They tell the team what triggers the task, who owns it, what sequence to follow, what standard to hit, when to escalate and what evidence to leave behind. That is the difference between a SOP folder and a hotel operations playbook.',
      cta: { text: 'Explore Our SOP Playbooks', href: '/en/playbooks' },
    },
    fr: {
      title: 'Comment rédiger une SOP vraiment utile pour les équipes terrain',
      description:
        "Méthode LuxOps pour rédiger des SOPs utilisables en service : déclencheur, responsable, séquence, standard, exception, escalade et preuve de passation.",
      date: '2026-03-12',
      readTime: '8 min de lecture',
      intro:
        "Rédiger une SOP semble simple, jusqu’au moment où l’équipe doit l’utiliser en plein service. Beaucoup de documents sont trop longs pour être consultés rapidement, trop vagues pour être suivis sans demander au superviseur, ou incohérents d’un département à l’autre. Le problème n’est généralement pas un manque de connaissance, c’est un manque de structure. Ce guide présente une méthode pratique pour rédiger des SOPs que les équipes utiliseront vraiment.",
      sections: [
        {
          h2: "Qu’est-ce qui fait une bonne SOP ?",
          content:
            "La différence entre un SOP utilisé et un SOP ignoré tient rarement au contenu, elle tient au format et au niveau de précision. Voici les quatre éléments qui comptent vraiment.",
          h3Items: [
            {
              heading: 'Actionnable, pas descriptif',
              text: "Un SOP doit dire exactement quoi faire, étape par étape. Pas décrire le résultat attendu en termes généraux. \'Accueillir le client par son nom dans les 10 secondes suivant l\'approche\' est actionnable. \'S\'assurer que les clients se sentent bienvenus\' ne l\'est pas : il n\'existe aucun moyen de vérifier que c\'est fait.",
            },
            {
              heading: 'Le bon niveau de détail',
              text: "Trop peu de détails et le SOP est inutile. Trop et personne ne le lit en plein service. Le test pratique : un nouveau collaborateur sans expérience préalable de l\'établissement doit pouvoir le suivre de façon autonome.",
            },
            {
              heading: 'Spécifique au poste',
              text: "Chaque SOP appartient à un poste ou un département. Un SOP combinant réception et conciergerie crée de l\'ambiguïté sur qui fait quoi et à quel moment. Séparez-les avec un point de passation clair.",
            },
            {
              heading: 'Format cohérent',
              text: "Sur tous les départements, les SOPs doivent suivre la même structure, la même convention de nommage, le même format de version. Cela facilite la navigation et la maintenance de l\'ensemble du système dans la durée.",
            },
          ],
        },
        {
          h2: 'La structure d’une SOP utilisable',
          content:
            "Chaque SOP doit contenir les mêmes éléments dans le même ordre. C’est cette structure qui permet aux équipes de la lire vite, de l’appliquer pendant le shift et de la mettre à jour sans repartir de zéro.",
          h3Items: [
            {
              heading: 'En-tête',
              text: "Titre, département, numéro de version, date de dernière mise à jour et le poste responsable de la procédure.",
            },
            {
              heading: 'Objectif',
              text: "Une ou deux phrases expliquant ce que le SOP accomplit et pourquoi il existe. Ça donne au collaborateur du contexte, pas seulement des instructions, et cela compte plus qu\'on ne le croit.",
            },
            {
              heading: 'Périmètre',
              text: "À qui ce SOP s\'applique. Quels services, quels jours, quelles situations. Si la procédure ne s\'applique pas partout, il faut le dire explicitement.",
            },
            {
              heading: 'Procédure',
              text: "Les instructions pas-à-pas. Numérotées, séquentielles, sans ambiguïté. Chaque étape doit être une seule action distincte. Évitez de combiner deux actions en une étape : cela complique l\'exécution et rend la vérification difficile.",
            },
            {
              heading: 'Standards',
              text: "Les critères de qualité qui définissent une exécution correcte : timing, langage, présentation, repères mesurables. C\'est ce qu\'un superviseur utilise pour évaluer si la procédure a bien été réalisée.",
            },
            {
              heading: 'Exceptions et escalade',
              text: "Ce qui se passe quand la situation standard ne s\'applique pas. Qui le collaborateur contacte. Comment la décision s\'organise. C\'est la section que la plupart des SOPs omettent et dont les équipes ont le plus besoin en service.",
            },
          ],
        },
        {
          h2: 'Étape par étape : rédiger votre première SOP',
          content:
            "Voici un processus pratique pour rédiger une SOP à partir du terrain, sans transformer le document en texte administratif.",
          h3Items: [
            {
              heading: 'Étape 1 : Choisir le bon point de départ',
              text: "Commencez par une tâche à haute fréquence qui présente déjà des problèmes de cohérence visibles. Une séquence de check-in. Un processus d\'inspection de chambre. Un flux de gestion des réclamations. Pas le scénario le plus rare, le plus courant, parce que c\'est là que l\'incohérence fait le plus de dégâts.",
            },
            {
              heading: 'Étape 2 : Observer le meilleur exécutant',
              text: "Trouvez la personne de l\'équipe qui exécute cette tâche le plus régulièrement et observez-la le faire. Documentez chaque action distincte au fur et à mesure. Ne comptez pas sur votre mémoire, et ne lui demandez pas de décrire la procédure après coup : l\'observation est le seul moyen de capturer ce qui se passe réellement.",
            },
            {
              heading: 'Étape 3 : Rédiger en langage simple',
              text: "Écrivez comme si vous expliquiez à quelqu\'un qui n\'a jamais travaillé dans un hôtel. Pas de jargon, pas de voix passive, pas de qualificatifs vagues comme \'selon les besoins\' ou \'de manière appropriée\'. Si vous ne pouvez pas définir ce que c\'est que bien faire, le SOP ne le peut pas non plus.",
            },
            {
              heading: 'Étape 4 : Tester avec un nouveau collaborateur',
              text: "Donnez le brouillon à quelqu\'un qui ne connaît pas la tâche et demandez-lui de le suivre. Chaque moment d\'hésitation ou de question est un manque dans le SOP, pas dans sa capacité.",
            },
            {
              heading: 'Étape 5 : Valider avec le chef de département',
              text: "Faites valider par le chef de département. Cela crée la responsabilité et confirme que le SOP reflète les standards réels de l\'établissement, pas une version générique.",
            },
            {
              heading: 'Étape 6 : Versionner et stocker de façon centralisée',
              text: "Attribuez un numéro de version et une date de révision. Stockez dans un système accessible à l\'équipe en service : drive partagé, espace Notion, ou classeurs imprimés par département. Si c\'est difficile à trouver, ce ne sera pas utilisé.",
            },
          ],
        },
        {
          h2: 'Erreurs fréquentes à éviter',
          content:
            "Ces erreurs apparaissent régulièrement dans les hôtels qui tentent de constituer leur bibliothèque de SOPs. Chacune est évitable.",
          h3Items: [
            {
              heading: "Rédiger pour la conformité, pas pour l'usage",
              text: "Beaucoup de SOPs sont rédigés pour satisfaire un audit de marque, pas pour aider les équipes à faire leur travail. Si le document n\'est pas vraiment utile à la personne qui exécute la tâche, il ne sera pas utilisé. L\'audit n\'aura rien changé sur le terrain.",
            },
            {
              heading: 'Trop de texte, pas de structure visuelle',
              text: "Les paragraphes denses sont difficiles à parcourir en plein service. Des étapes numérotées, des titres clairs et quelques tableaux permettent de rendre les SOPs consultables rapidement, sous pression ou en pleine séquence de service.",
            },
            {
              heading: "Rédiger des procédures qui ne correspondent pas à la réalité",
              text: "Un SOP basé sur la façon dont un manager imagine que la tâche devrait se faire, plutôt que sur la façon dont elle se fait vraiment, sera ignoré immédiatement. Commencez toujours par l\'observation.",
            },
            {
              heading: 'Pas de cadence de révision',
              text: "Un SOP qui était exact il y a dix-huit mois peut maintenant contredire les systèmes, équipements ou standards actuels. Intégrez le calendrier de révision dans le processus dès le départ, sinon cela ne se fera pas.",
            },
          ],
        },
        {
          h2: 'Utiliser un template ou partir d’une page blanche',
          content:
            "Rédiger une bibliothèque de SOPs complète depuis zéro est un chantier important. Un établissement bien structuré a besoin de nombreuses procédures individuelles sur l’ensemble de ses départements. Beaucoup d’équipes sous-estiment ce que cela demande. Des frameworks SOP prêts à l’emploi, construits à partir d’une expérience opérationnelle réelle, donnent une base de départ structurée : procédures déjà séquencées, standards déjà définis, format déjà cohérent. Le travail devient de la personnalisation pour l’établissement, pas de la construction depuis rien.",
        },
      ],
      conclusion:
        "Une SOP ne vaut que par son usage réel. L’observation, le langage simple, le test avec un nouveau collaborateur et la cadence de révision distinguent une documentation qui aide le terrain d’un document rangé dans un dossier. L’investissement est modeste. La différence opérationnelle ne l’est pas.",
      cta: { text: 'Voir les playbooks SOP', href: '/fr/playbooks' },
    },
  },
  {
    slug: 'hotel-front-office-sop',
    en: {
      title: 'Hotel Front Office SOPs: Front Desk Procedures, Check-In, Handover and Guest Recovery',
      description:
        'A practical front office SOP guide covering front desk procedures, check-in, check-out, room not ready, billing disputes, complaint handling and shift handover.',
      date: '2026-03-14',
      readTime: '9 min read',
      intro:
        'Front office is the management term. Front desk is what many hotel teams and guests call the place where the procedure actually happens. For SEO and for operations, both matter. A good front office SOP library must cover the front desk moments that create the stay: pre-arrival review, check-in, room not ready, payment handling, check-out, billing disputes, guest recovery, telephone standards and shift handover. This guide is adapted from the LuxOps Front Office Playbook and shows what these SOPs should contain when they are written for daily use, not for a dusty binder.',
      sections: [
        {
          h2: 'Why Front Office and Front Desk SOPs Matter',
          content:
            'Front office handles more different situations than almost any other hotel department: routine arrivals, billing disputes, VIP arrivals, late check-outs, room moves, complaints, walk-ins, no-shows and medical situations. When front desk procedures are undocumented, each scenario plays out differently depending on who is working. The guest experience becomes individual performance instead of property standard.',
          h3Items: [
            {
              heading: 'Turnover impact',
              text: 'Front desk turnover is high in most hotels. Without written SOPs, every departure takes operating knowledge with it: how to handle early arrivals, what to say when a card is declined, which billing disputes can be solved by the agent and which need manager approval. A new hire should learn from the playbook first, then from shadowing, not the other way around.',
            },
            {
              heading: 'Brand consistency',
              text: 'For independent and high-end properties, every interaction at the front desk is a signal of what the hotel is. SOPs define what that interaction should look like: the language, the timing, the eye contact, the personalisation points. Not just the functional steps, but the standard behind them.',
            },
          ],
        },
        {
          h2: 'Core Front Desk SOPs Every Hotel Needs',
          content:
            'These are the front desk procedures that need to exist in written form at every hotel. They are the procedures guests feel immediately when they go well, and remember sharply when they fail.',
          h3Items: [
            {
              heading: 'Check-in SOP',
              text: 'The LuxOps sequence starts before the guest arrives: review arrivals in the PMS, flag VIPs and special occasions, verify room assignments, confirm requests and prepare registration or payment requirements. At the desk, the agent confirms the stay, verifies ID, reviews requests, processes payment or pre-authorisation, issues keys and updates the PMS immediately.',
            },
            {
              heading: 'Room not ready SOP',
              text: 'This procedure deserves its own SOP because it is one of the most common front desk pressure points. The agent stores luggage, offers a waiting option, gives a realistic timing, records a contact number and calls the guest before the guest has to chase. The SOP should explicitly say not to assign a room that housekeeping has not marked Inspected.',
            },
            {
              heading: 'Check-out and billing SOP',
              text: 'The check-out SOP covers queue control, invoice review, minibar verification, F&B and spa postings, payment processing, receipt delivery and farewell. It also defines how to handle disputed charges: listen, review documentation, explain clearly, escalate if needed and document the outcome.',
            },
            {
              heading: 'Complaint handling SOP',
              text: 'The LuxOps playbook uses the LEARN flow: Listen, Empathise, Apologise, Resolve, Notify. The critical rule is that active and recent complaints must be discussed at every morning meeting and every shift handover until they are closed.',
            },
            {
              heading: 'Telephone and communication SOP',
              text: 'The standard covers greeting, hold permission, transfer protocol, wake-up calls, message taking and digital communication. A front desk call should never disappear into a transfer without context, especially when the guest is calling about a complaint.',
            },
            {
              heading: 'Shift handover SOP',
              text: 'Every open request, VIP note, pending complaint, room move, billing issue, maintenance flag and unusual decision must be passed in writing. A verbal handover is helpful, but the log is the desk’s memory.',
            },
          ],
        },
        {
          h2: 'Key Standards to Define Alongside Procedures',
          content:
            'SOPs define the steps. Standards define the quality level. The two work together, and both need to be written down.',
          h3Items: [
            {
              heading: 'Service timing standards',
              text: 'Check-in under three minutes for standard arrivals, five minutes for a full VIP welcome. Telephone answered within three rings. Guest requests acknowledged within five minutes, resolved within the defined window by category. These benchmarks need to be written down to be trained against.',
            },
            {
              heading: 'Language and tone standards',
              text: 'Define the vocabulary and phrasing the team uses, and what they avoid. In a high-end context: "certainly" over "no problem", "allow me" rather than "sure". Guest name frequency. The register appropriate for your property. This is more than politeness; it is part of the brand experience.',
            },
            {
              heading: 'Grooming and presentation standards',
              text: 'Uniform standards, posture at the desk, personal phone policy during shift. Usually documented alongside the SOPs in the same manual rather than as a separate document.',
            },
          ],
        },
        {
          h2: 'Structuring Your Front Office SOP Manual',
          content:
            'A front office SOP manual is not a single document. It is a structured collection of individual procedures, organised so the right one can be found quickly during a shift, not just in training.',
          h3Items: [
            {
              heading: 'Organise by scenario, not by chronology',
              text: 'Group procedures by situation type: arrivals, departures, complaints, VIP handling, rather than by time of day. A team member who needs a procedure mid-task is not thinking about when it happens; they are thinking about what is happening right now.',
            },
            {
              heading: 'Keep each SOP to a single task',
              text: 'A combined check-in and upselling SOP is harder to train and harder to follow than two procedures with a clear handover point between them. Keep each SOP to one defined task.',
            },
            {
              heading: 'Include quick-reference cards',
              text: 'For high-frequency procedures, a laminated one-page summary at the desk is more practical than a full SOP during a busy check-in period. The full SOP is for training. The quick-reference card is for the shift. Both have a role.',
            },
          ],
        },
      ],
      conclusion:
        'A documented front office is a resilient front office. When the team has structured procedures to follow, not just what they were told by the person who trained them, quality stops depending on experience level. A new agent on a Monday morning should be working to the same standard as your most experienced member on a Friday evening. Written procedures are the only way to make that reliable.',
      cta: { text: 'View the Front Office Playbook', href: '/en/playbooks/fo' },
    },
    fr: {
      title: 'SOPs Front Office : à quoi ressemblent de vraies procédures',
      description:
        "Guide complet des SOPs Front Office, check-in, check-out, gestion des réclamations, upselling et standards conciergerie. Procédures pratiques pour les équipes de réception.",
      date: '2026-03-14',
      readTime: '9 min de lecture',
      intro:
        "Certaines procédures sont trop importantes pour être transmises uniquement à l\'oral. Le front office en fait partie. C\'est le département avec le plus grand volume de contacts clients, la plus grande variété de situations, et dans la plupart des hôtels, le moins documenté. Quand un agent expérimenté part, un nouveau arrive et apprend les standards de façon informelle, ce qui signifie qu\'il en apprend une version. Ce guide couvre ce que les SOPs front office doivent contenir et comment les structurer pour un usage quotidien.",
      sections: [
        {
          h2: 'Pourquoi les SOPs Front Office comptent plus qu\'on ne le croit',
          content:
            "Le front office gère plus de situations différentes que n\'importe quel autre département. Arrivées courantes, litiges de facturation, séjours VIP, départs tardifs, réclamations, situations médicales. Quand les procédures ne sont pas documentées, chaque scénario se déroule différemment selon l\'agent en poste. L\'expérience du client est déterminée par l\'individu, pas par l\'établissement.",
          h3Items: [
            {
              heading: 'Impact du turnover',
              text: "Le turnover en réception est parmi les plus élevés de l\'hôtellerie. Sans SOPs écrits, chaque départ emporte avec lui la connaissance institutionnelle. Un nouveau collaborateur commence par l\'observation et la correction informelle plutôt que par un standard clair. Cette période a un coût : en expérience client et en temps superviseur.",
            },
            {
              heading: 'Cohérence de marque',
              text: "Pour les établissements indépendants et haut de gamme, chaque interaction à la réception est un signal de ce qu\'est l\'hôtel. Les SOPs définissent à quoi cette interaction doit ressembler : le langage, le timing, le contact visuel, les points de personnalisation. Pas seulement les étapes fonctionnelles, mais le standard derrière elles.",
            },
          ],
        },
        {
          h2: 'Les SOPs Front Office fondamentaux que chaque hôtel doit avoir',
          content:
            "Ce sont les procédures qui doivent exister sous forme écrite dans chaque établissement. Pas parce qu\'un auditeur l\'exige, mais parce que le front office ne peut pas fonctionner de façon constante sans elles.",
          h3Items: [
            {
              heading: 'SOP Check-In',
              text: "Préparation pré-arrivée (révision de la liste des arrivées, flags VIP, allocations de chambres), séquence d\'accueil, vérification d\'identité, remise des clés, orientation dans l\'établissement, passation au porteur ou au concierge. Le SOP doit aussi couvrir les scénarios fréquents : arrivées tardives, chambre non prête au moment du check-in, clients sans réservation.",
            },
            {
              heading: 'SOP Check-Out',
              text: "Gestion de la file d\'attente aux heures de pointe du matin, processus de révision de la note, comment traiter une contestation sans l\'escalader inutilement, départ express, assistance bagages, séquence d\'au revoir. Un élément facile à négliger : le bon moment pour solliciter un retour, sans que cela paraisse scriptée.",
            },
            {
              heading: 'SOP Gestion des Réclamations',
              text: "C\'est la procédure que la plupart des établissements exécutent de façon incohérente. Un SOP efficace définit la séquence complète : écouter sans interrompre, reconnaître, s\'excuser pour l\'expérience vécue, résoudre avec une action concrète, et documenter. Il doit inclure les déclencheurs d\'escalade, les directives de compensation par catégorie de réclamation, et où enregistrer l\'échange dans le PMS.",
            },
            {
              heading: 'SOP Téléphone et Communication',
              text: "Script d\'accueil, procédure de mise en attente, protocole de transfert, prise de message, standards de temps de réponse et gestion des demandes externes. Dans les environnements haut de gamme, la façon dont le téléphone est décroché a plus de poids que la plupart des équipes ne le réalisent.",
            },
            {
              heading: 'SOP Upselling',
              text: "Quand il est fait sans pression, l\'upselling améliore le séjour plutôt qu\'il ne l\'interrompt. Le SOP doit définir quand présenter l\'option, le langage à utiliser, comment gérer un refus avec naturel, et comment les upsells sont tracés pour le reporting.",
            },
            {
              heading: 'SOP VIP et Clients Fidèles',
              text: "Préparation pré-arrivée, coordination du placement des attentions, détails de personnalisation issus du profil client, et la séquence de service qui distingue une arrivée VIP d\'une arrivée standard. Cette procédure repose sur des informations présentes dans le PMS : le SOP doit aussi couvrir comment ces informations y arrivent.",
            },
          ],
        },
        {
          h2: 'Standards clés à définir en parallèle des procédures',
          content:
            "Les SOPs définissent les étapes. Les standards définissent le niveau de qualité. Les deux fonctionnent ensemble, et les deux doivent être écrits.",
          h3Items: [
            {
              heading: 'Timing',
              text: "Check-in en moins de trois minutes pour les arrivées standard, cinq minutes pour un accueil VIP complet. Téléphone décroché en trois sonneries. Demandes clients accusées dans les cinq minutes, résolues dans le délai défini par catégorie. Ces repères doivent être écrits pour pouvoir être formés et tenus.",
            },
            {
              heading: 'Langage',
              text: "Définissez le vocabulaire et les formulations que l\'équipe utilise, et celles qu\'elle évite. Dans un contexte haut de gamme : \'certainement\' plutôt que \'pas de problème\', fréquence d\'utilisation du nom du client, registre approprié à l\'établissement. Ce n\'est pas seulement de la politesse : c\'est une partie de l\'expérience de marque.",
            },
            {
              heading: 'Présentation',
              text: "Standards de tenue, posture à l\'accueil, gestion des téléphones personnels pendant le service. Généralement documentés aux côtés des SOPs dans le même manuel plutôt que dans un document séparé.",
            },
          ],
        },
        {
          h2: 'Structurer votre manuel de SOPs Front Office',
          content:
            "Un manuel de SOPs front office n\'est pas un seul document. C\'est une collection structurée de procédures individuelles, organisées pour qu\'on puisse trouver la bonne rapidement en plein service, pas seulement en formation.",
          h3Items: [
            {
              heading: 'Par scénario',
              text: "Regroupez les procédures par type de situation, arrivées, départs, réclamations, gestion VIP, plutôt que par heure de la journée. Un collaborateur qui cherche une procédure en plein service ne pense pas à quand elle se passe ; il pense à ce qui se passe maintenant.",
            },
            {
              heading: 'Une tâche par SOP',
              text: "Un SOP combinant check-in et upselling est plus difficile à former et à suivre que deux procédures avec un point de passation clair entre elles. Gardez chaque SOP sur une seule tâche définie.",
            },
            {
              heading: 'Fiches de référence',
              text: "Pour les procédures à haute fréquence, un résumé d\'une page plastifié à l\'accueil est plus pratique qu\'un SOP complet pendant une période de check-in chargée. Le SOP complet est pour la formation. La fiche de référence est pour le service. Les deux ont un rôle.",
            },
          ],
        },
      ],
      conclusion:
        "Un front office documenté est un front office résilient. Quand l\'équipe dispose de procédures structurées à suivre, pas seulement ce que lui a dit la personne qui l\'a formée, la qualité cesse de dépendre du niveau d\'expérience. Un nouvel agent un lundi matin doit travailler au même standard que le membre le plus expérimenté de l\'équipe un vendredi soir. Des procédures écrites sont le seul moyen de rendre ça fiable.",
      cta: { text: 'Voir le Playbook Front Office', href: '/fr/playbooks' },
    },
  },
  {
    slug: 'hotel-housekeeping-checklist',
    en: {
      title: 'Hotel Housekeeping Checklist: Room Inspection Standards for High-End Properties',
      description:
        'A complete guide to hotel housekeeping checklists, covering room inspection criteria, linen standards, turndown procedures, and quality control methods for high-end properties.',
      date: '2026-03-15',
      readTime: '8 min read',
      intro:
        'Housekeeping is the department guests evaluate most instinctively and most harshly. A stain on a pillowcase. A hair left in the shower. A bin that was not emptied. These details register immediately and stay in a review long after the rest of the stay has faded. Running a high-volume housekeeping operation at a consistent level is genuinely difficult. Tight turnaround times, large teams working across dozens of rooms simultaneously, and the physical nature of the work all make it easy for quality to drift. Structured checklists and clear inspection standards are what hold it in place.',
      sections: [
        {
          h2: 'Why Housekeeping Checklists Are Not Optional',
          content:
            'In a hotel running without structured housekeeping checklists, quality becomes entirely dependent on the individual room attendant. One notices a smear on the mirror; another does not. One replaces a half-used amenity; another leaves it. Over a season, that variation accumulates in the review scores.',
          h3Items: [
            {
              heading: 'Consistency at scale',
              text: 'A 60-room hotel might have 10 room attendants across two shifts. A checklist ensures every room meets the same standard regardless of who serviced it. Without one, the floor supervisor has no basis for a consistent inspection.',
            },
            {
              heading: 'Accountability and inspection',
              text: 'When a room attendant signs off a room, a supervisor can inspect against the same checklist. Discrepancies are traceable. Over time, this builds a culture where the detail matters, rather than one where the goal is to get through rooms as fast as possible.',
            },
            {
              heading: 'Onboarding new staff',
              text: 'A new room attendant following a structured checklist can reach an acceptable quality level in days. Without one, reaching that level takes weeks of shadowing and informal correction. The corrections are also inconsistent depending on who is supervising.',
            },
          ],
        },
        {
          h2: 'The Complete Hotel Room Inspection Checklist',
          content:
            'A thorough room inspection checklist covers six zones. Each zone has specific items that need to be checked, not just assumed to be correct because no one complained last time.',
          h3Items: [
            {
              heading: 'Entrance and Corridor',
              text: 'Door operation and handle condition. Corridor floor cleanliness directly outside the room. DND and Make Up Room signage functioning. Door viewer clean. These are often missed because they sit outside the main cleaning zone, but guests notice them.',
            },
            {
              heading: 'Bedroom',
              text: 'Linen pressed and made to standard (hospital corners or brand-specific fold, pillows positioned correctly). Bedside tables cleared and surfaces wiped down. Lamps and switches working. Wardrobe interior clean with correct hanger count. Safe functioning. Curtains and blackout lining intact. Floor vacuumed including under the bed and furniture edges.',
            },
            {
              heading: 'Bathroom',
              text: 'The highest-scrutiny zone in any room inspection. Toilet cleaned inside bowl and under rim. Shower and bath free of residue and hair. Grout lines clean. Mirror and glass polished without streaks. Amenities positioned to brand standard, not just refilled. Fresh towels folded and placed correctly. Floor dried and streak-free. Bins emptied and relined. Toilet paper folded. Extractor fan clean.',
            },
            {
              heading: 'Minibar and Desk',
              text: 'Minibar restocked and signed off. Expiry dates checked on perishables. Desk surface clean. Stationery replenished and in position. In-room directory current and in good condition.',
            },
            {
              heading: 'Windows and Technical',
              text: 'Window glass cleaned on the inside. Blinds or shutters operating correctly. Air conditioning set to the default temperature and functioning. TV on the correct input. Phone lines tested. Wi-Fi details visible and accurate.',
            },
          ],
        },
        {
          h2: 'Linen Management and Standards',
          content:
            'Linen is one of the most visible quality signals in a hotel room. Guests notice immediately if sheets are not properly pressed, if towels show any marks, or if pillowcases are beginning to wear. The linen programme has to run with precision to support the room inspection standard.',
          h3Items: [
            {
              heading: 'Linen inspection criteria',
              text: 'Every piece of linen should be checked before it goes into a room: free from stains, tears, and pilling; correctly pressed; the right size for the bed. A spot-check programme pulling a percentage from each laundry batch catches problems before they reach the floor.',
            },
            {
              heading: 'Par stock management',
              text: 'Each room type needs a defined par stock: the quantity needed to service the room, held on the floor pantry, plus the amount in circulation through laundry. Inconsistent par stocks are one of the most common sources of delays and last-minute scrambles in housekeeping operations.',
            },
            {
              heading: 'Change frequency standards',
              text: 'Define what changes on a departure clean versus a stayover service. Set the minimum frequency for extended stays. Cover how to handle guest requests to reduce linen changes where sustainability programmes apply. These decisions need to be written down so they are applied consistently across the team.',
            },
          ],
        },
        {
          h2: 'Turndown Service Procedure',
          content:
            'Turndown is a premium housekeeping service. It shifts the room from its daytime state to an evening one, and when done well, it signals attention and care that guests remember. It requires its own checklist, separate from the departure and stayover procedures.',
          h3Items: [
            {
              heading: 'Standard turndown checklist elements',
              text: 'Bed preparation to brand standard (corner fold of duvet or sheet, sleeping pillows positioned). Ambient lighting dimmed. Curtains or blinds drawn. Minibar items consumed since arrival replenished. Waste emptied. Turndown amenity placed (chocolate, card, or property-specific item). HVAC set to evening temperature. Bathroom refreshed: used towels replaced, toilet paper refolded, amenities replaced if used.',
            },
            {
              heading: 'Timing and sequencing',
              text: 'Schedule turndown to avoid occupied rooms where possible. Define the service window (typically 19:00 to 22:00), the sequencing logic by room type and VIP priority, and the DND procedure so the team knows what to do when a room cannot be accessed.',
            },
          ],
        },
        {
          h2: 'Using a Housekeeping Playbook',
          content:
            "A complete housekeeping playbook provides pre-built inspection checklists by room type, departure clean procedures, stayover procedures, turndown SOPs, linen management protocols, deep cleaning schedules, and lost and found procedures, all formatted for immediate team use. Rather than building this documentation from scratch, a structured playbook gives the head of housekeeping a professional base to customise for the property's specific room types and standards.",
        },
      ],
      conclusion:
        'Housekeeping runs on discipline and detail. The properties that maintain consistently high room quality are the ones where every team member, not just the most experienced, knows exactly what standard they are working to and has the checklist to verify their own work. Structure in housekeeping is not about micromanaging the team. It is about making it straightforward for them to do their job well, every room, every shift.',
      cta: { text: 'View the Housekeeping Playbook', href: '/en/playbooks' },
    },
    fr: {
      title: "Checklist Housekeeping Hôtelier : Standards d'Inspection des Chambres pour Établissements Haut de Gamme",
      description:
        "Guide complet des checklists housekeeping, critères d'inspection des chambres, standards linge, procédures de service de couverture et méthodes de contrôle qualité.",
      date: '2026-03-15',
      readTime: '8 min de lecture',
      intro:
        "Le housekeeping est le département que les clients évaluent le plus instinctivement et le plus sévèrement. Une tache sur une taie d\'oreiller. Un cheveu laissé dans la douche. Une poubelle non vidée. Ces détails s\'enregistrent immédiatement et persistent dans un avis bien après que le reste du séjour a été oublié. Gérer une opération housekeeping à volume élevé à un niveau constant est un vrai défi. Des délais serrés, des équipes importantes travaillant simultanément sur des dizaines de chambres, et la nature physique du travail font qu\'il est facile pour la qualité de dériver. Des checklists structurées et des standards d\'inspection clairs sont ce qui maintient le niveau.",
      sections: [
        {
          h2: "Pourquoi les checklists housekeeping ne sont pas optionnelles",
          content:
            "Dans un hôtel qui fonctionne sans checklists housekeeping structurées, la qualité devient entièrement dépendante de l\'individu. L\'un remarque une trace sur le miroir, l\'autre non. L\'un remplace une amenity à moitié utilisée, l\'autre la laisse. Sur une saison, cette variation s\'accumule dans les scores d\'évaluation.",
          h3Items: [
            {
              heading: 'Cohérence',
              text: "Un hôtel de 60 chambres peut avoir 10 valets de chambre sur deux services. Une checklist garantit que chaque chambre atteint le même standard quel que soit le collaborateur qui l\'a effectuée. Sans elle, le superviseur n\'a pas de base pour une inspection cohérente.",
            },
            {
              heading: 'Responsabilité',
              text: "Quand un valet de chambre valide une chambre, le superviseur peut l\'inspecter sur la base de la même checklist. Les écarts sont traçables. Avec le temps, cela construit une culture où le détail compte, plutôt qu\'une culture où l\'objectif est de passer les chambres le plus vite possible.",
            },
            {
              heading: 'Intégration',
              text: "Un nouveau valet de chambre qui suit une checklist structurée peut atteindre un niveau de qualité acceptable en quelques jours. Sans elle, atteindre ce niveau prend des semaines de shadowing et de corrections informelles, inconsistantes selon qui supervise.",
            },
          ],
        },
        {
          h2: "La checklist complète d'inspection de chambre hôtelière",
          content:
            "Une checklist d\'inspection complète couvre six zones. Chaque zone comporte des éléments précis à vérifier, pas à supposer corrects parce que personne ne s\'est plaint la dernière fois.",
          h3Items: [
            {
              heading: 'Entrée',
              text: "Fonctionnement de la porte et état de la poignée. Propreté du couloir directement devant la chambre. Signalétique DND et Make Up Room fonctionnelle. Judas propre. Ces points sont souvent manqués parce qu\'ils se situent en dehors de la zone de nettoyage principale, mais les clients les remarquent.",
            },
            {
              heading: 'Chambre',
              text: "Linge repassé et lit fait selon le standard (coins en onglet ou pliage spécifique à l\'établissement, oreillers positionnés correctement). Tables de nuit dégagées et surfaces essuyées. Lampes et interrupteurs fonctionnels. Armoire propre avec le bon nombre de cintres. Coffre fonctionnel. Rideaux et doublure occultante intacts. Sol aspiré y compris sous le lit et aux angles des meubles.",
            },
            {
              heading: 'Salle de bain',
              text: "La zone la plus scrutée lors de toute inspection. Toilettes nettoyées à l\'intérieur du bol et sous le rebord. Douche et baignoire sans résidu ni cheveu. Joints propres. Miroir et verre poli sans traces. Amenities positionnées selon le standard de l\'établissement, pas seulement rechargées. Serviettes fraîches pliées et placées correctement. Sol séché et sans traces. Poubelles vidées et re-doublées. Papier toilette plié. Extracteur propre.",
            },
            {
              heading: 'Minibar et bureau',
              text: "Minibar réapprovisionné et validé. Dates de péremption vérifiées sur les périssables. Surface du bureau nettoyée. Papeterie réapprovisionnée et en place. Répertoire en chambre à jour et en bon état.",
            },
            {
              heading: 'Fenêtres et technique',
              text: "Vitres nettoyées à l\'intérieur. Stores ou volets fonctionnant correctement. Climatisation réglée à la température par défaut et fonctionnelle. TV sur la bonne entrée. Lignes téléphoniques testées. Informations Wi-Fi visibles et exactes.",
            },
          ],
        },
        {
          h2: 'Gestion et standards du linge',
          content:
            "Le linge est l\'un des signaux de qualité les plus visibles dans une chambre d\'hôtel. Les clients remarquent immédiatement si les draps ne sont pas correctement repassés, si les serviettes présentent des traces, ou si les taies commencent à s\'user. Le programme linge doit fonctionner avec précision pour soutenir le standard d\'inspection des chambres.",
          h3Items: [
            {
              heading: 'Inspection',
              text: "Chaque pièce de linge doit être contrôlée avant d\'entrer dans une chambre : sans tache, déchirure ni boulochage ; correctement repassée ; taille adaptée au lit. Un programme de contrôle par échantillonnage sur chaque lot de laverie permet de détecter les problèmes avant qu\'ils atteignent les étages.",
            },
            {
              heading: 'Par stock',
              text: "Chaque type de chambre a besoin d\'un par stock défini : la quantité nécessaire pour desservir la chambre, stockée dans l\'office d\'étage, plus ce qui est en circuit en laverie. Des par stocks incohérents sont l\'une des sources les plus fréquentes de retards et d\'improvisation de dernière minute dans les opérations housekeeping.",
            },
            {
              heading: 'Fréquence',
              text: "Définissez ce qui est changé lors d\'un nettoyage de départ par rapport à une recouche. Fixez la fréquence minimale pour les longs séjours. Précisez comment gérer les demandes clients de réduction du linge dans le cadre de programmes éco-responsables. Ces décisions doivent être écrites pour être appliquées de façon cohérente par toute l\'équipe.",
            },
          ],
        },
        {
          h2: 'Procédure de service de couverture',
          content:
            "Le service de couverture est une prestation premium du service de housekeeping. Il transforme la chambre de son état diurne à une atmosphère de soirée, et bien exécuté, il signale une attention et un soin que les clients retiennent. Il nécessite sa propre checklist, distincte des procédures de départ et de recouche.",
          h3Items: [
            {
              heading: 'Éléments standard',
              text: "Préparation du lit selon le standard de l\'établissement (rabat du coin de couette ou drap, oreillers de nuit positionnés). Éclairage ambiant tamisé. Rideaux ou stores fermés. Articles minibar consommés depuis l\'arrivée réapprovisionnés. Poubelles vidées. Attention couverture déposée (chocolat, carte ou objet spécifique à l\'établissement). Climatisation réglée sur la température de nuit. Salle de bain rafraîchie : serviettes utilisées remplacées, papier toilette replié, amenities remplacées si utilisées.",
            },
            {
              heading: 'Timing',
              text: "Planifiez le service de couverture en évitant les chambres occupées dans la mesure du possible. Définissez la fenêtre de service (généralement 19h00 à 22h00), la logique de séquençage par type de chambre et priorité VIP, et la procédure DND pour que l\'équipe sache quoi faire quand une chambre est inaccessible.",
            },
          ],
        },
        {
          h2: 'Utiliser un Playbook Housekeeping',
          content:
            "Un playbook housekeeping complet fournit des checklists d\'inspection pré-construites par type de chambre, des procédures de nettoyage de départ, des procédures de recouche, des SOPs de couverture, des protocoles de gestion du linge, des plannings de nettoyage approfondi et des procédures d\'objets trouvés, le tout formaté pour une utilisation immédiate par l\'équipe. Plutôt que de construire cette documentation depuis zéro, un playbook structuré donne à la gouvernante une base professionnelle à personnaliser selon les types de chambres et standards spécifiques de l\'établissement.",
        },
      ],
      conclusion:
        "Le housekeeping fonctionne à la discipline et au détail. Les établissements qui maintiennent un niveau de chambre constamment élevé sont ceux où chaque collaborateur, pas seulement les plus expérimentés, sait exactement quel standard est attendu et dispose de la checklist pour vérifier son propre travail. La structure en housekeeping n\'est pas une question de micromanagement. C\'est ce qui permet à l\'équipe de bien faire son travail, chaque chambre, chaque service.",
      cta: { text: 'Voir le Playbook Housekeeping', href: '/fr/playbooks' },
    },
  },
  {
    slug: 'hotel-fb-service-standards',
    en: {
      title: 'F&B Service Standards: Restaurant, Bar, Room Service and Recovery',
      description:
        'F&B service standards adapted from the LuxOps F&B Playbook: 21-step restaurant sequence, bar standards, room service timing, allergen handling and service recovery.',
      date: '2026-03-16',
      readTime: '10 min read',
      intro:
        'This guide is adapted from the LuxOps F&B Playbook and the F&B Service Starter Pack. In any operation with a restaurant, bar, breakfast or room service, F&B standards need to connect service preparation, guest interaction, recovery and quality control into one operating language. The point is not to make every interaction sound the same. The point is to make sure every team member knows what to prepare, what to check, what to say, when to escalate and how to close the service properly.',
      sections: [
        {
          h2: 'The F&B standard starts before the guest arrives',
          content:
            'The LuxOps F&B Playbook treats pre-service preparation as part of the guest experience. If the briefing is vague, the station is half-stocked or the team does not know the allergies and VIP notes, the service is already fragile before the first table is seated.',
          h3Items: [
            {
              heading: 'Personal readiness',
              text: 'The daily service checklist starts with uniform, grooming, hygiene and service tools: wine key, pen, crumber and notepad. This sounds basic, but it prevents the first visible breakdowns in service. A team member who starts the shift without tools will improvise later.',
            },
            {
              heading: 'Pre-service briefing',
              text: 'The starter pack briefing template covers reservation count, VIP arrivals, special occasions, menu changes, 86’d items, wine features, pairings, management notes and station assignments. This is the moment where the team receives the same service picture before the doors open.',
            },
            {
              heading: 'Final inspection',
              text: 'Twenty minutes before service, the manager checks environment, lighting, music, temperature, smell, table alignment, glassware, silverware, station stock and staff presentation. This is not decoration. It is quality control before the guest becomes the inspector.',
            },
          ],
        },
        {
          h2: 'Restaurant service should follow a controlled sequence',
          content:
            'Chapter 2 of the F&B Playbook uses a 21-step restaurant service sequence. The value of the sequence is that it gives the team a shared rhythm. The server can remain warm and natural because the operational order is already clear.',
          h3Items: [
            {
              heading: 'Arrival and seating',
              text: 'The sequence begins with welcome within 10 seconds, immediate escort to table, chair assistance, menu presentation within 30 seconds of seating and napkin service as guests settle. The playbook is explicit: never point, always escort.',
            },
            {
              heading: 'Water, drinks and order taking',
              text: 'Water and drink order should happen within 2 minutes, drinks within 5 minutes, specials presented with the drinks, and food order taken only when guests are ready. The order is repeated back, with allergies and dietary requirements flagged clearly to the kitchen.',
            },
            {
              heading: 'Course service and table maintenance',
              text: 'Appetizers are served within 10 minutes of order, main courses within 10 minutes of clearing appetizers, and satisfaction is checked 2 minutes after the main course is served. Clearing happens only when all guests have finished. No stacking and no scraping at the table.',
            },
            {
              heading: 'Dessert, check and farewell',
              text: 'Dessert is offered within 2 minutes of clearing, dessert or coffee served within 10 minutes, the check presented only when requested or clearly appropriate, and the farewell remains warm and by name where possible.',
            },
          ],
        },
        {
          h2: 'Bar standards are part of the service experience',
          content:
            'The bar chapter frames the bar as craft, hosting and atmosphere at the same time. It is often the first or last service interaction of the evening, so consistency in gestures, timing and presentation carries real weight.',
          h3Items: [
            {
              heading: 'Bar mise en place',
              text: 'Before service, ice bins are full and clean, juices are fresh, garnishes are cut, glassware is polished, bottles are organized, tools are accessible, coasters and napkins are stocked, POS is ready and menus are clean.',
            },
            {
              heading: 'Drink timing',
              text: 'The playbook gives practical timing standards: draft beer in 30 to 45 seconds, wine by the glass around 1 minute, a simple mixed drink in 1 to 2 minutes, a standard cocktail in 2 to 3 minutes, and a complex craft cocktail in 3 to 5 minutes.',
            },
            {
              heading: 'Beverage consistency',
              text: 'Consistency comes from calibrated pours, jigger use when precision matters, clear shake versus stir rules, correct glassware and garnish standards. A drink should not depend on who happens to be behind the bar.',
            },
          ],
        },
        {
          h2: 'Room service standards are restaurant standards in private',
          content:
            'Chapter 6 of the playbook defines room service as an elevated private dining experience, not a reduced restaurant service. The guest receives the standard in their personal space, with only one interaction to get it right.',
          h3Items: [
            {
              heading: 'Timing standards',
              text: 'Reference targets are concrete: continental breakfast 20 to 25 minutes, full breakfast 25 to 30 minutes, lunch 30 to 35 minutes, dinner 35 to 45 minutes, beverages only 15 to 20 minutes. A rush request is expedited by around 10 minutes where possible.',
            },
            {
              heading: 'Complete delivery',
              text: 'Every delivery should include hot food hot, cold food cold, complete place settings, all condiments, beverages at the correct temperature, clean pressed linen, a check presenter with pen and enough knowledge to answer questions.',
            },
            {
              heading: 'Delay recovery',
              text: 'If the order is 5 to 10 minutes behind, the guest is called, apologized to and given a new ETA. If the delay is 10 minutes or more, the manager is notified and compensation can be considered. Silence is what turns a delay into a complaint.',
            },
          ],
        },
        {
          h2: 'Recovery and allergen handling need written rules',
          content:
            'The guest interaction chapter uses the LEARN framework: Listen, Empathize, Apologize, React, Notify. The goal is to avoid the common F&B mistake of fixing the technical problem before the guest feels heard.',
          h3Items: [
            {
              heading: 'Service recovery',
              text: 'For wrong orders, long waits, quality issues or billing disputes, the playbook gives a step-by-step response: acknowledge, own the issue, give a clear action, follow up and document. The server does not disappear after escalating.',
            },
            {
              heading: 'Allergen protocol',
              text: 'When a guest mentions an allergy, the team takes it seriously, verifies menu items with kitchen, flags the order visibly, separates preparation if required, confirms safety at delivery and follows up with the guest.',
            },
            {
              heading: 'Documentation',
              text: 'Incidents, complaints, unusual events, temperature logs and cleaning records are not admin decoration. They are how recurring service failures become visible and coachable.',
            },
          ],
        },
        {
          h2: 'Starter Pack vs. full F&B Playbook',
          content:
            'The F&B Starter Pack is designed for immediate use: daily service checklist, restaurant opening checklist, restaurant closing checklist, service sequence SOP, briefing template, table inspection checklist, recovery scripts, allergen tracker, room service checklist, upselling cheat sheet and onboarding checklist. The full playbook goes wider and deeper across restaurant, breakfast, bar, wine, room service, guest interaction, mise en place, team management and quality standards.',
          h3Items: [
            {
              heading: 'Use the starter pack for daily execution',
              text: 'Use it when managers need printable checklists and scripts that can be placed in the service binder, used during briefing, or included in onboarding.',
            },
            {
              heading: 'Use the playbook for the full SOP structure',
              text: 'Use it when the department needs a complete operating reference, including standards, procedures, troubleshooting, quality controls and management structure.',
            },
          ],
        },
      ],
      conclusion:
        'F&B standards are useful only when they are operational. The standard has to appear in the briefing, the station, the table, the bar, the tray, the recovery script and the closing handover. When those pieces are documented together, consistency becomes easier to coach and easier to repeat.',
      cta: { text: 'View the F&B Starter Pack', href: '/en/playbooks/fb-starter-pack' },
    },
    fr: {
      title: 'Standards de service F&B : restaurant, bar, room service et recovery',
      description:
        "Standards de service F&B adaptés du Playbook F&B LuxOps : séquence restaurant en 21 étapes, bar, room service, allergènes et recovery client.",
      date: '2026-03-16',
      readTime: '10 min de lecture',
      intro:
        "Ce guide est adapté du playbook F&B LuxOps et du starter pack F&B. Dans un établissement avec restaurant, bar, petit-déjeuner ou room service, les standards F&B doivent relier la préparation, l’interaction client, le recovery et le contrôle qualité autour d’un même langage opérationnel. L’objectif n’est pas de rendre chaque interaction identique, mais de faire en sorte que chaque collaborateur sache quoi préparer, quoi contrôler, quoi dire, quand escalader et comment clôturer le service correctement.",
      sections: [
        {
          h2: 'Le standard F&B commence avant l’arrivée du client',
          content:
            "Dans le Playbook F&B LuxOps, la préparation pré-service fait déjà partie de l’expérience client. Si le briefing reste vague, si le poste est incomplet ou si l’équipe ne connaît pas les allergies et les notes VIP, le service est fragilisé avant même l’installation de la première table.",
          h3Items: [
            {
              heading: 'Préparation individuelle',
              text: "La checklist quotidienne commence par l’uniforme, la présentation, l’hygiène et les outils de service : limonadier, stylo, ramasse-miettes et carnet. Cela paraît basique, mais ce sont les premiers écarts visibles en service. Un collaborateur qui démarre sans outils improvisera plus tard.",
            },
            {
              heading: 'Briefing pré-service',
              text: "Le template de briefing du starter pack couvre le nombre de réservations, les VIP, les occasions spéciales, les changements de carte, les articles indisponibles, les suggestions de vins, les accords mets et vins, les notes de direction et les affectations de rangs. C’est à ce moment-là que toute l’équipe reçoit la même lecture du service à venir.",
            },
            {
              heading: 'Inspection finale',
              text: "Vingt minutes avant l’ouverture, le manager contrôle l’environnement, l’éclairage, la musique, la température, l’odeur, l’alignement des tables, la verrerie, l’argenterie, le stock des stations et la présentation de l’équipe. Ce n’est pas de la décoration. C’est du contrôle qualité avant que le client devienne l’inspecteur.",
            },
          ],
        },
        {
          h2: 'Le service restaurant doit suivre une séquence contrôlée',
          content:
            "Le chapitre consacré au service restaurant dans le Playbook F&B s’appuie sur une séquence de service en 21 étapes. Sa valeur est de donner à l’équipe un rythme partagé. Le serveur peut rester chaleureux et naturel, justement parce que l’ordre opérationnel est déjà clair.",
          h3Items: [
            {
              heading: 'Accueil et placement',
              text: "La séquence commence par l’accueil dans les 10 secondes, l’accompagnement immédiat à table, l’aide à l’installation, la présentation des cartes dans les 30 secondes suivant l’installation, puis le service des serviettes pendant que les clients prennent place. Le principe du playbook est clair : ne jamais pointer, toujours accompagner.",
            },
            {
              heading: 'Eau, boissons et prise de commande',
              text: "L’eau et la commande des boissons interviennent dans les 2 minutes, les boissons dans les 5 minutes, les suggestions sont présentées avec les boissons, puis la commande des plats est prise lorsque les clients sont prêts. La commande est répétée, avec allergies et régimes clairement signalés à la cuisine.",
            },
            {
              heading: 'Service des plats et suivi de table',
              text: "Les entrées sont servies dans les 10 minutes suivant la commande, les plats dans les 10 minutes après débarrassage des entrées, et la satisfaction est vérifiée 2 minutes après le service du plat principal. Le débarrassage se fait seulement quand tous les clients ont terminé. Pas d’empilage et pas de raclage à table.",
            },
            {
              heading: 'Dessert, addition et départ',
              text: "La carte des desserts est proposée dans les 2 minutes après débarrassage, le dessert ou le café est servi dans les 10 minutes, l’addition est présentée seulement à la demande ou quand la table a clairement terminé, et l’au revoir reste chaleureux, idéalement par le nom.",
            },
          ],
        },
        {
          h2: 'Le bar fait partie de l’expérience de service',
          content:
            "Le chapitre bar présente le bar comme un mélange de geste technique, d’accueil et d’atmosphère. C’est souvent le premier ou le dernier contact de service de la soirée, donc la régularité des gestes, du timing et de la présentation pèse lourd.",
          h3Items: [
            {
              heading: 'Mise en place bar',
              text: "Avant service, les bacs à glace sont pleins et propres, les jus sont frais, les garnitures sont préparées, la verrerie est polie, les bouteilles sont organisées, les outils sont accessibles, les dessous de verre et serviettes sont approvisionnés, le POS est prêt et les cartes sont propres.",
            },
            {
              heading: 'Timing boissons',
              text: "Le playbook donne des repères concrets : bière pression en 30 à 45 secondes, vin au verre autour d’une minute, boisson mélangée simple en 1 à 2 minutes, cocktail standard en 2 à 3 minutes, cocktail signature complexe en 3 à 5 minutes.",
            },
            {
              heading: 'Régularité des boissons',
              text: "La régularité vient des dosages calibrés, de l’usage du jigger quand la précision compte, des règles claires entre shaker et verre à mélange, de la verrerie correcte et des standards de garniture. Une boisson ne doit pas dépendre de la personne derrière le bar.",
            },
          ],
        },
        {
          h2: 'Le room service est le restaurant dans l’espace privé du client',
          content:
            "Le chapitre room service définit la restauration en chambre comme une véritable expérience de restauration privée, et non comme une version diminuée du service restaurant. Le client reçoit le standard dans son espace personnel, avec une seule interaction pour bien faire.",
          h3Items: [
            {
              heading: 'Standards de timing',
              text: "Les délais de référence sont concrets : petit-déjeuner continental 20 à 25 minutes, petit-déjeuner complet 25 à 30 minutes, déjeuner 30 à 35 minutes, dîner 35 à 45 minutes, boissons seules 15 à 20 minutes. Une demande urgente est accélérée d’environ 10 minutes si possible.",
            },
            {
              heading: 'Livraison complète',
              text: "Chaque livraison doit inclure des plats chauds servis à bonne température, des plats froids qui restent froids, les couverts complets, les condiments, les boissons à la bonne température, du linge propre et repassé, une pochette addition avec stylo et assez de connaissance produit pour répondre aux questions.",
            },
            {
              heading: 'Recovery en cas de retard',
              text: "Si la commande a 5 à 10 minutes de retard, le client est appelé, l’équipe s’excuse et donne un nouveau délai. À partir de 10 minutes, le responsable est informé et une compensation peut être envisagée. Le silence transforme un retard en réclamation.",
            },
          ],
        },
        {
          h2: 'Recovery et allergènes doivent être écrits',
          content:
            "Le chapitre dédié à l’interaction client utilise le cadre LEARN : écouter, faire preuve d’empathie, s’excuser, réagir, notifier. L’objectif est d’éviter l’erreur F&B classique : vouloir corriger le problème technique avant que le client se sente réellement entendu.",
          h3Items: [
            {
              heading: 'Service recovery',
              text: "Pour erreur de commande, attente longue, problème de qualité ou litige de facturation, le playbook donne une réponse séquencée : reconnaître, porter le sujet, donner une action claire, faire le suivi et documenter. Le serveur ne disparaît pas après l’escalade.",
            },
            {
              heading: 'Protocole allergènes',
              text: "Quand un client mentionne une allergie, l’équipe la prend au sérieux, vérifie les plats avec la cuisine, signale la commande de façon visible, sépare la préparation si nécessaire, confirme la sécurité à la livraison et fait un suivi avec le client.",
            },
            {
              heading: 'Documentation',
              text: "Incidents, réclamations, événements inhabituels, relevés de température et registres de nettoyage ne sont pas de l’administratif décoratif. C’est ce qui rend les défauts récurrents visibles et coachables.",
            },
          ],
        },
        {
          h2: 'Starter pack ou playbook F&B complet ?',
          content:
            "Le starter pack F&B est conçu pour une utilisation immédiate : checklist de service quotidien, checklist d’ouverture restaurant, checklist de fermeture, SOP de séquence de service, template de briefing, checklist d’inspection de table, scripts de recovery, tracker allergènes, checklist room service, fiche upselling et checklist onboarding. Le playbook complet va plus loin sur le restaurant, le petit-déjeuner, le bar, le vin, le room service, l’interaction client, la mise en place, le management et la qualité.",
          h3Items: [
            {
              heading: 'Utiliser le starter pack pour l’exécution quotidienne',
              text: "Il est utile lorsque les managers ont besoin de checklists et scripts imprimables à placer dans le classeur de service, à utiliser en briefing ou à intégrer dans l’onboarding.",
            },
            {
              heading: 'Utiliser le playbook pour la structure SOP complète',
              text: "Il est utile lorsque le département a besoin d’une référence complète : standards, procédures, gestion des situations sensibles, contrôles qualité et structure de management.",
            },
          ],
        },
      ],
      conclusion:
        "Les standards F&B ne sont utiles que lorsqu’ils deviennent opérationnels. Ils doivent se voir dans le briefing, le poste, la table, le bar, le plateau, le script de recovery et la passation de clôture. Lorsque ces éléments sont documentés ensemble, la régularité devient plus facile à coacher et à répéter.",
      cta: { text: 'Voir le starter pack F&B', href: '/fr/playbooks/fb-starter-pack' },
    },
  },
  {
    slug: 'hotel-front-office-procedures',
    en: {
      title: 'Hotel Front Office Procedures: The Complete Guide for Luxury Properties',
      description:
        'A complete guide to hotel front office procedures: check-in, check-out, reservation handling, complaint management and guest communication standards for luxury hotels.',
      date: '2026-03-21',
      readTime: '8 min read',
      intro:
        'The front office is the part of the hotel most guests form an opinion about within the first two minutes. A confident, attentive arrival experience sets the tone for everything that follows. A hesitant one, caused by a team member who was trained informally or not at all, is hard to recover from. Most front office procedures are passed on verbally, shift to shift, with no written standard. This guide covers the core procedures every property should have documented.',
      sections: [
        {
          h2: 'Why Front Office Procedures Matter More Than You Think',
          content:
            'Guests form their impression of a property at the front desk faster than anywhere else. A well-prepared, warm check-in signals that the rest of the stay will be handled with the same care. A disorganised one creates a suspicion that it will not. And that suspicion tends to be confirmed.',
          h3Items: [
            {
              heading: 'Consistency Across Every Shift',
              text: 'Documented procedures mean the check-in quality does not depend on which agent is working. The standard is the same whether it is Monday morning or Saturday night, whether it is the most experienced member of the team or someone in their second week.',
            },
            {
              heading: 'Faster Onboarding',
              text: 'New agents can follow written procedures from day one. That reduces the time to reach an autonomous, guest-ready level and takes pressure off supervisors who would otherwise be covering the gap.',
            },
            {
              heading: 'Fewer Errors, Fewer Complaints',
              text: 'Most front office complaints trace back to a step that was skipped. A billing error because the folio was not reviewed. A wrong room because the allocation was not checked. Written procedures with clear steps eliminate the most common failure points.',
            },
          ],
        },
        {
          h2: 'Check-In Procedure: Step by Step',
          content:
            'The check-in is the most important single interaction in the guest journey. It needs to be warm, efficient, and personalised. Here are the elements that a strong check-in procedure covers.',
          h3Items: [
            {
              heading: 'Pre-Arrival Preparation',
              text: 'Review the arrivals list before the shift starts. Flag VIPs, returning guests, special requests, and any room upgrades in play. Brief the team. Rooms should be inspected and marked ready in the PMS before the expected arrival window, not chased during check-in.',
            },
            {
              heading: 'Guest Welcome',
              text: 'Greet every guest by name within three seconds of approach. Make eye contact. If they have stayed before, acknowledge it. Warmth is a standard, not a personality trait. It can be trained, briefed, and held to.',
            },
            {
              heading: 'Reservation Verification',
              text: 'Confirm the booking details, room type, rate, and length of stay. Verify ID and payment. Upsell room upgrades where appropriate, based on availability and the guest profile. This is a service moment, not a sales moment.',
            },
            {
              heading: 'Room Orientation',
              text: 'Cover the key property information: Wi-Fi, breakfast times, spa, restaurant hours. Offer luggage assistance. If the property escort standard applies, accompany the guest rather than pointing them in the right direction with a keycard.',
            },
          ],
        },
        {
          h2: 'Check-Out Procedure',
          content:
            'Check-out is the last impression the hotel makes. A slow or error-prone billing process undoes a lot of the goodwill built during the stay. The procedure needs to be as well-prepared as the check-in.',
          h3Items: [
            {
              heading: 'Express Check-Out',
              text: 'Offer express check-out at the time of check-in for guests who prefer it. Send the pre-departure folio the evening before. This reduces queue pressure at the desk in the morning and gives guests the opportunity to flag any billing questions without time pressure.',
            },
            {
              heading: 'Folio Review',
              text: 'Present the bill clearly. Walk through any charge the guest may not immediately recognise. Resolve disputes on the spot where possible. A billing issue handled well can convert a potential complaint into a neutral or positive experience.',
            },
            {
              heading: 'Departure Experience',
              text: 'Ask about the stay. Note any feedback in the PMS guest profile. Arrange transport if needed. Thank them by name. A personalised farewell is the last touchpoint of the stay. It is remembered.',
            },
          ],
        },
        {
          h2: 'Reservation Handling Procedures',
          content:
            'Front office teams often handle inbound reservation requests at the same time as live guest interactions at the desk. Without a clear procedure, that combination produces errors.',
          h3Items: [
            {
              heading: 'Inbound Reservation SOP',
              text: 'Capture full guest details, room preference, rate, and any special requests on every call. Read the confirmation back. Send written confirmation within 15 minutes. Log everything in the PMS immediately, not at the end of the shift.',
            },
            {
              heading: 'Modification and Cancellation Protocol',
              text: 'Every modification or cancellation is processed in the PMS within the same call or within one hour. Confirm the change in writing to the guest. Flag revenue-impacting changes to the reservations manager.',
            },
            {
              heading: 'No-Show Procedure',
              text: 'Attempt contact within two hours of the expected arrival time. Charge according to the cancellation policy. Release the room at a defined time, typically 23:00 unless the booking is card-guaranteed. Document every step in the PMS.',
            },
          ],
        },
        {
          h2: 'Complaint Handling at the Front Desk',
          content:
            'Front office is where most guest complaints surface, whether they originated there or not. The guest comes to the desk because it is the visible face of the operation. How the team handles it matters more than the complaint itself.',
          h3Items: [
            {
              heading: 'The HEART Method',
              text: 'Hear the complaint fully without interrupting. Empathise with the experience without making excuses for it. Apologise. Resolve with a concrete action, immediately where possible. Thank the guest for raising it. This sequence needs to be practised, not just read; it changes under pressure.',
            },
            {
              heading: 'Empowerment Policy',
              text: 'Front office agents should be empowered to resolve complaints up to a defined value threshold without needing manager approval. A figure of 50 to 100 euros in service recovery is common. Anything above escalates to the duty manager. This limit needs to be written down and trained into the team, otherwise the reflex is always to escalate, which slows resolution and frustrates guests.',
            },
            {
              heading: 'Log Every Complaint',
              text: 'All complaints, regardless of how small, are logged in the PMS guest profile and the daily incident report. This data surfaces recurring issues, informs staff coaching, and is essential for any quality audit.',
            },
          ],
        },
        {
          h2: 'Night Audit Procedures',
          content:
            'The night audit closes the financial day, reconciles all transactions, and sets up the property for the next operational period. It is one of the most procedure-heavy positions in the front office and one that is frequently under-documented.',
          h3Items: [
            {
              heading: 'End-of-Day Reconciliation',
              text: 'Run all PMS reports. Reconcile room revenue, F&B charges, and ancillary items. Identify and resolve open folios, discrepancies, and failed payment authorisations before running the day roll. Nothing carries over that can be resolved tonight.',
            },
            {
              heading: 'Arrival and Departure Preparation',
              text: "Print and review the next day's arrival list. Flag VIPs and special requests. Confirm room allocations. Pre-block rooms based on guest profiles where the system allows. The morning shift should not be discovering this information at 7am check-in.",
            },
            {
              heading: 'Security and Property Checks',
              text: 'Conduct a full property walkthrough at defined intervals during the night. Log any incidents, maintenance issues, or unusual activity. Maintain the security log. Ensure all access protocols are followed and the property is secure before the first arrivals of the morning.',
            },
          ],
        },
      ],
      conclusion:
        'Front office procedures are not bureaucracy. They are what allows the team to perform at the same level regardless of the shift, the volume, or the experience level of the person at the desk. When procedures are documented and understood, the quality stops being individual and starts being structural. Guests feel that difference, and so do the review scores.',
      cta: { text: 'View Front Office Playbook', href: '/en/playbooks' },
    },
    fr: {
      title: 'Procédures Front Office Hôtel : Le Guide Complet pour les Établissements de Luxe',
      description:
        'Guide complet des procédures front office hôtel : check-in, check-out, gestion des réservations, traitement des réclamations et standards de communication client pour les hôtels de luxe.',
      date: '2026-03-21',
      readTime: '8 min de lecture',
      intro:
        "Le front office est la partie de l\'hôtel sur laquelle la plupart des clients se forgent une opinion dans les deux premières minutes. Une arrivée bien gérée, confiante et attentive donne le ton pour tout ce qui suit. Une arrivée hésitante, causée par un collaborateur formé de façon informelle ou pas du tout, est difficile à rattraper. La plupart des procédures front office se transmettent à l\'oral, service après service, sans standard écrit. Ce guide couvre les procédures fondamentales que chaque établissement devrait avoir documentées.",
      sections: [
        {
          h2: 'Pourquoi les procédures front office comptent plus qu\'on ne le croit',
          content:
            "Les clients se font une opinion de l\'établissement à la réception plus vite qu\'à n\'importe quel autre endroit. Un check-in bien préparé, chaleureux et maîtrisé signale que le reste du séjour sera géré avec le même soin. Un check-in désorganisé crée une suspicion qui tend ensuite à se confirmer.",
          h3Items: [
            {
              heading: 'Cohérence',
              text: "Des procédures documentées signifient que la qualité du check-in ne dépend pas de l\'agent en poste. Le standard est le même qu\'on soit lundi matin ou samedi soir, que ce soit le membre le plus expérimenté de l\'équipe ou quelqu\'un dans sa deuxième semaine.",
            },
            {
              heading: 'Intégration',
              text: "Les nouveaux agents peuvent suivre des procédures écrites dès le premier jour. Cela réduit le temps pour atteindre un niveau autonome et opérationnel, et soulage les superviseurs qui devraient sinon combler l\'écart.",
            },
            {
              heading: "Moins d'erreurs",
              text: "La plupart des réclamations front office remontent à une étape sautée. Une erreur de facturation parce que la note n\'a pas été révisée. Une mauvaise chambre parce que l\'allocation n\'a pas été vérifiée. Des procédures écrites avec des étapes claires éliminent les points de défaillance les plus courants.",
            },
          ],
        },
        {
          h2: 'Procédure de check-in : étape par étape',
          content:
            "Le check-in est l\'interaction la plus importante dans le parcours client. Il doit être chaleureux, efficace et personnalisé. Voici les éléments qu\'une procédure de check-in solide couvre.",
          h3Items: [
            {
              heading: 'Préparation',
              text: "Réviser la liste des arrivées avant le début du service. Identifier les VIP, les clients fidèles, les demandes spéciales et les upgrades potentiels. Briefer l\'équipe. Les chambres doivent être inspectées et marquées prêtes dans le PMS avant la fenêtre d\'arrivée prévue, pas recherchées en plein check-in.",
            },
            {
              heading: 'Accueil',
              text: "Accueillir chaque client par son nom dans les trois secondes suivant son approche. Contact visuel. Si le client est déjà venu, le reconnaître. La chaleur est un standard, pas un trait de personnalité : elle peut être formée, briefée et tenue.",
            },
            {
              heading: 'Vérification',
              text: "Confirmer les détails de la réservation, le type de chambre, le tarif et la durée du séjour. Vérifier la pièce d\'identité et le moyen de paiement. Proposer un upgrade de chambre si approprié, en fonction de la disponibilité et du profil client. C\'est un moment de service, pas un moment de vente.",
            },
            {
              heading: 'Orientation',
              text: "Donner les informations clés sur l\'établissement : Wi-Fi, horaires du petit-déjeuner, spa, restaurant. Proposer l\'assistance bagages. Si le standard de l\'établissement prévoit d\'accompagner le client, le faire, pas de simplement lui tendre un badge clé en lui indiquant la direction.",
            },
          ],
        },
        {
          h2: 'Procédure de check-out',
          content:
            "Le check-out est la dernière impression que laisse l\'hôtel. Un processus de facturation lent ou sujet aux erreurs efface une grande partie de la bonne volonté construite pendant le séjour. La procédure doit être aussi bien préparée que le check-in.",
          h3Items: [
            {
              heading: 'Express',
              text: "Proposer le départ express au moment du check-in pour les clients qui le préfèrent. Envoyer la note pré-départ la veille au soir. Cela réduit la pression en ligne à la réception le matin et donne aux clients la possibilité de signaler une question de facturation sans la pression du temps.",
            },
            {
              heading: 'Révision',
              text: "Présenter la note clairement. Expliquer tout frais que le client pourrait ne pas reconnaître immédiatement. Résoudre les contestations sur le moment dans la mesure du possible. Un litige de facturation bien géré peut transformer une réclamation potentielle en une expérience neutre ou positive.",
            },
            {
              heading: 'Départ',
              text: "Demander comment s\'est passé le séjour. Noter les retours dans le profil client du PMS. Organiser le transport si nécessaire. Remercier le client par son nom. Un au revoir personnalisé est le dernier point de contact du séjour : il reste.",
            },
          ],
        },
        {
          h2: 'Procédures de gestion des réservations',
          content:
            "Les équipes front office gèrent souvent des demandes de réservation entrantes en même temps qu\'elles accueillent des clients à la réception. Sans procédure claire, cette combinaison produit des erreurs.",
          h3Items: [
            {
              heading: 'Réservation entrante',
              text: "Recueillir les coordonnées complètes du client, ses préférences de chambre, le tarif et les demandes spéciales à chaque appel. Confirmer la réservation à voix haute. Envoyer la confirmation écrite dans les 15 minutes. Tout enregistrer dans le PMS immédiatement, pas en fin de service.",
            },
            {
              heading: 'Modification',
              text: "Chaque modification ou annulation est traitée dans le PMS dans le même appel ou dans l\'heure qui suit. La modification est confirmée par écrit au client. Les changements ayant un impact sur le revenu sont signalés au responsable des réservations.",
            },
            {
              heading: 'No-show',
              text: "Tentative de contact dans les deux heures suivant l\'heure d\'arrivée prévue. Facturation selon la politique d\'annulation applicable. Libération de la chambre à une heure définie, généralement 23h00 sauf si la réservation est garantie par carte. Chaque étape est documentée dans le PMS.",
            },
          ],
        },
        {
          h2: 'Gestion des réclamations à la réception',
          content:
            "Le front office est le point de contact principal pour les réclamations clients, qu\'elles y aient pris naissance ou non. Le client vient à la réception parce que c\'est le visage visible de l\'exploitation. La façon dont l\'équipe gère la situation compte plus que la réclamation elle-même.",
          h3Items: [
            {
              heading: 'HEART',
              text: "Écouter la réclamation en entier sans interrompre. Empathiser avec l\'expérience sans se justifier. S\'excuser. Résoudre avec une action concrète, immédiatement si possible. Remercier le client de l\'avoir signalé. Cette séquence doit être pratiquée, pas seulement lue : elle se modifie sous la pression.",
            },
            {
              heading: 'Empowerment',
              text: "Les agents front office doivent être habilités à résoudre les réclamations jusqu\'à un seuil de valeur défini sans avoir besoin de l\'accord d\'un manager. Un montant de 50 à 100 euros en gestes commerciaux est courant. Au-delà, escalade vers le manager de permanence. Cette limite doit être écrite et formée : sinon le réflexe est toujours d\'escalader, ce qui ralentit la résolution et frustre les clients.",
            },
            {
              heading: 'Tracer',
              text: "Toutes les réclamations, quelle que soit leur importance, sont enregistrées dans le profil client du PMS et dans le rapport d\'incidents quotidien. Ces données font remonter les problèmes récurrents, alimentent le coaching des équipes et sont essentielles pour tout audit qualité.",
            },
          ],
        },
        {
          h2: 'Procédures d\'audit de nuit',
          content:
            "L\'audit de nuit clôture la journée financière, rapproche toutes les transactions et prépare l\'établissement pour la période opérationnelle suivante. C\'est l\'un des postes les plus procéduraux du front office et l\'un des moins bien documentés.",
          h3Items: [
            {
              heading: 'Rapprochement',
              text: "Lancer tous les rapports PMS. Rapprocher les revenus chambre, les charges F&B et les éléments annexes. Identifier et résoudre les folios ouverts, les écarts et les autorisations de paiement échouées avant de lancer le passage de journée. Rien ne se reporte de ce qui peut être résolu cette nuit.",
            },
            {
              heading: 'Préparation arrivées',
              text: "Imprimer et réviser la liste des arrivées du lendemain. Identifier les VIP et les demandes spéciales. Confirmer les allocations de chambres. Pré-bloquer les chambres selon les profils clients si le système le permet. L\'équipe du matin ne devrait pas découvrir ces informations à 7h du matin en plein check-in.",
            },
            {
              heading: 'Rondes de sécurité',
              text: "Effectuer une ronde complète de l\'établissement à intervalles définis. Consigner tout incident, problème de maintenance ou activité inhabituelle. Tenir le registre de sécurité à jour. S\'assurer que tous les protocoles d\'accès sont respectés avant les premières arrivées du matin.",
            },
          ],
        },
      ],
      conclusion:
        "Les procédures front office ne sont pas de la bureaucratie. Elles sont ce qui permet à l\'équipe de performer au même niveau quel que soit le service, le volume ou le niveau d\'expérience de la personne à la réception. Quand les procédures sont documentées et comprises, la qualité cesse d\'être individuelle pour devenir structurelle. Les clients sentent cette différence, et les scores d\'évaluation aussi.",
      cta: { text: 'Voir le Playbook Front Office', href: '/fr/playbooks' },
    },
  },
  {
    slug: 'housekeeping-room-inspection',
    en: {
      title: 'Hotel Room Inspection Checklist: Housekeeping Supervisor SOP and 100-Point Score',
      description:
        'A hotel room inspection checklist adapted from the LuxOps Housekeeping Playbook: Clean vs Inspected workflow, 100-point scoring, bathroom checks, defect tracking and supervisor release rules.',
      date: '2026-03-28',
      readTime: '12 min read',
      intro:
        'A clean room and an inspected room are not the same thing. In the LuxOps Housekeeping Playbook, a departure room is not ready for sale when the room attendant finishes cleaning it. It is only ready after a supervisor has physically inspected it, corrected any defects, and updated the PMS from Clean to Inspected. This hotel room inspection checklist is adapted from the LuxOps quality control chapter and shows the supervisor SOP: fixed inspection sequence, 100-point scoring model, bathroom and bedroom criteria, defect log and release rule for Front Desk.',
      sections: [
        {
          h2: 'The Room Status Workflow: Clean Is Not Inspected',
          content:
            'The most important rule in hotel room inspection is simple: a Clean room is not ready for assignment. Clean means the room attendant has finished the cleaning sequence. Inspected means the supervisor has verified the room against the standard and released it. Front Office should only assign rooms in Inspected status.',
          h3Items: [
            {
              heading: 'Dirty / vacant',
              text: 'Set by the system or after checkout. The room cannot be sold and must enter the housekeeping assignment flow.',
            },
            {
              heading: 'Clean',
              text: 'Set by the room attendant after the room cleaning SOP is complete. This status tells the supervisor the room is ready for inspection, not that the room is ready for a guest.',
            },
            {
              heading: 'Inspected',
              text: 'Set only by a supervisor or manager after physical inspection. This is the first status that should be visible to Front Office as available for assignment.',
            },
            {
              heading: 'No exception rule',
              text: 'If a guest is waiting, the process does not change. Assigning a Clean but uninspected room transfers the quality risk from housekeeping to the guest.',
            },
          ],
        },
        {
          h2: 'Inspection Frequency and Responsibility',
          content:
            'A useful hotel room inspection system separates self-inspection from supervisor inspection. The room attendant owns the first check. The supervisor owns the release decision. Managers own the trend review and training response.',
          h3Items: [
            {
              heading: 'Self-inspection: every room',
              text: 'Before leaving the room, the attendant should complete a final scan from the guest perspective: bed smooth, bathroom dry, no hair, no dust, no odor, amenities aligned and no lost items.',
            },
            {
              heading: 'Departure inspection: 100% of departures',
              text: 'Every departure room should be physically inspected by a supervisor before release. This is non-negotiable in luxury and boutique hotels where the arrival room is the first major quality signal.',
            },
            {
              heading: 'Stayover spot checks: 20 to 30% daily',
              text: 'Stayover rooms should be sampled daily, prioritising newer attendants, VIP rooms, long-stay rooms, prior guest feedback and rooms with inconsistent quality history.',
            },
            {
              heading: 'Deep dive audit: weekly',
              text: 'A manager or executive housekeeper should run a deeper weekly audit to identify room patterns, training needs, maintenance issues and standards that are drifting over time.',
            },
          ],
        },
        {
          h2: 'Departure Room Inspection Sequence',
          content:
            'The LuxOps inspection sequence is designed to be fast enough for daily operations and precise enough to catch the defects guests notice. A standard departure inspection should follow the same path every time.',
          h3Items: [
            {
              heading: '1. Entry assessment',
              text: 'Stand at the doorway for a few seconds before touching anything. Check first impression, temperature, scent, light, bed presentation and overall order. This is the guest’s first view.',
            },
            {
              heading: '2. Bedroom check',
              text: 'Inspect bed symmetry, pillow placement, desk, nightstands, TV unit, window area, curtains, drawers, wardrobe, safe, robes, slippers, floor edges and under-bed edges.',
            },
            {
              heading: '3. Bathroom check',
              text: 'Inspect toilet bowl, under rim, exterior and base; sink, counter and faucet; shower or bath surfaces; drain; mirror; floor corners; towels; glasses; tissues and amenities.',
            },
            {
              heading: '4. Details and technology',
              text: 'Check clock, alarms, TV input, remote, lights, phone, HVAC, minibar, stationery, guest directory, Wi-Fi information and any property-specific arrival setup.',
            },
            {
              heading: '5. Final release decision',
              text: 'If the room passes, update PMS to Inspected. If it fails, return it with specific defects, re-inspect after correction, and record the issue for trend tracking.',
            },
          ],
        },
        {
          h2: 'Bathroom Inspection: The Highest-Risk Zone',
          content:
            'Most housekeeping complaints come from details concentrated in the bathroom: hair, water spots, odor, residue, used amenities or a floor that looks clean from standing height but fails at the corners. Bathroom inspection needs its own standard, not just a quick visual scan.',
          h3Items: [
            {
              heading: 'No hair anywhere',
              text: 'Check the shower, tub, floor, corners, behind the toilet, around the bath mat position and near the drain. In luxury hospitality, one hair can outweigh an otherwise perfect room.',
            },
            {
              heading: 'Chrome and mirror finishing',
              text: 'Faucets, showerheads, towel rails and mirrors must be dry-polished. Check from an angle, because streaks and water marks often disappear when viewed straight on.',
            },
            {
              heading: 'Toilet and floor detail',
              text: 'Inspect inside bowl, under rim, seat, lid, exterior, base and floor connection. The floor must be dry, with clean corners and no residue behind the toilet.',
            },
            {
              heading: 'Amenities and towels',
              text: 'Amenities should be complete, aligned, labels facing forward and packaging intact. Towels must be stain-free, folded consistently and positioned to the property standard.',
            },
          ],
        },
        {
          h2: 'The 100-Point Room Inspection Score',
          content:
            'A scoring model turns room inspection from opinion into data. The LuxOps model uses 100 points so supervisors can coach on patterns instead of arguing about impressions.',
          h3Items: [
            {
              heading: 'Bathroom: 35 points',
              text: 'Toilet, shower, bath, mirror, floor, fixtures, amenities, towels, glasses and final hygiene details. Suggested pass threshold: 31 out of 35.',
            },
            {
              heading: 'Bedroom: 35 points',
              text: 'Bed presentation, linen, surfaces, lamps, windows, wardrobe, safe, floor, stationery and guest-facing room presentation. Suggested pass threshold: 31 out of 35.',
            },
            {
              heading: 'Presentation: 20 points',
              text: 'Temperature, scent, first impression, symmetry, alignment, ambiance and brand-specific setup details. Suggested pass threshold: 18 out of 20.',
            },
            {
              heading: 'Maintenance: 10 points',
              text: 'Lights, HVAC, leaks, remote, phone, furniture, hinges, fixtures and any unresolved maintenance issue. Suggested pass threshold: 10 out of 10.',
            },
          ],
        },
        {
          h2: 'Defect Logging and Coaching',
          content:
            'The goal of inspection is not to catch people out. It is to protect the guest experience and make the team better. That only works if defects are logged clearly and reviewed regularly.',
          h3Items: [
            {
              heading: 'What to record',
              text: 'Room number, attendant, inspection time, defect type, exact location, correction required, re-inspection result and any coaching given.',
            },
            {
              heading: 'How to classify defects',
              text: 'Group defects by category: bathroom, bedroom, closet/storage, presentation and maintenance. This makes weekly trend review faster.',
            },
            {
              heading: 'What patterns reveal',
              text: 'The same issue across multiple attendants points to training. The same issue with one attendant points to coaching. The same room failing repeatedly points to maintenance or deep-clean needs.',
            },
            {
              heading: 'Weekly action',
              text: 'Review the top three recurring defects, refresh the standard in briefing, and verify the following week that the issue is improving.',
            },
          ],
        },
      ],
      conclusion:
        'A strong room inspection checklist does more than catch missed dust or a streaky mirror. It protects the room status workflow, gives Front Office confidence in the rooms it assigns, and gives housekeeping supervisors real coaching data. The standard is simple: every room attendant owns self-inspection, every departure room is verified before release, and every defect becomes information the team can use to improve.',
      cta: { text: 'View the Housekeeping Playbook', href: '/en/playbooks/hsk' },
      faqs: [
        {
          question: 'What is a room inspection checklist in housekeeping?',
          answer:
            "A room inspection checklist in housekeeping is a structured supervisor tool used to verify that a room meets the property's standard before it is released to Front Office. The LuxOps model separates room attendant self-inspection from supervisor release inspection and uses a 100-point structure across bathroom, bedroom, presentation and maintenance.",
        },
        {
          question: 'What does room inspection mean in housekeeping?',
          answer:
            'Room inspection in housekeeping is the structured quality gate between Clean and Inspected room status. A room attendant marks the room Clean after service; the supervisor inspects it physically and only then updates it to Inspected so Front Office can assign it to a guest.',
        },
        {
          question: 'What should a housekeeping supervisor check during a room inspection?',
          answer:
            'The supervisor should check the room in a fixed sequence: entry impression, bedroom, bathroom, technology, amenities, wardrobe, minibar, floor and final doorway view. High-risk points include hair in the bathroom, water spots on chrome, uneven bed presentation, missing amenities, dust on lamps or skirting, and unreported maintenance faults.',
        },
        {
          question: 'How often should a hotel room be inspected by a supervisor?',
          answer:
            'In the LuxOps Housekeeping Playbook, 100% of departure rooms should be inspected before release. Stayover rooms should be spot-checked at 20 to 30% per day, with priority for newer attendants, VIP rooms, long-stay guests and rooms connected to previous complaints.',
        },
        {
          question: 'What is the difference between a room attendant check and a supervisor inspection?',
          answer:
            'A room attendant check is self-inspection before marking the room Clean. A supervisor inspection is an independent release check before the room becomes Inspected and assignable. The attendant owns the work; the supervisor owns the release decision.',
        },
      ],
    },
    fr: {
      title: "Checklist d'inspection des chambres : comment les superviseurs housekeeping maintiennent des standards cohérents",
      description:
        "Guide pratique du processus d'inspection superviseur en hôtellerie de luxe. Séquence d'inspection, points de contrôle, documentation des défauts et retour de chambre non conforme.",
      date: '2026-03-28',
      readTime: '8 min de lecture',
      intro:
        "Une chambre propre et une chambre qui passe l'inspection ne sont pas toujours la même chose. Les équipiers d'étage travaillent selon une séquence et visent le standard pour lequel ils ont été formés. Ce que l'inspection superviseur housekeeping ajoute, c'est un second contrôle structuré, effectué par un autre regard, avant que la chambre soit libérée à la réception. Dans les hôtels haut de gamme, cette étape n'est pas facultative : c'est la dernière porte qualité avant que le client entre dans sa chambre. Quand elle est bien menée, elle rattrape ce qui passe au travers lors d'un service chargé. Quand elle est sautée ou informelle, c'est le client qui devient le contrôle qualité. Ce guide couvre le fonctionnement d'une inspection structurée, ce que la gouvernante d'étage doit vérifier à chaque étape, et comment construire une checklist qui tient sous la pression opérationnelle.",
      sections: [
        {
          h2: "Ce qu'est une inspection de chambre (et ce qu'elle n'est pas)",
          content:
            "Une inspection de chambre est une porte qualité, pas un passage rapide. La distinction est importante. Un passage confirme que la chambre a été faite. Une inspection vérifie qu'elle a été faite selon le standard : que chaque élément a été traité correctement, et que rien n'a été oublié. Dans un contexte hôtelier haut de gamme, les critères d'inspection doivent être suffisamment précis pour que deux superviseurs différents arrivent au même verdict sur la même chambre. Cela nécessite une séquence définie et des critères documentés, pas une impression générale.",
          h3Items: [
            {
              heading: "Qui mène l'inspection",
              text: "Dans la plupart des établissements, c'est le superviseur housekeeping ou le superviseur d'étage qui mène les inspections avant libération. Dans les établissements avec un responsable qualité ou de la division chambres, des inspections ponctuelles peuvent être ajoutées à un second niveau. Le critère essentiel : la personne qui inspecte ne doit pas avoir nettoyé la chambre.",
            },
            {
              heading: 'Quand elle a lieu',
              text: "L'inspection doit avoir lieu après que l'équipier a terminé la chambre et avant que le statut soit mis à jour dans le PMS. Libérer une chambre avant inspection signifie que tout défaut découvert ensuite nécessite un re-service et un potentiel délai pour une arrivée en attente.",
            },
            {
              heading: 'À quoi ressemble le résultat',
              text: "Conforme : la chambre est libérée comme propre et prête. Non conforme : la chambre est retournée à l'équipier avec une liste de défauts précis, pas un retour général, mais un relevé documenté de ce qui doit être corrigé et re-inspecté.",
            },
          ],
        },
        {
          h2: "La séquence d'inspection : par où commencer",
          content:
            "La séquence d'inspection doit suivre un chemin fixe à travers la chambre pour éviter les zones manquées. L'approche la plus fiable consiste à entrer, évaluer la chambre dans son ensemble, puis travailler du point le plus éloigné vers la porte. Cela reflète la séquence de nettoyage en sens inverse et permet de vérifier plus facilement si l'équipier a suivi le bon ordre.",
          h3Items: [
            {
              heading: "Impression générale à l'entrée",
              text: "Avant d'examiner une zone spécifique, noter l'impression générale : odeur, lumière naturelle, présentation du lit, ordre général. C'est ce que le client perçoit en premier. Si l'impression générale est mauvaise, le documenter avant de continuer.",
            },
            {
              heading: 'La salle de bain en premier',
              text: "La salle de bain est la zone la plus scrutée par les clients et la source la plus fréquente d'échecs à l'inspection. Compléter le contrôle salle de bain avant de passer à la chambre.",
            },
            {
              heading: 'Chambre et lit',
              text: "Alignement du linge, placement des oreillers, éléments décoratifs, surfaces, fonctionnement des équipements, état du sol. Travailler systématiquement du mur le plus éloigné vers l'entrée.",
            },
            {
              heading: "Retour vers l'entrée",
              text: "Portes, poignées, plinthes, intérieur de l'armoire, minibar. Ce sont les zones les plus souvent sautées lors des inspections informelles.",
            },
          ],
        },
        {
          h2: "Checklist d'inspection de la salle de bain",
          content:
            "La salle de bain concentre le plus grand nombre de critères d'inspection dans le plus petit espace. Les inspections rapides ou informelles ont tendance à valider sur l'impression visuelle plutôt qu'en travaillant une liste définie. Ce sont les zones qui nécessitent un contrôle précis.",
          h3Items: [
            {
              heading: 'Robinetterie et chrome',
              text: "Les éléments chromés, notamment les robinets, le pommeau de douche et le porte-serviettes, doivent être secs et sans traces d'eau. Le calcaire visible sur les joints carrelés ou à la base des éléments est un échec immédiat.",
            },
            {
              heading: "Placement des produits d'accueil",
              text: "Les produits d'accueil doivent être placés selon le standard de l'établissement : bons produits, bonne position, bonne orientation. Les produits partiellement utilisés non remplacés sont un point d'échec fréquent.",
            },
            {
              heading: 'Miroir et surfaces vitrées',
              text: "Les miroirs et surfaces vitrées doivent être sans traces. Vérifier en regardant la surface de biais, pas de face. C'est une technique qui doit faire partie du standard équipier également.",
            },
            {
              heading: 'Sol et joints',
              text: "La décoloration des joints carrelés ou les résidus en bordure de sol, notamment autour de la douche ou de la baignoire, sont des défauts qui passent inaperçus lors d'un simple regard. Inspecter au niveau du sol si nécessaire.",
            },
            {
              heading: 'Pliage et placement des serviettes',
              text: "Le standard doit correspondre exactement au pliage et au placement définis par l'établissement. C'est l'un des indicateurs les plus visibles du soin apporté à la préparation de la chambre.",
            },
          ],
        },
        {
          h2: 'Contrôle de la chambre et du linge',
          content:
            "Le contrôle de la chambre doit couvrir à la fois la présentation et le fonctionnement. Les défauts de présentation sont visibles ; les défauts de fonctionnement comme une ampoule grillée, un téléviseur en panne ou une tablette déchargée ne sont détectés que lorsque le client est déjà dans la chambre.",
          h3Items: [
            {
              heading: 'Alignement du linge',
              text: "Les deux côtés du lit doivent avoir un retour égal. L'alignement du drap et de la couette doit correspondre au standard de l'établissement. L'erreur la plus fréquente : le linge est centré vu du pied du lit mais décalé vu de côté.",
            },
            {
              heading: 'Placement des oreillers et coussins',
              text: "Le nombre et le placement doivent correspondre au standard de la catégorie de chambre. Les coussins décoratifs doivent être disposés dans l'ordre et l'orientation définis.",
            },
            {
              heading: 'État des surfaces',
              text: "Tables de nuit, bureau, meuble TV : sans poussière et sans effets du client précédent. Vérifier l'intérieur des tiroirs si le standard de l'établissement l'exige.",
            },
            {
              heading: 'Éclairage et équipements',
              text: "Tester les lampes de chevet, l'éclairage principal et le téléviseur. Vérifier l'état des piles des télécommandes si l'établissement dispose d'un système de contrôle. Les défauts de fonctionnement font partie des réclamations les plus fréquentes dans les hôtels de luxe.",
            },
          ],
        },
        {
          h2: 'Documenter les défauts et retourner une chambre',
          content:
            "Quand une chambre échoue à l'inspection, le processus de retour doit être géré de façon à ne pas créer de friction ou d'ambiguïté. Le superviseur doit documenter ce qui a été trouvé, à quel moment, et quelle correction est requise. Un retour verbal, ouvert à l'interprétation et impossible à tracer, ne suffit pas.",
          h3Items: [
            {
              heading: 'Ce qu\'il faut consigner',
              text: "Numéro de chambre, heure d'inspection, liste de défauts précis. Pas \"salle de bain pas propre\" mais \"calcaire sur le robinet, produit d'accueil non remplacé, serviette mal pliée\". Ce relevé doit être accessible pendant le shift et à la passation.",
            },
            {
              heading: 'La re-inspection',
              text: "Une fois la chambre corrigée par l'équipier, le superviseur doit re-inspecter avant de la libérer. La re-inspection doit être documentée séparément du contrôle initial.",
            },
            {
              heading: 'Suivre les tendances',
              text: "Les relevés de défauts dans le temps révèlent des tendances : équipiers qui manquent régulièrement la même zone, catégories de chambres qui génèrent plus d'échecs, effets du timing de shift. Sans relevés, ces tendances restent invisibles et les mêmes défauts se répètent.",
            },
          ],
        },
        {
          h2: "Comment construire une checklist d'inspection chambre pour votre établissement",
          content:
            "Une checklist d'inspection de chambre n'est utile que si les critères sur lesquels elle repose le sont. Une liste qui dit \"salle de bain propre\" n'est pas une checklist : c'est un aide-mémoire. Une checklist qui précise \"robinetterie sèche et sans traces d'eau, produits d'accueil placés selon le standard de l'établissement, pliage des serviettes conforme au schéma du SOP\" est un outil que deux gouvernantes différentes peuvent utiliser et obtenir le même résultat.",
          h3Items: [
            {
              heading: 'Organiser par zone, pas par tâche',
              text: "Structurer la checklist pour suivre le chemin physique dans la chambre : entrée et impression générale, salle de bain, chambre et lit, surfaces et équipements, armoire et minibar, sol et sortie. Cela reflète la séquence d'inspection et évite à la gouvernante de faire des allers-retours dans la chambre.",
            },
            {
              heading: 'Définir conforme et non conforme pour chaque critère',
              text: "Chaque point de la checklist doit avoir un standard défini. \"Miroir propre\" est ambigu. \"Miroir sans traces vérifié à 45 degrés\" ne l'est pas. Plus le critère est précis, moins il y a de place à l'interprétation lors d'une inspection rapide, et plus le résultat est cohérent d'une gouvernante à l'autre.",
            },
            {
              heading: 'Inclure une section relevé de défauts',
              text: "La checklist doit prévoir un espace pour consigner les défauts constatés : quoi, où, et heure de constat. Cela transforme le formulaire d'inspection en un relevé traçable, consultable à la passation de service, croisable avec les notes de re-inspection, et analysable dans le temps pour identifier les défauts récurrents.",
            },
            {
              heading: 'Mettre à jour la checklist après les défauts récurrents',
              text: "Si le même défaut apparaît régulièrement sur des chambres ou des équipiers différents, il doit figurer sur la checklist comme point de vigilance. Une checklist qui n'évolue pas en fonction de ce que l'établissement constate réellement est une checklist qui continuera à manquer les mêmes choses.",
            },
          ],
        },
      ],
      conclusion:
        "Une inspection de chambre n'est utile que si les critères derrière elle le sont aussi. Une gouvernante d'étage qui travaille à partir d'une checklist définie et documente ce qu'elle trouve crée un système qui s'améliore dans le temps. Celle qui se base sur une impression générale crée un système qui n'est cohérent que tant qu'elle est en poste. Le protocole d'inspection est l'une des procédures les plus importantes dans un SOP housekeeping, et l'une des plus souvent sous-documentées.",
      cta: { text: 'Voir le Playbook Housekeeping', href: '/fr/playbooks' },
      faqs: [
        {
          question: "Qu'est-ce qu'une checklist d'inspection chambre en housekeeping ?",
          answer:
            "Une checklist d'inspection chambre est une liste structurée de critères précis utilisée par la gouvernante d'étage pour vérifier qu'une chambre a été nettoyée et préparée selon le standard de l'établissement, avant d'être libérée à la réception. Elle est différente de la séquence de nettoyage suivie par l'équipier : l'équipier utilise le SOP pour réaliser le travail, la gouvernante d'étage utilise la checklist pour vérifier le résultat. Une checklist bien structurée couvre la salle de bain, le lit et le linge, les surfaces et équipements, l'éclairage et les appareils, et la zone d'entrée incluant armoire et minibar.",
        },
        {
          question: "Que signifie l'inspection de chambre en housekeeping ?",
          answer:
            "L'inspection de chambre désigne le contrôle qualité structuré réalisé par la gouvernante d'étage après qu'un équipier a terminé la remise en état d'une chambre, avant que le statut soit mis à jour comme propre et disponible dans le PMS. C'est une porte qualité, pas un passage rapide. L'objectif est de vérifier que la chambre répond au standard défini sur chaque point, y compris les zones fréquemment manquées sous pression : joints carrelés, placement des produits d'accueil, alignement du linge et fonctionnement des équipements.",
        },
        {
          question: "Que doit vérifier la gouvernante lors de l'inspection d'une chambre ?",
          answer:
            "La gouvernante d'étage doit suivre une séquence fixe de l'entrée à la sortie. Dans la salle de bain : robinetterie et éléments chromés (traces d'eau, tartre), miroirs et surfaces vitrées, placement des produits d'accueil, pliage et placement des serviettes, WC extérieur et intérieur, sol et joints. Dans la chambre : alignement du linge, placement des oreillers et coussins décoratifs, état des surfaces, fonctionnement de l'éclairage et des équipements, intérieur de l'armoire, minibar et état du sol. Chaque point doit être vérifié par rapport à un standard défini, pas à une impression générale.",
        },
        {
          question: "À quelle fréquence les chambres doivent-elles être inspectées par la gouvernante ?",
          answer:
            "Dans la plupart des hôtels de luxe, chaque chambre doit être inspectée par la gouvernante d'étage avant d'être libérée à la réception comme propre et disponible. Dans les établissements avec un grand nombre de chambres ou sous pression de temps, un système d'inspection par échantillonnage est parfois utilisé, mais chaque chambre départ et arrivée doit être inspectée en priorité. L'objectif est de détecter les défauts avant le client, pas après.",
        },
        {
          question: "Quelle est la différence entre le contrôle de l'équipier et l'inspection superviseur ?",
          answer:
            "L'équipier vérifie son propre travail en fonction de la séquence de nettoyage et des standards pour lesquels il a été formé. L'inspection superviseur est un contrôle qualité indépendant réalisé par une personne différente qui n'a pas fait la chambre. La distinction est importante car l'autocontrôle et l'inspection indépendante ne détectent pas les mêmes types d'erreurs. L'équipier sait ce qu'il a fait ; la gouvernante voit ce que le client va voir.",
        },
      ],
    },
  },
  {
    slug: 'hotel-fb-restaurant-procedures',
    en: {
      title: 'Restaurant SOP: 21-Step Service Sequence, Opening and Closing',
      description:
        'Restaurant SOP guide adapted from the LuxOps F&B Playbook: opening checklist, 21-step service sequence, table inspection, order taking, recovery and closing handover.',
      date: '2026-03-29',
      readTime: '10 min read',
      intro:
        'This restaurant SOP guide is adapted from the LuxOps F&B Playbook and the F&B Starter Pack. It focuses on the operating rhythm that makes restaurant service consistent: opening preparation, briefing, table inspection, the 21-step service sequence, recovery rules and closing handover. The point is not to make service mechanical. It is to remove operational doubt so the team can focus on the guest.',
      sections: [
        {
          h2: 'Opening procedure: T-90 to doors open',
          content:
            'The starter pack opening checklist starts 90 minutes before service. This matters because the restaurant cannot recover fully from a weak opening: missing mise en place becomes slow service, slow service becomes stress, and stress becomes visible to the guest.',
          h3Items: [
            {
              heading: 'T-90: personal and product readiness',
              text: 'Uniform, grooming, hygiene and tools are checked first. The team reviews menu changes, specials, 86’d items, VIP arrivals, notable reservations, allergies and special requests before moving into physical setup.',
            },
            {
              heading: 'T-60: room, terrace and station setup',
              text: 'Tables are set to standard, chairs aligned, floor dry, lighting appropriate, music set, temperature comfortable and no unwanted odor present. Stations are stocked with linen, silverware, glassware, service tools, condiments and backup stock.',
            },
            {
              heading: 'T-40 and T-20: briefing and final inspection',
              text: 'The briefing covers reservations, VIPs, menu changes, wine pairings and station assignments. The final inspection checks every table, station, uniform, ambiance and service position before doors open.',
            },
          ],
        },
        {
          h2: 'The 21-step restaurant service sequence',
          content:
            'The F&B Playbook gives the restaurant team a complete 21-step sequence. It is not a script. It is the operating order that keeps the guest experience flowing from entrance to farewell.',
          h3Items: [
            {
              heading: 'Arrival and first contact',
              text: 'Welcome within 10 seconds, escort immediately, seat guests with chair assistance, present menus within 30 seconds, unfold napkins as guests settle, then offer water and take the drink order within 2 minutes.',
            },
            {
              heading: 'Beverage and order flow',
              text: 'Drinks are served within 5 minutes, specials are presented with the drinks, food order is taken when guests are ready, and bread or amuse-bouche follows once the order is sent.',
            },
            {
              heading: 'Courses, checkback and close',
              text: 'Appetizers and mains follow clear timing standards, satisfaction is checked 2 minutes after main courses, tables are cleared only when all guests have finished, dessert is offered promptly, the check is presented appropriately, and farewell is warm, ideally by name.',
            },
          ],
        },
        {
          h2: 'Order taking is a control point, not transcription',
          content:
            'The playbook is clear on order taking: the server listens completely, asks clarifying questions, notes allergies prominently, repeats the order and communicates kitchen requirements properly. This is where many service failures are prevented before they exist.',
          h3Items: [
            {
              heading: 'Allergy capture',
              text: 'Allergies are not handled as a casual note. They are confirmed with the guest, flagged to the kitchen, visible on the order and followed through until delivery. If the guest raises a concern, it becomes a manager-level priority.',
            },
            {
              heading: 'Specific recommendations',
              text: 'Upselling works when it is contextual. The starter pack upselling cheat sheet encourages specific suggestions: wine with steak, fresh juice with breakfast, coffee or digestif with dessert, not generic pressure.',
            },
            {
              heading: 'Pacing ownership',
              text: 'The server owns table rhythm: drinks, starters, mains, clearing, dessert and check. If the kitchen is delayed or a table needs to be held, the guest should receive a clear update before frustration becomes visible.',
            },
          ],
        },
        {
          h2: 'Table inspection and mise en place',
          content:
            'Chapter 8 of the playbook defines mise en place as physical, mental and organizational readiness. The starter pack turns that into a table inspection checklist the team can actually use before service.',
          h3Items: [
            {
              heading: 'Physical table standard',
              text: 'The playbook gives exact placement references: show plate 1 inch or 2.5 cm from the edge, fork 1 inch from the plate, glasses above the knife tip, and minimum 24 inches or 60 cm between covers.',
            },
            {
              heading: 'Station readiness',
              text: 'Stations are stocked to par with napkins, silverware, glassware, crumbers, wine keys, check presenters and pens. Most used items stay at the front, heavy items at the bottom, clean items separated from used items.',
            },
            {
              heading: 'Sidework discipline',
              text: 'Opening sidework includes polishing glassware and silverware, setting tables and stocking stations. Running sidework includes pre-bussing and restocking. Closing sidework resets the restaurant for the next team.',
            },
          ],
        },
        {
          h2: 'Closing procedure and handover',
          content:
            'A clean closing procedure protects the next service. The F&B Starter Pack includes a restaurant closing checklist so the end of shift is not handled from memory.',
          h3Items: [
            {
              heading: 'Closing tasks',
              text: 'Tables are broken down or reset, dirty linen is collected, stations are wiped and reorganized, remaining glassware and silverware are polished and stored, condiments are checked, menus are counted and POS closure is completed.',
            },
            {
              heading: 'Handover content',
              text: 'The handover should include open guest issues, stock problems, maintenance needs, 86’d items, team notes, guest comments and preparation needs for the next service. If it is not written, it is unlikely to be followed consistently.',
            },
          ],
        },
      ],
      conclusion:
        'A restaurant SOP is useful when it follows the real shift: opening, briefing, service sequence, order control, table maintenance, recovery and closing. The LuxOps F&B Starter Pack gives the daily checklists and scripts. The full F&B Playbook gives the complete department reference.',
      cta: { text: 'View the F&B Starter Pack', href: '/en/playbooks/fb-starter-pack' },
    },
    fr: {
      title: "SOP restaurant : ouverture, séquence de service et fermeture",
      description:
        "Guide SOP restaurant adapté du Playbook F&B LuxOps : checklist d’ouverture, séquence de service en 21 étapes, inspection de table, prise de commande, recovery et clôture.",
      date: '2026-03-29',
      readTime: '10 min de lecture',
      intro:
        "Ce guide SOP restaurant est adapté du playbook F&B LuxOps et du starter pack F&B. Il s’applique aussi bien à un restaurant d’établissement, un resort, un coffee shop, un point de vente indépendant ou une salle de petit-déjeuner. Le sujet reste le même : préparation d’ouverture, briefing, inspection de table, séquence de service, règles de recovery et passation de clôture. L’objectif n’est pas de rendre le service mécanique, mais de retirer le doute opérationnel pour que l’équipe puisse se concentrer sur le client.",
      sections: [
        {
          h2: 'Procédure d’ouverture : de T-90 à l’ouverture des portes',
          content:
            "La checklist d’ouverture du starter pack démarre 90 minutes avant le service. C’est important, car le restaurant se remet rarement complètement d’une mauvaise ouverture : une mise en place incomplète devient un service lent, un service lent devient du stress, et le stress devient visible pour le client.",
          h3Items: [
            {
              heading: 'T-90 : préparation individuelle et connaissance du jour',
              text: "L’uniforme, la présentation, l’hygiène et les outils sont contrôlés en premier. L’équipe vérifie ensuite les changements de carte, les suggestions, les articles indisponibles, les VIP, les réservations notables, les allergies et les demandes spéciales avant de passer à la mise en place physique.",
            },
            {
              heading: 'T-60 : salle, terrasse et stations',
              text: "Les tables sont dressées selon le standard, les chaises alignées, le sol sec, l’éclairage approprié, la musique réglée, la température confortable et aucune odeur parasite ne doit être perceptible. Les stations sont approvisionnées en linge, couverts, verrerie, matériel de service, condiments et stock de secours.",
            },
            {
              heading: 'T-40 et T-20 : briefing et inspection finale',
              text: "Le briefing couvre réservations, VIP, changements de carte, accords mets et vins et affectations de rangs. L’inspection finale vérifie chaque table, station, uniforme, ambiance et position de service avant l’ouverture.",
            },
          ],
        },
        {
          h2: 'La séquence restaurant en 21 étapes',
          content:
            "Le playbook F&B donne à l’équipe restaurant une séquence complète en 21 étapes. Ce n’est pas un script. C’est l’ordre opérationnel qui garde l’expérience fluide, de l’entrée du client jusqu’à l’au revoir.",
          h3Items: [
            {
              heading: 'Arrivée et premier contact',
              text: "Accueil dans les 10 secondes, accompagnement immédiat, installation avec aide à la chaise, cartes présentées dans les 30 secondes, serviettes dépliées pendant que les clients s’installent, puis eau et commande des boissons dans les 2 minutes.",
            },
            {
              heading: 'Boissons et prise de commande',
              text: "Les boissons sont servies dans les 5 minutes, les suggestions sont présentées avec les boissons, la commande des plats est prise quand les clients sont prêts, puis le pain ou l’amuse-bouche suit après l’envoi de la commande.",
            },
            {
              heading: 'Plats, suivi et clôture',
              text: "Les entrées et plats suivent des délais définis, la satisfaction est vérifiée 2 minutes après le plat principal, le débarrassage attend que tous les clients aient terminé, le dessert est proposé rapidement, l’addition est présentée au bon moment et le départ reste chaleureux, idéalement par le nom.",
            },
          ],
        },
        {
          h2: 'La prise de commande est un point de contrôle',
          content:
            "Le playbook est clair sur la prise de commande : le serveur écoute entièrement, pose les questions de clarification, signale les allergies, répète la commande et transmet correctement les informations à la cuisine. C’est là que beaucoup d’incidents sont évités avant d’exister.",
          h3Items: [
            {
              heading: 'Capture des allergies',
              text: "Les allergies ne sont pas une note informelle. Elles sont confirmées avec le client, signalées à la cuisine, visibles sur la commande et suivies jusqu’à la livraison. Si le client exprime une inquiétude, le sujet devient prioritaire au niveau manager.",
            },
            {
              heading: 'Recommandations précises',
              text: "L’upselling fonctionne quand il est contextuel. La fiche upselling du starter pack encourage des suggestions précises : vin avec un steak, jus frais au petit-déjeuner, café ou digestif avec dessert, pas une pression générique.",
            },
            {
              heading: 'Responsabilité du rythme',
              text: "Le serveur porte le rythme de la table : boissons, entrées, plats, débarrassage, dessert et addition. Si la cuisine prend du retard ou si une table doit être retenue, le client doit recevoir une information claire avant que la frustration devienne visible.",
            },
          ],
        },
        {
          h2: 'Inspection de table et mise en place',
          content:
            "Le chapitre mise en place présente la préparation comme une disponibilité physique, mentale et organisationnelle. Le starter pack transforme cette logique en checklist d’inspection de table, directement utilisable par l’équipe avant le service.",
          h3Items: [
            {
              heading: 'Standard physique de la table',
              text: "Le playbook donne des repères précis : assiette de présentation à 2,5 cm du bord, fourchette à 2,5 cm de l’assiette, verres au-dessus de la pointe du couteau et 60 cm minimum entre deux couverts.",
            },
            {
              heading: 'Stations prêtes',
              text: "Les stations sont approvisionnées selon le par stock : serviettes, couverts, verrerie, ramasse-miettes, limonadiers, pochettes addition et stylos. Les éléments les plus utilisés restent à portée de main, les éléments lourds en bas, et le propre reste séparé de l’utilisé.",
            },
            {
              heading: 'Discipline des tâches de service',
              text: "Les tâches d’ouverture couvrent le polissage de la verrerie et de l’argenterie, le dressage des tables et le réassort des stations. Pendant le service, l’équipe gère le pré-débarrassage et le réassort. La clôture remet le restaurant en état pour l’équipe suivante.",
            },
          ],
        },
        {
          h2: 'Clôture de service et passation',
          content:
            "Une bonne clôture protège le service suivant. Le starter pack F&B inclut une checklist de fermeture restaurant afin que la fin de shift ne soit pas gérée de mémoire.",
          h3Items: [
            {
              heading: 'Tâches de clôture',
              text: "Tables démontées ou remises en place, linge sale collecté, stations essuyées et réorganisées, verrerie et argenterie restantes polies et rangées, condiments contrôlés, cartes comptées et caisse clôturée.",
            },
            {
              heading: 'Contenu de passation',
              text: "La passation doit inclure les sujets client encore ouverts, les problèmes de stock, les besoins maintenance, les articles indisponibles, les notes d’équipe, les commentaires client et les préparations à prévoir pour le prochain service. Si ce n’est pas écrit, ce sera rarement suivi de façon régulière.",
            },
          ],
        },
      ],
      conclusion:
        "Une SOP restaurant utile suit le vrai déroulé d’un shift : ouverture, briefing, séquence de service, prise de commande, suivi de table, recovery et clôture. Le starter pack F&B donne les checklists et scripts du quotidien. Le playbook F&B complet apporte toute la référence du département.",
      cta: { text: 'Voir le starter pack F&B', href: '/fr/playbooks/fb-starter-pack' },
    },
  },
  {
    slug: 'hotel-spa-wellness-sops',
    en: {
      title: 'Hotel Spa & Wellness SOPs: Service Standards for Luxury Treatment Operations',
      description:
        'Standard operating procedures for hotel spa and wellness departments. Covers treatment preparation, guest consultation, therapist protocols, and facility management standards.',
      date: '2026-03-30',
      readTime: '7 min read',
      intro:
        'The spa is where a luxury hotel earns or loses its claim to well-being. A guest who books a treatment has a specific expectation: that the environment will be immaculate, the therapist prepared, and the experience uninterrupted. When any part of that breaks down, a room that is not ready, a rushed consultation, or a transition that lacks intention, the effect lingers longer than the treatment itself. Spa procedures are not about removing the human element from wellness. They are about creating the conditions under which a therapist can deliver their best work, consistently, to every guest.',
      sections: [
        {
          h2: 'Pre-Treatment Preparation',
          content:
            'Treatment quality begins before the guest arrives. A therapist who is preparing their room while the guest is waiting in reception is already behind. Pre-treatment preparation should be completed at least fifteen minutes before the scheduled appointment time, with everything in place and verified.',
          h3Items: [
            {
              heading: 'Treatment room setup',
              text: 'Linens fresh and properly dressed. Massage table height adjusted for the therapist. Oil warmers and hot stones at temperature. Ambient lighting and music set to the standard. Room temperature confirmed. Products for the specific treatment laid out and ready. Any customisation for the guest, including preferences from a previous visit or notes from the booking, reviewed before entry.',
            },
            {
              heading: 'Facility check',
              text: 'Wet areas: pools, steam rooms, saunas, checked and at correct temperature before the first guest of the day. Towels and robes at designated points. Relaxation lounge restocked with water, fruit, and wellness teas. Any maintenance issues logged immediately and front desk notified if a facility cannot be offered.',
            },
            {
              heading: 'Product and equipment check',
              text: 'All products verified as in date and correctly stored. Equipment: hot stone heaters, paraffin baths, electrical massage tools, checked for function. A faulty piece of equipment that is discovered during a treatment is a service failure that cannot be recovered in session.',
            },
          ],
        },
        {
          h2: 'Guest Consultation and Intake',
          content:
            'The consultation is the operational step most commonly rushed in busy spas. It is also the one that most directly affects both service quality and guest safety. A consultation that takes three minutes because the next guest is waiting is not a consultation. It is a liability.',
          h3Items: [
            {
              heading: 'Health intake',
              text: 'Every new guest completes a health intake form before their first treatment. Repeat guests should have their form reviewed and updated at each visit. The therapist reviews the form before the consultation, not during it. Contraindications such as pregnancy, recent surgery, cardiovascular conditions, or skin sensitivities must be identified and the treatment adapted or declined accordingly.',
            },
            {
              heading: 'Preference and pressure discussion',
              text: 'For massage treatments: confirm pressure preference, areas to focus on, areas to avoid. This is a brief, directed conversation, not a general enquiry. The therapist confirms what they heard before beginning. A guest who asked for light pressure and received medium has a legitimate complaint, regardless of how good the technique was.',
            },
            {
              heading: 'Setting expectations',
              text: 'Explain the sequence of the treatment, approximately how long each phase will take, and what the guest should do if something is not right. This removes ambiguity and gives the guest permission to communicate during the session without feeling like they are interrupting.',
            },
          ],
        },
        {
          h2: 'Treatment Delivery Standards',
          content:
            'Treatment delivery standards define what happens from the moment the therapist begins to the moment the guest is returned to the relaxation space. They cover technique, communication, and the physical management of the session.',
          h3Items: [
            {
              heading: 'Draping protocol',
              text: 'Proper draping at all times. Only the area being worked on is exposed. Transitions between positions are smooth and maintain coverage. This is a professional standard and a guest comfort standard. It should be non-negotiable and consistent across all therapists.',
            },
            {
              heading: 'During-session communication',
              text: 'The therapist checks in once within the first five minutes of treatment: pressure, temperature, comfort. Then the session is quiet unless the guest initiates. Unsolicited conversation during a relaxation treatment is a standard breach in most luxury contexts.',
            },
            {
              heading: 'Timing precision',
              text: 'A 60-minute treatment is 60 minutes of hands-on time. Set-up and consultation are not counted within that time. The guest who paid for an hour should receive an hour. Treatments that start late due to operational delays should still deliver the full duration. The therapist absorbs the operational failure, not the guest.',
            },
          ],
        },
        {
          h2: 'Post-Treatment and Guest Journey',
          content:
            'The quality of the post-treatment experience determines what the guest carries with them. A great treatment followed by a rushed transition back to reality, bright lights, a noisy corridor, a hurried robe exchange, loses much of what the treatment created. The post-treatment sequence should extend the experience, not end it.',
          h3Items: [
            {
              heading: 'Recovery time',
              text: 'After the treatment, the guest is given time to return to awareness before being assisted from the table. They are not asked questions or given instructions immediately. A brief, quiet moment before transition is standard in a luxury context.',
            },
            {
              heading: 'Post-treatment guidance',
              text: 'Hydration guidance, recommendations for the rest of the day, and any aftercare notes relevant to the treatment received. These should be brief, specific, and given while the guest is settling in the relaxation lounge, not as they are leaving.',
            },
            {
              heading: 'Feedback and next booking',
              text: 'Once the guest has had time to recover, a brief, natural enquiry about their experience. Not a survey. Not a request for a review. A genuine question that creates an opportunity to address anything that was not right and to note any preferences for their next visit.',
            },
          ],
        },
        {
          h2: 'Facility Maintenance and End-of-Day Close',
          content:
            'The spa facility must be maintained to the same standard throughout the day as at opening. A wet area that deteriorates over the course of the day, or a relaxation lounge that is not restocked between guests, creates an inconsistent experience that reflects on the property\'s overall standards.',
          h3Items: [
            {
              heading: 'Between-treatment reset',
              text: 'Treatment rooms must be fully reset between guests: fresh linens, waste disposed of, surface areas sanitised, products restocked, temperature and ambient settings reset. Minimum reset time is ten minutes. Scheduling must account for this. Back-to-back bookings without reset time is an operational error, not an efficiency gain.',
            },
            {
              heading: 'End-of-day close',
              text: 'All equipment switched off and stored correctly. Wet areas drained and cleaned. Product inventory checked against par levels. Any items for laundry bagged and logged. Treatment rooms locked. A brief end-of-day report noting any maintenance issues, guest feedback, and items for the opening team.',
            },
          ],
        },
      ],
      conclusion:
        'A spa procedure does not make every treatment the same. It makes every treatment possible. The structure behind a wellness experience: the prepared room, the properly conducted consultation, the precise timing. That is what gives the therapist the conditions to do their best work. That work is human and individual. The procedures that frame it are not.',
      cta: { text: 'View the Spa & Wellness Playbook', href: '/en/playbooks' },
    },
    fr: {
      title: "Procédures de service au spa : comment structurer les soins dans un établissement haut de gamme",
      description:
        "Les procédures qui permettent à une équipe spa de délivrer chaque soin avec le même niveau d'exigence. Préparation des cabines, consultation, réalisation du soin et clôture de journée.",
      date: '2026-03-30',
      readTime: '7 min de lecture',
      intro:
        "Le spa est l'espace où un établissement haut de gamme tient ou perd sa promesse de bien-être. Un client qui réserve un soin a une attente précise : un environnement impeccable, un thérapeute préparé, une expérience sans interruption. Quand l'une de ces dimensions est mal gérée, cabine non prête, consultation bâclée ou transition sans intention, l'effet dure plus longtemps que le soin lui-même. Les procédures spa ne visent pas à retirer l'élément humain du bien-être. Elles créent les conditions dans lesquelles un thérapeute peut donner le meilleur de lui-même, à chaque client, sans exception.",
      sections: [
        {
          h2: 'Préparation avant le soin',
          content:
            "La qualité du soin commence avant l'arrivée du client. Un thérapeute qui prépare sa cabine pendant que le client attend en réception est déjà en retard. La préparation avant le soin doit être terminée au moins quinze minutes avant l'heure du rendez-vous, avec tout en place et vérifié.",
          h3Items: [
            {
              heading: 'Mise en place de la cabine',
              text: "Linge frais et correctement dressé. Hauteur de la table de massage ajustée pour le thérapeute. Chauffe-huiles et pierres chaudes à température. Éclairage ambiant et musique réglés selon le standard. Température de la cabine vérifiée. Produits pour le soin en cours disposés et prêts. Toute personnalisation, préférences d'une visite précédente ou notes de réservation, relue avant d'entrer en cabine.",
            },
            {
              heading: 'Contrôle des espaces',
              text: "Espaces aquatiques (piscines, hammams, saunas) vérifiés et à bonne température avant le premier client de la journée. Serviettes et peignoirs aux points définis. Salon de relaxation réapprovisionné en eau, fruits et tisanes. Tout problème technique consigné immédiatement et la réception informée si un espace ne peut être proposé.",
            },
            {
              heading: 'Contrôle produits et équipements',
              text: "Tous les produits vérifiés, dans leur date et correctement stockés. Équipements, chauffe-pierres, bains de paraffine, appareils de massage, contrôlés en fonctionnement. Un équipement défectueux découvert pendant un soin est un échec de service qu'on ne peut pas rattraper en séance.",
            },
          ],
        },
        {
          h2: 'Consultation et accueil du client',
          content:
            "La consultation est l'étape la plus souvent bâclée dans les spas chargés. C'est aussi celle qui conditionne le plus directement la qualité du soin et la sécurité du client. Une consultation de trois minutes parce que le client suivant attend n'est pas une consultation. C'est une prise de risque.",
          h3Items: [
            {
              heading: 'Fiche santé',
              text: "Chaque nouveau client remplit une fiche santé avant son premier soin. Pour les habitués, la fiche est revue et mise à jour à chaque visite. Le thérapeute la lit avant la consultation, pas pendant. Les contre-indications, grossesse, chirurgie récente, pathologies cardiovasculaires ou sensibilités cutanées, doivent être identifiées et le soin adapté ou refusé en conséquence.",
            },
            {
              heading: 'Discussion sur les préférences et la pression',
              text: "Pour les massages : confirmer la pression souhaitée, les zones à travailler, les zones à éviter. C'est une conversation brève et ciblée, pas une enquête générale. Le thérapeute reformule ce qu'il a entendu avant de commencer. Un client qui a demandé une pression légère et reçu une pression moyenne a une réclamation légitime, quelle que soit la qualité de la technique.",
            },
            {
              heading: 'Définir les attentes',
              text: "Expliquer la séquence du soin, la durée approximative de chaque phase, et ce que le client doit faire si quelque chose ne va pas. Cela supprime l'ambiguité et donne au client la permission de communiquer pendant la séance sans avoir l'impression d'interrompre.",
            },
          ],
        },
        {
          h2: 'Standards de réalisation du soin',
          content:
            "Les standards de réalisation définissent ce qui se passe du moment où le thérapeute commence au moment où le client retourne dans l'espace de relaxation. Ils couvrent la technique, la communication, et la gestion physique de la séance.",
          h3Items: [
            {
              heading: 'Protocole de drapé',
              text: "Drapé correct à tout moment. Seule la zone travaillée est exposée. Les transitions entre positions sont fluides et maintiennent la couverture. C'est un standard professionnel autant qu'un standard de confort. Il doit être non négociable et identique chez tous les thérapeutes.",
            },
            {
              heading: 'Communication pendant la séance',
              text: "Dans les cinq premières minutes, le thérapeute fait un point rapide : pression, température, confort. Ensuite la séance est silencieuse, sauf si le client prend l'initiative. Une conversation non sollicitée pendant un soin de relaxation est une rupture de standard dans tout contexte haut de gamme.",
            },
            {
              heading: 'Précision du timing',
              text: "Un soin de 60 minutes, c'est 60 minutes de soin effectif sur table. La mise en place et la consultation ne rentrent pas dans ce compte. Le client qui a réservé une heure doit la recevoir. Si le soin démarre en retard pour une raison opérationnelle, la durée complète est quand même assurée. Le thérapeute absorbe le retard, pas le client.",
            },
          ],
        },
        {
          h2: 'Après le soin et parcours client',
          content:
            "Ce que le client emporte avec lui se joue souvent dans les minutes qui suivent le soin. Un excellent massage suivi d'une transition brusque vers le quotidien, lumières vives, couloir bruyant, échange de peignoir précipité, efface une grande partie de ce qui vient d'être créé. La séquence après le soin doit prolonger l'expérience, pas l'interrompre.",
          h3Items: [
            {
              heading: 'Temps de récupération',
              text: "Après le soin, le client dispose du temps nécessaire pour reprendre conscience avant d'être aidé à descendre de la table. On ne lui pose pas de questions ni ne lui donne d'instructions immédiatement. Un bref moment de silence avant la transition est le standard dans un contexte haut de gamme.",
            },
            {
              heading: 'Conseils post-soin',
              text: "Conseils d'hydratation, recommandations pour le reste de la journée, notes de suivi spécifiques au soin. Ces conseils doivent être brefs et donnés pendant que le client s'installe au salon de relaxation, pas au moment où il part.",
            },
            {
              heading: 'Retour et prochaine réservation',
              text: "Une fois que le client a eu le temps de récupérer, une question simple et sincère sur son expérience. Pas un questionnaire. Pas une demande d'avis. Un échange qui permet de corriger ce qui n'allait pas et de noter les préférences pour la prochaine visite.",
            },
          ],
        },
        {
          h2: "Maintenance des espaces et clôture de journée",
          content:
            "Les espaces du spa doivent être maintenus au même niveau qu'à l'ouverture tout au long de la journée. Un espace aquatique qui se dégrade au fil de la journée, ou un salon de relaxation non réapprovisionné entre les clients, crée une expérience incohérente qui reflète sur les standards globaux de l'établissement.",
          h3Items: [
            {
              heading: 'Remise en place entre les soins',
              text: "Les cabines doivent être entièrement remises en place entre chaque client : linge frais, déchets évacués, surfaces désinfectées, produits réapprovisionnés, ambiance réinitialisée. Le temps minimum de remise en place est de dix minutes. La planification doit en tenir compte. Des rendez-vous enchaînés sans battement entre les deux est une erreur de planning, pas un gain de productivité.",
            },
            {
              heading: 'Clôture de journée',
              text: "Tous les équipements éteints et rangés correctement. Espaces aquatiques vidangés et nettoyés. Inventaire produits vérifié par rapport aux niveaux de par stock. Articles pour linge mis en sac et consignés. Cabines fermées à clé. Un bref rapport de fin de journée notant les problèmes techniques, les retours clients, et les éléments pour l'équipe d'ouverture.",
            },
          ],
        },
      ],
      conclusion:
        "Une procédure spa ne rend pas tous les soins identiques. Elle rend chaque soin possible. La cabine préparée, la consultation bien menée, le timing respecté : c'est ce qui donne au thérapeute les conditions pour faire son meilleur travail. Ce travail est humain et singulier. Ce qui l'encadre ne l'est pas.",
      cta: { text: 'Voir le Playbook Spa & Wellness', href: '/fr/playbooks' },
    },
  },
  {
    slug: 'hotel-room-service-sops',
    en: {
      title: 'Room Service SOP: Order Taking, Tray Setup and Delivery Standards',
      description:
        'Room service SOP adapted from the LuxOps F&B Playbook: order taking, delivery timing, tray and trolley setup, in-room protocol, delay recovery and tray collection.',
      date: '2026-03-31',
      readTime: '9 min read',
      intro:
        'This room service SOP is adapted from the LuxOps F&B Playbook and the F&B Starter Pack. The playbook defines in-room dining as the restaurant standard delivered into the guest’s private space. There is no dining room atmosphere, no floor manager passing by and no second interaction to correct the impression. The order, timing, tray, delivery and collection must therefore be controlled as one flow.',
      sections: [
        {
          h2: 'Room service is not reduced restaurant service',
          content:
            'Chapter 6 of the playbook frames room service as a complete private dining experience. The setting changes from the restaurant to the guest room, but the standard should not drop. The service becomes more concentrated because one interaction has to carry the whole experience.',
          h3Items: [
            {
              heading: 'What every delivery must include',
              text: 'Hot food hot, cold food cold, complete place settings, all condiments, beverages at the correct temperature, clean pressed linens, a check presenter with pen and enough product knowledge to answer questions.',
            },
            {
              heading: 'Why guests choose room service',
              text: 'The playbook lists privacy, convenience, comfort, work, celebration, illness, late or early hours and children as common reasons. Each reason changes the tone of service. Some guests want full setup, others want minimal interaction.',
            },
            {
              heading: 'Restaurant quality, private context',
              text: 'Room service is not an exception to restaurant standards. It is restaurant quality translated into a tray or trolley that must travel, arrive intact and be served graciously.',
            },
          ],
        },
        {
          h2: 'Order taking is the first quality control',
          content:
            'The room service call sets the guest’s expectation for accuracy, timing and personalization. The starter pack turns this into a checklist because small omissions at order taking become visible errors at the door.',
          h3Items: [
            {
              heading: 'Answering standard',
              text: 'The phone is answered within 3 rings: "Good morning/afternoon/evening, In-Room Dining, this is [Name]. How may I assist you?" The tone should already feel calm, available and professional.',
            },
            {
              heading: 'Information to capture',
              text: 'The order taker confirms room number, guest name, number of guests, complete food and beverage order, cooking temperatures, allergies or dietary requirements, special requests and preferred timing if the order is not immediate.',
            },
            {
              heading: 'Order confirmation',
              text: 'The complete order is repeated back with all details and the expected delivery time. This is not a courtesy line. It is the final control before the kitchen starts production.',
            },
          ],
        },
        {
          h2: 'Timing standards and delay protocol',
          content:
            'The playbook gives clear target times because room service timing is promised directly to the guest. A missed promise is not just a kitchen delay. It is a trust issue.',
          h3Items: [
            {
              heading: 'Reference timing',
              text: 'Continental breakfast: 20 to 25 minutes. Full breakfast: 25 to 30 minutes. Lunch: 30 to 35 minutes. Dinner: 35 to 45 minutes. Beverages only: 15 to 20 minutes. VIP orders receive priority handling.',
            },
            {
              heading: 'Kitchen-to-door control',
              text: 'Before departure, items are inspected, tray or trolley setup is completed in 2 to 3 minutes, hot items are temperature checked and delivery starts immediately. A perfect pass can still fail if the handover to delivery is slow.',
            },
            {
              heading: 'Delay response',
              text: 'A 5 to 10 minute delay triggers a guest call with apology and updated ETA. A delay of 10 minutes or more triggers manager notification, a guest call and possible compensation. The guest should never discover the delay only after the promised time has passed.',
            },
          ],
        },
        {
          h2: 'Tray and trolley setup standards',
          content:
            'The tray or trolley is the physical expression of the room service standard. The guest sees the setup before tasting the food, so presentation and completeness matter.',
          h3Items: [
            {
              heading: 'When to use tray or trolley',
              text: 'The playbook uses a tray for 1 to 2 guests, simple orders and beverages. It uses a trolley for 2 or more guests, multiple courses and hot items. A trolley with hotbox is used for full meals or orders that need temperature hold.',
            },
            {
              heading: 'Tray setup checklist',
              text: 'Tray cloth clean and pressed, napkin placed correctly, correct silverware, polished glassware, cloches for hot items, appropriate condiments, beverages with correct glassware, working pen, check presenter and balanced tray.',
            },
            {
              heading: 'Trolley setup checklist',
              text: 'Trolley clean, wheels functioning, brake working, surface sanitized, tablecloth centered, settings aligned for each guest and all hot items protected until in-room setup.',
            },
          ],
        },
        {
          h2: 'In-room delivery protocol',
          content:
            'Delivery needs to be efficient, discreet and complete. The team member should arrive composed, not rushed, and should never enter without permission.',
          h3Items: [
            {
              heading: 'Approaching the room',
              text: 'Walk at a professional pace, keep the tray or trolley quiet and controlled, knock and announce room service, wait for response and never enter without permission.',
            },
            {
              heading: 'Inside the room',
              text: 'Greet by name if known, ask where the guest would like the setup, present each item clearly, offer to pour beverages and keep the interaction efficient unless the guest invites more conversation.',
            },
            {
              heading: 'Exit and pickup',
              text: 'Confirm satisfaction, ask if anything else is needed, explain tray or trolley pickup and exit quietly. Pickup is planned through guest call, hallway placement or scheduled collection rounds.',
            },
          ],
        },
      ],
      conclusion:
        'Room service works when order capture, timing, setup, delivery and pickup are managed as one controlled flow. The F&B Starter Pack includes a practical room service checklist for daily use. The full F&B Playbook gives the complete procedure, timing standards, VIP logic, troubleshooting and quality control.',
      cta: { text: 'View the F&B Starter Pack', href: '/en/playbooks/fb-starter-pack' },
    },
    fr: {
      title: "SOP room service : prise de commande, plateau et livraison",
      description:
        "SOP room service adaptée du Playbook F&B LuxOps : prise de commande, timing, dressage du plateau et du chariot, protocole en chambre, retard et débarrassage.",
      date: '2026-03-31',
      readTime: '9 min de lecture',
      intro:
        "Cette SOP room service est adaptée du playbook F&B LuxOps et du starter pack F&B. Le playbook définit le room service comme le standard restaurant porté dans l’espace privé du client. Il n’y a pas d’ambiance de salle, pas de manager qui passe pour repérer un retard et pas de deuxième interaction pour corriger l’impression. La commande, le timing, le plateau, la livraison et le débarrassage doivent donc être pensés comme un seul flux contrôlé.",
      sections: [
        {
          h2: 'Le room service n’est pas un service restaurant diminué',
          content:
            "Le chapitre 6 du playbook présente le room service comme une expérience gastronomique privée complète. Le cadre change, du restaurant à la chambre, mais le standard ne doit pas baisser. Le service devient plus concentré, car une seule interaction porte toute l’expérience.",
          h3Items: [
            {
              heading: 'Ce que chaque livraison doit inclure',
              text: "Des plats chauds réellement chauds, des plats froids bien froids, des couverts complets, les condiments, les boissons à la bonne température, du linge propre et repassé, une pochette addition avec stylo et assez de connaissance produit pour répondre aux questions.",
            },
            {
              heading: 'Pourquoi les clients commandent en chambre',
              text: "Le playbook liste confidentialité, confort, travail, célébration, maladie, horaires tardifs ou matinaux et enfants comme raisons fréquentes. Chaque raison change le ton de service. Certains clients veulent une installation complète, d’autres une interaction minimale.",
            },
            {
              heading: 'Qualité restaurant, contexte privé',
              text: "Le room service n’est pas une exception aux standards restaurant. C’est la qualité restaurant traduite dans un plateau ou un chariot qui doit voyager, arriver intact et être servi avec élégance.",
            },
          ],
        },
        {
          h2: 'La prise de commande est le premier contrôle qualité',
          content:
            "L’appel room service définit les attentes du client en matière d’exactitude, de délai et de personnalisation. Le starter pack en fait une checklist, car les petites omissions à la prise de commande deviennent des erreurs visibles à la porte.",
          h3Items: [
            {
              heading: 'Standard de réponse',
              text: 'Le téléphone est décroché avant la troisième sonnerie : « Bonjour / Bonsoir, room service, [Nom] à l’appareil. Comment puis-je vous aider ? » Le ton doit déjà être calme, disponible et professionnel.',
            },
            {
              heading: 'Informations à capter',
              text: "Le collaborateur confirme le numéro de chambre, le nom du client, le nombre de couverts, la commande complète, les températures de cuisson, les allergies ou régimes, les demandes spéciales et le timing souhaité si la commande n’est pas immédiate.",
            },
            {
              heading: 'Confirmation de commande',
              text: "La commande complète est relue avec tous les détails et le délai annoncé. Ce n’est pas une formule de politesse. C’est le dernier contrôle avant que la cuisine démarre la production.",
            },
          ],
        },
        {
          h2: 'Standards de timing et protocole de retard',
          content:
            "Le playbook donne des délais cibles clairs, car le timing room service est promis directement au client. Une promesse manquée n’est pas seulement un retard cuisine. C’est un sujet de confiance.",
          h3Items: [
            {
              heading: 'Délais de référence',
              text: "Petit-déjeuner continental : 20 à 25 minutes. Petit-déjeuner complet : 25 à 30 minutes. Déjeuner : 30 à 35 minutes. Dîner : 35 à 45 minutes. Boissons seules : 15 à 20 minutes. Les commandes VIP sont traitées en priorité.",
            },
            {
              heading: 'Contrôle cuisine à porte',
              text: "Avant le départ, tous les articles sont inspectés, la mise en place du plateau ou du chariot est complétée en 2 à 3 minutes, les plats chauds sont contrôlés en température et la livraison démarre immédiatement. Un plat parfait au passe peut échouer si la livraison est lente.",
            },
            {
              heading: 'Réponse en cas de retard',
              text: "Un retard de 5 à 10 minutes déclenche un appel client avec excuses et nouveau délai. À partir de 10 minutes, le responsable est informé, le client est appelé et une compensation peut être envisagée. Le client ne doit jamais découvrir le retard après le délai annoncé.",
            },
          ],
        },
        {
          h2: 'Standards de dressage plateau et chariot',
          content:
            "Le plateau ou le chariot est l’expression physique du standard room service. Le client voit le dressage avant de goûter le plat. La présentation, l’équilibre et la complétude comptent donc autant que le contenu de la commande.",
          h3Items: [
            {
              heading: 'Quand utiliser plateau ou chariot',
              text: "Le playbook recommande le plateau pour 1 à 2 couverts, les commandes simples et les boissons. Le chariot est privilégié à partir de 2 couverts, pour plusieurs plats ou pour les préparations chaudes. Le chariot avec boîte chauffante sert aux repas complets ou aux commandes nécessitant un maintien en température.",
            },
            {
              heading: 'Checklist plateau',
              text: "Nappe de plateau propre et repassée, serviette bien placée, couverts adaptés, verrerie polie, cloches pour les plats chauds, condiments appropriés, boisson avec verrerie correcte, stylo fonctionnel, pochette addition et plateau stable.",
            },
            {
              heading: 'Checklist chariot',
              text: "Chariot propre, roues fonctionnelles, frein opérationnel, surface désinfectée, nappe centrée, couverts alignés pour chaque client et toutes les préparations chaudes protégées jusqu’à l’installation en chambre.",
            },
          ],
        },
        {
          h2: 'Protocole de livraison en chambre',
          content:
            "La livraison doit être efficace, discrète et complète. Le collaborateur arrive posé, sans paraître précipité, et n’entre jamais sans autorisation.",
          h3Items: [
            {
              heading: 'Approche de la chambre',
              text: "Marcher à une allure professionnelle, garder le plateau ou chariot maîtrisé et silencieux, frapper, annoncer room service, attendre la réponse et ne jamais entrer sans permission.",
            },
            {
              heading: 'Dans la chambre',
              text: "Saluer par le nom si connu, demander où le client souhaite l’installation, présenter chaque élément clairement, proposer de servir les boissons et garder l’interaction efficace, sauf si le client invite à échanger davantage.",
            },
            {
              heading: 'Sortie et débarrassage',
              text: "Confirmer la satisfaction, demander si le client a besoin d’autre chose, expliquer le ramassage du plateau ou chariot et sortir discrètement. La récupération est organisée par appel client, dépôt dans le couloir ou rondes planifiées.",
            },
          ],
        },
      ],
      conclusion:
        "Le room service fonctionne lorsque la prise de commande, le timing, le dressage, la livraison et le débarrassage sont gérés comme un seul flux contrôlé. Le starter pack F&B inclut une checklist room service pratique pour le quotidien. Le playbook F&B complet apporte la procédure complète, les standards de timing, la logique VIP, la gestion des situations sensibles et le contrôle qualité.",
      cta: { text: 'Voir le starter pack F&B', href: '/fr/playbooks/fb-starter-pack' },
    },
  },
  {
    slug: 'hotel-standard-operating-procedures',
    en: {
      title: 'Hotel Standard Operating Procedures: SOP Playbook Guide for Hotel Managers',
      description:
        'A practical hotel SOP guide covering front desk, housekeeping, room inspection, handover, escalation, SOP templates and playbook-based operating standards.',
      date: '2026-04-28',
      readTime: '9 min read',
      intro:
        'Most hotels have some version of standard operating procedures. Fewer have a real SOP playbook. The difference is operational. A SOP folder stores documents. A hotel operations playbook tells the team what triggers the task, who owns it, what sequence to follow, what standard to hit, when to escalate and what evidence to leave behind. This guide explains what hotel SOPs should cover, using concrete examples from housekeeping, room inspection and front desk procedures.',
      sections: [
        {
          h2: 'What Hotel Standard Operating Procedures Actually Are',
          content:
            'A hotel SOP is a written operating sequence for one task, owned by one role, performed to one standard and verified by one quality control point. That definition matters. "Keep rooms clean" is not an SOP. "Clean a standard departure room in 45-60 minutes, follow the 7-phase sequence, mark it Clean, then wait for supervisor inspection before release" is an SOP.',
          h3Items: [
            {
              heading: 'SOPs vs. policies vs. training documents',
              text: 'A policy sets a rule. "All guest complaints must be resolved within two hours." An SOP describes how. "Acknowledge the complaint, apologise, offer a resolution, confirm satisfaction, log in the PMS under the guest record." A training document explains the reasoning behind the rule. SOPs sit in the middle: practical, procedural, repeatable. All three serve different purposes and none replaces the other.',
            },
            {
              heading: 'What makes an SOP actually usable',
              text: 'An SOP that staff follow has four characteristics. It is short enough to read in under two minutes. It uses the vocabulary staff actually speak. It was written by or reviewed with the people doing the job. And it lives somewhere accessible during the shift, not in a shared drive folder that requires three clicks and a login.',
            },
          ],
        },
        {
          h2: 'Why Most Hotel SOPs Fail in Practice',
          content:
            'The most common failure is not the content of the SOP. It is the delivery and maintenance. SOPs written during a pre-opening phase and never updated are a liability, not an asset. A procedure that describes how things used to work, before the PMS changed or the department was restructured, creates confusion rather than consistency.',
          h3Items: [
            {
              heading: 'Written by management, ignored by operations',
              text: 'SOPs drafted by a general manager or HR director without input from the team rarely get used. The language is formal, the sequence does not match the physical layout of the workspace, and the steps describe an ideal that does not account for what happens when two rooms finish at the same time. Effective SOPs are written collaboratively: management sets the standard, operations confirms the sequence.',
            },
            {
              heading: 'No version control or review schedule',
              text: 'Every SOP should carry a version date and a review date. When the check-in procedure changes because of a new PMS interface, the SOP needs to reflect that before the next training cycle. A quarterly review schedule for high-frequency procedures and an annual review for lower-frequency ones is a practical baseline for most properties.',
            },
            {
              heading: 'No accountability loop',
              text: 'An SOP without an attached inspection or audit process has no mechanism for enforcement. The quality check, whether a supervisor sign-off, a mystery audit or a peer review, is what converts a written procedure into an operational standard. Without it, following the SOP is optional.',
            },
          ],
        },
        {
          h2: 'How to Structure a Hotel SOP',
          content:
            'Format matters as much as content. A well-structured SOP can be read quickly, used during a shift and updated without rewriting the whole library. The LuxOps format uses the same operating fields across departments so front desk, housekeeping and managers read procedures in the same way.',
          h3Items: [
            {
              heading: 'Trigger and owner',
              text: 'Open with the event that starts the procedure and the role that owns it. Examples: guest approaches for check-in, departure room appears on the assignment sheet, DND remains active at 2:00 PM, guest disputes a charge at check-out.',
            },
            {
              heading: 'Required sequence',
              text: 'Write the task in the order it physically happens. A front desk SOP might move from welcome to ID verification, registration, payment, key issue and PMS update. A housekeeping SOP might move from initial assessment to bathroom, bedroom, bed, closet, minibar and final presentation.',
            },
            {
              heading: 'Quality standard',
              text: 'Define what "done correctly" means. Use measurable standards wherever possible: check-in greeting within 30 seconds, telephone answered within three rings, no hair anywhere in the bathroom, departure room inspection pass threshold 90/100.',
            },
            {
              heading: 'Exception, escalation and handover',
              text: 'Every procedure needs an exception path. What if the card is declined, the room is not ready, the guest item is found, the DND sign remains, or the guest complains twice? Close the SOP with the handover evidence: PMS note, inspection score, defect log, shift log or manager sign-off.',
            },
          ],
        },
        {
          h2: 'Core SOP Categories by Department',
          content:
            'Hotel operations divide into four primary departments, each with distinct SOP requirements. The procedures that drive the most guest-facing risk, front office, housekeeping, food and beverage, and spa, are where documented standards have the clearest ROI.',
          h3Items: [
            {
              heading: 'Front desk (front office)',
              text: 'Priority SOPs: pre-arrival review, check-in sequence, room not ready, check-out, billing dispute, late check-out, complaint resolution, VIP arrival, telephone standard, wake-up call and shift handover. Use both terms in your library: front office for the department, front desk for the guest-facing procedures people search for.',
            },
            {
              heading: 'Housekeeping',
              text: 'Priority SOPs: trolley setup, departure room cleaning, stayover service, suite cleaning, DND protocol, Lost & Found, supervisor room inspection, defect logging, turndown and deep cleaning. The LuxOps HSK model separates Clean from Inspected and uses 100% departure inspection before release.',
            },
            {
              heading: 'Food and beverage',
              text: 'Priority SOPs: table setup and mise en place, sequence of service, beverage service standards, allergy and dietary restriction handling, end-of-service closure and room service delivery procedure. F&B SOPs need to account for both the full-service standard and the exception: what happens when the kitchen is behind, when a guest has an undisclosed allergy, when a table runs over its reservation window.',
            },
            {
              heading: 'Spa and wellness',
              text: 'Priority SOPs: treatment room preparation, guest consultation and intake, contraindication screening, treatment protocol by modality, retail recommendation sequence and post-treatment follow-up. Spa SOPs carry a safety dimension that other departments do not. A guest with a health contraindication receiving a treatment that should not have been performed is an operational and legal failure, not just a service failure.',
            },
          ],
        },
        {
          h2: 'Implementing Your SOP Library',
          content:
            'Writing SOPs is the easy part. Getting a team to use them, especially an existing team with established habits, requires a change management approach, not just a file upload to a shared drive.',
          h3Items: [
            {
              heading: 'Start with the highest-risk procedures',
              text: 'Do not try to document everything at once. Identify the five procedures in each department that, if done inconsistently, create the most guest complaints, the most rework or the highest operational risk. Write those first. An SOP library of fifty well-used documents is more valuable than two hundred that no one opens.',
            },
            {
              heading: 'Train to the SOP, not alongside it',
              text: 'When a new team member is onboarded, the SOP should be the primary training document, not a supplement. Walk through the procedure step by step. Have them perform it once with supervision, once independently. Sign off only when the output matches the standard. This makes the SOP the baseline, not an afterthought.',
            },
            {
              heading: 'Review during briefings, not just during onboarding',
              text: 'A short SOP review during a pre-shift briefing, one procedure, three minutes, keeps the standard visible. Over a quarter, you can cycle through the priority procedures for each department. Teams that revisit SOPs regularly treat them as live documents. Teams that see them only during training treat them as historical.',
            },
          ],
        },
        {
          h2: 'What Good Hotel SOPs Enable',
          content:
            'The operational benefit of a working SOP library is consistency at scale: the same room, the same check-in, the same plate presentation whether it is Tuesday morning with a full team or Saturday night with a mix of seasonal staff. The less visible benefit is that documented procedures make everything else faster. Training new staff is faster. Auditing quality is faster. Identifying the source of a recurring complaint is faster. The SOP is the foundation that everything operational is built on.',
          h3Items: [
            {
              heading: 'Scalability for multi-property operations',
              text: 'For groups managing more than one property, SOPs become the mechanism for brand consistency. A guest who stays at your property in Miami and your property in San Francisco should recognise the same service standard. That only happens if the procedures are documented, shared and actively enforced across both locations.',
            },
            {
              heading: 'Reduced reliance on institutional knowledge',
              text: 'In most hotels, the most experienced team members carry the operating knowledge in their heads. When they leave, the knowledge leaves with them. A mature SOP library externalises that knowledge. The departure of a long-tenured supervisor does not create a gap in quality if the procedures they perfected over years are written down and trained.',
            },
          ],
        },
      ],
      conclusion:
        'A hotel standard operating procedure is only as useful as its adoption. Writing the document is the start. The work is building a culture where procedures are the default, where staff know where to find them, where managers enforce them during inspections and briefings, and where the library is kept current as the property evolves. That is a management discipline, not a documentation project.',
      cta: { text: 'View Our SOP Playbooks', href: '/en/playbooks' },
      faqs: [
        {
          question: 'How many SOPs does a hotel typically need?',
          answer: 'A mid-size hotel with four to five departments typically maintains between 40 and 80 active SOPs across front desk, housekeeping, F&B and spa. The number matters less than coverage of high-frequency and high-risk procedures. Start with 8 to 10 per department and expand from there.',
        },
        {
          question: 'How often should hotel SOPs be reviewed?',
          answer: 'High-frequency procedures such as check-in, check-out and room cleaning should be reviewed at minimum annually, or whenever the underlying system or standard changes. Lower-frequency procedures can be reviewed every one to two years. Every SOP should carry a review date.',
        },
        {
          question: 'What is the difference between a hotel SOP and a brand standard?',
          answer: 'A brand standard defines what the output should look like: the amenity placement, the greeting script, the turn-down presentation. An SOP defines how to achieve it: the sequence, the timing, the materials used. Brand standards set the benchmark. SOPs are the instruction set for hitting it.',
        },
        {
          question: 'Should hotel SOPs be the same for all properties in a group?',
          answer: 'Core procedures should be consistent across properties in the same group to maintain brand standards. Execution details can be adapted to local context, property size and facility type. A 50-room boutique and a 300-room full-service hotel will have different sequences for the same procedure, but the quality standard should be identical.',
        },
      ],
    },
    fr: {
      title: 'SOP et procédures opérationnelles : construire un référentiel vraiment utilisable',
      description:
        'Ce que doivent couvrir les SOPs, comment les rédiger pour que les équipes les appliquent, et ce qui distingue une bibliothèque utile d’un document que personne ne lit.',
      date: '2026-04-28',
      readTime: '9 min de lecture',
      intro:
        'La plupart des établissements disposent d’une version de procédures opérationnelles standard. Beaucoup de ces documents sont obsolètes, stockés dans un endroit introuvable ou rédigés d’une manière qui ne reflète pas le travail réel. Une SOP efficace n’est pas un document de conformité. C’est à la fois un outil de formation, un référentiel qualité et un accélérateur d’intégration. Ce guide couvre ce que les SOPs doivent contenir, comment les rédiger pour qu’elles soient utilisées et comment les maintenir à jour.',
      sections: [
        {
          h2: 'Ce que sont réellement les procédures opérationnelles',
          content:
            'Une procédure opérationnelle standard est une description écrite de la façon dont une tâche spécifique doit être réalisée à chaque fois, par n\'importe quel membre qualifié de l\'équipe, pour le même résultat. Cette définition est importante car elle fixe le niveau d\'exigence. Une SOP n\'est pas une déclaration de politique générale. Ce n\'est pas un script de vidéo de formation. C\'est une séquence étape par étape qu\'un collaborateur peut suivre sans demander à son superviseur et aboutir au résultat correct.',
          h3Items: [
            {
              heading: 'SOP vs. politique vs. documents de formation',
              text: 'Une politique fixe une règle. "Toutes les réclamations clients doivent être résolues dans les deux heures." Une SOP décrit comment. "Reconnaître la réclamation, présenter les excuses, proposer une solution, confirmer la satisfaction, noter dans le PMS sous la fiche client." Un document de formation explique le raisonnement derrière la règle. Les SOP se situent au milieu : pratiques, procédurales, reproductibles.',
            },
            {
              heading: 'Ce qui rend une SOP vraiment utilisable',
              text: 'Une SOP que les équipes suivent présente quatre caractéristiques. Elle est suffisamment courte pour être lue en moins de deux minutes. Elle utilise le vocabulaire du terrain. Elle a été rédigée par ou relue avec les personnes qui font le travail. Et elle se trouve quelque part d’accessible pendant le service, pas dans un dossier partagé nécessitant trois clics et une connexion.',
            },
          ],
        },
        {
          h2: 'Pourquoi la plupart des SOPs échouent en pratique',
          content:
            'L\'échec le plus courant n\'est pas le contenu de la SOP. C\'est la diffusion et la maintenance. Les SOP rédigées lors d\'une phase de pré-ouverture et jamais mises à jour sont un frein, pas un atout. Une procédure qui décrit comment les choses fonctionnaient avant le changement de PMS ou la restructuration du département crée de la confusion plutôt que de la cohérence.',
          h3Items: [
            {
              heading: 'Rédigées par le management, ignorées par l\'opérationnel',
              text: 'Les SOP rédigées par un directeur général ou un responsable RH sans apport de l\'équipe sont rarement utilisées. Le langage est formel, la séquence ne correspond pas à l\'organisation physique de l\'espace de travail et les étapes décrivent un idéal qui ne tient pas compte de ce qui se passe quand deux chambres se terminent en même temps. Les SOP efficaces sont co-construites : le management fixe le standard, l\'opérationnel valide la séquence.',
            },
            {
              heading: 'Pas de contrôle de version ni de calendrier de révision',
              text: 'Toute SOP doit porter une date de version et une date de révision. Quand la procédure d\'accueil change en raison d\'une nouvelle interface PMS, la SOP doit le refléter avant le prochain cycle de formation. Un calendrier de révision trimestriel pour les procédures haute fréquence et annuel pour les procédures moins fréquentes est une base pratique pour la plupart des établissements.',
            },
            {
              heading: 'Pas de boucle de responsabilité',
              text: 'Une SOP sans processus d\'inspection ou d\'audit associé n\'a pas de mécanisme d\'application. Le contrôle qualité, qu\'il s\'agisse d\'une validation superviseur, d\'un audit mystère ou d\'une révision par les pairs, est ce qui transforme une procédure écrite en standard opérationnel. Sans lui, respecter la SOP est facultatif.',
            },
          ],
        },
        {
          h2: 'Comment structurer une SOP',
          content:
            'La forme compte autant que le contenu. Une SOP bien structurée peut être lue rapidement, utilisée comme référence pendant une tâche et mise à jour sans réécrire l’intégralité du document. La structure suivante fonctionne pour la plupart des départements opérationnels.',
          h3Items: [
            {
              heading: 'Informations d\'en-tête',
              text: 'Toute SOP doit s\'ouvrir avec : le nom de la procédure, le département concerné, le poste responsable de son exécution, le numéro de version, la date de dernière révision et le validateur. C\'est la couche de gestion documentaire qui maintient la fiabilité de votre bibliothèque SOP.',
            },
            {
              heading: 'Objectif de la procédure',
              text: 'Une à deux phrases expliquant pourquoi cette procédure existe et ce qu\'une exécution correcte produit. Restez orienté résultat : "S\'assurer que chaque client au départ reçoit un check-out complet qui solde son compte avec précision et termine le séjour sur une interaction positive."',
            },
            {
              heading: 'Séquence étape par étape',
              text: 'Étapes numérotées, une action par étape. Évitez les étapes composées. "Vérifier la note et demander si le client a apprécié son séjour" doit être deux étapes, pas une. Chaque étape doit être suffisamment précise pour qu\'il n\'y ait aucune ambiguïté sur ce à quoi ressemble une étape accomplie. Incluez les délais quand cela compte : "Dans les 30 secondes suivant l\'approche du client à la réception."',
            },
            {
              heading: 'Exceptions et déclencheurs d\'escalade',
              text: 'Toute procédure a des cas particuliers. Documentez les plus courants : que faire si le client conteste une charge, si le PMS est en panne, s\'il n\'y a pas de manager de service. Une SOP qui ne couvre que le scénario sans accroc échoue au moment où on en a le plus besoin.',
            },
          ],
        },
        {
          h2: 'Catégories de SOP principales par département',
          content:
            'Les opérations se divisent en départements avec des exigences SOP distinctes. Les procédures qui génèrent le plus de risques côté client, réception, housekeeping, restauration et spa, sont celles où les standards documentés ont le meilleur retour sur investissement.',
          h3Items: [
            {
              heading: 'Réception (front office)',
              text: 'SOP prioritaires : séquence check-in, séquence check-out, gestion des late check-out, résolution des réclamations, protocole d\'arrivée VIP, standards téléphoniques et procédure no-show. Le check-in et le check-out sont les deux extrémités de chaque séjour client. Si la séquence est incohérente, l\'expérience client l\'est par définition.',
            },
            {
              heading: 'Housekeeping',
              text: 'SOP prioritaires : séquence femme de chambre pour chambres départ et recouche, procédure d\'inspection superviseur, gestion des objets trouvés, gestion des chambres DND, calendrier de nettoyage approfondi et standards de placement des amenités. Le housekeeping est le département à plus haut volume dans la plupart des hôtels et celui où l\'incohérence est la plus visible.',
            },
            {
              heading: 'Restauration (F&B)',
              text: 'SOP prioritaires : mise en place et dressage de table, séquence de service, standards de service des boissons, gestion des allergies et régimes alimentaires, clôture de service et procédure de livraison room service. Les SOP F&B doivent tenir compte du service standard et de l\'exception : que se passe-t-il quand la cuisine est en retard, quand un client a une allergie non déclarée, quand une table dépasse son créneau de réservation.',
            },
            {
              heading: 'Spa et bien-être',
              text: 'SOP prioritaires : préparation de la salle de soins, consultation et prise en charge client, screening des contre-indications, protocole de soin par modalité, séquence de recommandation retail et suivi post-soin. Les SOP spa comportent une dimension sécurité que les autres départements n\'ont pas. Un client présentant une contre-indication recevant un soin qui n\'aurait pas dû être réalisé est un manquement opérationnel et juridique, pas seulement un manquement de service.',
            },
          ],
        },
        {
          h2: 'Mettre en place votre bibliothèque SOP',
          content:
            'Rédiger les SOP est la partie facile. Amener une équipe à les utiliser, surtout une équipe existante avec des habitudes établies, nécessite une approche de conduite du changement, pas seulement un upload dans un dossier partagé.',
          h3Items: [
            {
              heading: 'Commencez par les procédures à risque le plus élevé',
              text: 'N\'essayez pas de tout documenter en une fois. Identifiez les cinq procédures dans chaque département qui, si elles sont réalisées de façon incohérente, génèrent le plus de réclamations clients, le plus de reprises ou le risque opérationnel le plus élevé. Rédigez celles-là en premier. Une bibliothèque SOP de cinquante documents bien utilisés vaut plus que deux cents que personne n\'ouvre.',
            },
            {
              heading: 'Formez à partir de la SOP, pas en parallèle',
              text: 'Lors de l\'intégration d\'un nouveau collaborateur, la SOP doit être le document de formation principal, pas un supplément. Parcourez la procédure étape par étape. Faites-la exécuter une fois avec supervision, une fois en autonomie. Validez uniquement quand le résultat correspond au standard. Cela fait de la SOP la référence, pas un accessoire.',
            },
            {
              heading: 'Révisez en briefing, pas seulement en intégration',
              text: 'Une courte révision SOP en briefing pré-service, une procédure, trois minutes, maintient le standard visible. Sur un trimestre, vous pouvez passer en revue les procédures prioritaires de chaque département. Les équipes qui revisitent régulièrement les SOP les traitent comme des documents vivants. Celles qui ne les voient que pendant la formation les traitent comme des documents historiques.',
            },
          ],
        },
        {
          h2: 'Ce que de bonnes SOPs permettent',
          content:
            'Le bénéfice opérationnel d\'une bibliothèque SOP fonctionnelle est la cohérence à grande échelle : la même chambre, le même accueil, la même présentation d\'assiette qu\'il soit mardi matin avec une équipe complète ou samedi soir avec un mélange de saisonniers. L\'avantage moins visible est que les procédures documentées accélèrent tout le reste. Former de nouveaux collaborateurs est plus rapide. Auditer la qualité est plus rapide. Identifier la source d\'une réclamation récurrente est plus rapide.',
          h3Items: [
            {
              heading: 'Scalabilité pour les opérations multi-établissements',
              text: 'Pour les groupes gérant plusieurs établissements, les SOP deviennent le mécanisme de cohérence de marque. Un client qui séjourne dans votre établissement à Paris et dans votre établissement à Lyon doit reconnaître le même standard de service. Cela n\'arrive que si les procédures sont documentées, partagées et activement appliquées dans les deux établissements.',
            },
            {
              heading: 'Réduction de la dépendance aux connaissances institutionnelles',
              text: 'Dans beaucoup d’établissements, les collaborateurs les plus expérimentés portent la connaissance opérationnelle dans leur tête. Quand ils partent, la connaissance part avec eux. Une bibliothèque SOP mature externalise cette connaissance. Le départ d’un chef de service de longue date ne crée pas de lacune qualité si les procédures qu’il a perfectionnées sur des années sont documentées et formées.',
            },
          ],
        },
      ],
      conclusion:
        'Une procédure opérationnelle n’est utile que si elle est adoptée. Rédiger le document est le point de départ. Le travail consiste à construire une culture où les procédures deviennent la norme, où les équipes savent où les trouver, où les managers les utilisent lors des inspections et des briefings, et où la bibliothèque reste à jour au fil de l’évolution de l’établissement. C’est une discipline managériale, pas un projet documentaire.',
      cta: { text: 'Voir les playbooks SOP', href: '/fr/playbooks' },
      faqs: [
        {
          question: 'Combien de SOPs faut-il généralement prévoir ?',
          answer: 'Un établissement de taille moyenne avec quatre à cinq départements maintient généralement entre 40 et 80 SOPs actives couvrant la réception, le housekeeping, la restauration et le spa. Le nombre importe moins que la couverture des procédures à haute fréquence et à haut risque. Commencez par 8 à 10 par département et développez à partir de là.',
        },
        {
          question: 'À quelle fréquence les SOPs doivent-elles être révisées ?',
          answer: 'Les procédures à haute fréquence comme le check-in, le check-out et le nettoyage des chambres doivent être révisées au minimum annuellement, ou chaque fois que le système ou le standard sous-jacent change. Les procédures moins fréquentes peuvent être révisées tous les un à deux ans. Chaque SOP doit porter une date de révision.',
        },
        {
          question: 'Quelle est la différence entre une SOP et un standard de marque ?',
          answer: 'Un standard de marque définit à quoi doit ressembler le résultat : le placement des amenités, le script d\'accueil, la présentation du service de nuit. Une SOP définit comment y parvenir : la séquence, le timing, les matériaux utilisés. Les standards de marque fixent le repère. Les SOP sont la notice pour l\'atteindre.',
        },
      ],
    },
  },
  {
    slug: 'hotel-front-desk-procedures',
    en: {
      title: 'Hotel Front Desk Procedures: Check-In, Check-Out, Billing and Handover SOPs',
      description:
        'Step-by-step hotel front desk procedures from the LuxOps Front Office Playbook: check-in, check-out, room not ready, billing disputes, wake-up calls and shift handover.',
      date: '2026-04-28',
      readTime: '10 min read',
      intro:
        'The front desk is where every guest stay begins and ends, but it is also where operational gaps become visible fastest. A room not ready, a declined card, a billing dispute, a wake-up call missed or a complaint transferred without context can undo a good stay in minutes. This guide is adapted from the LuxOps Front Office Playbook and focuses on the front desk procedures hotels should document first: check-in, check-out, room not ready, payment handling, guest recovery, telephone standards and shift handover.',
      sections: [
        {
          h2: 'Check-In Procedure',
          content:
            'Check-in sets the tone for the entire stay. The LuxOps playbook treats check-in as a controlled sequence, not a greeting followed by PMS work. The agent should know the guest file before the guest reaches the desk, and the room should only be assigned once housekeeping has released it as Inspected.',
          h3Items: [
            {
              heading: 'Pre-arrival preparation',
              text: 'Before each shift, review arrivals in the PMS, flag VIPs, repeat guests, birthdays, anniversaries, honeymoons, special requests and early arrival notes. Verify room assignments against guest preferences and housekeeping status. A prepared agent does not read the guest profile for the first time while the guest is standing at the desk.',
            },
            {
              heading: 'The check-in sequence',
              text: 'Greet within 30 seconds of the guest approaching. Use the guest name if the arrival is flagged. Verify identity and reservation, confirm room type and rate, present the registration card or digital equivalent for signature. Explain key card operation, outlets, breakfast times and any property-specific information in under 90 seconds. Offer to carry luggage or arrange bell service. Close with "Enjoy your stay, Mr./Ms. [Name]."',
            },
            {
              heading: 'Handling early arrivals and room not ready',
              text: 'When the room is not ready, store luggage, offer a beverage or waiting option, provide the estimated ready time, take a contact number and commit to a call when housekeeping confirms release. Do not assign a room in Clean status. Only an Inspected room should reach the guest.',
            },
            {
              heading: 'Credit card authorisation and incidental holds',
              text: 'The authorisation amount and hold duration should be defined in the SOP and communicated clearly at check-in. The playbook formula should be property-specific, but the logic is consistent: room charges plus an incidental buffer by night, or incidentals only for prepaid stays. Disputes at check-out often start when this explanation is skipped.',
            },
          ],
        },
        {
          h2: 'Check-Out Procedure',
          content:
            'Check-out is the final impression and the last quality control point before departure. The front desk procedure should close the folio accurately, protect revenue, notify housekeeping and create a warm exit instead of a purely transactional payment moment.',
          h3Items: [
            {
              heading: 'Express check-out vs. counter check-out',
              text: 'Offer both options. Express check-out, where the guest reviews the folio on the in-room TV or via app and keys are left in the room, suits guests in a hurry. Counter check-out allows for a final interaction, a chance to address any issues and a genuine farewell. Forcing all guests through counter check-out when they want express is a friction point. Removing counter check-out entirely misses service recovery opportunities.',
            },
            {
              heading: 'The check-out sequence',
              text: 'Greet by name, retrieve the folio, verify minibar or late charges where relevant, then present the invoice clearly. Review room charges, F&B, minibar, spa, deposits and adjustments before payment. Once payment is successful, close the invoice, offer an email copy and notify housekeeping that the room has departed.',
            },
            {
              heading: 'Late check-out handling',
              text: 'Late check-out should be approved against four factors: occupancy, guest status, housekeeping capacity and season or demand. A guest recovery case may justify a complimentary extension; a high-occupancy day may require stricter limits. The decision and charge, if any, must be noted in the PMS.',
            },
          ],
        },
        {
          h2: 'Complaint Handling Procedure',
          content:
            'How complaints are handled at the front desk directly determines whether a dissatisfied guest becomes a negative review or a loyal customer. The recovery procedure needs to be fast, genuine and fully documented. Agents should be trained not just on what to say but on the authority they have to resolve without manager escalation.',
          h3Items: [
            {
              heading: 'The recovery sequence',
              text: 'Use the LEARN framework from the playbook: Listen fully, Empathise with the impact, Apologise for the experience, Resolve with a concrete action and Notify the supervisor. The front desk agent should give a timeline, not a vague promise. "I will speak with housekeeping and have this resolved within 30 minutes" is stronger than "we will look into it."',
            },
            {
              heading: 'Agent authority and escalation triggers',
              text: 'The SOP should define exactly what a front desk agent can offer without manager approval: room upgrade, complimentary breakfast, F&B credit up to a defined amount, late check-out. Anything beyond that triggers manager involvement. An agent who is empowered to resolve minor issues without making the guest wait for a supervisor handles complaints faster and builds more trust.',
            },
            {
              heading: 'Documentation requirements',
              text: 'Every complaint must be logged with date, time, room number, guest name, issue, owner, resolution and follow-up result. Active and recent complaints should appear in every shift handover until closed. A complaint that is resolved but not logged is invisible to the manager and impossible to learn from.',
            },
          ],
        },
        {
          h2: 'Reservation Management and Upselling',
          content:
            'Front desk agents interact with reservations constantly: modifications, upgrades, no-shows, walk-ins and upsell opportunities at check-in. Each of these interactions should have a defined procedure to ensure consistency and capture revenue.',
          h3Items: [
            {
              heading: 'Check-in upsell procedure',
              text: 'Upselling at check-in is most effective when it is framed as a guest benefit, not a sales pitch. "I see you are booked into a standard room. We do have a superior room with a city view available, it is an additional $30 for the night. Would that be of interest?" Train agents on the specific upgrade options available each day, the approved price delta and how to present the offer without pressure. Track conversion rate by agent to identify coaching opportunities.',
            },
            {
              heading: 'No-show procedure',
              text: 'A no-show is a reservation where the guest did not arrive and did not cancel. The procedure should define when to release the room for resale, when to apply the no-show charge per the booking conditions, and whether to attempt outbound contact. A documented no-show procedure reduces revenue leakage and ensures the charge is applied consistently.',
            },
            {
              heading: 'Walk-in procedure',
              text: 'Walk-ins are an opportunity, not an interruption. The procedure should define the rate authority the front desk agent has for walk-in bookings, whether to offer the best available rate or a walk-in premium, and how to process the reservation in the PMS to avoid double occupancy. Agents should be trained to capture the full guest profile at intake, including contact details and consent for marketing.',
            },
          ],
        },
        {
          h2: 'Telephone and Communication Standards',
          content:
            'A significant share of front desk interactions happen by telephone: reservation inquiries, service requests, wake-up calls, internal transfers and guest complaints. The telephone standard defines how every call should be handled, from the greeting to the close.',
          h3Items: [
            {
              heading: 'Answering standard',
              text: 'Answer within three rings. Greeting format: property name, department or agent name, offer of assistance. "Good evening, [Property Name], this is [Name] speaking, how may I assist you?" Do not answer with just "Front desk" or "Hello." The greeting is the first signal of service standard.',
            },
            {
              heading: 'Holding and transferring',
              text: 'Ask for permission before placing a guest on hold: "May I place you on a brief hold?" Do not place a guest on hold without asking. Hold duration should not exceed 90 seconds without a return to the call. When transferring, announce the transfer before connecting: "I am transferring you to housekeeping now. Their extension is [number] in case we get disconnected." Never transfer a complaint call without a warm handover.',
            },
            {
              heading: 'Wake-up call procedure',
              text: 'Wake-up calls should be confirmed back to the guest at the time of request: "Confirmed, a wake-up call at 6:00 a.m. for room 412." Log the request in the system before ending the call. For automated wake-up systems, a backup manual call is standard practice when the guest has an early departure or a critical schedule.',
            },
          ],
        },
        {
          h2: 'Shift Handover and Log Procedures',
          content:
            'The handover between shifts is one of the most failure-prone moments in front desk operations. Information that does not transfer creates problems that appear hours later, typically when the relevant manager is no longer on shift.',
          h3Items: [
            {
              heading: 'The shift handover sequence',
              text: 'The outgoing agent should brief the incoming agent on: current occupancy and expected arrivals, any open issues or pending complaints, VIPs arriving or in-house, rooms blocked for specific reasons, any pending maintenance flags that affect guest-facing rooms, and any operational irregularities from the shift. A written handover log is more reliable than verbal communication alone.',
            },
            {
              heading: 'The front desk log',
              text: 'Every significant interaction, complaint, unusual request, incident, or decision that deviated from standard procedure, should be logged with the time, guest name and room number, the nature of the interaction and the action taken. The log is the institutional memory of the desk. Managers reviewing it the next morning should be able to reconstruct the shift without asking each agent separately.',
            },
          ],
        },
      ],
      conclusion:
        'Front desk procedures are the connective tissue of the guest experience. Check-in sets the tone. Complaint handling determines whether problems become reviews. Check-out is the final impression. And the handover log is what keeps the quality consistent across shifts. When each of these procedures is documented, trained and enforced, the front desk operates as a system rather than a collection of individual performances.',
      cta: { text: 'View the Front Office Playbook', href: '/en/playbooks/fo' },
      faqs: [
        {
          question: 'What is the most important front desk SOP in a hotel?',
          answer: 'The check-in and complaint handling procedures consistently have the highest impact on guest satisfaction scores and reviews. Check-in determines first impression. Complaint handling determines whether a problem becomes a negative review or a loyalty-building moment. Both should be prioritised for documentation and training.',
        },
        {
          question: 'How should front desk agents handle a guest who is upset at check-in?',
          answer: 'The priority is to avoid a public confrontation and to resolve the issue quickly. Acknowledge the problem without defending the property. Offer a specific resolution with a defined timeline. If the issue cannot be resolved at the agent level, escalate to the supervisor immediately rather than making the guest wait while the agent attempts to resolve something outside their authority.',
        },
        {
          question: 'What should be in a front desk shift handover?',
          answer: 'A complete handover includes current occupancy, expected arrivals and departures, open complaints or pending service requests, VIPs in-house or arriving, blocked rooms, any maintenance issues affecting guest-facing areas and any decisions that deviated from standard procedure. Written logs are more reliable than verbal handover alone.',
        },
        {
          question: 'How do you train front desk staff on procedures?',
          answer: 'Walk through the SOP step by step, then have the agent role-play the procedure with a supervisor. Evaluate against the written standard, not general impression. Sign off only when the output matches the SOP. Follow up with observed performance reviews during the first 30 days and periodic spot checks thereafter.',
        },
      ],
    },
    fr: {
      title: 'Procédures de Réception Hôtelière : Le Guide SOP Complet',
      description:
        'Procédures de réception étape par étape pour le check-in, check-out, la gestion des réclamations et la gestion des réservations. Rédigé pour les réceptionnistes et superviseurs.',
      date: '2026-04-28',
      readTime: '10 min de lecture',
      intro:
        'La réception est l\'endroit où chaque séjour client commence et se termine. C\'est aussi le département qui absorbe le plus de variabilité : arrivées tardives, litiges, changements de chambre, problèmes de paiement, demandes spéciales et réclamations arrivent tous à la réception. Quand les procédures sont documentées et suivies de façon cohérente, l\'équipe peut gérer cette variabilité sans perdre le standard de service. Quand elles ne le sont pas, le résultat dépend entièrement du réceptionniste qui travaille ce jour-là.',
      sections: [
        {
          h2: 'Procédure de Check-In',
          content:
            'Le check-in donne le ton pour l\'intégralité du séjour. Un check-in fluide renforce la confiance dans l\'établissement. Un check-in lent ou incohérent crée du doute avant que le client ait vu sa chambre. La procédure ci-dessous couvre la séquence complète pour une arrivée standard. Les arrivées VIP nécessitent un protocole séparé, typiquement avec chambres pré-bloquées, accueil personnalisé et présence du manager.',
          h3Items: [
            {
              heading: 'Préparation pré-arrivée',
              text: 'Avant chaque service, le réceptionniste doit passer en revue les arrivées prévues de la journée. Identifier les VIP, les clients réguliers, les clients avec des demandes spéciales sur leur dossier et les chambres bloquées pour arrivée anticipée. Repérer les chambres propres et inspectées versus celles encore en cours. Un agent préparé ne lit pas le dossier client pour la première fois quand le client est devant le comptoir.',
            },
            {
              heading: 'La séquence de check-in',
              text: 'Accueil dans les 30 secondes suivant l\'approche du client. Utiliser le nom du client si l\'arrivée est identifiée. Vérifier l\'identité et la réservation, confirmer le type de chambre et le tarif, présenter la fiche de séjour pour signature. Expliquer le fonctionnement des cléfs, les équipements, les horaires du petit-déjeuner et les informations propres à l\'établissement en moins de 90 secondes. Proposer le portage des bagages. Conclure avec "Profitez bien de votre séjour, M./Mme [Nom]."',
            },
            {
              heading: 'Gestion des arrivées anticipées et chambre non prête',
              text: 'Quand la chambre n\'est pas prête : proposer le stockage des bagages, communiquer l\'heure estimée de disponibilité, prendre un numéro de contact et s\'engager à rappeler quand la chambre est confirmée. Ne pas donner un numéro de chambre qui n\'est pas encore inspectée et libérée. Si l\'attente dépasse l\'heure estimée, appeler le client avant qu\'il n\'appelle la réception.',
            },
            {
              heading: 'Autorisation de carte et provision pour frais annexes',
              text: 'Le montant d\'autorisation et la durée de provision doivent être définis dans la SOP et communiqués au client au check-in. Les litiges au check-out concernant des provisions inattendues résultent presque toujours d\'une étape sautée ou mal communiquée. Préciser le montant de la provision, expliquer qu\'elle couvre les frais annexes et qu\'elle est libérée dans un délai défini après le départ.',
            },
          ],
        },
        {
          h2: 'Procédure de Check-Out',
          content:
            'Le check-out est la dernière impression. Un client dont le séjour était acceptable peut partir satisfait si le check-out est fluide. Un client dont le séjour était bon peut partir frustré si le check-out est lent, si la note est incorrecte ou si personne ne le reconnaît. La procédure doit être efficace et chaleureuse, pas seulement efficace.',
          h3Items: [
            {
              heading: 'Express check-out vs. check-out au comptoir',
              text: 'Proposer les deux options. L\'express check-out, où le client consulte sa note sur la TV de chambre ou via application et laisse les clés en chambre, convient aux clients pressés. Le check-out au comptoir permet une dernière interaction, une chance de traiter tout problème et un vrai au revoir. Forcer tous les clients par le comptoir quand ils veulent un express est un point de friction. Supprimer entièrement le check-out au comptoir rate les opportunités de récupération de service.',
            },
            {
              heading: 'La séquence de check-out',
              text: 'Accueil par le nom et récupération de la note. Demander : "Avez-vous eu l\'occasion de profiter de services supplémentaires pendant votre séjour ?" avant de présenter la note, pas après le début d\'un litige. Passer en revue les principales lignes. Traiter tout écart sur place. Traiter le paiement et confirmer l\'email pour le reçu. Poser une vraie question sur le séjour, pas un script de sondage. Souhaiter un bon voyage.',
            },
            {
              heading: 'Gestion des late check-out',
              text: 'Le late check-out doit être géré dès le matin du départ. Le réceptionniste passe en revue les clients qui ont signalé un départ tardif ou un vol tard. Croiser avec la charge de travail housekeeping et l\'occupation. Proposer le late check-out dans la fenêtre disponible : gratuit pour les membres fidélité jusqu\'à une heure définie, payant pour les demandes prolongées. Confirmer l\'arrangement par écrit, via une note sur la fiche client et un bref message en chambre.',
            },
          ],
        },
        {
          h2: 'Procédure de Gestion des Réclamations',
          content:
            'La gestion des réclamations à la réception détermine directement si un client insatisfait devient un avis négatif ou un client fidèle. La procédure de récupération doit être rapide, sincère et entièrement documentée. Les agents doivent être formés non seulement sur ce qu\'ils doivent dire mais sur l\'autorité dont ils disposent pour résoudre sans escalade vers le manager.',
          h3Items: [
            {
              heading: 'La séquence de récupération',
              text: 'Écouter entièrement sans interrompre. Reconnaître le problème sans défendre l\'établissement : "Je comprends que ce n\'était pas l\'expérience que vous attendiez." S\'excuser pour l\'expérience, pas pour le système. Proposer une résolution concrète avec un délai défini. Faire un suivi pour confirmer la résolution avant la fin du service. Consigner la réclamation et la résolution dans le PMS sous le dossier client.',
            },
            {
              heading: 'Autorité de l\'agent et déclencheurs d\'escalade',
              text: 'La SOP doit définir exactement ce qu\'un réceptionniste peut proposer sans accord du manager : surclassement, petit-déjeuner offert, crédit F&B jusqu\'à un montant défini, late check-out. Au-delà, l\'implication du manager se déclenche. Un agent habilité à résoudre les problèmes mineurs sans faire attendre le client pour un superviseur gère les réclamations plus rapidement et instaure davantage de confiance.',
            },
            {
              heading: 'Exigences de documentation',
              text: 'Toute réclamation doit être consignée : la nature du problème, l\'heure de signalement, la résolution proposée et le résultat. Cette documentation sert trois objectifs. Elle permet au manager d\'identifier des tendances, elle protège l\'établissement si un litige client s\'intensifie et elle crée une piste d\'audit pour la formation. Une réclamation résolue mais non consignée est une opportunité d\'apprentissage manquée.',
            },
          ],
        },
        {
          h2: 'Gestion des Réservations et Upselling',
          content:
            'Les réceptionnistes interagissent constamment avec les réservations : modifications, surclassements, no-shows, clients sans réservation et opportunités d\'upsell au check-in. Chacune de ces interactions doit avoir une procédure définie pour garantir la cohérence et capturer les revenus.',
          h3Items: [
            {
              heading: 'Procédure d\'upsell au check-in',
              text: 'L\'upselling au check-in est le plus efficace quand il est présenté comme un bénéfice client, pas une technique de vente. "Je vois que vous êtes réservé en chambre standard. Nous avons une chambre supérieure avec vue sur la ville disponible, c\'est 30 € supplémentaires cette nuit. Cela vous intéresserait-il ?" Former les agents sur les options de surclassement disponibles chaque jour, le différentiel de prix approuvé et comment présenter l\'offre sans pression. Suivre le taux de conversion par agent pour identifier les opportunités de coaching.',
            },
            {
              heading: 'Procédure no-show',
              text: 'Un no-show est une réservation où le client n\'est pas arrivé et n\'a pas annulé. La procédure doit définir quand libérer la chambre pour la revente, quand appliquer les frais de no-show selon les conditions de réservation, et s\'il faut tenter un contact sortant. Une procédure no-show documentée réduit les pertes de revenus et garantit que les frais sont appliqués de façon cohérente.',
            },
            {
              heading: 'Procédure clients sans réservation',
              text: 'Les clients sans réservation sont une opportunité, pas une interruption. La procédure doit définir l\'autorité tarifaire du réceptionniste pour les réservations à la volée, s\'il faut proposer le meilleur tarif disponible ou un tarif walk-in, et comment saisir la réservation dans le PMS pour éviter la double occupation. Les agents doivent être formés à capturer le profil complet du client à l\'accueil.',
            },
          ],
        },
        {
          h2: 'Standards Téléphoniques et de Communication',
          content:
            'Une part significative des interactions à la réception se fait par téléphone : demandes de réservation, demandes de service, appels réveil, transferts internes et réclamations clients. Le standard téléphonique définit comment chaque appel doit être géré, de l\'accueil à la clôture.',
          h3Items: [
            {
              heading: 'Standard de réponse',
              text: 'Répondre dans les trois sonneries. Format d\'accueil : nom de l\'établissement, département ou nom de l\'agent, offre d\'assistance. "Bonsoir, [Nom de l\'établissement], c\'est [Prénom] à l\'appareil, comment puis-je vous aider ?" Ne pas répondre uniquement par "Réception" ou "Allô." L\'accueil est le premier signal du standard de service.',
            },
            {
              heading: 'Mise en attente et transfert',
              text: 'Demander la permission avant de mettre un client en attente : "Puis-je vous mettre brièvement en attente ?" Ne jamais mettre un client en attente sans demander. La durée de mise en attente ne doit pas dépasser 90 secondes sans retour à l\'appel. Lors d\'un transfert, annoncer le transfert avant de connecter : "Je vous transfère au housekeeping maintenant. Leur poste est le [numéro] au cas où la communication serait coupée." Ne jamais transférer un appel de réclamation sans passation chaleureuse.',
            },
            {
              heading: 'Procédure d\'appel réveil',
              text: 'Les appels réveil doivent être confirmés au client au moment de la demande : "Confirmé, un appel réveil à 6h00 pour la chambre 412." Enregistrer la demande dans le système avant de terminer l\'appel. Pour les systèmes d\'appel automatique, un appel manuel de secours est une pratique standard quand le client a un départ matinal ou un programme critique.',
            },
          ],
        },
        {
          h2: 'Procédures de Passation de Service et de Journal',
          content:
            'La passation entre services est l\'un des moments les plus risqués dans les opérations de réception. Les informations qui ne se transmettent pas créent des problèmes qui apparaissent des heures plus tard, typiquement quand le manager concerné n\'est plus en service.',
          h3Items: [
            {
              heading: 'La séquence de passation de service',
              text: 'L\'agent sortant doit informer l\'agent entrant sur : l\'occupation actuelle et les arrivées prévues, tout problème ouvert ou réclamation en attente, les VIP arrivant ou en séjour, les chambres bloquées pour des raisons spécifiques, tout signalement de maintenance affectant les chambres côté client, et toute irrégularité opérationnelle du service. Un journal de passation écrit est plus fiable que la communication verbale seule.',
            },
            {
              heading: 'Le journal de réception',
              text: 'Toute interaction significative, réclamation, demande inhabituelle, incident ou décision déviant de la procédure standard, doit être consignée avec l\'heure, le nom du client et le numéro de chambre, la nature de l\'interaction et l\'action entreprise. Le journal est la mémoire institutionnelle du comptoir. Les managers qui le consultent le lendemain matin doivent pouvoir reconstituer le service sans interroger chaque agent séparément.',
            },
          ],
        },
      ],
      conclusion:
        'Les procédures de réception sont le tissu conjonctif de l\'expérience client. Le check-in donne le ton. La gestion des réclamations détermine si les problèmes deviennent des avis. Le check-out est la dernière impression. Et le journal de passation est ce qui maintient la qualité cohérente d\'un service à l\'autre. Quand chacune de ces procédures est documentée, formée et appliquée, la réception fonctionne comme un système plutôt qu\'une collection de performances individuelles.',
      cta: { text: 'Voir le Playbook Front Office', href: '/fr/playbooks' },
      faqs: [
        {
          question: 'Quelle est la procédure de réception la plus importante dans un hôtel ?',
          answer: 'Les procédures de check-in et de gestion des réclamations ont systématiquement le plus fort impact sur les scores de satisfaction client et les avis. Le check-in détermine la première impression. La gestion des réclamations détermine si un problème devient un avis négatif ou un moment de fidélisation. Les deux doivent être prioritaires pour la documentation et la formation.',
        },
        {
          question: 'Comment les réceptionnistes doivent-ils gérer un client mécontent au check-in ?',
          answer: 'La priorité est d\'éviter un affrontement public et de résoudre le problème rapidement. Reconnaître le problème sans défendre l\'établissement. Proposer une résolution spécifique avec un délai défini. Si le problème ne peut pas être résolu au niveau de l\'agent, escalader immédiatement au superviseur plutôt que de faire attendre le client pendant que l\'agent tente de résoudre quelque chose hors de son autorité.',
        },
        {
          question: 'Que doit contenir une passation de service à la réception ?',
          answer: 'Une passation complète inclut l\'occupation actuelle, les arrivées et départs prévus, les réclamations ouvertes ou demandes de service en attente, les VIP en séjour ou arrivant, les chambres bloquées, les problèmes de maintenance affectant les zones côté client et toutes les décisions ayant dévié de la procédure standard. Les journaux écrits sont plus fiables que la passation verbale seule.',
        },
        {
          question: 'Comment former les équipes de réception aux procédures ?',
          answer: 'Parcourir la SOP étape par étape, puis faire jouer la procédure en jeu de rôle avec un superviseur. Évaluer par rapport au standard écrit, pas à l\'impression générale. Valider uniquement quand le résultat correspond à la SOP. Faire un suivi avec des revues de performance observées pendant les 30 premiers jours et des contrôles ponctuels périodiques ensuite.',
        },
      ],
    },
  },
  {
    slug: 'hotel-staff-training-service-standards',
    en: {
      title: 'Service Standards Training: How to Train Hotel Teams Without Disrupting Operations',
      description:
        'Most properties have service standards. Few have a reliable way to teach them. Learn how to run on-site service standards training that changes how teams work, without shutting down operations.',
      date: '2026-04-30',
      readTime: '6 min read',
      intro:
        'Most properties have service standards. Few have a reliable way to teach them. The result is a team where every member applies procedures slightly differently: not out of negligence, but because no one taught the standard clearly enough for it to stick.',
      sections: [
        {
          h2: 'Why service standards training fails in most properties',
          content: 'The problem is rarely the standard itself. It is how, or whether, it gets taught.',
          h3Items: [
            {
              heading: 'Training happens once, then stops',
              text: 'In most properties, training is front-loaded into the onboarding period. A new hire spends a few days shadowing a colleague, reads a document or two, then joins the floor. If they pick up the right habits from the right people, the standard holds. If not, it drifts. There is no mechanism to correct it until a guest complains.',
            },
            {
              heading: 'Standards exist on paper but are never taught',
              text: 'Many hotels have written SOPs. Far fewer have a process for making sure those SOPs are understood and applied by the whole team. A document on a shared drive does not train anyone.',
            },
            {
              heading: 'New hires learn by watching, not by understanding',
              text: 'Informal transmission is fast but fragile. It passes on habits, not reasoning. A team member who knows what to do but not why will deviate the moment the situation varies, which in hospitality happens constantly.',
            },
          ],
        },
        {
          h2: 'What good service standards training looks like',
          content: 'Effective service standards training shares three characteristics that separate it from a standard briefing or onboarding session.',
          h3Items: [
            {
              heading: 'It is built around your actual procedures',
              text: 'Generic customer service training does not work in hospitality operations. A session that does not reference your check-in sequence, your service standards or your complaint handling protocol is a session your team will forget by the following Monday.',
            },
            {
              heading: 'It involves the whole department, not just new hires',
              text: 'Inconsistency within a team is rarely caused by one person. It comes from years of small variations accumulating across shifts. Effective training realigns the whole department around the same reference, including experienced staff.',
            },
            {
              heading: 'It ends with something participants can use',
              text: 'The goal of a training session is not understanding in the room. It is application on the floor. Every participant should leave with a physical reference they can consult independently: a playbook, a checklist, a procedure card. Something that reinforces the standard between sessions.',
            },
          ],
        },
        {
          h2: 'How to Run Training Without Disrupting the Operation',
          content: 'The most common objection to on-property training is operational: there is no time, the team cannot be pulled off the floor, high season is coming. These are real constraints. They can all be managed.',
          h3Items: [
            {
              heading: 'Use half-day formats for targeted departments',
              text: 'A 4-hour session for a team of 15 requires minimal scheduling adjustment. It can run in the morning before service opens, between two shifts, or on a lighter operational day. There is no need to close a department or run at reduced capacity.',
            },
            {
              heading: 'Schedule around your service rhythm, not against it',
              text: 'The worst time to train Front Office staff is during peak check-in. The best time is mid-morning or mid-afternoon, when the desk is stable and cover is manageable. Plan the session around your own operational rhythm.',
            },
            {
              heading: 'Train one department at a time',
              text: 'Front Office first, then Housekeeping, then Food and Beverage. Each session is focused, faster to schedule, and easier to follow up on. Trying to train every department at once creates logistical problems and dilutes the content.',
            },
          ],
        },
        {
          h2: 'What Changes After a Proper Training Session',
          content:
            'Teams that go through structured, on-property training apply standards more consistently from the first shift after the session. Not because they learned something new, but because they finally understood the reasoning behind procedures they were already executing partially. That shift in understanding is what sustains consistency over time, not supervision alone. The question is not whether your team needs training. It is whether the training you are running is specific enough to change how they work.',
        },
      ],
      conclusion:
        'Service standards do not enforce themselves. They require a team that understands them well enough to apply them consistently, adapt when the situation requires it, and pass the standard on to the next person who joins. That is what on-property training is designed to do.',
      cta: {
        text: 'View on-site training formats',
        href: '/training',
      },
      faqs: [
        {
          question: 'How long should a service standards training session last?',
          answer:
            'For most departments, a half-day (4 hours) covers one operational priority thoroughly. A full day (8 hours) allows for broader alignment across multiple topics and more time for guided practice with the team.',
        },
        {
          question: 'Can training be adapted to our specific procedures?',
          answer:
            'Yes. On-property training should always be built around your actual SOPs, service standards, and operational context, not a generic curriculum. That is what makes the difference between a session teams remember and one they forget.',
        },
        {
          question: 'What is the difference between service training and onboarding?',
          answer:
            'Onboarding introduces a new hire to the property and its basic expectations. Training aligns an existing team, including experienced staff, around a consistent standard. Both are necessary and serve different purposes.',
        },
      ],
    },
    fr: {
      title: 'Formation standards de service : transmettre les bons réflexes sans désorganiser l’exploitation',
      description:
        'La plupart des établissements ont des standards de service. Peu disposent d’un processus fiable pour les transmettre. Découvrez comment organiser une formation sur site qui change réellement les pratiques des équipes, sans désorganiser l’exploitation.',
      date: '2026-04-30',
      readTime: '6 min de lecture',
      intro:
        'La plupart des établissements ont des standards de service. Peu disposent d’un processus fiable pour les transmettre. Il en résulte des équipes où chaque collaborateur applique les procédures légèrement différemment : non par négligence, mais parce que le standard n’a jamais été transmis avec assez de clarté pour être vraiment intégré.',
      sections: [
        {
          h2: 'Pourquoi la formation aux standards de service échoue souvent',
          content: 'Le problème vient rarement du standard lui-même. Il vient de la façon dont il est transmis, ou du fait qu\'il ne l\'est pas.',
          h3Items: [
            {
              heading: 'La formation se concentre sur la prise de poste, puis s\'arrête',
              text: 'Dans la plupart des établissements, la formation est concentrée sur la période d\'intégration. Un nouveau collaborateur passe quelques jours en doublon, lit un ou deux documents, puis prend son service. S\'il observe les bonnes pratiques auprès des bonnes personnes, le standard tient. Sinon, il dérive. Aucun mécanisme ne permet de corriger cela avant qu\'un client se plaigne.',
            },
            {
              heading: 'Les procédures existent sur papier mais ne sont jamais enseignées',
              text: 'Beaucoup d’établissements disposent de SOPs rédigées. Bien moins nombreux sont ceux qui ont mis en place un processus pour s’assurer que ces procédures sont comprises et appliquées par l’ensemble des équipes. Un document dans un dossier partagé ne forme personne.',
            },
            {
              heading: 'Les nouvelles recrues apprennent par observation, sans comprendre le sens',
              text: 'La transmission informelle est rapide mais fragile. Elle transmet des habitudes, pas du raisonnement. Un collaborateur qui sait quoi faire mais pas pourquoi déviera dès que la situation sort de l’ordinaire, ce qui arrive en permanence dans l’exploitation.',
            },
          ],
        },
        {
          h2: 'À quoi ressemble une bonne formation aux standards',
          content: 'Une formation efficace aux standards de service partage trois caractéristiques qui la distinguent d’un briefing ou d’une session d’intégration classique.',
          h3Items: [
            {
              heading: 'Elle est construite autour de vos propres procédures',
              text: 'Une formation générique au service client ne fonctionne pas en exploitation. Une session qui ne fait pas référence à votre séquence de check-in, à vos standards de service ou à votre procédure de gestion des réclamations est une session que vos équipes auront oubliée dès le lundi suivant.',
            },
            {
              heading: 'Elle implique tout le département, pas uniquement les nouvelles recrues',
              text: 'Les incohérences au sein d\'une équipe sont rarement le fait d\'une seule personne. Elles résultent d\'années de petites variations accumulées d\'un service à l\'autre. Une formation efficace réaligne l\'ensemble du département autour du même référentiel, y compris les collaborateurs expérimentés.',
            },
            {
              heading: 'Elle se termine avec un support que les participants peuvent utiliser',
              text: 'L\'objectif d\'une session de formation n\'est pas la compréhension dans la salle. C\'est l\'application sur le terrain. Chaque participant doit repartir avec un document de référence qu\'il peut consulter de façon autonome : un playbook, une checklist, une fiche procédure. Un support qui ancre le standard entre les sessions.',
            },
          ],
        },
        {
          h2: 'Comment organiser une formation sans désorganiser l\'exploitation',
          content: 'L\'objection la plus fréquente à la formation sur site est opérationnelle : pas le temps, les équipes ne peuvent pas quitter leur poste, la saison arrive. Ce sont des contraintes réelles, qui se gèrent toutes.',
          h3Items: [
            {
              heading: 'Privilégier les formats demi-journée pour des interventions ciblées',
              text: 'Une session de 4 heures pour une équipe de 15 personnes nécessite un ajustement minimal. Elle peut se tenir le matin avant l\'ouverture du service, entre deux services, ou lors d\'une journée à activité réduite. Il n\'est pas nécessaire de fermer un département ou de fonctionner en sous-effectif.',
            },
            {
              heading: 'Planifier autour du rythme de l\'exploitation, pas contre lui',
              text: 'Le pire moment pour former les équipes de la réception, c\'est en plein pic de check-in. Le meilleur moment, c\'est en milieu de matinée ou d\'après-midi, quand le desk est stable et que la couverture est assurée. La session doit s\'adapter à votre rythme d\'exploitation.',
            },
            {
              heading: 'Former un département à la fois',
              text: 'La réception d’abord, puis le housekeeping, puis le F&B. Chaque session est ciblée, plus facile à planifier et plus simple à suivre dans la durée. Vouloir former tous les départements en même temps crée des problèmes logistiques et dilue le contenu.',
            },
          ],
        },
        {
          h2: 'Ce qui change après une vraie session de formation',
          content:
            'Les équipes qui suivent une formation structurée sur site appliquent les standards de façon plus régulière dès le premier service qui suit la session. Non pas parce qu\'elles ont appris quelque chose de nouveau, mais parce qu\'elles ont enfin compris la logique derrière des procédures qu\'elles exécutaient déjà partiellement. C\'est ce changement de compréhension qui garantit la constance dans la durée, et non la supervision seule. La question n\'est pas de savoir si vos équipes ont besoin d\'une formation. C\'est de savoir si la formation que vous organisez est suffisamment précise pour changer réellement leurs pratiques.',
        },
      ],
      conclusion:
        'Les standards de service ne s\'appliquent pas d\'eux-mêmes. Ils exigent des équipes qui les comprennent suffisamment pour les appliquer avec constance, s\'adapter quand la situation l\'exige, et transmettre le standard au prochain collaborateur qui rejoint l\'établissement. C\'est précisément l\'objectif de la formation sur site.',
      cta: {
        text: 'Voir les formats de formation sur site',
        href: '/formation',
      },
      faqs: [
        {
          question: 'Quelle doit être la durée d’une session de formation aux standards ?',
          answer:
            'Pour la plupart des départements, une demi-journée (4 heures) permet de traiter une priorité opérationnelle en profondeur. Une journée complète (8 heures) permet un alignement plus large sur plusieurs thèmes, avec davantage de temps consacré à la mise en pratique.',
        },
        {
          question: 'La formation peut-elle être adaptée à nos procédures spécifiques ?',
          answer:
            'Oui. Une formation sur site doit toujours être construite autour de vos propres SOPs, de vos standards de service et de votre contexte opérationnel, et non autour d\'un programme générique. C\'est ce qui fait la différence entre une session dont les équipes se souviennent et une qu\'elles oublient.',
        },
        {
          question: 'Quelle est la différence entre la formation et l\'intégration d\'un nouveau collaborateur ?',
          answer:
            'L\'intégration présente un nouveau collaborateur à l\'établissement et à ses attendus de base. La formation aligne une équipe existante, y compris les collaborateurs expérimentés, autour d\'un référentiel commun. Les deux sont nécessaires et répondent à des besoins distincts.',
        },
      ],
    },
  },
  {
    slug: 'hotel-staff-turnover-training',
    en: {
      title: 'How on-site training reduces team turnover',
      description:
        'High turnover is rarely only a pay problem. Learn how structured on-site training reduces attrition by giving teams the clarity, confidence and standards they need to stay.',
      date: '2026-04-30',
      readTime: '6 min read',
      intro:
        'Hospitality has one of the highest turnover rates of any sector. Many properties treat this as a hiring problem. The more accurate diagnosis, in the majority of cases, is a training problem. Team members who leave in the first three months rarely cite salary first. They cite feeling lost, unsupported, and unclear on what was expected of them.',
      sections: [
        {
          h2: 'Why team members leave: the training root cause',
          content:
            'The reasons staff give for leaving and the reasons they actually leave are rarely the same.',
          h3Items: [
            {
              heading: 'New hires are left to figure things out',
              text: 'Most hotel onboarding consists of a few days shadowing a colleague. If that colleague has good habits, the new hire develops good habits. If not, no one finds out until something goes wrong. There is no structured standard and no safety net. For many new hires, the rational response is to leave before being blamed for errors they were never equipped to avoid.',
            },
            {
              heading: 'Experienced staff disengage when nothing is formalised',
              text: 'A team member who has worked at the property for three years but has never had their standards formally recognised or reinforced will eventually stop caring. Informal knowledge becomes invisible. Training, done properly, changes that dynamic.',
            },
            {
              heading: 'Correction without explanation drives people out',
              text: 'In hotels with no documented procedures, managers correct behaviour in the moment, inconsistently, and often without explaining why the standard exists. Staff who are corrected without understanding why develop resentment rather than improvement.',
            },
          ],
        },
        {
          h2: 'What structured training changes about retention',
          content:
            'On-property training does not retain staff by making them happier. It retains them by removing the conditions that make them leave.',
          h3Items: [
            {
              heading: 'Clarity replaces ambiguity',
              text: 'When a team member knows exactly what is expected at every stage of their shift, the anxiety of not knowing disappears. Confident staff perform better and stay longer. The standard is no longer something imposed arbitrarily. It is something they were taught and understand.',
            },
            {
              heading: 'Training signals that the property invests in its people',
              text: 'A hotel that runs structured, department-level training communicates something important to every participant: you are worth developing. That signal matters more than most managers realise, particularly for staff in their first six months.',
            },
            {
              heading: 'The whole department realigns, not just new hires',
              text: 'One of the most effective elements of on-property training is running it for the full team, including experienced staff. When everyone is trained to the same standard at the same time, the informal habits that had accumulated across shifts get reset, without anyone being singled out.',
            },
          ],
        },
        {
          h2: 'The operational conditions that make people stay',
          content:
            'Retention is not a benefits programme. It is an operational environment where people can work well.',
          h3Items: [
            {
              heading: 'A reference they can use independently',
              text: 'Every training session should end with participants holding a physical reference: a procedure card, a checklist, a playbook section. A team member who can look something up without asking a supervisor builds confidence shift by shift. Confidence reduces the impulse to leave.',
            },
            {
              heading: 'Supervisors who manage rather than repeat themselves',
              text: 'In hotels without structured training, supervisors spend most of their time answering basic procedural questions and correcting the same errors. After a training intervention, the team works to a common standard without constant oversight. Supervisors can manage. That change is visible within two to three shifts.',
            },
            {
              heading: 'Consistent standards reduce the friction that burns people out',
              text: 'Burnout in hospitality is rarely caused by volume alone. It comes from volume combined with inconsistency: covering for colleagues who work differently, managing guest complaints caused by varying standards, absorbing the consequences of a team that is not aligned. Training addresses the root cause.',
            },
          ],
        },
        {
          h2: 'What changes after an on-property training session',
          content:
            'Within the first week after a structured on-property session, most hotels notice the same changes: fewer basic procedural questions directed at supervisors, more consistent execution across shifts, and new hires who integrate at a faster pace. The shift in experienced staff is often more significant. People who had been executing procedures partially, or who had developed workarounds, return to the standard. Not because they were corrected again, but because they finally understood why it exists. A team trained together, around its actual procedures and service standards, develops a shared reference point. New hires join that team and adopt the standard because it is visible and consistent. That is how training reduces turnover over time: not through a single session, but by creating the conditions in which people choose to stay.',
        },
      ],
      conclusion:
        'Turnover is not solved by better job listings. It is solved by creating a working environment where staff have the clarity, the tools and the support to do their job well from the first shift. On-property training is the most direct investment a hotel can make toward that outcome.',
      cta: {
        text: 'View on-property training formats',
        href: '/training',
      },
      faqs: [
        {
          question: 'How quickly does on-property training affect staff retention?',
          answer:
            'The first effects are operational and appear within one to two weeks: fewer procedural errors, less time spent by supervisors on basic correction, faster integration for new hires. The retention effect builds over the following months as the team stabilises around a consistent standard.',
        },
        {
          question: 'Is structured training relevant for small hotel teams?',
          answer:
            'Yes. In smaller teams, the impact is often faster because the whole department can be trained in a single session. The absence of written procedures tends to be more acute in smaller properties, which makes the return on a training intervention proportionally higher.',
        },
        {
          question: 'Does on-property training replace onboarding?',
          answer:
            'No. Onboarding introduces a new hire to the property. On-property training aligns the full team, including experienced staff, around a consistent standard. Both are necessary and serve different purposes. The most effective approach uses structured training to set the standard, then onboards new hires against that documented reference.',
        },
      ],
    },
    fr: {
      title: 'Comment la formation sur site réduit le turn-over des équipes',
      description:
        'Le turn-over élevé est rarement une simple question de rémunération. Découvrez comment une formation structurée sur site stabilise les équipes en leur donnant les repères, la confiance et les standards dont elles ont besoin pour rester.',
      date: '2026-04-30',
      readTime: '6 min de lecture',
      intro:
        "L’hôtellerie affiche l’un des taux de turn-over les plus élevés. La plupart des établissements traitent cela comme un problème de recrutement. Le diagnostic le plus juste, dans la majorité des cas, est un problème de formation. Les collaborateurs qui quittent l’établissement dans les trois premiers mois citent rarement la rémunération en premier. Ils évoquent surtout le sentiment d’être livrés à eux-mêmes, sans cadre clair et sans accompagnement.",
      sections: [
        {
          h2: 'Pourquoi les collaborateurs partent : la cause liée à la formation',
          content:
            "Les raisons exprimées lors d'un départ et les raisons réelles sont rarement les mêmes.",
          h3Items: [
            {
              heading: 'Les nouvelles recrues apprennent sans filet',
              text: "La plupart des intégrations en hôtellerie se résument à quelques jours en doublon. Si le collègue observé travaille selon les bons standards, la recrue les adopte. Sinon, personne ne s'en aperçoit avant qu'un problème survienne. Aucun référentiel structuré, aucun support. Pour beaucoup de nouvelles recrues, la réponse logique est de partir avant d'être tenu responsable d'erreurs pour lesquelles on ne les a pas préparées.",
            },
            {
              heading: "Les collaborateurs expérimentés se désengagent quand rien n'est formalisé",
              text: "Un collaborateur présent depuis plusieurs années dans l'établissement, dont le savoir-faire n'a jamais été reconnu ni structuré, finit par se désintéresser. La compétence informelle devient invisible. La formation sur site change cette dynamique en donnant de la valeur à ce qui existe déjà.",
            },
            {
              heading: 'Reprendre sans expliquer décourage plus que cela ne corrige',
              text: "Dans les établissements sans procédures documentées, les managers reprennent les écarts dans l'instant, de façon incohérente, sans expliquer le sens du standard. Un collaborateur repris sans comprendre pourquoi développe du ressentiment plutôt qu'une envie de progresser.",
            },
          ],
        },
        {
          h2: 'Ce que la formation structurée change pour la stabilité des équipes',
          content:
            'La formation sur site ne fidélise pas les équipes en les rendant plus heureuses. Elle les stabilise en supprimant les conditions qui les poussent à partir.',
          h3Items: [
            {
              heading: 'La clarté remplace le flou',
              text: "Quand un collaborateur sait exactement ce qu'on attend de lui à chaque étape de son service, l'incertitude disparaît. Les équipes qui maîtrisent leurs standards performent mieux et restent plus longtemps. Le standard n'est plus une règle imposée : c'est quelque chose qu'ils ont appris et qu'ils comprennent.",
            },
            {
              heading: "La formation montre que l'établissement investit dans ses équipes",
              text: "Un établissement qui organise une formation structurée au niveau du département envoie un signal fort à chaque participant : vous méritez d’être accompagnés. Ce signal compte bien plus que la plupart des directions ne le mesurent, en particulier pour les collaborateurs dans leurs six premiers mois.",
            },
            {
              heading: "Tout le département se recale, pas seulement les nouvelles recrues",
              text: "L'un des effets les plus structurants de la formation sur site est de la conduire pour l'ensemble du département, y compris les collaborateurs en place depuis longtemps. Quand tout le monde est formé sur le même référentiel en même temps, les habitudes informelles accumulées d'un service à l'autre se réinitialisent, sans qu'on ait à pointer quelqu'un du doigt.",
            },
          ],
        },
        {
          h2: "Les conditions opérationnelles qui font rester les équipes",
          content:
            "La fidélisation ne passe pas par un programme d'avantages. Elle passe par un environnement de travail où les collaborateurs peuvent exercer leur métier correctement.",
          h3Items: [
            {
              heading: "Un support utilisable en autonomie",
              text: "Chaque session de formation doit se terminer avec les participants repartant avec un document de référence : une fiche procédure, une checklist, une section de playbook. Un collaborateur qui peut trouver une réponse sans solliciter son responsable gagne en assurance de service en service. L'assurance réduit l'envie de partir.",
            },
            {
              heading: "Des managers qui encadrent plutôt qu'ils ne répètent",
              text: "Dans les établissements sans formation structurée, les responsables passent une grande partie de leur temps à répondre aux mêmes questions procédurales et à corriger les mêmes écarts. Après une intervention de formation, les équipes travaillent sur un socle commun sans supervision permanente. Les managers peuvent réellement encadrer. Ce changement est perceptible dès les deux ou trois premiers services.",
            },
            {
              heading: "Des standards cohérents réduisent la fatigue qui use les équipes",
              text: "L’épuisement professionnel est rarement causé par le volume d’activité seul. Il vient du volume combiné à l’incohérence : compenser les pratiques différentes d’un collègue, gérer des réclamations dues à des standards variables, absorber les conséquences d’une équipe qui ne travaille pas sur le même référentiel. La formation traite cette cause à la racine.",
            },
          ],
        },
        {
          h2: "Ce qui change après une session de formation sur site",
          content:
            "Dans les premiers jours suivant une session structurée, la plupart des établissements observent les mêmes évolutions : moins de questions procédurales remontées aux responsables, une exécution plus homogène d'un service à l'autre, des nouvelles recrues qui prennent leurs marques plus vite. L'évolution chez les collaborateurs en place est souvent plus profonde. Des personnes qui appliquaient les procédures partiellement, ou qui avaient développé leurs propres contournements, reviennent au standard. Non pas parce qu'elles ont été reprises une nouvelle fois, mais parce qu'elles ont enfin compris pourquoi ce standard existe. Une équipe formée ensemble, sur ses propres procédures et ses propres standards de service, développe un langage commun. Les nouvelles recrues rejoignent cette équipe et adoptent naturellement le référentiel parce qu'il est visible et cohérent. C'est ainsi que la formation réduit le turn-over dans la durée : non pas grâce à une seule session, mais en créant les conditions dans lesquelles les collaborateurs choisissent de rester.",
        },
      ],
      conclusion:
        "Le turn-over ne se résout pas par de meilleures offres d'emploi. Il se résout en créant un environnement de travail où les équipes disposent des repères, des outils et de l'accompagnement nécessaires pour bien faire leur métier dès le premier service. La formation sur site est l'investissement le plus direct qu'un établissement puisse faire pour y parvenir.",
      cta: {
        text: 'Voir les formats de formation sur site',
        href: '/formation',
      },
      faqs: [
        {
          question: "À quelle vitesse la formation sur site agit-elle sur la stabilité des équipes ?",
          answer:
            "Les premiers effets sont opérationnels et s'observent en une à deux semaines : moins d'erreurs procédurales, moins de temps passé par les responsables à corriger les mêmes écarts, intégration plus rapide des nouvelles recrues. L'effet sur la fidélisation se construit sur les mois suivants à mesure que les équipes se stabilisent autour d'un référentiel commun.",
        },
        {
          question: "La formation structurée est-elle pertinente pour les petites équipes hôtelières ?",
          answer:
            "Oui. Dans les petites équipes, l'impact est souvent plus rapide car tout le département peut être formé en une seule session. L'absence de procédures écrites y est généralement plus marquée, ce qui rend le retour sur investissement d'une intervention sur site proportionnellement plus élevé.",
        },
        {
          question: "La formation sur site remplace-t-elle l'intégration des nouvelles recrues ?",
          answer:
            "Non. L'intégration présente une nouvelle recrue à l'établissement et à ses bases. La formation sur site réaligne l'ensemble des équipes, y compris les collaborateurs expérimentés, autour d'un référentiel cohérent. Les deux sont nécessaires. L'approche la plus efficace consiste à établir le standard par la formation, puis à intégrer les nouvelles recrues sur ce référentiel documenté.",
        },
      ],
    },
  },
  {
    slug: 'hotel-new-hire-onboarding',
    en: {
      title: 'Why new hires leave in the first 90 days, and what structured onboarding does differently',
      description:
        'Most hospitality new hires who quit do so within 90 days. Discover why unstructured onboarding drives early departures and what a proper onboarding program actually looks like.',
      date: '2026-04-30',
      readTime: '8 min read',
      intro:
        'The first 90 days are the highest-risk window in any hospitality hire. Industry data consistently shows that more than half of departures happen before an employee reaches their fourth month. That is not only a hiring problem. It is an onboarding problem. New hires leave not because the job does not match expectations, but because no one structured those expectations clearly from day one.',
      sections: [
        {
          h2: 'The real reason new hires leave before 90 days',
          content:
            'Most hotel operators frame early departures as a recruitment issue. The candidate was not the right fit, the salary was too low, the commute was too far. These explanations protect the operation from accountability but miss the root cause.\n\nEarly departures are overwhelmingly driven by confusion, not dissatisfaction. A new front desk agent who spends their first two weeks watching colleagues do things differently every shift, who has no written reference to fall back on, and who gets corrected without being given a standard, will start looking for an exit within weeks.\n\nThe absence of structure sends a clear signal to a new hire: this property does not run with precision. If the team they are joining cannot explain its own procedures, why would that employee invest long-term in that team?',
          h3Items: [
            {
              heading: 'The three signals that accelerate early departures',
              text: 'First, inconsistent onboarding: each manager runs induction differently, so the new hire learns a personal version of the job rather than the property standard. Second, no written procedures: the employee cannot self-correct because there is no reference, which increases their dependence on colleagues who may themselves be inconsistent. Third, early public correction: being corrected in front of guests or peers in the first days creates lasting anxiety that often translates into disengagement.',
            },
          ],
        },
        {
          h2: 'What structured onboarding actually means',
          content:
            'Structured onboarding is not a two-day welcome program. It is a documented, repeatable system that takes a new hire from their first day to full operational autonomy in a defined timeframe.\n\nFor a hotel, this means three things running in parallel: a written procedures library the new hire can consult independently, a phased learning path that progresses from observation to supervised practice to autonomous execution, and a feedback cadence that catches performance gaps early before they become habits.',
          h3Items: [
            {
              heading: 'The 30-60-90 day framework',
              text: 'Day 1 to 30: the new hire observes, shadows, and is introduced to documented procedures for every core task in their role. Day 31 to 60: supervised independent execution with structured feedback at the end of each shift. Day 61 to 90: full autonomy on standard tasks, with the supervisor\'s role shifting to quality-checking rather than instruction. Properties that follow this framework report significantly fewer early departures because the new hire always knows what comes next.',
            },
          ],
        },
        {
          h2: 'Why most hotel onboarding fails despite good intentions',
          content:
            'The most common failure is not a lack of effort. Managers spend real time with new hires. The failure is that this time is unstructured and therefore impossible to replicate at scale.\n\nWhen onboarding depends entirely on the manager\'s availability and personal approach, three problems follow. Consistency disappears the moment that manager changes shifts or leaves the property. The new hire cannot differentiate between the property standard and the manager\'s personal preference. And the entire integration process breaks down the moment operational pressure increases, which it always does.',
          h3Items: [
            {
              heading: 'The dependency trap',
              text: 'Unstructured onboarding creates dependency: the new hire learns to ask rather than refer. This is expensive for the manager and disempowering for the employee. Structured onboarding does the opposite: it gives the new hire a resource that does not disappear when the manager is off.',
            },
          ],
        },
        {
          h2: 'How on-site training integrates onboarding into daily operations',
          content:
            'On-site training is the most effective way to build a structured onboarding system because it is built around your actual property, your actual procedures, and your actual team dynamics.\n\nRather than delivering generic hospitality content, an on-site program documents the property\'s own standards, trains the team around those standards simultaneously, and creates the written reference library that new hires can use from their first week onward.',
          h3Items: [
            {
              heading: 'The compounding effect',
              text: 'When current team members and new hires are trained on the same documented standard at the same time, onboarding accelerates. The new hire arrives into a team that can reference procedures clearly, correct with precision, and model behavior consistently. The environment itself becomes the training system.',
            },
          ],
        },
      ],
      conclusion:
        'Early departures are predictable and preventable. The properties that retain new hires past 90 days are not the ones that pay more or hire better. They are the ones that have built a structured environment where a new hire knows what is expected, has a written reference to consult, and receives feedback against a clear standard. That structure is the output of a proper onboarding system, and it starts with the team that already exists.',
      cta: { text: 'Explore on-site training for your property', href: '/training' },
      faqs: [
        {
          question: 'How long does it take to build a structured hotel onboarding program?',
          answer:
            'Most properties can have a functional onboarding framework in place within two to four weeks. The critical components are documented procedures for each core role, a clear 30-60-90 day progression map, and a feedback structure for supervisors. On-site training typically accelerates this timeline because the procedures are documented and implemented simultaneously.',
        },
        {
          question: 'Can structured onboarding work in a property with high seasonal turnover?',
          answer:
            'Yes, and it matters more there. Seasonal properties with structured onboarding programs reactivate returning staff faster and integrate new seasonal hires more efficiently because the standard is documented rather than stored in individuals\' memory. The investment pays back every season.',
        },
        {
          question: 'What is the difference between onboarding and hotel staff training?',
          answer:
            'Onboarding is the process of integrating a new hire into their role and the property. Training is the ongoing development of the full team against a defined standard. Effective onboarding uses the same documented procedures that the existing team was trained on, which is why both work best when they come from the same system.',
        },
      ],
    },
    fr: {
      title: 'Pourquoi les nouvelles recrues décrochent dans les 90 premiers jours',
      description:
        "Plus de la moitié des départs surviennent avant le quatrième mois. Ce n’est pas seulement un problème de recrutement, c’est souvent un problème d’intégration. Voici ce qu’un vrai programme d’onboarding change concrètement.",
      date: '2026-04-30',
      readTime: '8 min de lecture',
      intro:
        "Les 90 premiers jours sont la période la plus critique dans le parcours d’un nouveau collaborateur. Les données sectorielles montrent régulièrement que plus de la moitié des départs surviennent avant le quatrième mois. Ce n’est pas seulement un problème de recrutement. C’est souvent un problème d’intégration. Les nouvelles recrues ne partent pas toujours parce que le poste ne correspond pas à leurs attentes, mais parce que personne n’a structuré ces attentes dès le premier jour.",
      sections: [
        {
          h2: 'La vraie raison des départs avant 90 jours',
          content:
            "Beaucoup de directions interprètent les départs précoces comme un problème de recrutement. Le profil n’était pas le bon, le salaire trop bas, le trajet trop long. Ces explications protègent l’établissement de toute remise en question opérationnelle, mais passent à côté de la cause réelle.\n\nLes départs précoces sont presque toujours provoqués par la confusion, pas par l’insatisfaction. Un nouveau collaborateur en réception qui passe ses deux premières semaines à observer des collègues faire les choses différemment à chaque shift, sans procédure écrite à consulter et sans référentiel clair, commence à chercher une sortie en quelques semaines.\n\nL’absence de structure envoie un signal précis à un nouveau collaborateur : cet établissement ne fonctionne pas avec rigueur. Si l’équipe qu’il rejoint est incapable d’expliquer ses propres procédures, pourquoi s’y investir sur le long terme ?",
          h3Items: [
            {
              heading: 'Les trois signaux qui accélèrent les départs précoces',
              text: "Premier signal : une intégration incohérente, où chaque responsable présente le poste à sa façon, si bien que la nouvelle recrue apprend une version personnelle du métier plutôt que le standard de l'établissement. Deuxième signal : l'absence de procédures écrites, qui empêche l'autocorrection et crée une dépendance aux collègues, eux-mêmes parfois incohérents. Troisième signal : les reprises publiques en début de poste, qui génèrent une anxiété durable se traduisant souvent par du désengagement.",
            },
          ],
        },
        {
          h2: "Ce que signifie réellement un onboarding structuré",
          content:
            "Un onboarding structuré n’est pas un programme d’accueil de deux jours. C’est un système documenté et reproductible qui accompagne un nouveau collaborateur de son premier jour jusqu’à l’autonomie opérationnelle complète, dans un délai défini.\n\nCela repose sur trois éléments qui avancent ensemble : une bibliothèque de procédures écrites que le collaborateur peut consulter de façon autonome, un parcours d’apprentissage progressif allant de l’observation à l’exécution supervisée puis autonome, et une structure de feedback qui détecte les écarts tôt, avant qu’ils ne deviennent des habitudes.",
          h3Items: [
            {
              heading: 'Le cadre 30-60-90 jours',
              text: "De j1 à j30 : le collaborateur observe, accompagne et prend connaissance des procédures documentées pour chaque tâche clé de son poste. De j31 à j60 : exécution autonome supervisée, avec un retour structuré en fin de shift. De j61 à j90 : autonomie complète sur les tâches standard, le rôle du responsable passant au contrôle qualité plutôt qu'à l'instruction. Les établissements qui appliquent ce cadre constatent nettement moins de départs précoces, car la nouvelle recrue sait toujours ce qui l'attend.",
            },
          ],
        },
        {
          h2: "Pourquoi la plupart des onboardings hôteliers échouent malgré les efforts",
          content:
            "L'échec le plus courant ne vient pas d'un manque d'efforts. Les responsables consacrent du temps réel aux nouvelles recrues. L'échec vient du fait que ce temps n'est pas structuré, et donc impossible à reproduire à l'échelle.\n\nQuand l'intégration repose entièrement sur la disponibilité et l'approche personnelle d'un responsable, trois problèmes surgissent inévitablement. La cohérence disparaît dès que ce responsable change de shift ou quitte l'établissement. La nouvelle recrue ne distingue pas le standard de l'établissement des préférences personnelles du responsable. Et tout le processus s'effondre dès que la pression opérationnelle monte, ce qui arrive toujours.",
          h3Items: [
            {
              heading: 'Le piège de la dépendance',
              text: "Un onboarding non structuré crée de la dépendance : le collaborateur apprend à demander plutôt qu'à consulter. C'est coûteux en temps pour le responsable et peu valorisant pour le collaborateur. Un onboarding structuré fait l'inverse : il donne à la nouvelle recrue une ressource disponible en permanence, même quand le responsable est absent.",
            },
          ],
        },
        {
          h2: "Comment la formation sur site intègre l'onboarding dans les opérations quotidiennes",
          content:
            "La formation sur site est le moyen le plus efficace de bâtir un système d'onboarding structuré, parce qu'elle est construite autour de votre établissement, vos procédures réelles et la dynamique de vos équipes.\n\nPlutôt que de délivrer un contenu générique de l'hôtellerie, une intervention sur site documente les standards propres à l'établissement, forme simultanément les équipes autour de ces standards et crée la bibliothèque de référence que les nouvelles recrues pourront utiliser dès leur première semaine.",
          h3Items: [
            {
              heading: "L'effet de capitalisation",
              text: "Quand les collaborateurs en poste et les nouvelles recrues sont formés simultanément sur le même référentiel documenté, l'intégration s'accélère. La nouvelle recrue arrive dans une équipe capable de référencer les procédures clairement, de corriger avec précision et de modéliser les comportements de façon cohérente. L'environnement devient lui-même le système de formation.",
            },
          ],
        },
      ],
      conclusion:
        "Les départs précoces sont prévisibles et évitables. Les établissements qui fidélisent leurs nouvelles recrues au-delà de 90 jours ne sont pas ceux qui paient mieux ou recrutent mieux. Ce sont ceux qui ont construit un environnement structuré dans lequel une nouvelle recrue sait ce qu'on attend d'elle, dispose d'une référence écrite à consulter et reçoit un retour clair basé sur un standard défini. Cette structure est le résultat d'un vrai système d'onboarding, et il commence par les équipes déjà en poste.",
      cta: { text: 'Découvrir la formation sur site', href: '/formation' },
      faqs: [
        {
          question: "Combien de temps faut-il pour mettre en place un onboarding structuré dans un hôtel ?",
          answer:
            "La plupart des établissements peuvent disposer d'un cadre d'intégration opérationnel en deux à quatre semaines. Les éléments essentiels sont des procédures documentées pour chaque poste clé, une progression claire sur 30-60-90 jours et une structure de feedback pour les responsables. La formation sur site accélère généralement ce délai car les procédures sont documentées et déployées simultanément.",
        },
        {
          question: "Un onboarding structuré fonctionne-t-il dans les établissements à fort turn-over saisonnier ?",
          answer:
            "Oui, et il y est encore plus utile. Les établissements saisonniers disposant d'un programme d'intégration structuré réactivent plus rapidement les collaborateurs récurrents et intègrent les nouvelles recrues saisonnières plus efficacement, parce que le standard est documenté plutôt que stocké dans la mémoire des individus. L'investissement est rentabilisé à chaque saison.",
        },
        {
          question: "Quelle est la différence entre l'onboarding et la formation hôtelière ?",
          answer:
            "L'onboarding est le processus qui intègre une nouvelle recrue dans son poste et dans l'établissement. La formation est le développement continu des équipes en place autour d'un standard défini. Un onboarding efficace s'appuie sur les mêmes procédures documentées sur lesquelles les équipes existantes ont été formées, ce qui explique pourquoi les deux fonctionnent mieux quand ils partagent le même référentiel.",
        },
      ],
    },
  },
  {
    slug: 'hotel-room-attendant-checklist',
    en: {
      title: 'Hotel Room Attendant Checklist: Daily SOP for Departure Rooms and Stayovers',
      description:
        'A practical room attendant checklist adapted from the LuxOps Housekeeping Playbook: trolley setup, room entry, departure room sequence, stayover service, DND and final self-inspection.',
      date: '2026-05-02',
      readTime: '9 min read',
      intro:
        'A room attendant checklist is useful only if it follows the real rhythm of the floor. It should start before the room is opened, with trolley setup and assignment review, then guide the attendant through room entry, departure room cleaning, stayover service, bathroom standards, Lost & Found, DND and final self-inspection. This article is adapted from the LuxOps Housekeeping Playbook and gives hotels a practical daily SOP for room attendants, not a generic cleaning list.',
      sections: [
        {
          h2: 'What a Room Attendant Checklist Should Actually Control',
          content:
            'A room attendant checklist should control three things: the sequence of work, the standard of finish and the handover to the supervisor. If it only lists items to clean, it misses the operational point. The checklist must help the attendant complete the room consistently and help the supervisor inspect it against the same standard.',
          h3Items: [
            {
              heading: 'Before the room',
              text: 'Review the assignment sheet, room status, VIP notes, special requests, early arrivals and maintenance alerts. A room attendant should not discover a VIP setup, connecting room or priority arrival only after entering the room.',
            },
            {
              heading: 'During the room',
              text: 'Follow the same physical sequence every time. For departure rooms, the LuxOps playbook uses seven phases: initial assessment, bathroom deep clean, bedroom cleaning, bed making, closet and storage, minibar and beverage area, final presentation.',
            },
            {
              heading: 'Before leaving',
              text: 'Complete a self-inspection from the guest perspective. The attendant can mark the room Clean, but the room is not ready for sale until a supervisor marks it Inspected after physical verification.',
            },
          ],
        },
        {
          h2: 'Pre-Shift Trolley Setup',
          content:
            'The housekeeping trolley is the room attendant’s mobile workstation. A poorly stocked trolley creates return trips, delays and shortcuts. The checklist should define the par level and layout before the first room is started.',
          h3Items: [
            {
              heading: 'Linen, amenities and chemicals',
              text: 'Stock linen by room type, prepare complete towel sets, fill toiletries, tissues, toilet paper, laundry bags and stationery, then verify all cleaning products before going to the floor.',
            },
            {
              heading: 'Color-coded microfiber',
              text: 'Use a color-coded system: blue for glass and chrome, yellow for general surfaces, green for bathroom surfaces and red for toilet areas. This prevents cross-contamination and makes training clearer.',
            },
          ],
        },
        {
          h2: 'Departure Room Cleaning: The 7-Phase SOP',
          content:
            'A departure room is the most complete room attendant task because the room must feel untouched for the next guest. The LuxOps target is 45 to 60 minutes for a standard departure room, with quality never sacrificed for speed.',
          h3Items: [
            {
              heading: 'Phase 1: initial assessment',
              text: 'Open curtains and lights, scan for guest belongings, damage, odor, heavy mess or maintenance issues. If a guest item is found, stop and follow Lost & Found immediately. Never assume an item is trash.',
            },
            {
              heading: 'Phase 2: bathroom deep clean',
              text: 'Work clean to dirty, top to bottom and dry to wet. Mirrors, vanity, sink, shower or bath, toilet and floor are cleaned in a fixed order. The bathroom must pass the no-hair-anywhere rule.',
            },
            {
              heading: 'Phases 3 to 7: room finish',
              text: 'Dust high to low, make the bed with a crisp symmetrical finish, check closet and safe, restock minibar and beverage items, align stationery and finish with a final doorway view.',
            },
          ],
        },
        {
          h2: 'Stayover Service Checklist',
          content:
            'Stayover service is not a lighter version of departure cleaning. It is a different procedure because the guest still owns the room. The goal is to refresh the space without disturbing personal belongings or preferences.',
          h3Items: [
            {
              heading: 'Respect guest belongings',
              text: 'Tidy without relocating. Pair shoes, straighten desk items, close books with a bookmark if available, but do not reorganize the guest’s belongings into a different system.',
            },
            {
              heading: 'Linen and towel decisions',
              text: 'Maintain bed linen unless soiled, requested or scheduled for change. Towels on the floor are replaced; towels hung on the rack are normally reused under the environmental program.',
            },
          ],
        },
        {
          h2: 'DND, Lost & Found and Final Self-Inspection',
          content:
            'The final part of the checklist protects privacy, security and room release quality. These are the steps that separate a professional housekeeping SOP from a simple cleaning list.',
          h3Items: [
            {
              heading: 'DND rule',
              text: 'If Do Not Disturb is displayed, do not knock and do not enter. Note the room, attempt contact at the property-defined time and document the result.',
            },
            {
              heading: 'Lost & Found rule',
              text: 'Do not move an item until its exact location, room number and condition are recorded. Valuables, documents, medication and perishable items need different storage and return rules.',
            },
            {
              heading: 'Final self-inspection',
              text: 'Stand at the door and view the room like the next guest: bed smooth, bathroom dry, no hair, no dust, amenities aligned, neutral scent and no unreported maintenance fault.',
            },
          ],
        },
      ],
      conclusion:
        'A strong room attendant checklist makes quality repeatable. It gives the attendant a fixed sequence, protects guest belongings, reduces missed details and gives the supervisor a clear basis for inspection.',
      cta: { text: 'View the Housekeeping Playbook', href: '/playbooks/hsk' },
      faqs: [
        {
          question: 'What is a room attendant checklist?',
          answer:
            'A room attendant checklist is a daily housekeeping SOP used to prepare the trolley, enter rooms correctly, clean departure rooms, refresh stayovers, manage DND and Lost & Found, and complete self-inspection.',
        },
        {
          question: 'How long should a room attendant take to clean a hotel room?',
          answer:
            'In the LuxOps Housekeeping Playbook, a standard departure room target is 45 to 60 minutes, a standard stayover is 25 to 35 minutes, and a deep clean is 90 to 120 minutes.',
        },
      ],
    },
    fr: {
      title: "Checklist équipier d'étage : SOP quotidienne pour chambres à blanc et recouches",
      description:
        "Checklist opérationnelle issue du Playbook Housekeeping LuxOps : chariot, entrée en chambre, chambre à blanc, recouche, DND, objets trouvés et auto-contrôle.",
      date: '2026-05-02',
      readTime: '9 min de lecture',
      intro:
        "Une checklist équipier d'étage n'est utile que si elle suit le rythme réel d'un étage. Elle doit commencer avant l'entrée en chambre, avec le chariot et la fiche de travail, puis guider l'équipier sur le protocole d'entrée, la chambre à blanc, la recouche, la salle de bain, les objets trouvés, le DND et l'auto-contrôle final. Cet article s'inspire du Playbook Housekeeping LuxOps et donne une SOP quotidienne exploitable, pas une simple liste de ménage.",
      sections: [
        {
          h2: "Ce qu'une checklist équipier d'étage doit contrôler",
          content:
            "Une checklist housekeeping doit contrôler trois choses : la séquence de travail, le niveau de finition et la passation au superviseur. Si elle se limite aux éléments à nettoyer, elle manque sa fonction opérationnelle. Elle doit aider l'équipier à terminer la chambre selon le standard et permettre à la gouvernante d'étage de contrôler sur la même base.",
          h3Items: [
            {
              heading: 'Avant la chambre',
              text: "Relire la fiche de travail, le statut des chambres, les VIP, les demandes spéciales, les arrivées prioritaires et les alertes maintenance. Un équipier d'étage ne doit pas découvrir une chambre VIP ou une arrivée anticipée une fois déjà en chambre.",
            },
            {
              heading: 'Pendant la chambre',
              text: "Pour une chambre à blanc, le playbook LuxOps utilise sept phases : évaluation initiale, nettoyage approfondi de la salle de bain, nettoyage de la chambre, confection du lit, penderie et rangements, minibar et zone boissons, présentation finale.",
            },
            {
              heading: 'Avant de sortir',
              text: "Réaliser l'auto-contrôle depuis la perspective du client. L'équipier peut passer la chambre en Propre, mais elle ne doit être libérée à la réception qu'après inspection physique et statut Inspecté par la gouvernante.",
            },
          ],
        },
        {
          h2: 'Mise en place du chariot',
          content:
            "Le chariot est le poste de travail mobile de l'équipier d'étage. Un chariot mal approvisionné crée des allers-retours, des retards et des raccourcis. La checklist doit définir le stock et l'organisation avant la première chambre.",
          h3Items: [
            {
              heading: 'Linge et produits',
              text: "Préparer draps, taies et housses selon les types de chambres. Charger serviettes, gants et tapis de bain en jeux complets, puis vérifier produits d'accueil, papier toilette, sacs de blanchisserie et papeterie.",
            },
            {
              heading: 'Microfibres',
              text: "Utiliser un code couleur clair : bleu pour vitres, miroirs et chromes, jaune pour les surfaces générales, vert pour les surfaces de salle de bain, rouge pour les toilettes.",
            },
          ],
        },
        {
          h2: 'Chambre à blanc : SOP en 7 phases',
          content:
            "La chambre à blanc est la prestation la plus complète, car la chambre doit sembler intacte pour le prochain client. Le repère LuxOps est de 45 à 60 minutes pour une chambre standard, sans jamais sacrifier la qualité à la rapidité.",
          h3Items: [
            {
              heading: 'Phase 1 : évaluation initiale',
              text: "Ouvrir rideaux et lumières, vérifier objets oubliés, dommages, odeurs, désordre important et problèmes de maintenance. Si un objet client est trouvé, arrêter le nettoyage et appliquer immédiatement la procédure objets trouvés.",
            },
            {
              heading: 'Phase 2 : salle de bain',
              text: "Travailler du propre vers le sale, du haut vers le bas, du sec vers l'humide. Miroirs, plan vasque, lavabo, douche ou baignoire, toilettes et sol suivent un ordre fixe. Le standard est simple : aucun cheveu, nulle part.",
            },
            {
              heading: 'Phases 3 à 7 : finitions chambre',
              text: "Dépoussiérer du haut vers le bas, faire le lit avec une finition lisse et symétrique, contrôler penderie et coffre, remettre minibar et zone boissons au standard, aligner la papeterie et terminer par le regard client depuis la porte.",
            },
          ],
        },
        {
          h2: 'Checklist recouche',
          content:
            "La recouche n'est pas une chambre à blanc plus rapide. C'est une procédure différente, car le client occupe encore son espace. L'objectif est de rafraîchir la chambre sans déranger ses affaires ni ses préférences.",
          h3Items: [
            {
              heading: 'Respect des affaires client',
              text: "Ranger sans déplacer inutilement. Apparier les chaussures, redresser les articles sur le bureau, fermer un livre avec un marque-page si disponible, mais ne pas réorganiser l'univers du client.",
            },
            {
              heading: 'Linge et serviettes',
              text: "Maintenir le linge de lit sauf s'il est sale, demandé ou prévu au planning. Les serviettes au sol sont remplacées ; les serviettes accrochées sont conservées selon le programme environnemental.",
            },
          ],
        },
        {
          h2: 'DND, objets trouvés et auto-contrôle',
          content:
            "La fin de checklist protège la vie privée, la sécurité et la qualité de libération. C'est ce qui distingue une vraie SOP housekeeping d'une simple liste de nettoyage.",
          h3Items: [
            {
              heading: 'Règle DND',
              text: "Si le panneau ou voyant DND est actif, ne pas frapper et ne pas entrer. Noter la chambre, tenter le contact à l'heure définie par l'établissement et documenter le résultat.",
            },
            {
              heading: 'Règle objets trouvés',
              text: "Ne pas déplacer l'objet avant d'avoir noté l'emplacement exact, le numéro de chambre et l'état. Objets de valeur, documents, médicaments et périssables suivent des règles de stockage et de restitution différentes.",
            },
            {
              heading: 'Auto-contrôle final',
              text: "Se placer à la porte et regarder la chambre comme le prochain client : lit lisse, salle de bain sèche, aucun cheveu, aucune poussière, amenities alignées, odeur neutre et aucun défaut maintenance non signalé.",
            },
          ],
        },
      ],
      conclusion:
        "Une bonne checklist équipier d'étage rend la qualité répétable. Elle donne une séquence fixe, protège les affaires du client, réduit les oublis et donne à la gouvernante une base claire d'inspection.",
      cta: { text: 'Voir le Playbook Housekeeping', href: '/playbooks/hsk' },
      faqs: [
        {
          question: "Qu'est-ce qu'une checklist équipier d'étage ?",
          answer:
            "C'est une SOP quotidienne utilisée par les femmes, valets ou équipiers d'étage pour préparer le chariot, entrer en chambre, réaliser une chambre à blanc, effectuer une recouche, gérer DND et objets trouvés, puis faire l'auto-contrôle.",
        },
        {
          question: "Combien de temps faut-il pour remettre une chambre d'hôtel ?",
          answer:
            "Dans le Playbook Housekeeping LuxOps, le repère est de 45 à 60 minutes pour une chambre à blanc standard, 25 à 35 minutes pour une recouche et 90 à 120 minutes pour un grand nettoyage.",
        },
      ],
    },
  },
  {
    slug: 'hotel-front-desk-checklist',
    en: {
      title: 'Hotel Front Desk Checklist: Shift Opening, Check-In, Check-Out and Handover',
      description:
        'A hotel front desk checklist adapted from the LuxOps Front Office Playbook: shift opening, arrivals, check-in, room not ready, check-out, billing and handover.',
      date: '2026-05-02',
      readTime: '8 min read',
      intro:
        'A hotel front desk checklist should protect the guest journey across the full shift, not just remind agents to smile. The desk controls arrivals, payments, room readiness, complaints, wake-up calls, billing, check-out and handover. This guide is adapted from the LuxOps Front Office Playbook and gives front desk agents and supervisors a practical shift checklist for daily use.',
      sections: [
        {
          h2: 'Shift Opening Checklist',
          content:
            'A front desk shift starts before the first guest arrives. The agent needs to know the business of the day: occupancy, arrivals, departures, VIPs, room status, open complaints and any operational risk carried over from the previous shift.',
          h3Items: [
            {
              heading: 'Review arrivals and departures',
              text: 'Check all arrivals in the PMS, expected arrival times, VIPs, special occasions, room preferences, early arrivals and special requests. Review departures, balances, late check-out requests and high-priority rooms for housekeeping.',
            },
            {
              heading: 'Check room readiness',
              text: 'Separate rooms in Clean status from rooms in Inspected status. A Clean room is not ready for assignment. Front desk should only assign rooms released by housekeeping as Inspected.',
            },
            {
              heading: 'Read the handover log',
              text: 'Review open complaints, pending guest requests, billing issues, room moves, maintenance flags, VIP notes and any decision that deviated from standard procedure.',
            },
          ],
        },
        {
          h2: 'Arrival and Check-In Checklist',
          content:
            'Check-in is the first operational test of the stay. A good checklist keeps the interaction warm while making sure identity, payment, room status and PMS updates are handled correctly.',
          h3Items: [
            {
              heading: 'Guest welcome',
              text: 'Stand up where appropriate, make eye contact, smile and use the guest name two to three times during the interaction. Confirm the reservation, dates, room type, rate and number of guests.',
            },
            {
              heading: 'Registration and payment',
              text: 'Verify ID, present the registration card or digital equivalent, confirm contact details, review requests, process pre-authorisation or payment and issue the correct number of keys.',
            },
            {
              heading: 'Room not ready',
              text: 'Store luggage, offer a waiting option, give a realistic time, collect a contact number and call the guest before they need to chase. Do not assign the room until housekeeping releases it as Inspected.',
            },
          ],
        },
        {
          h2: 'Check-Out and Billing Checklist',
          content:
            'Check-out closes the stay and protects revenue. The agent should verify the folio before taking payment, then close the invoice cleanly and notify housekeeping immediately after departure.',
          h3Items: [
            {
              heading: 'Invoice review',
              text: 'Verify room charges, F&B, minibar, spa or other services, deposits, prepayments, adjustments and taxes. Present the invoice clearly and give the guest time to review it before payment.',
            },
            {
              heading: 'Billing dispute',
              text: 'Listen, review documentation, explain clearly, escalate if the adjustment exceeds agent authority and document the outcome in the guest profile and handover log.',
            },
          ],
        },
        {
          h2: 'Communication, Recovery and Handover',
          content:
            'The front desk is the communication center of the property. The checklist should cover calls, transfers, wake-up calls, guest recovery and written handover.',
          h3Items: [
            {
              heading: 'Telephone and wake-up calls',
              text: 'Answer within three rings, ask permission before hold, never transfer a complaint without context, repeat wake-up call times back to the guest and add manual backup for critical departures.',
            },
            {
              heading: 'Guest recovery',
              text: 'Use LEARN: Listen, Empathise, Apologise, Resolve, Notify. Give a specific timeline and keep active complaints in every handover until closed.',
            },
            {
              heading: 'Shift handover',
              text: 'Pass on occupancy, arrivals, departures, VIPs, open complaints, pending requests, room moves, blocked rooms, high balances, late check-outs, maintenance issues and unusual decisions.',
            },
          ],
        },
      ],
      conclusion:
        'A front desk checklist is not admin. It is how the desk protects first impression, last impression, revenue, guest recovery and continuity between shifts.',
      cta: { text: 'View the Front Office Playbook', href: '/playbooks/fo' },
      faqs: [
        {
          question: 'What should be included in a hotel front desk checklist?',
          answer:
            'A hotel front desk checklist should include shift opening, arrivals, room readiness, check-in, payment, room not ready handling, check-out, billing disputes, guest recovery, telephone standards, wake-up calls and shift handover.',
        },
        {
          question: 'What should be in a front desk handover?',
          answer:
            'A complete handover includes occupancy, arrivals, departures, VIPs, open complaints, pending requests, room moves, blocked rooms, billing issues, late check-outs and maintenance flags.',
        },
      ],
    },
    fr: {
      title: 'Checklist réception hôtel : ouverture de shift, check-in, check-out et passation',
      description:
        'Checklist réception issue du Playbook Front Office LuxOps : prise de poste, arrivées, check-in, chambre non prête, check-out, litiges facture et passation.',
      date: '2026-05-02',
      readTime: '8 min de lecture',
      intro:
        "Une checklist réception ne sert pas seulement à rappeler de sourire au client. Elle protège le parcours client sur tout le shift : arrivées, paiements, statut des chambres, réclamations, appels réveil, facturation, check-out et passation. Ce guide s'inspire du Playbook Front Office LuxOps et propose une checklist de réception utilisable au quotidien par les réceptionnistes et chefs de réception.",
      sections: [
        {
          h2: 'Checklist de prise de poste',
          content:
            "Un shift réception commence avant le premier client. Le réceptionniste doit connaître l'activité du jour : occupation, arrivées, départs, VIP, statut des chambres, réclamations ouvertes et points sensibles transmis par le shift précédent.",
          h3Items: [
            {
              heading: 'Relire arrivées et départs',
              text: "Consulter les arrivées du jour dans le PMS : heures prévues, VIP, occasions spéciales, préférences de chambre, early check-in et demandes particulières. Revoir aussi les départs, soldes, late check-out et chambres prioritaires pour le housekeeping.",
            },
            {
              heading: 'Vérifier le statut des chambres',
              text: "Distinguer les chambres Propre des chambres Inspectée. Une chambre Propre n'est pas encore attribuable. La réception ne devrait attribuer que les chambres libérées par le housekeeping en statut Inspectée.",
            },
            {
              heading: 'Lire la passation',
              text: "Reprendre les réclamations ouvertes, demandes clients en attente, litiges de facturation, changements de chambre, alertes maintenance, notes VIP et décisions ayant dévié de la procédure standard.",
            },
          ],
        },
        {
          h2: 'Checklist arrivées et check-in',
          content:
            "Le check-in est le premier test opérationnel du séjour. La checklist doit permettre un accueil chaleureux tout en sécurisant identité, paiement, statut chambre et mise à jour PMS.",
          h3Items: [
            {
              heading: 'Accueil client',
              text: "Se lever si le standard de l'établissement le prévoit, établir le contact visuel, sourire et utiliser le nom du client deux à trois fois pendant l'interaction. Confirmer réservation, dates, type de chambre, tarif et nombre de clients.",
            },
            {
              heading: 'Enregistrement et paiement',
              text: "Vérifier la pièce d'identité, présenter la fiche d'enregistrement ou son équivalent digital, confirmer les coordonnées, revoir les demandes, traiter la Pre-Authorization ou le paiement et remettre le bon nombre de clés.",
            },
            {
              heading: 'Chambre non prête',
              text: "Conserver les bagages en lieu sûr, proposer une option d'attente, donner un délai réaliste, prendre un numéro de contact et rappeler le client avant qu'il ne relance. Ne pas attribuer la chambre avant le statut Inspectée.",
            },
          ],
        },
        {
          h2: 'Checklist check-out et facturation',
          content:
            "Le check-out clôture le séjour et protège le revenu. Le réceptionniste doit vérifier le folio avant encaissement, clôturer proprement la facture puis notifier immédiatement le housekeeping du départ.",
          h3Items: [
            {
              heading: 'Vérification de facture',
              text: "Contrôler frais de chambre, F&B, minibar, spa ou autres services, acomptes, prépaiements, ajustements et taxes. Présenter la facture clairement et laisser au client le temps de la vérifier avant paiement.",
            },
            {
              heading: 'Litige de facturation',
              text: "Écouter, examiner la documentation, expliquer chaque charge, escalader si l'ajustement dépasse le niveau d'autorisation, puis documenter la résolution dans le profil client et la passation.",
            },
          ],
        },
        {
          h2: 'Communication, réclamation et passation',
          content:
            "La réception est le centre de communication de l'établissement. La checklist doit couvrir appels, transferts, réveils, réclamations et passation écrite.",
          h3Items: [
            {
              heading: 'Téléphone et appels réveil',
              text: "Répondre dans les trois sonneries, demander l'autorisation avant une mise en attente, ne jamais transférer une réclamation sans contexte, répéter l'heure de réveil et prévoir un appel manuel pour les départs critiques.",
            },
            {
              heading: 'Réclamation client',
              text: "Utiliser LEARN : écouter, faire preuve d'empathie, s'excuser, résoudre, notifier. Donner un délai précis et maintenir les réclamations actives en passation jusqu'à clôture.",
            },
            {
              heading: 'Passation',
              text: "Transmettre occupation, arrivées, départs, VIP, réclamations ouvertes, demandes en attente, changements de chambre, chambres bloquées, soldes élevés, late check-out, problèmes maintenance et décisions inhabituelles.",
            },
          ],
        },
      ],
      conclusion:
        "Une checklist réception n'est pas de l'administratif. C'est ce qui protège la première impression, la dernière impression, le revenu, la récupération de service et la continuité entre shifts.",
      cta: { text: 'Voir le Playbook Front Office', href: '/playbooks/fo' },
      faqs: [
        {
          question: 'Que doit contenir une checklist réception hôtel ?',
          answer:
            "Elle doit couvrir prise de poste, arrivées, statut chambres, check-in, paiement, chambre non prête, check-out, litiges de facturation, réclamations, standard téléphonique, appels réveil et passation.",
        },
        {
          question: 'Que doit contenir une passation réception ?',
          answer:
            "Une passation complète inclut occupation, arrivées, départs, VIP, réclamations ouvertes, demandes en attente, changements de chambre, chambres bloquées, litiges facture, late check-out et alertes maintenance.",
        },
      ],
    },
  },
  {
    slug: 'hotel-dnd-procedure',
    en: {
      title: 'Hotel DND Procedure: Housekeeping Do Not Disturb SOP for Hotels',
      description:
        'A practical hotel DND procedure for housekeeping teams: Do Not Disturb rules, 2 PM contact, door message, documentation, supervisor escalation and 24-hour welfare check.',
      date: '2026-05-02',
      readTime: '7 min read',
      intro:
        'A Do Not Disturb sign looks simple, but the procedure behind it is one of the most important housekeeping SOPs in a hotel. The team must respect guest privacy while maintaining safety awareness, service continuity and accurate documentation. This guide is adapted from the LuxOps Housekeeping Playbook and shows how to manage DND rooms without improvisation.',
      sections: [
        {
          h2: 'The Core DND Rule',
          content:
            'When a Do Not Disturb sign or light is active, housekeeping does not knock and does not enter. The room is noted on the assignment sheet or housekeeping system, then revisited according to the property’s DND protocol.',
          h3Items: [
            {
              heading: 'Privacy first',
              text: 'DND is the guest’s explicit request for privacy. Ignoring it damages trust immediately, even if the intention was service.',
            },
            {
              heading: 'Safety still matters',
              text: 'Respecting privacy does not mean ignoring the room all day. The DND status must be documented and escalated if it continues beyond the normal service window.',
            },
          ],
        },
        {
          h2: 'Standard Daytime DND Procedure',
          content:
            'The LuxOps model uses a clear daytime flow: record the DND during the floor round, avoid entry, attempt contact at the defined time and document the result.',
          h3Items: [
            {
              heading: 'Morning floor round',
              text: 'Note all DND rooms during the floor walk. Continue to other rooms. Do not create pressure on the guest by knocking or waiting at the door.',
            },
            {
              heading: '2 PM contact attempt',
              text: 'At the property-defined time, often around 2:00 PM, call the room. If there is no answer, leave a discreet door message explaining how the guest can request service.',
            },
            {
              heading: 'Documentation',
              text: 'Record the room number, time, contact attempt, guest response if any, and whether service was accepted, declined or pending.',
            },
          ],
        },
        {
          h2: 'Door Message and Guest Communication',
          content:
            'The tone of a DND message matters. It should reassure the guest that privacy is respected while making it easy to request service later.',
          h3Items: [
            {
              heading: 'What the message should say',
              text: 'A good message states that housekeeping noticed the privacy sign, hopes the stay is going well, and invites the guest to contact the team or remove the sign when service is desired.',
            },
            {
              heading: 'What to avoid',
              text: 'Do not make the guest feel they did something wrong. Avoid language that sounds like pressure, warning or inconvenience to the hotel.',
            },
          ],
        },
        {
          h2: 'Extended DND and Welfare Check',
          content:
            'Extended DND is a safety procedure, not a housekeeping preference. If the sign remains active for 24 hours, the situation must be escalated.',
          h3Items: [
            {
              heading: 'Supervisor notification',
              text: 'The room attendant informs the supervisor immediately when the DND reaches the defined escalation threshold.',
            },
            {
              heading: 'Duty manager involvement',
              text: 'The supervisor contacts Front Desk or the duty manager. The manager attempts guest contact by phone or message before any physical check is considered.',
            },
            {
              heading: 'Welfare check',
              text: 'If there is no response, a welfare check is conducted by a manager with security or a second staff member, following property policy and local law. Every action is documented.',
            },
          ],
        },
        {
          h2: 'What to Include in the DND Log',
          content:
            'A DND log protects the guest, the team and the hotel. It creates a clear record of what happened and prevents the next shift from starting again with incomplete information.',
          h3Items: [
            {
              heading: 'Minimum fields',
              text: 'Room number, date, time observed, staff member, contact attempt, guest response, service status, supervisor notified and next action required.',
            },
            {
              heading: 'Handover',
              text: 'Unresolved DND rooms must appear in the housekeeping handover and, where needed, the Front Desk or duty manager log.',
            },
          ],
        },
      ],
      conclusion:
        'A hotel DND procedure protects privacy and safety at the same time. The rule is not complicated: do not knock, do not enter, document, contact at the defined time and escalate extended DND through the supervisor and duty manager.',
      cta: { text: 'View the Housekeeping Playbook', href: '/playbooks/hsk' },
      faqs: [
        {
          question: 'What does DND mean in hotel housekeeping?',
          answer:
            'DND means Do Not Disturb. It indicates that the guest does not want housekeeping or hotel staff to knock or enter the room during that period.',
        },
        {
          question: 'Should housekeeping knock when DND is displayed?',
          answer:
            'No. If DND is displayed, housekeeping should not knock and should not enter. The room should be documented and handled according to the hotel’s DND procedure.',
        },
      ],
    },
    fr: {
      title: 'Procédure DND hôtel : SOP Housekeeping pour les chambres Ne pas déranger',
      description:
        "Procédure DND issue du Playbook Housekeeping LuxOps : règle Ne pas déranger, contact à 14h, message sous la porte, documentation, escalade et contrôle sécurité après 24h.",
      date: '2026-05-02',
      readTime: '7 min de lecture',
      intro:
        "Un panneau Ne pas déranger semble simple, mais la procédure derrière est l'une des SOP housekeeping les plus importantes d'un hôtel. L'équipe doit respecter la vie privée du client tout en maintenant la vigilance sécurité, la continuité de service et une documentation claire. Ce guide s'inspire du Playbook Housekeeping LuxOps et montre comment gérer les chambres DND sans improvisation.",
      sections: [
        {
          h2: 'La règle DND fondamentale',
          content:
            "Lorsqu'un panneau ou voyant DND est actif, le housekeeping ne frappe pas et n'entre pas. La chambre est notée sur la fiche de travail ou dans le système housekeeping, puis reprise selon le protocole DND de l'établissement.",
          h3Items: [
            {
              heading: "Respect de la vie privée d'abord",
              text: "Le DND est une demande explicite de tranquillité. L'ignorer détruit immédiatement la confiance, même si l'intention était de rendre service.",
            },
            {
              heading: 'Vigilance sécurité',
              text: "Respecter la vie privée ne signifie pas oublier la chambre toute la journée. Le statut DND doit être documenté et escaladé s'il dépasse la fenêtre normale de service.",
            },
          ],
        },
        {
          h2: 'Procédure DND standard en journée',
          content:
            "Le modèle LuxOps suit un flux simple : noter le DND pendant la ronde, ne pas entrer, tenter le contact à l'heure définie et documenter le résultat.",
          h3Items: [
            {
              heading: 'Ronde du matin',
              text: "Noter toutes les chambres DND lors de la ronde de couloir. Continuer les autres chambres. Ne pas créer de pression en frappant ou en restant devant la porte.",
            },
            {
              heading: 'Tentative de contact à 14h',
              text: "À l'heure définie par l'établissement, souvent autour de 14h00, appeler la chambre. Sans réponse, laisser un message discret sous la porte indiquant comment demander le service.",
            },
            {
              heading: 'Documentation',
              text: "Tracer le numéro de chambre, l'heure, la tentative de contact, la réponse du client si elle existe, et le statut : service accepté, refusé ou en attente.",
            },
          ],
        },
        {
          h2: 'Message sous la porte et communication client',
          content:
            "Le ton du message DND est important. Il doit rassurer le client sur le respect de sa tranquillité tout en rendant la demande de service simple.",
          h3Items: [
            {
              heading: 'Ce que le message doit dire',
              text: "Un bon message indique que le housekeeping a constaté le panneau Ne pas déranger, espère que le séjour se déroule agréablement et invite le client à contacter l'équipe ou retirer le panneau quand il souhaite le service.",
            },
            {
              heading: 'Ce qu’il faut éviter',
              text: "Ne pas donner au client l'impression qu'il a mal fait. Éviter tout ton de pression, d'avertissement ou de gêne pour l'hôtel.",
            },
          ],
        },
        {
          h2: 'DND prolongé et contrôle sécurité',
          content:
            "Un DND prolongé relève de la sécurité, pas d'une préférence housekeeping. Si le panneau reste actif pendant 24 heures, la situation doit être escaladée.",
          h3Items: [
            {
              heading: 'Information superviseur',
              text: "L'équipier informe immédiatement la gouvernante ou le superviseur lorsque le DND atteint le seuil d'escalade défini.",
            },
            {
              heading: 'Intervention du manager en duty',
              text: "Le superviseur contacte la réception ou le manager en duty. Le manager tente de joindre le client par téléphone ou message avant tout contrôle physique.",
            },
            {
              heading: 'Contrôle sécurité',
              text: "Sans réponse, un contrôle est réalisé par un manager avec la sécurité ou un second collaborateur, selon la politique de l'établissement et la réglementation locale. Chaque action est documentée.",
            },
          ],
        },
        {
          h2: 'Que tracer dans le registre DND',
          content:
            "Un registre DND protège le client, l'équipe et l'établissement. Il crée une trace claire et évite que le shift suivant reparte avec une information incomplète.",
          h3Items: [
            {
              heading: 'Champs minimum',
              text: "Numéro de chambre, date, heure constatée, collaborateur, tentative de contact, réponse client, statut du service, superviseur informé et prochaine action.",
            },
            {
              heading: 'Passation',
              text: "Toute chambre DND non résolue doit apparaître dans la passation housekeeping et, si nécessaire, dans la main courante réception ou duty manager.",
            },
          ],
        },
      ],
      conclusion:
        "Une procédure DND protège à la fois la vie privée et la sécurité. La règle est simple : ne pas frapper, ne pas entrer, documenter, contacter à l'heure définie et escalader les DND prolongés via le superviseur et le manager en duty.",
      cta: { text: 'Voir le Playbook Housekeeping', href: '/playbooks/hsk' },
      faqs: [
        {
          question: 'Que signifie DND en housekeeping hôtelier ?',
          answer:
            "DND signifie Do Not Disturb, ou Ne pas déranger. Cela indique que le client ne souhaite pas que le housekeeping ou un collaborateur de l'hôtel frappe ou entre dans la chambre pendant cette période.",
        },
        {
          question: 'Le housekeeping doit-il frapper si le DND est affiché ?',
          answer:
            "Non. Si le DND est affiché, le housekeeping ne doit pas frapper et ne doit pas entrer. La chambre doit être documentée et traitée selon la procédure DND de l'établissement.",
        },
      ],
    },
  },
  {
    slug: 'hotel-room-cleaning-checklist',
    en: {
      title: 'Hotel Room Cleaning Checklist: Departure Room, Stayover and Final Self-Check',
      description:
        'A playbook-based hotel room cleaning checklist for housekeeping teams: trolley setup, room entry, departure room sequence, stayover service, bathroom standards and final self-inspection.',
      date: '2026-05-03',
      readTime: '9 min read',
      intro:
        'A hotel room cleaning checklist should follow the way a room is actually serviced on shift. The LuxOps Housekeeping Playbook separates preparation, room entry, departure cleaning, stayover service, deep cleaning, DND and final self-inspection. This free extract gives housekeeping teams a practical structure for Room Attendants, supervisors and managers who need consistency without turning the room into a box-ticking exercise.',
      sections: [
        {
          h2: 'Start before the room: trolley, assignment and priorities',
          content:
            'Most cleaning mistakes begin before the Room Attendant enters the room. A poorly stocked trolley creates delays, skipped steps and repeated returns to the pantry. The daily assignment sheet should be reviewed before service begins: departure rooms, stayovers, VIPs, early arrivals, late check-outs, DND rooms, maintenance alerts and special requests.',
          h3Items: [
            {
              heading: 'Trolley setup',
              text: 'Stock fitted sheets, flat sheets, pillowcases, duvet covers, bath towels, hand towels, bath mats, amenities, toilet paper, tissues, laundry bags, glass cleaner, bathroom disinfectant, furniture polish and colour-coded microfibre cloths before leaving the pantry.',
            },
            {
              heading: 'Priority order',
              text: 'Early arrivals, VIP rooms and rooms with confirmed ETAs come first. A room needed by Front Office should never wait behind a low-priority stayover unless the supervisor has made that decision.',
            },
          ],
        },
        {
          h2: 'Use a professional room entry protocol',
          content:
            'The room entry sequence protects privacy and reduces incidents. The standard LuxOps sequence is simple: park the trolley against the wall, knock three times, announce Housekeeping, wait 10 seconds, repeat, open the door partially and announce again before entering slowly.',
          h3Items: [
            {
              heading: 'If the guest is present',
              text: 'Do not push the service. Ask whether the guest would like the room serviced now or later, confirm the preferred time and record the request if the timing changes.',
            },
            {
              heading: 'If DND is displayed',
              text: 'Do not knock and do not enter. Record the DND, continue the assignment and follow the property contact protocol at the defined time.',
            },
          ],
        },
        {
          h2: 'Departure room cleaning: the 7-phase sequence',
          content:
            'A departure room is the full reset of the guest room. The LuxOps standard uses a 45-60 minute target for a standard room and a fixed seven-phase sequence. The sequence matters because it prevents rework and keeps quality consistent from one attendant to another.',
          h3Items: [
            {
              heading: '1. Initial assessment',
              text: 'Open curtains, turn on lights, ventilate if possible, scan for damage, odour, guest belongings, maintenance issues and unusual conditions. If guest belongings are found, stop and follow Lost & Found immediately.',
            },
            {
              heading: '2. Bathroom deep clean',
              text: 'Work clean to dirty, top to bottom: mirror, vanity, sink, shower or tub, toilet, floor and full amenity setup. No hair anywhere is the non-negotiable standard.',
            },
            {
              heading: '3. Bedroom cleaning',
              text: 'Dust high to low: vents, lamps, frames, headboard, nightstands, desk, TV, mirrors, plinths and door frames. Test lights, TV, remote, clock, phone and HVAC.',
            },
            {
              heading: '4. Bed making',
              text: 'Inspect mattress protector, apply tight sheets, centre the duvet, smooth every surface and position pillows symmetrically. The bed is the strongest visual signal in the room.',
            },
            {
              heading: '5-7. Storage, minibar and final presentation',
              text: 'Check wardrobe, safe, robes, slippers, minibar, glasses, stationery, curtains, scent, temperature and the final view from the entry door.',
            },
          ],
        },
        {
          h2: 'Stayover rooms need different rules',
          content:
            'A stayover is not a lighter departure room. The guest still owns the space. The Room Attendant refreshes the room while respecting personal belongings, observed preferences and the property linen policy.',
          h3Items: [
            {
              heading: 'What changes',
              text: 'Linens are maintained unless soiled, requested or due for change. Guest items are straightened only when needed and never reorganised. Amenities are replaced when consumed, not automatically reset like a departure.',
            },
            {
              heading: 'Timing standard',
              text: 'A standard stayover usually targets 25-35 minutes. Suites and complex rooms require more time, especially when the guest has settled in for a long stay.',
            },
          ],
        },
        {
          h2: 'Final self-check before leaving',
          content:
            'The Room Attendant owns the first quality gate. Before updating the status, stand at the entry door and inspect the room as the next guest would.',
          h3Items: [
            {
              heading: 'Bedroom quick scan',
              text: 'Bed smooth and symmetrical, surfaces dust-free, mirrors streak-free, curtains aligned, floor clean, wardrobe organised and no guest belongings left behind.',
            },
            {
              heading: 'Bathroom quick scan',
              text: 'Toilet spotless, sink polished, mirror streak-free, floor dry, no hair in corners or behind the toilet, towels folded correctly and amenities aligned.',
            },
          ],
        },
      ],
      conclusion:
        'A strong hotel room cleaning checklist does not replace training. It protects the training. It gives every Room Attendant the same order, every supervisor the same control points and every arriving guest the same first impression.',
      cta: { text: 'View the Housekeeping Playbook', href: '/playbooks/hsk' },
      faqs: [
        {
          question: 'How long should it take to clean a hotel room?',
          answer:
            'The LuxOps benchmark is 45-60 minutes for a standard departure room, 25-35 minutes for a standard stayover and 90-120 minutes for a deep clean. Suites require more time depending on size and setup.',
        },
        {
          question: 'What is the difference between a departure room and a stayover?',
          answer:
            'A departure room is fully reset for the next guest. A stayover is refreshed while respecting the current guest’s belongings and preferences. The SOP, timing and inspection rules should be different.',
        },
      ],
    },
    fr: {
      title: 'Checklist de nettoyage de chambre d’hôtel : chambre à blanc, recouche et auto-contrôle',
      description:
        'Checklist de nettoyage de chambre d’hôtel issue du Playbook Housekeeping LuxOps : chariot, entrée en chambre, chambre à blanc, recouche, salle de bain, lit et auto-contrôle final.',
      date: '2026-05-03',
      readTime: '9 min de lecture',
      intro:
        'Une checklist de nettoyage de chambre doit suivre le vrai déroulé du shift, pas une liste générique de tâches copiée-collée. Dans un service de housekeeping, la qualité se joue souvent avant même d’entrer dans la chambre : chariot prêt, feuille de route comprise, priorités claires, puis chambre à blanc ou recouche selon le statut. Cet extrait du Playbook Housekeeping LuxOps reprend cette logique terrain, avec une séquence utilisable par les Room Attendants, les gouvernantes et les managers.',
      sections: [
        {
          h2: 'Commencer avant la chambre : chariot, feuille de route et priorités',
          content:
            'Beaucoup d’erreurs dans le service de housekeeping commencent avant l’entrée en chambre. Un chariot incomplet crée des allers-retours, des oublis et de la pression inutile. Avant de monter en étage, la feuille de route doit être relue calmement : chambres à blanc, recouches, VIP, arrivées anticipées, départs tardifs, DND, alertes maintenance et demandes spéciales.',
          h3Items: [
            {
              heading: 'Préparation du chariot',
              text: 'Prévoir draps housse, draps plats, taies, housses de couette, linge de bain, tapis de bain, amenities, papier toilette, mouchoirs, sacs de blanchisserie, nettoyant vitres, désinfectant salle de bain, polish et microfibres avec code couleur.',
            },
            {
              heading: 'Ordre de priorité',
              text: 'Les arrivées anticipées, chambres VIP et chambres avec ETA confirmé passent en priorité. Une chambre attendue par la réception ne doit pas rester derrière une recouche moins urgente sauf arbitrage de la gouvernante.',
            },
          ],
        },
        {
          h2: 'Respecter le protocole d’entrée en chambre',
          content:
            'Le protocole d’entrée protège la vie privée du client et évite les situations inconfortables. La séquence LuxOps est volontairement simple : positionner le chariot contre le mur, frapper trois fois, annoncer clairement le service Housekeeping, attendre 10 secondes, répéter, ouvrir partiellement puis annoncer à nouveau avant d’entrer lentement.',
          h3Items: [
            {
              heading: 'Client présent',
              text: 'Ne pas imposer le service. Demander si le client souhaite que la chambre soit faite maintenant ou plus tard, confirmer l’horaire et tracer la demande si le timing change.',
            },
            {
              heading: 'DND affiché',
              text: 'Ne pas frapper et ne pas entrer. Noter la chambre DND, poursuivre la feuille de route et appliquer le protocole de contact à l’heure définie par l’établissement.',
            },
          ],
        },
        {
          h2: 'Chambre à blanc : la séquence en 7 phases',
          content:
            'Une chambre à blanc est une remise en état complète pour le prochain client. Le standard LuxOps prévoit 45 à 60 minutes pour une chambre standard, avec une séquence fixe en sept phases. Cet ordre évite les retours arrière, limite les oublis et rend la qualité plus constante d’un Room Attendant à l’autre.',
          h3Items: [
            {
              heading: '1. Évaluation initiale',
              text: 'Ouvrir rideaux et lumières, ventiler si possible, repérer odeur, dommage, objet oublié, anomalie maintenance ou condition inhabituelle. Si un objet client est trouvé, arrêter et appliquer la procédure objets trouvés.',
            },
            {
              heading: '2. Salle de bain',
              text: 'Travailler du propre vers le sale et du haut vers le bas : miroir, plan vasque, lavabo, douche ou baignoire, toilettes, sol et mise en place complète des amenities. En salle de bain, aucun cheveu n’est acceptable.',
            },
            {
              heading: '3. Chambre',
              text: 'Dépoussiérer du haut vers le bas : grilles, luminaires, cadres, tête de lit, chevets, bureau, TV, miroirs, plinthes et portes. Tester éclairage, TV, télécommande, réveil, téléphone et climatisation.',
            },
            {
              heading: '4. Lit',
              text: 'Contrôler le protège-matelas, tendre les draps, centrer la couette, lisser les surfaces et positionner les oreillers de façon symétrique. Le lit porte la première impression visuelle.',
            },
            {
              heading: '5-7. Penderie, minibar et présentation finale',
              text: 'Contrôler penderie, coffre, peignoirs, chaussons, minibar, verres, papeterie, rideaux, odeur, température et vue finale depuis la porte.',
            },
          ],
        },
        {
          h2: 'La recouche suit d’autres règles',
          content:
            'Une recouche n’est pas une chambre à blanc raccourcie. Le client occupe toujours l’espace, et cela change tout. Le Room Attendant rafraîchit la chambre en respectant les effets personnels, les préférences observées et la politique de linge de l’établissement.',
          h3Items: [
            {
              heading: 'Ce qui change',
              text: 'Le linge de lit est maintenu sauf s’il est sale, demandé ou prévu au planning. Les effets personnels du client sont redressés seulement si nécessaire, jamais réorganisés. Les amenities sont remplacés lorsqu’ils sont consommés.',
            },
            {
              heading: 'Temps cible',
              text: 'Une recouche standard vise généralement 25 à 35 minutes. Les suites et longs séjours nécessitent plus de temps, surtout lorsque le client s’est installé dans la chambre.',
            },
          ],
        },
        {
          h2: 'Auto-contrôle avant de quitter la chambre',
          content:
            'Le Room Attendant porte le premier contrôle qualité. Avant de mettre à jour le statut, il doit se placer à la porte et regarder la chambre comme le ferait le prochain client en entrant.',
          h3Items: [
            {
              heading: 'Scan chambre',
              text: 'Lit lisse et symétrique, surfaces sans poussière, miroirs sans traces, rideaux alignés, sol propre, penderie organisée et aucun objet client oublié.',
            },
            {
              heading: 'Scan salle de bain',
              text: 'Toilettes impeccables, lavabo et robinetterie polis, miroir sans traces, sol sec, aucun cheveu dans les coins ou derrière les toilettes, serviettes bien pliées et amenities alignés.',
            },
          ],
        },
      ],
      conclusion:
        'Une bonne checklist de nettoyage de chambre ne remplace pas la formation. Elle la protège. Elle donne le même ordre à chaque Room Attendant, les mêmes points de contrôle à chaque gouvernante et la même première impression à chaque client.',
      cta: { text: 'Voir le Playbook Housekeeping', href: '/playbooks/hsk' },
      faqs: [
        {
          question: 'Combien de temps faut-il pour nettoyer une chambre d’hôtel ?',
          answer:
            'Le repère LuxOps est de 45 à 60 minutes pour une chambre à blanc standard, 25 à 35 minutes pour une recouche et 90 à 120 minutes pour un deep cleaning. Les suites demandent plus de temps selon leur taille.',
        },
        {
          question: 'Quelle différence entre chambre à blanc et recouche ?',
          answer:
            'La chambre à blanc est une remise en état complète pour le prochain client. La recouche rafraîchit une chambre occupée en respectant les affaires et préférences du client. SOP, timing et inspection doivent être différents.',
        },
      ],
    },
  },
  {
    slug: 'hotel-housekeeping-supervisor-checklist',
    en: {
      title: 'Hotel Housekeeping Supervisor Checklist: Room Inspection, Release and Coaching',
      description:
        'A hotel housekeeping supervisor checklist for departure room inspection, Clean vs Inspected status, stayover spot checks, defect tracking and team coaching.',
      date: '2026-05-03',
      readTime: '8 min read',
      intro:
        'The housekeeping supervisor is the quality gate between a room that looks clean and a room that can be sold. In the LuxOps Housekeeping Playbook, a Room Attendant marks the room Clean, but only a supervisor or manager can release it as Inspected. This checklist is built for that control moment: inspection, release, defect tracking and coaching.',
      sections: [
        {
          h2: 'The supervisor’s first rule: Clean is not sellable',
          content:
            'The most important housekeeping status rule is also the easiest to break under check-in pressure. A room in Clean status has been serviced by the Room Attendant, but it is not ready for assignment. Only an Inspected room may be released to Front Office.',
          h3Items: [
            {
              heading: 'Clean',
              text: 'Set by the Room Attendant after cleaning and self-inspection. The room still requires physical verification.',
            },
            {
              heading: 'Inspected',
              text: 'Set by the supervisor after checklist inspection. Front Office may now assign the room to an arriving guest.',
            },
            {
              heading: 'Failed inspection',
              text: 'The attendant corrects the issue immediately, the supervisor re-inspects, and the deficiency is recorded for coaching.',
            },
          ],
        },
        {
          h2: 'Start-of-shift supervisor checklist',
          content:
            'The supervisor’s day starts before the first inspection. The floor must be organised around departures, arrivals, VIPs, staffing and room readiness pressure.',
          h3Items: [
            {
              heading: 'Review the operational picture',
              text: 'Check departures, arrivals, VIPs, early arrivals, late check-outs, room moves, DND rooms, maintenance blocks and any rooms linked to prior complaints.',
            },
            {
              heading: 'Allocate fairly and visibly',
              text: 'Assign room blocks according to room type, departure count, suite workload, staff experience and priority deadlines. Make the priority order clear to the team.',
            },
            {
              heading: 'Check readiness',
              text: 'Verify trolley stock, pantry levels, linen availability, amenities, chemicals, equipment and any special setup required for VIP rooms.',
            },
          ],
        },
        {
          h2: 'Departure room inspection sequence',
          content:
            'The inspection should be fast, consistent and physical. The LuxOps sequence starts at the doorway and follows the guest’s first impression through bedroom, bathroom, technology and final exit view.',
          h3Items: [
            {
              heading: 'Entry assessment',
              text: 'Stand at the doorway for five seconds. Temperature, scent, lighting and overall presentation should feel arrival-ready immediately.',
            },
            {
              heading: 'Bedroom check',
              text: 'Bed smooth and symmetrical, pillows aligned, surfaces dust-free, wardrobe empty, safe open, windows clean, curtains aligned, lights working, floor and under-bed edges clean.',
            },
            {
              heading: 'Bathroom check',
              text: 'Toilet clean inside, outside, base and behind. Basin polished. Shower free of residue. Floor dry. No hair anywhere. Towels and amenities positioned to standard.',
            },
            {
              heading: 'Details and technology',
              text: 'Clock, TV, remote, phone, HVAC, minibar, stationery, guest directory and maintenance issues are checked before release.',
            },
          ],
        },
        {
          h2: 'Scoring and defect tracking',
          content:
            'Inspection data should make coaching easier. A simple 100-point model keeps the review objective: bathroom 35, bedroom 35, presentation 20 and maintenance 10. The pass threshold is 90.',
          h3Items: [
            {
              heading: 'What to track',
              text: 'Room number, attendant, defect type, shift, time, pass or fail, corrective action and whether the issue is recurring.',
            },
            {
              heading: 'How to use the data',
              text: 'Review the top three recurring issues weekly. If the same defect appears across several attendants, train the team. If one room repeats, investigate maintenance or deep cleaning needs.',
            },
          ],
        },
      ],
      conclusion:
        'A housekeeping supervisor checklist is not a policing tool. It is the system that protects arriving guests, supports Room Attendants and gives Front Office confidence that an assigned room is genuinely ready.',
      cta: { text: 'View the Housekeeping Playbook', href: '/playbooks/hsk' },
      faqs: [
        {
          question: 'Should every hotel departure room be inspected?',
          answer:
            'For luxury and high-standard properties, yes. The LuxOps standard is 100% supervisor inspection of departure rooms before they are released as Inspected.',
        },
        {
          question: 'What percentage of stayover rooms should supervisors check?',
          answer:
            'The LuxOps benchmark is 20-30% of stayover rooms daily, prioritising new attendants, VIP rooms, long stays and rooms linked to prior complaints.',
        },
      ],
    },
    fr: {
      title: 'Checklist pour gouvernante d’hôtel : inspection chambre, libération et coaching',
      description:
        'Checklist pour gouvernante d’hôtel issue du Playbook Housekeeping LuxOps : inspection chambre départ, statut Clean/Inspected, contrôles de recouche, suivi des défauts et coaching.',
      date: '2026-05-03',
      readTime: '8 min de lecture',
      intro:
        'La gouvernante est le point de contrôle entre une chambre qui paraît propre et une chambre réellement attribuable. Dans le Playbook Housekeeping LuxOps, le Room Attendant passe la chambre en Clean après son service, mais seule la gouvernante ou le manager peut la libérer en Inspected. Cette checklist reprend ce moment critique du service de housekeeping : inspection, libération, suivi des défauts et coaching.',
      sections: [
        {
          h2: 'Première règle : Clean n’est pas vendable',
          content:
            'La règle de statut chambre la plus importante est aussi celle qui saute le plus vite sous pression check-in. Une chambre en Clean a été faite par le Room Attendant, mais elle n’est pas encore attribuable. Seule une chambre passée en Inspected peut être libérée pour la réception.',
          h3Items: [
            {
              heading: 'Clean',
              text: 'Statut posé par le Room Attendant après nettoyage et auto-contrôle. La chambre nécessite encore une vérification physique.',
            },
            {
              heading: 'Inspected',
              text: 'Statut posé par la gouvernante après inspection avec checklist. La réception peut alors attribuer la chambre à un client arrivant.',
            },
            {
              heading: 'Non conforme',
              text: 'L’équipier corrige immédiatement, la gouvernante réinspecte et le défaut est tracé pour coaching.',
            },
          ],
        },
        {
          h2: 'Checklist de gouvernante en début de shift',
          content:
            'La journée de la gouvernante commence avant la première inspection. L’étage doit être organisé selon les départs, les arrivées, les VIP, les effectifs présents et la pression de libération des chambres.',
          h3Items: [
            {
              heading: 'Lire la situation opérationnelle',
              text: 'Contrôler les départs, les arrivées, les VIP, les arrivées anticipées, les départs tardifs, les room moves, les DND, les chambres hors service et les chambres liées à une réclamation récente.',
            },
            {
              heading: 'Distribuer clairement',
              text: 'Affecter les chambres selon le type de chambre, le nombre de départs, les suites, le niveau d’expérience de l’équipe, les contraintes horaires et les priorités de la réception.',
            },
            {
              heading: 'Vérifier la préparation',
              text: 'Contrôler chariots, offices, linge, amenities, produits, matériel et mises en place spécifiques VIP.',
            },
          ],
        },
        {
          h2: 'Séquence d’inspection chambre départ',
          content:
            'L’inspection doit être rapide, cohérente et physique. La séquence LuxOps commence depuis la porte et suit la logique de la première impression client : chambre, salle de bain, équipements techniques, puis regard final.',
          h3Items: [
            {
              heading: 'Première impression',
              text: 'Se placer à la porte pendant quelques secondes. Température, odeur, lumière et présentation doivent donner immédiatement une impression prête à l’arrivée.',
            },
            {
              heading: 'Contrôle chambre',
              text: 'Lit lisse et symétrique, oreillers alignés, surfaces sans poussière, placard vide, coffre ouvert, fenêtres propres, rideaux droits, éclairages fonctionnels, sol et dessous de lit propres.',
            },
            {
              heading: 'Contrôle salle de bain',
              text: 'Toilettes propres à l’intérieur, à l’extérieur, à la base et à l’arrière. Lavabo poli. Douche sans résidus. Sol sec. Aucun cheveu. Serviettes et amenities positionnés selon le standard.',
            },
            {
              heading: 'Détails et technique',
              text: 'Réveil, TV, télécommande, téléphone, climatisation, minibar, papeterie, guide client et défauts maintenance sont vérifiés avant de libérer la chambre.',
            },
          ],
        },
        {
          h2: 'Scoring et suivi des défauts',
          content:
            'Les données d’inspection doivent faciliter le coaching, pas créer une ambiance de sanction. Un modèle 100 points rend la revue plus objective : salle de bain 35, chambre 35, présentation 20 et maintenance 10. Le seuil de passage est 90.',
          h3Items: [
            {
              heading: 'Ce qu’il faut tracer',
              text: 'Numéro de chambre, Room Attendant, type de défaut, shift, heure, résultat conforme ou non conforme, correction réalisée et caractère récurrent.',
            },
            {
              heading: 'Comment utiliser les données',
              text: 'Revoir chaque semaine les trois défauts les plus fréquents. Si le même défaut touche plusieurs équipiers, former l’équipe. Si une chambre revient souvent, prévoir une vérification maintenance ou un deep cleaning.',
            },
          ],
        },
      ],
      conclusion:
        'Une checklist pour gouvernante n’est pas un outil de sanction. C’est le système qui protège les arrivées, soutient les Room Attendants et donne à la réception la certitude qu’une chambre attribuée est vraiment prête.',
      cta: { text: 'Voir le Playbook Housekeeping', href: '/playbooks/hsk' },
      faqs: [
        {
          question: 'Faut-il inspecter toutes les chambres départ ?',
          answer:
            'Pour un établissement haut de gamme, oui. Le standard LuxOps prévoit 100% d’inspection par la gouvernante sur les chambres départ avant passage en Inspected.',
        },
        {
          question: 'Quel pourcentage de recouches contrôler ?',
          answer:
            'Le repère LuxOps est de contrôler 20 à 30% des recouches chaque jour, avec priorité aux nouveaux Room Attendants, VIP, longs séjours et chambres liées à une réclamation.',
        },
      ],
    },
  },
  {
    slug: 'hotel-bathroom-cleaning-sop',
    en: {
      title: 'Hotel Bathroom Cleaning SOP: Step-by-Step Housekeeping Standard',
      description:
        'Hotel bathroom cleaning SOP for housekeeping teams: clean-to-dirty sequence, top-to-bottom method, toilet, sink, shower, floor, amenities and supervisor inspection points.',
      date: '2026-05-03',
      readTime: '7 min read',
      intro:
        'Bathroom defects create some of the strongest guest reactions in hotels. A single hair, water spot or odour can erase the impression of an otherwise well-presented room. The LuxOps Housekeeping Playbook treats bathroom cleaning as a fixed sequence: clean to dirty, top to bottom, dry to wet where possible, with final checks from the guest perspective.',
      sections: [
        {
          h2: 'Prepare the bathroom before applying products',
          content:
            'Before cleaning starts, remove used towels, bath mat, glasses, open amenities and visible waste. Check for guest belongings and stop immediately if anything is found in a departure room. Ventilation and lighting should be turned on so residue and water spots are visible.',
        },
        {
          h2: 'Follow the clean-to-dirty sequence',
          content:
            'The standard order protects hygiene and avoids cross-contamination. Use the correct colour-coded microfibre for each surface. Toilet cloths and toilet-area tools must never touch mirrors, basin, amenities or general surfaces.',
          h3Items: [
            {
              heading: '1. Mirror and glass',
              text: 'Clean mirrors and glass first using the dedicated glass cloth. Check from several angles because streaks often appear only from the guest’s viewing position.',
            },
            {
              heading: '2. Vanity, basin and chrome',
              text: 'Clean the counter, basin, overflow, drain, faucet and handles. Dry-polish chrome so there are no water spots around the tap or splashback.',
            },
            {
              heading: '3. Shower or bath',
              text: 'Clean walls, tiles, grout, door, curtain, tub, drain, fixtures and showerhead. Remove soap residue and scale before final polishing.',
            },
            {
              heading: '4. Toilet last',
              text: 'Clean exterior surfaces first, then seat and underside, then bowl and under-rim. Finish around the base and behind the toilet, where defects are often missed.',
            },
          ],
        },
        {
          h2: 'Finish with floor, amenities and scent',
          content:
            'The floor should be cleaned from the farthest point toward the door and left completely dry. Amenities must be complete, aligned, labels forward and packaging intact. The final scent should be fresh and neutral, never chemical or damp.',
        },
        {
          h2: 'Supervisor inspection points',
          content:
            'A bathroom can look clean from the doorway and still fail inspection. Supervisors should check behind the toilet, floor corners, shower drain, mirror angles, chrome, grout, towel folds, glassware and amenity placement.',
        },
      ],
      conclusion:
        'A hotel bathroom cleaning SOP succeeds when the sequence is always the same. The Room Attendant knows what to clean, in what order and to what standard; the supervisor knows exactly what to verify before release.',
      cta: { text: 'View the Housekeeping Playbook', href: '/playbooks/hsk' },
      faqs: [
        {
          question: 'What is the correct order for cleaning a hotel bathroom?',
          answer:
            'The LuxOps sequence is mirror and glass, vanity and basin, shower or bath, toilet, floor, amenities and final inspection. The logic is clean to dirty and top to bottom.',
        },
        {
          question: 'What is the most common bathroom inspection failure?',
          answer:
            'Hair is the most visible and least tolerated defect. Supervisors should check corners, behind the toilet, shower drain, bath mat area and floor edges.',
        },
      ],
    },
    fr: {
      title: 'SOP de nettoyage de salle de bain d’hôtel : procédure étape par étape',
      description:
        'SOP de nettoyage de salle de bain d’hôtel issue du Playbook Housekeeping LuxOps : séquence propre-sale, miroir, vasque, douche, toilettes, sol, amenities et inspection par la gouvernante.',
      date: '2026-05-03',
      readTime: '7 min de lecture',
      intro:
        'Les défauts de salle de bain déclenchent certaines des réactions client les plus fortes en hôtellerie. Un cheveu, une trace d’eau ou une odeur peut annuler l’impression d’une chambre pourtant bien présentée. Dans le Playbook Housekeeping LuxOps, le nettoyage de la salle de bain suit une séquence fixe : du propre vers le sale, du haut vers le bas, puis un contrôle final depuis la perspective client.',
      sections: [
        {
          h2: 'Préparer la salle de bain avant les produits',
          content:
            'Avant d’appliquer le moindre produit, retirer les serviettes utilisées, le tapis de bain, les verres, les amenities ouverts et les déchets visibles. Vérifier la présence d’objets client et arrêter immédiatement si un objet est trouvé dans une chambre à blanc. Lumière et ventilation doivent être activées pour bien voir les traces, les cheveux et les résidus.',
        },
        {
          h2: 'Suivre la séquence du propre vers le sale',
          content:
            'L’ordre protège l’hygiène et évite la contamination croisée. Utiliser la bonne microfibre selon le code couleur est indispensable. Les chiffons et outils dédiés aux toilettes ne doivent jamais toucher le miroir, la vasque, les amenities ou les surfaces générales.',
          h3Items: [
            {
              heading: '1. Miroir et vitres',
              text: 'Nettoyer les miroirs et les vitres avec la microfibre dédiée. Vérifier sous plusieurs angles, car les traces apparaissent souvent depuis la position du client, pas depuis celle de la personne qui nettoie.',
            },
            {
              heading: '2. Plan vasque, lavabo et chrome',
              text: 'Nettoyer le plan vasque, le lavabo, le trop-plein, la bonde, la robinetterie et les poignées. Lustrer le chrome pour éliminer les traces d’eau autour du robinet et de la crédence.',
            },
            {
              heading: '3. Douche ou baignoire',
              text: 'Nettoyer les murs, faïences, joints, porte, rideau, bac, bonde, robinetterie et pommeau. Retirer le savon incrusté et le calcaire avant la finition.',
            },
            {
              heading: '4. Toilettes en dernier',
              text: 'Nettoyer d’abord l’extérieur, puis l’abattant et le dessous, puis la cuvette et le sous-rebord. Terminer par la base et l’arrière, deux zones souvent oubliées en fin de service.',
            },
          ],
        },
        {
          h2: 'Terminer par sol, amenities et odeur',
          content:
            'Le sol se nettoie du fond vers la porte et doit rester complètement sec. Les amenities doivent être complets, alignés, étiquettes visibles et emballages intacts. L’odeur finale doit être fraîche et neutre, jamais chimique, humide ou trop parfumée.',
        },
        {
          h2: 'Points de contrôle pour la gouvernante',
          content:
            'Une salle de bain peut paraître propre depuis la porte et échouer au contrôle. La gouvernante vérifie l’arrière des toilettes, les coins, la bonde de douche, les angles du miroir, la robinetterie, les joints, le pliage des serviettes, les verres et la mise en place des amenities.',
        },
      ],
      conclusion:
        'Une SOP de salle de bain fonctionne lorsque la séquence ne change pas. Le Room Attendant sait quoi nettoyer, dans quel ordre et à quel standard ; la gouvernante sait exactement quoi vérifier avant libération.',
      cta: { text: 'Voir le Playbook Housekeeping', href: '/playbooks/hsk' },
      faqs: [
        {
          question: 'Dans quel ordre nettoyer une salle de bain d’hôtel ?',
          answer:
            'La séquence LuxOps suit cet ordre : miroir et vitres, plan vasque, douche ou baignoire, toilettes, sol, amenities et inspection finale. La logique est du propre vers le sale et du haut vers le bas.',
        },
        {
          question: 'Quel défaut salle de bain est le plus critique ?',
          answer:
            'Le cheveu est le défaut le plus visible et le moins toléré. Il faut contrôler les coins, l’arrière des toilettes, la bonde de douche, la zone du tapis de bain et les bords du sol.',
        },
      ],
    },
  },
]

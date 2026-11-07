import type { BlogArticle } from './articles'

type EditorialArticle = Omit<BlogArticle, 'date'>
export const trainingEditorial: Record<string, { fr: EditorialArticle; en: EditorialArticle }> = {
  "hotel-staff-training-service-standards": {
    "fr": {
      "title": "Formation aux standards de service hôteliers : de la théorie à la pratique",
      "seoTitle": "Formation aux standards de service hôteliers | LuxOps",
      "description": "Comment former aux standards de service : démonstrations, cas clients, pratique et suivi des managers. Une méthode adaptée aux opérations de votre hôtel.",
      "intro": "Un standard ne devient pas une habitude parce qu’il a été présenté en réunion. Le collaborateur doit comprendre son utilité, voir ce qui est attendu, essayer et recevoir un retour précis. La formation aux standards de service relie ainsi les documents de l’hôtel aux décisions prises devant le client.",
      "sections": [
        {
          "h2": "Distinguer standard, procédure et jugement professionnel",
          "content": "Le standard décrit le résultat attendu par le client. La procédure organise les étapes et les responsabilités. La posture relationnelle détermine la manière de communiquer. Le jugement permet de choisir une réponse lorsque la situation sort du cadre habituel. Une formation doit travailler ces quatre aspects.",
          "h3Items": [
            {
              "heading": "Un exemple à la réception",
              "text": "Pour une arrivée anticipée, le standard est une prise en charge attentive et une information fiable. La procédure prévoit de vérifier le statut de la chambre auprès des étages. Le réceptionniste explique les options disponibles avec tact et sollicite son responsable si la demande dépasse son pouvoir de décision."
            }
          ]
        },
        {
          "h2": "Choisir les situations à travailler avec les responsables",
          "content": "Partez de faits observés : demandes oubliées à la passation, réponses différentes à une réclamation, préparation incomplète avant service. Pour chaque situation, précisez le comportement attendu, les outils disponibles et la personne à prévenir en cas de difficulté. Les standards de marque et les procédures de l’établissement restent les références.",
          "h3Items": [
            {
              "heading": "Définir un objectif observable",
              "text": "« Accueillir mieux » est trop large. « Vérifier la demande, annoncer une prochaine étape réalisable et confirmer qui assure le suivi » permet d’observer une mise en situation et de donner un feedback utile. Adaptez le vocabulaire aux fonctions et à la langue de travail de l’équipe."
            }
          ]
        },
        {
          "h2": "Faire pratiquer avec un cas client",
          "content": "Exemple pédagogique : un client arrive fatigué et sa chambre n’est pas prête. Un participant joue le client, un autre assure l’accueil et le responsable observe. Après un premier essai, chacun identifie ce qui a été vérifié, ce qui a été promis et ce qui doit être transmis. Rejouez la situation avec une contrainte différente.",
          "h3Items": [
            {
              "heading": "Donner un retour exploitable",
              "text": "Décrivez un fait plutôt qu’un trait de caractère : « le délai a été annoncé avant confirmation des étages ». Expliquez son effet sur le client, demandez au collaborateur comment il ferait autrement, puis laissez-le essayer. Il apprend à décider, pas seulement à réciter une formule."
            }
          ]
        },
        {
          "h2": "Organiser la formation sans perdre le lien avec le service",
          "content": "Une session peut réunir un département ou plusieurs services lorsque le problème concerne une transmission. Prévoyez des groupes compatibles avec l’exploitation, des cas adaptés au niveau de chacun et un temps d’observation. Les outils métier, PMS ou suivi des demandes, sont utilisés lorsqu’ils interviennent réellement dans la situation."
        },
        {
          "h2": "Faire vivre les acquis après la session",
          "content": "Le chef de service choisit quelques points à observer pendant les prochaines vacations. Il reprend un cas au briefing, donne un retour individuel et actualise le support si la procédure a changé. Les demandes non suivies, la qualité des passations ou la maîtrise d’une tâche peuvent être comparées dans un périmètre stable ; ce sont des observations à recueillir, pas des résultats garantis."
        }
      ],
      "conclusion": "LuxOps peut préparer ces mises en situation avec vos responsables et vos propres standards. L’échange initial sert à choisir les situations prioritaires, les participants et un format compatible avec votre activité.",
      "faqs": [
        {
          "question": "Faut-il acheter un manuel avant la formation ?",
          "answer": "Non. Le programme peut utiliser les procédures, outils et standards de votre hôtel. Un manuel constitue une ressource distincte, utile si vous souhaitez compléter votre documentation."
        },
        {
          "question": "Peut-on former une équipe expérimentée ?",
          "answer": "Oui, en partant des exceptions, de la coordination et du jugement professionnel plutôt que de reprendre systématiquement les bases."
        }
      ],
      "readTime": "4 min de lecture",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Découvrir la formation",
        "href": "/fr/formation"
      }
    },
    "en": {
      "title": "Hotel service standards training: from theory to practice",
      "seoTitle": "Hotel Service Standards Training | LuxOps",
      "description": "How to teach hotel service standards through demonstrations, guest scenarios, practice and manager follow-up, using your property’s operating context.",
      "intro": "Presenting a standard at a meeting does not make it a habit. Team members need to understand its purpose, see the expected behaviour, try it and receive specific feedback. Service standards training connects hotel documents to decisions made in front of the guest.",
      "sections": [
        {
          "h2": "Distinguish standards, procedures and professional judgement",
          "content": "A standard describes the guest-facing outcome. A procedure sets out steps and responsibilities. Interpersonal skills shape how staff communicate. Judgement helps them respond when circumstances fall outside the usual sequence. Training needs to address all four.",
          "h3Items": [
            {
              "heading": "A front desk example",
              "text": "For an early arrival, the standard is attentive handling and reliable information. The procedure requires checking room readiness with Housekeeping. The receptionist explains available options tactfully and involves the manager when a request exceeds their authority."
            }
          ]
        },
        {
          "h2": "Choose situations with department managers",
          "content": "Start with observed situations: requests lost during handover, inconsistent complaint responses or incomplete service preparation. For each one, define the expected behaviour, available tools and escalation contact. The property’s procedures and brand standards remain the reference.",
          "h3Items": [
            {
              "heading": "Set an observable objective",
              "text": "“Improve the welcome” is too broad. “Confirm the request, explain a realistic next step and identify who follows up” provides something to observe and discuss. Adapt terminology to participants’ roles and working language."
            }
          ]
        },
        {
          "h2": "Practise with a guest scenario",
          "content": "Teaching example: a tired guest arrives before their room is ready. One participant plays the guest, another handles the arrival and the manager observes. Afterwards, identify what was checked, what was promised and what needs to be handed over. Repeat with a different constraint.",
          "h3Items": [
            {
              "heading": "Give actionable feedback",
              "text": "Describe a fact rather than a personality trait: “the time was promised before Housekeeping confirmed it.” Explain the effect on the guest, ask how the colleague would respond differently and let them try again. The aim is judgement, as well as wording."
            }
          ]
        },
        {
          "h2": "Organise training around service",
          "content": "A session may involve one department or several when the issue concerns handovers. Plan groups that fit operational needs, cases appropriate to participants’ experience and time for observation. Hotel systems such as the PMS or request log are used where they form part of the task."
        },
        {
          "h2": "Keep learning active after the session",
          "content": "The department head chooses a few behaviours to observe during upcoming shifts. They revisit a case at briefing, give individual feedback and update materials when procedures change. Unresolved requests, handover quality or task competence can be reviewed within a consistent scope; these are observations to collect, not guaranteed results."
        }
      ],
      "conclusion": "LuxOps can prepare these exercises with your managers using your own standards. The initial discussion identifies priority situations, participants and a format that fits your operation.",
      "faqs": [
        {
          "question": "Do we need to buy a manual first?",
          "answer": "No. Training can use your hotel’s procedures, tools and standards. A manual is a separate resource if you want to develop your documentation."
        },
        {
          "question": "Can an experienced team benefit?",
          "answer": "Yes, by focusing on exceptions, coordination and judgement rather than repeating the basics."
        }
      ],
      "readTime": "4 min read",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Explore training",
        "href": "/en/training"
      }
    }
  },
  "hotel-new-hire-onboarding": {
    "fr": {
      "title": "Intégration des nouveaux collaborateurs en hôtel : méthode et étapes",
      "seoTitle": "Intégration du personnel hôtelier : méthode et étapes | LuxOps",
      "description": "Préparer l’arrivée, organiser le tutorat et valider l’autonomie : un parcours d’intégration hôtelier adaptable du premier jour aux premières semaines.",
      "intro": "L’intégration commence avant la première prise de poste et se poursuit jusqu’à ce que le collaborateur puisse travailler avec les repères nécessaires. Un dossier remis à l’arrivée ne suffit pas : il faut une personne disponible, des tâches progressives et des moments où l’on peut poser des questions.",
      "sections": [
        {
          "h2": "Avant l’arrivée : préparer les conditions de travail",
          "content": "Confirmez le lieu, l’horaire, la tenue, le contact et les informations pratiques. Préparez les accès nécessaires, le poste de travail et le planning. Le responsable désigne un tuteur disponible et choisit les premières tâches selon l’expérience de la personne. La fiche de poste, l’organigramme et les procédures utiles doivent être accessibles dans leur version à jour."
        },
        {
          "h2": "Le premier jour : situer le rôle et les interlocuteurs",
          "content": "Présentez l’équipe, les espaces, les règles de sécurité et les circuits de communication. Expliquez ce que le collaborateur peut décider seul et qui contacter pour une exception. Une visite des autres services aide à comprendre les transmissions : chambre prête, demande technique, prestation facturée ou commande en attente.",
          "h3Items": [
            {
              "heading": "Faire observer avant de confier",
              "text": "Au premier service, le tuteur montre une tâche et verbalise ses contrôles. Le nouveau collaborateur la reprend avec lui, puis débriefe ce qui lui semble encore difficile. Évitez de concentrer toute la documentation sur cette seule journée."
            }
          ]
        },
        {
          "h2": "Première semaine : construire une progression par tâches",
          "content": "Répartissez les apprentissages entre gestes métier, relation client et outils. Pour chaque tâche, notez si elle a été observée, pratiquée avec aide ou réalisée de manière autonome. Le tuteur transmet les points de vigilance au responsable et garde un créneau de retour quotidien adapté à l’activité.",
          "h3Items": [
            {
              "heading": "Exemple à la réception",
              "text": "Commencez par repérer une réservation et comprendre les statuts de chambre. Faites ensuite réaliser un accueil simple sous supervision, puis une arrivée avec demande particulière. La validation porte sur la vérification des informations, la communication et la transmission, pas seulement sur la saisie dans le PMS."
            }
          ]
        },
        {
          "h2": "Des premières semaines au bilan d’intégration",
          "content": "Prévoyez des points à des moments adaptés au contrat et au poste : fin de première semaine, premières semaines de service, puis un bilan plus complet si nécessaire jusqu’à 90 jours. Ce calendrier est un exemple, pas une durée obligatoire. Reprenez les réussites, les difficultés, les conditions de travail et les compétences restant à développer.",
          "h3Items": [
            {
              "heading": "Valider l’autonomie par l’observation",
              "text": "Une tâche réalisée une fois ne suffit pas toujours. Observez plusieurs situations, dont une exception pertinente, et vérifiez que le collaborateur sait demander de l’aide. Le responsable formalise les tâches validées et les prochaines étapes avec la personne."
            }
          ]
        },
        {
          "h2": "Maintenir des supports faciles à retrouver",
          "content": "Un guide de prise de poste peut réunir contacts, routines, procédures prioritaires et accès aux outils. Une grille de compétences permet au tuteur et au responsable de suivre la même progression. Désignez qui met ces supports à jour lorsque les méthodes ou logiciels évoluent, et demandez aux nouveaux arrivants ce qui leur a manqué."
        }
      ],
      "conclusion": "Pour structurer un parcours d’intégration, partez des tâches du poste et du temps réellement disponible pour les accompagner. LuxOps peut aider vos responsables à préparer les supports, les mises en situation et les critères de validation.",
      "faqs": [
        {
          "question": "Qui est responsable de l’intégration ?",
          "answer": "Le chef de service organise et valide le parcours. Le tuteur accompagne la pratique quotidienne ; les RH coordonnent les informations et étapes communes. Les responsabilités doivent être explicites."
        },
        {
          "question": "Un saisonnier doit-il suivre le même parcours ?",
          "answer": "Les repères essentiels restent nécessaires. Adaptez la durée, les modules et la supervision à l’expérience, aux tâches confiées et à la durée du contrat."
        }
      ],
      "readTime": "4 min de lecture",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Découvrir la formation",
        "href": "/fr/formation"
      }
    },
    "en": {
      "title": "Hotel staff onboarding: a practical step-by-step approach",
      "seoTitle": "Hotel Staff Onboarding: Steps and Responsibilities | LuxOps",
      "description": "Prepare arrivals, assign a buddy and assess readiness: an adaptable hotel onboarding plan from day one through the first weeks.",
      "intro": "Onboarding starts before the first shift and continues until the new colleague has the knowledge and support needed to work. A welcome pack is useful, but so are an available buddy, progressively assigned tasks and opportunities to ask questions.",
      "sections": [
        {
          "h2": "Before arrival: prepare the working conditions",
          "content": "Confirm the location, start time, uniform, contact person and practical details. Prepare system access, the workstation and schedule. The manager assigns an available buddy and selects initial tasks based on the person’s experience. Keep the job description, reporting lines and relevant procedures accessible and current."
        },
        {
          "h2": "Day one: explain the role and key contacts",
          "content": "Introduce the team, premises, safety rules and communication channels. Explain which decisions the colleague can make and who handles exceptions. Visiting other departments helps make handovers concrete: room readiness, maintenance requests, posted charges or pending orders.",
          "h3Items": [
            {
              "heading": "Observe before taking responsibility",
              "text": "During the first shift, the buddy demonstrates a task and explains the checks. The new colleague then tries it with support and discusses remaining difficulties. Avoid trying to cover every document on the first day."
            }
          ]
        },
        {
          "h2": "Week one: build a task-based progression",
          "content": "Distribute learning across practical tasks, guest communication and systems. For each task, record whether it has been observed, practised with support or completed independently. The buddy shares concerns with the manager and keeps a short daily feedback opportunity that fits service needs.",
          "h3Items": [
            {
              "heading": "A Front Office example",
              "text": "Start with finding a reservation and understanding room statuses. Then supervise a straightforward arrival, followed by one with a special request. Assess information checks, communication and handover, as well as PMS entry."
            }
          ]
        },
        {
          "h2": "From the first weeks to the onboarding review",
          "content": "Schedule reviews around the role and contract: the end of week one, after the first weeks in service, and a fuller review where useful, extending up to 90 days. This is an adaptable example, not a mandatory duration. Discuss achievements, difficulties, working conditions and skills still to develop.",
          "h3Items": [
            {
              "heading": "Assess independence through observation",
              "text": "Completing a task once may not be enough. Observe different situations, including a relevant exception, and check that the colleague knows when to ask for help. The manager records the agreed tasks and next steps together with them."
            }
          ]
        },
        {
          "h2": "Keep support materials easy to find",
          "content": "A role guide can bring together contacts, routines, priority procedures and system access instructions. A skills checklist lets the buddy and manager follow the same progression. Assign responsibility for updates when methods or systems change, and ask new starters what was missing."
        }
      ],
      "conclusion": "Build onboarding around the role’s tasks and the time available to support them. LuxOps can help managers prepare materials, exercises and assessment criteria.",
      "faqs": [
        {
          "question": "Who owns onboarding?",
          "answer": "The department head organises and signs off the programme. The buddy supports daily practice; HR coordinates shared information and milestones. Make those responsibilities explicit."
        },
        {
          "question": "Should seasonal staff follow the same plan?",
          "answer": "Essential operating knowledge still matters. Adapt the length, modules and supervision to experience, assigned tasks and contract duration."
        }
      ],
      "readTime": "4 min read",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Explore training",
        "href": "/en/training"
      }
    }
  },
  "hotel-staff-turnover-training": {
    "fr": {
      "title": "Turnover dans l’hôtellerie : comment mieux intégrer et accompagner les équipes",
      "seoTitle": "Turnover en hôtellerie : intégration et fidélisation | LuxOps",
      "description": "Analyser les départs, clarifier les rôles et accompagner les managers : ce que l’intégration et la formation peuvent apporter à la fidélisation en hôtel.",
      "intro": "Les départs dans un hôtel peuvent avoir des causes très différentes : rémunération, horaires, charge de travail, management, perspectives ou conditions matérielles. La formation ne résout pas à elle seule ces sujets. Elle peut néanmoins aider lorsqu’un collaborateur manque de repères, de soutien ou d’occasions de progresser.",
      "sections": [
        {
          "h2": "Comprendre les départs avant de choisir une action",
          "content": "Croisez les entretiens de départ, les retours des collaborateurs encore présents et les observations des managers. Distinguez les fins de contrats prévues des départs non anticipés. Examinez les situations par service, ancienneté et période plutôt que de tirer une conclusion à partir d’un seul taux global.",
          "h3Items": [
            {
              "heading": "Lire un indicateur dans son contexte",
              "text": "Si vous suivez le turnover, fixez une définition stable des départs et de l’effectif moyen. Comparez des périodes comparables, en tenant compte de la saisonnalité et des changements d’activité. Le chiffre décrit un mouvement d’effectif ; il n’en explique pas la cause."
            }
          ]
        },
        {
          "h2": "Repérer ce qui relève de l’organisation du travail",
          "content": "Des consignes contradictoires, un planning tardif, une charge mal répartie ou l’absence d’interlocuteur peuvent rendre la prise de poste difficile. Le responsable doit écouter ces situations et agir sur ce qui dépend de lui. Former un salarié à une tâche ne corrige pas une organisation qui l’empêche de l’accomplir.",
          "h3Items": [
            {
              "heading": "Clarifier les attentes",
              "text": "Précisez les priorités du poste, les critères de qualité, les limites de décision et les personnes disponibles. Une passation écrite et un briefing ciblé évitent que les consignes changent selon l’interlocuteur. Vérifiez ensuite que le temps et les moyens permettent de les appliquer."
            }
          ]
        },
        {
          "h2": "Accompagner les premières semaines",
          "content": "Désignez un tuteur, programmez des tâches progressives et réservez des points de retour. Demandez ce qui est compris, ce qui reste difficile et ce qui manque pour travailler. Le responsable peut alors distinguer un besoin de formation d’un problème d’accès, de matériel ou de charge de travail.",
          "h3Items": [
            {
              "heading": "Un cas concret aux étages",
              "text": "Un nouvel équipier oublie régulièrement une transmission. Avant de conclure à un manque d’implication, vérifiez s’il sait quoi signaler, dans quel outil et à qui. Faites une démonstration, laissez-le pratiquer puis observez à nouveau. Si les messages restent sans réponse, le circuit de suivi doit aussi être revu."
            }
          ]
        },
        {
          "h2": "Donner aux managers des pratiques d’accompagnement",
          "content": "Les chefs de service ont besoin de savoir observer une tâche, donner un retour factuel, reconnaître une progression et traiter une difficulté. Ces échanges peuvent être courts mais doivent être suivis d’une action ou d’une réponse. Des perspectives d’évolution crédibles se discutent à partir des compétences et des possibilités réelles de l’établissement."
        },
        {
          "h2": "Vérifier les effets sans promettre une baisse du turnover",
          "content": "Suivez les tâches maîtrisées, les points d’intégration réalisés et les difficultés résolues. Demandez aux collaborateurs si les attentes et les interlocuteurs sont plus clairs. Analysez les départs sur une période suffisante et notez les autres changements intervenus : rémunération, planning, encadrement ou activité. Une amélioration ne peut pas être attribuée automatiquement à la formation."
        }
      ],
      "conclusion": "LuxOps peut accompagner les responsables sur l’intégration, les pratiques managériales et la transmission des compétences. Le projet commence par les situations observées dans votre établissement et les actions que vos équipes peuvent réellement mettre en œuvre.",
      "faqs": [
        {
          "question": "La formation réduit-elle forcément les départs ?",
          "answer": "Non. Elle peut répondre à certains besoins de compétences et d’accompagnement. Les rémunérations, conditions de travail, horaires et perspectives doivent être examinés séparément."
        },
        {
          "question": "Par quoi commencer dans un service en difficulté ?",
          "answer": "Écoutez les collaborateurs et le responsable, identifiez un problème concret et vérifiez les moyens disponibles. Choisissez ensuite une action avec un responsable et une date de suivi."
        }
      ],
      "readTime": "4 min de lecture",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Découvrir la formation",
        "href": "/fr/formation"
      }
    },
    "en": {
      "title": "Hotel staff turnover: improving onboarding and team support",
      "seoTitle": "Hotel Staff Turnover: Onboarding and Team Support | LuxOps",
      "description": "Understand departures, clarify roles and support managers: how onboarding and training can contribute to hotel staff retention.",
      "intro": "Hotel departures can have very different causes: pay, schedules, workload, management, career prospects or working conditions. Training alone cannot solve these issues. It can help when colleagues lack clear expectations, support or opportunities to develop.",
      "sections": [
        {
          "h2": "Understand departures before choosing an action",
          "content": "Compare exit interviews, feedback from current staff and manager observations. Separate planned contract endings from unexpected departures. Review the situation by department, tenure and period rather than relying on one overall rate.",
          "h3Items": [
            {
              "heading": "Read indicators in context",
              "text": "When tracking turnover, use consistent definitions for departures and average headcount. Compare like-for-like periods, accounting for seasonality and changes in business. The figure describes staff movement; it does not explain its cause."
            }
          ]
        },
        {
          "h2": "Identify issues in work organisation",
          "content": "Conflicting instructions, late schedules, uneven workload or no clear point of contact can make work difficult. Managers need to listen and address what falls within their control. Teaching a task does not fix an organisation that prevents people from completing it.",
          "h3Items": [
            {
              "heading": "Clarify expectations",
              "text": "Make priorities, quality criteria, decision-making authority and support contacts explicit. Written handovers and focused briefings help keep instructions consistent. Then check whether staff have the time and resources to apply them."
            }
          ]
        },
        {
          "h2": "Support the first weeks",
          "content": "Assign a buddy, sequence tasks progressively and schedule feedback. Ask what is clear, what remains difficult and what is missing. The manager can then distinguish a training need from an access, equipment or workload problem.",
          "h3Items": [
            {
              "heading": "A Housekeeping example",
              "text": "A new attendant regularly misses a handover. Before attributing this to motivation, check whether they know what to report, in which tool and to whom. Demonstrate, let them practise and observe again. If messages still go unanswered, review the follow-up process too."
            }
          ]
        },
        {
          "h2": "Equip managers to support their teams",
          "content": "Department heads need to observe work, give factual feedback, recognise progress and address difficulties. Conversations can be brief, but should lead to an action or response. Discuss credible development opportunities based on skills and genuine possibilities within the property."
        },
        {
          "h2": "Review progress without promising a turnover reduction",
          "content": "Track assessed skills, onboarding reviews completed and issues resolved. Ask staff whether expectations and support contacts are clearer. Review departures over a meaningful period, noting other changes in pay, scheduling, management or business levels. An improvement cannot automatically be attributed to training."
        }
      ],
      "conclusion": "LuxOps can support managers with onboarding, management practices and skills transfer. The project starts with observed situations and actions your teams can realistically put into practice.",
      "faqs": [
        {
          "question": "Does training necessarily reduce departures?",
          "answer": "No. It can address some skills and support needs. Pay, working conditions, schedules and career prospects need separate consideration."
        },
        {
          "question": "Where should a struggling department start?",
          "answer": "Listen to staff and the manager, identify a specific problem and check available resources. Then assign an action, an owner and a review date."
        }
      ],
      "readTime": "4 min read",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Explore training",
        "href": "/en/training"
      }
    }
  },
  "hotel-housekeeping-supervisor-checklist": {
    "fr": {
      "title": "Checklist gouvernante d’étage : inspection et libération des chambres",
      "seoTitle": "Checklist gouvernante d’étage : inspection chambre | LuxOps",
      "description": "Les contrôles de la gouvernante d’étage : priorités, chambre, salle de bain, équipements, reprises et statut. Checklist PDF et méthode de suivi.",
      "intro": "La checklist de la gouvernante sert à prendre une décision : la chambre peut-elle être libérée ou faut-il une reprise ? Elle organise le contrôle, conserve les écarts constatés et facilite la transmission à la réception. Son utilisation suppose des critères connus des équipes et un responsable identifié pour chaque correction.",
      "sections": [
        {
          "h2": "Préparer la tournée et les priorités",
          "content": "Avant la tournée, vérifiez les arrivées attendues, départs, demandes particulières et chambres indisponibles avec la réception. Repérez les chambres annoncées comme terminées et celles nécessitant une intervention technique. Respectez les consignes d’accès et de confidentialité des chambres occupées ; un statut informatique ne dispense pas des vérifications prévues par l’hôtel.",
          "h3Items": [
            {
              "heading": "Renseigner la fiche",
              "text": "Notez la date, le numéro de chambre, le type de service, le nom du contrôleur et l’heure. Prévoyez pour chaque point : conforme, à reprendre ou non applicable. Ajoutez un champ pour l’écart précis, la personne chargée de le corriger et la vérification de clôture."
            }
          ]
        },
        {
          "h2": "Contrôler la chambre avec un ordre constant",
          "content": "Commencez par l’impression à l’entrée, puis suivez un parcours qui couvre le lit, les surfaces, les rangements, les équipements et le sol. Vérifiez selon le standard de l’établissement : présentation, absence de traces, état du linge, fournitures et fonctionnement des éléments accessibles. L’ordre doit limiter les oublis sans imposer un parcours identique à toutes les configurations de chambre.",
          "h3Items": [
            {
              "heading": "Lit et linge",
              "text": "Contrôlez la propreté, l’état, la mise en place et la présentation du linge. Signalez une tache ou un dommage, demandez le remplacement et contrôlez le résultat. Vérifiez aussi les zones moins visibles et les éléments déplacés pendant le nettoyage."
            }
          ]
        },
        {
          "h2": "Vérifier la salle de bain et les équipements",
          "content": "Examinez sanitaires, douche ou baignoire, robinetterie, miroirs, joints, sol, linge et produits d’accueil. Recherchez traces, cheveux, résidus, fuites et dysfonctionnements visibles. Pour l’éclairage, la température, le coffre, le téléphone ou le minibar, utilisez la liste adaptée à la chambre et transmettez les anomalies techniques au service compétent."
        },
        {
          "h2": "Organiser la reprise puis décider de la libération",
          "content": "Un défaut doit être localisé et décrit : « trace sur le miroir au-dessus du lavabo » est plus utile que « salle de bain à revoir ». Attribuez la reprise, précisez sa priorité et gardez la chambre dans le statut approprié. Après correction, revérifiez le point concerné. La personne autorisée peut alors libérer la chambre selon les règles de l’hôtel et informer la réception.",
          "h3Items": [
            {
              "heading": "Suivre un défaut qui bloque la vente",
              "text": "Si l’écart ne peut pas être résolu avant l’arrivée, prévenez le responsable et la réception pour organiser une autre solution. Conservez un suivi jusqu’à la clôture, y compris lorsqu’un autre service intervient."
            }
          ]
        },
        {
          "h2": "Utiliser les écarts pour accompagner l’équipe",
          "content": "Reprenez les écarts récurrents au briefing sans mettre en cause une personne devant le groupe. Montrez le résultat attendu, faites pratiquer et observez à nouveau. La checklist fournit un support de dialogue ; un score global ne doit pas masquer un défaut bloquant. Les seuils et fréquences de contrôle se définissent avec l’encadrement selon l’établissement."
        }
      ],
      "conclusion": "Téléchargez la checklist pour organiser votre contrôle. Le manuel Housekeeping fournit une base de procédures à adapter ; une formation peut aider gouvernantes et équipes d’étage à partager les mêmes critères sur le terrain.",
      "faqs": [
        {
          "question": "Quelle différence entre chambre nettoyée et chambre libérée ?",
          "answer": "Le nettoyage est une tâche terminée ; la libération est une décision prise selon le circuit de validation de l’hôtel. Les intitulés du PMS peuvent varier et doivent être compris de la réception et des étages."
        },
        {
          "question": "La checklist remplace-t-elle une procédure de nettoyage ?",
          "answer": "Non. Elle rappelle quoi contrôler. La procédure explique comment réaliser le travail, avec les produits, gestes et précautions adaptés."
        }
      ],
      "readTime": "4 min de lecture",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Découvrir le manuel complet",
        "href": "/fr/playbooks/hsk"
      }
    },
    "en": {
      "title": "Housekeeping supervisor checklist: room inspection and release",
      "seoTitle": "Housekeeping Supervisor Checklist: Room Inspection | LuxOps",
      "description": "Housekeeping supervisor checks: priorities, bedroom, bathroom, equipment, rework and room status. A PDF checklist and follow-up method.",
      "intro": "A supervisor’s checklist supports a decision: can the room be released, or does it need further work? It organises inspection, records defects and supports communication with reception. Teams need to understand the criteria and know who is responsible for each correction.",
      "sections": [
        {
          "h2": "Prepare the round and priorities",
          "content": "Before starting, check expected arrivals, departures, special requests and unavailable rooms with reception. Identify rooms reported complete and those needing maintenance. Follow access and privacy rules for occupied rooms; a system status does not replace the property’s required checks.",
          "h3Items": [
            {
              "heading": "Complete the record",
              "text": "Record the date, room number, service type, inspector and time. Use pass, rework needed or not applicable for each item. Include space for the specific issue, the person responsible and confirmation of the follow-up check."
            }
          ]
        },
        {
          "h2": "Inspect the room in a consistent order",
          "content": "Start with the first impression, then follow a route covering the bed, surfaces, storage, equipment and floor. Check presentation, marks, linen condition, supplies and accessible equipment against the property’s standard. The route should prevent omissions while allowing for different room layouts.",
          "h3Items": [
            {
              "heading": "Bed and linen",
              "text": "Check cleanliness, condition, positioning and presentation of linen. Record stains or damage, request replacement and verify the result. Include less visible areas and items moved during cleaning."
            }
          ]
        },
        {
          "h2": "Check the bathroom and equipment",
          "content": "Inspect sanitary fittings, shower or bath, taps, mirrors, seals, floor, towels and amenities. Look for marks, hair, residue, leaks and visible faults. Use the room-specific list for lighting, temperature controls, safe, phone or minibar, and send technical defects to the relevant team."
        },
        {
          "h2": "Arrange rework and decide on release",
          "content": "Locate and describe defects: “mark on the mirror above the basin” is more useful than “bathroom needs attention”. Assign the work, set its priority and keep the room in the appropriate status. Recheck after correction. The authorised person can then release the room under hotel rules and inform reception.",
          "h3Items": [
            {
              "heading": "Track a defect that prevents release",
              "text": "If the problem cannot be resolved before arrival, inform the manager and reception so they can arrange another solution. Keep ownership of the follow-up until closure, including when another department performs the work."
            }
          ]
        },
        {
          "h2": "Use findings to support the team",
          "content": "Discuss recurring defects at briefing without singling someone out. Demonstrate the expected result, let staff practise and observe again. The checklist supports discussion; an overall score must not hide a release-blocking defect. Managers define inspection frequencies and thresholds for their property."
        }
      ],
      "conclusion": "Download the checklist to organise inspections. The Housekeeping manual provides procedures to adapt; training can help supervisors and room attendants apply shared criteria on the floor.",
      "faqs": [
        {
          "question": "What is the difference between cleaned and released?",
          "answer": "Cleaning is a completed task; release is a decision under the hotel’s approval process. PMS status names vary and must be understood by reception and Housekeeping."
        },
        {
          "question": "Does the checklist replace a cleaning procedure?",
          "answer": "No. It lists what to check. A procedure explains how to perform the work, with appropriate products, actions and precautions."
        }
      ],
      "readTime": "4 min read",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Explore the complete manual",
        "href": "/en/playbooks/hsk"
      }
    }
  },
  "housekeeping-room-inspection": {
    "fr": {
      "title": "Inspection de chambre d’hôtel : procédure de contrôle qualité",
      "seoTitle": "Inspection de chambre d’hôtel : procédure qualité | LuxOps",
      "description": "Qui inspecte une chambre, quand et comment ? Parcours de contrôle, traitement des défauts, reprise et transmission du statut à la réception.",
      "intro": "L’inspection vérifie que la chambre respecte le niveau attendu avant sa mise à disposition. Elle se distingue du nettoyage et de l’autocontrôle de l’employé d’étage. Pour être utile, elle doit déboucher sur une décision et une transmission : libérer, faire reprendre ou maintenir indisponible.",
      "sections": [
        {
          "h2": "Définir qui contrôle et à quel moment",
          "content": "Le responsable housekeeping organise le circuit de contrôle, les personnes habilitées et les priorités. L’inspection intervient après l’annonce de fin de nettoyage, selon les règles de l’établissement. Pour les recouches ou chambres occupées, adaptez l’accès et le contrôle au service réalisé et aux demandes du client. La réception doit connaître la différence entre nettoyage terminé et chambre disponible."
        },
        {
          "h2": "Suivre un parcours de contrôle reproductible",
          "content": "Depuis la porte, observez présentation, odeur, température et éclairage. Parcourez ensuite les zones dans un ordre constant : rangement, lit, mobilier, équipements, salle de bain et sol. Adaptez ce circuit à la configuration. Utilisez une checklist par catégorie lorsque les équipements ou fournitures diffèrent.",
          "h3Items": [
            {
              "heading": "Chambre et équipements",
              "text": "Vérifiez le linge, les surfaces, les poignées, les espaces de rangement et les fournitures. Testez les équipements prévus par votre grille : éclairage, téléphone, température, télévision ou coffre. Contrôlez le minibar et les prestations particulières si cela relève de votre service. Transmettez les pannes plutôt que d’improviser une réparation."
            }
          ]
        },
        {
          "h2": "Inspecter la salle de bain avec précision",
          "content": "Contrôlez les sanitaires et les zones de contact, la robinetterie, les miroirs, la douche ou baignoire, les joints, le linge et les consommables. Observez les traces, cheveux, résidus et écoulements anormaux. Vérifiez aussi les angles, dessous et zones que la lumière rend moins visibles. Une anomalie technique et un défaut de nettoyage ne suivent pas nécessairement le même circuit de correction."
        },
        {
          "h2": "Enregistrer un défaut et vérifier la correction",
          "content": "Décrivez le lieu, la nature du défaut, la priorité et le destinataire. Exemple pédagogique : une fuite sous le lavabo nécessite un signalement technique et une décision sur la disponibilité ; une trace sur le miroir appelle une reprise de nettoyage. Attribuez chaque action et gardez une trace de sa clôture.",
          "h3Items": [
            {
              "heading": "Éviter une correction sans suivi",
              "text": "« Demande transmise » ne signifie pas « défaut résolu ». Le contrôleur ou la personne désignée revérifie le résultat et met à jour la fiche. Si la chambre reste indisponible, la réception reçoit une information exploitable pour préparer l’arrivée."
            }
          ]
        },
        {
          "h2": "Libérer la chambre et exploiter les observations",
          "content": "La personne autorisée confirme la conformité, actualise le statut dans l’outil prévu et transmet les informations nécessaires. Les écarts récurrents servent ensuite à revoir une méthode, un équipement ou une compétence. Comparez des chambres et des prestations similaires ; cherchez l’origine de l’écart avant d’en faire une question de performance individuelle."
        }
      ],
      "conclusion": "Une grille d’inspection aide à ne rien oublier. Une procédure commune précise qui agit, comment traiter les écarts et qui valide la disponibilité. Le manuel Housekeeping permet de travailler cet ensemble avec votre équipe.",
      "faqs": [
        {
          "question": "Combien de temps prévoir pour une inspection ?",
          "answer": "Le temps dépend de la catégorie de chambre, du service réalisé et des équipements à contrôler. Définissez votre organisation à partir d’observations terrain, sans imposer un temps unique au détriment du contrôle."
        },
        {
          "question": "Faut-il une checklist différente pour les suites ?",
          "answer": "Prévoyez les zones et équipements supplémentaires. Une base commune peut être complétée par les contrôles propres à chaque catégorie."
        }
      ],
      "readTime": "4 min de lecture",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Découvrir le manuel complet",
        "href": "/fr/playbooks/hsk"
      }
    },
    "en": {
      "title": "Hotel room inspection: a quality control procedure",
      "seoTitle": "Hotel Room Inspection: Quality Control Procedure | LuxOps",
      "description": "Who inspects a hotel room, when and how? A walkthrough of checks, defects, rework and communicating room readiness to reception.",
      "intro": "An inspection checks whether a room meets the required standard before it is made available. It is distinct from cleaning and the attendant’s own final check. To be useful, it must lead to a decision and handover: release, request rework or keep unavailable.",
      "sections": [
        {
          "h2": "Define who inspects and when",
          "content": "The Housekeeping manager defines the inspection process, authorised staff and priorities. Inspection follows notification that cleaning is complete, under the property’s rules. For stayovers or occupied rooms, adapt access and checks to the service and guest requests. Reception must understand the distinction between cleaning complete and room available."
        },
        {
          "h2": "Follow a repeatable inspection route",
          "content": "From the doorway, assess presentation, odour, temperature and lighting. Then inspect zones in a consistent order: storage, bed, furniture, equipment, bathroom and floor. Adapt the route to the layout. Use category-specific checklists where equipment or supplies differ.",
          "h3Items": [
            {
              "heading": "Bedroom and equipment",
              "text": "Check linen, surfaces, handles, storage and supplies. Test the equipment listed on your checklist: lighting, phone, temperature controls, television or safe. Check minibar and special amenities where these fall within your role. Report faults rather than improvising a repair."
            }
          ]
        },
        {
          "h2": "Inspect the bathroom carefully",
          "content": "Check sanitary fittings and touchpoints, taps, mirrors, shower or bath, seals, towels and consumables. Look for marks, hair, residue and unusual drainage. Include corners, undersides and areas less visible in the lighting. Technical faults and cleaning defects may require different corrective processes."
        },
        {
          "h2": "Record defects and verify correction",
          "content": "Record the location, issue, priority and recipient. Teaching example: a leak under the basin needs a maintenance report and a room-availability decision; a mark on the mirror needs cleaning rework. Assign every action and retain confirmation of closure.",
          "h3Items": [
            {
              "heading": "Avoid unverified corrections",
              "text": "“Request sent” does not mean “issue resolved”. The inspector or designated colleague rechecks the result and updates the record. If the room remains unavailable, reception needs usable information to plan the arrival."
            }
          ]
        },
        {
          "h2": "Release the room and learn from findings",
          "content": "The authorised colleague confirms readiness, updates the designated system and shares the required information. Recurring defects can prompt a review of methods, equipment or skills. Compare similar rooms and service types; understand the cause before treating it as an individual performance issue."
        }
      ],
      "conclusion": "An inspection checklist helps avoid omissions. A shared procedure explains responsibilities, defect handling and who approves availability. The Housekeeping manual provides a basis for developing this with your team.",
      "faqs": [
        {
          "question": "How long should an inspection take?",
          "answer": "Time depends on room category, service type and equipment. Plan from observations on property rather than imposing one duration that compromises inspection."
        },
        {
          "question": "Do suites need a different checklist?",
          "answer": "Include additional areas and equipment. A common core can be supplemented with category-specific checks."
        }
      ],
      "readTime": "4 min read",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Explore the complete manual",
        "href": "/en/playbooks/hsk"
      }
    }
  },
  "hotel-front-desk-procedures": {
    "fr": {
      "title": "Procédures de réception hôtelière : check-in, check-out et passations",
      "seoTitle": "Procédures réception hôtel : check-in et check-out | LuxOps",
      "description": "Les étapes de la réception : préparer les arrivées, accueillir, traiter les demandes, vérifier les départs et transmettre les dossiers en cours.",
      "intro": "Les procédures de réception organisent la continuité du séjour, même lorsque plusieurs collaborateurs interviennent. Elles doivent préciser les vérifications, les limites de décision et les transmissions. Voici une base de travail à adapter aux outils, catégories de chambres et règles de votre établissement.",
      "sections": [
        {
          "h2": "Préparer les arrivées avec les autres services",
          "content": "Au début de la vacation, consultez arrivées, départs, réservations modifiées, demandes particulières et dossiers en attente. Vérifiez les garanties et l’attribution prévue. Faites le point avec les étages sur les chambres disponibles et les priorités ; transmettez les demandes aux services concernés avec un responsable de suivi.",
          "h3Items": [
            {
              "heading": "Identifier les exceptions avant l’arrivée",
              "text": "Repérez les arrivées anticipées, chambres communicantes, besoins d’accessibilité ou prestations particulières. Une note dans le PMS doit indiquer ce qui est confirmé, ce qui reste à vérifier et qui reprend le dossier."
            }
          ]
        },
        {
          "h2": "Réaliser le check-in et expliquer les prochaines étapes",
          "content": "Accueillez le client, retrouvez sa réservation et confirmez identité, dates, catégorie, tarif et prestations. Appliquez les contrôles documentaires et de paiement prévus. Expliquez clairement la garantie ou préautorisation. Avant de remettre l’accès, vérifiez que la chambre est libérée dans le circuit de l’hôtel ; présentez les informations utiles au séjour sans réciter toutes les prestations.",
          "h3Items": [
            {
              "heading": "Si la chambre n’est pas prête",
              "text": "Vérifiez la situation avec les étages, proposez les solutions disponibles et annoncez uniquement une information confirmée. Notez comment joindre le client et qui le recontactera. Une demande de surclassement ou de geste commercial suit les autorisations de l’établissement."
            }
          ]
        },
        {
          "h2": "Prendre en charge demandes et réclamations",
          "content": "Écoutez la demande complète, reformulez le besoin et identifiez le service compétent. Notez l’action, le responsable et la prochaine information à donner au client. Si la situation dépasse votre pouvoir de décision, sollicitez le manager. Fermez le suivi lorsque la réponse a été apportée et vérifiée, pas au moment où le message est envoyé.",
          "h3Items": [
            {
              "heading": "Téléphone et informations sensibles",
              "text": "Confirmez les détails utiles à une demande téléphonique et consignez les rappels ou réveils dans l’outil prévu. Appliquez les règles de confidentialité de l’hôtel avant de communiquer des informations sur un séjour ou de remettre un accès."
            }
          ]
        },
        {
          "h2": "Préparer et réaliser le check-out",
          "content": "Anticipez les départs, vérifiez les prestations à facturer et les modes de règlement prévus. Présentez le détail du compte, clarifiez les contestations avec les justificatifs disponibles puis réalisez le règlement selon les autorisations. Expliquez les démarches liées à la garantie sans promettre un délai bancaire que vous ne maîtrisez pas. Mettez à jour le départ et prévenez les étages.",
          "h3Items": [
            {
              "heading": "Départ tardif ou facturation en attente",
              "text": "Vérifiez la disponibilité et les conditions avant d’accorder un départ tardif. Pour un dossier non clos, notez le montant ou le point à vérifier, le responsable et la prochaine action. Une passation explicite évite de laisser la vacation suivante reconstituer la situation."
            }
          ]
        },
        {
          "h2": "Faire une passation exploitable",
          "content": "Transmettez les dossiers ouverts : client ou chambre, fait vérifié, action réalisée, engagement annoncé, responsable et échéance de suivi. Le collègue qui prend la suite confirme les priorités. Réservations, disponibilité, caisse et anomalies suivent les contrôles propres à l’hôtel. Une procédure réception reste utile si les consignes et contacts sont tenus à jour."
        }
      ],
      "conclusion": "Le manuel Front Office rassemble les procédures de réception et les repères de communication dans une base modifiable. Pour travailler leur application, une formation peut partir d’une arrivée, d’une réclamation ou d’une passation de votre établissement.",
      "faqs": [
        {
          "question": "Comment gérer une demande hors procédure ?",
          "answer": "Vérifiez les faits, expliquez au client la prochaine étape et contactez la personne habilitée. Conservez la responsabilité du suivi jusqu’à transmission acceptée."
        },
        {
          "question": "Ces procédures s’appliquent-elles à tous les PMS ?",
          "answer": "Les contrôles opérationnels restent pertinents, mais les écrans, statuts et droits doivent être documentés pour votre configuration."
        }
      ],
      "readTime": "4 min de lecture",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Découvrir le manuel complet",
        "href": "/fr/playbooks/fo"
      }
    },
    "en": {
      "title": "Hotel front desk procedures: check-in, check-out and handovers",
      "seoTitle": "Hotel Front Desk Procedures: Check-in and Check-out | LuxOps",
      "description": "Front desk operating steps: prepare arrivals, welcome guests, handle requests, check departures and hand over outstanding matters.",
      "intro": "Front desk procedures support continuity throughout the stay, even when several colleagues are involved. They should specify checks, authority and handovers. Use this operating outline as a starting point for your property’s systems, room categories and policies.",
      "sections": [
        {
          "h2": "Prepare arrivals with other departments",
          "content": "At the start of the shift, review arrivals, departures, amended reservations, special requests and pending matters. Check guarantees and planned allocation. Confirm available rooms and priorities with Housekeeping; assign follow-up for requests sent to other departments.",
          "h3Items": [
            {
              "heading": "Identify exceptions before arrival",
              "text": "Identify early arrivals, connecting rooms, accessibility needs and special arrangements. A PMS note should distinguish confirmed details from outstanding checks and name the person following up."
            }
          ]
        },
        {
          "h2": "Complete check-in and explain next steps",
          "content": "Welcome the guest, retrieve the reservation and confirm identity, dates, room category, rate and inclusions. Follow the required document and payment checks. Explain guarantees or pre-authorisation clearly. Before issuing access, confirm that the room has been released under hotel procedures; explain useful stay information without reciting every facility.",
          "h3Items": [
            {
              "heading": "If the room is not ready",
              "text": "Check with Housekeeping, offer available options and communicate only confirmed information. Record how to contact the guest and who will do so. Upgrades or goodwill gestures must follow the property’s approval rules."
            }
          ]
        },
        {
          "h2": "Handle requests and complaints",
          "content": "Listen fully, confirm the need and identify the right department. Record the action, owner and next update for the guest. Involve the manager when a decision exceeds your authority. Close the matter after the response has been delivered and checked, not when a message is sent.",
          "h3Items": [
            {
              "heading": "Calls and sensitive information",
              "text": "Confirm relevant details of telephone requests and record callbacks or wake-up calls in the designated system. Follow privacy rules before sharing stay information or issuing room access."
            }
          ]
        },
        {
          "h2": "Prepare and complete check-out",
          "content": "Review expected departures, pending charges and agreed payment arrangements. Present the folio, resolve queries using available records and process payment within your authority. Explain guarantee-related steps without promising a bank processing time you cannot control. Update the departure and notify Housekeeping.",
          "h3Items": [
            {
              "heading": "Late departure or pending charges",
              "text": "Check availability and policy before approving late check-out. For an unresolved folio, record the amount or query, owner and next action. An explicit handover prevents the next shift having to reconstruct the situation."
            }
          ]
        },
        {
          "h2": "Provide an actionable handover",
          "content": "For open matters, hand over the guest or room, verified facts, action taken, commitment made, owner and follow-up time. The receiving colleague confirms priorities. Reservations, availability, cash and discrepancies follow the hotel’s checks. Keep instructions and contacts current so procedures remain useful."
        }
      ],
      "conclusion": "The Front Office manual brings reception procedures and communication guidance into an editable reference. Training can work on their application using an arrival, complaint or handover from your property.",
      "faqs": [
        {
          "question": "How should staff handle an exception?",
          "answer": "Check the facts, explain the next step to the guest and contact the authorised person. Keep responsibility until the handover has been accepted."
        },
        {
          "question": "Do these procedures apply to every PMS?",
          "answer": "The operating checks remain relevant, but screens, statuses and permissions need to be documented for your setup."
        }
      ],
      "readTime": "4 min read",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Explore the complete manual",
        "href": "/en/playbooks/fo"
      }
    }
  },
  "hotel-front-office-sop": {
    "fr": {
      "title": "SOP Front Office : modèle et structure d’un manuel de réception",
      "seoTitle": "SOP Front Office : structure et modèle de manuel | LuxOps",
      "description": "Comment rédiger une SOP Front Office : structure, responsabilités, contrôles, exceptions et mise à jour. Modèle de fiche et exemple de passation.",
      "intro": "Un manuel de réception doit aider un collaborateur à trouver la bonne instruction pendant son travail. Sa valeur dépend de la précision des fiches, de leur adaptation au PMS et de leur entretien. Cette page explique comment construire la documentation ; le guide des procédures de réception détaille le déroulement du check-in et du check-out.",
      "sections": [
        {
          "h2": "Organiser le manuel par situations de travail",
          "content": "Regroupez les fiches selon le parcours réel : préparation des arrivées, accueil, séjour, départ, contrôle et passation. Ajoutez les situations transversales comme les réclamations, la confidentialité et les demandes techniques. Un index clair et des noms de fichiers cohérents permettent de retrouver une fiche sans connaître le plan par cœur.",
          "h3Items": [
            {
              "heading": "Une fiche pour une tâche identifiable",
              "text": "Évitez les fiches qui mélangent toutes les missions de la réception. « Préparer les arrivées du jour » ou « Transmettre une demande non résolue » désignent un déclencheur et un résultat que l’on peut vérifier. Reliez les fiches quand une tâche mène à une autre."
            }
          ]
        },
        {
          "h2": "Le modèle de fiche SOP Front Office",
          "content": "Utilisez la même structure pour toutes les procédures afin que l’équipe sache où chercher. Les champs suivants constituent une trame à compléter avec vos règles et vos outils.",
          "h3Items": [
            {
              "heading": "Titre, objectif et déclencheur",
              "text": "Nommez la tâche, le résultat attendu et le moment où la procédure s’applique. Exemple : transmettre un dossier ouvert avant la fin de vacation afin que le client conserve un interlocuteur."
            },
            {
              "heading": "Responsable, outils et étapes",
              "text": "Précisez qui réalise et qui valide, quels outils ou documents sont nécessaires, puis les étapes dans l’ordre. Utilisez un verbe d’action par étape et des libellés correspondant à votre PMS."
            },
            {
              "heading": "Contrôles, exceptions et transmission",
              "text": "Indiquez les informations à vérifier, les limites d’autorisation, qui contacter en cas d’exception et ce qu’il faut transmettre. Définissez la preuve de réalisation sans collecter de données inutiles."
            },
            {
              "heading": "Validation, version et révision",
              "text": "Nommez le propriétaire de la fiche, la personne qui valide, la version et la date de révision. Décrivez comment retirer l’ancienne version et informer les utilisateurs."
            }
          ]
        },
        {
          "h2": "Exemple rempli : transmettre une demande en attente",
          "content": "Exemple pédagogique de fiche, à adapter : objectif — assurer le suivi d’une demande client après changement de vacation. Déclencheur — la demande reste ouverte à la passation. Responsable — le réceptionniste sortant, puis le collègue qui accepte le suivi. Outil — le journal de passation ou le suivi des demandes utilisé par l’hôtel.",
          "h3Items": [
            {
              "heading": "Étapes et contrôle de clôture",
              "text": "1. Vérifier l’état réel de la demande. 2. Noter chambre, besoin, action déjà réalisée et engagement annoncé. 3. Désigner le repreneur et le prochain suivi. 4. Obtenir sa confirmation. 5. Clôturer après réponse apportée au client. En cas d’absence de repreneur ou de délai impossible à tenir, solliciter le responsable."
            }
          ]
        },
        {
          "h2": "Tester la fiche avant de la diffuser",
          "content": "Faites utiliser la fiche à un collaborateur qui n’a pas participé à sa rédaction. Observez les hésitations, les informations manquantes et les termes qui ne correspondent pas à l’outil. Testez aussi une exception. Le responsable ajuste et valide la version avant une présentation courte à l’équipe."
        },
        {
          "h2": "Maintenir le référentiel dans la durée",
          "content": "Une évolution de tarif, d’autorisation, de logiciel ou d’organisation peut rendre une fiche inexacte. Prévoyez une revue lors de ces changements et un moyen simple de signaler les difficultés. Les briefings et l’intégration des nouveaux collaborateurs doivent pointer vers la même version. Un manuel modifiable permet de conserver cette cohérence."
        }
      ],
      "conclusion": "Le manuel Front Office LuxOps peut servir de base pour construire votre référentiel. Adaptez les fiches à votre établissement, testez-les en service et confiez leur suivi à un responsable identifié.",
      "faqs": [
        {
          "question": "Quelle différence entre SOP et checklist ?",
          "answer": "La SOP explique comment et par qui une tâche est réalisée. La checklist rappelle les points à vérifier. Les deux peuvent être reliées sans dupliquer tout leur contenu."
        },
        {
          "question": "Peut-on partir d’un modèle existant ?",
          "answer": "Oui, après vérification des étapes, responsabilités, outils et règles propres à votre établissement. Un modèle doit être adapté puis testé avant diffusion."
        }
      ],
      "readTime": "4 min de lecture",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Découvrir le manuel complet",
        "href": "/fr/playbooks/fo"
      }
    },
    "en": {
      "title": "Front Office SOP: a template and structure for your reception manual",
      "seoTitle": "Front Office SOP: Manual Structure and Template | LuxOps",
      "description": "How to write a Front Office SOP: structure, responsibilities, checks, exceptions and updates. A procedure template and handover example.",
      "intro": "A reception manual should help colleagues find the right instruction during work. Its value depends on precise procedures, fit with the PMS and regular maintenance. This guide explains how to build the documentation; the front desk procedures guide covers the operating sequence for check-in and check-out.",
      "sections": [
        {
          "h2": "Organise the manual around work situations",
          "content": "Group procedures around real work: arrival preparation, welcome, stay, departure, checks and handover. Include cross-cutting situations such as complaints, privacy and maintenance requests. A clear index and consistent file names help staff find a procedure without memorising the structure.",
          "h3Items": [
            {
              "heading": "One procedure for an identifiable task",
              "text": "Avoid procedures that combine every front desk duty. “Prepare today’s arrivals” or “Hand over an unresolved request” identify a trigger and a result that can be checked. Link procedures when one task leads to another."
            }
          ]
        },
        {
          "h2": "A Front Office SOP template",
          "content": "Use a consistent structure so colleagues know where to look. The following fields provide a template to complete with your rules and systems.",
          "h3Items": [
            {
              "heading": "Title, purpose and trigger",
              "text": "Name the task, expected result and when the procedure applies. Example: hand over an open matter before shift end so the guest retains a point of contact."
            },
            {
              "heading": "Owner, tools and steps",
              "text": "Identify who performs and approves the task, required systems or documents and the ordered steps. Use an action verb for each step and labels matching your PMS."
            },
            {
              "heading": "Checks, exceptions and handover",
              "text": "Specify checks, approval limits, escalation contacts and what must be handed over. Define evidence of completion without collecting unnecessary data."
            },
            {
              "heading": "Approval, version and review",
              "text": "Name the procedure owner, approver, version and review date. Explain how obsolete versions are withdrawn and users informed."
            }
          ]
        },
        {
          "h2": "Worked example: hand over a pending request",
          "content": "Adaptable teaching example: purpose — maintain follow-up on a guest request across shifts. Trigger — the request remains open at handover. Owner — the outgoing receptionist, then the colleague accepting follow-up. Tool — the hotel’s handover log or request system.",
          "h3Items": [
            {
              "heading": "Steps and closure check",
              "text": "1. Check the request’s current status. 2. Record room, need, action taken and commitment made. 3. Identify the next owner and update time. 4. Obtain acknowledgement. 5. Close after the guest has received the response. Escalate if no owner is available or the promised timing cannot be met."
            }
          ]
        },
        {
          "h2": "Test before publishing",
          "content": "Ask a colleague who did not write the procedure to use it. Observe hesitation, missing information and terminology that differs from the system. Test an exception too. The manager adjusts and approves the version before a short team briefing."
        },
        {
          "h2": "Maintain the reference over time",
          "content": "Changes to rates, authority, systems or organisation can make a procedure inaccurate. Review it when these changes occur and provide an easy way to report difficulties. Briefings and onboarding should refer to the same version. Editable documentation helps maintain consistency."
        }
      ],
      "conclusion": "The LuxOps Front Office manual can provide a starting point for your reference. Adapt procedures to your property, test them during service and assign responsibility for maintaining them.",
      "faqs": [
        {
          "question": "How does an SOP differ from a checklist?",
          "answer": "An SOP explains how a task is performed and by whom. A checklist summarises what to check. Link them without duplicating all their content."
        },
        {
          "question": "Can we start with an existing template?",
          "answer": "Yes, after checking steps, responsibilities, systems and your property’s rules. Adapt and test a template before publishing it."
        }
      ],
      "readTime": "4 min read",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Explore the complete manual",
        "href": "/en/playbooks/fo"
      }
    }
  },
  "hotel-fb-restaurant-procedures": {
    "fr": {
      "title": "Procédures restaurant : ouverture, service et fermeture",
      "seoTitle": "Procédures restaurant : ouverture et fermeture | LuxOps",
      "description": "Organiser le restaurant avant, pendant et après le service : briefing, mise en place, commandes, coordination cuisine, clôture et passation.",
      "intro": "Une procédure restaurant précise qui prépare, qui vérifie et qui reprend une demande lorsqu’elle passe de la salle à la cuisine ou au bar. Elle complète les standards de relation client par une organisation concrète. Ce guide suit les trois temps du service et peut servir de base à vos checklists.",
      "sections": [
        {
          "h2": "Avant l’ouverture : vérifier les conditions du service",
          "content": "Le responsable confirme réservations, couverts attendus, demandes particulières et répartition des postes. Les équipes vérifient propreté, dressage, stocks de service, matériel et fonctionnement du POS. Les manquants ou pannes sont signalés avant l’accueil afin de décider d’une solution et de l’expliquer à l’équipe.",
          "h3Items": [
            {
              "heading": "Salle, bar et office",
              "text": "Contrôlez tables, chaises, linge, verrerie, couverts et cartes à jour. Vérifiez les zones de passage et les postes de travail. Au bar et à l’office, préparez le matériel et les produits selon les règles internes d’hygiène, de stockage et de mise en place."
            }
          ]
        },
        {
          "h2": "Tenir un briefing avant service",
          "content": "Le briefing réunit les informations utiles à l’exécution : carte, indisponibilités, suggestions, rythme attendu, tables particulières et consignes de coordination. Chacun doit connaître son rôle, son relais et le responsable à solliciter. Faites confirmer les points sensibles plutôt que de lire une longue liste.",
          "h3Items": [
            {
              "heading": "Relier la salle à la cuisine",
              "text": "Confirmez le circuit des commandes, les modifications acceptées et la manière de transmettre une allergie ou une demande spécifique. Si une réponse n’est pas certaine, elle est vérifiée auprès de la personne compétente avant d’être annoncée au client."
            }
          ]
        },
        {
          "h2": "Pendant le service : suivre la commande jusqu’à la table",
          "content": "Accueillez, vérifiez la réservation ou la disponibilité, installez et présentez les informations utiles. Lors de la commande, confirmez les choix, cuissons et demandes, puis saisissez et transmettez dans le circuit prévu. Suivez l’avancement avec la cuisine et le bar ; informez le client d’un délai confirmé ou d’une modification nécessaire.",
          "h3Items": [
            {
              "heading": "Traiter un incident avec un responsable",
              "text": "Pour un plat incorrect ou une demande oubliée, identifiez la correction, son responsable et le prochain retour au client. Une transmission en cuisine ne clôt pas le sujet. Le collaborateur chargé de la table vérifie ensuite que la réponse a été apportée."
            }
          ]
        },
        {
          "h2": "Après le service : clôturer et préparer la suite",
          "content": "Vérifiez les comptes et encaissements selon les responsabilités et droits prévus. Rangez, nettoyez et réapprovisionnez les postes conformément aux procédures internes. Signalez casse, panne, rupture et produit à surveiller. Distinguez les tâches terminées des actions à reprendre avant le prochain service.",
          "h3Items": [
            {
              "heading": "La passation de fermeture",
              "text": "Notez fait observé, action réalisée, responsable et échéance. Incluez les réservations ou demandes à préparer, les comptes non clos et les incidents restant à suivre. Le responsable vérifie la fermeture des zones et équipements selon les règles de l’établissement."
            }
          ]
        },
        {
          "h2": "Transformer ces étapes en outils de travail",
          "content": "Créez une checklist d’ouverture et une de fermeture, chacune avec les responsabilités et un contrôle de clôture. Gardez les consignes détaillées dans les SOP correspondantes. Testez les listes pendant un service réel et ajustez les doublons, oublis et points difficiles à vérifier. Le responsable peut utiliser un écart récurrent comme exercice lors d’un briefing."
        }
      ],
      "conclusion": "Les checklists rappellent les tâches. Le manuel F&B relie leur préparation à la conduite du service, aux transmissions et à la gestion des situations clients. Il fournit une base à adapter au fonctionnement de votre restaurant.",
      "faqs": [
        {
          "question": "À quelle heure commencer la mise en place ?",
          "answer": "Définissez l’heure à partir du volume attendu, du type de service, des tâches et de l’effectif. Le briefing doit laisser le temps de corriger les manquants avant l’accueil."
        },
        {
          "question": "Faut-il une procédure différente pour le bar ou le room service ?",
          "answer": "Oui pour les étapes spécifiques, avec un socle commun de transmission, contrôle et suivi client. Évitez de faire tenir tous les métiers dans une seule checklist."
        }
      ],
      "readTime": "4 min de lecture",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Découvrir le manuel complet",
        "href": "/fr/playbooks/fb"
      }
    },
    "en": {
      "title": "Restaurant procedures: opening, service and closing",
      "seoTitle": "Restaurant Procedures: Opening, Service and Closing | LuxOps",
      "description": "Organise restaurant operations before, during and after service: briefing, setup, orders, kitchen coordination, closing and handover.",
      "intro": "A restaurant procedure specifies who prepares, who checks and who owns a request as it moves between dining room, kitchen and bar. It gives service standards a practical operating structure. This guide follows the three phases of service and can inform your checklists.",
      "sections": [
        {
          "h2": "Before opening: check readiness",
          "content": "The manager confirms reservations, expected covers, special requests and station assignments. Teams check cleanliness, table setup, service stock, equipment and POS operation. Report shortages or faults before welcoming guests so a solution can be agreed and shared.",
          "h3Items": [
            {
              "heading": "Dining room, bar and service areas",
              "text": "Check tables, chairs, linen, glassware, cutlery and current menus. Inspect circulation and work areas. Prepare bar and service-area equipment and supplies under internal hygiene, storage and setup procedures."
            }
          ]
        },
        {
          "h2": "Hold a pre-service briefing",
          "content": "The briefing covers information needed for service: menu changes, unavailable items, suggestions, expected pace, particular tables and coordination. Everyone needs to know their role, backup and escalation contact. Ask staff to confirm critical details rather than reading a long list.",
          "h3Items": [
            {
              "heading": "Connect dining room and kitchen",
              "text": "Confirm order routing, permitted modifications and how allergies or special requests are communicated. If a response is uncertain, verify it with the responsible person before telling the guest."
            }
          ]
        },
        {
          "h2": "During service: follow the order through to the table",
          "content": "Welcome guests, check reservations or availability, seat them and explain relevant information. Confirm choices, cooking preferences and requests when taking the order, then enter and transmit it through the agreed process. Coordinate progress with kitchen and bar; communicate confirmed delays or necessary changes.",
          "h3Items": [
            {
              "heading": "Assign ownership for incidents",
              "text": "For an incorrect dish or missed request, agree the correction, owner and next guest update. Passing a message to the kitchen does not close the issue. The colleague responsible for the table checks that the response was delivered."
            }
          ]
        },
        {
          "h2": "After service: close and prepare the next team",
          "content": "Check bills and payments within assigned responsibilities and permissions. Clean, store and replenish workstations under internal procedures. Record breakages, faults, shortages and items needing attention. Distinguish completed tasks from actions required before the next service.",
          "h3Items": [
            {
              "heading": "Closing handover",
              "text": "Record the issue, action taken, owner and due time. Include upcoming reservations or requests, unresolved bills and incidents still requiring attention. The manager checks areas and equipment have been closed under property rules."
            }
          ]
        },
        {
          "h2": "Turn the sequence into working tools",
          "content": "Create opening and closing checklists with responsibilities and completion checks. Keep detailed instructions in the relevant SOPs. Test the lists during a real service and adjust duplication, omissions and items that are hard to verify. Managers can use a recurring issue as a briefing exercise."
        }
      ],
      "conclusion": "Checklists remind staff of tasks. The F&B manual connects preparation with service delivery, handovers and guest situations, providing a reference to adapt to your restaurant.",
      "faqs": [
        {
          "question": "When should setup begin?",
          "answer": "Plan around expected volume, service style, tasks and staffing. Leave time after briefing to resolve gaps before welcoming guests."
        },
        {
          "question": "Do bar and room service need separate procedures?",
          "answer": "Use separate instructions for specific tasks, with shared principles for communication, checking and guest follow-up. Avoid putting every role into one checklist."
        }
      ],
      "readTime": "4 min read",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Explore the complete manual",
        "href": "/en/playbooks/fb"
      }
    }
  },
  "hotel-fb-service-standards": {
    "fr": {
      "title": "Standards de service en restauration hôtelière : salle, bar et room service",
      "seoTitle": "Standards de service F&B : restaurant et bar | LuxOps",
      "description": "Définir des standards F&B observables : accueil, conseil, rythme, précision des commandes et suivi client en restaurant, bar et room service.",
      "intro": "Les standards F&B décrivent ce que le client doit percevoir : un accueil attentif, une commande comprise, un conseil pertinent et un service coordonné. Les procédures organisent les tâches qui rendent ce résultat possible. Cette page porte sur la qualité de la prise en charge, à adapter au concept et au niveau de service de votre établissement.",
      "sections": [
        {
          "h2": "Décrire des comportements que l’on peut observer",
          "content": "« Être attentionné » doit se traduire en actions : reconnaître l’arrivée, confirmer une demande, expliquer une attente ou revenir vérifier la satisfaction. Définissez le résultat attendu sans imposer une phrase identique à tous les clients. Les standards de délai sont fixés selon votre organisation ; lorsqu’un engagement ne peut être tenu, le client doit recevoir une information fiable."
        },
        {
          "h2": "En salle : accueil, conseil et rythme",
          "content": "Vérifiez réservation et préférences, accompagnez l’installation et adaptez la présentation de la carte au client. Le conseil repose sur une connaissance réelle des produits, des cuissons et des disponibilités. Observez le rythme de la table avant de proposer la suite ; coordonnez avec la cuisine lorsque le client exprime une contrainte de temps.",
          "h3Items": [
            {
              "heading": "Confirmer les demandes particulières",
              "text": "Reformulez la commande et transmettez explicitement allergies ou restrictions selon le protocole interne. Vérifiez la réponse auprès de la cuisine avant d’affirmer qu’une adaptation est possible. Le suivi doit rester identifiable jusqu’au service du plat."
            }
          ]
        },
        {
          "h2": "Au bar : rendre le conseil précis et la préparation cohérente",
          "content": "Accueillez le client même lorsqu’une commande est déjà en préparation, puis précisez la prochaine étape. Le personnel connaît les produits, les options sans alcool et les caractéristiques utiles pour conseiller. Recettes, verrerie, garnitures et présentation suivent les fiches validées. Une indisponibilité se traite avec une alternative expliquée, pas une substitution silencieuse."
        },
        {
          "h2": "En room service : fiabilité de la commande et discrétion",
          "content": "Confirmez chambre, nombre de personnes, choix, demandes et délai annoncé avec les informations disponibles. Contrôlez la commande et sa présentation avant le départ. À l’arrivée, appliquez les règles d’accès à la chambre, demandez où installer et expliquez le retrait du plateau. Coordonnez ensuite ce retrait avec les services concernés."
        },
        {
          "h2": "Répondre à une insatisfaction et accompagner l’équipe",
          "content": "Laissez le client expliquer, reconnaissez le point soulevé et vérifiez les faits utiles. Proposez une action dans votre champ d’autorisation ou sollicitez le responsable. Annoncez une prochaine information et vérifiez ensuite la réponse apportée. L’objectif est une prise en charge suivie, sans promesse de compensation automatique.",
          "h3Items": [
            {
              "heading": "Un exercice pour le briefing",
              "text": "Exemple pédagogique : un client indique que son plat ne correspond pas à sa commande. Faites jouer la prise en charge, observez la reformulation, la coordination et le retour au client. Donnez un feedback factuel et rejouez avec une contrainte différente. Le responsable observe ensuite ce même point pendant le service."
            }
          ]
        }
      ],
      "conclusion": "Un standard devient utile lorsque l’équipe sait le reconnaître et l’appliquer. Le manuel F&B apporte une référence écrite ; la formation permet de travailler le conseil, la communication et les décisions dans les situations de votre établissement.",
      "faqs": [
        {
          "question": "Comment contrôler un standard relationnel ?",
          "answer": "Choisissez des comportements observables : demande confirmée, information fiable, suivi réalisé. Échangez sur les faits observés, en laissant au collaborateur son style de communication."
        },
        {
          "question": "Quelle différence avec les procédures restaurant ?",
          "answer": "Les standards décrivent la qualité attendue de l’expérience. Les procédures détaillent l’organisation, les étapes, les outils et les responsabilités nécessaires pour la produire."
        }
      ],
      "readTime": "4 min de lecture",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Découvrir le manuel complet",
        "href": "/fr/playbooks/fb"
      }
    },
    "en": {
      "title": "Hotel F&B service standards: restaurant, bar and room service",
      "seoTitle": "Hotel F&B Service Standards: Restaurant and Bar | LuxOps",
      "description": "Define observable F&B standards for welcome, recommendations, pacing, order accuracy and guest follow-up in restaurant, bar and room service.",
      "intro": "F&B standards describe what guests should experience: an attentive welcome, an understood order, relevant advice and coordinated service. Procedures organise the tasks that make this possible. This guide focuses on guest-facing quality, adapted to your property’s concept and service style.",
      "sections": [
        {
          "h2": "Describe observable behaviours",
          "content": "“Be attentive” needs to translate into actions: acknowledge arrivals, confirm requests, explain a wait or check satisfaction. Define the outcome without requiring identical wording for every guest. Set timing standards around your operation; when a commitment cannot be met, give the guest reliable information."
        },
        {
          "h2": "In the restaurant: welcome, advice and pacing",
          "content": "Check reservations and preferences, assist with seating and tailor menu explanations to the guest. Recommendations require knowledge of products, cooking options and availability. Observe the table’s pace before moving to the next course; coordinate with the kitchen when guests mention time constraints.",
          "h3Items": [
            {
              "heading": "Confirm special requests",
              "text": "Repeat the order and communicate allergies or restrictions explicitly under the internal protocol. Verify with the kitchen before confirming that an adaptation is possible. Keep clear ownership through delivery of the dish."
            }
          ]
        },
        {
          "h2": "At the bar: accurate advice and consistent preparation",
          "content": "Acknowledge guests even while preparing another order, then explain what happens next. Staff should know products, alcohol-free options and relevant details for recommendations. Use approved recipes, glassware, garnishes and presentation. Explain an alternative when an item is unavailable rather than substituting without notice."
        },
        {
          "h2": "In room service: order accuracy and discretion",
          "content": "Confirm the room, number of guests, choices, requests and delivery estimate using available information. Check the order and presentation before leaving. Follow room-access rules, ask where to set up and explain tray collection. Coordinate collection with the relevant departments."
        },
        {
          "h2": "Handle dissatisfaction and support the team",
          "content": "Let the guest explain, acknowledge the issue and check relevant facts. Offer an action within your authority or involve the manager. Explain the next update and verify the response afterwards. Aim for accountable follow-up without promising automatic compensation.",
          "h3Items": [
            {
              "heading": "A briefing exercise",
              "text": "Teaching example: a guest says the dish does not match their order. Role-play the response and observe clarification, coordination and follow-up. Give factual feedback and repeat with a different constraint. The manager then observes the same behaviour during service."
            }
          ]
        }
      ],
      "conclusion": "A standard becomes useful when staff can recognise and apply it. The F&B manual provides a written reference; training develops advice, communication and decisions through your property’s situations.",
      "faqs": [
        {
          "question": "How can interpersonal standards be assessed?",
          "answer": "Choose observable behaviours: a confirmed request, reliable information and completed follow-up. Discuss the observations while allowing the colleague their own communication style."
        },
        {
          "question": "How does this differ from restaurant procedures?",
          "answer": "Standards describe expected guest experience. Procedures define the organisation, steps, tools and responsibilities needed to deliver it."
        }
      ],
      "readTime": "4 min read",
      "dateModified": "2026-11-07",
      "cta": {
        "text": "Explore the complete manual",
        "href": "/en/playbooks/fb"
      }
    }
  }
}

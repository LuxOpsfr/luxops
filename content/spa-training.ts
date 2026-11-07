import type { TrainingSeoPageData } from '@/components/TrainingSeoPage'
import type { BilingualArticle } from './blog/articles'
export const spaTrainingPathway = {
  "slug": "formation-spa-hotel",
  "image": "/images/editorial-hospitality/spa-treatment-room.png",
  "manualImage": "/images/editorial-hospitality/spa-wellness.jpg",
  "articles": [
    "hotel-spa-staff-training"
  ],
  "fr": {
    "name": "Formation Spa",
    "title": "Formation Spa : faire de chaque attention un moment de bien-être.",
    "promise": "Affinez la qualité de l’accueil, la personnalisation et la coordination de vos équipes pour une expérience Spa à la hauteur des standards cinq étoiles.",
    "audience": "Équipes d’accueil Spa, praticiens, superviseurs et Spa Managers souhaitant faire progresser l’expérience client et la qualité de leur organisation.",
    "exercise": "Un client arrive avec une attente particulière alors que le planning se décale. Ajuster l’accueil, clarifier ses préférences, coordonner la prise en charge avec le praticien et préserver le calme du parcours. Débriefer les choix et les transmissions avec le responsable.",
    "measures": [
      "Qualité de l’écoute et de la personnalisation",
      "Fluidité des transmissions entre accueil et praticiens",
      "Cohérence des standards et du coaching en service"
    ],
    "articles": [
      "Former les équipes Spa à l’excellence de service"
    ],
    "imageAlt": "Cabine de soin préparée dans un Spa hôtelier"
  },
  "en": {
    "name": "Spa training",
    "title": "Spa training: make every detail part of the guest’s wellbeing.",
    "promise": "Refine your team’s welcome, personalisation and coordination to deliver a Spa experience worthy of five-star hospitality.",
    "audience": "Spa reception teams, therapists, supervisors and Spa Managers looking to develop the guest experience and improve the way their teams work.",
    "exercise": "A guest arrives with a particular expectation while appointments are running behind. Adapt the welcome, clarify preferences, coordinate with the therapist and preserve a calm experience. Discuss decisions and handovers with the manager.",
    "measures": [
      "Quality of listening and personalisation",
      "Smooth handovers between reception and therapists",
      "Consistent standards and coaching during service"
    ],
    "articles": [
      "Training Spa teams for service excellence"
    ],
    "imageAlt": "Treatment room prepared for a guest in a hotel Spa"
  }
} as const
export const spaTrainingPageData: Record<'fr' | 'en', TrainingSeoPageData> = {
  "fr": {
    "badge": "Formation Spa",
    "title": "Formation Spa : faire de chaque attention un moment de bien-être.",
    "intro": "Un accompagnement en situation pour renforcer le savoir-être, le conseil et les méthodes de travail de vos équipes Spa.",
    "context": "La qualité d’un Spa se joue aussi entre les soins : une préférence reconnue, une transition sans attente et une attention qui arrive au bon moment.",
    "primaryCta": "Parlons de votre projet",
    "secondaryCta": "Découvrir le Manuel SOP Spa",
    "secondaryHref": "/fr/playbooks/spa",
    "overviewLabel": "L’expérience Spa",
    "overviewTitle": "Une même exigence, tout au long du parcours.",
    "overviewText": "La formation part de vos pratiques et de votre identité de service. Elle permet aux collaborateurs de perfectionner leur posture, de mieux se coordonner et de transmettre les standards aux nouveaux arrivants.",
    "modulesLabel": "Programme Spa",
    "modulesTitle": "Développer l’excellence au-delà du geste technique.",
    "modules": [
      {
        "title": "Une présence juste, de l’accueil au départ",
        "text": "Affiner le langage, la discrétion et la gestuelle. Reconnaître les attentes du client sans multiplier les questions, et donner à chaque interaction une tonalité cohérente avec votre Spa."
      },
      {
        "title": "Personnaliser avec discernement",
        "text": "Transformer les préférences exprimées en attentions concrètes. Construire des recommandations adaptées, confirmer la compréhension et transmettre les informations utiles au bon interlocuteur."
      },
      {
        "title": "Un parcours fluide entre les espaces",
        "text": "Coordonner réservation, vestiaires, cabine et espace de repos. Travailler les transitions, l’anticipation des retards et la prise en charge des imprévus sans rompre la sérénité du séjour."
      },
      {
        "title": "Des responsables qui font progresser les équipes",
        "text": "Faire du briefing et de l’observation des occasions de perfectionnement. Donner un feedback précis, partager les bonnes pratiques et accompagner l’autonomie des collaborateurs."
      },
      {
        "title": "Des outils au service de l’attention",
        "text": "Mieux utiliser planning, logiciel de réservation et informations clients pour préparer les rendez-vous et fiabiliser les transmissions. Simplifier les routines administratives qui interrompent la relation."
      },
      {
        "title": "Des standards qui restent vivants",
        "text": "Formaliser les repères d’accueil, de présentation et de suivi. Relier SOP, checklists et parcours d’intégration pour maintenir une expérience cohérente au fil des équipes."
      }
    ],
    "methodLabel": "Méthode",
    "methodTitle": "Observer, essayer et affiner dans votre environnement.",
    "methodText": "Nous partons de votre parcours client, de votre carte et des situations rencontrées par l’équipe. Les mises en situation sont suivies d’un retour précis, puis traduites en repères que les responsables peuvent reprendre en service.",
    "outcomes": [
      "Personnaliser la relation sans perdre la discrétion.",
      "Fluidifier les transitions entre accueil et praticiens.",
      "Développer un conseil pertinent, au rythme du client.",
      "Transmettre des standards utilisables au quotidien."
    ],
    "relatedLabel": "Pour aller plus loin",
    "relatedTitle": "Formation et références Spa",
    "related": [
      {
        "href": "/fr/blog/hotel-spa-wellness-sops",
        "title": "SOP Spa & Wellness",
        "text": ""
      },
      {
        "href": "/fr/playbooks/spa",
        "title": "Manuel SOP Spa",
        "text": ""
      }
    ],
    "finalTitle": "Formation Spa : faire de chaque attention un moment de bien-être.",
    "finalText": "Affinez la qualité de l’accueil, la personnalisation et la coordination de vos équipes pour une expérience Spa à la hauteur des standards cinq étoiles.",
    "finalCta": "Parlons de votre projet"
  },
  "en": {
    "badge": "Spa training",
    "title": "Spa training: make every detail part of the guest’s wellbeing.",
    "intro": "Practical team development to strengthen service presence, recommendations and working methods across your Spa.",
    "context": "Spa quality also takes shape between treatments: a recognised preference, a seamless transition and thoughtful attention at the right moment.",
    "primaryCta": "Let’s discuss your project",
    "secondaryCta": "Explore the Spa SOP Manual",
    "secondaryHref": "/en/playbooks/spa",
    "overviewLabel": "The Spa experience",
    "overviewTitle": "A shared standard across the guest journey.",
    "overviewText": "Training starts with your practices and service identity. It helps colleagues refine their presence, coordinate confidently and pass standards on to new team members.",
    "modulesLabel": "Spa programme",
    "modulesTitle": "Develop excellence beyond the treatment itself.",
    "modules": [
      {
        "title": "Thoughtful presence, from welcome to farewell",
        "text": "Refine language, discretion and gestures. Recognise expectations without overwhelming guests with questions, and bring a consistent tone to every interaction."
      },
      {
        "title": "Personalisation with sound judgement",
        "text": "Turn expressed preferences into thoughtful actions. Make relevant recommendations, confirm understanding and pass useful information to the right colleague."
      },
      {
        "title": "A seamless journey between spaces",
        "text": "Coordinate reservations, changing areas, treatment rooms and relaxation spaces. Practise transitions, anticipate delays and handle unexpected situations while preserving calm."
      },
      {
        "title": "Managers who develop their teams",
        "text": "Use briefings and observation to refine practice. Give specific feedback, share effective approaches and help colleagues build professional judgement."
      },
      {
        "title": "Systems that support attentive service",
        "text": "Use scheduling, booking systems and guest information to prepare appointments and improve handovers. Simplify administrative routines that interrupt the relationship."
      },
      {
        "title": "Standards that remain part of daily practice",
        "text": "Document welcome, presentation and follow-up standards. Connect SOPs, checklists and onboarding to sustain a coherent guest experience across teams."
      }
    ],
    "methodLabel": "Method",
    "methodTitle": "Observe, practise and refine in your own setting.",
    "methodText": "We work with your guest journey, treatment menu and situations your team encounters. Practical scenarios lead to specific feedback and shared practices managers can revisit during service.",
    "outcomes": [
      "Personalise service while respecting discretion.",
      "Improve transitions between reception and therapists.",
      "Develop relevant recommendations at the guest’s pace.",
      "Pass on standards the team can use every day."
    ],
    "relatedLabel": "Explore further",
    "relatedTitle": "Spa training and references",
    "related": [
      {
        "href": "/en/blog/hotel-spa-wellness-sops",
        "title": "SOP Spa & Wellness",
        "text": ""
      },
      {
        "href": "/en/playbooks/spa",
        "title": "Spa SOP Manual",
        "text": ""
      }
    ],
    "finalTitle": "Spa training: make every detail part of the guest’s wellbeing.",
    "finalText": "Refine your team’s welcome, personalisation and coordination to deliver a Spa experience worthy of five-star hospitality.",
    "finalCta": "Let’s discuss your project"
  }
}
export const spaTrainingArticle: BilingualArticle = {
  "slug": "hotel-spa-staff-training",
  "fr": {
    "title": "Formation Spa en hôtel : développer l’excellence de service",
    "description": "Comment former les équipes Spa à une expérience cinq étoiles : accueil, personnalisation, coordination, outils et suivi des standards.",
    "date": "2026-11-07",
    "readTime": "7 min de lecture",
    "intro": "Les équipes Spa maîtrisent leur métier. Pour faire progresser l’expérience client, la formation doit travailler ce qui relie les savoir-faire : la qualité de l’attention, les décisions prises en situation et la continuité entre les interlocuteurs. Voici comment construire un programme adapté à votre hôtel et l’inscrire dans les pratiques de l’équipe.",
    "sections": [
      {
        "h2": "Que doit couvrir une formation des équipes Spa en hôtel ?",
        "content": "Un programme utile suit le parcours réel du client : réservation, arrivée, préparation du soin, transitions, repos et départ. L’enjeu est de relier les compétences de chaque poste pour que l’expérience reste cohérente. L’accueil doit pouvoir expliquer la carte avec justesse ; le praticien doit recevoir les informations utiles ; le responsable doit pouvoir observer ce qui fonctionne et ce qui mérite d’être repris. Commencez par identifier les moments où votre promesse de service devient difficile à tenir.",
        "h3Items": [
          {
            "heading": "Accueil et qualité de la relation",
            "text": "Travailler l’écoute, le vocabulaire, la discrétion et la capacité à adapter son rythme au client. Une attention personnalisée vient d’une préférence comprise, pas d’un script plus long."
          },
          {
            "heading": "Coordination et continuité",
            "text": "Préciser qui prépare, qui transmet et qui vérifie. Les changements de planning, demandes particulières et retards doivent avoir un responsable et une réponse commune."
          }
        ]
      },
      {
        "h2": "Construire le programme à partir de situations observées",
        "content": "Observez plusieurs prises en charge, à des moments calmes et chargés. Relevez des faits : une préférence demandée deux fois, une attente non expliquée, un espace prêt trop tard ou une recommandation faite sans connaître l’attente du client. Regroupez ces observations par compétence plutôt que par personne. Le programme peut alors cibler l’écoute, le discernement, la coordination ou l’encadrement, au lieu de reprendre les bases que vos professionnels maîtrisent déjà.",
        "h3Items": [
          {
            "heading": "Choisir des priorités limitées",
            "text": "Retenez quelques situations fréquentes et importantes pour votre établissement. Pour chacune, décrivez le résultat attendu pour le client et les comportements qui permettent de l’obtenir."
          },
          {
            "heading": "Adapter au rôle de chacun",
            "text": "Accueil, praticiens et managers n’ont pas les mêmes décisions à prendre. Préparez des exercices distincts, puis un scénario commun pour travailler les transmissions."
          }
        ]
      },
      {
        "h2": "Exemple de mise en situation : préserver le calme malgré un retard",
        "content": "Une cliente arrive à l’heure, mais la cabine ne sera disponible que dans quelques minutes. L’équipe doit vérifier la situation avant d’annoncer un délai, proposer une prise en charge adaptée et coordonner la suite avec le praticien. L’observateur relève la qualité de l’explication, le choix proposé, la transmission et le suivi. Après un premier essai, l’équipe reformule sa réponse et rejoue la situation. Le débriefing porte sur ce que le client a pu comprendre et ressentir, puis sur la décision et son exécution.",
        "h3Items": [
          {
            "heading": "Questions pour le débriefing",
            "text": "Le délai annoncé était-il vérifié ? Le client disposait-il d’un choix clair ? Qui devait revenir vers lui ? La transmission évitait-elle de lui faire répéter ses préférences ?"
          }
        ]
      },
      {
        "h2": "Utiliser les outils pour rendre l’attention plus fluide",
        "content": "Un logiciel de réservation n’améliore pas le service à lui seul. Il devient utile lorsque les équipes partagent une façon claire de tenir le planning, noter une préférence pertinente et signaler une modification. Examinez les doubles saisies, les messages dispersés et les interruptions pendant l’accueil. Définissez ensuite un circuit simple : information utile, personne responsable, moment de mise à jour et contrôle. La formation permet de pratiquer ce circuit sur une journée réaliste, avec un changement de rendez-vous et un imprévu."
      },
      {
        "h2": "Prolonger la formation avec des SOP et le coaching du Spa Manager",
        "content": "Une séance aide à faire évoluer la pratique ; les routines du responsable permettent de la maintenir. Conservez des séquences courtes pour l’accueil, la préparation des espaces, la coordination et le départ. Associez chaque séquence à un contrôle observable et à une consigne en cas d’écart. Le manager peut reprendre une situation en briefing, observer un échange puis donner un retour précis. Le Manuel SOP Spa fournit une base modifiable ; la formation travaille l’application de ces repères avec vos équipes."
      },
      {
        "h2": "Comment apprécier la progression après la formation ?",
        "content": "Choisissez les mêmes points d’observation avant et après l’intervention : clarté des informations données, qualité des transmissions, suivi des attentes et cohérence de la présentation. Comparez des situations similaires et échangez avec les responsables sur les écarts encore présents. Les retours clients peuvent enrichir cette lecture, mais un commentaire isolé ne suffit pas à attribuer un résultat à la formation. Terminez par les pratiques à conserver, les points à retravailler et la personne chargée du suivi."
      }
    ],
    "conclusion": "Partez des situations qui comptent pour vos clients, faites pratiquer vos équipes et donnez aux responsables des repères pour prolonger le travail. La formation et le manuel SOP se complètent : l’une développe les pratiques, l’autre conserve une référence commune.",
    "cta": {
      "text": "Découvrir la formation Spa",
      "href": "/formation-spa-hotel"
    },
    "faqs": [
      {
        "question": "À qui s’adresse la formation Spa hôtelier ?",
        "answer": "Équipes d’accueil Spa, praticiens, superviseurs et Spa Managers souhaitant faire progresser l’expérience client et la qualité de leur organisation."
      },
      {
        "question": "Comment choisir les modules de formation Spa ?",
        "answer": "À partir des situations observées, des priorités du Spa Manager et des rôles concernés. Les modules se composent selon vos standards, votre organisation et le temps disponible."
      },
      {
        "question": "Comment prolonger la formation après l’intervention ?",
        "answer": "En reliant les mises en situation aux SOP, aux briefings et aux observations du responsable. Des retours réguliers permettent de reprendre les points encore fragiles."
      }
    ]
  },
  "en": {
    "title": "Hotel Spa Staff Training: Developing Service Excellence",
    "description": "How to develop five-star Spa service through staff training: welcome, personalisation, coordination, systems and consistent standards.",
    "date": "2026-11-07",
    "readTime": "7 min read",
    "intro": "Spa professionals know their craft. To develop the guest experience, training should work on what connects those skills: attentive service, decisions in real situations and continuity between colleagues. Here is how to build a programme for your hotel and make it part of everyday practice.",
    "sections": [
      {
        "h2": "What should hotel Spa staff training cover?",
        "content": "A useful programme follows the real guest journey: booking, arrival, treatment preparation, transitions, relaxation and departure. The aim is to connect each role’s skills so the experience remains coherent. Reception should explain the menu confidently, therapists should receive useful information, and managers should be able to observe what works and what needs attention. Start by identifying the moments when your service promise becomes difficult to deliver.",
        "h3Items": [
          {
            "heading": "Welcome and guest relationships",
            "text": "Practise listening, language, discretion and adapting your pace to the guest. Personalisation comes from understanding a preference, not using a longer script."
          },
          {
            "heading": "Coordination and continuity",
            "text": "Clarify who prepares, who communicates and who checks. Scheduling changes, individual requests and delays need an owner and a shared response."
          }
        ]
      },
      {
        "h2": "Build the programme around observed situations",
        "content": "Observe several guest interactions during quiet and busy periods. Record facts: a preference requested twice, an unexplained wait, a space not ready on time or a recommendation made before understanding the guest. Group these observations by skill rather than person. The programme can then address listening, judgement, coordination or leadership instead of repeating fundamentals your professionals already know.",
        "h3Items": [
          {
            "heading": "Choose focused priorities",
            "text": "Select a few frequent situations that matter to your property. For each, describe the intended guest outcome and the behaviours that make it possible."
          },
          {
            "heading": "Adapt to each role",
            "text": "Reception, therapists and managers make different decisions. Prepare role-specific exercises, then bring them together in a shared scenario to practise handovers."
          }
        ]
      },
      {
        "h2": "Practical scenario: preserve calm when an appointment runs late",
        "content": "A guest arrives on time but the treatment room will not be ready for a few minutes. The team must check the situation before promising a time, offer an appropriate welcome and coordinate the next step with the therapist. An observer notes the explanation, choice offered, handover and follow-up. After the first attempt, the team refines its response and repeats the scenario. Discuss what the guest could understand and feel, then review the decision and how it was carried out.",
        "h3Items": [
          {
            "heading": "Questions for the debrief",
            "text": "Was the promised wait verified? Did the guest have a clear choice? Who was going to return with an update? Did the handover avoid making the guest repeat their preferences?"
          }
        ]
      },
      {
        "h2": "Use systems to make attentive service easier",
        "content": "A booking system does not improve service on its own. It becomes useful when teams share clear practices for scheduling, recording relevant preferences and signalling changes. Look at duplicate entries, scattered messages and interruptions during the welcome. Define a simple workflow: useful information, responsible colleague, update timing and check. Training lets the team practise that workflow against a realistic day, including a rescheduled appointment and an unexpected event."
      },
      {
        "h2": "Sustain learning with SOPs and Spa Manager coaching",
        "content": "A session helps change practice; manager routines help sustain it. Keep concise sequences for the welcome, preparation of spaces, coordination and farewell. Pair each sequence with an observable check and a response to exceptions. Managers can revisit a scenario in a briefing, observe an interaction and give specific feedback. The Spa SOP Manual provides an editable reference; training develops the team’s ability to apply it in your setting."
      },
      {
        "h2": "How can you review progress after training?",
        "content": "Choose the same observation points before and after the intervention: clarity of guest information, quality of handovers, follow-up on expectations and consistency of presentation. Compare similar situations and discuss remaining gaps with managers. Guest feedback can add perspective, but an isolated comment cannot establish that training caused a result. Finish by agreeing on practices to retain, points to revisit and the person responsible for follow-up."
      }
    ],
    "conclusion": "Start with situations that matter to guests, let your team practise and give managers shared criteria for follow-up. Training and the SOP manual complement each other: one develops practice, the other preserves a common reference.",
    "cta": {
      "text": "Explore Spa training",
      "href": "/formation-spa-hotel"
    },
    "faqs": [
      {
        "question": "Who is hotel Spa staff training for?",
        "answer": "Spa reception teams, therapists, supervisors and Spa Managers looking to develop the guest experience and improve the way their teams work."
      },
      {
        "question": "How do you choose Spa training modules?",
        "answer": "Use observed situations, the Spa Manager’s priorities and the roles involved. Modules are shaped around your standards, organisation and available time."
      },
      {
        "question": "How can you sustain learning after the session?",
        "answer": "Connect practical scenarios with SOPs, briefings and manager observations. Regular feedback helps the team revisit points that still need work."
      }
    ]
  }
}
export const spaTrainingQuick = {
  "fr": {
    "answerTitle": "Construire une formation Spa qui change les pratiques.",
    "answerIntro": "Partez du parcours client, puis reliez les attentes aux compétences de chaque équipe.",
    "steps": [
      "Observer les moments clés : accueil, transitions, conseil et départ.",
      "Choisir les compétences à perfectionner avec le Spa Manager.",
      "Faire pratiquer une situation réelle et donner un feedback précis.",
      "Ancrer les acquis dans les SOP, les briefings et le suivi terrain."
    ],
    "bridgeTitle": "Une référence commune pour toute l’équipe Spa.",
    "bridgeText": "Le Manuel SOP Spa rassemble les procédures et standards du département en PDF et PowerPoint modifiables. Une base pour préparer les briefings, transmettre les pratiques et accompagner les nouveaux arrivants."
  },
  "en": {
    "answerTitle": "Build Spa training that changes everyday practice.",
    "answerIntro": "Start with the guest journey, then connect expectations to each team’s skills.",
    "steps": [
      "Observe key moments: welcome, transitions, recommendations and departure.",
      "Choose the skills to refine with the Spa Manager.",
      "Practise a real situation and give specific feedback.",
      "Sustain learning through SOPs, briefings and on-property follow-up."
    ],
    "bridgeTitle": "A shared reference for the whole Spa team.",
    "bridgeText": "The Spa SOP Manual brings together department procedures and standards in editable PDF and PowerPoint. A foundation for briefings, consistent practice and new hire onboarding."
  }
}
export const spaTrainingConfig = {
  "productId": "spa",
  "department": "Spa & Wellness",
  "image": "/images/editorial-hospitality/spa-wellness.jpg",
  "sampleTitle": {
    "fr": "Carte de soins & techniques",
    "en": "Treatment Menu & Techniques"
  },
  "samplePages": {
    "fr": 16,
    "en": 16
  },
  "copy": {
    "fr": {
      "answerTitle": "Construire une formation Spa qui change les pratiques.",
      "answerIntro": "Partez du parcours client, puis reliez les attentes aux compétences de chaque équipe.",
      "steps": [
        "Observer les moments clés : accueil, transitions, conseil et départ.",
        "Choisir les compétences à perfectionner avec le Spa Manager.",
        "Faire pratiquer une situation réelle et donner un feedback précis.",
        "Ancrer les acquis dans les SOP, les briefings et le suivi terrain."
      ],
      "bridgeTitle": "Une référence commune pour toute l’équipe Spa.",
      "bridgeText": "Le Manuel SOP Spa rassemble les procédures et standards du département en PDF et PowerPoint modifiables. Une base pour préparer les briefings, transmettre les pratiques et accompagner les nouveaux arrivants.",
      "eyebrow": "Formation Spa · Excellence de service",
      "related": [
        {
          "href": "/fr/blog/hotel-spa-wellness-sops",
          "title": "SOP Spa & Wellness"
        }
      ]
    },
    "en": {
      "answerTitle": "Build Spa training that changes everyday practice.",
      "answerIntro": "Start with the guest journey, then connect expectations to each team’s skills.",
      "steps": [
        "Observe key moments: welcome, transitions, recommendations and departure.",
        "Choose the skills to refine with the Spa Manager.",
        "Practise a real situation and give specific feedback.",
        "Sustain learning through SOPs, briefings and on-property follow-up."
      ],
      "bridgeTitle": "A shared reference for the whole Spa team.",
      "bridgeText": "The Spa SOP Manual brings together department procedures and standards in editable PDF and PowerPoint. A foundation for briefings, consistent practice and new hire onboarding.",
      "eyebrow": "Spa training · Service excellence",
      "related": [
        {
          "href": "/en/blog/hotel-spa-wellness-sops",
          "title": "SOP Spa & Wellness"
        }
      ]
    }
  }
}

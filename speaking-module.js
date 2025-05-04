/**
 * TCF French Speaking Module
 * Contains speaking exercises, pronunciation activities, and utility functions for practice management.
 */

/**
 * Array of speaking exercises for TCF preparation across different levels.
 * @type {Object[]}
 */
export const speakingExercises = [
    // A1/A2 Level - Beginner
    {
        id: "se1",
        title: "Se Présenter",
        level: "beginner",
        time: 30,
        instructions: "Présentez-vous en français. Parlez de votre nom, âge, nationalité, profession, famille, et loisirs.",
        example: "Bonjour, je m'appelle Thomas. J'ai 28 ans et je suis canadien. Je suis ingénieur et je travaille pour une entreprise de technologie. J'habite à Calgary avec ma femme et mon chien. J'ai deux frères qui habitent à Vancouver. Pendant mon temps libre, j'aime faire du vélo et lire des livres.",
        exampleAudio: "example-se1.mp3",
        preparationPoints: [
            "Nom, âge, nationalité",
            "Profession ou études",
            "Famille",
            "Lieu de résidence",
            "Loisirs et intérêts"
        ],
        vocabularyTips: [
            "se présenter - to introduce oneself",
            "s'appeler - to be called",
            "avoir X ans - to be X years old",
            "être + nationalité - to be + nationality",
            "travailler comme - to work as",
            "habiter - to live",
            "aimer - to like/love"
        ],
        grammarFocus: "Present tense of regular and common irregular verbs"
    },
    {
        id: "se2",
        title: "Décrire sa Journée Typique",
        level: "beginner",
        time: 45,
        instructions: "Décrivez votre journée typique en français. Mentionnez vos activités quotidiennes, les horaires, et vos habitudes.",
        example: "Je me lève à 7 heures du matin. Je prends une douche, puis je prends mon petit déjeuner. Je bois du café et je mange des céréales. Je pars travailler à 8 heures et demie. Je travaille de 9 heures à 17 heures. Après le travail, je fais du sport ou je rencontre des amis. Je dîne vers 19 heures. Le soir, je regarde la télévision ou je lis un livre. Je me couche vers 23 heures.",
        exampleAudio: "example-se2.mp3",
        preparationPoints: [
            "Heure de réveil",
            "Petit déjeuner",
            "Travail ou études",
            "Déjeuner",
            "Activités de l'après-midi",
            "Dîner",
            "Activités du soir",
            "Heure du coucher"
        ],
        vocabularyTips: [
            "se lever - to get up",
            "prendre une douche - to take a shower",
            "prendre le petit déjeuner - to have breakfast",
            "partir - to leave",
            "travailler - to work",
            "rentrer - to return home",
            "faire du sport - to do sports",
            "se coucher - to go to bed"
        ],
        grammarFocus: "Present tense, reflexive verbs, time expressions"
    },
    
    // B1 Level - Intermediate
    {
        id: "se3",
        title: "Raconter un Souvenir d'Enfance",
        level: "intermediate",
        time: 60,
        instructions: "Racontez un souvenir d'enfance qui vous a marqué. Décrivez ce qui s'est passé, où et quand cela s'est produit, qui était impliqué, et pourquoi ce souvenir est important pour vous.",
        example: "Quand j'avais 8 ans, je suis allé pour la première fois à la mer avec mes grands-parents. C'était pendant les vacances d'été et nous sommes restés deux semaines dans un petit village sur la côte atlantique. Je me souviens de ma première baignade dans l'océan. L'eau était froide mais je me sentais très courageux. Mon grand-père m'a appris à nager et à reconnaître les différents poissons. Ce souvenir est important pour moi car c'était un moment de grande liberté et de complicité avec mes grands-parents. Cette expérience m'a donné le goût des voyages et de la découverte.",
        exampleAudio: "example-se3.mp3",
        preparationPoints: [
            "Âge que vous aviez",
            "Lieu et période",
            "Personnes présentes",
            "Ce qui s'est passé",
            "Vos sentiments",
            "Pourquoi ce souvenir est important"
        ],
        vocabularyTips: [
            "un souvenir - a memory",
            "quand j'étais petit(e) - when I was little",
            "se souvenir de - to remember",
            "se passer - to happen",
            "éprouver - to feel (emotion)",
            "marquant - memorable",
            "la première fois - the first time"
        ],
        grammarFocus: "Past tenses (passé composé and imparfait), time markers"
    },
    {
        id: "se4",
        title: "Exprimer et Justifier son Opinion",
        level: "intermediate",
        time: 90,
        instructions: "Exprimez et justifiez votre opinion sur le thème suivant : Les réseaux sociaux sont-ils bénéfiques ou néfastes pour la société ? Donnez des arguments pour et contre, puis expliquez votre position personnelle.",
        example: "Le sujet des réseaux sociaux est très débattu aujourd'hui. D'un côté, ils présentent plusieurs avantages. D'abord, ils permettent de communiquer facilement avec des personnes du monde entier. Ensuite, ils offrent une plateforme pour partager des informations et des idées rapidement. Ils peuvent également aider à sensibiliser le public à des causes importantes.\n\nCependant, ils ont aussi des inconvénients significatifs. Premièrement, ils peuvent créer une dépendance et affecter notre santé mentale. Deuxièmement, il y a des problèmes de vie privée et de sécurité des données. Enfin, ils contribuent parfois à la propagation de fausses informations.\n\nPersonnellement, je pense que les réseaux sociaux sont des outils utiles, mais qui doivent être utilisés avec modération et esprit critique. Je les utilise pour rester en contact avec mes amis à l'étranger, mais je limite mon temps en ligne pour éviter les effets négatifs. L'éducation aux médias est essentielle pour en faire un usage responsable.",
        exampleAudio: "example-se4.mp3",
        preparationPoints: [
            "Arguments positifs (3-4)",
            "Arguments négatifs (3-4)",
            "Votre position personnelle",
            "Exemples concrets",
            "Nuances et perspectives"
        ],
        vocabularyTips: [
            "exprimer son opinion - to express one's opinion",
            "être d'accord/ne pas être d'accord - to agree/disagree",
            "d'un côté... de l'autre côté - on one hand... on the other hand",
            "premièrement, deuxièmement - firstly, secondly",
            "par contre/en revanche - however/on the other hand",
            "selon moi/à mon avis - in my opinion",
            "je pense/je crois que - I think/believe that"
        ],
        grammarFocus: "Expressing opinions, structured arguments, connecting ideas"
    },
    
    // B2/C1 Level - Advanced
    {
        id: "se5",
        title: "Débat sur un Sujet d'Actualité",
        level: "advanced",
        time: 120,
        instructions: "Présentez une analyse structurée sur le sujet suivant : La mondialisation est-elle une force positive ou négative dans le monde contemporain ? Examinez les aspects économiques, culturels, environnementaux et sociaux de la question avant de présenter votre point de vue nuancé.",
        example: "La mondialisation est un phénomène complexe qui suscite des débats passionnés. Sur le plan économique, elle a permis l'expansion des marchés et la création de richesses, notamment dans des pays émergents comme la Chine et l'Inde. Le commerce international a favorisé la baisse des prix pour les consommateurs et a stimulé l'innovation grâce à la concurrence. Néanmoins, elle a également entraîné des délocalisations massives dans les pays développés, aggravant les inégalités sociales et la précarité de certains travailleurs.\n\nConcernant l'aspect culturel, la mondialisation facilite les échanges culturels et l'accès à une diversité de produits culturels venus du monde entier. Toutefois, elle est souvent accusée de provoquer une homogénéisation culturelle, dominée par les modèles occidentaux, au détriment des cultures locales et minoritaires.\n\nSur le plan environnemental, le bilan est particulièrement préoccupant. L'augmentation des transports internationaux et la course à la production ont un impact considérable sur les émissions de gaz à effet de serre et l'épuisement des ressources naturelles. Les accords internationaux peinent à réguler efficacement ces problématiques.\n\nQuant aux enjeux sociaux, si la mondialisation a contribué à sortir des millions de personnes de la pauvreté dans certaines régions du monde, elle a aussi creusé les écarts de richesse, tant entre les pays qu'à l'intérieur de ceux-ci.\n\nFace à ce tableau nuancé, je considère que la mondialisation n'est en soi ni positive ni négative, mais que son impact dépend essentiellement de la manière dont elle est régulée. Une mondialisation sans garde-fous conduit inévitablement à validity économique, sociale et environnementale. En revanche, encadrée par des institutions internationales efficaces et des politiques nationales adaptées, elle peut devenir un vecteur de progrès partagé. L'enjeu actuel n'est donc pas de rejeter la mondialisation, mais de la réformer en profondeur pour la mettre au service d'un développement véritablement durable et équitable.",
        exampleAudio: "example-se5.mp3",
        preparationPoints: [
            "Définition de la mondialisation",
            "Aspects économiques (positifs et négatifs)",
            "Aspects culturels (positifs et négatifs)",
            "Aspects environnementaux",
            "Aspects sociaux",
            "Position personnelle nuancée",
            "Solutions ou perspectives"
        ],
        vocabularyTips: [
            "la mondialisation - globalization",
            "le commerce international - international trade",
            "les inégalités - inequalities",
            "les délocalisations - outsourcing/offshoring",
            "l'homogénéisation culturelle - cultural homogenization",
            "les enjeux environnementaux - environmental challenges",
            "le développement durable - sustainable development",
            "les pays émergents - emerging countries"
        ],
        grammarFocus: "Complex argumentative structures, cause and effect expressions, concessions"
    },
    {
        id: "se6",
        title: "Synthèse et Analyse Critique",
        level: "advanced",
        time: 150,
        instructions: "Faites une synthèse et une analyse critique des différentes approches face au problème du réchauffement climatique. Examinez les solutions technologiques, économiques, politiques et sociales proposées, en évaluant leurs forces et faiblesses, puis présentez votre vision d'une stratégie efficace.",
        example: "Face à l'urgence climatique, plusieurs types d'approches sont actuellement débattus et mis en œuvre, avec des degrés d'efficacité variables.\n\nLes solutions technologiques, tout d'abord, misent sur l'innovation pour réduire notre impact environnemental sans modifier fondamentalement nos modes de vie. Le développement des énergies renouvelables, l'amélioration de l'efficacité énergétique et les technologies de capture du carbone sont prometteurs. Cependant, ces approches se heurtent à plusieurs limites : elles sont souvent coûteuses, leur déploiement à grande échelle prend du temps, et certaines technologies ne sont pas encore matures. De plus, elles peuvent créer un effet rebond si les gains d'efficacité sont compensés par une augmentation de la consommation.\n\nLes approches économiques, comme la tarification du carbone ou les mécanismes de marché, visent à intégrer les coûts environnementaux dans les prix pour orienter les comportements. Bien que théoriquement élégantes, ces solutions se révèlent souvent insuffisantes en pratique. Les prix fixés sont rarement à la hauteur des enjeux, et ces mécanismes peuvent avoir des effets sociaux régressifs s'ils ne sont pas accompagnés de mesures compensatoires.\n\nQuant aux solutions politiques, elles oscillent entre accords internationaux contraignants et initiatives nationales ou locales. Les négociations internationales, comme l'Accord de Paris, établissent un cadre global mais peinent à garantir des engagements suffisamment ambitieux et leur respect. À l'échelle nationale, les politiques climatiques restent souvent subordonnées à des considérations économiques à court terme.\n\nEnfin, les approches sociales et comportementales, qui appellent à une transformation profonde de nos modes de vie et de consommation, se heurtent à des résistances psychologiques et culturelles importantes, bien qu'elles soient probablement indispensables à long terme.\n\nÀ mon sens, une stratégie véritablement efficace doit combiner ces différentes approches de manière cohérente et complémentaire. Elle nécessite une gouvernance mondiale renforcée, capable d'imposer des objectifs contraignants, tout en laissant aux États la flexibilité nécessaire pour adapter les politiques à leurs contextes spécifiques. Les mécanismes économiques doivent être conçus avec une attention particulière à la justice sociale. L'innovation technologique doit être massivement soutenue, mais sans en faire l'unique solution. Enfin, un travail culturel et éducatif de fond est nécessaire pour faire évoluer nos valeurs et comportements vers plus de sobriété et de responsabilité environnementale.",
        exampleAudio: "example-se6.mp3",
        preparationPoints: [
            "Définition du problème climatique",
            "Solutions technologiques (avantages et limites)",
            "Approches économiques (avantages et limites)",
            "Stratégies politiques (avantages et limites)",
            "Changements sociaux et comportementaux",
            "Votre vision d'une approche efficace",
            "Exemples concrets et études de cas"
        ],
        vocabularyTips: [
            "le réchauffement climatique - global warming",
            "les énergies renouvelables - renewable energies",
            "l'empreinte carbone - carbon footprint",
            "la transition écologique - ecological transition",
            "la tarification du carbone - carbon pricing",
            "la justice environnementale - environmental justice",
            "la sobriété énergétique - energy sobriety",
            "les politiques publiques - public policies"
        ],
        grammarFocus: "Advanced argumentative structures, hypothetical expressions, scientific vocabulary"
    }
];

/**
 * Array of pronunciation exercises for TCF preparation across different levels.
 * @type {Object[]}
 */
export const pronunciationExercises = [
    // Basic Sounds and Phonemes
    {
        id: "pe1",
        title: "Les Voyelles Françaises",
        level: "beginner",
        instructions: "Pratiquez les voyelles françaises en répétant les mots et phrases suivants. Concentrez-vous sur les sons qui n'existent pas dans votre langue maternelle.",
        exercises: [
            {
                sound: "a [a]",
                examples: ["chat", "pas", "table"],
                phrase: "Marie a mangé la tarte aux fraises.",
                tips: "Bouche bien ouverte, son clair et net."
            },
            {
                sound: "e fermé [e]",
                examples: ["café", "été", "parler"],
                phrase: "J'ai regardé la télé pendant la soirée.",
                tips: "Bouche légèrement étirée, comme un sourire."
            },
            {
                sound: "e ouvert [ɛ]",
                examples: ["père", "belle", "lait"],
                phrase: "Ma mère préfère le thé au lait.",
                tips: "Bouche plus ouverte que pour le [e]."
            },
            {
                sound: "i [i]",
                examples: ["vie", "petit", "ici"],
                phrase: "Marie et Sophie vivent ici.",
                tips: "Bouche très étirée, sourire prononcé."
            },
            {
                sound: "o fermé [o]",
                examples: ["mot", "beau", "vélo"],
                phrase: "Le bateau flotte sur l'eau.",
                tips: "Lèvres arrondies et assez fermées."
            },
            {
                sound: "o ouvert [ɔ]",
                examples: ["porte", "mort", "sort"],
                phrase: "Je porte un manteau d'or.",
                tips: "Lèvres arrondies mais plus ouvertes."
            },
            {
                sound: "u [y]",
                examples: ["vu", "rue", "jus"],
                phrase: "Tu as vu la lune dans la rue ?",
                tips: "Lèvres très arrondies et projetées vers l'avant."
            },
            {
                sound: "ou [u]",
                examples: ["vous", "tout", "rouge"],
                phrase: "Nous avons tous beaucoup de courage.",
                tips: "Lèvres très arrondies et projetées, plus fermées que pour [y]."
            },
            {
                sound: "nasales [ɑ̃] [ɛ̃] [ɔ̃]",
                examples: ["dans", "pain", "bon"],
                phrase: "Le vent souffle dans les grands champs.",
                tips: "L'air passe par le nez, résonance nasale."
            }
        ]
    },
    {
        id: "pe2",
        title: "Les Consonnes Difficiles",
        level: "beginner",
        instructions: "Pratiquez les consonnes françaises qui peuvent être difficiles pour les non-francophones. Répétez les mots et phrases à haute voix.",
        exercises: [
            {
                sound: "r [ʁ]",
                examples: ["rouge", "partir", "croissant"],
                phrase: "Pierre regarde la rivière derrière le restaurant.",
                tips: "Son produit dans la gorge, pas avec la langue. Essayez de gargariser doucement."
            },
            {
                sound: "j [ʒ]",
                examples: ["je", "jour", "manger"],
                phrase: "J'ai déjà mangé du jambon aujourd'hui.",
                tips: "Comme un 'z' mais avec la langue plus en arrière."
            },
            {
                sound: "ch [ʃ]",
                examples: ["chat", "acheter", "chanter"],
                phrase: "Le chat cherche sa cachette dans la chambre.",
                tips: "Comme un souffle, sans vibration des cordes vocales."
            },
            {
                sound: "gn [ɲ]",
                examples: ["agneau", "montagne", "gagner"],
                phrase: "Ma compagne accompagne les enfants à la montagne.",
                tips: "Placez la langue contre le palais, comme pour dire 'ni' mais plus en arrière."
            },
            {
                sound: "l [l]",
                examples: ["la", "aller", "ballon"],
                phrase: "Elle a lu le livre lentement.",
                tips: "La langue touche le palais, l'air passe sur les côtés."
            },
            {
                sound: "qu/c dur [k]",
                examples: ["qui", "quand", "carte"],
                phrase: "Quand Caroline a commencé à courir ?",
                tips: "Son produit à l'arrière de la bouche."
            },
            {
                sound: "g dur [g]",
                examples: ["gare", "garçon", "gâteau"],
                phrase: "Le garçon a regardé le grand gâteau.",
                tips: "Comme [k] mais avec vibration des cordes vocales."
            }
        ]
    },
    
    // Intermediate Level
    {
        id: "pe3",
        title: "Liaisons et Enchaînements",
        level: "intermediate",
        instructions: "Pratiquez les liaisons et enchaînements, essentiels pour un français fluide. Répétez les phrases en faisant attention aux connexions entre les mots.",
        exercises: [
            {
                type: "Liaisons obligatoires",
                examples: [
                    "Les‿enfants [le‿zɑ̃fɑ̃]",
                    "Nous‿avons [nu‿zavɔ̃]",
                    "Très‿intéressant [trɛ‿zɛ̃teresɑ̃]"
                ],
                phrases: [
                    "Les‿enfants‿ont‿attendu leurs‿amis.",
                    "Nous‿avons‿eu un‿excellent dîner.",
                    "C'est très‿important pour les‿autres‿élèves."
                ],
                tips: "La liaison est obligatoire entre l'article et le nom, le pronom et le verbe, l'adjectif et le nom."
            },
            {
                type: "Liaisons interdites",
                examples: [
                    "et | elle (pas de liaison)",
                    "Comment | allez-vous (pas de liaison)",
                    "Le restaurant | est fermé (pas de liaison)"
                ],
                phrases: [
                    "Marc et | Antoine sont arrivés.",
                    "Comment | est-ce que vous allez ?",
                    "Le concert | était magnifique."
                ],
                tips: "Pas de liaison après 'et', après un nom singulier, ou après un verbe (sauf avec inversion)."
            },
            {
                type: "Enchaînements consonantiques",
                examples: [
                    "Une belle‿histoire [yn bɛ‿listwar]",
                    "Pour elle‿aussi [pu rɛ‿losi]",
                    "Cette‿idée [sɛ‿tide]"
                ],
                phrases: [
                    "Une petite‿histoire pour dormir.",
                    "Elle parle‿encore de son voyage.",
                    "Cette‿image est magnifique."
                ],
                tips: "Quand un mot se termine par une consonne prononcée et le suivant commence par une voyelle, la consonne se rattache à la voyelle suivante."
            },
            {
                type: "Enchaînements vocaliques",
                examples: [
                    "Tu as‿été [ty a‿ete]",
                    "Il a‿aimé [i la‿eme]",
                    "Qui a‿eu [ki a‿y]"
                ],
                phrases: [
                    "Tu as‿appris ta leçon ?",
                    "Il a‿accepté l'invitation.",
                    "Qui a‿entendu ce bruit ?"
                ],
                tips: "Quand un mot se termine par une voyelle et le suivant commence par une voyelle, il faut éviter le hiatus en liant les deux voyelles."
            }
        ]
    },
    {
        id: "pe4",
        title: "Intonation et Rythme",
        level: "intermediate",
        instructions: "Travaillez sur l'intonation et le rythme français. Le français a tendance à avoir une intonation montante à la fin des groupes de mots et une accentuation sur la dernière syllabe du groupe rythmique.",
        exercises: [
            {
                type: "Groupes rythmiques",
                phrases: [
                    "Je vais au cinéma / avec mes amis / ce soir.",
                    "Le professeur / a expliqué / la leçon / aux étudiants.",
                    "Malgré la pluie / nous sommes allés / à la plage."
                ],
                tips: "En français, on groupe les mots en unités de sens. L'accent tombe sur la dernière syllabe de chaque groupe."
            },
            {
                type: "Questions avec intonation montante",
                phrases: [
                    "Tu viens ce soir ?",
                    "Vous avez compris la question ?",
                    "Elle est arrivée ?"
                ],
                tips: "Pour les questions sans mot interrogatif, l'intonation monte à la fin de la phrase."
            },
            {
                type: "Questions avec mot interrogatif",
                phrases: [
                    "Où vas-tu ?",
                    "Comment allez-vous ?",
                    "Pourquoi est-il parti ?"
                ],
                tips: "Pour les questions avec mot interrogatif, l'intonation est descendante à la fin."
            },
            {
                type: "Exclamations",
                phrases: [
                    "Quelle belle journée !",
                    "Comme c'est intéressant !",
                    "C'est magnifique !"
                ],
                tips: "Les exclamations ont une intonation fortement descendante."
            },
            {
                type: "Continuation",
                phrases: [
                    "Quand il fait beau / nous allons à la plage.",
                    "Si tu viens demain / nous pourrons discuter.",
                    "Bien que ce soit difficile / j'essaierai."
                ],
                tips: "La première partie de la phrase a une intonation montante, indiquant que la phrase continue."
            }
        ]
    },
    
    // Advanced Level
    {
        id: "pe5",
        title: "Subtilités Phonétiques",
        level: "advanced",
        instructions: "Affinez votre prononciation en travaillant sur les subtilités phonétiques du français. Ces exercices se concentrent sur les nuances fines qui font la différence entre un accent étranger et une prononciation authentique.",
        exercises: [
            {
                type: "Distinction e/ɛ",
                pairs: [
                    "été [ete] / était [etɛ]",
                    "les [le] / lait [lɛ]",
                    "mes [me] / mais [mɛ]"
                ],
                phrases: [
                    "J'ai pris du thé au lait pendant l'été.",
                    "Mes amis étaient à la fête, mais je n'y étais pas.",
                    "Les enfants préfèrent le lait au chocolat."
                ],
                tips: "Le [e] est plus fermé, avec les lèvres plus étirées, tandis que le [ɛ] est plus ouvert."
            },
            {
                type: "Distinction o/ɔ",
                pairs: [
                    "côte [kot] / cotte [kɔt]",
                    "paume [pom] / pomme [pɔm]",
                    "rose [roz] / rosse [rɔs]"
                ],
                phrases: [
                    "Le rôle de cet homme est comique.",
                    "Je pose la rose sur la table basse.",
                    "La côte normande est belle, même sous la pluie."
                ],
                tips: "Le [o] est plus fermé, avec les lèvres plus arrondies, tandis que le [ɔ] est plus ouvert."
            },
            {
                type: "Voyelles nasales",
                sets: [
                    "bain [bɛ̃] / bon [bɔ̃] / banc [bɑ̃]",
                    "vin [vɛ̃] / vont [vɔ̃] / vent [vɑ̃]",
                    "lin [lɛ̃] / long [lɔ̃] / lent [lɑ̃]"
                ],
                phrases: [
                    "Un bon vin blanc dans un grand verre.",
                    "Le temps est lent quand on attend longtemps.",
                    "Demain matin, j'irai au bain à côté du moulin."
                ],
                tips: "Pour les voyelles nasales, l'air doit passer par le nez et la bouche en même temps. La position des lèvres varie selon la voyelle nasale."
            },
            {
                type: "Prononciation du 'r' français",
                examples: [
                    "r initial: rose, route, rare",
                    "r médian: Paris, Marie, durant",
                    "r final: finir, partir, sur"
                ],
                phrases: [
                    "La route de Paris traverse trois rivières.",
                    "Notre professeur parle rarement de son parcours.",
                    "Il est difficile de partir sans dire au revoir."
                ],
                tips: "Le 'r' français est uvulaire, produit par une vibration légère à l'arrière de la gorge. Essayez de gargariser doucement pour sentir cette zone, puis réduisez le son pour obtenir le 'r' français."
            },
            {
                type: "Élision et assimilation",
                examples: [
                    "je sais → j'sais [ʃɛ]",
                    "il y a → y'a [ja]",
                    "de rien → d'rien [driɛ̃]"
                ],
                phrases: [
                    "J'sais pas c'que j'vais faire demain.",
                    "Y'a personne qui m'a téléphoné.",
                    "Faut qu'j'parte avant midi."
                ],
                tips: "Dans le français parlé rapide, certaines voyelles sont élidées et des consonnes peuvent changer de son par assimilation. C'est important pour comprendre le français parlé naturel."
            }
        ]
    },
    {
        id: "pe6",
        title: "Virelangues et Exercices d'Articulation",
        level: "advanced",
        instructions: "Utilisez ces virelangues (tongue twisters) et exercices d'articulation pour améliorer votre fluidité et votre diction en français. Commencez lentement, puis augmentez progressivement la vitesse.",
        exercises: [
            {
                virelangue: "Les chaussettes de l'archiduchesse sont-elles sèches ou archi-sèches ?",
                focus: "Sons [ʃ] (ch) et [s]",
                tips: "Concentrez-vous sur la distinction claire entre le son [ʃ] (ch) et le son [s]. Commencez très lentement puis accélérez."
            },
            {
                virelangue: "Un chasseur sachant chasser doit savoir chasser sans son chien.",
                focus: "Sons [ʃ] (ch) et [s]",
                tips: "Encore une pratique de la distinction [ʃ]/[s]. Faites attention à ne pas confondre 'chasseur' et 'sachant'."
            },
            {
                virelangue: "Ton thé t'a-t-il ôté ta toux ?",
                focus: "Son [t]",
                tips: "Concentrez-vous sur la prononciation nette du [t], qui doit être dental (la langue touche les dents) et non aspiré."
            },
            {
                virelangue: "Ces cyprès sont si loin qu'on ne sait si c'en sont.",
                focus: "Sons [s] et [si]",
                tips: "Travaillez la répétition du son [s] et des syllabes [si]. Attention aux liaisons."
            },
            {
                virelangue: "Je veux et j'exige d'exquises excuses.",
                focus: "Consonnes [ks] (x)",
                tips: "Pratiquez la prononciation du groupe consonantique [ks] représenté par la lettre 'x'."
            },
            {
                virelangue: "Didon dîna, dit-on, du dos d'un dodu dindon.",
                focus: "Consonnes [d] et [n]",
                tips: "Travaillez l'articulation claire des consonnes [d] et la résonance des nasales [ɔ̃]."
            },
            {
                virelangue: "Trois très gros, gras, grands rats gris grattent.",
                focus: "Groupes consonantiques [gr] et [tr]",
                tips: "Concentrez-vous sur l'articulation nette des groupes consonantiques [gr] et [tr]."
            },
            {
                virelangue: "Panier piano panier piano panier piano...",
                focus: "Alternance des syllabes et rythme",
                tips: "Cet exercice travaille le rythme et la fluidité. Augmentez progressivement la vitesse."
            }
        ]
    }
];

/**
 * Generates mock feedback for pronunciation based on the user's level.
 * @param {string} level - The user's proficiency level (beginner, intermediate, advanced).
 * @returns {Object} - Feedback object containing score and detailed feedback.
 */
export function generatePronunciationFeedback(level) {
    const score = Math.floor(Math.random() * 41) + 60; // Score between 60-100

    const lowPoints = [
        "Prononciation des voyelles nasales",
        "Distinction entre [u] et [y]",
        "Prononciation du 'r' français",
        "Intonation et rythme",
        "Liaisons et enchaînements"
    ];

    const strongPoints = [
        "Prononciation des voyelles orales",
        "Articulation des consonnes",
        "Fluidité générale",
        "Accentuation correcte des mots",
        "Respect des groupes rythmiques"
    ];

    const weaknesses = getRandomItems(lowPoints, 2);
    const strengths = getRandomItems(strongPoints, 2);

    let detailedFeedback;

    if (score >= 80) {
        detailedFeedback = `
            <p class="text-green-700 font-medium">Très bon travail ! Votre prononciation est claire et généralement correcte.</p>
            <p class="font-medium mt-2">Points forts :</p>
            <ul class="list-disc pl-5">
                <li>${strengths[0]}</li>
                <li>${strengths[1]}</li>
            </ul>
            <p class="font-medium mt-2">Points à améliorer :</p>
            <ul class="list-disc pl-5">
                <li>${weaknesses[0]}</li>
                <li>${weaknesses[1]}</li>
            </ul>
            <p class="mt-2">Continuez à pratiquer régulièrement !</p>
        `;
    } else if (score >= 70) {
        detailedFeedback = `
            <p class="text-blue-700 font-medium">Bon travail ! Votre prononciation est compréhensible mais pourrait être améliorée.</p>
            <p class="font-medium mt-2">Points forts :</p>
            <ul class="list-disc pl-5">
                <li>${strengths[0]}</li>
                <li>${strengths[1]}</li>
            </ul>
            <p class="font-medium mt-2">Points à améliorer :</p>
            <ul class="list-disc pl-5">
                <li>${weaknesses[0]}</li>
                <li>${weaknesses[1]}</li>
                <li>Travaillez sur le rythme naturel des phrases françaises</li>
            </ul>
            <p class="mt-2">Écoutez et répétez régulièrement des phrases en français !</p>
        `;
    } else {
        detailedFeedback = `
            <p class="text-yellow-700 font-medium">Vous avez fait un effort, mais votre prononciation nécessite plus de pratique.</p>
            <p class="font-medium mt-2">Points forts :</p>
            <ul class="list-disc pl-5">
                <li>${strengths[0]}</li>
            </ul>
            <p class="font-medium mt-2">Points à améliorer en priorité :</p>
            <ul class="list-disc pl-5">
                <li>${weaknesses[0]}</li>
                <li>${weaknesses[1]}</li>
                <li>L'articulation des sons spécifiques au français</li>
                <li>L'intonation des phrases interrogatives et affirmatives</li>
            </ul>
            <p class="mt-2">Nous vous recommandons de commencer par des exercices de base sur les voyelles et consonnes françaises.</p>
        `;
    }

    return {
        score,
        detailedFeedback
    };
}

/**
 * Helper function to get random items from an array.
 * @param {string[]} array - The source array.
 * @param {number} count - Number of items to select.
 * @returns {string[]} - Array of randomly selected items.
 */
function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/**
 * Saves speaking practice results to localStorage.
 * @param {Object} practiceData - The practice data to save.
 */
export function saveSpeakingPractice(practiceData) {
    try {
        const savedPractices = loadSavedPractices();
        savedPractices.push(practiceData);
        localStorage.setItem('tcfSpeakingPractices', JSON.stringify(savedPractices));
    } catch (error) {
        console.error('Error saving speaking practice:', error);
    }
}

/**
 * Loads saved speaking practices from localStorage.
 * @returns {Object[]} - Array of saved practice data.
 */
export function loadSavedPractices() {
    try {
        const savedData = localStorage.getItem('tcfSpeakingPractices');
        return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
        console.error('Error loading saved practices:', error);
        return [];
    }
}

window.speakingLoaded = true;
// reading.js - TCF Reading Passages Module

// Export the reading passages data
export const readingPassages = [
    {
        title: "Une journée à Paris",
        level: "beginner",
        text: "Aujourd'hui, je me promène dans les rues de Paris. Il fait beau et le soleil brille. Je visite le musée du Louvre et j'admire la Joconde. Après, je mange un sandwich au café près de la Seine. L'après-midi, je monte à la tour Eiffel pour voir toute la ville. Paris est vraiment une belle ville!",
        vocabulary: [
            { word: "se promener", definition: "to walk around" },
            { word: "il fait beau", definition: "the weather is nice" },
            { word: "admirer", definition: "to admire" },
            { word: "après", definition: "after" },
            { word: "monter", definition: "to climb up" },
            { word: "voir", definition: "to see" }
        ],
        questions: [
            {
                question: "Où se trouve le narrateur?",
                options: ["À Lyon", "À Paris", "À Marseille"],
                correct: 1
            },
            {
                question: "Quel temps fait-il?",
                options: ["Il pleut", "Il fait beau", "Il neige"],
                correct: 1
            },
            {
                question: "Qu'est-ce que le narrateur visite?",
                options: ["Le musée du Louvre", "La tour Eiffel", "Les deux"],
                correct: 2
            }
        ]
    },
    {
        title: "Ma famille",
        level: "beginner",
        text: "Je m'appelle Sophie et j'ai une grande famille. J'ai deux frères et une sœur. Mon père est médecin et ma mère est professeur. Nous habitons dans une grande maison avec un jardin. J'ai aussi un chat qui s'appelle Minou. Le weekend, nous aimons faire des promenades ensemble dans le parc près de chez nous.",
        vocabulary: [
            { word: "grande", definition: "big" },
            { word: "frère", definition: "brother" },
            { word: "sœur", definition: "sister" },
            { word: "habiter", definition: "to live" },
            { word: "ensemble", definition: "together" },
            { word: "près de", definition: "near" }
        ],
        questions: [
            {
                question: "Combien de frères a Sophie?",
                options: ["Un", "Deux", "Trois"],
                correct: 1
            },
            {
                question: "Quelle est la profession de sa mère?",
                options: ["Médecin", "Professeur", "Ingénieur"],
                correct: 1
            },
            {
                question: "Où habitent-ils?",
                options: ["Dans un appartement", "Dans une grande maison", "Dans une petite maison"],
                correct: 1
            }
        ]
    },
    {
        title: "Les saisons",
        level: "beginner",
        text: "Il y a quatre saisons dans l'année : le printemps, l'été, l'automne et l'hiver. Au printemps, il fait doux et les fleurs commencent à pousser. En été, il fait chaud et on peut aller à la plage. En automne, les feuilles des arbres changent de couleur et tombent. En hiver, il fait froid et parfois il neige. J'aime toutes les saisons, mais je préfère l'été parce que j'adore nager dans la mer.",
        vocabulary: [
            { word: "saison", definition: "season" },
            { word: "printemps", definition: "spring" },
            { word: "été", definition: "summer" },
            { word: "automne", definition: "fall/autumn" },
            { word: "hiver", definition: "winter" },
            { word: "feuille", definition: "leaf" }
        ],
        questions: [
            {
                question: "Combien de saisons y a-t-il dans l'année?",
                options: ["Trois", "Quatre", "Cinq"],
                correct: 1
            },
            {
                question: "Quel temps fait-il en été?",
                options: ["Il fait froid", "Il fait chaud", "Il neige"],
                correct: 1
            },
            {
                question: "Quelle saison le narrateur préfère-t-il?",
                options: ["Le printemps", "L'été", "L'hiver"],
                correct: 1
            }
        ]
    },
    {
        title: "Ma routine quotidienne",
        level: "elementary",
        text: "Je me lève tous les jours à 7 heures du matin. D'abord, je prends une douche, puis je m'habille et je prends mon petit-déjeuner. Généralement, je mange des céréales avec du lait et je bois un café. Ensuite, je me brosse les dents et je pars au travail. Je travaille de 9 heures à 17 heures. Après le travail, je fais du sport, je prépare le dîner et je regarde un peu la télévision. Je me couche vers 23 heures.",
        vocabulary: [
            { word: "se lever", definition: "to get up" },
            { word: "d'abord", definition: "first" },
            { word: "puis", definition: "then" },
            { word: "ensuite", definition: "next/afterwards" },
            { word: "généralement", definition: "generally" },
            { word: "se coucher", definition: "to go to bed" }
        ],
        questions: [
            {
                question: "À quelle heure se lève le narrateur?",
                options: ["À 6 heures", "À 7 heures", "À 8 heures"],
                correct: 1
            },
            {
                question: "Que fait-il après s'être habillé?",
                options: ["Il va travailler", "Il prend son petit-déjeuner", "Il se brosse les dents"],
                correct: 1
            },
            {
                question: "À quelle heure se couche-t-il?",
                options: ["À 21 heures", "À 22 heures", "À 23 heures"],
                correct: 2
            }
        ]
    },
    {
        title: "Au restaurant",
        level: "elementary",
        text: "Hier soir, je suis allé au restaurant avec des amis. Nous avons choisi un restaurant italien au centre-ville. Nous avons commandé des pâtes et des pizzas. Le serveur était très gentil et la nourriture était délicieuse. Pour le dessert, j'ai pris une glace au chocolat. Nous avons passé une très bonne soirée ensemble. À la fin, nous avons payé l'addition et nous sommes rentrés chez nous vers minuit.",
        vocabulary: [
            { word: "hier soir", definition: "last night" },
            { word: "commander", definition: "to order" },
            { word: "serveur", definition: "waiter" },
            { word: "nourriture", definition: "food" },
            { word: "délicieux", definition: "delicious" },
            { word: "l'addition", definition: "the bill" }
        ],
        questions: [
            {
                question: "Quel type de restaurant ont-ils choisi?",
                options: ["Un restaurant français", "Un restaurant italien", "Un restaurant chinois"],
                correct: 1
            },
            {
                question: "Qu'est-ce que le narrateur a pris comme dessert?",
                options: ["Un gâteau au chocolat", "Une tarte aux fruits", "Une glace au chocolat"],
                correct: 2
            },
            {
                question: "À quelle heure sont-ils rentrés chez eux?",
                options: ["À 23 heures", "À minuit", "À 1 heure du matin"],
                correct: 1
            }
        ]
    },
    {
        title: "Les vacances idéales",
        level: "intermediate",
        text: "Pour moi, les vacances idéales seraient un mélange de détente et d'aventure. J'aimerais passer deux semaines dans un pays étranger que je n'ai jamais visité auparavant. La première semaine, je me reposerais à la plage, je lirais des livres et je profiterais du soleil. Pendant la deuxième semaine, j'explorerais la culture locale, je visiterais des monuments historiques et je goûterais la cuisine traditionnelle. J'apprendrais aussi quelques mots dans la langue du pays. Ce serait une expérience enrichissante qui me permettrait de découvrir autre chose et de faire de nouvelles rencontres.",
        vocabulary: [
            { word: "mélange", definition: "mix" },
            { word: "détente", definition: "relaxation" },
            { word: "auparavant", definition: "before/previously" },
            { word: "se reposer", definition: "to rest" },
            { word: "explorer", definition: "to explore" },
            { word: "enrichissant", definition: "enriching" }
        ],
        questions: [
            {
                question: "Combien de temps dureraient les vacances idéales?",
                options: ["Une semaine", "Deux semaines", "Un mois"],
                correct: 1
            },
            {
                question: "Que ferait le narrateur pendant la première semaine?",
                options: ["Il visiterait des monuments", "Il se reposerait à la plage", "Il ferait du sport"],
                correct: 1
            },
            {
                question: "Qu'est-ce que le narrateur apprendrait pendant ses vacances?",
                options: ["À cuisiner", "Quelques mots dans la langue locale", "À nager"],
                correct: 1
            }
        ]
    },
    {
        title: "L'environnement et le changement climatique",
        level: "upperIntermediate",
        text: "Le changement climatique est l'un des plus grands défis de notre époque. La température moyenne de la Terre augmente à cause des émissions de gaz à effet de serre produites par les activités humaines. Cela entraîne la fonte des glaciers, l'élévation du niveau des mers et des phénomènes météorologiques extrêmes comme les inondations et les sécheresses. Pour lutter contre ce problème, il est essentiel de réduire notre consommation d'énergie, d'utiliser davantage les énergies renouvelables et de protéger les forêts qui absorbent le dioxyde de carbone. Chacun peut contribuer à cette cause en adoptant un mode de vie plus respectueux de l'environnement: utiliser les transports en commun, consommer local et de saison, réduire les déchets plastiques et économiser l'eau.",
        vocabulary: [
            { word: "changement climatique", definition: "climate change" },
            { word: "émissions", definition: "emissions" },
            { word: "gaz à effet de serre", definition: "greenhouse gases" },
            { word: "fonte des glaciers", definition: "melting of glaciers" },
            { word: "énergies renouvelables", definition: "renewable energies" },
            { word: "mode de vie", definition: "lifestyle" }
        ],
        questions: [
            {
                question: "Quelle est la principale cause du changement climatique selon le texte?",
                options: ["Les phénomènes naturels", "Les émissions de gaz à effet de serre", "La déforestation"],
                correct: 1
            },
            {
                question: "Quelles sont les conséquences du changement climatique mentionnées dans le texte?",
                options: ["Uniquement la fonte des glaciers", "La fonte des glaciers et l'élévation du niveau des mers", "La fonte des glaciers, l'élévation du niveau des mers et des phénomènes météorologiques extrêmes"],
                correct: 2
            },
            {
                question: "Comment peut-on contribuer à la lutte contre le changement climatique au niveau individuel?",
                options: ["En utilisant uniquement des énergies renouvelables", "En adoptant un mode de vie plus respectueux de l'environnement", "En créant des lois plus strictes"],
                correct: 1
            }
        ]
    }
];

// Reading-related utility functions
export function getPassagesByLevel(level) {
    return readingPassages.filter(passage => passage.level === level);
}

export function getPassageByTitle(title) {
    return readingPassages.find(passage => passage.title === title);
}

export function saveReadingProgress(completedPassages) {
    localStorage.setItem('tcfReadingProgress', JSON.stringify(completedPassages));
}

export function loadReadingProgress() {
    const savedProgress = localStorage.getItem('tcfReadingProgress');
    if (savedProgress) {
        return JSON.parse(savedProgress);
    }
    return [];
}

// Set the loaded flag after all exports
window.readingLoaded = true;
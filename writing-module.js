// writing-module.js - TCF French Writing Module

// Export writing prompts and feedback functions
export const writingPrompts = [
    // A1/A2 Level - Beginner
    {
        id: "wp1",
        title: "Ma Routine Quotidienne",
        level: "beginner",
        time: 15,
        words: 50,
        instructions: "Décrivez votre routine quotidienne. Mentionnez l'heure à laquelle vous vous levez, ce que vous mangez, vos activités et l'heure à laquelle vous vous couchez.",
        example: "Je me lève à 7 heures du matin. Je prends mon petit déjeuner à 7h30. Je mange des céréales et je bois du café. Je travaille de 9 heures à 17 heures. Le soir, je dîne à 19 heures. Je regarde la télévision et je lis un livre. Je me couche à 23 heures.",
        vocabularyTips: [
            "se lever (to get up)",
            "se coucher (to go to bed)",
            "prendre le petit déjeuner (to have breakfast)",
            "déjeuner (to have lunch)",
            "dîner (to have dinner)",
            "travailler (to work)",
            "étudier (to study)",
            "regarder la télévision (to watch TV)"
        ],
        grammarTips: [
            "Use reflexive verbs for daily routines (se lever, se coucher, etc.)",
            "Use time expressions (à 7 heures, le matin, le soir, etc.)",
            "Practice the present tense conjugation of regular and reflexive verbs"
        ]
    },
    {
        id: "wp2",
        title: "Description de Ma Ville",
        level: "beginner",
        time: 20,
        words: 70,
        instructions: "Décrivez votre ville ou village. Parlez des lieux importants, des activités possibles et de ce que vous aimez ou n'aimez pas.",
        example: "J'habite dans une petite ville au bord de la mer. Il y a une belle plage où les gens se promènent. Dans le centre-ville, il y a des magasins, des restaurants et un cinéma. J'aime ma ville parce qu'elle est calme et jolie. Mais je n'aime pas qu'il n'y ait pas beaucoup d'activités pour les jeunes.",
        vocabularyTips: [
            "la ville (city/town)",
            "le village (village)",
            "le centre-ville (downtown/city center)",
            "le quartier (neighborhood)",
            "le magasin (store)",
            "le cinéma (cinema)",
            "la gare (train station)",
            "le parc (park)",
            "le musée (museum)"
        ],
        grammarTips: [
            "Use 'il y a' to describe what exists in your town",
            "Practice descriptions with adjectives (grande, petite, belle, etc.)",
            "Use 'j'aime/je n'aime pas' to express likes and dislikes"
        ]
    },
    
    // B1 Level - Intermediate
    {
        id: "wp3",
        title: "Une Expérience de Voyage",
        level: "intermediate",
        time: 25,
        words: 120,
        instructions: "Racontez un voyage que vous avez fait. Décrivez où vous êtes allé(e), avec qui, ce que vous avez vu et fait, et vos impressions.",
        example: "L'année dernière, j'ai voyagé en Italie avec ma famille pendant deux semaines. Nous avons visité Rome, Florence et Venise. À Rome, nous avons admiré le Colisée et la fontaine de Trevi. La nourriture italienne était délicieuse, surtout les pâtes et les glaces. J'ai beaucoup aimé ce voyage car les paysages étaient magnifiques et les Italiens très accueillants. Le seul problème était la chaleur en été, il faisait plus de 35 degrés tous les jours !",
        vocabularyTips: [
            "voyager (to travel)",
            "visiter (to visit)",
            "un voyage (a trip)",
            "un lieu touristique (a tourist place)",
            "un souvenir (a memory/a souvenir)",
            "admirer (to admire)",
            "l'accueil (welcome, reception)",
            "l'hébergement (accommodation)"
        ],
        grammarTips: [
            "Use passé composé to talk about past events",
            "Practice time expressions (l'année dernière, pendant deux semaines, etc.)",
            "Use descriptive adjectives to express your impressions",
            "Use connecting words to structure your story (d'abord, ensuite, finalement, etc.)"
        ]
    },
    {
        id: "wp4",
        title: "Avantages et Inconvénients des Réseaux Sociaux",
        level: "intermediate",
        time: 30,
        words: 150,
        instructions: "Présentez les avantages et les inconvénients des réseaux sociaux. Donnez des exemples concrets et exprimez votre opinion personnelle.",
        example: "De nos jours, les réseaux sociaux comme Facebook et Instagram font partie de notre vie quotidienne. Ils présentent plusieurs avantages : ils nous permettent de communiquer facilement avec nos amis et notre famille, même à distance. De plus, ils nous donnent accès à beaucoup d'informations et de divertissements.\n\nCependant, ils ont aussi des inconvénients. D'abord, ils peuvent créer une dépendance et nous faire perdre beaucoup de temps. Ensuite, ils posent des problèmes de confidentialité car nos données personnelles ne sont pas toujours bien protégées. Enfin, les réseaux sociaux peuvent favoriser la diffusion de fausses informations.\n\nPersonnellement, j'utilise les réseaux sociaux mais avec modération. Je pense qu'il est important de rester vigilant et de ne pas y passer trop de temps.",
        vocabularyTips: [
            "les réseaux sociaux (social networks)",
            "les avantages/les inconvénients (advantages/disadvantages)",
            "la communication (communication)",
            "la dépendance (addiction)",
            "la confidentialité (privacy)",
            "les données personnelles (personal data)",
            "la diffusion (spreading)",
            "les fausses informations (fake news)"
        ],
        grammarTips: [
            "Use connecting words to organize your ideas (d'abord, ensuite, enfin, etc.)",
            "Practice using 'permettre de' (to allow to) and other verbs followed by infinitives",
            "Express your opinion using phrases like 'à mon avis', 'je pense que', etc.",
            "Use the present tense to discuss general facts and opinions"
        ]
    },
    
    // B2/C1 Level - Advanced
    {
        id: "wp5",
        title: "Les Solutions Face au Changement Climatique",
        level: "advanced",
        time: 40,
        words: 200,
        instructions: "Analysez différentes solutions proposées pour lutter contre le changement climatique. Évaluez leur efficacité et proposez vos recommandations.",
        example: "Le changement climatique représente l'un des défis majeurs de notre époque. Face à cette crise, plusieurs types de solutions sont envisagés.\n\nLes solutions technologiques comme les énergies renouvelables (solaire, éolienne) sont prometteuses car elles permettent de réduire les émissions de CO2. Cependant, leur déploiement à grande échelle reste coûteux et limité par des contraintes techniques. Les voitures électriques constituent également une avancée, mais la production des batteries pose d'autres problèmes environnementaux.\n\nLes changements de comportements individuels (réduction de la consommation, alimentation plus végétale, limitation des voyages en avion) sont essentiels mais insuffisants s'ils ne sont pas adoptés massivement. Ils se heurtent souvent à des résistances psychologiques et à des contraintes pratiques.\n\nQuant aux solutions politiques comme les accords internationaux et les taxes carbone, elles semblent indispensables mais difficiles à mettre en œuvre efficacement à l'échelle mondiale.\n\nJe pense qu'une approche combinant ces différentes stratégies est nécessaire. Les gouvernements doivent créer un cadre incitatif fort, tout en investissant dans la recherche technologique et l'éducation des citoyens. Sans une mobilisation à tous les niveaux, nous ne pourrons pas répondre efficacement à ce défi global.",
        vocabularyTips: [
            "le changement climatique (climate change)",
            "les émissions de gaz à effet de serre (greenhouse gas emissions)",
            "les énergies renouvelables (renewable energies)",
            "le développement durable (sustainable development)",
            "la consommation (consumption)",
            "l'efficacité énergétique (energy efficiency)",
            "la taxe carbone (carbon tax)",
            "la transition écologique (ecological transition)"
        ],
        grammarTips: [
            "Use the subjunctive after expressions of necessity (il faut que, il est nécessaire que)",
            "Practice conditional structures to discuss hypothetical solutions",
            "Use a variety of connecting words to build a structured argument",
            "Employ the passive voice to focus on actions rather than actors"
        ]
    },
    {
        id: "wp6",
        title: "L'Impact des Nouvelles Technologies sur la Société",
        level: "advanced",
        time: 45,
        words: 250,
        instructions: "Rédigez un essai argumentatif sur l'impact des nouvelles technologies sur la société contemporaine. Abordez les aspects positifs et négatifs, et développez une réflexion nuancée sur ce sujet.",
        example: "Les nouvelles technologies, et en particulier le numérique, ont profondément transformé nos sociétés en quelques décennies. Cette révolution a des conséquences à la fois positives et négatives qu'il convient d'analyser avec recul.\n\nLes bénéfices des technologies numériques sont indéniables. Elles ont démocratisé l'accès à l'information et au savoir, permettant à des millions de personnes d'accéder à des ressources éducatives gratuites. Elles ont également révolutionné la communication, abolissant les distances et facilitant les échanges internationaux. Dans le domaine médical, les avancées technologiques ont permis d'améliorer considérablement les diagnostics et les traitements, sauvant ainsi de nombreuses vies.\n\nNéanmoins, cette révolution s'accompagne d'effets préoccupants. La surexposition aux écrans affecte notre concentration et modifie nos relations sociales, créant paradoxalement de l'isolement. La question de la protection des données personnelles soulève des inquiétudes légitimes quant au respect de notre vie privée. De plus, les inégalités d'accès au numérique créent une fracture technologique qui renforce les disparités sociales existantes.\n\nPar ailleurs, l'intelligence artificielle suscite des débats sur l'avenir du travail et sur les questions éthiques liées à l'autonomie des machines. Si elle promet des gains de productivité, elle menace également de nombreux emplois et pose la question de notre rapport à la machine.\n\nFace à ces enjeux, il me semble essentiel d'adopter une approche équilibrée. Les nouvelles technologies ne sont ni intrinsèquement bonnes ni mauvaises : tout dépend de l'usage que nous en faisons. Une régulation adaptée, une éducation au numérique et une réflexion éthique approfondie sont nécessaires pour tirer le meilleur parti de ces innovations tout en limitant leurs effets néfastes.\n\nEn définitive, c'est à nous, en tant que société, de décider collectivement comment orienter ces technologies pour qu'elles servent notre épanouissement et non l'inverse.",
        vocabularyTips: [
            "les nouvelles technologies (new technologies)",
            "le numérique (digital technology)",
            "l'intelligence artificielle (artificial intelligence)",
            "les données personnelles (personal data)",
            "la fracture numérique (digital divide)",
            "la régulation (regulation)",
            "l'automatisation (automation)",
            "l'éthique (ethics)"
        ],
        grammarTips: [
            "Use a wide range of tenses (present, past, future, conditional)",
            "Practice complex sentence structures with subordinate clauses",
            "Use advanced connecting words to build a sophisticated argument",
            "Master the nuanced expression of cause and consequence"
        ]
    }
];

// Feedback templates for different writing proficiency levels
const feedbackTemplates = {
    beginner: {
        excellent: `
            <p class="text-green-700 font-medium">Excellent travail ! Votre texte est bien structuré et contient peu d'erreurs.</p>
            <p>Points forts :</p>
            <ul class="list-disc pl-5">
                <li>Bon vocabulaire de base</li>
                <li>Phrases simples mais correctes</li>
                <li>Respect du sujet</li>
            </ul>
            <p>Suggestions d'amélioration :</p>
            <ul class="list-disc pl-5">
                <li>{suggestion1}</li>
                <li>{suggestion2}</li>
            </ul>
        `,
        good: `
            <p class="text-blue-700 font-medium">Bon travail ! Votre texte répond au sujet mais contient quelques erreurs.</p>
            <p>Points forts :</p>
            <ul class="list-disc pl-5">
                <li>Vocabulaire généralement correct</li>
                <li>Idées clairement exprimées</li>
            </ul>
            <p>Erreurs à corriger :</p>
            <ul class="list-disc pl-5">
                <li>{error1}</li>
                <li>{error2}</li>
                <li>{error3}</li>
            </ul>
            <p>Suggestions d'amélioration :</p>
            <ul class="list-disc pl-5">
                <li>{suggestion1}</li>
                <li>{suggestion2}</li>
            </ul>
        `,
        needsWork: `
            <p class="text-yellow-700 font-medium">Vous avez fait un effort, mais votre texte a besoin d'améliorations.</p>
            <p>Points forts :</p>
            <ul class="list-disc pl-5">
                <li>Tentative de répondre au sujet</li>
            </ul>
            <p>Erreurs à corriger :</p>
            <ul class="list-disc pl-5">
                <li>{error1}</li>
                <li>{error2}</li>
                <li>{error3}</li>
                <li>{error4}</li>
            </ul>
            <p>Recommandations :</p>
            <ul class="list-disc pl-5">
                <li>Révisez la conjugaison des verbes au présent</li>
                <li>Apprenez plus de vocabulaire sur ce sujet</li>
                <li>Pratiquez les structures de phrases simples</li>
            </ul>
        `
    },
    intermediate: {
        excellent: `
            <p class="text-green-700 font-medium">Excellent travail ! Votre texte est bien développé et montre une bonne maîtrise du français.</p>
            <p>Points forts :</p>
            <ul class="list-disc pl-5">
                <li>Vocabulaire varié et précis</li>
                <li>Bonne utilisation des temps verbaux</li>
                <li>Arguments bien structurés</li>
                <li>Bonne utilisation des connecteurs logiques</li>
            </ul>
            <p>Suggestions d'amélioration :</p>
            <ul class="list-disc pl-5">
                <li>{suggestion1}</li>
                <li>{suggestion2}</li>
            </ul>
        `,
        good: `
            <p class="text-blue-700 font-medium">Bon travail ! Votre texte est cohérent mais présente quelques faiblesses.</p>
            <p>Points forts :</p>
            <ul class="list-disc pl-5">
                <li>Structure claire avec introduction, développement et conclusion</li>
                <li>Bonne utilisation du vocabulaire thématique</li>
                <li>Arguments pertinents</li>
            </ul>
            <p>Erreurs à corriger :</p>
            <ul class="list-disc pl-5">
                <li>{error1}</li>
                <li>{error2}</li>
                <li>{error3}</li>
            </ul>
            <p>Suggestions d'amélioration :</p>
            <ul class="list-disc pl-5">
                <li>Variez davantage votre vocabulaire</li>
                <li>Utilisez plus de connecteurs logiques</li>
                <li>Attention aux accords des adjectifs</li>
            </ul>
        `,
        needsWork: `
            <p class="text-yellow-700 font-medium">Votre texte répond partiellement au sujet mais nécessite des améliorations importantes.</p>
            <p>Points forts :</p>
            <ul class="list-disc pl-5">
                <li>Quelques idées intéressantes</li>
                <li>Tentative d'organisation du texte</li>
            </ul>
            <p>Erreurs à corriger :</p>
            <ul class="list-disc pl-5">
                <li>{error1}</li>
                <li>{error2}</li>
                <li>{error3}</li>
                <li>{error4}</li>
            </ul>
            <p>Recommandations :</p>
            <ul class="list-disc pl-5">
                <li>Révisez la formation et l'utilisation des temps du passé</li>
                <li>Apprenez plus de connecteurs logiques</li>
                <li>Travaillez sur la structure argumentative</li>
                <li>Enrichissez votre vocabulaire sur ce thème</li>
            </ul>
        `
    },
    advanced: {
        excellent: `
            <p class="text-green-700 font-medium">Excellent travail ! Votre texte démontre une maîtrise avancée du français et une réflexion approfondie.</p>
            <p>Points forts :</p>
            <ul class="list-disc pl-5">
                <li>Argumentation nuancée et sophistiquée</li>
                <li>Vocabulaire riche et précis</li>
                <li>Structures syntaxiques complexes bien maîtrisées</li>
                <li>Bonne utilisation des connecteurs logiques</li>
                <li>Réflexion personnelle pertinente</li>
            </ul>
            <p>Suggestions pour atteindre un niveau encore plus élevé :</p>
            <ul class="list-disc pl-5">
                <li>{suggestion1}</li>
                <li>{suggestion2}</li>
            </ul>
        `,
        good: `
            <p class="text-blue-700 font-medium">Bon travail ! Votre texte est bien développé mais pourrait être encore amélioré.</p>
            <p>Points forts :</p>
            <ul class="list-disc pl-5">
                <li>Bonne analyse du sujet</li>
                <li>Arguments bien développés</li>
                <li>Bon niveau de langue</li>
                <li>Structure claire et cohérente</li>
            </ul>
            <p>Erreurs à corriger :</p>
            <ul class="list-disc pl-5">
                <li>{error1}</li>
                <li>{error2}</li>
                <li>{error3}</li>
            </ul>
            <p>Suggestions d'amélioration :</p>
            <ul class="list-disc pl-5">
                <li>Utilisez des structures plus variées et complexes</li>
                <li>Développez davantage certaines idées</li>
                <li>Enrichissez votre argumentation avec des exemples plus précis</li>
            </ul>
        `,
        needsWork: `
            <p class="text-yellow-700 font-medium">Votre texte contient des idées intéressantes mais présente des faiblesses importantes pour ce niveau.</p>
            <p>Points forts :</p>
            <ul class="list-disc pl-5">
                <li>Tentative d'analyse approfondie</li>
                <li>Structure argumentative identifiable</li>
                <li>Quelques idées pertinentes</li>
            </ul>
            <p>Erreurs à corriger :</p>
            <ul class="list-disc pl-5">
                <li>{error1}</li>
                <li>{error2}</li>
                <li>{error3}</li>
                <li>{error4}</li>
            </ul>
            <p>Recommandations :</p>
            <ul class="list-disc pl-5">
                <li>Travaillez sur les structures complexes (subjonctif, conditionnel)</li>
                <li>Enrichissez votre vocabulaire spécialisé</li>
                <li>Approfondissez votre analyse critique</li>
                <li>Améliorez l'enchaînement logique de vos arguments</li>
                <li>Révisez les connecteurs logiques sophistiqués</li>
            </ul>
        `
    }
};

// Common errors based on proficiency level
const commonErrors = {
    beginner: [
        "Confusion entre 'le'/'la' pour les articles",
        "Erreurs de conjugaison des verbes au présent",
        "Oubli des accents",
        "Confusion entre 'être' et 'avoir'",
        "Problèmes avec les négations",
        "Ordre incorrect des mots dans la phrase",
        "Mauvais accord des adjectifs",
        "Utilisation incorrecte des prépositions",
        "Confusion entre 'tu' et 'vous'",
        "Orthographe basique incorrecte"
    ],
    intermediate: [
        "Erreurs dans l'utilisation du passé composé",
        "Confusion entre imparfait et passé composé",
        "Problèmes avec les pronoms relatifs",
        "Accord incorrect du participe passé",
        "Mauvaise utilisation des pronoms COD/COI",
        "Manque de connecteurs logiques variés",
        "Structures syntaxiques répétitives",
        "Erreurs avec les verbes pronominaux",
        "Utilisation incorrecte du conditionnel",
        "Problèmes de concordance des temps"
    ],
    advanced: [
        "Mauvaise utilisation du subjonctif",
        "Erreurs dans les structures hypothétiques (si + imparfait/conditionnel)",
        "Problèmes avec le discours indirect",
        "Nuances incorrectes dans le choix du vocabulaire",
        "Connecteurs logiques mal employés",
        "Structure argumentative incohérente",
        "Manque de nuance dans l'expression des opinions",
        "Utilisation incorrecte du passif",
        "Erreurs dans les expressions idiomatiques",
        "Problèmes avec les registres de langue"
    ]
};

// Common suggestions based on proficiency level
const commonSuggestions = {
    beginner: [
        "Apprenez les articles par cœur avec le genre des noms",
        "Pratiquez les conjugaisons régulières au présent",
        "Utilisez des phrases plus courtes et simples",
        "Enrichissez votre vocabulaire de base",
        "Révisez les adjectifs possessifs (mon, ma, mes, etc.)",
        "Faites attention à l'ordre des mots",
        "Pratiquez les questions simples",
        "Apprenez les prépositions de base (à, de, dans, etc.)",
        "Travaillez sur les descriptions simples"
    ],
    intermediate: [
        "Diversifiez votre vocabulaire",
        "Utilisez plus de connecteurs logiques",
        "Pratiquez les différents temps du passé",
        "Structurez mieux vos paragraphes",
        "Intégrez des phrases plus complexes",
        "Faites attention aux nuances entre les mots",
        "Utilisez davantage de pronoms pour éviter les répétitions",
        "Variez les structures de phrases",
        "Travaillez sur les expressions de cause et conséquence",
        "Développez des arguments plus élaborés"
    ],
    advanced: [
        "Intégrez plus d'expressions idiomatiques",
        "Variez davantage les structures syntaxiques complexes",
        "Utilisez des connecteurs logiques plus sophistiqués",
        "Travaillez sur la concision et la précision",
        "Développez une argumentation plus nuancée",
        "Incorporez des références culturelles pertinentes",
        "Utilisez des tournures plus élégantes",
        "Faites attention aux nuances stylistiques",
        "Travaillez sur l'articulation fine de votre pensée",
        "Renforcez la cohérence globale de votre texte"
    ]
};

// Function to generate feedback based on text content, level, and score
export function generateFeedback(text, level, score) {
    // Determine which template to use based on level and score
    let template;
    let errors = [];
    let suggestions = [];
    let levelCategory;
    
    if (level === "beginner" || level === "elementary") {
        levelCategory = "beginner";
    } else if (level === "intermediate") {
        levelCategory = "intermediate";
    } else {
        levelCategory = "advanced";
    }
    
    // Select random errors and suggestions based on level
    errors = getRandomItems(commonErrors[levelCategory], 4);
    suggestions = getRandomItems(commonSuggestions[levelCategory], 2);
    
    // Determine template based on score
    if (score >= 80) {
        template = feedbackTemplates[levelCategory].excellent;
    } else if (score >= 60) {
        template = feedbackTemplates[levelCategory].good;
    } else {
        template = feedbackTemplates[levelCategory].needsWork;
    }
    
    // Fill template with errors and suggestions
    let feedback = template
        .replace('{error1}', errors[0])
        .replace('{error2}', errors[1])
        .replace('{error3}', errors[2])
        .replace('{error4}', errors[3] || errors[2]) // In case we don't have a 4th error
        .replace('{suggestion1}', suggestions[0])
        .replace('{suggestion2}', suggestions[1] || suggestions[0]); // In case we don't have a 2nd suggestion
    
    return feedback;
}

// Helper function to get random items from an array
function getRandomItems(array, count) {
    let shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to save essay to localStorage
export function saveEssay(essayData) {
    let savedEssays = loadSavedEssays();
    savedEssays.push(essayData);
    localStorage.setItem('tcfSavedEssays', JSON.stringify(savedEssays));
}

// Function to load saved essays from localStorage
export function loadSavedEssays() {
    const savedData = localStorage.getItem('tcfSavedEssays');
    if (savedData) {
        return JSON.parse(savedData);
    }
    return [];
}

// Function to analyze essay and provide basic metrics
export function analyzeEssay(text) {
    if (!text || text.trim() === '') {
        return {
            wordCount: 0,
            sentenceCount: 0,
            averageWordLength: 0,
            longWords: 0
        };
    }
    
    const words = text.trim().split(/\s+/);
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const wordLengths = words.map(w => w.length);
    const averageWordLength = wordLengths.reduce((sum, length) => sum + length, 0) / words.length;
    const longWords = words.filter(w => w.length > 6).length;
    
    return {
        wordCount: words.length,
        sentenceCount: sentences.length,
        averageWordLength: averageWordLength.toFixed(1),
        longWords: longWords
    };
}

// Export writing progress data for the module status check
window.writingLoaded = true;
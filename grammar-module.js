export const grammarTopics = [
    // Beginner Level
    {
        title: "Le Présent de l'Indicatif",
        level: "beginner",
        explanation: `
            <p>Le présent de l'indicatif est utilisé pour décrire des actions qui se déroulent au moment où l'on parle, des vérités générales, des habitudes ou des faits permanents.</p>
            
            <h4 class="font-medium mt-2">Verbes réguliers en -ER</h4>
            <p>Les verbes en -ER suivent un modèle régulier. Exemple avec "parler" (to speak):</p>
            <ul class="ml-5 list-disc">
                <li>Je parle - I speak</li>
                <li>Tu parles - You speak (singular/informal)</li>
                <li>Il/Elle/On parle - He/She/One speaks</li>
                <li>Nous parlons - We speak</li>
                <li>Vous parlez - You speak (plural/formal)</li>
                <li>Ils/Elles parlent - They speak</li>
            </ul>
            
            <h4 class="font-medium mt-2">Verbes réguliers en -IR</h4>
            <p>Les verbes en -IR (comme ceux du deuxième groupe) ont leur propre conjugaison. Exemple avec "finir" (to finish):</p>
            <ul class="ml-5 list-disc">
                <li>Je finis</li>
                <li>Tu finis</li>
                <li>Il/Elle/On finit</li>
                <li>Nous finissons</li>
                <li>Vous finissez</li>
                <li>Ils/Elles finissent</li>
            </ul>
            
            <h4 class="font-medium mt-2">Verbes réguliers en -RE</h4>
            <p>Les verbes en -RE suivent un autre modèle. Exemple avec "vendre" (to sell):</p>
            <ul class="ml-5 list-disc">
                <li>Je vends</li>
                <li>Tu vends</li>
                <li>Il/Elle/On vend</li>
                <li>Nous vendons</li>
                <li>Vous vendez</li>
                <li>Ils/Elles vendent</li>
            </ul>
            
            <h4 class="font-medium mt-2">Verbes irréguliers fréquents</h4>
            <p>Certains verbes courants ne suivent pas les règles régulières et doivent être mémorisés :</p>
            <ul class="ml-5 list-disc">
                <li>Être (to be): je suis, tu es, il est, nous sommes, vous êtes, ils sont</li>
                <li>Avoir (to have): j'ai, tu as, il a, nous avons, vous avez, ils ont</li>
                <li>Faire (to do/make): je fais, tu fais, il fait, nous faisons, vous faites, ils font</li>
                <li>Aller (to go): je vais, tu vas, il va, nous allons, vous allez, ils vont</li>
            </ul>
            
            <h4 class="font-medium mt-2">Remarques</h4>
            <p>- Les verbes en -ER comme "manger" ou "voyager" peuvent avoir des modifications orthographiques (ex. je mange, nous mangeons).</p>
            <p>- Certains verbes en -IR, comme "dormir" ou "sortir", appartiennent au troisième groupe et ont des conjugaisons différentes.</p>
        `,
        examples: [
            "Je <strong>parle</strong> français tous les jours. (I speak French every day.)",
            "Tu <strong>vas</strong> à l'école en bus ? (Do you go to school by bus?)",
            "Nous <strong>finissons</strong> le travail à 18h. (We finish work at 6 pm.)",
            "Les magasins <strong>ferment</strong> à 20h. (The shops close at 8 pm.)",
            "Elle <strong>est</strong> étudiante à l'université. (She is a student at the university.)"
        ],
        exercises: [
            {
                question: "Je _____ au cinéma le week-end. (aller)",
                options: ["vais", "va", "allez", "allons"],
                correct: 0,
                explanation: "La conjugaison correcte de 'aller' à la première personne du singulier (je) est 'vais'."
            },
            {
                question: "Vous _____ du piano ? (jouer)",
                options: ["joue", "jouent", "jouez", "joues"],
                correct: 2,
                explanation: "La conjugaison correcte de 'jouer' à la deuxième personne du pluriel (vous) est 'jouez'."
            },
            {
                question: "Ils _____ leurs devoirs. (finir)",
                options: ["finit", "finis", "finissent", "finissons"],
                correct: 2,
                explanation: "La conjugaison correcte de 'finir' à la troisième personne du pluriel (ils) est 'finissent'."
            },
            {
                question: "Nous _____ la télévision le soir. (regarder)",
                options: ["regardez", "regardons", "regarde", "regardent"],
                correct: 1,
                explanation: "La conjugaison correcte de 'regarder' à la première personne du pluriel (nous) est 'regardons'."
            },
            {
                question: "Tu _____ français ? (être)",
                options: ["es", "est", "sommes", "êtes"],
                correct: 0,
                explanation: "La conjugaison correcte de 'être' à la deuxième personne du singulier (tu) est 'es'."
            },
            {
                question: "Elle _____ une chanson. (chanter)",
                options: ["chante", "chantes", "chantent", "chantons"],
                correct: 0,
                explanation: "La conjugaison correcte de 'chanter' à la troisième personne du singulier (elle) est 'chante'."
            }
        ]
    },
    {
        title: "Les Articles Définis et Indéfinis",
        level: "beginner",
        explanation: `
            <p>Les articles en français accompagnent les noms pour indiquer leur genre, leur nombre et leur spécificité. Ils se divisent en trois catégories : définis, indéfinis et partitifs.</p>
            
            <h4 class="font-medium mt-2">Articles définis (The)</h4>
            <p>Utilisés pour parler de quelque chose de spécifique ou déjà mentionné :</p>
            <ul class="ml-5 list-disc">
                <li><strong>le</strong> - masculin singulier (le livre - the book)</li>
                <li><strong>la</strong> - féminin singulier (la table - the table)</li>
                <li><strong>l'</strong> - devant une voyelle ou h muet (l'homme - the man, l'école - the school)</li>
                <li><strong>les</strong> - pluriel (les chats - the cats)</li>
            </ul>
            
            <h4 class="font-medium mt-2">Articles indéfinis (A, An, Some)</h4>
            <p>Utilisés pour introduire un nom non spécifique ou mentionné pour la première fois :</p>
            <ul class="ml-5 list-disc">
                <li><strong>un</strong> - masculin singulier (un livre - a book)</li>
                <li><strong>une</strong> - féminin singulier (une table - a table)</li>
                <li><strong>des</strong> - pluriel (des chats - some cats)</li>
            </ul>
            
            <h4 class="font-medium mt-2">Articles partitifs (Some/Any)</h4>
            <p>Utilisés pour parler d'une quantité indéterminée de quelque chose non comptable :</p>
            <ul class="ml-5 list-disc">
                <li><strong>du</strong> - masculin singulier (du pain - some bread)</li>
                <li><strong>de la</strong> - féminin singulier (de la confiture - some jam)</li>
                <li><strong>de l'</strong> - devant une voyelle (de l'eau - some water)</li>
                <li><strong>des</strong> - pluriel (des fruits - some fruits)</li>
            </ul>
            
            <h4 class="font-medium mt-2">Remarques</h4>
            <p>- Dans les phrases négatives, les articles indéfinis et partitifs deviennent souvent "de" (ex. Je n'ai pas <strong>de</strong> voiture).</p>
            <p>- Les articles doivent s'accorder en genre et en nombre avec le nom qu'ils accompagnent.</p>
        `,
        examples: [
            "<strong>Le</strong> livre sur la table est à moi. (The book on the table is mine.)",
            "J'ai acheté <strong>une</strong> nouvelle voiture. (I bought a new car.)",
            "J'aimerais <strong>du</strong> café, s'il vous plaît. (I would like some coffee, please.)",
            "Il y a <strong>des</strong> chiens dans le parc. (There are some dogs in the park.)",
            "Je bois <strong>de l'</strong>eau tous les matins. (I drink water every morning.)"
        ],
        exercises: [
            {
                question: "J'aime _____ chocolat.",
                options: ["le", "la", "un", "une"],
                correct: 0,
                explanation: "On utilise l'article défini 'le' pour parler du chocolat en général."
            },
            {
                question: "Il y a _____ hôtel près d'ici ?",
                options: ["un", "une", "le", "la"],
                correct: 0,
                explanation: "On utilise l'article indéfini 'un' pour parler d'un hôtel non spécifique. 'Hôtel' est masculin."
            },
            {
                question: "J'ai adopté _____ chat noir.",
                options: ["le", "la", "un", "une"],
                correct: 2,
                explanation: "On utilise l'article indéfini 'un' car on introduit ce chat pour la première fois. 'Chat' est masculin."
            },
            {
                question: "_____ fleurs dans le jardin sont belles.",
                options: ["Des", "Un", "Les", "Le"],
                correct: 2,
                explanation: "On utilise l'article défini 'Les' pour parler de fleurs spécifiques, celles qui sont dans le jardin."
            },
            {
                question: "Tu veux _____ eau ?",
                options: ["le", "la", "de l'", "des"],
                correct: 2,
                explanation: "On utilise l'article partitif 'de l'' pour une quantité indéterminée d'eau. 'Eau' commence par une voyelle."
            },
            {
                question: "Nous avons acheté _____ pommes au marché.",
                options: ["du", "de la", "des", "de l'"],
                correct: 2,
                explanation: "On utilise l'article indéfini 'des' pour parler de plusieurs pommes, un nom comptable au pluriel."
            }
        ]
    },
    {
        title: "Les Adjectifs Démonstratifs",
        level: "beginner",
        explanation: `
            <p>Les adjectifs démonstratifs (ce, cet, cette, ces) servent à indiquer un nom spécifique ou à le désigner. Ils s'accordent en genre et en nombre avec le nom qu'ils accompagnent.</p>
            
            <h4 class="font-medium mt-2">Formes des adjectifs démonstratifs</h4>
            <ul class="ml-5 list-disc">
                <li><strong>ce</strong> - masculin singulier, avant une consonne (ce livre - this book)</li>
                <li><strong>cet</strong> - masculin singulier, avant une voyelle ou h muet (cet homme - this man)</li>
                <li><strong>cette</strong> - féminin singulier (cette table - this table)</li>
                <li><strong>ces</strong> - pluriel, masculin ou féminin (ces livres - these books, ces tables - these tables)</li>
            </ul>
            
            <h4 class="font-medium mt-2">Utilisation</h4>
            <p>- Les adjectifs démonstratifs sont utilisés pour désigner quelque chose de précis, souvent accompagné d'un geste ou d'un contexte clair.</p>
            <p>- Ils peuvent être renforcés par "-ci" ou "-là" pour préciser "ceci" (this) ou "cela" (that) : ce livre-ci, ces tables-là.</p>
            
            <h4 class="font-medium mt-2">Remarques</h4>
            <p>- "Cet" est utilisé avant une voyelle ou un h muet pour faciliter la prononciation (ex. cet arbre, cet hôtel).</p>
            <p>- Contrairement aux articles, les adjectifs démonstratifs mettent l'accent sur l'identification ou la désignation.</p>
        `,
        examples: [
            "<strong>Ce</strong> livre est très intéressant. (This book is very interesting.)",
            "<strong>Cet</strong> homme parle français. (This man speaks French.)",
            "<strong>Cette</strong> maison est grande. (This house is big.)",
            "<strong>Ces</strong> enfants jouent dans le parc. (These children are playing in the park.)",
            "Je veux <strong>ces</strong> chaussures-là. (I want those shoes.)"
        ],
        exercises: [
            {
                question: "_____ voiture est rouge.",
                options: ["Ce", "Cet", "Cette", "Ces"],
                correct: 2,
                explanation: "'Voiture' est féminin singulier, donc on utilise 'cette'."
            },
            {
                question: "_____ arbre est très vieux.",
                options: ["Ce", "Cet", "Cette", "Ces"],
                correct: 1,
                explanation: "'Arbre' est masculin singulier et commence par une voyelle, donc on utilise 'cet'."
            },
            {
                question: "_____ livres sont sur la table.",
                options: ["Ce", "Cet", "Cette", "Ces"],
                correct: 3,
                explanation: "'Livres' est pluriel, donc on utilise 'ces'."
            },
            {
                question: "_____ femme travaille à l’hôpital.",
                options: ["Ce", "Cet", "Cette", "Ces"],
                correct: 2,
                explanation: "'Femme' est féminin singulier, donc on utilise 'cette'."
            },
            {
                question: "Je préfère _____ tableau-ci.",
                options: ["ce", "cet", "cette", "ces"],
                correct: 0,
                explanation: "'Tableau' est masculin singulier et commence par une consonne, donc on utilise 'ce'."
            }
        ]
    },
    // Intermediate Level
    {
        title: "Le Passé Composé",
        level: "intermediate",
        explanation: `
            <p>Le passé composé exprime des actions terminées dans le passé, souvent avec un moment précis. Il est formé avec un auxiliaire (avoir ou être) au présent + le participe passé du verbe principal.</p>
            
            <h4 class="font-medium mt-2">Formation avec l'auxiliaire AVOIR</h4>
            <p>La majorité des verbes utilisent "avoir" :</p>
            <ul class="ml-5 list-disc">
                <li>J'ai parlé - I spoke/have spoken</li>
                <li>Tu as fini - You finished/have finished</li>
                <li>Il/Elle a vendu - He/She sold/has sold</li>
                <li>Nous avons mangé - We ate/have eaten</li>
                <li>Vous avez lu - You read/have read</li>
                <li>Ils/Elles ont écrit - They wrote/have written</li>
            </ul>
            
            <h4 class="font-medium mt-2">Formation avec l'auxiliaire ÊTRE</h4>
            <p>Certains verbes, principalement de mouvement ou pronominaux, utilisent "être". Le participe passé s'accorde en genre et en nombre avec le sujet. Liste des verbes utilisant "être" (DR MRS VANDERTRAMP) :</p>
            <ul class="ml-5 list-disc">
                <li>Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Retourner, Tomber, Rentrer, Arriver, Mourir, Partir</li>
            </ul>
            <p>Exemples :</p>
            <ul class="ml-5 list-disc">
                <li>Je suis allé(e) - I went</li>
                <li>Tu es venu(e) - You came</li>
                <li>Elle est née - She was born</li>
                <li>Nous sommes montés(es) - We went up</li>
                <li>Vous êtes partis(es) - You left</li>
                <li>Ils sont arrivés / Elles sont arrivées - They arrived</li>
            </ul>
            
            <h4 class="font-medium mt-2">Participes passés irréguliers</h4>
            <p>Certains verbes ont des participes passés irréguliers :</p>
            <ul class="ml-5 list-disc">
                <li>avoir → eu</li>
                <li>être → été</li>
                <li>faire → fait</li>
                <li>voir → vu</li>
                <li>prendre → pris</li>
                <li>mettre → mis</li>
                <li>ouvrir → ouvert</li>
                <li>écrire → écrit</li>
                <li>lire → lu</li>
            </ul>
            
            <h4 class="font-medium mt-2">Accord du participe passé</h4>
            <p>- Avec "avoir", le participe passé s'accorde avec l'objet direct si celui-ci précède le verbe (ex. La lettre que j'ai <strong>écrite</strong>). Sinon, pas d'accord (ex. J'ai écrit <strong>une lettre</strong>).</p>
            <p>- Avec "être", le participe passé s'accorde toujours avec le sujet.</p>
        `,
        examples: [
            "J'<strong>ai mangé</strong> une pomme. (I ate an apple.)",
            "Nous <strong>sommes allés</strong> au cinéma hier soir. (We went to the cinema last night.)",
            "Elle <strong>a pris</strong> le train ce matin. (She took the train this morning.)",
            "Ils <strong>sont venus</strong> me voir la semaine dernière. (They came to see me last week.)",
            "Les fleurs que j'<strong>ai achetées</strong> sont rouges. (The flowers I bought are red.)"
        ],
        exercises: [
            {
                question: "Tu _____ (manger) au restaurant hier ?",
                options: ["as mangé", "a mangé", "es mangé", "est mangé"],
                correct: 0,
                explanation: "Le verbe 'manger' utilise l'auxiliaire 'avoir'. La deuxième personne du singulier (tu) de 'avoir' est 'as'."
            },
            {
                question: "Nous _____ (aller) en France l'année dernière.",
                options: ["avons allés", "avons allé", "sommes allés", "sommes allé"],
                correct: 2,
                explanation: "Le verbe 'aller' utilise l'auxiliaire 'être'. Avec 'nous', on accorde le participe passé au masculin pluriel."
            },
            {
                question: "Elle _____ (prendre) le bus ce matin.",
                options: ["a prendu", "a pris", "est prise", "est pris"],
                correct: 1,
                explanation: "Le verbe 'prendre' utilise l'auxiliaire 'avoir' et son participe passé irrégulier est 'pris'."
            },
            {
                question: "Vous _____ (venir) chez moi samedi dernier ?",
                options: ["avez venu", "avez venus", "êtes venus", "êtes venu"],
                correct: 2,
                explanation: "Le verbe 'venir' utilise l'auxiliaire 'être'. Le participe passé s'accorde en genre et en nombre avec le sujet."
            },
            {
                question: "Ils _____ (faire) leurs devoirs.",
                options: ["ont fait", "ont faits", "sont faits", "sont fait"],
                correct: 0,
                explanation: "Le verbe 'faire' utilise l'auxiliaire 'avoir' et son participe passé irrégulier est 'fait'. Avec 'avoir', le participe passé ne s'accorde pas avec le sujet."
            },
            {
                question: "La chanson que nous _____ (écouter) était magnifique.",
                options: ["avons écouté", "avons écoutée", "sommes écouté", "sommes écoutée"],
                correct: 1,
                explanation: "Avec 'avoir', le participe passé s'accorde avec l'objet direct (la chanson, féminin singulier) quand il le précède."
            }
        ]
    },
    {
        title: "Les Pronoms Relatifs",
        level: "intermediate",
        explanation: `
            <p>Les pronoms relatifs (qui, que, dont, où, lequel, etc.) relient deux propositions en remplaçant un nom ou un pronom pour éviter les répétitions.</p>
            
            <h4 class="font-medium mt-2">Pronoms relatifs simples</h4>
            <ul class="ml-5 list-disc">
                <li><strong>qui</strong> - sujet de la proposition relative (who, which, that)</li>
                <li><strong>que</strong> - objet direct de la proposition relative (whom, which, that)</li>
                <li><strong>dont</strong> - indique la possession ou un complément avec "de" (whose, of which)</li>
                <li><strong>où</strong> - indique un lieu ou un temps (where, when)</li>
            </ul>
            
            <h4 class="font-medium mt-2">Exemples</h4>
            <p><strong>Qui</strong> : L'étudiant <strong>qui</strong> étudie beaucoup réussit. (The student who studies a lot succeeds.)</p>
            <p><strong>Que</strong> : Le film <strong>que</strong> nous avons vu était génial. (The movie that we watched was great.)</p>
            <p><strong>Dont</strong> : La femme <strong>dont</strong> je parle est ma cousine. (The woman I’m talking about is my cousin.)</p>
            <p><strong>Où</strong> : La ville <strong>où</strong> je suis né est loin. (The city where I was born is far.)</p>
            
            <h4 class="font-medium mt-2">Pronoms relatifs composés</h4>
            <p>Utilisés après une préposition, ils s'accordent en genre et en nombre :</p>
            <ul class="ml-5 list-disc">
                <li><strong>lequel, laquelle, lesquels, lesquelles</strong> - après une préposition (ex. avec laquelle)</li>
                <li><strong>auquel, à laquelle, auxquels, auxquelles</strong> - contraction avec "à"</li>
                <li><strong>duquel, de laquelle, desquels, desquelles</strong> - contraction avec "de"</li>
            </ul>
            <p>Exemples :</p>
            <p>La chaise sur <strong>laquelle</strong> je suis assis est vieille. (The chair on which I am sitting is old.)</p>
            <p>Le projet <strong>auquel</strong> je contribue est important. (The project to which I contribute is important.)</p>
            
            <h4 class="font-medium mt-2">Remarques</h4>
            <p>- "Dont" remplace "de + nom" et est souvent utilisé pour exprimer la possession ou une relation.</p>
            <p>- "Où" peut être utilisé pour le temps dans des contextes formels (ex. Le jour <strong>où</strong> il est parti).</p>
        `,
        examples: [
            "La femme <strong>qui</strong> porte une robe rouge est ma tante. (The woman who is wearing a red dress is my aunt.)",
            "Le film <strong>que</strong> nous avons vu hier était passionnant. (The movie that we saw yesterday was exciting.)",
            "La maison <strong>où</strong> j'ai grandi se trouve à la campagne. (The house where I grew up is in the countryside.)",
            "C'est un sujet <strong>dont</strong> je ne veux pas parler. (It's a subject about which I don't want to talk.)",
            "Le tableau <strong>auquel</strong> je pense est au musée. (The painting I’m thinking about is in the museum.)"
        ],
        exercises: [
            {
                question: "L'homme _____ parle français est canadien.",
                options: ["que", "qui", "où", "dont"],
                correct: 1,
                explanation: "'Qui' est le pronom relatif utilisé pour remplacer le sujet de la proposition relative."
            },
            {
                question: "Le livre _____ j'ai lu est sur la table.",
                options: ["que", "qui", "où", "dont"],
                correct: 0,
                explanation: "'Que' est le pronom relatif utilisé pour remplacer le complément d'objet direct de la proposition relative."
            },
            {
                question: "C'est la ville _____ je suis né.",
                options: ["que", "qui", "où", "dont"],
                correct: 2,
                explanation: "'Où' est le pronom relatif utilisé pour indiquer un lieu."
            },
            {
                question: "La personne _____ je te parle est mon ami.",
                options: ["que", "qui", "où", "dont"],
                correct: 3,
                explanation: "'Dont' est utilisé ici car on dit 'parler de quelqu’un'."
            },
            {
                question: "La table sur _____ j'ai posé mon sac est en bois.",
                options: ["que", "qui", "où", "laquelle"],
                correct: 3,
                explanation: "Après une préposition (ici 'sur'), on utilise un pronom relatif composé, ici 'laquelle' car 'table' est féminin singulier."
            },
            {
                question: "L’ami avec _____ je voyage est très drôle.",
                options: ["lequel", "laquelle", "que", "qui"],
                correct: 0,
                explanation: "Après la préposition 'avec', on utilise 'lequel' car 'ami' est masculin singulier."
            }
        ]
    },
    {
        title: "L’Imparfait",
        level: "intermediate",
        explanation: `
            <p>L’imparfait est un temps du passé utilisé pour décrire des actions habituelles, des états, des descriptions ou des actions en cours dans le passé. Il contraste avec le passé composé, qui marque des actions ponctuelles et terminées.</p>
            
            <h4 class="font-medium mt-2">Formation de l’imparfait</h4>
            <p>Prenez la première personne du pluriel (nous) du présent, enlevez la terminaison -ons, et ajoutez les terminaisons de l’imparfait : -ais, -ais, -ait, -ions, -iez, -aient.</p>
            <p>Exemples :</p>
            <ul class="ml-5 list-disc">
                <li>parler (nous parlons) → je parlais, tu parlais, il/elle parlait, nous parlions, vous parliez, ils/elles parlaient</li>
                <li>finir (nous finissons) → je finissais, tu finissais, il/elle finissait, nous finissions, vous finissiez, ils/elles finissaient</li>
                <li>vendre (nous vendons) → je vendais, tu vendais, il/elle vendait, nous vendions, vous vendiez, ils/elles vendaient</li>
            </ul>
            
            <h4 class="font-medium mt-2">Verbes irréguliers</h4>
            <p>Le seul verbe totalement irrégulier à l’imparfait est "être" : j’étais, tu étais, il/elle était, nous étions, vous étiez, ils/elles étaient.</p>
            <p>Certains verbes ont un radical irrégulier au présent, mais suivent les mêmes terminaisons :</p>
            <ul class="ml-5 list-disc">
                <li>avoir (nous avons) → j’avais, tu avais, etc.</li>
                <li>faire (nous faisons) → je faisais, tu faisais, etc.</li>
            </ul>
            
            <h4 class="font-medium mt-2">Emplois de l’imparfait</h4>
            <ul class="ml-5 list-disc">
                <li>Actions habituelles : Quand j’étais enfant, je <strong>jouais</strong> tous les jours. (When I was a child, I played every day.)</li>
                <li>Descriptions : Le ciel <strong>était</strong> bleu et il <strong>faisait</strong> chaud. (The sky was blue and it was hot.)</li>
                <li>Actions en cours : Pendant qu’elle <strong>lisait</strong>, il <strong>regardait</strong> la télévision. (While she was reading, he was watching TV.)</li>
                <li>Situations de fond : Il <strong>pleuvait</strong> quand je suis sorti. (It was raining when I went out.)</li>
            </ul>
            
            <h4 class="font-medium mt-2">Remarques</h4>
            <p>- L’imparfait est souvent utilisé avec le passé composé pour décrire une action en cours interrompue par une action ponctuelle.</p>
            <p>- Les verbes d’état (comme être, avoir, penser) sont souvent à l’imparfait pour décrire des sentiments ou des conditions passées.</p>
        `,
        examples: [
            "Quand j’<strong>étais</strong> jeune, je <strong>vivais</strong> à la campagne. (When I was young, I lived in the countryside.)",
            "Il <strong>faisait</strong> beau hier matin. (It was nice yesterday morning.)",
            "Nous <strong>parlions</strong> avec nos amis quand le téléphone a sonné. (We were talking with our friends when the phone rang.)",
            "Les enfants <strong>jouaient</strong> dans le parc. (The children were playing in the park.)",
            "Je <strong>pensais</strong> à toi toute la journée. (I was thinking about you all day.)"
        ],
        exercises: [
            {
                question: "Quand j’étais petit, je _____ (jouer) dehors tous les jours.",
                options: ["jouais", "jouai", "j’ai joué", "joue"],
                correct: 0,
                explanation: "L’imparfait est utilisé pour une action habituelle dans le passé. La conjugaison correcte de 'jouer' pour 'je' est 'jouais'."
            },
            {
                question: "Il _____ (pleuvoir) toute la matinée hier.",
                options: ["pleuvait", "a plu", "pleut", "plut"],
                correct: 0,
                explanation: "L’imparfait est utilisé pour décrire une situation en cours dans le passé. La conjugaison correcte de 'pleuvoir' pour 'il' est 'pleuvait'."
            },
            {
                question: "Nous _____ (être) très fatigués après la randonnée.",
                options: ["étions", "sommes", "fûmes", "étiez"],
                correct: 0,
                explanation: "Le verbe 'être' à l’imparfait pour 'nous' est 'étions'."
            },
            {
                question: "Tu _____ (lire) un livre quand je t’ai appelé.",
                options: ["lisais", "lis", "as lu", "liras"],
                correct: 0,
                explanation: "L’imparfait est utilisé pour une action en cours dans le passé. La conjugaison correcte de 'lire' pour 'tu' est 'lisais'."
            },
            {
                question: "Les enfants _____ (courir) dans le jardin toute la journée.",
                options: ["couraient", "courent", "ont couru", "couraient"],
                correct: 0,
                explanation: "L’imparfait est utilisé pour une action continue ou répétée. La conjugaison correcte de 'courir' pour 'ils' est 'couraient'."
            }
        ]
    },
    {
        title: "Les Pronoms Personnels COD et COI",
        level: "intermediate",
        explanation: `
            <p>Les pronoms personnels compléments d’objet direct (COD) et indirect (COI) remplacent un nom pour éviter les répétitions. Ils se placent généralement avant le verbe conjugué.</p>
            
            <h4 class="font-medium mt-2">Pronoms COD (Complément d’Objet Direct)</h4>
            <p>Remplacent le nom qui reçoit l’action directement :</p>
            <ul class="ml-5 list-disc">
                <li><strong>me/m’</strong> - me</li>
                <li><strong>te/t’</strong> - you (informal)</li>
                <li><strong>le/l’</strong> - him, it (masculin)</li>
                <li><strong>la/l’</strong> - her, it (féminin)</li>
                <li><strong>nous</strong> - us</li>
                <li><strong>vous</strong> - you (formal/plural)</li>
                <li><strong>les</strong> - them</li>
            </ul>
            <p>Exemple : Je vois le chien → Je <strong>le</strong> vois. (I see the dog → I see it.)</p>
            
            <h4 class="font-medium mt-2">Pronoms COI (Complément d’Objet Indirect)</h4>
            <p>Remplacent le nom précédé d’une préposition (souvent "à") :</p>
            <ul class="ml-5 list-disc">
                <li><strong>me/m’</strong> - to me</li>
                <li><strong>te/t’</strong> - to you (informal)</li>
                <li><strong>lui</strong> - to him/her</li>
                <li><strong>nous</strong> - to us</li>
                <li><strong>vous</strong> - to you (formal/plural)</li>
                <li><strong>leur</strong> - to them</li>
            </ul>
            <p>Exemple : Je parle à Marie → Je <strong>lui</strong> parle. (I’m talking to Marie → I’m talking to her.)</p>
            
            <h4 class="font-medium mt-2">Ordre des pronoms</h4>
            <p>Quand plusieurs pronoms sont utilisés, ils suivent cet ordre : me/te/nous/vous → le/la/l’/les → lui/leur.</p>
            <p>Exemple : Il me la donne. (He gives it to me.)</p>
            
            <h4 class="font-medium mt-2">Position des pronoms</h4>
            <p>- Avant le verbe conjugué, sauf à l’impératif affirmatif (ex. Donne-<strong>le</strong>-moi).</p>
            <p>- Avec les verbes composés, avant l’auxiliaire (ex. Je <strong>l’</strong>ai vu).</p>
            
            <h4 class="font-medium mt-2">Remarques</h4>
            <p>- Les verbes comme "téléphoner à", "parler à" utilisent un COI (ex. Je <strong>lui</strong> téléphone).</p>
            <p>- Attention à l’élision (me → m’, te → t’, le/la → l’) devant une voyelle ou un h muet.</p>
        `,
        examples: [
            "Je <strong>le</strong> vois tous les jours. (I see him every day.)",
            "Elle <strong>me</strong> parle souvent. (She often talks to me.)",
            "Il <strong>leur</strong> a écrit une lettre. (He wrote them a letter.)",
            "Nous <strong>les</strong> avons invités à la fête. (We invited them to the party.)",
            "Donne-<strong>moi</strong> le livre ! (Give me the book!)"
        ],
        exercises: [
            {
                question: "Je _____ vois demain. (le garçon)",
                options: ["le", "lui", "la", "les"],
                correct: 0,
                explanation: "'Le garçon' est un COD, remplacé par le pronom 'le'."
            },
            {
                question: "Elle _____ téléphone tous les soirs. (à son ami)",
                options: ["le", "lui", "la", "les"],
                correct: 1,
                explanation: "'À son ami' est un COI, remplacé par 'lui'."
            },
            {
                question: "Nous _____ avons acheté des fleurs. (les filles)",
                options: ["le", "lui", "les", "leur"],
                correct: 2,
                explanation: "'Les filles' est un COD pluriel, remplacé par 'les'."
            },
            {
                question: "Il _____ donne un cadeau. (à ses parents)",
                options: ["le", "lui", "les", "leur"],
                correct: 3,
                explanation: "'À ses parents' est un COI pluriel, remplacé par 'leur'."
            },
            {
                question: "Tu _____ as vu hier ? (la voiture)",
                options: ["le", "la", "lui", "les"],
                correct: 1,
                explanation: "'La voiture' est un COD féminin, remplacé par 'la'."
            }
        ]
    }
];

// Grammar-related utility functions
export function saveGrammarProgress(completedGrammar) {
    localStorage.setItem('tcfGrammarProgress', JSON.stringify(completedGrammar));
}

export function loadGrammarProgress() {
    const savedProgress = localStorage.getItem('tcfGrammarProgress');
    if (savedProgress) {
        return JSON.parse(savedProgress);
    }
    return [];
}

// Export grammar progress data for the module status check
window.grammarLoaded = true;
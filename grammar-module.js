// grammar-module.js - TCF French Grammar Module

// Export grammar topics with explanations and exercises
export const grammarTopics = [
    // Beginner Level
    {
        title: "Le Présent de l'Indicatif",
        level: "beginner",
        explanation: `
            <p>Le présent de l'indicatif exprime une action qui se déroule au moment où l'on parle ou une vérité générale.</p>
            
            <h4 class="font-medium mt-2">Verbes réguliers en -ER</h4>
            <p>Exemple avec le verbe "parler" (to speak):</p>
            <ul class="ml-5">
                <li>Je parle - I speak</li>
                <li>Tu parles - You speak (singular/informal)</li>
                <li>Il/Elle/On parle - He/She/One speaks</li>
                <li>Nous parlons - We speak</li>
                <li>Vous parlez - You speak (plural/formal)</li>
                <li>Ils/Elles parlent - They speak</li>
            </ul>
            
            <h4 class="font-medium mt-2">Verbes réguliers en -IR</h4>
            <p>Exemple avec "finir" (to finish):</p>
            <ul class="ml-5">
                <li>Je finis</li>
                <li>Tu finis</li>
                <li>Il/Elle/On finit</li>
                <li>Nous finissons</li>
                <li>Vous finissez</li>
                <li>Ils/Elles finissent</li>
            </ul>
            
            <h4 class="font-medium mt-2">Verbes réguliers en -RE</h4>
            <p>Exemple avec "vendre" (to sell):</p>
            <ul class="ml-5">
                <li>Je vends</li>
                <li>Tu vends</li>
                <li>Il/Elle/On vend</li>
                <li>Nous vendons</li>
                <li>Vous vendez</li>
                <li>Ils/Elles vendent</li>
            </ul>
            
            <h4 class="font-medium mt-2">Verbes irréguliers fréquents</h4>
            <p>Certains verbes très utilisés ont des conjugaisons irrégulières qu'il faut mémoriser :</p>
            <ul class="ml-5">
                <li>Être (to be): je suis, tu es, il est, nous sommes, vous êtes, ils sont</li>
                <li>Avoir (to have): j'ai, tu as, il a, nous avons, vous avez, ils ont</li>
                <li>Faire (to do/make): je fais, tu fais, il fait, nous faisons, vous faites, ils font</li>
                <li>Aller (to go): je vais, tu vas, il va, nous allons, vous allez, ils vont</li>
            </ul>
        `,
        examples: [
            "Je <strong>parle</strong> français tous les jours. (I speak French every day.)",
            "Tu <strong>vas</strong> à l'école en bus ? (Do you go to school by bus?)",
            "Nous <strong>finissons</strong> le travail à 18h. (We finish work at 6 pm.)",
            "Les magasins <strong>ferment</strong> à 20h. (The shops close at 8 pm.)"
        ],
        exercises: [
            {
                question: "Je _____ au cinéma le week-end. (aller)",
                options: ["vais", "va", "allez", "allons"],
                correct: 0,
                explanation: "La conjugaison correcte de 'aller' à la première personne du singulier (je) est 'vais'."
            },
            {
                question: "Vous _____ du piano? (jouer)",
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
                question: "Tu _____ français? (être)",
                options: ["es", "est", "sommes", "êtes"],
                correct: 0,
                explanation: "La conjugaison correcte de 'être' à la deuxième personne du singulier (tu) est 'es'."
            }
        ]
    },
    {
        title: "Les Articles Définis et Indéfinis",
        level: "beginner",
        explanation: `
            <p>En français, les articles sont utilisés devant les noms. Il existe deux types principaux d'articles: définis et indéfinis.</p>
            
            <h4 class="font-medium mt-2">Articles définis (The)</h4>
            <ul class="ml-5">
                <li><strong>le</strong> - masculin singulier (le livre - the book)</li>
                <li><strong>la</strong> - féminin singulier (la table - the table)</li>
                <li><strong>l'</strong> - devant une voyelle ou h muet (l'homme - the man, l'école - the school)</li>
                <li><strong>les</strong> - pluriel (les chats - the cats)</li>
            </ul>
            <p>On utilise les articles définis quand on parle de quelque chose de spécifique ou déjà mentionné.</p>
            
            <h4 class="font-medium mt-2">Articles indéfinis (A, An, Some)</h4>
            <ul class="ml-5">
                <li><strong>un</strong> - masculin singulier (un livre - a book)</li>
                <li><strong>une</strong> - féminin singulier (une table - a table)</li>
                <li><strong>des</strong> - pluriel (des chats - some cats)</li>
            </ul>
            <p>On utilise les articles indéfinis quand on parle de quelque chose de général ou mentionné pour la première fois.</p>
            
            <h4 class="font-medium mt-2">Articles partitifs (Some/Any)</h4>
            <ul class="ml-5">
                <li><strong>du</strong> - masculin singulier (du pain - some bread)</li>
                <li><strong>de la</strong> - féminin singulier (de la confiture - some jam)</li>
                <li><strong>de l'</strong> - devant une voyelle (de l'eau - some water)</li>
                <li><strong>des</strong> - pluriel (des fruits - some fruits)</li>
            </ul>
            <p>On utilise les articles partitifs pour parler d'une quantité indéterminée de quelque chose qui ne peut pas être compté.</p>
        `,
        examples: [
            "<strong>Le</strong> livre sur la table est à moi. (The book on the table is mine.)",
            "J'ai acheté <strong>une</strong> nouvelle voiture. (I bought a new car.)",
            "J'aimerais <strong>du</strong> café, s'il vous plaît. (I would like some coffee, please.)",
            "Il y a <strong>des</strong> chiens dans le parc. (There are some dogs in the park.)"
        ],
        exercises: [
            {
                question: "J'aime _____ chocolat.",
                options: ["le", "la", "un", "une"],
                correct: 0,
                explanation: "On utilise l'article défini 'le' pour parler du chocolat en général."
            },
            {
                question: "Il y a _____ hôtel près d'ici?",
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
                question: "Tu veux _____ eau?",
                options: ["le", "la", "de l'", "des"],
                correct: 2,
                explanation: "On utilise l'article partitif 'de l'' pour une quantité indéterminée d'eau. 'Eau' commence par une voyelle."
            }
        ]
    },
    
    // Intermediate Level
    {
        title: "Le Passé Composé",
        level: "intermediate",
        explanation: `
            <p>Le passé composé est un temps du passé utilisé pour parler d'actions complètement terminées dans le passé. Il est formé d'un auxiliaire (avoir ou être) conjugué au présent + le participe passé du verbe principal.</p>
            
            <h4 class="font-medium mt-2">Formation avec l'auxiliaire AVOIR</h4>
            <p>La plupart des verbes utilisent "avoir" comme auxiliaire:</p>
            <ul class="ml-5">
                <li>J'ai parlé - I spoke/have spoken</li>
                <li>Tu as fini - You finished/have finished</li>
                <li>Il/Elle a vendu - He/She sold/has sold</li>
                <li>Nous avons mangé - We ate/have eaten</li>
                <li>Vous avez lu - You read/have read</li>
                <li>Ils/Elles ont écrit - They wrote/have written</li>
            </ul>
            
            <h4 class="font-medium mt-2">Formation avec l'auxiliaire ÊTRE</h4>
            <p>Certains verbes (principalement les verbes de mouvement et les verbes pronominaux) utilisent "être" comme auxiliaire. Dans ce cas, le participe passé s'accorde en genre et en nombre avec le sujet.</p>
            <p>Les verbes suivants utilisent être (la liste "DR MRS VANDERTRAMP"):</p>
            <ul class="ml-5">
                <li>Devenir, Revenir, Monter, Rester, Sortir</li>
                <li>Venir, Aller, Naître, Descendre, Entrer</li>
                <li>Retourner, Tomber, Rentrer, Arriver, Mourir, Partir</li>
            </ul>
            <p>Exemples:</p>
            <ul class="ml-5">
                <li>Je suis allé(e) - I went</li>
                <li>Tu es venu(e) - You came</li>
                <li>Elle est née - She was born</li>
                <li>Nous sommes montés(es) - We went up</li>
                <li>Vous êtes partis(es) - You left</li>
                <li>Ils sont arrivés / Elles sont arrivées - They arrived</li>
            </ul>
            
            <h4 class="font-medium mt-2">Participes passés irréguliers</h4>
            <p>De nombreux verbes ont des participes passés irréguliers qu'il faut mémoriser:</p>
            <ul class="ml-5">
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
        `,
        examples: [
            "J'<strong>ai mangé</strong> une pomme. (I ate an apple.)",
            "Nous <strong>sommes allés</strong> au cinéma hier soir. (We went to the cinema last night.)",
            "Elle <strong>a pris</strong> le train ce matin. (She took the train this morning.)",
            "Ils <strong>sont venus</strong> me voir la semaine dernière. (They came to see me last week.)"
        ],
        exercises: [
            {
                question: "Tu _____ (manger) au restaurant hier?",
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
                question: "Vous _____ (venir) chez moi samedi dernier?",
                options: ["avez venu", "avez venus", "êtes venus", "êtes venu"],
                correct: 2,
                explanation: "Le verbe 'venir' utilise l'auxiliaire 'être'. Le participe passé s'accorde en genre et en nombre avec le sujet."
            },
            {
                question: "Ils _____ (faire) leurs devoirs.",
                options: ["ont fait", "ont faits", "sont faits", "sont fait"],
                correct: 0,
                explanation: "Le verbe 'faire' utilise l'auxiliaire 'avoir' et son participe passé irrégulier est 'fait'. Avec 'avoir', le participe passé ne s'accorde pas avec le sujet."
            }
        ]
    },
    {
        title: "Les Pronoms Relatifs",
        level: "intermediate",
        explanation: `
            <p>Les pronoms relatifs servent à relier deux phrases en évitant les répétitions. Ils remplacent un nom ou un pronom mentionné dans la phrase principale.</p>
            
            <h4 class="font-medium mt-2">Pronoms relatifs simples</h4>
            <ul class="ml-5">
                <li><strong>qui</strong> - sujet (who, which, that)</li>
                <li><strong>que</strong> - objet direct (whom, which, that)</li>
                <li><strong>où</strong> - lieu ou temps (where, when)</li>
                <li><strong>dont</strong> - complément introduit par "de" (of which, about which, whose)</li>
            </ul>
            
            <h4 class="font-medium mt-2">Exemples d'utilisation</h4>
            <p><strong>Qui</strong> (sujet):</p>
            <p class="ml-5">L'homme <strong>qui</strong> parle est mon professeur. (The man who is speaking is my teacher.)</p>
            
            <p><strong>Que</strong> (objet direct):</p>
            <p class="ml-5">Le livre <strong>que</strong> je lis est intéressant. (The book that I am reading is interesting.)</p>
            
            <p><strong>Où</strong> (lieu ou temps):</p>
            <p class="ml-5">La ville <strong>où</strong> j'habite est petite. (The city where I live is small.)</p>
            <p class="ml-5">Le jour <strong>où</strong> je suis arrivé était ensoleillé. (The day when I arrived was sunny.)</p>
            
            <p><strong>Dont</strong> (de + complément):</p>
            <p class="ml-5">La fille <strong>dont</strong> je parle est ma sœur. (The girl of whom I am speaking is my sister.)</p>
            <p class="ml-5">Le film <strong>dont</strong> j'ai besoin n'est pas disponible. (The film that I need is not available.)</p>
            
            <h4 class="font-medium mt-2">Pronoms relatifs composés</h4>
            <p>Utilisés principalement après une préposition:</p>
            <ul class="ml-5">
                <li><strong>lequel, laquelle, lesquels, lesquelles</strong> (which)</li>
                <li><strong>auquel, à laquelle, auxquels, auxquelles</strong> (to which)</li>
                <li><strong>duquel, de laquelle, desquels, desquelles</strong> (from which)</li>
            </ul>
            <p>Exemples:</p>
            <p class="ml-5">La table sur <strong>laquelle</strong> j'ai posé mon livre. (The table on which I put my book.)</p>
            <p class="ml-5">Le projet <strong>auquel</strong> je participe. (The project in which I participate.)</p>
        `,
        examples: [
            "La femme <strong>qui</strong> porte une robe rouge est ma tante. (The woman who is wearing a red dress is my aunt.)",
            "Le film <strong>que</strong> nous avons vu hier était passionnant. (The movie that we saw yesterday was exciting.)",
            "La maison <strong>où</strong> j'ai grandi se trouve à la campagne. (The house where I grew up is in the countryside.)",
            "C'est un sujet <strong>dont</strong> je ne veux pas parler. (It's a subject about which I don't want to talk.)"
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
                explanation: "'Dont' est utilisé ici car on dit 'parler de quelqu'un'."
            },
            {
                question: "La table sur _____ j'ai posé mon sac est en bois.",
                options: ["que", "qui", "où", "laquelle"],
                correct: 3,
                explanation: "Après une préposition (ici 'sur'), on utilise un pronom relatif composé, ici 'laquelle' car 'table' est féminin singulier."
            }
        ]
    },
    
    // Advanced Level
    {
        title: "Le Subjonctif",
        level: "advanced",
        explanation: `
            <p>Le subjonctif est un mode utilisé pour exprimer un souhait, une possibilité, un doute, une obligation ou un sentiment. Il est souvent introduit par "que".</p>
            
            <h4 class="font-medium mt-2">Formation du subjonctif présent</h4>
            <p>Pour la plupart des verbes, on prend la 3e personne du pluriel (ils/elles) au présent, on enlève -ent et on ajoute les terminaisons du subjonctif:</p>
            <ul class="ml-5">
                <li>-e (je)</li>
                <li>-es (tu)</li>
                <li>-e (il/elle/on)</li>
                <li>-ions (nous)</li>
                <li>-iez (vous)</li>
                <li>-ent (ils/elles)</li>
            </ul>
            
            <p>Exemple avec "parler":</p>
            <p>Ils parl<strong>ent</strong> → que je parl<strong>e</strong>, que tu parl<strong>es</strong>, qu'il parl<strong>e</strong>, que nous parl<strong>ions</strong>, que vous parl<strong>iez</strong>, qu'ils parl<strong>ent</strong></p>
            
            <h4 class="font-medium mt-2">Verbes irréguliers au subjonctif</h4>
            <p>Certains verbes ont des formes irrégulières au subjonctif présent:</p>
            <ul class="ml-5">
                <li>être: que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient</li>
                <li>avoir: que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient</li>
                <li>faire: que je fasse, que tu fasses, qu'il fasse, que nous fassions, que vous fassiez, qu'ils fassent</li>
                <li>aller: que j'aille, que tu ailles, qu'il aille, que nous allions, que vous alliez, qu'ils aillent</li>
                <li>pouvoir: que je puisse, que tu puisses, qu'il puisse, que nous puissions, que vous puissiez, qu'ils puissent</li>
                <li>savoir: que je sache, que tu saches, qu'il sache, que nous sachions, que vous sachiez, qu'ils sachent</li>
            </ul>
            
            <h4 class="font-medium mt-2">Emplois du subjonctif</h4>
            <p>Le subjonctif s'utilise après:</p>
            <ul class="ml-5">
                <li>Les expressions de volonté, de souhait: vouloir que, souhaiter que, désirer que</li>
                <li>Les expressions de nécessité, d'obligation: il faut que, il est nécessaire que</li>
                <li>Les expressions de doute, de possibilité: douter que, il est possible que</li>
                <li>Les expressions de sentiment: être content que, regretter que, avoir peur que</li>
                <li>Certaines conjonctions: bien que, pour que, avant que, sans que</li>
            </ul>
        `,
        examples: [
            "Je veux que tu <strong>viennes</strong> avec moi. (I want you to come with me.)",
            "Il faut que nous <strong>fassions</strong> attention. (We need to be careful.)",
            "Bien qu'il <strong>soit</strong> riche, il vit simplement. (Although he is rich, he lives simply.)",
            "Je doute qu'il <strong>puisse</strong> arriver à l'heure. (I doubt that he can arrive on time.)"
        ],
        exercises: [
            {
                question: "Je veux que tu _____ (venir) à ma fête.",
                options: ["viens", "viennes", "vient", "venez"],
                correct: 1,
                explanation: "Après 'je veux que', on utilise le subjonctif. La forme correcte de 'venir' au subjonctif pour 'tu' est 'viennes'."
            },
            {
                question: "Il faut que nous _____ (faire) nos devoirs.",
                options: ["faisons", "faisions", "fassions", "fassons"],
                correct: 2,
                explanation: "'Faire' est irrégulier au subjonctif. La forme correcte pour 'nous' est 'fassions'."
            },
            {
                question: "Bien qu'elle _____ (être) malade, elle travaille.",
                options: ["est", "soit", "sera", "serait"],
                correct: 1,
                explanation: "Après 'bien que', on utilise le subjonctif. La forme correcte de 'être' au subjonctif pour 'elle' est 'soit'."
            },
            {
                question: "Je doute qu'ils _____ (pouvoir) venir demain.",
                options: ["peuvent", "pourront", "pourraient", "puissent"],
                correct: 3,
                explanation: "Après 'je doute que', on utilise le subjonctif. La forme correcte de 'pouvoir' au subjonctif pour 'ils' est 'puissent'."
            },
            {
                question: "Il est important que vous _____ (savoir) la vérité.",
                options: ["savez", "sachez", "saurez", "savions"],
                correct: 1,
                explanation: "Après 'il est important que', on utilise le subjonctif. La forme correcte de 'savoir' au subjonctif pour 'vous' est 'sachiez'."
            }
        ]
    },
    {
        title: "Le Conditionnel",
        level: "advanced",
        explanation: `
            <p>Le conditionnel est un mode utilisé pour exprimer des actions hypothétiques, des souhaits ou des demandes polies. Il existe deux temps: le conditionnel présent et le conditionnel passé.</p>
            
            <h4 class="font-medium mt-2">Formation du conditionnel présent</h4>
            <p>On forme le conditionnel présent à partir du radical du futur simple + les terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).</p>
            
            <p>Exemples:</p>
            <ul class="ml-5">
                <li>parler → je parlerais, tu parlerais, il/elle parlerait, nous parlerions, vous parleriez, ils/elles parleraient</li>
                <li>finir → je finirais, tu finirais, il/elle finirait, nous finirions, vous finiriez, ils/elles finiraient</li>
                <li>vendre → je vendrais, tu vendrais, il/elle vendrait, nous vendrions, vous vendriez, ils/elles vendraient</li>
            </ul>
            
            <p>Verbes irréguliers au conditionnel (même radical qu'au futur):</p>
            <ul class="ml-5">
                <li>être → je serais, tu serais, il/elle serait, nous serions, vous seriez, ils/elles seraient</li>
                <li>avoir → j'aurais, tu aurais, il/elle aurait, nous aurions, vous auriez, ils/elles auraient</li>
                <li>aller → j'irais, tu irais, il/elle irait, nous irions, vous iriez, ils/elles iraient</li>
                <li>faire → je ferais, tu ferais, il/elle ferait, nous ferions, vous feriez, ils/elles feraient</li>
            </ul>
            
            <h4 class="font-medium mt-2">Emplois du conditionnel présent</h4>
            <ul class="ml-5">
                <li>Hypothèse: Si j'avais le temps, je voyagerais plus. (If I had time, I would travel more.)</li>
                <li>Politesse: Je voudrais un café, s'il vous plaît. (I would like a coffee, please.)</li>
                <li>Conseil: Tu devrais étudier davantage. (You should study more.)</li>
                <li>Souhait: J'aimerais visiter Paris un jour. (I would like to visit Paris someday.)</li>
                <li>Information non confirmée: Selon les médias, le président serait en voyage. (According to the media, the president would be traveling.)</li>
            </ul>
            
            <h4 class="font-medium mt-2">Conditionnel passé</h4>
            <p>Formé avec l'auxiliaire (avoir ou être) au conditionnel présent + participe passé</p>
            <p>Exemple: J'aurais parlé (I would have spoken)</p>
            <p>S'utilise pour exprimer un regret ou une hypothèse dans le passé:</p>
            <p>Si j'avais étudié, j'aurais réussi l'examen. (If I had studied, I would have passed the exam.)</p>
        `,
        examples: [
            "Si j'étais riche, j'<strong>achèterais</strong> une grande maison. (If I were rich, I would buy a big house.)",
            "Je <strong>voudrais</strong> réserver une table pour ce soir. (I would like to book a table for tonight.)",
            "Tu <strong>devrais</strong> faire plus d'exercice. (You should do more exercise.)",
            "Ils <strong>auraient dû</strong> nous prévenir. (They should have warned us.)"
        ],
        exercises: [
            {
                question: "Si j'avais plus de temps, je _____ (voyager) davantage.",
                options: ["voyage", "voyagerais", "voyagerai", "voyageraient"],
                correct: 1,
                explanation: "Dans une phrase hypothétique avec 'si + imparfait', on utilise le conditionnel présent dans la proposition principale."
            },
            {
                question: "Vous _____ (pouvoir) m'aider, s'il vous plaît?",
                options: ["pouvez", "pourriez", "pourrez", "puissiez"],
                correct: 1,
                explanation: "Pour faire une demande polie, on utilise le conditionnel présent. 'Pouvoir' au conditionnel présent pour 'vous' est 'pourriez'."
            },
            {
                question: "Si elle avait su la vérité, elle _____ (être) choquée.",
                options: ["est", "était", "serait", "aurait été"],
                correct: 3,
                explanation: "Dans une phrase hypothétique au passé, on utilise le conditionnel passé dans la proposition principale."
            },
            {
                question: "Tu _____ (devoir) lui dire la vérité.",
                options: ["dois", "devras", "devrais", "doives"],
                correct: 2,
                explanation: "Pour exprimer un conseil, on utilise le conditionnel présent. 'Devoir' au conditionnel présent pour 'tu' est 'devrais'."
            },
            {
                question: "Selon les informations, l'accident _____ (se produire) vers minuit.",
                options: ["s'est produit", "se produisait", "se produirait", "s'était produit"],
                correct: 2,
                explanation: "Pour exprimer une information non confirmée, on utilise le conditionnel présent."
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
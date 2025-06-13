// vocabulary-module.js - TCF French Vocabulary Module

// Export the vocabulary list with categories, pronunciations, and conjugations for verbs
export const vocabulary = [
    // Basic vocabulary
    { french: "bonjour", english: "hello", category: "basic", pronunciation: "bohn-zhoor" },
    { french: "merci", english: "thank you", category: "basic", pronunciation: "mehr-see" },
    { french: "s'il vous plaît", english: "please", category: "basic", pronunciation: "seel voo pleh" },
    { french: "au revoir", english: "goodbye", category: "basic", pronunciation: "oh ruh-vwahr" },
    { french: "oui", english: "yes", category: "basic", pronunciation: "wee" },
    { french: "non", english: "no", category: "basic", pronunciation: "nohn" },
    { french: "excusez-moi", english: "excuse me", category: "basic", pronunciation: "ex-koo-zay mwah" },
    { french: "pardon", english: "sorry", category: "basic", pronunciation: "par-dohn" },
    { french: "d'accord", english: "okay", category: "basic", pronunciation: "dah-kohr" },
    { french: "comment ça va", english: "how are you", category: "basic", pronunciation: "koh-mahn sah vah" },
    { french: "enchanté", english: "nice to meet you", category: "basic", pronunciation: "ahn-shahn-tay" },
    { french: "à bientôt", english: "see you soon", category: "basic", pronunciation: "ah bee-yan-toh" },
    { french: "bonsoir", english: "good evening", category: "basic", pronunciation: "bohn-swahr" },
    { french: "bonne nuit", english: "good night", category: "basic", pronunciation: "bun nwee" },
    // Added verbs from beginner passages
    { french: "admirer", english: "to admire", category: "basic", pronunciation: "ad-mee-ray", conjugations: { je: "j'admire", tu: "tu admires", il: "il admire", elle: "elle admire" } },
    { french: "aller", english: "to go", category: "basic", pronunciation: "ah-lay", conjugations: { je: "je vais", tu: "tu vas", il: "il va", elle: "elle va" } },
    { french: "avoir", english: "to have", category: "basic", pronunciation: "ah-vwahr", conjugations: { je: "j'ai", tu: "tu as", il: "il a", elle: "elle a" } },
    { french: "briller", english: "to shine", category: "basic", pronunciation: "bree-yay", conjugations: { je: "je brille", tu: "tu brilles", il: "il brille", elle: "elle brille" } },
    { french: "changer", english: "to change", category: "basic", pronunciation: "shahn-zhay", conjugations: { je: "je change", tu: "tu changes", il: "il change", elle: "elle change" } },
    { french: "être", english: "to be", category: "basic", pronunciation: "eh-truh", conjugations: { je: "je suis", tu: "tu es", il: "il est", elle: "elle est" } },
    { french: "faire", english: "to do/make", category: "basic", pronunciation: "fehr", conjugations: { je: "je fais", tu: "tu fais", il: "il fait", elle: "elle fait" } },
    { french: "monter", english: "to climb up", category: "basic", pronunciation: "mohn-tay", conjugations: { je: "je monte", tu: "tu montes", il: "il monte", elle: "elle monte" } },
    { french: "nager", english: "to swim", category: "basic", pronunciation: "nah-zhay", conjugations: { je: "je nage", tu: "tu nages", il: "il nage", elle: "elle nage" } },
    { french: "neiger", english: "to snow", category: "basic", pronunciation: "neh-zhay", conjugations: { je: "je neige", tu: "tu neiges", il: "il neige", elle: "elle neige" } },
    { french: "préférer", english: "to prefer", category: "basic", pronunciation: "pray-feh-ray", conjugations: { je: "je préfère", tu: "tu préfères", il: "il préfère", elle: "elle préfère" } },
    { french: "s'appeler", english: "to be called", category: "basic", pronunciation: "sah-peh-lay", conjugations: { je: "je m'appelle", tu: "tu t'appelles", il: "il s'appelle", elle: "elle s'appelle" } },
    { french: "se promener", english: "to walk around", category: "basic", pronunciation: "suh proh-muh-nay", conjugations: { je: "je me promène", tu: "tu te promènes", il: "il se promène", elle: "elle se promène" } },
    { french: "tomber", english: "to fall", category: "basic", pronunciation: "tohm-bay", conjugations: { je: "je tombe", tu: "tu tombes", il: "il tombe", elle: "elle tombe" } },
    { french: "visiter", english: "to visit", category: "basic", pronunciation: "vee-zee-tay", conjugations: { je: "je visite", tu: "tu visites", il: "il visite", elle: "elle visite" } },
    { french: "voir", english: "to see", category: "basic", pronunciation: "vwahr", conjugations: { je: "je vois", tu: "tu vois", il: "il voit", elle: "elle voit" } },

    // Daily life
    { french: "maison", english: "house", category: "daily", pronunciation: "meh-zohn" },
    { french: "famille", english: "family", category: "daily", pronunciation: "fah-mee" },
    { french: "cuisine", english: "kitchen", category: "daily", pronunciation: "kwee-zeen" },
    { french: "chambre", english: "bedroom", category: "daily", pronunciation: "shahm-bruh" },
    { french: "salle de bain", english: "bathroom", category: "daily", pronunciation: "sal duh ban" },
    { french: "salon", english: "living room", category: "daily", pronunciation: "sah-lohn" },
    { french: "table", english: "table", category: "daily", pronunciation: "tah-bluh" },
    { french: "chaise", english: "chair", category: "daily", pronunciation: "shehz" },
    { french: "lit", english: "bed", category: "daily", pronunciation: "lee" },
    { french: "fenêtre", english: "window", category: "daily", pronunciation: "fuh-neh-truh" },
    { french: "porte", english: "door", category: "daily", pronunciation: "port" },
    { french: "mur", english: "wall", category: "daily", pronunciation: "moor" },
    { french: "plafond", english: "ceiling", category: "daily", pronunciation: "plah-fohn" },
    { french: "sol", english: "floor", category: "daily", pronunciation: "sohl" },
    { french: "escalier", english: "stairs", category: "daily", pronunciation: "es-kah-lyay" },
    { french: "balcon", english: "balcony", category: "daily", pronunciation: "bal-kohn" },
    { french: "jardin", english: "garden", category: "daily", pronunciation: "zhar-dan" },
    { french: "garage", english: "garage", category: "daily", pronunciation: "gah-rahzh" },
    { french: "grenier", english: "attic", category: "daily", pronunciation: "gruh-nyay" },
    { french: "cave", english: "cellar", category: "daily", pronunciation: "kahv" },
    // Added verbs from elementary passages
    { french: "aider", english: "to help", category: "daily", pronunciation: "ay-day", conjugations: { je: "j'aide", tu: "tu aides", il: "il aide", elle: "elle aide" } },
    { french: "adorer", english: "to adore", category: "daily", pronunciation: "ah-doh-ray", conjugations: { je: "j'adore", tu: "tu adores", il: "il adore", elle: "elle adore" } },
    { french: "aimer", english: "to love/like", category: "daily", pronunciation: "eh-may", conjugations: { je: "j'aime", tu: "tu aimes", il: "il aime", elle: "elle aime" } },
    { french: "cultiver", english: "to cultivate", category: "daily", pronunciation: "kool-tee-vay", conjugations: { je: "je cultive", tu: "tu cultives", il: "il cultive", elle: "elle cultive" } },
    { french: "donner", english: "to give", category: "daily", pronunciation: "doh-nay", conjugations: { je: "je donne", tu: "tu donnes", il: "il donne", elle: "elle donne" } },
    { french: "habiter", english: "to live", category: "daily", pronunciation: "ah-bee-tay", conjugations: { je: "j'habite", tu: "tu habites", il: "il habite", elle: "elle habite" } },
    { french: "partir", english: "to leave", category: "daily", pronunciation: "par-teer", conjugations: { je: "je pars", tu: "tu pars", il: "il part", elle: "elle part" } },
    { french: "pousser", english: "to grow/push", category: "daily", pronunciation: "poo-say", conjugations: { je: "je pousse", tu: "tu pousses", il: "il pousse", elle: "elle pousse" } },
    { french: "préparer", english: "to prepare", category: "daily", pronunciation: "pray-pah-ray", conjugations: { je: "je prépare", tu: "tu prépares", il: "il prépare", elle: "elle prépare" } },
    { french: "rentrer", english: "to return home", category: "daily", pronunciation: "rahn-tray", conjugations: { je: "je rentre", tu: "tu rentres", il: "il rentre", elle: "elle rentre" } },
    { french: "retourner", english: "to return", category: "daily", pronunciation: "ruh-toor-nay", conjugations: { je: "je retourne", tu: "tu retournes", il: "il retourne", elle: "elle retourne" } },
    { french: "s'entraider", english: "to help each other", category: "daily", pronunciation: "sahn-tray-day", conjugations: { je: "je m'entraide", tu: "tu t'entraides", il: "il s'entraide", elle: "elle s'entraide" } },
    { french: "s'habiller", english: "to get dressed", category: "daily", pronunciation: "sah-bee-yay", conjugations: { je: "je m'habille", tu: "tu t'habilles", il: "il s'habille", elle: "elle s'habille" } },
    { french: "se brosser", english: "to brush", category: "daily", pronunciation: "suh broh-say", conjugations: { je: "je me brosse", tu: "tu te brosses", il: "il se brosse", elle: "elle se brosse" } },
    { french: "se coucher", english: "to go to bed", category: "daily", pronunciation: "suh koo-shay", conjugations: { je: "je me couche", tu: "tu te couches", il: "il se couche", elle: "elle se couche" } },
    { french: "se lever", english: "to get up", category: "daily", pronunciation: "suh leh-vay", conjugations: { je: "je me lève", tu: "tu te lèves", il: "il se lève", elle: "elle se lève" } },
    { french: "se réveiller", english: "to wake up", category: "daily", pronunciation: "suh ray-vay-yay", conjugations: { je: "je me réveille", tu: "tu te réveilles", il: "il se réveille", elle: "elle se réveille" } },
    { french: "travailler", english: "to work", category: "daily", pronunciation: "trah-vah-yay", conjugations: { je: "je travaille", tu: "tu travailles", il: "il travaille", elle: "elle travaille" } },
    { french: "vivre", english: "to live", category: "daily", pronunciation: "veev-ruh", conjugations: { je: "je vis", tu: "tu vis", il: "il vit", elle: "elle vit" } },

    // Food
    { french: "manger", english: "to eat", category: "food", pronunciation: "mahn-zhay", conjugations: { je: "je mange", tu: "tu manges", il: "il mange", elle: "elle mange" } },
    { french: "boire", english: "to drink", category: "food", pronunciation: "bwahr", conjugations: { je: "je bois", tu: "tu bois", il: "il boit", elle: "elle boit" } },
    { french: "eau", english: "water", category: "food", pronunciation: "oh" },
    { french: "pain", english: "bread", category: "food", pronunciation: "pan" },
    { french: "fromage", english: "cheese", category: "food", pronunciation: "froh-mahzh" },
    { french: "vin", english: "wine", category: "food", pronunciation: "van" },
    { french: "café", english: "coffee", category: "food", pronunciation: "kah-fay" },
    { french: "thé", english: "tea", category: "food", pronunciation: "tay" },
    { french: "légume", english: "vegetable", category: "food", pronunciation: "lay-goom" },
    { french: "fruit", english: "fruit", category: "food", pronunciation: "frwee" },
    { french: "viande", english: "meat", category: "food", pronunciation: "vyahnd" },
    { french: "poisson", english: "fish", category: "food", pronunciation: "pwah-sohn" },
    { french: "poulet", english: "chicken", category: "food", pronunciation: "poo-leh" },
    { french: "bœuf", english: "beef", category: "food", pronunciation: "buff" },
    { french: "porc", english: "pork", category: "food", pronunciation: "por" },
    { french: "pomme", english: "apple", category: "food", pronunciation: "pom" },
    { french: "banane", english: "banana", category: "food", pronunciation: "bah-nahn" },
    { french: "orange", english: "orange", category: "food", pronunciation: "oh-rahnzh" },
    { french: "fraise", english: "strawberry", category: "food", pronunciation: "frehz" },
    { french: "raisin", english: "grape", category: "food", pronunciation: "reh-zan" },
    { french: "carotte", english: "carrot", category: "food", pronunciation: "kah-rot" },
    { french: "tomate", english: "tomato", category: "food", pronunciation: "toh-maht" },
    { french: "pomme de terre", english: "potato", category: "food", pronunciation: "pom duh tehr" },
    { french: "oignon", english: "onion", category: "food", pronunciation: "oh-nyohn" },
    { french: "chocolat", english: "chocolate", category: "food", pronunciation: "shoh-koh-lah" },
    { french: "dessert", english: "dessert", category: "food", pronunciation: "deh-sehr" },
    { french: "restaurant", english: "restaurant", category: "food", pronunciation: "reh-stoh-rahn" },
    { french: "menu", english: "menu", category: "food", pronunciation: "muh-noo" },
    { french: "addition", english: "bill", category: "food", pronunciation: "ah-dee-syohn" },
    { french: "réservation", english: "reservation", category: "food", pronunciation: "ray-sehr-vah-syohn" },
    // Added verbs from elementary passages
    { french: "commander", english: "to order", category: "food", pronunciation: "koh-mahn-day", conjugations: { je: "je commande", tu: "tu commandes", il: "il commande", elle: "elle commande" } },
    { french: "goûter", english: "to taste", category: "food", pronunciation: "goo-tay", conjugations: { je: "je goûte", tu: "tu goûtes", il: "il goûte", elle: "elle goûte" } },
    { french: "payer", english: "to pay", category: "food", pronunciation: "pay-yay", conjugations: { je: "je paie", tu: "tu paies", il: "il paie", elle: "elle paie" } },
    { french: "prendre", english: "to take", category: "food", pronunciation: "prahn-druh", conjugations: { je: "je prends", tu: "tu prends", il: "il prend", elle: "elle prend" } },

    // Nature
    { french: "fleur", english: "flower", category: "nature", pronunciation: "flur" },
    { french: "arbre", english: "tree", category: "nature", pronunciation: "ar-bruh" },
    { french: "ciel", english: "sky", category: "nature", pronunciation: "syel" },
    { french: "soleil", english: "sun", category: "nature", pronunciation: "so-lay" },
    { french: "lune", english: "moon", category: "nature", pronunciation: "loon" },
    { french: "étoile", english: "star", category: "nature", pronunciation: "ay-twal" },
    { french: "mer", english: "sea", category: "nature", pronunciation: "mehr" },
    { french: "montagne", english: "mountain", category: "nature", pronunciation: "mohn-tahn-yuh" },
    { french: "rivière", english: "river", category: "nature", pronunciation: "ree-vyehr" },
    { french: "forêt", english: "forest", category: "nature", pronunciation: "foh-reh" },
    { french: "lac", english: "lake", category: "nature", pronunciation: "lahk" },
    { french: "plage", english: "beach", category: "nature", pronunciation: "plahzh" },
    { french: "océan", english: "ocean", category: "nature", pronunciation: "oh-say-ahn" },
    { french: "cascade", english: "waterfall", category: "nature", pronunciation: "kahs-kahd" },
    { french: "île", english: "island", category: "nature", pronunciation: "eel" },
    { french: "volcan", english: "volcano", category: "nature", pronunciation: "vol-kahn" },
    { french: "désert", english: "desert", category: "nature", pronunciation: "day-zehr" },
    { french: "colline", english: "hill", category: "nature", pronunciation: "koh-leen" },
    { french: "vallée", english: "valley", category: "nature", pronunciation: "vah-lay" },
    { french: "pluie", english: "rain", category: "nature", pronunciation: "ploo-ee" },
    { french: "neige", english: "snow", category: "nature", pronunciation: "nezh" },
    { french: "nuage", english: "cloud", category: "nature", pronunciation: "noo-ahzh" },
    { french: "orage", english: "storm", category: "nature", pronunciation: "oh-rahzh" },

    // Travel
    { french: "ville", english: "city", category: "travel", pronunciation: "veel" },
    { french: "village", english: "village", category: "travel", pronunciation: "vee-lazh" },
    { french: "rue", english: "street", category: "travel", pronunciation: "roo" },
    { french: "pont", english: "bridge", category: "travel", pronunciation: "pohn" },
    { french: "magasin", english: "shop", category: "travel", pronunciation: "mah-gah-zan" },
    { french: "marché", english: "market", category: "travel", pronunciation: "mar-shay" },
    { french: "boulangerie", english: "bakery", category: "travel", pronunciation: "boo-lahn-zhuh-ree" },
    { french: "hôpital", english: "hospital", category: "travel", pronunciation: "oh-pee-tal" },
    { french: "hôtel", english: "hotel", category: "travel", pronunciation: "oh-tel" },
    { french: "voyage", english: "journey/trip", category: "travel", pronunciation: "vwah-yazh" },
    { french: "train", english: "train", category: "travel", pronunciation: "tran" },
    { french: "avion", english: "airplane", category: "travel", pronunciation: "ah-vee-ohn" },
    { french: "aéroport", english: "airport", category: "travel", pronunciation: "ah-ay-roh-por" },
    { french: "gare", english: "train station", category: "travel", pronunciation: "gahr" },
    { french: "métro", english: "subway", category: "travel", pronunciation: "may-troh" },
    { french: "bus", english: "bus", category: "travel", pronunciation: "boos" },
    { french: "taxi", english: "taxi", category: "travel", pronunciation: "tak-see" },
    { french: "voiture", english: "car", category: "travel", pronunciation: "vwah-toor" },
    { french: "vélo", english: "bicycle", category: "travel", pronunciation: "vay-loh" },
    { french: "billet", english: "ticket", category: "travel", pronunciation: "bee-yay" },
    { french: "passeport", english: "passport", category: "travel", pronunciation: "pahs-por" },
    { french: "visa", english: "visa", category: "travel", pronunciation: "vee-zah" },
    { french: "douane", english: "customs", category: "travel", pronunciation: "doo-ahn" },
    { french: "frontière", english: "border", category: "travel", pronunciation: "frohn-tyehr" },
    { french: "valise", english: "suitcase", category: "travel", pronunciation: "vah-leez" },
    { french: "itinéraire", english: "itinerary", category: "travel", pronunciation: "ee-tee-nay-rehr" },
    { french: "carte", english: "map", category: "travel", pronunciation: "kahrt" },
    { french: "guide", english: "guide", category: "travel", pronunciation: "geed" },
    { french: "monument", english: "monument", category: "travel", pronunciation: "moh-noo-mahn" },
    { french: "musée", english: "museum", category: "travel", pronunciation: "moo-zay" },
    // Added verbs from intermediate passages
    { french: "passer", english: "to pass/spend time", category: "travel", pronunciation: "pah-say", conjugations: { je: "je passe", tu: "tu passes", il: "il passe", elle: "elle passe" } },
    { french: "profiter", english: "to enjoy/take advantage", category: "travel", pronunciation: "proh-fee-tay", conjugations: { je: "je profite", tu: "tu profites", il: "il profite", elle: "elle profite" } },
    { french: "se reposer", english: "to rest", category: "travel", pronunciation: "suh ruh-poh-zay", conjugations: { je: "je me repose", tu: "tu te reposes", il: "il se repose", elle: "elle se repose" } },
    { french: "traverser", english: "to cross", category: "travel", pronunciation: "trah-ver-say", conjugations: { je: "je traverse", tu: "tu traverses", il: "il traverse", elle: "elle traverse" } },

    // Work
    { french: "médecin", english: "doctor", category: "work", pronunciation: "mayd-san" },
    { french: "infirmier", english: "nurse", category: "work", pronunciation: "an-feer-myay" },
    { french: "pharmacie", english: "pharmacy", category: "work", pronunciation: "far-mah-see" },
    { french: "professeur", english: "teacher", category: "work", pronunciation: "pro-feh-sur" },
    { french: "étudiant", english: "student", category: "work", pronunciation: "ay-too-dyahn" },
    { french: "avocat", english: "lawyer", category: "work", pronunciation: "ah-voh-kah" },
    { french: "ingénieur", english: "engineer", category: "work", pronunciation: "an-zhay-nyur" },
    { french: "cuisinier", english: "cook", category: "work", pronunciation: "kwee-zee-nyay" },
    { french: "serveur", english: "waiter", category: "work", pronunciation: "sehr-vur" },
    { french: "travail", english: "work", category: "work", pronunciation: "trah-vahy" },
    { french: "bureau", english: "office", category: "work", pronunciation: "boo-roh" },
    { french: "collègue", english: "colleague", category: "work", pronunciation: "koh-leg" },
    { french: "réunion", english: "meeting", category: "work", pronunciation: "ray-oo-nee-ohn" },
    { french: "architecte", english: "architect", category: "work", pronunciation: "ar-shee-tekt" },
    { french: "artiste", english: "artist", category: "work", pronunciation: "ar-teest" },
    { french: "comptable", english: "accountant", category: "work", pronunciation: "kohn-tah-bluh" },
    { french: "dentiste", english: "dentist", category: "work", pronunciation: "dahn-teest" },
    { french: "journaliste", english: "journalist", category: "work", pronunciation: "zhoor-nah-leest" },
    { french: "informaticien", english: "IT specialist", category: "work", pronunciation: "an-for-mah-tee-syan" },
    { french: "chef", english: "boss/chef", category: "work", pronunciation: "shef" },
    { french: "secrétaire", english: "secretary", category: "work", pronunciation: "suh-kray-tehr" },
    { french: "vendeur", english: "salesperson", category: "work", pronunciation: "vahn-dur" },
    { french: "employé", english: "employee", category: "work", pronunciation: "ahm-plwah-yay" },
    { french: "entreprise", english: "company", category: "work", pronunciation: "ahn-truh-preez" },
    { french: "salaire", english: "salary", category: "work", pronunciation: "sah-lehr" },
    { french: "entretien", english: "interview", category: "work", pronunciation: "ahn-truh-tyan" },
    { french: "carrière", english: "career", category: "work", pronunciation: "kah-ryehr" },
    { french: "promotion", english: "promotion", category: "work", pronunciation: "proh-moh-syohn" },

    // Intermediate vocabulary
    { french: "écouter", english: "to listen", category: "intermediate", pronunciation: "ay-koo-tay" },
    { french: "parler", english: "to speak", category: "intermediate", pronunciation: "par-lay" },
    { french: "lire", english: "to read", category: "intermediate", pronunciation: "leer", conjugations: { je: "je lis", tu: "tu lis", il: "il lit", elle: "elle lit" } },
    { french: "écrire", english: "to write", category: "intermediate", pronunciation: "ay-kreer" },
    { french: "comprendre", english: "to understand", category: "intermediate", pronunciation: "kom-prahn-druh" },
    { french: "apprendre", english: "to learn", category: "intermediate", pronunciation: "ah-prahn-druh", conjugations: { je: "j'apprends", tu: "tu apprends", il: "il apprend", elle: "elle apprend" } },
    { french: "jouer", english: "to play", category: "intermediate", pronunciation: "zhoo-ay", conjugations: { je: "je joue", tu: "tu joues", il: "il joue", elle: "elle joue" } },
    { french: "courir", english: "to run", category: "intermediate", pronunciation: "koo-reer" },
    { french: "marcher", english: "to walk", category: "intermediate", pronunciation: "mar-shay", conjugations: { je: "je marche", tu: "tu marches", il: "il marche", elle: "elle marche" } },
    { french: "voyager", english: "to travel", category: "intermediate", pronunciation: "vwah-yah-zhay" },
    { french: "développement", english: "development", category: "intermediate", pronunciation: "day-vuh-lop-mahn" },
    { french: "environnement", english: "environment", category: "intermediate", pronunciation: "ahn-vee-ron-mahn" },
    { french: "technologie", english: "technology", category: "intermediate", pronunciation: "tek-no-lo-zhee" },
    { french: "expérience", english: "experience", category: "intermediate", pronunciation: "ex-pay-ree-ahns" },
    { french: "responsabilité", english: "responsibility", category: "intermediate", pronunciation: "ray-spohn-sah-bee-lee-tay" },
    { french: "acheter", english: "to buy", category: "intermediate", pronunciation: "ah-shuh-tay" },
    { french: "vendre", english: "to sell", category: "intermediate", pronunciation: "vahn-druh" },
    { french: "emprunter", english: "to borrow", category: "intermediate", pronunciation: "ahm-proon-tay" },
    { french: "prêter", english: "to lend", category: "intermediate", pronunciation: "preh-tay" },
    { french: "envoyer", english: "to send", category: "intermediate", pronunciation: "ahn-vwah-yay" },
    { french: "recevoir", english: "to receive", category: "intermediate", pronunciation: "ruh-suh-vwahr" },
    { french: "commencer", english: "to begin", category: "intermediate", pronunciation: "koh-mahn-say", conjugations: { je: "je commence", tu: "tu commences", il: "il commence", elle: "elle commence" } },
    { french: "finir", english: "to finish", category: "intermediate", pronunciation: "fee-neer" },
    { french: "choisir", english: "to choose", category: "intermediate", pronunciation: "shwah-zeer", conjugations: { je: "je choisis", tu: "tu choisis", il: "il choisit", elle: "elle choisit" } },
    { french: "décider", english: "to decide", category: "intermediate", pronunciation: "day-see-day", conjugations: { je: "je décide", tu: "tu décides", il: "il décide", elle: "elle décide" } },
    { french: "sentir", english: "to feel", category: "intermediate", pronunciation: "sahn-teer" },
    { french: "penser", english: "to think", category: "intermediate", pronunciation: "pahn-say" },
    { french: "croire", english: "to believe", category: "intermediate", pronunciation: "krwahr" },
    { french: "savoir", english: "to know (fact)", category: "intermediate", pronunciation: "sah-vwahr" },
    { french: "connaître", english: "to know (person/place)", category: "intermediate", pronunciation: "koh-neh-truh" },
    // Added verbs from intermediate passages
    { french: "célébrer", english: "to celebrate", category: "intermediate", pronunciation: "say-leh-bray", conjugations: { je: "je célèbre", tu: "tu célèbres", il: "il célèbre", elle: "elle célèbre" } },
    { french: "découvrir", english: "to discover", category: "intermediate", pronunciation: "day-koo-vreer", conjugations: { je: "je découvre", tu: "tu découvres", il: "il découvre", elle: "elle découvre" } },
    { french: "devoir", english: "to have to/must", category: "intermediate", pronunciation: "duh-vwahr", conjugations: { je: "je dois", tu: "tu dois", il: "il doit", elle: "elle doit" } },
    { french: "permettre", english: "to allow", category: "intermediate", pronunciation: "pehr-meh-truh", conjugations: { je: "je permets", tu: "tu permets", il: "il permet", elle: "elle permet" } },
    { french: "pouvoir", english: "to be able to", category: "intermediate", pronunciation: "poo-vwahr", conjugations: { je: "je peux", tu: "tu peux", il: "il peut", elle: "elle peut" } },
    { french: "ressentir", english: "to feel", category: "intermediate", pronunciation: "ruh-sahn-teer", conjugations: { je: "je ressens", tu: "tu ressens", il: "il ressent", elle: "elle ressent" } },

    // Advanced vocabulary
    { french: "conséquence", english: "consequence", category: "advanced", pronunciation: "kon-say-kahns" },
    { french: "perspective", english: "perspective", category: "advanced", pronunciation: "pehr-spek-teev" },
    { french: "phénomène", english: "phenomenon", category: "advanced", pronunciation: "fay-no-men" },
    { french: "hypothèse", english: "hypothesis", category: "advanced", pronunciation: "ee-po-tez" },
    { french: "paradigme", english: "paradigm", category: "advanced", pronunciation: "pah-rah-digm" },
    { french: "s'inquiéter", english: "to worry", category: "advanced", pronunciation: "san-kyay-tay" },
    { french: "s'ennuyer", english: "to get bored", category: "advanced", pronunciation: "sahn-nwee-yay" },
    { french: "s'intéresser à", english: "to be interested in", category: "advanced", pronunciation: "san-tay-reh-say ah" },
    { french: "s'excuser", english: "to apologize", category: "advanced", pronunciation: "sehk-skoo-zay" },
    { french: "s'amuser", english: "to have fun", category: "advanced", pronunciation: "sah-moo-zay" },
    { french: "contemporain", english: "contemporary", category: "advanced", pronunciation: "kohn-tahm-poh-ran" },
    { french: "néanmoins", english: "nevertheless", category: "advanced", pronunciation: "nay-ahn-mwahn" },
    { french: "effectivement", english: "indeed", category: "advanced", pronunciation: "eh-fek-teev-mahn" },
    { french: "toutefois", english: "however", category: "advanced", pronunciation: "toot-fwah" },
    { french: "auparavant", english: "previously", category: "advanced", pronunciation: "oh-pah-rah-vahn" },
    { french: "dorénavant", english: "from now on", category: "advanced", pronunciation: "doh-ray-nah-vahn" },
    { french: "éventuellement", english: "possibly", category: "advanced", pronunciation: "ay-vahn-too-el-mahn" },
    { french: "simultanément", english: "simultaneously", category: "advanced", pronunciation: "see-mool-tah-nay-mahn" },
    { french: "préalablement", english: "beforehand", category: "advanced", pronunciation: "pray-ah-lah-bluh-mahn" },
    { french: "ultérieurement", english: "later", category: "advanced", pronunciation: "ool-tay-ryur-mahn" },
    { french: "désuet", english: "obsolete", category: "advanced", pronunciation: "day-sweh" },
    { french: "ambiguïté", english: "ambiguity", category: "advanced", pronunciation: "ahm-bee-gwee-tay" },
    { french: "ésotérique", english: "esoteric", category: "advanced", pronunciation: "ay-zoh-tay-reek" },
    { french: "intrinsèque", english: "intrinsic", category: "advanced", pronunciation: "an-tran-sek" },
    { french: "juxtaposer", english: "to juxtapose", category: "advanced", pronunciation: "zhook-stah-poh-zay" },
    { french: "métaphore", english: "metaphor", category: "advanced", pronunciation: "may-tah-for" },
    { french: "nuance", english: "nuance", category: "advanced", pronunciation: "noo-ahns" },
    { french: "paradoxe", english: "paradox", category: "advanced", pronunciation: "pah-rah-doks" },
    { french: "synergie", english: "synergy", category: "advanced", pronunciation: "see-nehr-zhee" },
    { french: "tacite", english: "tacit", category: "advanced", pronunciation: "tah-seet" },
    // Added verbs from upperIntermediate passages
    { french: "absorber", english: "to absorb", category: "advanced", pronunciation: "ab-sor-bay", conjugations: { je: "j'absorbe", tu: "tu absorbes", il: "il absorbe", elle: "elle absorbe" } },
    { french: "adopter", english: "to adopt", category: "advanced", pronunciation: "ah-dop-tay", conjugations: { je: "j'adopte", tu: "tu adoptes", il: "il adopte", elle: "elle adopte" } },
    { french: "augmenter", english: "to increase", category: "advanced", pronunciation: "ohg-mahn-tay", conjugations: { je: "j'augmente", tu: "tu augmentes", il: "il augmente", elle: "elle augmente" } },
    { french: "capturer", english: "to capture", category: "advanced", pronunciation: "kap-too-ray", conjugations: { je: "je capture", tu: "tu captures", il: "il capture", elle: "elle capture" } },
    { french: "consommer", english: "to consume", category: "advanced", pronunciation: "kon-soh-may", conjugations: { je: "je consomme", tu: "tu consommes", il: "il consomme", elle: "elle consomme" } },
    { french: "contribuer", english: "to contribute", category: "advanced", pronunciation: "kon-tree-boo-ay", conjugations: { je: "je contribue", tu: "tu contribues", il: "il contribue", elle: "elle contribue" } },
    { french: "dominer", english: "to dominate", category: "advanced", pronunciation: "doh-mee-nay", conjugations: { je: "je domine", tu: "tu domines", il: "il domine", elle: "elle domine" } },
    { french: "économiser", english: "to save", category: "advanced", pronunciation: "ay-koh-noh-mee-zay", conjugations: { je: "j'économise", tu: "tu économises", il: "il économise", elle: "elle économise" } },
    { french: "enseigner", english: "to teach", category: "advanced", pronunciation: "ahn-sayn-yay", conjugations: { je: "j'enseigne", tu: "tu enseignes", il: "il enseigne", elle: "elle enseigne" } },
    { french: "entraîner", english: "to cause/lead to", category: "advanced", pronunciation: "ahn-tray-nay", conjugations: { je: "j'entraîne", tu: "tu entraînes", il: "il entraîne", elle: "elle entraîne" } },
    { french: "introduire", english: "to introduce", category: "advanced", pronunciation: "an-troh-dweer", conjugations: { je: "j'introduis", tu: "tu introduis", il: "il introduit", elle: "elle introduit" } },
    { french: "lutter", english: "to fight/struggle", category: "advanced", pronunciation: "loo-tay", conjugations: { je: "je lutte", tu: "tu luttes", il: "il lutte", elle: "elle lutte" } },
    { french: "marquer", english: "to mark", category: "advanced", pronunciation: "mar-kay", conjugations: { je: "je marque", tu: "tu marques", il: "il marque", elle: "elle marque" } },
    { french: "orner", english: "to decorate/adorn", category: "advanced", pronunciation: "or-nay", conjugations: { je: "j'orne", tu: "tu ornes", il: "il orne", elle: "elle orne" } },
    { french: "poser", english: "to pose/ask", category: "advanced", pronunciation: "poh-zay", conjugations: { je: "je pose", tu: "tu poses", il: "il pose", elle: "elle pose" } },
    { french: "produire", english: "to produce", category: "advanced", pronunciation: "proh-dweer", conjugations: { je: "je produis", tu: "tu produis", il: "il produit", elle: "elle produit" } },
    { french: "protéger", english: "to protect", category: "advanced", pronunciation: "proh-tay-zhay", conjugations: { je: "je protège", tu: "tu protèges", il: "il protège", elle: "elle protège" } },
    { french: "réduire", english: "to reduce", category: "advanced", pronunciation: "ray-dweer", conjugations: { je: "je réduis", tu: "tu réduis", il: "il réduit", elle: "elle réduit" } },
    { french: "refléter", english: "to reflect", category: "advanced", pronunciation: "ruh-flay-tay", conjugations: { je: "je reflète", tu: "tu reflètes", il: "il reflète", elle: "elle reflète" } },
    { french: "représenter", english: "to represent", category: "advanced", pronunciation: "ruh-pray-zahn-tay", conjugations: { je: "je représente", tu: "tu représentes", il: "il représente", elle: "elle représente" } },
    { french: "rester", english: "to stay", category: "advanced", pronunciation: "res-tay", conjugations: { je: "je reste", tu: "tu restes", il: "il reste", elle: "elle reste" } },
    { french: "rompre", english: "to break", category: "advanced", pronunciation: "rohm-pruh", conjugations: { je: "je romps", tu: "tu romps", il: "il rompt", elle: "elle rompt" } },
    { french: "utiliser", english: "to use", category: "advanced", pronunciation: "oo-tee-lee-zay", conjugations: { je: "j'utilise", tu: "tu utilises", il: "il utilise", elle: "elle utilise" } },

    // Emotions
    { french: "heureux", english: "happy", category: "emotions", pronunciation: "uh-ruh" },
    { french: "triste", english: "sad", category: "emotions", pronunciation: "treest" },
    { french: "content", english: "pleased", category: "emotions", pronunciation: "kohn-tahn" },
    { french: "fâché", english: "angry", category: "emotions", pronunciation: "fah-shay" },
    { french: "inquiet", english: "worried", category: "emotions", pronunciation: "an-kyeh" },
    { french: "surpris", english: "surprised", category: "emotions", pronunciation: "soor-pree" },
    { french: "effrayé", english: "scared", category: "emotions", pronunciation: "ef-fray-yay" },
    { french: "déçu", english: "disappointed", category: "emotions", pronunciation: "day-soo" },
    { french: "confus", english: "confused", category: "emotions", pronunciation: "kohn-foo" },
    { french: "enthousiaste", english: "enthusiastic", category: "emotions", pronunciation: "ahn-too-zyast" },
    { french: "reconnaissant", english: "grateful", category: "emotions", pronunciation: "ruh-koh-neh-sahn" },
    { french: "jaloux", english: "jealous", category: "emotions", pronunciation: "zhah-loo" },
    { french: "curieux", english: "curious", category: "emotions", pronunciation: "koo-ryuh" },
    { french: "fier", english: "proud", category: "emotions", pronunciation: "fyehr" },
    { french: "embarrassé", english: "embarrassed", category: "emotions", pronunciation: "ahm-bah-rah-say" },

    // Time expressions
    { french: "aujourd'hui", english: "today", category: "time", pronunciation: "oh-zhoor-dwee" },
    { french: "demain", english: "tomorrow", category: "time", pronunciation: "duh-man" },
    { french: "hier", english: "yesterday", category: "time", pronunciation: "yehr" },
    { french: "maintenant", english: "now", category: "time", pronunciation: "man-tuh-nahn" },
    { french: "plus tard", english: "later", category: "time", pronunciation: "ploo tahr" },
    { french: "tôt", english: "early", category: "time", pronunciation: "toh" },
    { french: "tard", english: "late", category: "time", pronunciation: "tahr" },
    { french: "semaine", english: "week", category: "time", pronunciation: "suh-men" },
    { french: "mois", english: "month", category: "time", pronunciation: "mwah" },
    { french: "année", english: "year", category: "time", pronunciation: "ah-nay" },
    { french: "matin", english: "morning", category: "time", pronunciation: "mah-tan" },
    { french: "après-midi", english: "afternoon", category: "time", pronunciation: "ah-preh-mee-dee" },
    { french: "soir", english: "evening", category: "time", pronunciation: "swahr" },
    { french: "nuit", english: "night", category: "time", pronunciation: "nwee" },
    { french: "minute", english: "minute", category: "time", pronunciation: "mee-noot" },
    { french: "heure", english: "hour", category: "time", pronunciation: "uhr" },

    // Months - Les mois
    { french: "janvier", english: "January", category: "time", pronunciation: "zhahn-vyay" },
    { french: "février", english: "February", category: "time", pronunciation: "fay-vree-yay" },
    { french: "mars", english: "March", category: "time", pronunciation: "mars" },
    { french: "avril", english: "April", category: "time", pronunciation: "ah-vreel" },
    { french: "mai", english: "May", category: "time", pronunciation: "meh" },
    { french: "juin", english: "June", category: "time", pronunciation: "zhwan" },
    { french: "juillet", english: "July", category: "time", pronunciation: "zhwee-yeh" },
    { french: "août", english: "August", category: "time", pronunciation: "oot" },
    { french: "septembre", english: "September", category: "time", pronunciation: "sep-tahm-bruh" },
    { french: "octobre", english: "October", category: "time", pronunciation: "ok-toh-bruh" },
    { french: "novembre", english: "November", category: "time", pronunciation: "no-vahm-bruh" },
    { french: "décembre", english: "December", category: "time", pronunciation: "day-sahm-bruh" },

    // Seasons - Les saisons
    { french: "le printemps", english: "spring", category: "seasons", pronunciation: "luh pran-tahn" },
    { french: "l'été", english: "summer", category: "seasons", pronunciation: "lay-tay" },
    { french: "l'automne", english: "autumn/fall", category: "seasons", pronunciation: "loh-ton" },
    { french: "l'hiver", english: "winter", category: "seasons", pronunciation: "lee-vehr" },

    // Weather - La météo
    { french: "il fait chaud", english: "it's hot", category: "weather", pronunciation: "eel feh shoh" },
    { french: "il fait froid", english: "it's cold", category: "weather", pronunciation: "eel feh frwah" },
    { french: "il fait beau", english: "it's nice/beautiful", category: "weather", pronunciation: "eel feh boh" },
    { french: "il fait mauvais", english: "it's bad weather", category: "weather", pronunciation: "eel feh moh-veh" },
    { french: "il fait du vent", english: "it's windy", category: "weather", pronunciation: "eel feh doo vahn" },
    { french: "il pleut", english: "it's raining", category: "weather", pronunciation: "eel pluh" },
    { french: "il neige", english: "it's snowing", category: "weather", pronunciation: "eel nezh" },
    { french: "il y a du soleil", english: "it's sunny", category: "weather", pronunciation: "eel ee ah doo so-lay" },
    { french: "il y a des nuages", english: "it's cloudy", category: "weather", pronunciation: "eel ee ah day noo-ahzh" },
    { french: "il y a de l'orage", english: "there's a storm", category: "weather", pronunciation: "eel ee ah duh loh-rahzh" },
    { french: "il y a du brouillard", english: "it's foggy", category: "weather", pronunciation: "eel ee ah doo broo-yahr" },
    { french: "le ciel est clair", english: "the sky is clear", category: "weather", pronunciation: "luh syel eh klehr" },
    { french: "le ciel est couvert", english: "the sky is overcast", category: "weather", pronunciation: "luh syel eh koo-vehr" },
    { french: "la température est agréable", english: "the temperature is pleasant", category: "weather", pronunciation: "lah tahn-pay-rah-toor eh ah-gray-ah-bluh" },
    { french: "météo", english: "weather forecast", category: "weather", pronunciation: "may-tay-oh" },
    { french: "temps", english: "weather", category: "weather", pronunciation: "tahn" },
    { french: "température", english: "temperature", category: "weather", pronunciation: "tahn-pay-rah-toor" },
    { french: "vent", english: "wind", category: "weather", pronunciation: "vahn" },
    { french: "brouillard", english: "fog", category: "weather", pronunciation: "broo-yahr" },

    // Numbers - Les nombres (0-100)
    { french: "zéro", english: "zero", category: "numbers", pronunciation: "zay-roh" },
    { french: "un", english: "one", category: "numbers", pronunciation: "ahn" },
    { french: "deux", english: "two", category: "numbers", pronunciation: "duh" },
    { french: "trois", english: "three", category: "numbers", pronunciation: "trwah" },
    { french: "quatre", english: "four", category: "numbers", pronunciation: "kah-truh" },
    { french: "cinq", english: "five", category: "numbers", pronunciation: "sank" },
    { french: "six", english: "six", category: "numbers", pronunciation: "sees" },
    { french: "sept", english: "seven", category: "numbers", pronunciation: "set" },
    { french: "huit", english: "eight", category: "numbers", pronunciation: "weet" },
    { french: "neuf", english: "nine", category: "numbers", pronunciation: "nuhf" },
    { french: "dix", english: "ten", category: "numbers", pronunciation: "dees" },
    { french: "onze", english: "eleven", category: "numbers", pronunciation: "onz" },
    { french: "douze", english: "twelve", category: "numbers", pronunciation: "dooz" },
    { french: "treize", english: "thirteen", category: "numbers", pronunciation: "trehz" },
    { french: "quatorze", english: "fourteen", category: "numbers", pronunciation: "kah-torz" },
    { french: "quinze", english: "fifteen", category: "numbers", pronunciation: "kanz" },
    { french: "seize", english: "sixteen", category: "numbers", pronunciation: "sehz" },
    { french: "dix-sept", english: "seventeen", category: "numbers", pronunciation: "dee-set" },
    { french: "dix-huit", english: "eighteen", category: "numbers", pronunciation: "dee-zweet" },
    { french: "dix-neuf", english: "nineteen", category: "numbers", pronunciation: "dee-znuhf" },
    { french: "vingt", english: "twenty", category: "numbers", pronunciation: "van" },
    { french: "vingt et un", english: "twenty-one", category: "numbers", pronunciation: "van-tay-ahn" },
    { french: "trente", english: "thirty", category: "numbers", pronunciation: "traht" },
    { french: "quarante", english: "forty", category: "numbers", pronunciation: "kah-rahnt" },
    { french: "cinquante", english: "fifty", category: "numbers", pronunciation: "san-kahnt" },
    { french: "soixante", english: "sixty", category: "numbers", pronunciation: "swah-sahnt" },
    { french: "soixante-dix", english: "seventy", category: "numbers", pronunciation: "swah-sahnt-dees" },
    { french: "quatre-vingts", english: "eighty", category: "numbers", pronunciation: "kah-truh-van" },
    { french: "quatre-vingt-dix", english: "ninety", category: "numbers", pronunciation: "kah-truh-van-dees" },
    { french: "cent", english: "one hundred", category: "numbers", pronunciation: "sahn" },
    { french: "mille", english: "one thousand", category: "numbers", pronunciation: "meel" },
    { french: "million", english: "million", category: "numbers", pronunciation: "mee-lyohn" },

    // Ordinal numbers
    { french: "premier", english: "first", category: "numbers", pronunciation: "pruh-myay" },
    { french: "deuxième", english: "second", category: "numbers", pronunciation: "duh-zyem" },
    { french: "troisième", english: "third", category: "numbers", pronunciation: "trwah-zyem" },
    { french: "quatrième", english: "fourth", category: "numbers", pronunciation: "kah-tree-em" },
    { french: "cinquième", english: "fifth", category: "numbers", pronunciation: "san-kyem" },
    { french: "sixième", english: "sixth", category: "numbers", pronunciation: "see-zyem" },
    { french: "septième", english: "seventh", category: "numbers", pronunciation: "set-yem" },
    { french: "huitième", english: "eighth", category: "numbers", pronunciation: "wee-tyem" },
    { french: "neuvième", english: "ninth", category: "numbers", pronunciation: "nuh-vyem" },
    { french: "dixième", english: "tenth", category: "numbers", pronunciation: "dee-zyem" },
    { french: "dernier", english: "last", category: "numbers", pronunciation: "der-nyay" },

    // Directions and Positions - Les directions et positions
    { french: "à gauche", english: "left", category: "directions", pronunciation: "ah gohsh" },
    { french: "à droite", english: "right", category: "directions", pronunciation: "ah drwaht" },
    { french: "au-dessus", english: "above", category: "directions", pronunciation: "oh duh-su" },
    { french: "en dessous", english: "below/underneath", category: "directions", pronunciation: "ahn duh-soo" },
    { french: "devant", english: "in front of", category: "directions", pronunciation: "duh-vahn" },
    { french: "derrière", english: "behind", category: "directions", pronunciation: "deh-ryehr" },
    { french: "à côté de", english: "next to", category: "directions", pronunciation: "ah koh-tay duh" },
    { french: "entre", english: "between", category: "directions", pronunciation: "ahn-truh" },
    { french: "sur", english: "on", category: "directions", pronunciation: "soor" },
    { french: "sous", english: "under", category: "directions", pronunciation: "soo" },
    { french: "dans", english: "in", category: "directions", pronunciation: "dahn" },
    { french: "près de", english: "near", category: "directions", pronunciation: "preh duh" },
    { french: "loin de", english: "far from", category: "directions", pronunciation: "lwan duh" },
    { french: "ici", english: "here", category: "directions", pronunciation: "ee-see" },
    { french: "là", english: "there", category: "directions", pronunciation: "lah" },
    { french: "là-bas", english: "over there", category: "directions", pronunciation: "lah-bah" },
    { french: "partout", english: "everywhere", category: "directions", pronunciation: "par-too" },
    { french: "nulle part", english: "nowhere", category: "directions", pronunciation: "nool par" },

    // Question Words and Connectors - Mots interrogatifs et connecteurs
    { french: "que", english: "that/which/what", category: "grammar", pronunciation: "kuh" },
    { french: "qu'", english: "that/which/what", category: "grammar", pronunciation: "kuh", notes: "used before vowels or mute h" },
    { french: "qui", english: "who/which", category: "grammar", pronunciation: "kee" },
    { french: "quoi", english: "what", category: "grammar", pronunciation: "kwah" },
    { french: "où", english: "where", category: "grammar", pronunciation: "oo" },
    { french: "quand", english: "when", category: "grammar", pronunciation: "kahn" },
    { french: "comment", english: "how", category: "grammar", pronunciation: "koh-mahn" },
    { french: "pourquoi", english: "why", category: "grammar", pronunciation: "poor-kwah" },
    { french: "combien", english: "how much/many", category: "grammar", pronunciation: "kohm-byan" },
    { french: "quel", english: "which/what", category: "grammar", pronunciation: "kel" },
    { french: "quelle", english: "which/what (feminine)", category: "grammar", pronunciation: "kel" },
    { french: "quels", english: "which/what (masculine plural)", category: "grammar", pronunciation: "kel" },
    { french: "quelles", english: "which/what (feminine plural)", category: "grammar", pronunciation: "kel" },

    // Physical Descriptions - Descriptions physiques
    { french: "mince", english: "thin/slim", category: "descriptions", pronunciation: "manss", notes: "can describe a person or object" },
    { french: "gros", english: "big/fat", category: "descriptions", pronunciation: "groh" },
    { french: "grand", english: "tall/big", category: "descriptions", pronunciation: "grahn" },
    { french: "petit", english: "small/short", category: "descriptions", pronunciation: "puh-tee" },
    { french: "jeune", english: "young", category: "descriptions", pronunciation: "zhun" },
    { french: "vieux", english: "old", category: "descriptions", pronunciation: "vyuh" },
    { french: "beau", english: "beautiful/handsome", category: "descriptions", pronunciation: "boh" },
    { french: "laid", english: "ugly", category: "descriptions", pronunciation: "leh" },
    { french: "fort", english: "strong", category: "descriptions", pronunciation: "for" },
    { french: "faible", english: "weak", category: "descriptions", pronunciation: "feh-bluh" },
    { french: "rapide", english: "fast", category: "descriptions", pronunciation: "rah-peed" },
    { french: "lent", english: "slow", category: "descriptions", pronunciation: "lahn" },
    { french: "nouveau", english: "new", category: "descriptions", pronunciation: "noo-voh" },
    { french: "ancien", english: "old/former", category: "descriptions", pronunciation: "ahn-syan" },
    { french: "lourd", english: "heavy", category: "descriptions", pronunciation: "loor" },
    { french: "léger", english: "light", category: "descriptions", pronunciation: "lay-zhay" },
    { french: "dur", english: "hard", category: "descriptions", pronunciation: "door" },
    { french: "mou", english: "soft", category: "descriptions", pronunciation: "moo" },
    { french: "chaud", english: "hot/warm", category: "descriptions", pronunciation: "shoh" },
    { french: "froid", english: "cold", category: "descriptions", pronunciation: "frwah" }
];

// Vocabulary related utility functions
export function filterVocabularyByCategory(category) {
    if (category === 'all') {
        return [...vocabulary];
    } else {
        return vocabulary.filter(word => word.category === category);
    }
}

export function searchVocabulary(searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
        return [];
    }
    
    const term = searchTerm.trim().toLowerCase();
    return vocabulary.filter(word => 
        word.french.toLowerCase().includes(term) || 
        word.english.toLowerCase().includes(term) ||
        (word.pronunciation && word.pronunciation.toLowerCase().includes(term))
    );
}

// For working with user progress - NOTE: localStorage removed for Claude.ai compatibility
export function saveVocabularyProgress(knownWords, unknownWords) {
    // In a real application, this would save to localStorage or a database
    // For Claude.ai artifacts, we'll store in memory only
    window.vocabularyProgress = {
        knownWords,
        unknownWords
    };
    console.log('Vocabulary progress saved to memory');
}

export function loadVocabularyProgress() {
    // In a real application, this would load from localStorage or a database
    // For Claude.ai artifacts, we'll load from memory
    if (window.vocabularyProgress) {
        return window.vocabularyProgress;
    }
    return { knownWords: [], unknownWords: [] };
}

// Get word with pronunciation
export function getWordWithPronunciation(frenchWord) {
    return vocabulary.find(word => word.french.toLowerCase() === frenchWord.toLowerCase());
}

// Filter by pronunciation pattern
export function filterByPronunciation(pattern) {
    if (!pattern || pattern.trim() === '') {
        return [];
    }
    
    const term = pattern.trim().toLowerCase();
    return vocabulary.filter(word => 
        word.pronunciation && word.pronunciation.toLowerCase().includes(term)
    );
}

// Get vocabulary statistics
export function getVocabularyStats() {
    const categories = {};
    vocabulary.forEach(word => {
        if (!categories[word.category]) {
            categories[word.category] = 0;
        }
        categories[word.category]++;
    });
    
    return {
        totalWords: vocabulary.length,
        categoryCounts: categories
    };
}

// Get random word
export function getRandomWord(category = 'all') {
    const filteredVocab = filterVocabularyByCategory(category);
    const randomIndex = Math.floor(Math.random() * filteredVocab.length);
    return filteredVocab[randomIndex];
}

// Get words by difficulty level
export function getWordsByDifficulty(difficulty) {
    const difficultyMap = {
        'easy': ['basic', 'daily', 'numbers', 'directions'],
        'medium': ['food', 'nature', 'travel', 'work', 'time', 'emotions', 'weather', 'seasons', 'descriptions'],
        'hard': ['intermediate', 'advanced', 'grammar']
    };
    
    if (!difficultyMap[difficulty]) {
        return [];
    }
    
    const categories = difficultyMap[difficulty];
    return vocabulary.filter(word => categories.includes(word.category));
}

// Get related words
export function getRelatedWords(word) {
    if (!word) return [];
    
    const targetWord = vocabulary.find(item => 
        item.french.toLowerCase() === word.toLowerCase() || 
        item.english.toLowerCase() === word.toLowerCase()
    );
    
    if (!targetWord) return [];
    
    // Get words from the same category
    return vocabulary.filter(item => 
        item.category === targetWord.category && 
        item.french !== targetWord.french
    ).slice(0, 10); // Return up to 10 related words
}

// Get vocabulary by first letter
export function getWordsByFirstLetter(letter, language = 'french') {
    if (!letter || letter.length === 0) return [];
    
    const firstChar = letter.trim().toLowerCase()[0];
    
    return vocabulary.filter(word => {
        const wordToCheck = language === 'french' ? word.french : word.english;
        return wordToCheck.toLowerCase().startsWith(firstChar);
    });
}

// Learn new words function - returns a set of words the user hasn't learned yet
export function getNewWordsToLearn(learnedWords = [], count = 10, category = 'all') {
    const filteredVocab = filterVocabularyByCategory(category);
    
    // Filter out words the user has already learned
    const newWords = filteredVocab.filter(word => 
        !learnedWords.includes(word.french)
    );
    
    // Shuffle array to get random words
    const shuffled = [...newWords].sort(() => 0.5 - Math.random());
    
    // Return requested number of words
    return shuffled.slice(0, count);
}

// Create a quiz from vocabulary
export function createVocabularyQuiz(category = 'all', count = 10) {
    const words = filterVocabularyByCategory(category);
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    const quizWords = shuffled.slice(0, count);
    
    return quizWords.map(word => {
        // Create three wrong options
        const wrongOptions = words
            .filter(w => w.french !== word.french)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(w => w.english);
            
        // Create options array with correct answer
        const options = [...wrongOptions, word.english].sort(() => 0.5 - Math.random());
        
        return {
            question: word.french,
            correctAnswer: word.english,
            options: options,
            pronunciation: word.pronunciation
        };
    });
}

// Export vocabulary by levels - for structured learning paths
export function getVocabularyByLevel(level) {
    const levels = {
        'beginner': ['basic', 'daily', 'food', 'numbers', 'time'],
        'intermediate': ['nature', 'travel', 'work', 'emotions', 'weather', 'seasons'],
        'advanced': ['intermediate', 'advanced']
    };
    
    if (!levels[level]) return [];
    
    const categories = levels[level];
    return vocabulary.filter(word => categories.includes(word.category));
}

// Get conjugation examples
export function getConjugationExamples(verb) {
    // First, check if the verb exists in the vocabulary array with conjugations
    const vocabEntry = vocabulary.find(item => item.french.toLowerCase() === verb.toLowerCase());
    if (vocabEntry && vocabEntry.conjugations) {
        return {
            present: [
                vocabEntry.conjugations.je,
                vocabEntry.conjugations.tu,
                vocabEntry.conjugations.il,
                vocabEntry.conjugations.elle
            ]
        };
    }

    // Fallback to hardcoded conjugations for verbs not in vocabulary
    const commonVerbs = {
        'parler': {
            present: ['je parle', 'tu parles', 'il/elle parle', 'nous parlons', 'vous parlez', 'ils/elles parlent'],
            past: ['je parlais', 'tu parlais', 'il/elle parlait', 'nous parlions', 'vous parliez', 'ils/elles parlaient'],
            future: ['je parlerai', 'tu parleras', 'il/elle parlera', 'nous parlerons', 'vous parlerez', 'ils/elles parleront']
        },
        'finir': {
            present: ['je finis', 'tu finis', 'il/elle finit', 'nous finissons', 'vous finissez', 'ils/elles finissent'],
            past: ['je finissais', 'tu finissais', 'il/elle finissait', 'nous finissions', 'vous finissiez', 'ils/elles finissaient'],
            future: ['je finirai', 'tu finiras', 'il/elle finira', 'nous finirons', 'vous finirez', 'ils/elles finiront']
        }
    };
    
    return commonVerbs[verb.toLowerCase()] || null;
}

// Additional utility functions

// Get vocabulary by multiple categories
export function getVocabularyByCategories(categories) {
    if (!categories || categories.length === 0) return [];
    
    return vocabulary.filter(word => categories.includes(word.category));
}

// Search vocabulary with advanced options
export function advancedSearchVocabulary(options = {}) {
    const {
        searchTerm = '',
        category = 'all',
        difficulty = 'all',
        hasConjugations = false,
        minLength = 0,
        maxLength = Infinity
    } = options;
    
    let results = vocabulary;
    
    // Filter by search term
    if (searchTerm && searchTerm.trim() !== '') {
        const term = searchTerm.trim().toLowerCase();
        results = results.filter(word => 
            word.french.toLowerCase().includes(term) || 
            word.english.toLowerCase().includes(term) ||
            (word.pronunciation && word.pronunciation.toLowerCase().includes(term))
        );
    }
    
    // Filter by category
    if (category !== 'all') {
        results = results.filter(word => word.category === category);
    }
    
    // Filter by difficulty
    if (difficulty !== 'all') {
        const difficultyCategories = getWordsByDifficulty(difficulty).map(w => w.category);
        results = results.filter(word => difficultyCategories.includes(word.category));
    }
    
    // Filter by conjugations
    if (hasConjugations) {
        results = results.filter(word => word.conjugations);
    }
    
    // Filter by word length
    results = results.filter(word => 
        word.french.length >= minLength && word.french.length <= maxLength
    );
    
    return results;
}

// Get vocabulary statistics by category
export function getCategoryStats() {
    const stats = {};
    
    vocabulary.forEach(word => {
        if (!stats[word.category]) {
            stats[word.category] = {
                total: 0,
                withConjugations: 0,
                averageLength: 0,
                words: []
            };
        }
        
        stats[word.category].total++;
        stats[word.category].words.push(word.french);
        
        if (word.conjugations) {
            stats[word.category].withConjugations++;
        }
    });
    
    // Calculate average length for each category
    Object.keys(stats).forEach(category => {
        const totalLength = stats[category].words.reduce((sum, word) => sum + word.length, 0);
        stats[category].averageLength = Math.round(totalLength / stats[category].total * 100) / 100;
    });
    
    return stats;
}

// Export vocabulary for external use (JSON format)
export function exportVocabulary(format = 'json') {
    switch (format.toLowerCase()) {
        case 'json':
            return JSON.stringify(vocabulary, null, 2);
        case 'csv':
            const headers = 'French,English,Category,Pronunciation\n';
            const csvData = vocabulary.map(word => 
                `"${word.french}","${word.english}","${word.category}","${word.pronunciation || ''}"`
            ).join('\n');
            return headers + csvData;
        default:
            return vocabulary;
    }
}

// Import vocabulary from JSON (for extending the module)
export function importVocabulary(jsonData) {
    try {
        const newWords = JSON.parse(jsonData);
        if (Array.isArray(newWords)) {
            // Validate structure and add to vocabulary
            const validWords = newWords.filter(word => 
                word.french && word.english && word.category && word.pronunciation
            );
            vocabulary.push(...validWords);
            return {
                success: true,
                added: validWords.length,
                message: `Successfully added ${validWords.length} words`
            };
        }
        return {
            success: false,
            message: 'Invalid format: Expected an array of word objects'
        };
    } catch (error) {
        return {
            success: false,
            message: 'Invalid JSON format'
        };
    }
}

// Get learning path recommendations based on current level
export function getLearningPath(currentLevel = 'beginner', wordsPerSession = 10) {
    const levelProgression = {
        'beginner': ['basic', 'daily', 'numbers'],
        'elementary': ['food', 'time', 'emotions'],
        'intermediate': ['nature', 'travel', 'work', 'weather', 'seasons'],
        'advanced': ['intermediate', 'advanced']
    };
    
    const currentCategories = levelProgression[currentLevel] || levelProgression['beginner'];
    const sessionWords = [];
    
    currentCategories.forEach(category => {
        const categoryWords = filterVocabularyByCategory(category);
        const shuffled = [...categoryWords].sort(() => 0.5 - Math.random());
        sessionWords.push(...shuffled.slice(0, Math.ceil(wordsPerSession / currentCategories.length)));
    });
    
    return sessionWords.slice(0, wordsPerSession);
}

// Generate pronunciation practice list
export function getPronunciationPractice(difficulty = 'medium', count = 20) {
    const wordsWithPronunciation = vocabulary.filter(word => word.pronunciation);
    const difficultyWords = getWordsByDifficulty(difficulty);
    
    const practiceWords = wordsWithPronunciation
        .filter(word => difficultyWords.some(dw => dw.french === word.french))
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
    
    return practiceWords.map(word => ({
        french: word.french,
        english: word.english,
        pronunciation: word.pronunciation,
        category: word.category
    }));
}

// Get similar sounding words (for pronunciation practice)
export function getSimilarSoundingWords(targetWord, maxResults = 5) {
    const target = vocabulary.find(word => 
        word.french.toLowerCase() === targetWord.toLowerCase()
    );
    
    if (!target || !target.pronunciation) return [];
    
    const targetSounds = target.pronunciation.toLowerCase();
    
    return vocabulary
        .filter(word => 
            word.french !== target.french && 
            word.pronunciation &&
            word.pronunciation.toLowerCase().includes(targetSounds.split('-')[0])
        )
        .slice(0, maxResults);
}

// Export vocabulary progress data for the module status check
window.vocabLoaded = true;

// Export all functions and vocabulary for external use
export {
    vocabulary as default,
    filterVocabularyByCategory,
    searchVocabulary,
    saveVocabularyProgress,
    loadVocabularyProgress,
    getWordWithPronunciation,
    filterByPronunciation,
    getVocabularyStats,
    getRandomWord,
    getWordsByDifficulty,
    getRelatedWords,
    getWordsByFirstLetter,
    getNewWordsToLearn,
    createVocabularyQuiz,
    getVocabularyByLevel,
    getConjugationExamples,
    getVocabularyByCategories,
    advancedSearchVocabulary,
    getCategoryStats,
    exportVocabulary,
    importVocabulary,
    getLearningPath,
    getPronunciationPractice,
    getSimilarSoundingWords
};

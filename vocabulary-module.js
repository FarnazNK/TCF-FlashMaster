// vocabulary.js - TCF vocabulary module with pronunciation

// Export the vocabulary list with categories and pronunciations
export const vocabulary = [
    // Basic vocabulary
    { french: "bonjour", english: "hello", category: "basic", pronunciation: "bohn-zhoor" },
    { french: "merci", english: "thank you", category: "basic", pronunciation: "mehr-see" },
    { french: "s'il vous plaît", english: "please", category: "basic", pronunciation: "seel voo pleh" },
    { french: "au revoir", english: "goodbye", category: "basic", pronunciation: "oh ruh-vwahr" },
    { french: "oui", english: "yes", category: "basic", pronunciation: "wee" },
    { french: "non", english: "no", category: "basic", pronunciation: "nohn" },
    
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
    
    // Food
    { french: "manger", english: "to eat", category: "daily", pronunciation: "mahn-zhay" },
    { french: "boire", english: "to drink", category: "daily", pronunciation: "bwahr" },
    { french: "eau", english: "water", category: "daily", pronunciation: "oh" },
    { french: "pain", english: "bread", category: "daily", pronunciation: "pan" },
    { french: "fromage", english: "cheese", category: "daily", pronunciation: "froh-mahzh" },
    { french: "vin", english: "wine", category: "daily", pronunciation: "van" },
    { french: "café", english: "coffee", category: "daily", pronunciation: "kah-fay" },
    { french: "thé", english: "tea", category: "daily", pronunciation: "tay" },
    
    // Nature
    { french: "jardin", english: "garden", category: "daily", pronunciation: "zhar-dan" },
    { french: "fleur", english: "flower", category: "daily", pronunciation: "flur" },
    { french: "arbre", english: "tree", category: "daily", pronunciation: "ar-bruh" },
    { french: "ciel", english: "sky", category: "daily", pronunciation: "syel" },
    { french: "soleil", english: "sun", category: "daily", pronunciation: "so-lay" },
    { french: "lune", english: "moon", category: "daily", pronunciation: "loon" },
    { french: "étoile", english: "star", category: "daily", pronunciation: "ay-twal" },
    { french: "mer", english: "sea", category: "daily", pronunciation: "mehr" },
    { french: "montagne", english: "mountain", category: "daily", pronunciation: "mohn-tahn-yuh" },
    { french: "rivière", english: "river", category: "daily", pronunciation: "ree-vyehr" },
    
    // City
    { french: "ville", english: "city", category: "travel", pronunciation: "veel" },
    { french: "village", english: "village", category: "travel", pronunciation: "vee-lazh" },
    { french: "rue", english: "street", category: "travel", pronunciation: "roo" },
    { french: "pont", english: "bridge", category: "travel", pronunciation: "pohn" },
    { french: "magasin", english: "shop", category: "travel", pronunciation: "mah-gah-zan" },
    { french: "marché", english: "market", category: "travel", pronunciation: "mar-shay" },
    { french: "boulangerie", english: "bakery", category: "travel", pronunciation: "boo-lahn-zhuh-ree" },
    { french: "hôpital", english: "hospital", category: "travel", pronunciation: "oh-pee-tal" },
    
    // Professions
    { french: "médecin", english: "doctor", category: "work", pronunciation: "mayd-san" },
    { french: "infirmier", english: "nurse", category: "work", pronunciation: "an-feer-myay" },
    { french: "pharmacie", english: "pharmacy", category: "work", pronunciation: "far-mah-see" },
    { french: "professeur", english: "teacher", category: "work", pronunciation: "pro-feh-sur" },
    { french: "étudiant", english: "student", category: "work", pronunciation: "ay-too-dyahn" },
    { french: "avocat", english: "lawyer", category: "work", pronunciation: "ah-voh-kah" },
    { french: "ingénieur", english: "engineer", category: "work", pronunciation: "an-zhay-nyur" },
    { french: "cuisinier", english: "cook", category: "work", pronunciation: "kwee-zee-nyay" },
    { french: "serveur", english: "waiter", category: "work", pronunciation: "sehr-vur" },
    
    // Verbs
    { french: "écouter", english: "to listen", category: "intermediate", pronunciation: "ay-koo-tay" },
    { french: "parler", english: "to speak", category: "intermediate", pronunciation: "par-lay" },
    { french: "lire", english: "to read", category: "intermediate", pronunciation: "leer" },
    { french: "écrire", english: "to write", category: "intermediate", pronunciation: "ay-kreer" },
    { french: "comprendre", english: "to understand", category: "intermediate", pronunciation: "kom-prahn-druh" },
    { french: "apprendre", english: "to learn", category: "intermediate", pronunciation: "ah-prahn-druh" },
    { french: "enseigner", english: "to teach", category: "work", pronunciation: "ahn-seh-nyay" },
    { french: "étudier", english: "to study", category: "work", pronunciation: "ay-too-dyay" },
    { french: "jouer", english: "to play", category: "intermediate", pronunciation: "zhoo-ay" },
    { french: "courir", english: "to run", category: "intermediate", pronunciation: "koo-reer" },
    { french: "marcher", english: "to walk", category: "intermediate", pronunciation: "mar-shay" },
    { french: "voyager", english: "to travel", category: "intermediate", pronunciation: "vwah-yah-zhay" },
    { french: "travailler", english: "to work", category: "work", pronunciation: "trah-vah-yay" },
    { french: "manger", english: "to eat", category: "intermediate", pronunciation: "mahn-zhay" },
    { french: "boire", english: "to drink", category: "intermediate", pronunciation: "bwahr" },
    { french: "dormir", english: "to sleep", category: "intermediate", pronunciation: "dor-meer" },
    { french: "se réveiller", english: "to wake up", category: "intermediate", pronunciation: "suh ray-vay-yay" },
    { french: "se lever", english: "to get up", category: "intermediate", pronunciation: "suh luh-vay" },
    { french: "s'habiller", english: "to get dressed", category: "intermediate", pronunciation: "sah-bee-yay" },
    { french: "se laver", english: "to wash oneself", category: "intermediate", pronunciation: "suh lah-vay" },
    { french: "se brosser les dents", english: "to brush one's teeth", category: "intermediate", pronunciation: "suh bro-say lay dahn" },
    { french: "se coiffer", english: "to do one's hair", category: "intermediate", pronunciation: "suh kwah-fay" },
    { french: "se maquiller", english: "to put on makeup", category: "intermediate", pronunciation: "suh mah-kee-yay" },
    { french: "se raser", english: "to shave oneself", category: "intermediate", pronunciation: "suh rah-zay" },
    { french: "se peigner", english: "to comb one's hair", category: "intermediate", pronunciation: "suh peh-nyay" },
    { french: "se coucher", english: "to go to bed", category: "intermediate", pronunciation: "suh koo-shay" },
    { french: "s'endormir", english: "to fall asleep", category: "intermediate", pronunciation: "sahn-dor-meer" },
    { french: "se réveiller tard", english: "to wake up late", category: "intermediate", pronunciation: "suh ray-vay-yay tar" },
    { french: "se dépêcher", english: "to hurry up", category: "intermediate", pronunciation: "suh day-peh-shay" },
    { french: "s'asseoir", english: "to sit down", category: "intermediate", pronunciation: "sah-swahr" },
    { french: "se lever tôt", english: "to get up early", category: "intermediate", pronunciation: "suh luh-vay toh" },
    { french: "se promener", english: "to take a walk", category: "intermediate", pronunciation: "suh prom-nay" },
    { french: "se reposer", english: "to rest", category: "intermediate", pronunciation: "suh ruh-poh-zay" },
    { french: "s'amuser", english: "to have fun", category: "intermediate", pronunciation: "sah-moo-zay" },
    { french: "se détendre", english: "to relax", category: "intermediate", pronunciation: "suh day-tahn-druh" },
    { french: "s'inquiéter", english: "to worry", category: "intermediate", pronunciation: "san-kyay-tay" },
    { french: "s'ennuyer", english: "to get bored", category: "intermediate", pronunciation: "sahn-nwee-yay" },
    { french: "s'intéresser à", english: "to be interested in", category: "intermediate", pronunciation: "san-tay-reh-say ah" },
    { french: "s'excuser", english: "to apologize", category: "intermediate", pronunciation: "sehk-skoo-zay" },
    { french: "s'amuser bien", english: "to have a good time", category: "intermediate", pronunciation: "sah-moo-zay byan" },
    { french: "s'ennuyer à mourir", english: "to be bored to death", category: "intermediate", pronunciation: "sahn-nwee-yay ah moo-reer" },
    { french: "s'inquiéter pour quelqu'un", english: "to worry about someone", category: "intermediate", pronunciation: "san-kyay-tay poor kel-kun" },
    { french: "s'intéresser à quelque chose", english: "to be interested in something", category: "intermediate", pronunciation: "san-tay-reh-say ah kel-kuh shohz" },
    { french: "s'excuser auprès de quelqu'un", english: "to apologize to someone", category: "intermediate", pronunciation: "sehk-skoo-zay oh-pray duh kel-kun" },
    { french: "s'amuser comme un fou", english: "to have a blast", category: "intermediate", pronunciation: "sah-moo-zay kohm un foo" },
    { french: "s'ennuyer à mourir de rire", english: "to be bored to death with laughter", category: "intermediate", pronunciation: "sahn-nwee-yay ah moo-reer duh reer" },
    { french: "s'inquiéter pour soi-même", english: "to worry about oneself", category: "intermediate", pronunciation: "san-kyay-tay poor swah-mehm" },
    { french: "s'intéresser à la politique", english: "to be interested in politics", category: "intermediate", pronunciation: "san-tay-reh-say ah lah po-lee-teek" },
    { french: "s'excuser pour son comportement", english: "to apologize for one's behavior", category: "intermediate", pronunciation: "sehk-skoo-zay poor sohn kom-por-tuh-mahn" }
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
        word.pronunciation.toLowerCase().includes(term)
    );
}

// For working with user progress
export function saveVocabularyProgress(knownWords, unknownWords) {
    const progressData = {
        knownWords,
        unknownWords
    };
    localStorage.setItem('tcfVocabularyProgress', JSON.stringify(progressData));
}

export function loadVocabularyProgress() {
    const savedProgress = localStorage.getItem('tcfVocabularyProgress');
    if (savedProgress) {
        return JSON.parse(savedProgress);
    }
    return { knownWords: [], unknownWords: [] };
}

// New function to get word with pronunciation
export function getWordWithPronunciation(frenchWord) {
    return vocabulary.find(word => word.french.toLowerCase() === frenchWord.toLowerCase());
}

// New function to filter by pronunciation pattern
export function filterByPronunciation(pattern) {
    if (!pattern || pattern.trim() === '') {
        return [];
    }
    
    const term = pattern.trim().toLowerCase();
    return vocabulary.filter(word => 
        word.pronunciation.toLowerCase().includes(term)
    );
}

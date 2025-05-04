// vocabulary-module.js - TCF French Vocabulary Module

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
    
    // Intermediate vocabulary
    { french: "écouter", english: "to listen", category: "intermediate", pronunciation: "ay-koo-tay" },
    { french: "parler", english: "to speak", category: "intermediate", pronunciation: "par-lay" },
    { french: "lire", english: "to read", category: "intermediate", pronunciation: "leer" },
    { french: "écrire", english: "to write", category: "intermediate", pronunciation: "ay-kreer" },
    { french: "comprendre", english: "to understand", category: "intermediate", pronunciation: "kom-prahn-druh" },
    { french: "apprendre", english: "to learn", category: "intermediate", pronunciation: "ah-prahn-druh" },
    { french: "jouer", english: "to play", category: "intermediate", pronunciation: "zhoo-ay" },
    { french: "courir", english: "to run", category: "intermediate", pronunciation: "koo-reer" },
    { french: "marcher", english: "to walk", category: "intermediate", pronunciation: "mar-shay" },
    { french: "voyager", english: "to travel", category: "intermediate", pronunciation: "vwah-yah-zhay" },
    { french: "développement", english: "development", category: "intermediate", pronunciation: "day-vuh-lop-mahn" },
    { french: "environnement", english: "environment", category: "intermediate", pronunciation: "ahn-vee-ron-mahn" },
    { french: "technologie", english: "technology", category: "intermediate", pronunciation: "tek-no-lo-zhee" },
    { french: "expérience", english: "experience", category: "intermediate", pronunciation: "ex-pay-ree-ahns" },
    { french: "responsabilité", english: "responsibility", category: "intermediate", pronunciation: "ray-spohn-sah-bee-lee-tay" },
    
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
    { french: "s'amuser", english: "to have fun", category: "advanced", pronunciation: "sah-moo-zay" }
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

// Export vocabulary progress data for the module status check
window.vocabLoaded = true;
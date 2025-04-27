// vocabulary.js - TCF vocabulary module

// Export the vocabulary list with categories
export const vocabulary = [
    // Basic vocabulary
    { french: "bonjour", english: "hello", category: "basic" },
    { french: "merci", english: "thank you", category: "basic" },
    { french: "s'il vous plaît", english: "please", category: "basic" },
    { french: "au revoir", english: "goodbye", category: "basic" },
    { french: "oui", english: "yes", category: "basic" },
    { french: "non", english: "no", category: "basic" },
    
    // Daily life
    { french: "maison", english: "house", category: "daily" },
    { french: "famille", english: "family", category: "daily" },
    { french: "cuisine", english: "kitchen", category: "daily" },
    { french: "chambre", english: "bedroom", category: "daily" },
    { french: "salle de bain", english: "bathroom", category: "daily" },
    { french: "salon", english: "living room", category: "daily" },
    { french: "table", english: "table", category: "daily" },
    { french: "chaise", english: "chair", category: "daily" },
    { french: "lit", english: "bed", category: "daily" },
    { french: "fenêtre", english: "window", category: "daily" },
    { french: "porte", english: "door", category: "daily" },
    { french: "mur", english: "wall", category: "daily" },
    { french: "plafond", english: "ceiling", category: "daily" },
    { french: "sol", english: "floor", category: "daily" },
    
    // Food
    { french: "manger", english: "to eat", category: "daily" },
    { french: "boire", english: "to drink", category: "daily" },
    { french: "eau", english: "water", category: "daily" },
    { french: "pain", english: "bread", category: "daily" },
    { french: "fromage", english: "cheese", category: "daily" },
    { french: "vin", english: "wine", category: "daily" },
    { french: "café", english: "coffee", category: "daily" },
    { french: "thé", english: "tea", category: "daily" },
    
    // Nature
    { french: "jardin", english: "garden", category: "daily" },
    { french: "fleur", english: "flower", category: "daily" },
    { french: "arbre", english: "tree", category: "daily" },
    { french: "ciel", english: "sky", category: "daily" },
    { french: "soleil", english: "sun", category: "daily" },
    { french: "lune", english: "moon", category: "daily" },
    { french: "étoile", english: "star", category: "daily" },
    { french: "mer", english: "sea", category: "daily" },
    { french: "montagne", english: "mountain", category: "daily" },
    { french: "rivière", english: "river", category: "daily" },
    
    // City
    { french: "ville", english: "city", category: "travel" },
    { french: "village", english: "village", category: "travel" },
    { french: "rue", english: "street", category: "travel" },
    { french: "pont", english: "bridge", category: "travel" },
    { french: "magasin", english: "shop", category: "travel" },
    { french: "marché", english: "market", category: "travel" },
    { french: "boulangerie", english: "bakery", category: "travel" },
    { french: "hôpital", english: "hospital", category: "travel" },
    
    // Professions
    { french: "médecin", english: "doctor", category: "work" },
    { french: "infirmier", english: "nurse", category: "work" },
    { french: "pharmacie", english: "pharmacy", category: "work" },
    { french: "professeur", english: "teacher", category: "work" },
    { french: "étudiant", english: "student", category: "work" },
    { french: "avocat", english: "lawyer", category: "work" },
    { french: "ingénieur", english: "engineer", category: "work" },
    { french: "cuisinier", english: "cook", category: "work" },
    { french: "serveur", english: "waiter", category: "work" },
    
    // Verbs
    { french: "écouter", english: "to listen", category: "intermediate" },
    { french: "parler", english: "to speak", category: "intermediate" },
    { french: "lire", english: "to read", category: "intermediate" },
    { french: "écrire", english: "to write", category: "intermediate" },
    { french: "comprendre", english: "to understand", category: "intermediate" },
    { french: "apprendre", english: "to learn", category: "intermediate" },
    { french: "enseigner", english: "to teach", category: "work" },
    { french: "étudier", english: "to study", category: "work" },
    { french: "jouer", english: "to play", category: "intermediate" },
    { french: "courir", english: "to run", category: "intermediate" },
    { french: "marcher", english: "to walk", category: "intermediate" },
    { french: "voyager", english: "to travel", category: "intermediate" },
    { french: "travailler", english: "to work", category: "work" },
    { french: "manger", english: "to eat", category: "intermediate" },
    { french: "boire", english: "to drink", category: "intermediate" },
    { french: "dormir", english: "to sleep", category: "intermediate" },
    { french: "se réveiller", english: "to wake up", category: "intermediate" },
    { french: "se lever", english: "to get up", category: "intermediate" },
    { french: "s'habiller", english: "to get dressed", category: "intermediate" },
    { french: "se laver", english: "to wash oneself", category: "intermediate" },
    { french: "se brosser les dents", english: "to brush one's teeth", category: "intermediate" },
    { french: "se coiffer", english: "to do one's hair", category: "intermediate" },
    { french: "se maquiller", english: "to put on makeup", category: "intermediate" },
    { french: "se raser", english: "to shave oneself", category: "intermediate" },
    { french: "se peigner", english: "to comb one's hair", category: "intermediate" },
    { french: "se coucher", english: "to go to bed", category: "intermediate" },
    { french: "s'endormir", english: "to fall asleep", category: "intermediate" },
    { french: "se réveiller tard", english: "to wake up late", category: "intermediate" },
    { french: "se dépêcher", english: "to hurry up", category: "intermediate" },
    { french: "s'asseoir", english: "to sit down", category: "intermediate" },
    { french: "se lever tôt", english: "to get up early", category: "intermediate" },
    { french: "se promener", english: "to take a walk", category: "intermediate" },
    { french: "se reposer", english: "to rest", category: "intermediate" },
    { french: "s'amuser", english: "to have fun", category: "intermediate" },
    { french: "se détendre", english: "to relax", category: "intermediate" },
    { french: "s'inquiéter", english: "to worry", category: "intermediate" },
    { french: "s'ennuyer", english: "to get bored", category: "intermediate" },
    { french: "s'intéresser à", english: "to be interested in", category: "intermediate" },
    { french: "s'excuser", english: "to apologize", category: "intermediate" },
    { french: "s'amuser bien", english: "to have a good time", category: "intermediate" },
    { french: "s'ennuyer à mourir", english: "to be bored to death", category: "intermediate" },
    { french: "s'inquiéter pour quelqu'un", english: "to worry about someone", category: "intermediate" },
    { french: "s'intéresser à quelque chose", english: "to be interested in something", category: "intermediate" },
    { french: "s'excuser auprès de quelqu'un", english: "to apologize to someone", category: "intermediate" },
    { french: "s'amuser comme un fou", english: "to have a blast", category: "intermediate" },
    { french: "s'ennuyer à mourir de rire", english: "to be bored to death with laughter", category: "intermediate" },
    { french: "s'inquiéter pour soi-même", english: "to worry about oneself", category: "intermediate" },
    { french: "s'intéresser à la politique", english: "to be interested in politics", category: "intermediate" },
    { french: "s'excuser pour son comportement", english: "to apologize for one's behavior", category: "intermediate" }
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
        word.english.toLowerCase().includes(term)
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
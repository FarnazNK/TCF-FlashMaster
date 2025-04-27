// main.js - TCF French Exam Preparation Main Application

// Import modules - using the correct file names
import { vocabulary, filterVocabularyByCategory, searchVocabulary, saveVocabularyProgress, loadVocabularyProgress } from './vocabulary-module.js';
import { readingPassages, getPassagesByLevel, getPassageByTitle, saveReadingProgress, loadReadingProgress } from './reading-module.js';

// Add to window for debugging
window.vocabLoaded = vocabulary && vocabulary.length > 0;
window.readingLoaded = readingPassages && readingPassages.length > 0;

// Log successful module loading
console.log("Modules loaded:", {
    vocabulary: window.vocabLoaded ? `${vocabulary.length} words` : "Failed",
    reading: window.readingLoaded ? `${readingPassages.length} passages` : "Failed"
});

// App state
let currentCardIndex = 0;
let showingFrench = true;
let filteredVocabulary = [...vocabulary];
let knownWords = [];
let unknownWords = [];
let currentSpeech = null;
let completedPassages = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded");
    
    // Load saved progress
    loadProgress();
    
    // Initialize components
    initializeTabs();
    initializeFlashcards();
    initializeSearch();
    initializeReading();
    updateProgress();
    console.log("App fully initialized");
});

// Tab functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('bg-blue-100', 'text-blue-700', 'tab-active'));
            
            // Add active class to current tab
            tab.classList.add('bg-blue-100', 'text-blue-700', 'tab-active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // Show current tab content
            const content = document.getElementById(tab.dataset.tab);
            if (content) {
                content.classList.remove('hidden');
            }
        });
    });
}

// Flashcard functionality
function initializeFlashcards() {
    const flashcardElement = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pronounceBtn = document.getElementById('pronounceBtn');
    const markKnownBtn = document.getElementById('markKnownBtn');
    const markUnknownBtn = document.getElementById('markUnknownBtn');
    const categorySelect = document.getElementById('category');
    
    updateCard();
    
    // Event listeners
    flashcardElement.addEventListener('click', flipCard);
    prevBtn.addEventListener('click', prevCard);
    nextBtn.addEventListener('click', nextCard);
    pronounceBtn.addEventListener('click', playPronunciation);
    markKnownBtn.addEventListener('click', markAsKnown);
    markUnknownBtn.addEventListener('click', markAsUnknown);
    
    categorySelect.addEventListener('change', () => {
        const category = categorySelect.value;
        filteredVocabulary = filterVocabularyByCategory(category);
        currentCardIndex = 0;
        showingFrench = true;
        updateCard();
    });
    
    console.log("Flashcard system initialized");
}

function updateCard() {
    const cardContent = document.getElementById('cardContent');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (filteredVocabulary.length === 0) {
        cardContent.textContent = "No words in this category";
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }
    
    // Ensure currentCardIndex is within bounds
    currentCardIndex = Math.min(currentCardIndex, filteredVocabulary.length - 1);
    
    // Show French or English based on state
    cardContent.textContent = showingFrench
        ? filteredVocabulary[currentCardIndex].french
        : filteredVocabulary[currentCardIndex].english;

    // Update button states
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === filteredVocabulary.length - 1;
    
    // Update progress
    updateProgress();
}

function flipCard() {
    showingFrench = !showingFrench;
    updateCard();
}

function nextCard() {
    if (currentCardIndex < filteredVocabulary.length - 1) {
        currentCardIndex++;
        showingFrench = true;
        updateCard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showingFrench = true;
        updateCard();
    }
}

function playPronunciation() {
    if (!('speechSynthesis' in window)) {
        alert('Sorry, your browser does not support speech synthesis.');
        return;
    }
    
    if (currentSpeech) {
        speechSynthesis.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(filteredVocabulary[currentCardIndex].french);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.9;
    
    // Ensure voices are loaded
    const setVoice = () => {
        const voices = speechSynthesis.getVoices();
        const frenchVoice = voices.find(voice => voice.lang === 'fr-FR');
        if (frenchVoice) {
            utterance.voice = frenchVoice;
        } else {
            console.log('No French voice available. Using default voice.');
        }
        currentSpeech = utterance;
        speechSynthesis.speak(utterance);
    };
    
    // Check if voices are already loaded
    if (speechSynthesis.getVoices().length > 0) {
        setVoice();
    } else {
        speechSynthesis.onvoiceschanged = setVoice;
    }
}

function markAsKnown() {
    const currentWord = filteredVocabulary[currentCardIndex];
    if (!knownWords.includes(currentWord.french)) {
        knownWords.push(currentWord.french);
        
        // Remove from unknown if it was there
        const unknownIndex = unknownWords.indexOf(currentWord.french);
        if (unknownIndex > -1) {
            unknownWords.splice(unknownIndex, 1);
        }
    }
    
    updateProgress();
    saveProgress();
    nextCard();
}

function markAsUnknown() {
    const currentWord = filteredVocabulary[currentCardIndex];
    if (!unknownWords.includes(currentWord.french)) {
        unknownWords.push(currentWord.french);
        
        // Remove from known if it was there
        const knownIndex = knownWords.indexOf(currentWord.french);
        if (knownIndex > -1) {
            knownWords.splice(knownIndex, 1);
        }
    }
    
    updateProgress();
    saveProgress();
    nextCard();
}

// Search functionality
function initializeSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        searchResults.innerHTML = '<p class="text-gray-500">Please enter a search term</p>';
        return;
    }
    
    // Search in both French and English
    const results = searchVocabulary(searchTerm);
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="text-gray-500">No results found</p>';
        return;
    }
    
    const resultsList = document.createElement('ul');
    resultsList.className = 'divide-y divide-gray-200';
    
    results.forEach(word => {
        const listItem = document.createElement('li');
        listItem.className = 'py-2 flex justify-between items-center';
        
        const wordInfo = document.createElement('div');
        wordInfo.innerHTML = `<span class="font-medium">${word.french}</span> - ${word.english}`;
        
        const categoryBadge = document.createElement('span');
        categoryBadge.className = 'text-xs font-medium px-2 py-1 rounded';
        categoryBadge.textContent = word.category;
        
        // Set badge color based on category
        switch(word.category) {
            case 'basic':
                categoryBadge.classList.add('bg-green-100', 'text-green-800');
                break;
            case 'intermediate':
                categoryBadge.classList.add('bg-blue-100', 'text-blue-800');
                break;
            case 'advanced':
                categoryBadge.classList.add('bg-purple-100', 'text-purple-800');
                break;
            case 'daily':
                categoryBadge.classList.add('bg-yellow-100', 'text-yellow-800');
                break;
            case 'travel':
                categoryBadge.classList.add('bg-orange-100', 'text-orange-800');
                break;
            case 'work':
                categoryBadge.classList.add('bg-red-100', 'text-red-800');
                break;
            default:
                categoryBadge.classList.add('bg-gray-100', 'text-gray-800');
                break;
        }
        
        listItem.appendChild(wordInfo);
        listItem.appendChild(categoryBadge);
        resultsList.appendChild(listItem);
    });
    
    searchResults.appendChild(resultsList);
}

// Reading functionality
function initializeReading() {
    // Populate reading passages by level
    populatePassagesList('beginner', 'beginnerPassages');
    populatePassagesList('elementary', 'elementaryPassages');
    populatePassagesList('intermediate', 'intermediatePassages');
    populatePassagesList('upperIntermediate', 'upperIntermediatePassages');
    
    // Add event listener for "Check Answers" button
    const checkAnswersBtn = document.getElementById('checkAnswersBtn');
    if (checkAnswersBtn) {
        checkAnswersBtn.addEventListener('click', checkAnswers);
    }
}

function populatePassagesList(level, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    const passages = getPassagesByLevel(level);
    
    if (passages.length === 0) {
        container.innerHTML = '<li class="text-gray-500">No passages available</li>';
        return;
    }
    
    container.innerHTML = ''; // Clear existing content
    
    passages.forEach(passage => {
        const listItem = document.createElement('li');
        
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'text-blue-600 hover:underline flex items-center';
        link.innerHTML = `<i class="far fa-file-alt mr-2"></i> ${passage.title}`;
        
        // Check if passage is completed
        if (completedPassages.includes(passage.title)) {
            link.innerHTML += ` <i class="fas fa-check-circle text-green-500 ml-2"></i>`;
        }
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            displayPassage(passage.title);
        });
        
        listItem.appendChild(link);
        container.appendChild(listItem);
    });
}

function displayPassage(title) {
    const passage = getPassageByTitle(title);
    if (!passage) return;
    
    // Show the passage content area
    const passageContent = document.getElementById('passageContent');
    passageContent.classList.remove('hidden');
    
    // Set title and text
    document.getElementById('passageTitle').textContent = passage.title;
    document.getElementById('passageText').textContent = passage.text;
    
    // Populate vocabulary
    const vocabContainer = document.getElementById('passageVocabulary');
    vocabContainer.innerHTML = '';
    
    passage.vocabulary.forEach(item => {
        const vocabItem = document.createElement('li');
        vocabItem.className = 'border p-2 rounded';
        vocabItem.innerHTML = `<span class="font-medium">${item.word}</span> - ${item.definition}`;
        vocabContainer.appendChild(vocabItem);
    });
    
    // Populate questions
    const questionsContainer = document.getElementById('passageQuestions');
    questionsContainer.innerHTML = '';
    
    passage.questions.forEach((q, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'mb-4';
        questionDiv.innerHTML = `<p class="font-medium mb-2">${qIndex + 1}. ${q.question}</p>`;
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'ml-6';
        
        q.options.forEach((option, oIndex) => {
            const optionLabel = document.createElement('label');
            optionLabel.className = 'block mb-1';
            
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question_${qIndex}`;
            optionInput.value = oIndex;
            optionInput.className = 'mr-2';
            
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            
            optionsDiv.appendChild(optionLabel);
        });
        
        questionDiv.appendChild(optionsDiv);
        questionsContainer.appendChild(questionDiv);
    });
    
    // Reset the Check Answers button if it was disabled
    const checkBtn = document.getElementById('checkAnswersBtn');
    if (checkBtn) {
        checkBtn.disabled = false;
    }
    
    // Remove any previous score div
    const oldScoreDiv = document.querySelector('.score-result');
    if (oldScoreDiv) {
        oldScoreDiv.remove();
    }
}

function checkAnswers() {
    const passageTitle = document.getElementById('passageTitle').textContent;
    const passage = getPassageByTitle(passageTitle);
    
    if (!passage) return;
    
    let allCorrect = true;
    let score = 0;
    
    passage.questions.forEach((q, qIndex) => {
        const radioButtons = document.querySelectorAll(`input[name="question_${qIndex}"]`);
        let answered = false;
        let correct = false;
        
        radioButtons.forEach((radio, rIndex) => {
            // Check if this option was selected
            if (radio.checked) {
                answered = true;
                
                // Check if it's the correct answer
                correct = rIndex === q.correct;
                
                // Mark visually
                radio.parentElement.classList.add(correct ? 'text-green-700' : 'text-red-700');
                
                if (correct) score++;
            }
            
            // Disable all inputs after checking
            radio.disabled = true;
        });
        
        if (!answered || !correct) allCorrect = false;
    });
    
    // Show score
    const scoreDiv = document.createElement('div');
    scoreDiv.className = `mt-4 p-3 rounded score-result ${allCorrect ? 'bg-green-100' : 'bg-yellow-100'}`;
    scoreDiv.innerHTML = `<p class="font-medium">Score: ${score}/${passage.questions.length} ${allCorrect ? '- Perfect!' : ''}</p>`;
    
    // Add a button to try again
    const retryBtn = document.createElement('button');
    retryBtn.className = 'mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm';
    retryBtn.textContent = 'Try Again';
    retryBtn.addEventListener('click', () => {
        displayPassage(passageTitle);
    });
    
    scoreDiv.appendChild(retryBtn);
    
    // Show the score after the Check Answers button
    const checkBtn = document.getElementById('checkAnswersBtn');
    checkBtn.parentElement.appendChild(scoreDiv);
    checkBtn.disabled = true;
    
    // Mark passage as completed if perfect score
    if (allCorrect && !completedPassages.includes(passageTitle)) {
        completedPassages.push(passageTitle);
        saveProgress();
        
        // Update the check mark on the passage list
        const passageLinks = document.querySelectorAll(`a`);
        passageLinks.forEach(link => {
            if (link.textContent.includes(passageTitle) && !link.innerHTML.includes('fa-check-circle')) {
                link.innerHTML += ` <i class="fas fa-check-circle text-green-500 ml-2"></i>`;
            }
        });
    }
}

// Progress tracking
function updateProgress() {
    const knownCountEl = document.getElementById('knownCount');
    const unknownCountEl = document.getElementById('unknownCount');
    const totalCountEl = document.getElementById('totalCount');
    const totalCountUnknownEl = document.getElementById('totalCountUnknown');
    const knownProgressEl = document.getElementById('knownProgress');
    const unknownProgressEl = document.getElementById('unknownProgress');
    
    if (!knownCountEl || !unknownCountEl || !totalCountEl || !totalCountUnknownEl || !knownProgressEl || !unknownProgressEl) {
        return; // Exit if any elements don't exist
    }
    
    // Calculate total words in current category
    const totalWords = filteredVocabulary.length;
    
    // Count known and unknown words in current category
    const knownInCategory = filteredVocabulary.filter(word => knownWords.includes(word.french)).length;
    const unknownInCategory = filteredVocabulary.filter(word => unknownWords.includes(word.french)).length;
    
    // Update counts
    knownCountEl.textContent = knownInCategory;
    unknownCountEl.textContent = unknownInCategory;
    totalCountEl.textContent = totalWords;
    totalCountUnknownEl.textContent = totalWords;
    
    // Update progress bars
    const knownPercent = totalWords > 0 ? Math.round((knownInCategory / totalWords) * 100) : 0;
    const unknownPercent = totalWords > 0 ? Math.round((unknownInCategory / totalWords) * 100) : 0;
    
    knownProgressEl.style.width = `${knownPercent}%`;
    knownProgressEl.textContent = `${knownPercent}%`;
    
    unknownProgressEl.style.width = `${unknownPercent}%`;
    unknownProgressEl.textContent = `${unknownPercent}%`;
}

// Save/load progress
function saveProgress() {
    saveVocabularyProgress(knownWords, unknownWords);
    saveReadingProgress(completedPassages);
}

function loadProgress() {
    // Load vocabulary progress
    const vocabProgress = loadVocabularyProgress();
    if (vocabProgress) {
        knownWords = vocabProgress.knownWords || [];
        unknownWords = vocabProgress.unknownWords || [];
    }
    
    // Load reading progress
    const readingProgress = loadReadingProgress();
    if (readingProgress) {
        completedPassages = readingProgress;
    }
}
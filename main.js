// TCF French Exam Preparation Main Application

// Import modules with error handling
let vocabulary, filterVocabularyByCategory, searchVocabulary, saveVocabularyProgress, loadVocabularyProgress;
let readingPassages, getPassagesByLevel, getPassageByTitle, saveReadingProgress, loadReadingProgress;
let grammarTopics, saveGrammarProgress, loadGrammarProgress;
let writingPrompts, generateFeedback, saveEssay, loadSavedEssays, analyzeEssay;
let speakingExercises, pronunciationExercises, generatePronunciationFeedback, saveSpeakingPractice, loadSavedPractices;

async function loadModules() {
  function updateModuleStatus(moduleId, isLoaded, error = null) {
    const statusElement = document.getElementById(moduleId);
    if (statusElement) {
      statusElement.textContent = isLoaded ? 'Loaded ✓' : `Not loaded ✗${error ? `: ${error.message}` : ''}`;
      statusElement.className = isLoaded ? 'text-green-600' : 'text-red-600';
    } else {
      console.warn(`Status element for ${moduleId} not found`);
    }
  }

  try {
    console.log('Attempting to load vocabulary module...');
    const vocabModule = await import('./vocabulary-module.js');
    ({
      vocabulary,
      filterVocabularyByCategory,
      searchVocabulary,
      saveVocabularyProgress,
      loadVocabularyProgress
    } = vocabModule);
    console.log('Vocabulary module loaded:', { vocabularyLength: vocabulary?.length });
    updateModuleStatus('vocabularyStatus', true);
    window.vocabLoaded = true;
  } catch (error) {
    console.error('Failed to load vocabulary module:', error);
    updateModuleStatus('vocabularyStatus', false, error);
    window.vocabLoaded = false;
  }

  try {
    console.log('Attempting to load reading module...');
    const readingModule = await import('./reading-module.js');
    ({
      readingPassages,
      getPassagesByLevel,
      getPassageByTitle,
      saveReadingProgress,
      loadReadingProgress
    } = readingModule);
    console.log('Reading module loaded:', { passagesLength: readingPassages?.length });
    updateModuleStatus('readingStatus', true);
    window.readingLoaded = true;
  } catch (error) {
    console.error('Failed to load reading module:', error);
    updateModuleStatus('readingStatus', false, error);
    window.readingLoaded = false;
  }

  try {
    console.log('Attempting to load grammar module...');
    const grammarModule = await import('./grammar-module.js');
    ({ grammarTopics, saveGrammarProgress, loadGrammarProgress } = grammarModule);
    console.log('Grammar module loaded:', { topicsLength: grammarTopics?.length });
    updateModuleStatus('grammarStatus', true);
    window.grammarLoaded = true;
  } catch (error) {
    console.error('Failed to load grammar module:', error);
    updateModuleStatus('grammarStatus', false, error);
    window.grammarLoaded = false;
  }

  try {
    console.log('Attempting to load writing module...');
    const writingModule = await import('./writing-module.js');
    ({
      writingPrompts,
      generateFeedback,
      saveEssay,
      loadSavedEssays,
      analyzeEssay
    } = writingModule);
    console.log('Writing module loaded:', { promptsLength: writingPrompts?.length });
    updateModuleStatus('writingStatus', true);
    window.writingLoaded = true;
  } catch (error) {
    console.error('Failed to load writing module:', error);
    updateModuleStatus('writingStatus', false, error);
    window.writingLoaded = false;
  }

  try {
    console.log('Attempting to load speaking module...');
    const speakingModule = await import('./speaking-module.js');
    ({
      speakingExercises,
      pronunciationExercises,
      generatePronunciationFeedback,
      saveSpeakingPractice,
      loadSavedPractices
    } = speakingModule);
    console.log('Speaking module loaded:', {
      speakingLength: speakingExercises?.length,
      pronunciationLength: pronunciationExercises?.length
    });
    updateModuleStatus('speakingStatus', true);
    window.speakingLoaded = true;
  } catch (error) {
    console.error('Failed to load speaking module:', error);
    updateModuleStatus('speakingStatus', false, error);
    window.speakingLoaded = false;
  }
}

// Declare global state
let currentCardIndex = 0;
let showingFrench = true;
let filteredVocabulary = vocabulary ? [...vocabulary] : [];
let knownWords = [];
let unknownWords = [];
let currentSpeech = null;
let completedPassages = [];
let completedGrammar = [];
let savedEssays = [];
let savedSpeakingPractices = [];
let recordingTimer = null;
let mediaRecorder = null;
let audioChunks = [];
let recordedAudio = null;

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log('DOM Content Loaded');
    await loadModules();
    loadProgress();
    initializeTabs();
    initializeFlashcards();
    initializeSearch();
    initializeReading();
    initializeGrammar();
    initializeWriting();
    initializeSpeaking();
    updateProgress();
    console.log('App fully initialized');
  } catch (error) {
    console.error('Initialization error:', error);
    alert('Failed to initialize the application. Please refresh and try again.');
  }
});

// Utility function for speech synthesis
function speakText(text, rate = 0.9, lang = 'fr-FR') {
  if (!('speechSynthesis' in window)) {
    alert('Speech synthesis not supported.');
    return;
  }

  if (currentSpeech) {
    speechSynthesis.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;

  const setVoice = () => {
    const voices = speechSynthesis.getVoices();
    const targetVoice = voices.find((voice) => voice.lang === lang);
    if (targetVoice) utterance.voice = targetVoice;
    currentSpeech = utterance;
    speechSynthesis.speak(utterance);
  };

  if (speechSynthesis.getVoices().length > 0) {
    setVoice();
  } else {
    speechSynthesis.onvoiceschanged = setVoice;
  }
}

// Tab functionality
function initializeTabs() {
  const tabs = document.querySelectorAll('[data-tab]');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('bg-blue-100', 'text-blue-700', 'tab-active'));
      tab.classList.add('bg-blue-100', 'text-blue-700', 'tab-active');
      tabContents.forEach((content) => content.classList.add('hidden'));
      const content = document.getElementById(tab.dataset.tab);
      if (content) content.classList.remove('hidden');
    });
  });
}

// Flashcard functionality
function initializeFlashcards() {
  const elements = {
    flashcard: document.getElementById('flashcard'),
    cardContent: document.getElementById('cardContent'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    pronounceBtn: document.getElementById('pronounceBtn'),
    markKnownBtn: document.getElementById('markKnownBtn'),
    markUnknownBtn: document.getElementById('markUnknownBtn'),
    categorySelect: document.getElementById('category'),
  };

  if (!Object.values(elements).every((el) => el)) {
    console.error('Flashcard elements missing');
    return;
  }

  updateCard();

  elements.flashcard.addEventListener('click', flipCard);
  elements.prevBtn.addEventListener('click', prevCard);
  elements.nextBtn.addEventListener('click', nextCard);
  elements.pronounceBtn.addEventListener('click', playPronunciation);
  elements.markKnownBtn.addEventListener('click', markAsKnown);
  elements.markUnknownBtn.addEventListener('click', markAsUnknown);

  elements.categorySelect.addEventListener('change', () => {
    if (filterVocabularyByCategory) {
      filteredVocabulary = filterVocabularyByCategory(elements.categorySelect.value);
      currentCardIndex = 0;
      showingFrench = true;
      updateCard();
    }
  });

  console.log('Flashcard system initialized');
}

function updateCard() {
  const cardContent = document.getElementById('cardContent');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!cardContent || !prevBtn || !nextBtn) return;

  if (!filteredVocabulary || filteredVocabulary.length === 0) {
    cardContent.textContent = 'No words in this category';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  currentCardIndex = Math.min(currentCardIndex, filteredVocabulary.length - 1);
  cardContent.textContent = showingFrench
    ? filteredVocabulary[currentCardIndex].french
    : filteredVocabulary[currentCardIndex].english;

  prevBtn.disabled = currentCardIndex === 0;
  nextBtn.disabled = currentCardIndex === filteredVocabulary.length - 1;

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
  if (!filteredVocabulary || filteredVocabulary.length === 0) return;

  const currentWord = filteredVocabulary[currentCardIndex];
  const pronunciation = currentWord.pronunciation ? ` (${currentWord.pronunciation})` : '';
  speakText(currentWord.french + pronunciation);
}

function markAsKnown() {
  if (!filteredVocabulary || filteredVocabulary.length === 0) return;

  const currentWord = filteredVocabulary[currentCardIndex];
  if (!knownWords.includes(currentWord.french)) {
    knownWords.push(currentWord.french);
    const unknownIndex = unknownWords.indexOf(currentWord.french);
    if (unknownIndex > -1) unknownWords.splice(unknownIndex, 1);
  }

  updateProgress();
  saveProgress();
  nextCard();
}

function markAsUnknown() {
  if (!filteredVocabulary || filteredVocabulary.length === 0) return;

  const currentWord = filteredVocabulary[currentCardIndex];
  if (!unknownWords.includes(currentWord.french)) {
    unknownWords.push(currentWord.french);
    const knownIndex = knownWords.indexOf(currentWord.french);
    if (knownIndex > -1) knownWords.splice(knownIndex, 1);
  }

  updateProgress();
  saveProgress();
  nextCard();
}

// Search functionality
function initializeSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  if (!searchBtn || !searchInput) {
    console.error('Search elements missing');
    return;
  }

  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}

function performSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  if (!searchInput || !searchResults) return;

  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm === '') {
    searchResults.innerHTML = '<p class="text-gray-500">Please enter a search term</p>';
    return;
  }

  if (searchVocabulary) {
    const results = searchVocabulary(searchTerm);
    displaySearchResults(results);
  }
}

function displaySearchResults(results) {
  const searchResults = document.getElementById('searchResults');
  if (!searchResults) return;

  searchResults.innerHTML = '';

  if (!results || results.length === 0) {
    searchResults.innerHTML = '<p class="text-gray-500">No results found</p>';
    return;
  }

  const resultsList = document.createElement('ul');
  resultsList.className = 'divide-y divide-gray-200';

  results.forEach((word) => {
    const listItem = document.createElement('li');
    listItem.className = 'py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center';

    const wordInfo = document.createElement('div');
    wordInfo.innerHTML = `
      <span class="font-medium">${word.french}</span> - ${word.english}
      <div class="text-gray-500 text-sm">Pronunciation: ${word.pronunciation || 'Not available'}</div>
    `;

    const rightSide = document.createElement('div');
    rightSide.className = 'flex items-center mt-2 sm:mt-0';

    const pronounceBtn = document.createElement('button');
    pronounceBtn.className = 'text-xs bg-blue-600 text-white p-1 rounded-full mr-2';
    pronounceBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    pronounceBtn.addEventListener('click', () => speakText(word.french));

    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'text-xs font-medium px-2 py-1 rounded';
    categoryBadge.textContent = word.category;

    switch (word.category) {
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
    }

    rightSide.appendChild(pronounceBtn);
    rightSide.appendChild(categoryBadge);
    listItem.appendChild(wordInfo);
    listItem.appendChild(rightSide);
    resultsList.appendChild(listItem);
  });

  searchResults.appendChild(resultsList);
}

// Reading functionality
function initializeReading() {
  populatePassagesList('beginner', 'beginnerPassages');
  populatePassagesList('elementary', 'elementaryPassages');
  populatePassagesList('intermediate', 'intermediatePassages');
  populatePassagesList('upperIntermediate', 'upperIntermediatePassages');

  const checkAnswersBtn = document.getElementById('checkAnswersBtn');
  if (checkAnswersBtn) {
    checkAnswersBtn.addEventListener('click', checkAnswers);
  }
}

function populatePassagesList(level, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  if (!getPassagesByLevel) return;

  const passages = getPassagesByLevel(level);
  if (!passages || passages.length === 0) {
    container.innerHTML = '<li class="text-gray-500">No passages available</li>';
    return;
  }

  container.innerHTML = '';

  passages.forEach((passage) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'text-blue-600 hover:underline flex items-center';
    link.innerHTML = `<i class="far fa-file-alt mr-2"></i> ${passage.title}`;

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
  if (!getPassageByTitle) return;

  const passage = getPassageByTitle(title);
  if (!passage) return;

  const passageContent = document.getElementById('passageContent');
  if (!passageContent) return;

  passageContent.classList.remove('hidden');
  document.getElementById('passageTitle').textContent = passage.title;
  document.getElementById('passageText').textContent = passage.text;

  const readAloudBtn = document.getElementById('readAloudBtn');
  if (readAloudBtn) {
    readAloudBtn.removeEventListener('click', readPassageAloud);
    readAloudBtn.addEventListener('click', readPassageAloud);
  }

  const readingStatus = document.getElementById('readingStatus');
  if (readingStatus) readingStatus.classList.add('hidden');

  if (currentSpeech) {
    speechSynthesis.cancel();
    currentSpeech = null;
    updateReadAloudButton(false);
  }

  const vocabContainer = document.getElementById('passageVocabulary');
  if (vocabContainer) {
    vocabContainer.innerHTML = '';
    passage.vocabulary.forEach((item) => {
      const vocabItem = document.createElement('li');
      vocabItem.className = 'border p-2 rounded';
      vocabItem.innerHTML = `<span class="font-medium">${item.word}</span> - ${item.definition}`;
      vocabContainer.appendChild(vocabItem);
    });
  }

  const questionsContainer = document.getElementById('passageQuestions');
  if (questionsContainer) {
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
  }

  const checkBtn = document.getElementById('checkAnswersBtn');
  if (checkBtn) checkBtn.disabled = false;

  const oldScoreDiv = document.querySelector('.score-result');
  if (oldScoreDiv) oldScoreDiv.remove();
}

function readPassageAloud() {
  const passageText = document.getElementById('passageText')?.textContent;
  const readingStatus = document.getElementById('readingStatus');
  if (!passageText) return;

  if (currentSpeech) {
    speechSynthesis.cancel();
    currentSpeech = null;
    updateReadAloudButton(false);
    if (readingStatus) readingStatus.classList.add('hidden');
    return;
  }

  speakText(passageText);
  if (readingStatus) readingStatus.classList.remove('hidden');
  updateReadAloudButton(true);

  currentSpeech.onend = () => {
    updateReadAloudButton(false);
    currentSpeech = null;
    if (readingStatus) readingStatus.classList.add('hidden');
  };
}

function updateReadAloudButton(isReading) {
  const readAloudBtn = document.getElementById('readAloudBtn');
  if (!readAloudBtn) return;

  readAloudBtn.innerHTML = isReading
    ? '<i class="fas fa-pause mr-1"></i> Pause'
    : '<i class="fas fa-volume-up mr-1"></i> Read Aloud';
  readAloudBtn.classList.toggle('bg-blue-600', !isReading);
  readAloudBtn.classList.toggle('bg-yellow-600', isReading);
}

function checkAnswers() {
  const passageTitle = document.getElementById('passageTitle')?.textContent;
  if (!getPassageByTitle) return;

  const passage = getPassageByTitle(passageTitle);
  if (!passage) return;

  let allCorrect = true;
  let score = 0;

  passage.questions.forEach((q, qIndex) => {
    const radioButtons = document.querySelectorAll(`input[name="question_${qIndex}"]`);
    let answered = false;
    let correct = false;

    radioButtons.forEach((radio, rIndex) => {
      if (radio.checked) {
        answered = true;
        correct = rIndex === q.correct;
        radio.parentElement.classList.add(correct ? 'text-green-700' : 'text-red-700');
        if (correct) score++;
      }
      radio.disabled = true;
    });

    if (!answered || !correct) allCorrect = false;
  });

  const scoreDiv = document.createElement('div');
  scoreDiv.className = `mt-4 p-3 rounded score-result ${allCorrect ? 'bg-green-100' : 'bg-yellow-100'}`;
  scoreDiv.innerHTML = `<p class="font-medium">Score: ${score}/${passage.questions.length} ${allCorrect ? '- Perfect!' : ''}</p>`;

  const retryBtn = document.createElement('button');
  retryBtn.className = 'mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm';
  retryBtn.textContent = 'Try Again';
  retryBtn.addEventListener('click', () => displayPassage(passageTitle));

  scoreDiv.appendChild(retryBtn);

  const checkBtn = document.getElementById('checkAnswersBtn');
  if (checkBtn) {
    checkBtn.parentElement.appendChild(scoreDiv);
    checkBtn.disabled = true;
  }

  if (allCorrect && !completedPassages.includes(passageTitle)) {
    completedPassages.push(passageTitle);
    saveProgress();

    document.querySelectorAll('a').forEach((link) => {
      if (link.textContent.includes(passageTitle) && !link.innerHTML.includes('fa-check-circle')) {
        link.innerHTML += ` <i class="fas fa-check-circle text-green-500 ml-2"></i>`;
      }
    });
  }
}

// Grammar functionality
function initializeGrammar() {
  populateGrammarList('beginner', 'beginnerGrammar');
  populateGrammarList('intermediate', 'intermediateGrammar');
  populateGrammarList('advanced', 'advancedGrammar');

  const checkGrammarBtn = document.getElementById('checkGrammarBtn');
  if (checkGrammarBtn) {
    checkGrammarBtn.addEventListener('click', checkGrammarExercises);
  }
}

function populateGrammarList(level, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  if (!grammarTopics) return;

  const topics = grammarTopics.filter((topic) => topic.level === level);
  if (!topics || topics.length === 0) {
    container.innerHTML = '<li class="text-gray-500">No grammar topics available</li>';
    return;
  }

  container.innerHTML = '';

  topics.forEach((topic) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'text-blue-600 hover:underline flex items-center';
    link.innerHTML = `<i class="fas fa-book mr-2"></i> ${topic.title}`;

    if (completedGrammar.includes(topic.title)) {
      link.innerHTML += ` <i class="fas fa-check-circle text-green-500 ml-2"></i>`;
    }

    link.addEventListener('click', (e) => {
      e.preventDefault();
      displayGrammarTopic(topic.title);
    });

    listItem.appendChild(link);
    container.appendChild(listItem);
  });
}

function displayGrammarTopic(title) {
  if (!grammarTopics) return;

  const topic = grammarTopics.find((t) => t.title === title);
  if (!topic) return;

  const grammarContent = document.getElementById('grammarContent');
  if (!grammarContent) return;

  grammarContent.classList.remove('hidden');
  document.getElementById('grammarTitle').textContent = topic.title;
  document.getElementById('grammarExplanation').innerHTML = topic.explanation;

  const examplesContainer = document.getElementById('grammarExamples');
  if (examplesContainer) {
    examplesContainer.innerHTML = '';
    topic.examples.forEach((example) => {
      const exampleItem = document.createElement('li');
      exampleItem.innerHTML = example;
      examplesContainer.appendChild(exampleItem);
    });
  }

  const exercisesContainer = document.getElementById('grammarExercises');
  if (exercisesContainer) {
    exercisesContainer.innerHTML = '';
    topic.exercises.forEach((exercise, index) => {
      const exerciseDiv = document.createElement('div');
      exerciseDiv.className = 'mb-4 p-3 bg-gray-50 rounded';
      exerciseDiv.innerHTML = `<p class="font-medium mb-2">${index + 1}. ${exercise.question}</p>`;

      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'ml-6';

      exercise.options.forEach((option, optionIndex) => {
        const optionLabel = document.createElement('label');
        optionLabel.className = 'block mb-1';
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `exercise_${index}`;
        optionInput.value = optionIndex;
        optionInput.className = 'mr-2';
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionsDiv.appendChild(optionLabel);
      });

      exerciseDiv.appendChild(optionsDiv);
      exercisesContainer.appendChild(exerciseDiv);
    });
  }

  const checkBtn = document.getElementById('checkGrammarBtn');
  if (checkBtn) checkBtn.disabled = false;

  const oldScoreDiv = document.querySelector('.grammar-score-result');
  if (oldScoreDiv) oldScoreDiv.remove();
}

function checkGrammarExercises() {
  const topicTitle = document.getElementById('grammarTitle')?.textContent;
  if (!grammarTopics) return;

  const topic = grammarTopics.find((t) => t.title === topicTitle);
  if (!topic) return;

  let allCorrect = true;
  let score = 0;

  topic.exercises.forEach((exercise, exerciseIndex) => {
    const radioButtons = document.querySelectorAll(`input[name="exercise_${exerciseIndex}"]`);
    let answered = false;
    let correct = false;

    radioButtons.forEach((radio, radioIndex) => {
      if (radio.checked) {
        answered = true;
        correct = radioIndex === exercise.correct;
        radio.parentElement.classList.add(correct ? 'text-green-700' : 'text-red-700');
        if (correct) score++;
      }
      radio.disabled = true;
    });

    if (!answered || !correct) allCorrect = false;

    if (answered) {
      const explanationDiv = document.createElement('div');
      explanationDiv.className = `mt-2 p-2 rounded text-sm ${correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`;
      explanationDiv.innerHTML = `<strong>${correct ? 'Correct!' : 'Incorrect.'}</strong> ${exercise.explanation}`;
      const exerciseDiv = document.querySelector(`input[name="exercise_${exerciseIndex}"]`).closest('.mb-4');
      exerciseDiv.appendChild(explanationDiv);
    }
  });

  const scoreDiv = document.createElement('div');
  scoreDiv.className = `mt-4 p-3 rounded grammar-score-result ${allCorrect ? 'bg-green-100' : 'bg-yellow-100'}`;
  scoreDiv.innerHTML = `<p class="font-medium">Score: ${score}/${topic.exercises.length} ${allCorrect ? '- Perfect!' : ''}</p>`;

  const retryBtn = document.createElement('button');
  retryBtn.className = 'mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm';
  retryBtn.textContent = 'Try Again';
  retryBtn.addEventListener('click', () => displayGrammarTopic(topicTitle));

  scoreDiv.appendChild(retryBtn);

  const checkBtn = document.getElementById('checkGrammarBtn');
  if (checkBtn) {
    checkBtn.parentElement.appendChild(scoreDiv);
    checkBtn.disabled = true;
  }

  if (allCorrect && !completedGrammar.includes(topicTitle)) {
    completedGrammar.push(topicTitle);
    saveProgress();

    document.querySelectorAll('a').forEach((link) => {
      if (link.textContent.includes(topicTitle) && !link.innerHTML.includes('fa-check-circle')) {
        link.innerHTML += ` <i class="fas fa-check-circle text-green-500 ml-2"></i>`;
      }
    });
  }
}

// Writing functionality
function initializeWriting() {
  populateWritingPrompts();
  populateSavedEssays();

  const elements = {
    startTimerBtn: document.getElementById('startTimerBtn'),
    saveEssayBtn: document.getElementById('saveEssayBtn'),
    submitEssayBtn: document.getElementById('submitEssayBtn'),
    writingResponse: document.getElementById('writingResponse'),
  };

  if (!Object.values(elements).every((el) => el)) {
    console.error('Writing elements missing');
    return;
  }

  elements.startTimerBtn.addEventListener('click', toggleTimer);
  elements.saveEssayBtn.addEventListener('click', saveCurrentEssay);
  elements.submitEssayBtn.addEventListener('click', submitEssayForFeedback);
  elements.writingResponse.addEventListener('input', updateWordCount);
}

function populateWritingPrompts() {
  const container = document.getElementById('writingPrompts');
  if (!container) return;

  if (!writingPrompts) return;

  container.innerHTML = '';

  writingPrompts.forEach((prompt) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'text-blue-600 hover:underline flex items-center';
    link.innerHTML = `<i class="fas fa-pen mr-2"></i> ${prompt.title}`;

    let badgeColor;
    switch (prompt.level) {
      case 'beginner':
        badgeColor = 'bg-green-100 text-green-800';
        break;
      case 'intermediate':
        badgeColor = 'bg-blue-100 text-blue-800';
        break;
      case 'advanced':
        badgeColor = 'bg-purple-100 text-purple-800';
        break;
      default:
        badgeColor = 'bg-gray-100 text-gray-800';
    }

    link.innerHTML += ` <span class="text-xs font-medium px-2 py-1 rounded ml-2 ${badgeColor}">${prompt.level}</span>`;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      displayWritingPrompt(prompt.id);
    });

    listItem.appendChild(link);
    container.appendChild(listItem);
  });
}

function populateSavedEssays() {
  const container = document.getElementById('savedEssays');
  if (!container) return;

  container.innerHTML = '';

  if (!savedEssays || savedEssays.length === 0) {
    container.innerHTML = '<li class="text-gray-500">No saved essays yet</li>';
    return;
  }

  savedEssays.forEach((essay, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'text-blue-600 hover:underline flex items-center';
    link.innerHTML = `<i class="fas fa-file-alt mr-2"></i> ${essay.promptTitle || 'Untitled Essay'}`;

    const date = new Date(essay.date).toLocaleDateString();
    link.innerHTML += ` <span class="text-xs font-medium px-2 py-1 rounded ml-2 bg-gray-100 text-gray-800">${date}</span>`;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      loadSavedEssay(index);
    });

    listItem.appendChild(link);
    container.appendChild(listItem);
  });
}

function displayWritingPrompt(promptId) {
  if (!writingPrompts) return;

  const prompt = writingPrompts.find((p) => p.id === promptId);
  if (!prompt) return;

  const writingContent = document.getElementById('writingContent');
  if (!writingContent) return;

  writingContent.classList.remove('hidden');
  document.getElementById('writingTitle').textContent = prompt.title;
  document.getElementById('writingLevel').textContent = prompt.level;
  document.getElementById('writingTime').textContent = prompt.time;
  document.getElementById('writingWords').textContent = prompt.words;
  document.getElementById('writingInstructions').textContent = prompt.instructions;

  const writingResponse = document.getElementById('writingResponse');
  if (writingResponse) {
    writingResponse.value = '';
    updateWordCount();
  }

  const feedbackSection = document.getElementById('feedbackSection');
  if (feedbackSection) feedbackSection.classList.add('hidden');

  stopTimer();
  const timerDisplay = document.getElementById('timerDisplay');
  const startTimerBtn = document.getElementById('startTimerBtn');
  if (timerDisplay) timerDisplay.classList.add('hidden');
  if (startTimerBtn) {
    startTimerBtn.innerHTML = '<i class="fas fa-clock mr-1"></i> Start Timer';
    startTimerBtn.classList.replace('bg-red-600', 'bg-blue-600');
  }
}

function updateWordCount() {
  const textarea = document.getElementById('writingResponse');
  const wordCountDisplay = document.getElementById('currentWordCount');
  if (!textarea || !wordCountDisplay) return;

  const text = textarea.value.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  wordCountDisplay.textContent = wordCount;

  const targetWords = parseInt(document.getElementById('writingWords').textContent, 10) || 0;
  wordCountDisplay.classList.remove('text-red-600', 'text-yellow-600', 'text-green-600');
  if (targetWords && wordCount >= targetWords) {
    wordCountDisplay.classList.add('text-green-600');
  } else if (targetWords && wordCount >= targetWords * 0.7) {
    wordCountDisplay.classList.add('text-yellow-600');
  } else {
    wordCountDisplay.classList.add('text-red-600');
  }
}

let timerInterval = null;
let timerSeconds = 0;

function toggleTimer() {
  const timerButton = document.getElementById('startTimerBtn');
  const timerDisplay = document.getElementById('timerDisplay');
  if (!timerButton || !timerDisplay) return;

  if (timerInterval) {
    stopTimer();
    timerButton.innerHTML = '<i class="fas fa-clock mr-1"></i> Start Timer';
    timerButton.classList.replace('bg-red-600', 'bg-blue-600');
  } else {
    timerDisplay.classList.remove('hidden');
    const targetMinutes = parseInt(document.getElementById('writingTime').textContent, 10) || 30;
    timerSeconds = targetMinutes * 60;

    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();
      if (timerSeconds <= 0) {
        stopTimer();
        alert('Time is up!');
      }
    }, 1000);

    timerButton.innerHTML = '<i class="fas fa-stop mr-1"></i> Stop Timer';
    timerButton.classList.replace('bg-blue-600', 'bg-red-600');
  }
}

function updateTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  if (!display) return;

  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  display.classList.remove('bg-yellow-100', 'text-yellow-800', 'bg-red-100', 'text-red-800');
  if (timerSeconds <= 60) {
    display.classList.add('bg-red-100', 'text-red-800');
  } else if (timerSeconds <= 180) {
    display.classList.add('bg-yellow-100', 'text-yellow-800');
  }
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function saveCurrentEssay() {
  const title = document.getElementById('writingTitle')?.textContent;
  const text = document.getElementById('writingResponse')?.value;
  if (!title || !text?.trim()) {
    alert('Please write something before saving.');
    return;
  }

  const essayData = {
    promptTitle: title,
    text: text,
    date: new Date().toISOString(),
    wordCount: text.trim().split(/\s+/).length,
  };

  if (saveEssay) {
    savedEssays.push(essayData);
    saveEssay(essayData);
    populateSavedEssays();
    alert('Essay saved successfully!');
  }
}

function loadSavedEssay(index) {
  if (index < 0 || index >= savedEssays.length) return;

  const essay = savedEssays[index];
  const writingContent = document.getElementById('writingContent');
  if (!writingContent) return;

  writingContent.classList.remove('hidden');
  document.getElementById('writingTitle').textContent = essay.promptTitle || 'Saved Essay';
  document.getElementById('writingLevel').textContent = 'N/A';
  document.getElementById('writingTime').textContent = 'N/A';
  document.getElementById('writingWords').textContent = 'N/A';
  document.getElementById('writingInstructions').textContent = 'This is a saved essay.';

  const writingResponse = document.getElementById('writingResponse');
  if (writingResponse) {
    writingResponse.value = essay.text;
    updateWordCount();
  }

  const feedbackSection = document.getElementById('feedbackSection');
  if (feedbackSection) feedbackSection.classList.add('hidden');

  stopTimer();
  const timerDisplay = document.getElementById('timerDisplay');
  if (timerDisplay) timerDisplay.classList.add('hidden');
}

function submitEssayForFeedback() {
  const text = document.getElementById('writingResponse')?.value;
  if (!text?.trim()) {
    alert('Please write something before submitting.');
    return;
  }

  const level = document.getElementById('writingLevel')?.textContent || 'N/A';
  const wordCount = text.trim().split(/\s+/).length;
  const targetWords = parseInt(document.getElementById('writingWords').textContent, 10) || 0;

  let score = 0;
  if (targetWords && targetWords !== 'N/A') {
    if (wordCount >= targetWords) {
      score = 80 + Math.min(20, Math.floor((wordCount - targetWords) / targetWords * 20));
    } else {
      score = Math.floor((wordCount / targetWords) * 80);
    }
  } else {
    score = Math.floor(Math.random() * 30) + 70;
  }

  if (generateFeedback) {
    const feedback = generateFeedback(text, level, score);
    const feedbackSection = document.getElementById('feedbackSection');
    const feedbackContent = document.getElementById('feedbackContent');

    if (feedbackSection && feedbackContent) {
      feedbackContent.textContent = feedback;
      feedbackSection.classList.remove('hidden');
      feedbackSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Speaking functionality
function initializeSpeaking() {
  populateSpeakingExercises();
  populatePronunciationExercises();
  attachSpeakingEventListeners();
}

function populateSpeakingExercises() {
  const container = document.getElementById('speakingExercises');
  if (!container) return;

  if (!speakingExercises) return;

  container.innerHTML = '';

  speakingExercises.forEach((exercise) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'text-blue-600 hover:underline flex items-center';
    link.innerHTML = `<i class="fas fa-microphone mr-2"></i> ${exercise.title}`;

    let badgeColor;
    switch (exercise.level) {
      case 'beginner':
        badgeColor = 'bg-green-100 text-green-800';
        break;
      case 'intermediate':
        badgeColor = 'bg-blue-100 text-blue-800';
        break;
      case 'advanced':
        badgeColor = 'bg-purple-100 text-purple-800';
        break;
      default:
        badgeColor = 'bg-gray-100 text-gray-800';
    }

    link.innerHTML += ` <span class="text-xs font-medium px-2 py-1 rounded ml-2 ${badgeColor}">${exercise.level}</span>`;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      displaySpeakingExercise(exercise.id);
    });

    listItem.appendChild(link);
    container.appendChild(listItem);
  });
}

function populatePronunciationExercises() {
  const container = document.getElementById('pronunciationExercises');
  if (!container) return;

  if (!pronunciationExercises) return;

  container.innerHTML = '';

  pronunciationExercises.forEach((exercise) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'text-blue-600 hover:underline flex items-center';
    link.innerHTML = `<i class="fas fa-volume-up mr-2"></i> ${exercise.title}`;

    let badgeColor;
    switch (exercise.level) {
      case 'beginner':
        badgeColor = 'bg-green-100 text-green-800';
        break;
      case 'intermediate':
        badgeColor = 'bg-blue-100 text-blue-800';
        break;
      case 'advanced':
        badgeColor = 'bg-purple-100 text-purple-800';
        break;
      default:
        badgeColor = 'bg-gray-100 text-gray-800';
    }

    link.innerHTML += ` <span class="text-xs font-medium px-2 py-1 rounded ml-2 ${badgeColor}">${exercise.level}</span>`;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      displayPronunciationExercise(exercise.id);
    });

    listItem.appendChild(link);
    container.appendChild(listItem);
  });
}

function displaySpeakingExercise(exerciseId) {
  if (!speakingExercises) return;

  const exercise = speakingExercises.find((ex) => ex.id === exerciseId);
  if (!exercise) return;

  const speakingContent = document.getElementById('speakingContent');
  if (!speakingContent) return;

  speakingContent.classList.remove('hidden');
  document.getElementById('speakingTitle').textContent = exercise.title;
  document.getElementById('speakingLevel').textContent = exercise.level;
  document.getElementById('speakingTime').textContent = exercise.time;
  document.getElementById('speakingInstructions').textContent = exercise.instructions;
  document.getElementById('exampleText').textContent = exercise.example;

  resetRecordingInterface();
  const pronunciationFeedback = document.getElementById('pronunciationFeedback');
  if (pronunciationFeedback) pronunciationFeedback.classList.add('hidden');

  attachSpeakingEventListeners();
}

function displayPronunciationExercise(exerciseId) {
  if (!pronunciationExercises) return;

  const exercise = pronunciationExercises.find((ex) => ex.id === exerciseId);
  if (!exercise) return;

  let content = `
    <div class="space-y-4">
      <h3 class="text-xl font-bold">${exercise.title}</h3>
      <div><span class="font-medium">Level:</span> ${exercise.level}</div>
      <div><span class="font-medium">Instructions:</span> ${exercise.instructions}</div>
  `;

  if (exercise.exercises[0].sound) {
    exercise.exercises.forEach((soundEx) => {
      content += `
        <div class="mb-4 p-3 bg-gray-50 rounded">
          <div class="font-bold text-lg mb-1">Sound: ${soundEx.sound}</div>
          <div class="mb-2 italic">${soundEx.example}</div>
          <div class="mb-2"><span class="font-medium">Focus:</span> ${soundEx.focus}</div>
          <div><span class="font-medium">Tips:</span> ${soundEx.tips}</div>
          <button class="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
                  onclick="readPhraseAloud('${soundEx.example.replace(/'/g, "\\'")}')">
            <i class="fas fa-play mr-1"></i> Listen
          </button>
        </div>
      `;
    });
  } else if (exercise.exercises[0].virelangue) {
    exercise.exercises.forEach((twister) => {
      content += `
        <div class="mb-4 p-3 bg-gray-50 rounded">
          <div class="font-bold text-lg mb-1">Virelangue:</div>
          <div class="mb-2 italic">${twister.virelangue}</div>
          <div class="mb-2"><span class="font-medium">Focus:</span> ${twister.focus}</div>
          <div><span class="font-medium">Tips:</span> ${twister.tips}</div>
          <button class="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
                  onclick="readPhraseAloud('${twister.virelangue.replace(/'/g, "\\'")}')">
            <i class="fas fa-play mr-1"></i> Listen
          </button>
        </div>
      `;
    });
  } else if (exercise.exercises[0].type) {
    exercise.exercises.forEach((typeEx) => {
      content += `
        <div class="mb-4 p-3 bg-gray-50 rounded">
          <div class="font-bold text-lg mb-1">${typeEx.type}</div>
      `;
      if (typeEx.pairs) {
        content += `
          <div class="mb-2"><span class="font-medium">Word pairs:</span>
            <div class="ml-4">
              ${typeEx.pairs.map((pair) => `<div>${pair} <button class="text-blue-600 hover:text-blue-800 text-sm" onclick="readPhraseAloud('${pair.replace(/'/g, "\\'")}')"><i class="fas fa-play"></i></button></div>`).join('')}
            </div>
          </div>
        `;
      }
      if (typeEx.sets) {
        content += `
          <div class="mb-2"><span class="font-medium">Word sets:</span>
            <div class="ml-4">
              ${typeEx.sets.map((set) => `<div>${set} <button class="text-blue-600 hover:text-blue-800 text-sm" onclick="readPhraseAloud('${set.replace(/'/g, "\\'")}')"><i class="fas fa-play"></i></button></div>`).join('')}
            </div>
          </div>
        `;
      }
      if (typeEx.examples) {
        content += `
          <div class="mb-2"><span class="font-medium">Examples:</span>
            <div class="ml-4">
              ${typeEx.examples.map((ex) => `<div>${ex} <button class="text-blue-600 hover:text-blue-800 text-sm" onclick="readPhraseAloud('${ex.replace(/'/g, "\\'")}')"><i class="fas fa-play"></i></button></div>`).join('')}
            </div>
          </div>
        `;
      }
      if (typeEx.phrases) {
        content += `
          <div class="mb-2"><span class="font-medium">Practice phrases:</span>
            <div class="ml-4">
              ${typeEx.phrases.map((phrase) => `
                <div class="mb-1">${phrase}
                  <button class="ml-2 text-blue-600 hover:text-blue-800 text-sm" onclick="readPhraseAloud('${phrase.replace(/'/g, "\\'")}')">
                    <i class="fas fa-play"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }
      content += `
          <div><span class="font-medium">Tips:</span> ${typeEx.tips}</div>
        </div>
      `;
    });
  }

  content += `</div>`;

  const speakingContent = document.getElementById('speakingContent');
  if (speakingContent) {
    speakingContent.classList.remove('hidden');
    speakingContent.innerHTML = content;
  }

  resetRecordingInterface();
  attachSpeakingEventListeners();

  window.readPhraseAloud = (phrase) => speakText(phrase);
}

function attachSpeakingEventListeners() {
  const elements = {
    playExampleBtn: document.getElementById('playExampleBtn'),
    startRecordingBtn: document.getElementById('startRecordingBtn'),
    retryRecordingBtn: document.getElementById('retryRecordingBtn'),
    submitRecordingBtn: document.getElementById('submitRecordingBtn'),
  };

  if (elements.playExampleBtn) {
    elements.playExampleBtn.removeEventListener('click', playExampleAudio);
    elements.playExampleBtn.addEventListener('click', playExampleAudio);
  }

  if (elements.startRecordingBtn) {
    elements.startRecordingBtn.removeEventListener('click', toggleRecording);
    elements.startRecordingBtn.addEventListener('click', toggleRecording);
  }

  if (elements.retryRecordingBtn) {
    elements.retryRecordingBtn.removeEventListener('click', resetRecordingInterface);
    elements.retryRecordingBtn.addEventListener('click', resetRecordingInterface);
  }

  if (elements.submitRecordingBtn) {
    elements.submitRecordingBtn.removeEventListener('click', submitRecording);
    elements.submitRecordingBtn.addEventListener('click', submitRecording);
  }
}

function playExampleAudio() {
  const exampleText = document.getElementById('exampleText')?.textContent;
  if (!exampleText) return;

  speakText(exampleText);
}

function toggleRecording() {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    stopRecordingTimer();

    const startRecordingBtn = document.getElementById('startRecordingBtn');
    if (startRecordingBtn) {
      startRecordingBtn.innerHTML = '<i class="fas fa-microphone mr-1"></i> Start Recording';
      startRecordingBtn.classList.replace('bg-gray-600', 'bg-red-600');
    }
  } else {
    startRecording();
  }
}

function startRecording() {
  if (!navigator.mediaDevices) {
    alert('Audio recording not supported.');
    return;
  }

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      audioChunks = [];
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.addEventListener('dataavailable', (event) => {
        audioChunks.push(event.data);
      });

      mediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        recordedAudio = URL.createObjectURL(audioBlob);

        const audioPlayer = document.getElementById('audioPlayer');
        const audioElement = document.getElementById('recordedAudio');
        if (audioPlayer && audioElement) {
          audioElement.src = recordedAudio;
          audioPlayer.classList.remove('hidden');
        }

        const retryBtn = document.getElementById('retryRecordingBtn');
        const submitBtn = document.getElementById('submitRecordingBtn');
        if (retryBtn) retryBtn.classList.remove('hidden');
        if (submitBtn) submitBtn.classList.remove('hidden');

        stream.getTracks().forEach((track) => track.stop());
      });

      mediaRecorder.start();
      startRecordingTimer();

      const startBtn = document.getElementById('startRecordingBtn');
      if (startBtn) {
        startBtn.innerHTML = '<i class="fas fa-stop mr-1"></i> Stop Recording';
        startBtn.classList.replace('bg-red-600', 'bg-gray-600');
      }
    })
    .catch((err) => {
      console.error('Microphone access error:', err);
      alert('Error accessing microphone. Please check permissions.');
    });
}

function startRecordingTimer() {
  const timerDisplay = document.getElementById('recordingTimer');
  if (!timerDisplay) return;

  timerDisplay.classList.remove('hidden');
  let seconds = 0;
  recordingTimer = setInterval(() => {
    seconds++;
    timerDisplay.textContent = `${seconds}s`;

    const timeLimit = parseInt(document.getElementById('speakingTime').textContent, 10) || 60;
    timerDisplay.classList.remove('bg-yellow-100', 'text-yellow-800', 'bg-red-100', 'text-red-800');
    if (seconds >= timeLimit) {
      timerDisplay.classList.add('bg-red-100', 'text-red-800');
    } else if (seconds >= timeLimit * 0.8) {
      timerDisplay.classList.add('bg-yellow-100', 'text-yellow-800');
    }
  }, 1000);
}

function stopRecordingTimer() {
  if (recordingTimer) {
    clearInterval(recordingTimer);
    recordingTimer = null;
  }

  const timerDisplay = document.getElementById('recordingTimer');
  if (timerDisplay) {
    timerDisplay.classList.add('hidden');
    timerDisplay.textContent = '0s';
    timerDisplay.classList.remove('bg-yellow-100', 'text-yellow-800', 'bg-red-100', 'text-red-800');
  }
}

function resetRecordingInterface() {
  const elements = {
    audioPlayer: document.getElementById('audioPlayer'),
    retryRecordingBtn: document.getElementById('retryRecordingBtn'),
    submitRecordingBtn: document.getElementById('submitRecordingBtn'),
    startRecordingBtn: document.getElementById('startRecordingBtn'),
    pronunciationFeedback: document.getElementById('pronunciationFeedback'),
  };

  if (elements.audioPlayer) elements.audioPlayer.classList.add('hidden');
  if (elements.retryRecordingBtn) elements.retryRecordingBtn.classList.add('hidden');
  if (elements.submitRecordingBtn) elements.submitRecordingBtn.classList.add('hidden');
  if (elements.pronunciationFeedback) elements.pronunciationFeedback.classList.add('hidden');

  stopRecordingTimer();

  if (elements.startRecordingBtn) {
    elements.startRecordingBtn.innerHTML = '<i class="fas fa-microphone mr-1"></i> Start Recording';
    elements.startRecordingBtn.classList.replace('bg-gray-600', 'bg-red-600');
  }

  recordedAudio = null;
}

function submitRecording() {
  if (!recordedAudio) {
    alert('No recording found. Please record your speech first.');
    return;
  }

  const level = document.getElementById('speakingLevel')?.textContent || 'N/A';
  if (generatePronunciationFeedback) {
    const feedback = generatePronunciationFeedback(level);

    const elements = {
      pronunciationFeedback: document.getElementById('pronunciationFeedback'),
      detailedFeedback: document.getElementById('detailedFeedback'),
      scoreBar: document.getElementById('pronunciationScoreBar'),
      scoreDisplay: document.getElementById('pronunciationScore'),
    };

    if (Object.values(elements).every((el) => el)) {
      elements.detailedFeedback.textContent = feedback.detailedFeedback;
      elements.scoreDisplay.textContent = `${feedback.score}%`;
      elements.scoreBar.style.width = `${feedback.score}%`;
      elements.scoreBar.textContent = `${feedback.score}%`;

      elements.scoreBar.classList.remove('bg-yellow-600', 'bg-red-600', 'bg-green-600');
      if (feedback.score >= 80) {
        elements.scoreBar.classList.add('bg-green-600');
      } else if (feedback.score >= 70) {
        elements.scoreBar.classList.add('bg-yellow-600');
      } else {
        elements.scoreBar.classList.add('bg-red-600');
      }

      elements.pronunciationFeedback.classList.remove('hidden');
      elements.pronunciationFeedback.scrollIntoView({ behavior: 'smooth' });
    }

    const title = document.getElementById('speakingTitle')?.textContent || 'Untitled';
    const practiceData = {
      title: title,
      level: level,
      score: feedback.score,
      date: new Date().toISOString(),
    };

    if (saveSpeakingPractice) {
      saveSpeakingPractice(practiceData);
    }
  }
}

// Progress tracking
function updateProgress() {
  const elements = {
    knownCount: document.getElementById('knownCount'),
    unknownCount: document.getElementById('unknownCount'),
    totalCount: document.getElementById('totalCount'),
    totalCountUnknown: document.getElementById('totalCountUnknown'),
    knownProgress: document.getElementById('knownProgress'),
    unknownProgress: document.getElementById('unknownProgress'),
  };

  if (!Object.values(elements).every((el) => el)) return;

  const totalWords = filteredVocabulary?.length || 0;
  const knownInCategory = filteredVocabulary?.filter((word) => knownWords.includes(word.french)).length || 0;
  const unknownInCategory = filteredVocabulary?.filter((word) => unknownWords.includes(word.french)).length || 0;

  elements.knownCount.textContent = knownInCategory;
  elements.unknownCount.textContent = unknownInCategory;
  elements.totalCount.textContent = totalWords;
  elements.totalCountUnknown.textContent = totalWords;

  const knownPercent = totalWords > 0 ? Math.round((knownInCategory / totalWords) * 100) : 0;
  const unknownPercent = totalWords > 0 ? Math.round((unknownInCategory / totalWords) * 100) : 0;

  elements.knownProgress.style.width = `${knownPercent}%`;
  elements.knownProgress.textContent = `${knownPercent}%`;
  elements.unknownProgress.style.width = `${unknownPercent}%`;
  elements.unknownProgress.textContent = `${unknownPercent}%`;
}

function saveProgress() {
  try {
    if (saveVocabularyProgress) saveVocabularyProgress(knownWords, unknownWords);
    if (saveReadingProgress) saveReadingProgress(completedPassages);
    if (saveGrammarProgress) saveGrammarProgress(completedGrammar);
    console.log('Progress saved successfully');
  } catch (error) {
    console.error('Error saving progress:', error);
    alert('Failed to save progress. Please try again.');
  }
}

function loadProgress() {
  try {
    if (loadVocabularyProgress) {
      const vocabProgress = loadVocabularyProgress();
      if (vocabProgress) {
        knownWords = vocabProgress.knownWords || [];
        unknownWords = vocabProgress.unknownWords || [];
      }
    }

    if (loadReadingProgress) {
      const readingProgress = loadReadingProgress();
      if (readingProgress) completedPassages = readingProgress;
    }

    if (loadGrammarProgress) {
      const grammarProgress = loadGrammarProgress();
      if (grammarProgress) completedGrammar = grammarProgress;
    }

    if (loadSavedEssays) savedEssays = loadSavedEssays() || [];
    if (loadSavedPractices) savedSpeakingPractices = loadSavedPractices() || [];
  } catch (error) {
    console.error('Error loading progress:', error);
  }
}

// Debugging
window.vocabLoaded = vocabulary && vocabulary.length > 0;
window.readingLoaded = readingPassages && readingPassages.length > 0;
window.grammarLoaded = grammarTopics && grammarTopics.length > 0;
window.writingLoaded = writingPrompts && writingPrompts.length > 0;
window.speakingLoaded = speakingExercises && speakingExercises.length > 0;

console.log('Modules loaded:', {
  vocabulary: window.vocabLoaded ? `${vocabulary.length} words` : 'Failed',
  reading: window.readingLoaded ? `${readingPassages.length} passages` : 'Failed',
  grammar: window.grammarLoaded ? `${grammarTopics.length} topics` : 'Failed',
  writing: window.writingLoaded ? `${writingPrompts.length} prompts` : 'Failed',
  speaking: window.speakingLoaded ? `${speakingExercises.length} exercises` : 'Failed',
});
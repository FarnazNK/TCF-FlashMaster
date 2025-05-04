# TCF French Exam Preparation

## Overview
The TCF French Exam Preparation is a web-based application designed to help users improve their French language skills for the Test de Connaissance du Français (TCF) exam. The app includes interactive features such as flashcards for vocabulary practice, reading comprehension passages, grammar exercises, writing prompts, speaking practice, and a search tool to look up words. Progress is saved locally using `localStorage` to track known/unknown words, completed reading passages, and grammar exercises.

### Features
- **Flashcards**: Practice French vocabulary with categorized flashcards, mark words as known or unknown, and hear pronunciations using browser speech synthesis.
- **Reading Comprehension**: Read passages at different difficulty levels (Beginner, Elementary, Intermediate, Upper Intermediate) and answer comprehension questions.
- **Grammar**: Study French grammar topics with explanations, examples, and practice exercises for various proficiency levels.
- **Writing**: Practice writing skills with guided prompts, timed exercises, and automated feedback.
- **Speaking**: Improve pronunciation and speaking abilities with a variety of exercises and audio examples.
- **Search**: Search for vocabulary words in French or English, with results displayed by category.
- **Progress Tracking**: Monitor vocabulary mastery, completed reading passages, and grammar exercises, with progress saved locally.
- **Responsive Design**: Built with Tailwind CSS for a clean, mobile-friendly interface.

## Project Structure
```
tcf/
├── index.html              # Main HTML file
├── main.js                 # Core application logic
├── debug-script.js         # Module loading checker
├── vocabulary-module.js    # Vocabulary data and utility functions
├── reading-module.js       # Reading passages and related functions
├── grammar-module.js       # Grammar topics and exercises
├── writing-module.js       # Writing prompts and feedback systems
├── speaking-module.js      # Speaking exercises and pronunciation practice
└── README.md               # Project documentation
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) that supports ES modules, Web Speech API, and `localStorage`.
- A local development server to serve the files (required for ES modules).

## Setup Instructions
1. **Clone or Download the Repository**:
   - Download the project files or clone the repository to your local machine.
   - Ensure all files are in the same directory.

2. **Set Up a Local Server**:
   - ES modules require a server (not `file://`). Use one of the following:
     - **Node.js with `http-server`**:
       ```bash
       npm install -g http-server
       cd path/to/tcf
       http-server
       ```
       Open `http://localhost:8080` in your browser.
     - **Python**:
       ```bash
       cd path/to/tcf
       python -m http.server 8000
       ```
       Open `http://localhost:8000`.

3. **Verify Module Loading**:
   - The app displays a "Module Loading Status" message on load. It should show "All modules loaded successfully!" if everything is set up correctly.
   - Open the browser's developer tools (F12 → Console) to check for any module loading errors.

## Usage
1. **Access the App**:
   - Navigate to `http://localhost:8000` (or the appropriate port) after starting the server.
   - The app loads with the "Flashcards" tab active by default.

2. **Flashcards**:
   - Select a vocabulary category (e.g., Basic, Daily Life, Travel) from the dropdown.
   - Click the flashcard to toggle between French and English.
   - Use the "Pronounce" button to hear the French word.
   - Mark words as "Know it" or "Don't know" to track progress.
   - Navigate with "Previous" and "Next" buttons.

3. **Reading**:
   - Browse passages by level (Beginner, Elementary, Intermediate, Upper Intermediate).
   - Click a passage title to view its text, vocabulary, and comprehension questions.
   - Use the "Read Aloud" button to hear the passage read in French.
   - Answer questions and click "Check Answers" to see your score.
   - Perfect scores mark passages as completed, indicated by a green checkmark.

4. **Grammar**:
   - Select grammar topics organized by level (Beginner, Intermediate, Advanced).
   - View explanations, examples, and practice exercises for each topic.
   - Complete exercises and check your answers to mark topics as completed.

5. **Writing**:
   - Choose from writing prompts based on difficulty level.
   - Use the timer to practice within time constraints similar to the real exam.
   - Submit your writing for automated feedback or save drafts for later.

6. **Speaking**:
   - Practice with various speaking exercises and pronunciation drills.
   - Listen to example audio and record your own responses.
   - Receive feedback on your pronunciation (simulated in this version).

7. **Search**:
   - Enter a French or English word in the search bar.
   - View results with category badges and pronunciation guides.
   - Use the pronunciation button to hear any word in the results.

## Troubleshooting
- **Module Loading Issues**:
  - Ensure all JavaScript files are in the same directory.
  - Verify filenames match exactly with what the code expects (case-sensitive).
  - Serve the app via HTTP server, not by opening the files directly.
  - Check the browser console (F12 → Console) for specific errors.
  - Look for CORS errors which indicate the files need to be served from a proper server.
  - If you see successful module loading in the console but the UI still shows errors, try refreshing the page or waiting a bit longer for initialization to complete.

- **Debug Specific Module Issues**:
  - The debug-script.js file will attempt to identify which modules are failing to load.
  - Common issues include:
    - Case sensitivity in filenames (e.g., Speaking-Module.js vs. speaking-module.js)
    - Missing or incorrectly named files
    - Path resolution problems
    - Missing functions or properties within the modules

- **Pronunciation Not Working**:
  - Verify that your browser supports the Web Speech API.
  - Check if your browser has French voices installed.
  - Some browsers require user interaction before allowing speech synthesis.

- **Progress Not Saving**:
  - Ensure `localStorage` is not blocked (check privacy settings and private browsing mode).
  - Verify that the browser has permissions to use local storage.

- **UI Issues**:
  - Confirm that Tailwind CSS and Font Awesome are loaded (requires internet access).
  - Try clearing your browser cache or using a different browser.

## Dependencies
- **Tailwind CSS**: Included via CDN for styling.
- **Font Awesome**: Included via CDN for icons.
- No additional installations are required as dependencies are loaded from CDNs.

## Notes
- The app uses ES6 modules which require serving from an HTTP server, not directly from the file system.
- Progress is stored in `localStorage`, so data is specific to the browser and device being used.
- Pronunciation quality depends on the browser's speech synthesis capabilities and available French voices.

## Future Improvements
- Add more vocabulary, reading passages, and grammar exercises.
- Implement user accounts for cloud-based progress syncing.
- Add audio files for pronunciation as a fallback for browsers without speech synthesis.
- Expand speaking practice with more accurate pronunciation assessment.
- Add interactive listening exercises for comprehensive TCF preparation.

## License
This project is for educational purposes and not licensed for commercial use. Feel free to modify and use it for personal study.

## Contact
For issues or suggestions, please open an issue on the project repository (if hosted) or contact the developer directly.

---
*Last updated: May 4, 2025*

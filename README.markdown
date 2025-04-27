# TCF French Exam Preparation

## Overview
The TCF French Exam Preparation is a web-based application designed to help users improve their French language skills for the Test de Connaissance du Français (TCF) exam. The app includes interactive features such as flashcards for vocabulary practice, reading comprehension passages with questions, and a search tool to look up words. Progress is saved locally using `localStorage` to track known/unknown words and completed reading passages.

### Features
- **Flashcards**: Practice French vocabulary with categorized flashcards, mark words as known or unknown, and hear pronunciations using browser speech synthesis.
- **Reading Comprehension**: Read passages at different difficulty levels (Beginner, Elementary, Intermediate, Upper Intermediate) and answer comprehension questions.
- **Search**: Search for vocabulary words in French or English, with results displayed by category.
- **Progress Tracking**: Monitor vocabulary mastery and reading completion, with progress saved locally.
- **Responsive Design**: Built with Tailwind CSS for a clean, mobile-friendly interface.

## Project Structure
```
tcf/
├── index.html          # Main HTML file
├── main.js             # Core application logic
├── reading-module.js   # Reading passages and related functions
├── vocabulary-module.js # Vocabulary data and utility functions
└── README.md           # Project documentation
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) that supports ES modules and `localStorage`.
- A local development server to serve the files (required for ES modules).

## Setup Instructions
1. **Clone or Download the Repository**:
   - Download the project files or clone the repository to your local machine.
   - Ensure all files (`index.html`, `main.js`, `reading-module.js`, `vocabulary-module.js`) are in the same directory.

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
   - Open the browser’s developer tools (F12 → Console) to check for errors.
   - The app displays a "Module Loading Status" message on load. It should show "All modules loaded successfully!" if everything is set up correctly.

## Usage
1. **Access the App**:
   - Navigate to `http://localhost:8080` (or the appropriate port) after starting the server.
   - The app loads with the "Flashcards" tab active by default.

2. **Flashcards**:
   - Select a vocabulary category (e.g., Basic, Daily Life) from the dropdown.
   - Click the flashcard to toggle between French and English.
   - Use the "Pronounce" button to hear the French word (requires browser speech synthesis support).
   - Mark words as "Know it" or "Don’t know" to track progress.
   - Navigate with "Previous" and "Next" buttons.

3. **Reading**:
   - Browse passages by level (Beginner, Elementary, Intermediate, Upper Intermediate).
   - Click a passage title to view its text, vocabulary, and comprehension questions.
   - Answer questions and click "Check Answers" to see your score.
   - Perfect scores mark passages as completed, indicated by a green checkmark.

4. **Search**:
   - Enter a French or English word in the search bar.
   - View results with category badges (e.g., Basic, Travel).

5. **Progress**:
   - The "Progress" section shows the number and percentage of known/unknown words in the current category.
   - Progress is saved automatically to `localStorage` and persists across sessions.

## Troubleshooting
- **Module Loading Issues**:
  - Ensure all JavaScript files are in the same directory.
  - Serve the app via `http://` or `https://`, not `file://`.
  - Check the browser console (F12 → Console) for errors like 404 or CORS issues.
- **Pronunciation Not Working**:
  - Verify that your browser supports the `SpeechSynthesis` API and has French voices installed.
  - Test in a modern browser like Chrome.
- **Progress Not Saving**:
  - Ensure `localStorage` is not blocked (e.g., by private browsing mode).
- **UI Issues**:
  - Confirm that Tailwind CSS and Font Awesome are loaded (requires internet access).

## Dependencies
- **Tailwind CSS**: Included via CDN for styling.
- **Font Awesome**: Included via CDN for icons.
- No additional installations are required as dependencies are loaded from CDNs.

## Notes
- The app uses `localStorage` to save progress, so data is stored locally in the browser and not synced across devices.
- Pronunciation quality depends on the browser’s speech synthesis capabilities and available French voices.
- The app is designed for individual study and does not require a backend server.

## Future Improvements
- Add more vocabulary and reading passages.
- Implement user accounts for cloud-based progress syncing.
- Add audio files for pronunciation as a fallback for browsers without speech synthesis.
- Include writing and listening exercises for comprehensive TCF preparation.

## License
This project is for educational purposes and not licensed for commercial use. Feel free to modify and use it for personal study.

## Contact
For issues or suggestions, please open an issue on the project repository (if hosted) or contact the developer directly.

---
*Last updated: April 27, 2025*
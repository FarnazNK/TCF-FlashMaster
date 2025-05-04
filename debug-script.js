// debug-script.js - Module Loading Debugger

document.addEventListener('DOMContentLoaded', () => {
    console.log('Debug script loaded - checking modules');
    
    // Create a debug log function
    function logDebug(message, isError = false) {
        console[isError ? 'error' : 'log'](message);
        
        const statusDiv = document.getElementById('moduleStatus');
        const statusContent = document.getElementById('moduleStatusContent');
        
        if (statusDiv && statusContent) {
            statusDiv.classList.remove('hidden');
            
            // Add message to status content
            const messageElem = document.createElement('div');
            messageElem.className = isError ? 'text-red-600' : 'text-blue-600';
            messageElem.innerHTML = message;
            
            // Clear content if it's just the initial message
            if (statusContent.innerText === 'Checking module status...') {
                statusContent.innerHTML = '';
            }
            
            statusContent.appendChild(messageElem);
        }
    }
    
    // Check specific module file existence
    async function checkModuleExists(modulePath) {
        try {
            // Attempt to dynamically import the module
            await import(modulePath)
                .then((module) => {
                    logDebug(`✅ Module '${modulePath}' loaded successfully`);
                    return true;
                })
                .catch((error) => {
                    logDebug(`❌ Error loading '${modulePath}': ${error.message}`, true);
                    return false;
                });
        } catch (error) {
            logDebug(`❌ Exception checking '${modulePath}': ${error.message}`, true);
            return false;
        }
    }
    
    // Check all module paths
    logDebug('Checking module paths:');
    
    // Check each module file
    checkModuleExists('./vocabulary-module.js'); // Check alternate name
    checkModuleExists('./reading-module.js');
    checkModuleExists('./grammar-module.js');
    checkModuleExists('./writing-module.js');
    checkModuleExists('./speaking-module.js');
    
    // Show path information
    logDebug('Module path resolution:');
    logDebug(`Current path: ${window.location.pathname}`);
    logDebug(`Try checking browser console for detailed error messages`);
    
    // Add a fix button
    const statusDiv = document.getElementById('moduleStatus');
    if (statusDiv) {
        const fixButton = document.createElement('button');
        fixButton.className = 'mt-4 px-4 py-2 bg-green-600 text-white rounded-md';
        fixButton.textContent = 'Apply Automatic Fixes';
        fixButton.onclick = () => {
            logDebug('Attempting automatic fixes...');
            
            // Create global object with empty arrays if modules fail to load
            window.vocabulary = window.vocabulary || [];
            window.readingPassages = window.readingPassages || [];
            window.grammarTopics = window.grammarTopics || [];
            window.writingPrompts = window.writingPrompts || [];
            window.speakingExercises = window.speakingExercises || [];
            window.pronunciationExercises = window.pronunciationExercises || [];
            
            // Set flags to prevent errors
            window.vocabLoaded = true;
            window.readingLoaded = true;
            window.grammarLoaded = true;
            window.writingLoaded = true;
            window.speakingLoaded = true;
            
            logDebug('Temporary placeholders created for missing modules');
            logDebug('Please fix the actual module files for full functionality');
            logDebug('Page should now load without errors, but features will be limited');
            
            // Reload after 2 seconds
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        };
        
        statusDiv.appendChild(fixButton);
    }
    
    // Add detailed information for developers
    logDebug('Common issues to check:');
    logDebug('1. File case sensitivity (speaking-module.js vs speaking-module.JS)');
    logDebug('2. Missing files (check if grammar-module.js exists)');
    logDebug('3. Check import statements in main.js');
    logDebug('4. Module path resolution (try moving all JS files to the same directory)');
});

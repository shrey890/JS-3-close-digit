let capitalizeWords = (sentence) => {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
};
const form = document.getElementById('capitalize-words-form');
const clearButton = document.getElementById('clear-button');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputSentence = document.getElementById('input-sentence').value.trim();
    const validationMessage = document.getElementById("validation-message");
    if (inputSentence) {
        const capitalizedSentence = capitalizeWords(inputSentence);
        const resultDisplay = document.getElementById('result');
        validationMessage.textContent = "";
        resultDisplay.textContent = `Capitalized ${capitalizedSentence}`;
    } else {
        validationMessage.textContent = "Please enter a sentence to capitalize.";
    }
});
clearButton.addEventListener('click', () => {
    const validationMessage = document.getElementById("validation-message");
    document.getElementById('input-sentence').value = '';
    document.getElementById('result').textContent = '';
    validationMessage.textContent = "";
});

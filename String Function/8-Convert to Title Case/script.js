function capitalize(sentence, excludeWords = ["a", "an", "the", "and", "of", "in", "to", 'etc']) {
    const words = sentence.split(/\s+/);
    return words.map((word, index) => {
        return (index === 0 || !excludeWords.includes(word.toLowerCase())) ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    }).join(" ");
}
const form = document.getElementById("title-case-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputSentence = document.getElementById("input-sentence").value.trim();
    if (inputSentence) {
        const capitalizedSentence = capitalize(inputSentence);
        const resultDisplay = document.getElementById("result");
        resultDisplay.textContent = `Capitalized: ${capitalizedSentence}`;
    } else {
        alert("Please enter a sentence to convert.");
    }
});

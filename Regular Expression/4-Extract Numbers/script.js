function extractNumbers(text) {
    const numberRegex = /\d+/g;
    const matches = text.match(numberRegex);
    return matches ? matches.map(Number) : [];
}
const textInput = document.getElementById("text-input");
const errorSpan = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");
textInput.addEventListener("input", validate);
submitButton.addEventListener("click", validate);
function validate() {
    const text = textInput.value.trim();
    if (text.length > 0) {
        errorSpan.textContent = "";
        submitButton.disabled = false;
    } else {
        errorSpan.textContent = "Please enter some text";
        submitButton.disabled = true;
    }
}
submitButton.addEventListener("click", () => {
    const text = textInput.value;
    const extractedNumbers = extractNumbers(text);
    const existingResult = document.getElementById("extracted-numbers");
    if (existingResult) {
        existingResult.remove();
    }
    const resultElement = document.getElementById("extracted-numbers") || document.createElement("p");
    resultElement.id = "extracted-numbers";
    resultElement.textContent = "Extracted numbers: " + extractedNumbers.join(", ");
    const form = document.querySelector("form");
    form.appendChild(resultElement);
});
const resetButton = document.querySelector("input[type='reset']");
resetButton.addEventListener("click", () => {
    const resultElement = document.getElementById("extracted-numbers");
    if (resultElement) {
        resultElement.remove();
    }
});

function countVowelsRegex(text) {
    const vowelRegex = /[aeiou]/gi;
    const matches = text.match(vowelRegex);
    return matches ? matches.length : 0;
}
const form = document.getElementById("count-vowels-form");
const clearButton = document.getElementById("clear-button")
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputString = document.getElementById("input-string").value.trim();

    if (inputString) {
        const vowelCountRegex = countVowelsRegex(inputString);
        const resultDisplay = document.getElementById("result");
        resultDisplay.textContent = `Number of vowels : ${vowelCountRegex}`;
    } else {
        alert("Please enter a string to count vowels.");
    }
});
clearButton.addEventListener("click", () => {
    document.getElementById('input-string').value = ''
    document.getElementById('result').textContent = ''
})
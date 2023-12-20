// const a = [1, 2, 3]
// const double = a.map(e => e * 2)
// console.log(double)
function doubleElements(numbers) {
    return numbers.map(number => number * 2);
}
const form = document.getElementById("double-array-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputNumbers = document.getElementById("input-numbers").value.trim();
    if (inputNumbers) {
        const numbersArray = inputNumbers.split(",");
        if (numbersArray.every(number => !isNaN(number))) {
            const doubledNumbers = doubleElements(numbersArray);
            const resultDisplay = document.getElementById("result");
            resultDisplay.textContent = `Doubled numbers: ${doubledNumbers.join(", ")}`;
        } else {
            alert("Please enter only valid numbers separated by commas.");
        }
    } else {
        alert("Please enter numbers to double.");
    }
});

// console.log(Math.max(1, 3, 14))

function findMaxValue(numbers) {
    return Math.max(...numbers);
}

const form = document.getElementById("find-max-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputNumbers = document.getElementById("input-numbers").value.trim();

    if (inputNumbers) {
        const numbersArray = inputNumbers.split(",");
        if (numbersArray.every(number => !isNaN(number))) {
            const maxValue = findMaxValue(numbersArray);
            const resultDisplay = document.getElementById("result");
            resultDisplay.textContent = `Maximum value: ${maxValue}`;
        } else {
            alert("Please enter only valid numbers separated by commas.");
        }
    } else {
        alert("Please enter numbers to find the maximum value.");
    }
});

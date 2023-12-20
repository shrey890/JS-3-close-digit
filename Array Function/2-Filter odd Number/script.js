function filterOddNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const form = document.getElementById("filter-odd-numbers-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputNumbers = document.getElementById("input-numbers").value.trim();

    if (inputNumbers) {
        const numbersArray = inputNumbers.split(",");
        if (numbersArray.every(number => !isNaN(number))) {
            const filteredNumbers = filterOddNumbers(numbersArray);
            const resultDisplay = document.getElementById("result");
            resultDisplay.textContent = `Even numbers: ${filteredNumbers.join(", ")}`;
        } else {
            alert("Please enter only valid numbers separated by commas.");
        }
    } else {
        alert("Please enter numbers to filter.");
    }
});

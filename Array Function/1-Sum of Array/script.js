document.getElementById("array-sum-form").classList.remove("js-hide");

function calculateSum(numbers) {
    return numbers.reduce((total, number) => total + Number(number), 0);
}

const form = document.getElementById("array-sum-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputNumbers = document.getElementById("input-numbers").value.trim();

    if (inputNumbers) {
        const numbersArray = inputNumbers.split(",");
        if (numbersArray.every(number => !isNaN(number))) {
            const sum = calculateSum(numbersArray);
            const resultDisplay = document.getElementById("result");
            resultDisplay.textContent = `The sum is: ${sum}`;
        } else {
            alert("Please enter only valid numbers separated by commas.");
        }
    } else {
        alert("Please enter numbers to calculate the sum.");
    }
});

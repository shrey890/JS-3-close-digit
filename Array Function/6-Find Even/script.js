// function findEven(arr) {
//     return arr.filter((e) => {
//         return e % 2 === 0
//     })
// }
// const number = [1, 2, 3, 4, 5, 6, 7, 8.5, 9, -10]
// const even = findEven(number)
// console.log(even)
function findEvenNumbers(data) {
    return data.filter(number => number % 2 === 0);
}
const form = document.getElementById("find-even-numbers-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputNumbers = document.getElementById("input-numbers").value.trim();
    if (inputNumbers) {
        const numbersArray = inputNumbers.split(",");
        if (numbersArray.every(number => !isNaN(number))) {
            const evenNumbers = findEvenNumbers(numbersArray);
            const resultDisplay = document.getElementById("result");
            resultDisplay.textContent = `Even numbers: ${evenNumbers.join(",")}`;
        } else {
            alert("Please enter only valid numbers separated by commas.");
        }
    } else {
        alert("Please enter numbers to find even numbers.");
    }
});

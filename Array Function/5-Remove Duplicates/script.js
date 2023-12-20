// function removeDulicates(array) {
//     return array.filter((item, index) => {
//         return array.indexOf(item) === index
//     })
// }
// let number = [3, 1, 2, 1, 22, 22]
// let x = removeDulicates(number)
// console.log(x)
function removeDuplicatesFilter(data) {
    return data.filter((item, index) => data.indexOf(item) === index);
}

const form = document.getElementById("remove-duplicates-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputNumbers = document.getElementById("input-numbers").value.trim();

    if (inputNumbers) {
        const numbersArray = inputNumbers.split(",");
        if (numbersArray.every(number => !isNaN(number))) {
            const uniqueNumbers = removeDuplicatesFilter(numbersArray);
            const resultDisplay = document.getElementById("result");
            resultDisplay.textContent = `Unique numbers: ${uniqueNumbers.join(", ")}`;
        } else {
            alert("Please enter only valid numbers separated by commas.");
        }
    } else {
        alert("Please enter numbers to remove duplicates.");
    }
});

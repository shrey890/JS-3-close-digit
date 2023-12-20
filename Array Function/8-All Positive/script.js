function allPositive(data) {
    return data.every(number => number > 0)
}
const form = document.getElementById('check-positive-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputNumbers = document.getElementById('input-numbers').value.trim()
    if (inputNumbers) {
        const numbersArray = inputNumbers.split(',')
        if (numbersArray.every(number => !isNaN(number))) {
            const areAllPositive = allPositive(numbersArray)
            const resultDisplay = document.getElementById('result')
            resultDisplay.textContent = areAllPositive ? 'all numbers are positive' : 'not all numbers are positive'
        } else {
            alert("Please enter only valid numbers separated by commas.");
        }
    } else {
        alert("Please enter numbers to check for positive values.");
    }
})
function calculateAverage(data) {
    const numericData = data.map(Number);
    const sum = numericData.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numericData.length;
}
const form = document.getElementById('calculate-average-form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputNumbers = document.getElementById('input-numbers').value.trim()
    if (inputNumbers) {
        const numbersArray = inputNumbers.split(',')
        if (numbersArray.every(number => !isNaN(number))) {
            const average = calculateAverage(numbersArray)
            const resultDisplay = document.getElementById('result')
            resultDisplay.textContent = `Average: ${average.toFixed(2)}`
        } else {
            alert('Please enter only valid numbers separated by commas.')
        }
    } else {
        alert('Please enter numbers to calculate the average.')
    }
})

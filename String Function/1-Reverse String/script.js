function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
const form = document.getElementById('reverse-string-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputString = document.getElementById('input-string').value.trim()
    if (inputString) {
        const reversedString = reverseString(inputString)
        const resultDisplay = document.getElementById('result')
        resultDisplay.textContent = `Reversed String ${reversedString}`
    } else {
        alert('Please enter a string to reverse')
    }
})
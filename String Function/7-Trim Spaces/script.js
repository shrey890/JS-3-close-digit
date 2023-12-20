function trimString(string) {
    return string.trim()
}
const form = document.getElementById('string-trimmer-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputString = document.getElementById('input-string').value.trim()
    if (inputString) {
        const trimmedString = trimString(inputString)
        const resultDisplay = document.getElementById('result')
        resultDisplay.textContent = `trimmed string: ${trimmedString}`
    } else {
        alert('please enter a string to trim')
    }
})
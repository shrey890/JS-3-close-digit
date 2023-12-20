function replaceAll(originalString, searchString, replaceString) {
    return originalString.replace(new RegExp(searchString, 'g'), replaceString)
}
const form = document.getElementById('word-replacer-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const originalString = document.getElementById('original-string').value.trim()
    const searchString = document.getElementById('search-string').value.trim()
    const replaceString = document.getElementById('replace-string').value.trim()
    if (originalString && searchString && replaceString) {
        const result = replaceAll(originalString, searchString, replaceString)
        const resultDisplay = document.getElementById('result')
        resultDisplay.textContent = `Result: ${result}`
    } else {
        alert('Please Fill in All Fields')
    }
})
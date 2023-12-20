function countWords() {
    const inputField = document.getElementById('input-field');
    const sentence = inputField.value.trim()
    if (sentence) {
        const wordCount = sentence.split(/\s+/).length
        const wordCountDisplay = document.getElementById('word-count')
        wordCountDisplay.textContent = `Number of words: ${wordCount}`
    } else {
        alert('invalid word count')
    }
}

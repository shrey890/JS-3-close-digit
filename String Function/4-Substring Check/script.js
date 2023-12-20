function checkStr() {
    const mainString = document.getElementById('main-string').value
    const subString = document.getElementById('sub-string').value
    const index = mainString.indexOf(subString)
    const isPresent = index !== -1
    const resultElement = document.getElementById('result')
    if (isPresent) {
        resultElement.textContent = `Substring "${subString}" found in string "${mainString}"`
    } else {
        resultElement.textContent = `Substring "${subString}" not found in string "${mainString}"`
    }
}
const form = document.getElementById('email-form')
const emailInput = document.getElementById('email')
const validationMessage = document.getElementById("email-validation-message");
const clearButton = document.getElementById("clear-button");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.addEventListener('submit', () => {

    const email = emailInput.value.trim();
    if (emailRegex.test(email)) {
        validationMessage.textContent = ''
    } else {
        validationMessage.textContent = 'Please enter a valid email address.'
    }
})
clearButton.addEventListener("click", () => {
    emailInput.value = '';
    validationMessage.textContent = "";
});
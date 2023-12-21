const dateForm = document.getElementById('date-form');
const dateInput = document.getElementById('date')
const dateError = document.getElementById('date-error-message');
const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
function validateDate() {
    const date = dateInput.value.trim()
    if (dateRegex.test(date)) {
        dateError.textContent = ''
        dateForm.classList.remove('invalid')
    } else {
        dateError.textContent = "Please enter a valid date in the format YYYY-MM-DD";
        dateForm.classList.add("invalid");
    }
}
dateForm.addEventListener('submit', (e) => {
    e.preventDefault()
    validateDate()
})
function isStrongPassword(password) {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
}
const passwordInput = document.getElementById("password-input");
const errorSpan = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");
passwordInput.addEventListener("input", validate);
submitButton.addEventListener("click", validate);
function validate() {
    const password = passwordInput.value.trim();
    if (isStrongPassword(password)) {
        errorSpan.textContent = "";
        submitButton.disabled = false;
    } else {
        errorSpan.textContent = "Password must be at least 8 characters long, contain uppercase, lowercase, numbers, and special characters.";
        submitButton.disabled = true;
    }
}
const resetButton = document.querySelector("input[type='reset']");
resetButton.addEventListener("click", () => {
    errorSpan.textContent = "";
});

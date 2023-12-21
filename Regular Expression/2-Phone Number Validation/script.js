const phoneForm = document.getElementById("phone-form");
const phoneNumberInput = document.getElementById("phone-number");
const phoneNumberError = document.getElementById("phone-error-message");
const phoneRegex = /^[6-9]\d{9}$/;
phoneNumberInput.addEventListener("input", () => {
    const phoneNumber = phoneNumberInput.value.trim();
    if (phoneRegex.test(phoneNumber)) {
        phoneNumberError.textContent = "";
        phoneForm.classList.remove("invalid");
    } else {
        phoneNumberError.textContent = "Please enter a valid phone number in the format +91-XXXXXXXXXX";
        phoneForm.classList.add("invalid");
    }
});
phoneForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const phoneNumber = phoneNumberInput.value.trim();
    if (!phoneRegex.test(phoneNumber)) {
        phoneNumberInput.focus();
        return;
    }
});

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("passwordError");

function checkPasswords() {
  if (password.value !== confirmPassword.value) {
    passwordError.innerText = "Passwords do not match.";
    passwordError.style.display = "block";
    password.classList.add("form__input--error");
    confirmPassword.classList.add("form__input--error");
    return false;
  } else {
    passwordError.style.display = "none";
    password.classList.remove("form__input--error");
    confirmPassword.classList.remove("form__input--error");
  }
  return true;
}

function validatePasswordComplexity(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

function validateForm(event) {
  if (!validatePasswordComplexity(password.value)) {
    event.preventDefault();
    passwordError.innerText =
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.";
    passwordError.style.display = "block";
    password.classList.add("form__input--error");
    return false;
  } else {
    passwordError.style.display = "none";
    password.classList.remove("form__input--error");
  }
  return checkPasswords();
}

window.onload = function () {
  document.querySelector(".form").onsubmit = validateForm;
};

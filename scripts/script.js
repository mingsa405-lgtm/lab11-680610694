// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// ล้าง class ทันทีที่มีการพิมพ์ใหม่
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid", "is-invalid");
};
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid", "is-invalid");
};
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid", "is-invalid");
};
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid", "is-invalid");
};
passwordConfirmInput.onkeyup = () => {
  passwordConfirmInput.classList.remove("is-valid", "is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;
  let isConfirmPasswordOk = false;

  // 1. validate first name
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.remove("is-valid");
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.remove("is-invalid");
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // 2. validate last name
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.remove("is-valid");
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.remove("is-invalid");
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // 3. validate email
  if (!validateEmail(emailInput.value.trim())) {
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // 4. validate password
  if (passwordInput.value.length < 6) {
    passwordInput.classList.remove("is-valid");
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.remove("is-invalid");
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  // 5. validate confirm password
  if (
    passwordConfirmInput.value === "" ||
    passwordConfirmInput.value !== passwordInput.value
  ) {
    passwordConfirmInput.classList.remove("is-valid");
    passwordConfirmInput.classList.add("is-invalid");
  } else {
    passwordConfirmInput.classList.remove("is-invalid");
    passwordConfirmInput.classList.add("is-valid");
    isConfirmPasswordOk = true;
  }

  // if all inputs are valid
  if (
    isFirstNameOk &&
    isLastNameOk &&
    isEmailOk &&
    isPasswordOk &&
    isConfirmPasswordOk
  ) {
    alert("Registered successfully");
  }
};

// reset button
resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  passwordConfirmInput.value = "";

  firstNameInput.classList.remove("is-valid", "is-invalid");
  lastNameInput.classList.remove("is-valid", "is-invalid");
  emailInput.classList.remove("is-valid", "is-invalid");
  passwordInput.classList.remove("is-valid", "is-invalid");
  passwordConfirmInput.classList.remove("is-valid", "is-invalid");
};
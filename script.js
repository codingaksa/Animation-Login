const container = document.querySelector(".container");
const loginForm = document.querySelector(".login-form");
const RegisterForm = document.querySelector(".Register-form");
const RegiBtn = document.querySelector(".RegiBtn");
const LoginBtn = document.querySelector(".LoginBtn");
const btnPopup = document.querySelector(".btnLogin-popup");
const Closebtn = document.getElementById("İconX");

btnPopup.addEventListener("click", function openContainer() {
  container.classList.add("active");
});

Closebtn.addEventListener("click", function closeContainer() {
  container.classList.remove("active");
});

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleIcon = document.getElementById("toggle-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  }
}

function togglePasswordVisibilityTwo() {
  var passwordInputTwo = document.getElementById("passwordShow");
  var toggleIconTwo = document.getElementById("toggle-iconTwo");

  if (passwordInputTwo.type === "password") {
    passwordInputTwo.type = "text";
    toggleIconTwo.classList.remove("fa-eye-slash");
    toggleIconTwo.classList.add("fa-eye");
  } else {
    passwordInputTwo.type = "password";
    toggleIconTwo.classList.remove("fa-eye");
    toggleIconTwo.classList.add("fa-eye-slash");
  }
}

function togglePasswordVisibilityTree() {
  var passwordInputTree = document.getElementById("passwordHide");
  var toggleIconTree = document.getElementById("toggle-iconTree");

  if (passwordInputTree.type === "password") {
    passwordInputTree.type = "text";
    toggleIconTree.classList.remove("fa-eye-slash");
    toggleIconTree.classList.add("fa-eye");
  } else {
    passwordInputTree.type = "password";
    toggleIconTree.classList.remove("fa-eye");
    toggleIconTree.classList.add("fa-eye-slash");
  }
}

RegiBtn.addEventListener("click", () => {
  RegisterForm.classList.add("active");
  loginForm.classList.add("active");
});
LoginBtn.addEventListener("click", () => {
  RegisterForm.classList.remove("active");
  loginForm.classList.remove("active");
});

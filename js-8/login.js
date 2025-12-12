const REGISTERED_USERS_KEY = "registeredUsers";
const formTitle = document.querySelector(".login-title");
const loginFormView = document.getElementById("loginFormView");
const registerFormView = document.getElementById("registerFormView");
const createAccountBtn = document.getElementById("createAccountBtn");
const backToSignInBtn = document.getElementById("backToSignInBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const LOGGED_USER_KEY = "loggedUser";
window.onload = function () {
  const userString = localStorage.getItem(LOGGED_USER_KEY);
  if (userString) {
    window.location.href = "index.html";
  }
  registerFormView.style.display = "none";
  loginFormView.style.display = "flex";
};

formTitle.addEventListener("click", () => {
  viewShow(loginFormView, "Join The Show Lab");
});

function viewShow(showToView, title) {
  loginFormView.style.display = "none";
  registerFormView.style.display = "none";

  showToView.style.display = "flex";
  formTitle.textContent = "title";
}

createAccountBtn.addEventListener("click", () => {
  viewShow(registerFormView, "Create account");
});
backToSignInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  viewShow(loginFormView, "The Show Lab");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  console.log("Login attempt:", { email, password });
  if (!email || !password) {
    alert("Greshka pri najava. Ve molime vnesete email i lzoinka");
    return;
  }
  const usersString = localStorage.getItem(REGISTERED_USERS_KEY);
  const users = usersString ? JSON.parse(usersString) : [];
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (foundUser) {
    localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(foundUser));
    window.location.href = "index.html";
  } else {
    alert(
      "Greshka: Nevaliden email ili lozinka. Ve molime obidetes e povtorno."
    );
  }
});
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Greshka: lozinkite ne se sovpagaat.");
    return;
  }
  if (!email || !password) {
    alert("Greshka pri logiranje:Ve molime vnesete email i lozinka.");
    return;
  }
  const usersString = localStorage.getItem(REGISTERED_USERS_KEY);
  let users = usersString ? JSON.parse(usersString) : [];
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    alert(`Greshka: Korisnikot so email ${email} e veke registriran.`);
    return;
  }
  const newUser = { email: email, password: password };
  users.push(newUser);
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  viewShow(loginFormView, "The Show Lab");
});

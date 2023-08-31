
const password = "much4s-gr4c14s-1ng!"; // Cambia esto por tu contraseña

const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const galleryContainer = document.querySelector(".gallery-container");

loginBtn.addEventListener("click", function() {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === password) {
    document.querySelector(".login-container").style.display = "none";
    galleryContainer.style.display = "block";
  } else {
    alert("Contraseña incorrecta. Por favor, intente nuevamente.");
  }
});

"use strict";

const sliderEl = document.querySelector("#slider");
const buttonEl = document.querySelector("button");

const passwordSize = document.querySelector("#valor");
const password = document.querySelector("#password");

const containerPasswordEl = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let newPassword = "";

// Inset the password size in the element
passwordSize.innerHTML = sliderEl.value;

sliderEl.oninput = function () {
  passwordSize.innerHTML = this.value;
};

// Generate a random password
buttonEl.addEventListener("click", function () {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderEl.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPasswordEl.classList.remove("hide");
  password.innerHTML = pass;
  newPassword = pass;
});

// Copy the password on click
containerPasswordEl.addEventListener("click", function () {
  navigator.clipboard.writeText(newPassword);
  alert("Senha copiada com sucesso!");
});

"use strict";

const form = document.querySelector("form");
const inputList = document.querySelectorAll("label > input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  for (let eachInput of inputList) {
    let errorBox = eachInput.nextElementSibling;
    let errorIcon = eachInput.previousElementSibling;
    let eachValue = eachInput.value.trim();

    if (eachInput.validity.valueMissing || eachValue === "") {
      eachInput.setCustomValidity("Empty field");
      errorBox.textContent = `${eachInput.placeholder} cannot be empty`;
      errorIcon.style.display = "block";
    } else {
      eachInput.setCustomValidity("");
      errorBox.textContent = "";
      errorIcon.style.display = "none";
    }

    if (eachInput.name === "email") {
      if (eachInput.validity.typeMismatch) {
        errorBox.textContent = "Looks like this is not an email";
        errorIcon.style.display = "block";
      } else {
        errorBox.textContent = errorBox.textContent ? errorBox.textContent : "";
        errorIcon.style.display =
          errorIcon.style.display === "none" ? "none" : "block";
      }
    }
  }
});

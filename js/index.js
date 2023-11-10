import { validateForm } from "./form-validation.js";
import { handleButton } from "./submitForm.js";

window.onload = function () {
  // Attach submit event listener to the form
  const form = document.querySelector(".form");
  if (form) {
    form.onsubmit = validateForm;
  } else {
    console.log("Form not found.");
  }

  // Attach click event listener to the footer link
  const footerLink = document.getElementById("footerLink");
  if (footerLink) {
    footerLink.addEventListener("click", handleButton);
  } else {
    console.log("Footer link not found.");
  }
};

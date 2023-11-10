document.getElementById("footerLink").addEventListener("click", handleButton);

function handleButton(event) {
  event.preventDefault();
  document.getElementById("invisibleSubmitButton").click();
}

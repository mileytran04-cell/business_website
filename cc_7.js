const input = document.getElementById("headlineInput");
const button = document.getElementById("updateButton");
const cta = document.getElementById("cta");

button.addEventListener("click", function () {
  const newText = input.value.trim();

  if (newText !== "") {
    cta.textContent = newText;
    input.value = "";
  }
});
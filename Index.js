const buttonText = document.getElementById("button-paragraph");
const updateButton = document.getElementById("update-button");

updateButton.addEventListener("click", updateText);

function updateText() {
  console.log("click me");
  buttonText.innerHTML = "I am currently learning Javascript";
  document.getElementById("update-button");
}

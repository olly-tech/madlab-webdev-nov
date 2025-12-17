console.log("hi");

// WHERE
const paraText = document.getElementById("change-text");

// WHAT DO
function changeText() {

  paraText.textContent = "you win";

}

// WHEN

paraText.addEventListener("click", changeText);

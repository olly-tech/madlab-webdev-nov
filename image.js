// WHERE
const getImg = document.getElementById("change-image");

// WHAT DO

console.dir(getImg);

function changeImage() {
  if (getImg.getAttribute("src") === "squirtle.png") {
    
    // change to new image
    getImg.alt = "new image";
    getImg.src = "blastoise.png";
  } else {
    
    // change to old image
    getImg.alt = "squirtle";
    getImg.src = "squirtle.png";
  }
}

// WHEN
getImg.addEventListener("click", changeImage);

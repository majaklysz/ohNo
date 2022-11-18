function menuappear() {
  document.getElementById("appear").style.display = "flex";
}

function menudisappear() {
  document.getElementById("appear").style.display = "none";
}

let menuButton = document.querySelector(".burger-menu-button");
menuButton.addEventListener("click", menuappear);

let menuBackground = document.querySelector(".site-menu");
menuBackground.addEventListener("click", menudisappear);

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

function busGreen() {
  document.getElementById("greenBus-icon").style.display = "flex";
  document.getElementById("busLogo1").style.display = "flex";
  document.getElementById("busLogo2").style.display = "flex";
  document.getElementById("busLogo3").style.display = "flex";
}

let busIcon = document.querySelector(".bus");
busIcon.addEventListener("click", busGreen);

function busWhite() {
  document.getElementById("greenBus-icon").style.display = "none";
  document.getElementById("busLogo1").style.display = "none";
  document.getElementById("busLogo2").style.display = "none";
  document.getElementById("busLogo3").style.display = "none";
}

let busIcon2 = document.querySelector(".greenBus");
busIcon2.addEventListener("click", busWhite);

function scheduleAppear1() {
  document.getElementById("schedule-1").style.display = "flex";
  document.getElementById("schedule-2").style.display = "none";
  document.getElementById("schedule-3").style.display = "none";
}

function scheduleDisappear1() {
  document.getElementById("schedule-1").style.display = "none";
}

let schedule1 = document.querySelector(".busLogo1");
schedule1.addEventListener("click", scheduleAppear1);

let scheduleDis1 = document.querySelector(".schedule1");
scheduleDis1.addEventListener("click", scheduleDisappear1);

function scheduleAppear2() {
  document.getElementById("schedule-2").style.display = "flex";
  document.getElementById("schedule-1").style.display = "none";
  document.getElementById("schedule-3").style.display = "none";
}

function scheduleDisappear2() {
  document.getElementById("schedule-2").style.display = "none";
}

let schedule2 = document.querySelector(".busLogo2");
schedule2.addEventListener("click", scheduleAppear2);

let scheduleDis2 = document.querySelector(".schedule2");
scheduleDis2.addEventListener("click", scheduleDisappear2);

function scheduleAppear3() {
  document.getElementById("schedule-3").style.display = "flex";
  document.getElementById("schedule-2").style.display = "none";
  document.getElementById("schedule-1").style.display = "none";
}

function scheduleDisappear3() {
  document.getElementById("schedule-3").style.display = "none";
}

let schedule3 = document.querySelector(".busLogo3");
schedule3.addEventListener("click", scheduleAppear3);

let scheduleDis3 = document.querySelector(".schedule3");
scheduleDis3.addEventListener("click", scheduleDisappear3);

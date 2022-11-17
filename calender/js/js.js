let button = Array.from(document.querySelectorAll("button"));

button.forEach(function (mov) {
  mov.addEventListener("click", handleClick);
});

function handleClick(event) {
  button.forEach(function (val) {
    if (val == event.target) {
      val.classList.add("newColor");
    } else {
      val.classList.remove("newColor");
    }
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

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

function October(namedDate) {
  let eventName = prompt(
    "please enter the name and time of your event (Example Yoga 9-14)"
  );
  alert(
    "You have successfully booked your event " +
      eventName +
      " for October " +
      namedDate
  );
}

function November(namedDate) {
  let eventName = prompt(
    "please enter the name and time of your event (Example Yoga 9-14)"
  );
  alert(
    "You have successfully booked your event " +
      eventName +
      " for November " +
      namedDate
  );
}

function December(namedDate) {
  let eventName = prompt(
    "please enter the name and time of your event (Example Yoga 9-14)"
  );
  alert(
    "You have successfully booked your event " +
      eventName +
      " for December " +
      namedDate
  );
}

function January(namedDate) {
  let eventName = prompt(
    "please enter the name and time of your event (Example Yoga 9-14)"
  );
  alert(
    "You have successfully booked your event " +
      eventName +
      " for January " +
      namedDate
  );
}

function Febuary(namedDate) {
  let eventName = prompt(
    "please enter the name and time of your event (Example Yoga 9-14)"
  );
  alert(
    "You have successfully booked your event " +
      eventName +
      " for Febuary " +
      namedDate
  );
}

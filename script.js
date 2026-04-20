// Slider
let index = 0;
const slides = document.querySelectorAll(".slider img");

setInterval(() => {
  if (!slides.length) return;

  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

// Form
const form = document.getElementById("form");
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", function(e){
    e.preventDefault();
    msg.innerText = "Reservation Sent!";
  });
}
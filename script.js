




// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


// ===== CLOSE MENU WHEN CLICK LINK (MOBILE) =====
document.querySelectorAll(".nav_links a").forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


// ===== NAVBAR SCROLL EFFECT (UPDATED CLEAN WAY) =====
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");   // CSS handle karega
  } else {
    nav.classList.remove("scrolled");
  }
});


// ===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal({
  distance: "50px",
  duration: 1000,
  delay: 200,
  reset: false,
});

// header
sr.reveal(".header_container p");
sr.reveal(".header_container h1", { delay: 300 });

// booking
sr.reveal(".booking_form", { delay: 400 });

// about
sr.reveal(".about_image", { origin: "left" });
sr.reveal(".about_content", { origin: "right" });

// rooms
sr.reveal(".room_card", { interval: 200 });

// service
sr.reveal(".service_content", { origin: "bottom" });

// banner
sr.reveal(".banner_card", { interval: 200 });

// explore
sr.reveal(".explore_content", { origin: "bottom" });

// footer
sr.reveal(".footer_col", { interval: 200 });




// slider------

const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  index++;
  if(index === slides.length){
    index = 0;
  }
}

setInterval(showSlide, 3000);




window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});










/// intro /////


const intro = document.getElementById("intro");
const video = document.getElementById("introVideo");

// Function to close intro
function closeIntro() {
  if (!intro.classList.contains("hide-intro")) {
    intro.classList.add("hide-intro");
    document.body.classList.add("loaded");

    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  }
}

// 5 second auto close
setTimeout(closeIntro, 5000);

// Skip on click
window.addEventListener("click", closeIntro);

// Skip on scroll
window.addEventListener("scroll", closeIntro);

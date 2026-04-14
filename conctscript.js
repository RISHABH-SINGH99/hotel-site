
// ===============================
// ✅ WAIT FOR DOM LOAD (ONLY ONE TIME)
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // ✅ MOBILE MENU (FINAL)
  // ===============================
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", (e) => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("active");
      e.stopPropagation();
    });

    // outside click close
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
      }
    });

    // link click close
    document.querySelectorAll(".nav_links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    });
  }


  // ===============================
  // ✅ NAVBAR SCROLL EFFECT
  // ===============================
  const nav = document.querySelector("nav");

  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }


  // ===============================
  // ✅ SLIDER (SAFE)
  // ===============================
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  }

  if (slides.length > 0) {
    setInterval(showSlide, 3000);
  }


  // ===============================
  // ✅ INTRO VIDEO
  // ===============================
  const intro = document.getElementById("intro");

  function closeIntro() {
    if (intro && !intro.classList.contains("hide-intro")) {
      intro.classList.add("hide-intro");
      document.body.classList.add("loaded");

      setTimeout(() => {
        intro.style.display = "none";
      }, 1000);
    }
  }

  if (intro) {
    setTimeout(closeIntro, 5000);
    window.addEventListener("click", closeIntro);
    window.addEventListener("scroll", closeIntro);
  }


  // ===============================
  // ✅ ROOM BOOKING SYSTEM
  // ===============================
  window.roomName = "";
  window.pricePerNight = 0;
  window.roomId = "";

  // OPEN POPUP
  window.openPopup = function(name, price, id) {
    window.roomName = name;
    window.pricePerNight = price;
    window.roomId = id;

    document.getElementById("popupForm").style.display = "flex";
    document.getElementById("roomType").value = name;
    document.getElementById("roomId").value = id;
  };

  // CLOSE POPUP
  window.closePopup = function() {
    document.getElementById("popupForm").style.display = "none";
  };

  // CALCULATE PRICE
  window.calculateTotal = function() {
    let checkin = new Date(document.getElementById("checkin").value);
    let checkout = new Date(document.getElementById("checkout").value);
    let adults = document.getElementById("adults").value || 1;

    if (checkin && checkout && checkout > checkin) {
      let hours = (checkout - checkin) / (1000 * 60 * 60);
      let days = Math.ceil(hours / 24);

      let total = days * window.pricePerNight;

      // extra charge
      if (adults > 4) {
        total += 500;
      }

      document.getElementById("totalAmount").innerText =
        "Total: ₹" + total + " (" + days + " day)";
    }
  };

  // EVENT LISTENERS (SAFE)
  document.getElementById("checkin")?.addEventListener("change", window.calculateTotal);
  document.getElementById("checkout")?.addEventListener("change", window.calculateTotal);
  document.getElementById("adults")?.addEventListener("input", window.calculateTotal);


  // ===============================
  // ✅ WHATSAPP BOOKING
  // ===============================
  window.sendWhatsApp = function() {
    let name = document.getElementById("userName").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let adults = document.getElementById("adults").value;
    let total = document.getElementById("totalAmount").innerText;

    if (!name || !checkin || !checkout) {
      alert("Please fill all details!");
      return;
    }

    let msg = `ROOM BOOKING
Name: ${name}
Room: ${window.roomName}
Room ID: ${window.roomId}
Checkin: ${checkin}
Checkout: ${checkout}
Adults: ${adults}
${total}`;

    let phone = "917311171641";

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

});




document.getElementById("popupForm").addEventListener("click", function(e){
  if(e.target === this){
    closePopup();
  }
});

function flipCard() {
  document.getElementById("cardInner").classList.toggle("flip");
}

// CARD FLIP
function flipCard() {
  document.querySelector(".card_inner").classList.toggle("flip");
}

// AUTO ROTATE EVERY 5 SEC
setInterval(() => {
  document.querySelector(".card_inner").classList.toggle("flip");
}, 5000);

// FORM TO WHATSAPP
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let text = `Hello, I want booking info.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`;

  let whatsapp = "https://wa.me/91XXXXXXXXXX?text=" + text;

  window.open(whatsapp, "_blank");
});


  // ===============================
  // ✅ NAVBAR SCROLL EFFECT
  // ===============================
  const nav = document.querySelector("nav");

  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }





  // ===============================
  // ✅ SLIDER (SAFE)
  // ===============================
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  }

  if (slides.length > 0) {
    setInterval(showSlide, 3000);
  }





const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});


// agar tu multiple cards karega future me
document.querySelectorAll('.hotel-card').forEach(card=>{
  card.addEventListener('click', ()=>{
    card.classList.toggle('flip');
  });
});


document.querySelector('.hotel-card').addEventListener('click', function(){
  this.querySelector('.hotel-inner').classList.toggle('active');
});



// optional (future ke liye)
console.log("Animation Running 🚗");







// form ==============
// ===== SAFE LOAD =====
// ===== CONTACT FORM SAFE SCRIPT =====
document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("waForm");

  // ✅ agar form nahi hai to exit (no error)
  if(!form){
    console.log("Form not found on this page");
    return;
  }

  form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if(!name || !email || !phone || !message){
      alert("❌ Fill all fields");
      return;
    }

    let number = "916387721166";

    let text = `New Query:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    let url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    alert("✅ Sent Successfully");

    form.reset();
  });

});
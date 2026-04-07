// ===== NAVBAR TOGGLE =====
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
});

// ===== HEADER SLIDER =====
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide(){
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide +1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 4000); // change every 4 sec

// ===== WELCOME VIDEO =====
const intro = document.getElementById('intro');
const introVideo = document.getElementById('introVideo');

introVideo.addEventListener('ended', ()=>{
    intro.style.display='none';
});

// CLOSE INTRO ON CLICK OR SCROLL
window.addEventListener('scroll', ()=> intro.style.display='none');
window.addEventListener('click', ()=> intro.style.display='none');










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






document.getElementById("popupForm").addEventListener("click", function(e){
  if(e.target === this){
    closePopup();
  }
});







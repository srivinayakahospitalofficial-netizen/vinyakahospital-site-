document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });
  }

  let doctorIndex = 0;

  window.slideDoctors = function (direction) {
    const track = document.querySelector(".doctors-track");
    const cards = document.querySelectorAll(".doctor-card");
    const slider = document.querySelector(".doctors-slider");

    if (!track || cards.length === 0 || !slider) return;

    const gap = 30;
    const cardWidth = cards[0].offsetWidth + gap;
    const visibleCards = Math.floor(slider.offsetWidth / cardWidth);
    const maxIndex = Math.max(cards.length - visibleCards, 0);

    doctorIndex += direction;

    if (doctorIndex < 0) doctorIndex = 0;
    if (doctorIndex > maxIndex) doctorIndex = maxIndex;

    track.style.transform = `translateX(-${doctorIndex * cardWidth}px)`;
  };

  window.addEventListener("resize", function () {
    doctorIndex = 0;

    const track = document.querySelector(".doctors-track");

    if (track) {
      track.style.transform = "translateX(0px)";
    }
  });
});

let specialityIndex = 0;

window.slideSpecialities = function (direction) {
  const track = document.querySelector(".specialities-track");
  const cards = document.querySelectorAll(".speciality-card");
  const slider = document.querySelector(".specialities-slider");

  if (!track || cards.length === 0 || !slider) return;

  const gap = 35;
  const cardWidth = cards[0].offsetWidth + gap;
  const visibleCards = Math.floor(slider.offsetWidth / cardWidth);
  const maxIndex = Math.max(cards.length - visibleCards, 0);

  specialityIndex += direction;

  if (specialityIndex < 0) specialityIndex = 0;
  if (specialityIndex > maxIndex) specialityIndex = maxIndex;

  track.style.transform = `translateX(-${specialityIndex * cardWidth}px)`;
};

// MOBILE MEGA MENU

const megaMenuParent = document.querySelector(".has-mega-menu");
const servicesLink = document.querySelector(".services-link");

if (servicesLink && megaMenuParent) {

  servicesLink.addEventListener("click", function (e) {

    // Mobile only
    if (window.innerWidth <= 992) {

      e.preventDefault();

      megaMenuParent.classList.toggle("active");
    }
  });

  // Close when clicked outside
  document.addEventListener("click", function (e) {

    if (
      window.innerWidth <= 992 &&
      !megaMenuParent.contains(e.target)
    ) {
      megaMenuParent.classList.remove("active");
    }
  });
}

const popup = document.getElementById("appointmentPopup");

const openBtn = document.getElementById("openPopup");

const closeBtn = document.getElementById("closePopupBtn");

const overlay = document.getElementById("closePopup");

if(openBtn && popup){

  openBtn.addEventListener("click", () => {
    popup.classList.add("active");
  });

}

if(closeBtn){

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

}

if(overlay){

  overlay.addEventListener("click", () => {
    popup.classList.remove("active");
  });

}

const appointmentForm =
  document.getElementById("telegramForm");

const successPopup =
  document.getElementById("successPopup");

const successTitle =
  document.getElementById("successTitle");

const successClose =
  document.getElementById("successClose");

if (appointmentForm) {

  appointmentForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const submitBtn =
      appointmentForm.querySelector(".submit-btn");

    submitBtn.innerText = "Submitting...";
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");

    const name =
      appointmentForm.querySelector('input[type="text"]').value;

    const phone =
      appointmentForm.querySelector('input[type="tel"]').value;

    const service =
      appointmentForm.querySelector("select").value;

    const BOT_TOKEN =
      "8820960604:AAFxAf8cxPeOBNUOoyUSRhqrMH3CJhz95mU";

    const CHAT_ID =
      "-1003967286332";

    const message = `
🏥 Sri Vinayaka Hospital Appointment

👤 Name: ${name}

📞 Mobile: ${phone}

🩺 Service: ${service}
`;

    try {

      await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
          })
        }
      );

      successTitle.innerText =
        `Hello ${name}!`;

      popup.classList.remove("active");

      successPopup.classList.add("active");

      appointmentForm.reset();

    } catch (error) {

      alert("Something went wrong. Please try again.");

    } finally {

      submitBtn.innerText = "Submit Appointment";
      submitBtn.disabled = false;
      submitBtn.classList.remove("loading");

    }

  });

}

if (successClose) {

  successClose.addEventListener("click", function () {

    successPopup.classList.remove("active");

  });

}

if (successClose) {

  successClose.addEventListener("click", function () {

    successPopup.classList.remove("active");

  });

}

if(successClose){

  successClose.addEventListener("click", function(){

    successPopup.classList.remove("active");

  });

}

const heroPopupBtn =
  document.getElementById("openPopupHero");

if(heroPopupBtn){

  heroPopupBtn.addEventListener("click", () => {

    popup.classList.add("active");

  });

}
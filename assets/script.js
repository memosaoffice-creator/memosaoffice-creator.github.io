// MOBILE MENU TOGGLE
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");
const menuLines = document.querySelectorAll(".menu-btn span");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  menuBtn.classList.toggle("open");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("open");
    menuBtn.classList.remove("open");
  }
});

// SMOOTH SCROLL FOR INTERNAL LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// SHINY HOVER EFFECT ON CARDS
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

// SCROLL FADE-IN ANIMATION
const fadeEls = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeEls.forEach(el => observer.observe(el));

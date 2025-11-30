// =======================
// MOBILE MENU TOGGLE
// =======================
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !sideMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    sideMenu.classList.remove('active');
  }
});

// =======================
// SMOOTH SCROLL FOR INTERNAL LINKS
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// aluth post daddi methana update krpn

const posts = [
  {
    title: "How to Speed Up a Slow Android Phone",
    url: "/posts/sample-post-2.html",
    desc: "Simple steps to make your phone snappy again — no tech degree required.",
    date: "2025-11-27"
  },
  {
    title: "Best Phones Under $300 (2025) — Top Picks",
    url: "/posts/sample-post-1.html",
    desc: "Affordable phones that punch above their weight — battery, camera and value-tested.",
    date: "2025-11-26"
  }
];

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const latestContainer = document.getElementById("latestPostsContainer");

// Inject the 2 newest posts
latestContainer.innerHTML = ""; // clear first
posts.slice(0,2).forEach(post => {
  latestContainer.innerHTML += `
    <article class="card">
      <a href="${post.url}"><h3>${post.title}</h3></a>
      <p>${post.desc}</p>
    </article>
  `;
});

// =======================
// SHINY HOVER EFFECT ON CARDS
// =======================
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// =======================
// SCROLL FADE-IN ANIMATION
// =======================
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeEls.forEach(el => observer.observe(el));

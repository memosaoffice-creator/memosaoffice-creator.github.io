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

//uda thiyenne lassana karana ewa


// LATEST POSTS INJECTION
function loadLatestPosts() {
    const container = document.getElementById("latestPostsContainer");
    if (!container) return;

    fetch("/posts/posts.json")
        .then(response => response.json())
        .then(posts => {
            // Sort posts by date descending
            posts.sort((a,b) => new Date(b.date) - new Date(a.date));

            // Take first 2 posts for latest
            const latest = posts.slice(0, 2);

            latest.forEach(post => {
                container.innerHTML += `
                    <div class="card">
                        <a href="${post.url}">
                            <img src="${post.image || '/assets/logo.svg'}" alt="${post.title}" style="width:100%; border-radius:12px;">
                            <h3>${post.title}</h3>
                            <p>${post.desc}</p>
                        </a>
                    </div>
                `;
            });
        })
        .catch(err => console.error("Failed to load latest posts:", err));
}

// Call the function after DOM is loaded
document.addEventListener("DOMContentLoaded", loadLatestPosts);

// BLOG POSTS INJECTION
function loadBlogPosts() {
    fetch("/posts/posts.json")
        .then(res => res.json())
        .then(posts => {
            console.log("Posts loaded:", posts); // check in console
            const reviewsContainer = document.getElementById("reviewsContainer");
            const guidesContainer = document.getElementById("guidesContainer");
            if (!reviewsContainer || !guidesContainer) {
                console.error("Containers not found!");
                return;
            }

            reviewsContainer.innerHTML = "";
            guidesContainer.innerHTML = "";

            posts.sort((a,b) => new Date(b.date) - new Date(a.date));

            posts.forEach(post => {
                const cardHTML = `
                    <div class="card">
                        <a href="${post.url}">
                            <img src="${post.image || '/assets/logo.svg'}" alt="${post.title}" style="width:100%; border-radius:12px;">
                            <h3>${post.title}</h3>
                            <p>${post.desc}</p>
                        </a>
                    </div>
                `;

                if(post.category && post.category.toLowerCase().trim() === "reviews") {
                    reviewsContainer.innerHTML += cardHTML;
                } else if(post.category && post.category.toLowerCase().trim() === "guides") {
                    guidesContainer.innerHTML += cardHTML;
                } else {
                    console.warn("Post skipped (invalid category):", post.title);
                }
            });
        })
        .catch(err => console.error("Failed to load blog posts:", err));
}

document.addEventListener("DOMContentLoaded", loadBlogPosts);

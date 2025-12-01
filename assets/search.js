// DYNAMIC SEARCH USING posts.json
let articles = []; // will be filled from posts.json

// Fetch posts.json dynamically
fetch("/posts/posts.json")
  .then(response => response.json())
  .then(data => {
    articles = data; // populate articles array
  })
  .catch(err => console.error("Failed to load posts.json:", err));

// Search function
function searchArticles() {
    let input = document.getElementById("searchInput");
    let resultsDiv = document.getElementById("results");

    if (!input || !resultsDiv) return;

    let query = input.value.toLowerCase();
    resultsDiv.innerHTML = "";

    let filtered = articles.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        return;
    }

    filtered.forEach(item => {
        resultsDiv.innerHTML += `
            <div style="margin-bottom:15px; padding:10px; border:1px solid #ddd; border-radius:8px;">
                <a href="${item.url}" style="font-size:18px; font-weight:bold;">${item.title}</a>
                <p>${item.desc}</p>
            </div>
        `;
    });
}

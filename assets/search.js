// DYNAMIC SEARCH USING posts.json
let articles = []; // Will be populated from posts.json

// Fetch posts from posts.json
fetch("/posts/posts.json")
    .then(res => res.json())
    .then(posts => {
        // Convert each post to article format
        articles = posts.map(post => ({
            title: post.title,
            url: post.url,
            desc: post.desc
        }));
    })
    .catch(err => console.error("Failed to load posts for search:", err));

// Search function
function searchArticles() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    if (!resultsDiv) return;

    // Clear previous results
    resultsDiv.innerHTML = "";

    const filtered = articles.filter(item =>
        item.title.toLowerCase().includes(input) ||
        item.desc.toLowerCase().includes(input)
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        return;
    }

    filtered.forEach(item => {
        resultsDiv.innerHTML += `
            <div style="margin-bottom:15px; padding:10px; border:1px solid #ddd; border-radius:8px; background: rgba(255,255,255,0.1);">
                <a href="${item.url}" style="font-size:18px; font-weight:bold; color: #fff;">${item.title}</a>
                <p style="color:#ddd;">${item.desc}</p>
            </div>
        `;
    });
}

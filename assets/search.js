// Your website articles (title + link + short description)
const articles = [
    { title: "How to Speed Up Your Android Phone", url: "posts/sample-post-1.html", desc: "Simple steps to make Android faster." },
    { title: "iPhone Battery Drain Fix", url: "sample-post-2.html", desc: "Tips to improve iPhone battery life." },
    { title: "Best Apps for Students", url: "post3.html", desc: "Top study and productivity apps." },
    { title: "How to Use Google Drive", url: "post4.html", desc: "Guide to using Google Drive properly." }
];

// Search function
function searchArticles() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("results");

    // Clear results
    resultsDiv.innerHTML = "";

    // Filter articles
    let filtered = articles.filter(item =>
        item.title.toLowerCase().includes(input) ||
        item.desc.toLowerCase().includes(input)
    );

    // Display results
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

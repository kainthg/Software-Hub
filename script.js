
// ======================================
// SOFTWARE HUB - MAIN JAVASCRIPT
// ======================================

// Get HTML elements
const searchInput = document.getElementById("search");
const softwareList = document.getElementById("software-list");
const noResults = document.getElementById("no-results");

// Current selected category
let selectedCategory = "All";

// Get all software cards
const softwareCards = document.querySelectorAll(".software-card");


// ======================================
// DISPLAY SOFTWARE
// ======================================

function displaySoftware() {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    let found = 0;

    softwareCards.forEach(card => {

        const name = card.querySelector("h3")
            .textContent.toLowerCase();

        const description = card.querySelector("p")
            .textContent.toLowerCase();

        const category = card.dataset.category;

        const matchesSearch =
            name.includes(searchValue) ||
            description.includes(searchValue);

        const matchesCategory =
            selectedCategory === "All" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });

    // No results message
    noResults.style.display =
        found === 0 ? "block" : "none";

}


// ======================================
// SEARCH SOFTWARE
// ======================================

function searchSoftware() {

    selectedCategory = "All";

    displaySoftware();

}


// Search while typing
searchInput.addEventListener("input", searchSoftware);


// Search with Enter key
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchSoftware();
    }

});


// ======================================
// CATEGORY FILTER
// ======================================

function filterCategory(category) {

    selectedCategory = category;

    searchInput.value = "";

    displaySoftware();

    document.getElementById("software").scrollIntoView({
        behavior: "smooth"
    });

}


// ======================================
// INITIALIZE WEBSITE
// ======================================

displaySoftware();

console.log("Software Hub is running successfully!");

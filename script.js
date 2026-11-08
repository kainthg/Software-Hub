
// ===================================
// SOFTWARE HUB - JAVASCRIPT
// ===================================

// Get HTML elements
const searchInput = document.getElementById("search");
const searchButton = document.querySelector(".search-box button");
const softwareList = document.getElementById("software-list");

// Get all software cards
const softwareCards = document.querySelectorAll(".software-card");

// Search software function
function searchSoftware() {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    let found = 0;

    softwareCards.forEach(card => {

        const softwareName = card
            .querySelector("h3")
            .textContent.toLowerCase();

        const softwareDescription = card
            .querySelector("p")
            .textContent.toLowerCase();

        if (
            softwareName.includes(searchValue) ||
            softwareDescription.includes(searchValue)
        ) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }

    });

    // Show no results message
    let noResults = document.getElementById("no-results");

    if (!noResults) {
        noResults = document.createElement("p");
        noResults.id = "no-results";
        noResults.textContent = "No software found. Try another search.";
        noResults.style.color = "#38bdf8";
        noResults.style.marginTop = "20px";
        softwareList.appendChild(noResults);
    }

    noResults.style.display = found === 0 ? "block" : "none";
}

// Search button click
searchButton.addEventListener("click", searchSoftware);

// Search while typing
searchInput.addEventListener("input", searchSoftware);

// Search using Enter key
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchSoftware();
    }

});

// ===================================
// SOFTWARE HUB INITIALIZATION
// ===================================

console.log("Software Hub JavaScript Loaded Successfully!");


/* =====================================
   SOFTWARE HUB - JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-button");
    const softwareCards = document.querySelectorAll(".software-card");
    const categories = document.querySelectorAll(".category-card");
    const noResults = document.getElementById("no-results");

    const modal = document.getElementById("software-modal");
    const closeModal = document.getElementById("close-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");

    let selectedCategory = "All";

    // FILTER SOFTWARE
    function displaySoftware() {

        const searchValue = searchInput.value.toLowerCase().trim();

        let found = 0;

        softwareCards.forEach(function (card) {

            const name = card.querySelector("h3").textContent.toLowerCase();

            const description = card.querySelector("p").textContent.toLowerCase();

            const category = card.dataset.category;

            const matchesSearch =
                name.includes(searchValue) ||
                description.includes(searchValue) ||
                category.toLowerCase().includes(searchValue);

            const matchesCategory =
                selectedCategory === "All" ||
                category === selectedCategory;

            if (matchesSearch && matchesCategory) {

                card.hidden = false;
                found++;

            } else {

                card.hidden = true;

            }

        });

        noResults.hidden = found !== 0;
    }


    // SEARCH BUTTON
    searchButton.addEventListener("click", function () {

        selectedCategory = "All";

        categories.forEach(function (category) {
            category.classList.toggle(
                "active",
                category.dataset.category === "All"
            );
        });

        displaySoftware();
    });


    // LIVE SEARCH
    searchInput.addEventListener("input", function () {

        displaySoftware();

    });


    // ENTER KEY SEARCH
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            selectedCategory = "All";

            categories.forEach(function (category) {
                category.classList.toggle(
                    "active",
                    category.dataset.category === "All"
                );
            });

            displaySoftware();

        }

    });


    // CATEGORY FILTER
    categories.forEach(function (button) {

        button.addEventListener("click", function () {

            selectedCategory = button.dataset.category;

            categories.forEach(function (category) {
                category.classList.toggle(
                    "active",
                    category === button
                );
            });

            searchInput.value = "";

            displaySoftware();

            document.getElementById("software").scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    // SOFTWARE DETAILS
    document.querySelectorAll(".details-button").forEach(function (button) {

        button.addEventListener("click", function () {

            modalTitle.textContent = button.dataset.name;

            modalDescription.textContent = button.dataset.description;

            modalLink.href = button.dataset.link;

            modal.hidden = false;

        });

    });


    // CLOSE MODAL
    closeModal.addEventListener("click", function () {

        modal.hidden = true;

    });


    // CLOSE WHEN CLICKING OUTSIDE
    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            modal.hidden = true;
        }

    });


    // CLOSE WITH ESCAPE KEY
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            modal.hidden = true;
        }

    });


    // INITIALIZE
    displaySoftware();

    console.log("Software Hub loaded successfully!");

});

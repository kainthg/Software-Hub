
document.addEventListener("DOMContentLoaded", function () {

    const categoryCards = document.querySelectorAll(".category-card");
    const categoryMessage = document.getElementById("category-message");

    categoryCards.forEach(function (card) {

        card.addEventListener("click", function () {

            // Remove active class from all categories
            categoryCards.forEach(function (item) {
                item.classList.remove("active");
            });

            // Add active class to selected category
            card.classList.add("active");

            // Show selected category name
            const categoryName = card.dataset.category;

            categoryMessage.textContent =
                categoryName + " category selected. Software listings coming soon!";

        });

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const infoToggle = document.getElementById("infoToggle");
    const infoCard = document.getElementById("infoCard");

    if (infoToggle && infoCard) {
        infoToggle.addEventListener("click", function () {
            void infoCard.offsetHeight; // Laptop fix
            infoCard.classList.toggle("show");
            infoToggle.classList.toggle("active");

            if (infoCard.classList.contains("show")) {
                infoToggle.querySelector("span").textContent = "✖ Close Info";
            } else {
                infoToggle.querySelector("span").textContent = "👤 View My Info";
            }
        });
    }

    const uniToggle = document.getElementById("uniToggle");
    const uniLinkBox = document.getElementById("uniLinkBox");

    if (uniToggle && uniLinkBox) {
        uniToggle.addEventListener("click", function () {
            void uniLinkBox.offsetHeight; // Laptop fix
            uniLinkBox.classList.toggle("show");
            uniToggle.classList.toggle("active");
        });
    }

});

/* =====================================
   SOFTWARE HUB - MAIN JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Software Hub is running successfully!");

    /* ===============================
       INFO TOGGLE FUNCTIONALITY
    ================================ */

    const infoToggle = document.getElementById("infoToggle");
    const infoCard = document.getElementById("infoCard");

    if (infoToggle && infoCard) {

        infoToggle.addEventListener("click", function () {

            infoCard.classList.toggle("show");
            infoToggle.classList.toggle("active");

            if (infoCard.classList.contains("show")) {
                infoToggle.querySelector("span").textContent = "✖ Close Info";
            } else {
                infoToggle.querySelector("span").textContent = "👤 View My Info";
            }

        });

    }

    /* ===============================
       UNIVERSITY LINK TOGGLE
    ================================ */

    const uniToggle = document.getElementById("uniToggle");
    const uniLinkBox = document.getElementById("uniLinkBox");

    if (uniToggle && uniLinkBox) {

        uniToggle.addEventListener("click", function () {

            uniLinkBox.classList.toggle("show");
            uniToggle.classList.toggle("active");

        });

    }

});


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Software Hub | All Software in One Place</title>

    <meta name="description" content="Discover software, download setups and explore installation guides at Software Hub.">

    <meta name="theme-color" content="#0b1120">

    <link rel="stylesheet" href="./style.css">

    <script src="./script.js" defer></script>
</head>

<body>

    <!-- NAVIGATION -->
    <header class="navbar">

        <a href="#home" class="logo">
            Software<span>Hub</span>
        </a>

        <nav>
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#software">Software</a>
            <a href="#about">About</a>
        </nav>

    </header>


    <!-- HERO SECTION -->
    <section class="hero" id="home">

        <div class="hero-content">

            <span class="hero-label">WELCOME TO SOFTWARE HUB</span>

            <h1>
                Everything You Need,
                <span>One Software Hub.</span>
            </h1>

            <p>
                Discover software, explore useful tools,
                download official setups and follow easy
                installation guides.
            </p>

            <div class="search-box">

                <input
                    type="search"
                    id="search"
                    placeholder="Search your favorite software..."
                    aria-label="Search software"
                >

                <button type="button" id="search-button">
                    Search
                </button>

            </div>

        </div>

    </section>


    <!-- CATEGORIES -->
    <section id="categories" class="section">

        <div class="section-heading">
            <span>EXPLORE</span>
            <h2>Software Categories</h2>
            <p>Find the right tools for your needs.</p>
        </div>

        <div class="category-grid">

            <button class="category-card active" type="button" data-category="All">
                <span>🌐</span>
                All Software
            </button>

            <button class="category-card" type="button" data-category="Office">
                <span>📄</span>
                Office Software
            </button>

            <button class="category-card" type="button" data-category="Networking">
                <span>🌍</span>
                Networking
            </button>

            <button class="category-card" type="button" data-category="Database">
                <span>🗄️</span>
                Database
            </button>

            <button class="category-card" type="button" data-category="Programming">
                <span>💻</span>
                Programming
            </button>

            <button class="category-card" type="button" data-category="Design">
                <span>🎨</span>
                Graphic Design
            </button>

            <button class="category-card" type="button" data-category="Utilities">
                <span>🛠️</span>
                Utilities
            </button>

        </div>

    </section>


    <!-- SOFTWARE SECTION -->
    <section id="software" class="section software-section">

        <div class="section-heading">
            <span>OUR COLLECTION</span>
            <h2>Popular Software</h2>
            <p>Explore useful software and official download sources.</p>
        </div>

        <div id="software-list" class="software-grid">

            <!-- OFFICE -->
            <article class="software-card" data-category="Office">

                <div class="software-icon">📄</div>

                <span class="software-category">OFFICE</span>

                <h3>Microsoft Office</h3>

                <p>Productivity tools for documents, spreadsheets and presentations.</p>

                <button type="button"
                    class="details-button"
                    data-name="Microsoft Office"
                    data-description="Microsoft Office provides productivity tools for creating documents, spreadsheets and presentations."
                    data-link="https://www.microsoft.com/microsoft-365">

                    View Details
                </button>

            </article>


            <!-- NETWORKING -->
            <article class="software-card" data-category="Networking">

                <div class="software-icon">🌐</div>

                <span class="software-category">NETWORKING</span>

                <h3>Cisco Packet Tracer</h3>

                <p>Network simulation software for learning networking concepts.</p>

                <button type="button"
                    class="details-button"
                    data-name="Cisco Packet Tracer"
                    data-description="Cisco Packet Tracer helps students and professionals simulate network configurations and practice networking."
                    data-link="https://www.netacad.com/cisco-packet-tracer">

                    View Details
                </button>

            </article>


            <!-- DATABASE -->
            <article class="software-card" data-category="Database">

                <div class="software-icon">🗄️</div>

                <span class="software-category">DATABASE</span>

                <h3>SQL Server</h3>

                <p>Database management platform for storing and managing data.</p>

                <button type="button"
                    class="details-button"
                    data-name="SQL Server"
                    data-description="Microsoft SQL Server is a relational database management system used to store, manage and query data."
                    data-link="https://www.microsoft.com/sql-server">

                    View Details
                </button>

            </article>


            <!-- PROGRAMMING -->
            <article class="software-card" data-category="Programming">

                <div class="software-icon">💻</div>

                <span class="software-category">PROGRAMMING</span>

                <h3>Visual Studio Code</h3>

                <p>Powerful and lightweight code editor for developers.</p>

                <button type="button"
                    class="details-button"
                    data-name="Visual Studio Code"
                    data-description="Visual Studio Code is a free source code editor with extensions, debugging and support for many programming languages."
                    data-link="https://code.visualstudio.com/">

                    View Details
                </button>

            </article>


            <!-- DESIGN -->
            <article class="software-card" data-category="Design">

                <div class="software-icon">🎨</div>

                <span class="software-category">GRAPHIC DESIGN</span>

                <h3>Adobe Photoshop</h3>

                <p>Professional image editing and graphic design software.</p>

                <button type="button"
                    class="details-button"
                    data-name="Adobe Photoshop"
                    data-description="Adobe Photoshop is a professional tool for photo editing, image manipulation and graphic design."
                    data-link="https://www.adobe.com/products/photoshop.html">

                    View Details
                </button>

            </article>


            <!-- UTILITIES -->
            <article class="software-card" data-category="Utilities">

                <div class="software-icon">🛠️</div>

                <span class="software-category">UTILITIES</span>

                <h3>7-Zip</h3>

                <p>Free file compression and archive management utility.</p>

                <button type="button"
                    class="details-button"
                    data-name="7-Zip"
                    data-description="7-Zip is a free file archiver that supports multiple compression formats."
                    data-link="https://www.7-zip.org/">

                    View Details
                </button>

            </article>

        </div>

        <p id="no-results" hidden>
            No software found. Try another search.
        </p>

    </section>


    <!-- ABOUT / FOOTER -->
    <footer id="about">

        <div class="footer-content">

            <h2>Software<span>Hub</span></h2>

            <p>
                Your destination for software and installation guides.
            </p>

            <p class="designer-credit">
                Designed &amp; Developed by
                <span>Muhammad Abdul Rehman</span>
            </p>

            <p class="copyright">
                © 2026 Software Hub. All Rights Reserved.
            </p>

        </div>

    </footer>


    <!-- SOFTWARE DETAILS MODAL -->
    <div class="modal" id="software-modal" hidden>

        <div class="modal-content">

            <button type="button" class="close-modal" id="close-modal" aria-label="Close">
                &times;
            </button>

            <span class="modal-label">SOFTWARE DETAILS</span>

            <h2 id="modal-title">Software Name</h2>

            <p id="modal-description"></p>

            <a href="#" id="modal-link" target="_blank" rel="noopener noreferrer">
                Visit Official Website
            </a>

        </div>

    </div>

</body>
</html>

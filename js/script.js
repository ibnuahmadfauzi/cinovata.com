$(document).ready(function () {
  // ==========================================================
  // ===== Header & Navbar Section =====
  // ==========================================================
  $("header").html(`
        <div class="logo-brand">
          <a href="/">
            <img src="images/logo-text.png" alt="Cinovata" />
          </a>
        </div>
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container">
              <button
                class="navbar-toggler bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item me-2">
                    <a class="nav-link text-light" href="/">Beranda</a>
                  </li>
                  <!-- <li class="nav-item me-2">
                    <a class="nav-link text-light" href="#">Kelas Gratis</a>
                  </li> -->
                  <li class="nav-item me-2">
                    <a class="nav-link text-light" href="/artikel.html"
                      >Artikel</a
                    >
                  </li>
                  <!-- <li class="nav-item me-2">
                    <a class="nav-link text-light" href="#">Vidio</a>
                  </li> -->
                  <!-- <li class="nav-item me-2">
                    <a class="nav-link text-light" href="#">Galeri</a>
                  </li> -->
                  <!-- <li class="nav-item me-2">
                    <a class="nav-link text-light" href="#">Buku</a>
                  </li> -->
                  <li class="nav-item me-2">
                    <a class="nav-link text-light" href="tentang-kami"
                      >Tentang Kami</a
                    >
                  </li>
                  <!-- <li class="nav-item me-2">
                    <a class="nav-link text-light" href="#">Portofolio</a>
                  </li> -->
                  <!-- <li class="nav-item me-2">
                    <a class="nav-link text-light" href="#">Layanan</a>
                  </li> -->
                </ul>
              </div>
            </div>
          </nav>
        </div>    
    `);
  // ==========================================================
  // ===== end Header Section =====
  // ==========================================================
});

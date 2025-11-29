$(document).ready(function () {
  $("aside").html(`
              <div class="mb-5">
                <form class="search-form">
                  <div class="mb-2">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apa Yang Kamu Cari ?"
                    />
                  </div>
                  <div class="mb-3">
                    <button class="btn btn-primary w-100">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="mb-5">
                <a href="#">
                  <img
                    src="images/iklan/add.png"
                    class="w-100"
                    alt="Cinovata Studio"
                  />
                </a>
              </div>
              <div class="mb-5">
                <h6 class="bg-primary text-light text-center rounded-2 py-1">
                  Artikel Terpopuler
                </h6>
                <div class="list-group" id="popular-articles"></div>
              </div>
              <div class="mb-5">
                <h6 class="bg-primary text-light text-center rounded-2 py-1">
                  Kategori
                </h6>
                <div id="kategori-sidebar"></div>
              </div>    
    `);

  // ===============================================
  // ===== Categories Rendering =====
  // ===============================================
  let htmlTag = "";
  for (let i = 0; i < tags.length; i++) {
    htmlTag += `
        <a href="#" class="text-decoration-none">
            <span class="badge text-bg-secondary">${tags[i]}</span>
        </a>
    `;
  }
  $("#kategori-sidebar").html(htmlTag);
  // ===============================================
  // ===== end Categories Rendering =====
  // ===============================================

  const popularArticles = articles.sort((a, b) => b.hit - a.hit).slice(0, 5);
  let htmlPopularArticles = "";
  for (let i = 0; i < popularArticles.length; i++) {
    htmlPopularArticles += `
            <a href="/artikel.html?slug=${popularArticles[i].slug}" class="list-group-item list-group-item-action">
                ${popularArticles[i].title}
            </a>
        `;
  }
  $("#popular-articles").html(htmlPopularArticles);
});

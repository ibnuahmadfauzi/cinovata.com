$(document).ready(function () {
  const latestArticles = articles.sort((a, b) => b.id - a.id).slice(0, 6);
  let htmlArticleList = "";
  for (let i = 0; i < latestArticles.length; i++) {
    htmlArticleList += `
            <div class="col-lg-6">
            <div class="card w-100 mb-3">
                <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Photo-Image-Icon-Graphics-10388619-1-1-580x386.jpg"
                class="card-img-top"
                alt="Cinovata Studio"
                />
                <div class="card-body">
                <h5 class="card-title">
                    ${latestArticles[i].title}
                </h5>
                <p class="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Dolores minus a maiores qui earum molestiae sunt,
                    dolorem voluptatem sint esse!
                </p>
                <a href="/artikel.html?slug=${latestArticles[i].slug}" class="btn btn-primary btn-sm"
                    >Selengkapnya</a
                >
                </div>
            </div>
            </div>
        `;
  }
  $(".article-container-home").html(htmlArticleList);
});

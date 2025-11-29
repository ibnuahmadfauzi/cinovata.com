$(document).ready(function () {
  $("#not-found-article").hide();
  $("#detail-article").hide();
  $("#list-article").hide();
  $("#show-more-article-btn").hide();

  function getAllArticle(count) {
    if (count > articles.length) {
      count = articles.length;
    }
    const latestArticles = articles.sort((a, b) => b.id - a.id).slice(0, count);
    let htmlArticleList = "";
    for (let i = 0; i < latestArticles.length; i++) {
      htmlArticleList += `
            <div class="col-lg-6">
            <div class="card w-100 mb-3">
                <img
                src="images/artikel/${latestArticles[i].thumbnail}"
                class="card-img-top"
                alt="Cinovata Studio"
                />
                <div class="card-body">
                <h5 class="card-title">
                    ${latestArticles[i].title}
                </h5>
                <a href="/artikel.html?slug=${latestArticles[i].slug}" class="btn btn-primary btn-sm"
                    >Selengkapnya</a
                >
                </div>
            </div>
            </div>
        `;
    }
    $("#list-article").html(htmlArticleList);
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  let newArticle;
  let findArticleStatus = false;

  if (slug !== null) {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].slug === slug) {
        newArticle = articles[i];
        findArticleStatus = true;
        break;
      }
    }

    if (findArticleStatus === true) {
      $("#article-title").text(newArticle.title);
      $("#article-date").html(
        "<i class='fas fa-calendar-alt me-2'></i>" + newArticle.created_at
      );
      $("#article-thumbnail").attr(
        "src",
        "images/artikel/" + newArticle.thumbnail
      );
      $("#article-body").html(newArticle.body);
      $("#detail-article").show();
    } else {
      $("#not-found-article").show();
    }
  } else {
    $("#list-article").show();
    $("#show-more-article-btn").show();
    let count = 6;
    getAllArticle(count);
    $("#show-more-article-btn").on("click", function () {
      count += 4;
      getAllArticle(count);
    });
  }
});

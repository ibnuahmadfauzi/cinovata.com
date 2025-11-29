$(document).ready(function () {
  $("#not-found-article").hide();
  $("#detail-article").hide();

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
    console.log("Tidak Ada Artikel");
  }
});

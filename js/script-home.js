$(document).ready(function () {
  let htmlArticleList = "";
  for (let i = 0; i < 4; i++) {
    htmlArticleList += `
            <div class="col-lg-6">
            <div class="card w-100 mb-3">
                <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Photo-Image-Icon-Graphics-10388619-1-1-580x386.jpg"
                class="card-img-top"
                alt="..."
                />
                <div class="card-body">
                <h5 class="card-title">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Est, ipsam!
                </h5>
                <p class="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Dolores minus a maiores qui earum molestiae sunt,
                    dolorem voluptatem sint esse!
                </p>
                <a href="#" class="btn btn-primary btn-sm"
                    >Selengkapnya</a
                >
                </div>
            </div>
            </div>
        `;
  }
  $(".article-container-home").html(htmlArticleList);
});

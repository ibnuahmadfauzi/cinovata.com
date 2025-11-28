let tags = [
  "Artikel",
  "Berita",
  "Bisnis",
  "Desain Grafis",
  "Edukasi",
  "Filsafat",
  "Fotografi",
  "Gaya Hidup",
  "Humor",
  "Kesehatan",
  "Kuliner",
  "Olahraga",
  "Pemrograman",
  "Review",
  "Teknologi",
  "Tips & Trik",
];

$(document).ready(function () {
  let htmlTag = "";
  for (let i = 0; i < tags.length; i++) {
    htmlTag += `
        <a href="#" class="text-decoration-none">
            <span class="badge text-bg-secondary">${tags[i]}</span>
        </a>
    `;
  }
  $("#kategori-sidebar").html(htmlTag);
});

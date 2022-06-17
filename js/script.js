$(".search-button").click(function () {
  let search = $(".search-term").val();
  let newUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`;
  fetch(newUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      let randomNumber = Math.floor(Math.random() * data.data.length);
      $("body").append(
        `<img src=${data.data[randomNumber].images.original.url}>`
      );
    });
});

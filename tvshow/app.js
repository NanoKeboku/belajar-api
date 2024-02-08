const form = document.querySelector("#form-group");
let srcImg;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelectorAll("img").forEach((img) => {
    img.remove();
  });
  const keyword = form.elements.movie.value;
  const config = {
    params: {
      q: keyword,
    },
  };
  const api = await axios.get("https://api.tvmaze.com/search/shows", config);
  takeImg(api.data);
  console.log(api.data);
});

const takeImg = (shows) => {
  for (const result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

const form = document.querySelector("#form-group");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelectorAll("img").forEach((x) => {
    x.remove();
  });
  const value = form.elements.movie.value;
  const config = {
    params: {
      q: value,
    },
  };

  const getApi = await axios.get("https://api.tvmaze.com/search/shows", config);
  //   console.log(getApi.data);
  imgGnt(getApi.data);
});

const imgGnt = async (shows) => {
  for (const result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

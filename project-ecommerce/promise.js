const movies = (url) => {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Error request timeout " + delay);
      } else {
        resolve(`Success : ${url} ${delay}`);
      }
    }, delay);
  });
};


movies("movies.com")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

movies("Superman");

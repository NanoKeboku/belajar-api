const req = (id, callback) => {
  const time = id === 1 ? 1000 : 2000;
  setTimeout(() => {
    const nama = id == 1 ? "Nando" : "Laba";
    callback({ id, nama });
  }, time);
};

const userSatu = req(1, (hasil) => {
  console.log(hasil);
});

const userDua = req(2, (hasil) => {
  console.log(hasil);
});

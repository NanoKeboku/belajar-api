const fs = require("node:fs");
//synchronous
// try {
//   fs.writeFileSync("test.txtt", "Hello World Node 2 belajar lagi");
// } catch (e) {
//   console.log(e);
// }

//asynchronous
// fs.writeFile("test.txt", "Hello world Asynchronous", (err) => {
//   console.log("error : ", err);
// });

//membaca isi file (synch)
// const data = fs.readFileSync("test.txt", "utf-8");
// try {
//   console.log(data);
// } catch (err) {
//   console.log("err :", err);
// }

//membaca isi file (async)'
// const dataDua = fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//Readline
const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Siapa nama anda :", (nama) => {
  rl.question("Berapa umur kamu : ", (umur) => {
    const data = {
      nama,
      umur,
    };
    fs.readFileSync("contacs.json", "utf-8");
    rl.close();
  });
});

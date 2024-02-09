// let user = prompt("masukkan nama");

// let ps = prompt("masukkan pw");
// if (user === "nando" && ps === "123") {
//   location.href = "./home.html";
// } else {
//   alert("salah tod");
// }

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user = document.getElementById("exampleInputEmail1");
  let pw = document.getElementById("exampleInputPassword1");
  if (user.value === "nando" && pw.value === "123") {
    location.href = "./home.html";
  } else {
    alert("salah");
  }
});

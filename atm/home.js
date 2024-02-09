let saldo = 1000000;
let dataSaldo = document.getElementById("saldo");

dataSaldo.innerHTML = saldo;

let ambil = document.getElementById("ambil");
ambil.addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("on");
  let btnAmbil = document.getElementById("btn-ambil");

  btnAmbil.addEventListener("click", function (event) {
    const inputambil = document.querySelector(".inputAmbil").value;
    saldo -= inputambil;
    if (inputambil % 50000 != 0) {
      event.preventDefault();
      alert("Gagal");
      return false;
    } else if (saldo <= 50000) {
      alert("Gagal lho");
      return false;
    } else if (inputambil <= 50000) {
      alert("isi inputannya");
      return false;
    }
    console.log(saldo);
    document.getElementById("ambilSaldo").innerHTML = saldo.toLocaleString();
    dataSaldo.innerHTML = saldo.toLocaleString();
  });
});

// let p = document.createElement("P");
// p.textContent = ""

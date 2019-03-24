(function() {
  "use strict";
var el = function(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }
    return document.querySelectorAll(element);
};
var hasilakhir = el("#hasil"),
    samadengan = el("#samdeng"),
    angka = el(".nomor"),
    lmbngmath = el(".math"),
    nomorini = "",
    nomorpertama = "",
    hasilnojs,
    operator;
var setnomor = function() {
    if (hasilnojs) {
      nomorini = this.getAttribute("data-nomor");
      hasilnojs = "";
    } else {
      nomorini += this.getAttribute("data-nomor");
    }
    hasilakhir.innerHTML = nomorini;
};
var gantinomor = function() {
    nomorpertama = nomorini;
    nomorini = "";
    operator = this.getAttribute("data-math");
    samadengan.setAttribute("data-hasil", "");
};
var hasilnomor = function() {
    nomorpertama = parseFloat(nomorpertama);
    nomorini = parseFloat(nomorini);
    switch (operator) {
      case "tambah":
        hasilnojs = nomorpertama + nomorini;
        break;
      case "kurang":
        hasilnojs = nomorpertama - nomorini;
        break;
      case "kali":
        hasilnojs = nomorpertama * nomorini;
        break;
      case "bagi":
        hasilnojs = nomorpertama / nomorini;
        break;
      default:
        hasilnojs = nomorini;
    }
    hasilakhir.innerHTML = hasilnojs;
    samadengan.setAttribute("data-hasil", hasilnojs);
    nomorpertama = 0;
    nomorini = hasilnojs;
};
var hapussemua = function() {
    nomorpertama = "";
    nomorini = "";
    hasilakhir.innerHTML = "0";
    samadengan.setAttribute("data-hasil", hasilnojs);
};
for (var i = 0, l = angka.length; i < l; i++) {
    angka[i].onclick = setnomor;
}
for (var i = 0, l = lmbngmath.length; i < l; i++) {
    lmbngmath[i].onclick = gantinomor;
}
  samadengan.onclick = hasilnomor;
  el("#clear").onclick = hapussemua;
}());
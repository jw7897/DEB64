window.onload = function() {
  document.getElementById("decode").onclick = decode;
  document.getElementById("encode").onclick = encode;
}

function decode() {
  let encodedStringAtoB = document.getElementById("input").value;
  let decodedStringAtoB = atob(encodedStringAtoB);
  document.getElementById("output").value = decodedStringAtoB;
}

function encode() {
  let decodedStringBtoA = document.getElementById("input").value;
  var encodedStringBtoA = btoa(decodedStringBtoA);
  document.getElementById("output").value = encodedStringBtoA;
}

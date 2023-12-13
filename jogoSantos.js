let baleia = document.querySelector("#baleia");
let B = document.querySelector("#b");

function iniciar() {
  let B = document.querySelector("#b").classList.add("inicia");
}
function botao() {
  iniciar();
  baleia.classList.add("pulo");
  setTimeout(function () {
    baleia.classList.remove("pulo");
  }, 1000);
}
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == " " || event.key == "ArrowUp") {
    iniciar();
    baleia.classList.add("pulo");
    setTimeout(function () {
      baleia.classList.remove("pulo");
    }, 1000);
  }
});

const perde = setInterval(function () {
  let BP = B.getBoundingClientRect();
  let BaAl = baleia.getBoundingClientRect();

  console.log(BP.left);
  if (
    (BP.left <= 312.203125) &
    (BP.left >= 100.203125) &
    (BaAl.bottom >= 350.59375)
  ) {
    B.classList.add("final");
    console.log("perdeu");
    B.computedStyleMap.animation = "none";

    document.getElementById("perdeu").innerHTML = `
     <input type="submit" id="reiniciar" onclick="location.reload()" value="Reiniciar">
     <br><br>
     <h1>SANTOS REBAIXADO</h1>`;
    document.getElementById("reiniciar").style.borderRadius = "5px";
    document.getElementById("reiniciar").style.border = "solid 2px black";
    document.getElementById("reiniciar").style.background = "red";
    document.getElementById("reiniciar").style.color = "rgb(0, 0, 0)";
    document.getElementById("reiniciar").style.position = "absolute";
    document.getElementById("reiniciar").style.bottom = "0 auto";
    document.getElementById("reiniciar").style.width = "100px";
    document.getElementById("reiniciar").style.height = "20px";
  }
}, 10);

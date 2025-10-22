const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const numero3 = document.getElementById("numero3");
const botones = document.querySelectorAll("button");
const menor = document.getElementById("menor");
const mayor = document.getElementById("mayor");
const igual = document.getElementById("igual");
let parrafo = document.getElementById("operacion");

let expresion = ""; //caja vacia para guardar la concatenacion

botones.forEach(function (
  boton
) /*por cada BOTON que exita, hace lo siguiente:*/ {
  boton.addEventListener("click", function () {
    /*cuando hago click por cada boton que encontro antes, pasa esto: */
    expresion += boton.textContent;
    parrafo.textContent = expresion;

    if (expresion.length === 3) {
      let n1 = parseFloat(expresion[0]);
      let operador = expresion[1];
      let n2 = parseFloat(expresion[2]);

      let resultado;

      if (operador === ">") {
        resultado = n1 > n2;
      }
      if (operador === "<") {
        resultado = n2 < n1;
      }
      if (operador === "=") {
        resultado = n1 === n2;
      }

      if (resultado === true) {
        parrafo.textContent = expresion + " = Verdadero";
      } else {
        parrafo.textContent = expresion + " = Falso";
      }

      expresion = "";
    }
  });
});

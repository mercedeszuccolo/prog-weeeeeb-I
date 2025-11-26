const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const numero3 = document.getElementById("numero3");
const menor = document.getElementById("menor");
const mayor = document.getElementById("mayor");
const igual = document.getElementById("igual");
const botones = document.querySelectorAll("button");
const operacion = document.getElementById("operacion");

let expresion = "";

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    expresion += boton.textContent;
    operacion.textContent = expresion;

    if (expresion.length === 3) {
      let num1 = parseFloat(expresion[0]);
      let op = expresion[1];
      let num2 = parseFloat(expresion[2]);

      let resultado;

      if (op === ">") {
        resultado = num1 > num2;
      }

      if (op === "<") {
        resultado = num1 < num2;
      }

      if (op === "=") {
        resultado = num1 === num2;
      }

      if (resultado === true) {
        operacion.textContent = expresion + " Verdadero";
      } else {
        operacion.textContent = expresion + " Falso";
      }

      expresion = "";
    }
  });
});

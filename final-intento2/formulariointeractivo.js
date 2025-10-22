const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const enviar = document.getElementById("enviar");
const contenedor = document.getElementById("contenedor");
const femenino = document.getElementById("mujer");
const masculino = document.getElementById("masculino");
const parrafoEscribiendo = document.getElementById("name");
const inputnombre = document.getElementById("idnombre");

femenino.addEventListener("change", function () {
  contenedor.style.backgroundColor = "pink";
});

masculino.addEventListener("change", function () {
  contenedor.style.backgroundColor = "blue";
});

inputnombre.addEventListener("input", function () {
  parrafoEscribiendo.textContent = inputnombre.value;
});

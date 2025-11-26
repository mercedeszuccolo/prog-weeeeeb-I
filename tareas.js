const input = document.getElementById("input-tarea");
const contenedorTarea = document.getElementById("lista");
const agregar = document.getElementById("boton-agregar");
const eliminar = document.getElementById("boton-eliminar");

//cuando escribo en el INPUT, y clickeo el BOTON, se agrega a la LISTA

function agregarTarea(tarea) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.innerText = tarea;
  const botonqueeliminalatarea = document.createElement("button");
  botonqueeliminalatarea.innerText = "Eliminar";

  botonqueeliminalatarea.addEventListener("click", function () {
    item.remove();
    botonqueeliminalatarea.remove();
  });
  contenedorTarea.appendChild(item);
  contenedorTarea.appendChild(botonqueeliminalatarea);
}

function eliminarlista() {
  contenedorTarea.innerHTML = "";
  input.value = "";
}

agregar.addEventListener("click", function () {
  agregarTarea(input.value);
});

eliminar.addEventListener("click", function () {
  eliminarlista();
});

// 1. Buscar elementos del HTML
const input = document.querySelector("#tarea");
const boton = document.querySelector(".agregar");
const lista = document.querySelector(".listado_tareas");

// 2. Cargar tareas si ya había algo guardado
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// 3. Función para guardar en localStorage
function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// 4. Función para mostrar las tareas en pantalla
function renderTareas() {
  lista.innerHTML = ""; // vaciamos la lista

  tareas.forEach((tarea, index) => {
    const item = document.createElement("li");
    item.textContent = tarea.texto;

    if (tarea.completada) {
      item.classList.add("completada");
    }

    // Cuando hacés clic, se marca o desmarca como completada
    item.addEventListener("click", () => {
      tareas[index].completada = !tareas[index].completada;
      guardarTareas();
      renderTareas();
    });

    lista.appendChild(item);
  });
}

// 5. Cuando hacés clic en el botón
boton.addEventListener("click", () => {
  const textoTarea = input.value.trim();

  if (textoTarea !== "") {
    tareas.push({ texto: textoTarea, completada: false });
    input.value = "";
    guardarTareas();
    renderTareas();
  }
});

// 6. Mostramos las tareas apenas se carga la página
renderTareas();

const btnReiniciar = document.querySelector("#reiniciar");

btnReiniciar.addEventListener("click", () => {
  localStorage.removeItem("tareas"); // borra solo tus tareas
  tareas = [];
  renderTareas();
});
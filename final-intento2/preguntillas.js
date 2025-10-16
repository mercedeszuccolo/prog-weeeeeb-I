const selects = document.querySelectorAll(".select");
const notafinal = document.getElementById("notafinal");

function cambiarColorDeNota(valor) {
  if (valor < 4) {
    notafinal.style.backgroundColor = "pink";
  } else if (valor >= 7) {
    notafinal.style.backgroundColor = "green";
  } else {
    notafinal.style.backgroundColor = "yellow";
  }
}

function cambiarNota() {
  let contadorDeNota = 0;

  selects.forEach((select) => {
    const valor = parseFloat(select.value);

    const article = select.closest("article");

    const textarea = article.querySelector("textarea");

    if (valor === 0) {
      textarea.style.backgroundColor = "pink";
    } else if (valor === 0.5) {
      textarea.style.backgroundColor = "yellow";
    } else if (valor === 1) {
      textarea.style.backgroundColor = "green";
    } else {
      textarea.style.backgroundColor = "white";
    }

    if (!isNaN(valor)) {
      contadorDeNota += valor;
    }
  });

  notafinal.value = contadorDeNota;
  cambiarColorDeNota(contadorDeNota);
}

selects.forEach((select) => {
  select.addEventListener("change", cambiarNota);
});

const unaColumna = document.getElementById("columna1");
const dosColumnas = document.getElementById("columna2");
const contenedor = document.getElementById("columnas");

unaColumna.addEventListener("change", () => {
  contenedor.classList.remove("dos-columnas");
  contenedor.classList.add("una-columna");
});

dosColumnas.addEventListener("change", () => {
  contenedor.classList.remove("una-columna");
  contenedor.classList.add("dos-columnas");
});

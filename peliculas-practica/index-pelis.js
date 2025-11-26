const peliculas = [
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    anio: 2010,
    genero: "Ciencia ficción",
    vista: true,
  },
  {
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    anio: 2008,
    genero: "Acción",
    vista: true,
  },
  {
    titulo: "Interstellar",
    director: "Christopher Nolan",
    anio: 2014,
    genero: "Ciencia ficción",
    vista: false,
  },
  {
    titulo: "Parasite",
    director: "Bong Joon-ho",
    anio: 2019,
    genero: "Drama / Suspenso",
    vista: false,
  },
  {
    titulo: "The Godfather",
    director: "Francis Ford Coppola",
    anio: 1972,
    genero: "Crimen / Drama",
    vista: true,
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    anio: 1994,
    genero: "Crimen / Humor negro",
    vista: false,
  },
  {
    titulo: "Fight Club",
    director: "David Fincher",
    anio: 1999,
    genero: "Drama / Psicológico",
    vista: true,
  },
  {
    titulo: "The Matrix",
    director: "Lana y Lilly Wachowski",
    anio: 1999,
    genero: "Ciencia ficción / Acción",
    vista: true,
  },
  {
    titulo: "Forrest Gump",
    director: "Robert Zemeckis",
    anio: 1994,
    genero: "Drama / Comedia",
    vista: false,
  },
  {
    titulo: "Gladiator",
    director: "Ridley Scott",
    anio: 2000,
    genero: "Acción / Histórico",
    vista: true,
  },
];

const buscador = document.getElementById("filtro");
const gridpelis = document.getElementById("grid");

mostrarPelis(peliculas);

function mostrarPelis(lista) {
  gridpelis.innerHTML = "";
  lista.forEach((peli) => {
    const pelicula = document.createElement("div");
    pelicula.classList.add("card-pelicula");
    pelicula.innerText = peli.titulo;

    gridpelis.appendChild(pelicula);
  });
}

function filtrarPelis() {
  const filtro = buscador.value.trim().toLowerCase();
  let pelisFiltradas = [];

  peliculas.forEach((peli) => {
    const titulo = peli.titulo.toLowerCase();
    if (titulo.includes(filtro)) {
      pelisFiltradas.push(peli);
    }
  });
  mostrarPelis(pelisFiltradas);
}

buscador.addEventListener("input", filtrarPelis);

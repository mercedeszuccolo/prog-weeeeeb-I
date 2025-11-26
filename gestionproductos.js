const nombre = document.getElementById("producto");
const precio = document.getElementById("precio");
const agregar = document.getElementById("agregar");
const listaProductos = document.getElementById("lista");
const filtroProductos = document.getElementById("filtro");
const total = document.getElementById("total");
let productos = [];

mostrarProductos();

function agregarProducto() {
  const nombreProducto = nombre.value.trim();
  const precioProducto = parseFloat(precio.value.trim());

  if (nombreProducto != "" && !isNaN(precioProducto)) {
    const nuevoProducto = {
      nombre: nombreProducto,
      precio: precioProducto,
    };
    productos.push(nuevoProducto);
    mostrarProductos(productos);

    nombre.value = "";
    precio.value = "";
  }
}

agregar.addEventListener("click", function () {
  agregarProducto();
});

function mostrarProductos() {
  listaProductos.innerHTML = "";
  let sumaTotal = 0;

  productos.forEach((producto) => {
    const item = document.createElement("li");
    item.classList.add("item-producto");
    item.textContent = producto.nombre + " " + producto.precio;
    listaProductos.appendChild(item);

    sumaTotal += producto.precio;

    total.textContent = " " + sumaTotal;
  });
}

function filtrarProducto() {
  filtroProductos.addEventListener("input", function () {
    const nombrefiltrado = filtroProductos.value.trim().toLowerCase();
    let productosFiltrados = [];

    productos.forEach((producto) => {
      const nombreProducto = producto.nombre.toLowerCase();
      if (nombreProducto.includes(nombrefiltrado)) {
        productosFiltrados.push(producto);
      }
    });
    mostrarProductos(productosFiltrados);
  });
}

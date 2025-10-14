/*document.addEventListener('DOMContentLoaded', function () {
    const input_nombre = document.getElementById("producto");
    const input_precio = document.getElementById("precio");
    const boton = document.getElementById("btn-agregar");

    let total = 0;

    boton.addEventListener("click", function (e) {
        e.preventDefault();

        if (validarCampos()) {
            agregarProducto();
        }
    });

    function validarCampos() {
        const error = document.getElementById("error");
        const nombre = input_nombre.value.trim();
        const precio = parseFloat(input_precio.value);

        if (nombre === "" || isNaN(precio) || precio < 0) {
            error.textContent = "Ingrese valores válidos en ambos campos";
            return false;
        } else {
            error.textContent = "";
            return true;

        }
    }

    function agregarProducto() {
        const contenedor = document.querySelector(".contenedor-grid");
        document.getElementById("vacio").style.display = "none";


        const nuevoProducto = document.createElement("div");
        nuevoProducto.textContent = `${input_nombre.value}  $${input_precio.value}`;
        nuevoProducto.classList.add("producto");

        contenedor.appendChild(nuevoProducto);

        total += parseFloat(input_precio.value);
        document.getElementById("total").textContent = "$" + total;

        // limpiar inputs
        input_nombre.value = "";
        input_precio.value = "";
        
    }
});*/

document.addEventListener("DOMContentLoaded", function(){
    const input_producto = document.getElementById("producto");
    const input_precio = document.getElementById("precio");
    const btn_agregar = document.getElementById("btn-agregar");

    let total = 0;

    btn_agregar.addEventListener("click", function(e){
        e.preventDefault();
        if(validarCampos()){
            agregarProducto();
        }
    });

    function validarCampos(){
        const error = document.getElementById("error");
        const nombre = input_producto.value.trim();
        const precio = parseFloat(input_precio.value);

        if(nombre === " " || isNaN(precio) || precio < 0){
            error.textContent = "Ingrese campos validos."
            return false;
        } else {
            error.textContent = "";
            return true;
        }
    }

    function agregarProducto(){
        const contenedorProductos = document.querySelector(".contenedor-grid");
        document.getElementById("lista-vacia").style.display = "none";

        const nuevoProducto = document.createElement("div");
        nuevoProducto.textContent = `${input_producto.value} $${input_precio.value}`;
        nuevoProducto.classList.add("producto");

        contenedorProductos.appendChild(nuevoProducto);

        total+=parseFloat(input_precio.value)
        document.getElementById("total").textContent="$" + total;

        input_precio.value = "";
        input_producto.value = "";
    }
})
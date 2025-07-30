/*document.addEventListener('DOMContentLoaded', function(){
    const input_nombre = document.getElementById("producto");
    const input_precio = document.getElementById("precio");
    const boton = document.getElementById("boton");

    boton.addEventListener("click", function(e){
        e.preventDefault();
        validarCampos();

        if(validarCampos()){
            agregarProducto();
        }
    
    function validarCampos(){
        const error = document.getElementById("error")

        if(!input_nombre && isNaN(input_precio) && input_precio <0){
            error.textContent = "Ingrese valores validos en ambos campos"
            return false;
        } else {
        return true;

        }
    }

    function agregarProducto(){
        const div_producto = document.createElement('div')
        div_producto.classList.add('producto')
    }
})

})*/
document.addEventListener('DOMContentLoaded', function () {
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
});
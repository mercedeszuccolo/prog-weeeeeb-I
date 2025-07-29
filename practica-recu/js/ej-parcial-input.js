document.getElementById("nombre").addEventListener("input", function(){
    const nombre = this.value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const resultado = document.getElementById("resultado");

    resultado.textContent = "El nombre es: " + nombre + " " + apellido;
})

document.getElementById("apellido").addEventListener("input", function(){
    const apellido = this.value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const resultado = document.getElementById("resultado");

    resultado.textContent = "El nombre es: " + nombre + " " + apellido;
})
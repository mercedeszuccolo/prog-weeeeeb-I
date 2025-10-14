document.addEventListener("DOMContentLoaded", function(){

    const nombre = document.getElementById("name");
    const mail = document.getElementById("email")
    const contraseña = document.getElementById("password")
    const repeContra = document.getElementById("repetir-password");
    const pais = document.getElementById("pais")
    const femenino = document.getElementById("femenino")
    const masculino = document.getElementById("masculino")
    const otro = document.getElementById("otro")
    const enviar = document.getElementById("btn-enviar")
    const cancelar = document.getElementById("btn-cancelar")
    
    function validarNombre(nombre){
        const error = document.getElementById("error-nombre");
        if(nombre.value.trim() === ""){
            error.textContent = "Nombre inválido";
            return false;
        } else { 
            error.textContent = "";
            return true;
        }
    }
    
    
    function validarContra(contra) {
        return contra.length >=6;
    }

    function validarRepeContra(contra, contraRepe){
        return contra === contraRepe;
    }

    function validarEmail(mail){
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regexEmail.test(mail);
    }

    function validarPais(opcion){
        return opcion.value != "";
    }

    function validarGenero(){
        return femenino.checked || masculino.checked || otro.checked;

    }

    enviar.addEventListener("click", function(e){
        e.preventDefault();
        if (validarNombre(nombre) && validarEmail(mail) && validarContra(contraseña.value) && validarRepeContra(contraseña.value, repeContra.value) 
        && validarPais(pais) && validarGenero()){
            console.log("Form enviado");
        } else {
            console.log("No se pudo enviar")
        }
    })
})
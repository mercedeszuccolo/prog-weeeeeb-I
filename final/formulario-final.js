document.addEventListener('DOMContentLoaded', () => {



   const error_nombre = document.getElementById("error-nombre");
   const error_email = document.getElementById("error-email");
   const contra = document.getElementById("error-contra");
    document.getElementById("error-repetir-contra").textContent = "";
    document.getElementById("error-pais").textContent = "";
    document.getElementById("error-genero").textContent = "";

    const nombre = document.getElementById("name").value.trim();
    const mail = document.getElementById("email").value.trim();
    const contra = document.getElementById("password").value.trim();
    const repe_contra = document.getElementById("repetir-password").value.trim();
    const select = document.getElementById("pais")
    const radioFemenino = document.getElementById("femenino");
    const radioMasculino = document.getElementById("masculino");
    const radioOtro = document.getElementById("otro")


    function validarNombre(usario){
        return 
    }
})
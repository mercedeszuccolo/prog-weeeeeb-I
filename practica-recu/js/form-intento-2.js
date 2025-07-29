const ERROR_MESSAGES = {
    usuarioInvalido: "El usuario debe tener entre 6 y 8 caracteres.",
    contraseniaLongitud: "La contraseña debe tener al menos 10 caracteres.",
    contraseniaCaracteres: "La contraseña debe tener al menos 1 letra, 1 numero y 1 caracter especial.",
    contraseniaRepetir: "Las contraseñas deben ser iguales."
}

   function validarUsuario (user){
        return user.length >= 6 && user.length <=8;
    }

    function validarLongitud (password){
        return password.length >= 10;
    } 

    function validarCaracteres(password){
    const tieneLetra = /[a-zA-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[\*\_\|\(\)\/]/.test(password);

    return tieneLetra && tieneNumero && tieneEspecial;
    }

    function contraseñasIguales(pass1, pass2){
        return pass1 === pass2;   
    }


document.getElementById("registrar").addEventListener("click", function(e){
    e.preventDefault();

    document.getElementById("error-usuario").textContent = "";
    document.getElementById("error-contrasenia-larga").textContent = "";
    document.getElementById("error-contrasenia-caracter").textContent = "";
    document.getElementById("error-contrasenia-repetir").textContent = "";

    const user = document.getElementById("usuario").value.trim();
    const password = document.getElementById("contrasenia").value.trim();
    const repetirPass = document.getElementById("repetirContrasenia").value.trim();

    if(!validarUsuario(user)){
        document.getElementById("error-usuario").textContent = ERROR_MESSAGES.usuarioInvalido;
    }

     if(!validarCaracteres(password)){
        document.getElementById("error-contrasenia-caracter").textContent = ERROR_MESSAGES.contraseniaCaracteres;
    }

    if(!validarLongitud(password)){
        document.getElementById("error-contrasenia-larga").textContent = ERROR_MESSAGES.contraseniaLongitud;
        }

    if (!contraseñasIguales(password, repetirPass)){
        document.getElementById("error-contrasenia-repetir").textContent = ERROR_MESSAGES.contraseniaRepetir;
    }

    if (validarUsuario(user) && validarCaracteres(password) && validarLongitud(password) && contraseñasIguales(password, repetirPass)){
        window.location.href = "form-intento-2-bienvenida.html";
    }
})

document.getElementById("cancelar").addEventListener("click", function(){
     document.getElementById("usuario").value = "";
    document.getElementById("contrasenia").value = "";
    document.getElementById("repetir-contrasenia").value = "";

    document.getElementById("error-usuario").textContent = "";
    document.getElementById("error-contrasenia-larga").textContent = "";
    document.getElementById("error-contrasenia-caracter").textContent = "";
    document.getElementById("error-contrasenia-repetir").textContent = "";
})

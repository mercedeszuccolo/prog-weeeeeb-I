const ERROR_MESSAGES = {
    errorusuario: "El nombre de usuario debe tener entre 6 y 8 caracteres",
    errorContraLongitud: "La contraseña debe tener 10 caracteres",
    errorContraIguales: "Las contraseñas deben ser iguales",
    errorContraCaracteres: "La contraseña debe tener al menos 1 letra, 1 numero y 1 caracter especial"
};

// 2. Funciones de validación 
function validarUsuario(usuario) {
    return usuario.length >= 6 && usuario.length <= 8;
}

function validarLongitud(password) {
    const tiene10 = password.length >= 10;
    return tiene10
}

function validarCaracteres(password){
    const tieneLetra = /[a-zA-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[*_|()/]/.test(password);
    return tieneLetra && tieneNumero && tieneEspecial;
}

function contraseñasIguales(pass1, pass2) {
    return pass1 === pass2;
}

document.getElementById("registrar").addEventListener("click", function(e){
    e.preventDefault();

    document.getElementById("error-usuario").textContent = "";
document.getElementById("error-contra-caracteres").textContent = "";
document.getElementById("error-contra-longitud").textContent = "";
document.getElementById("error-repetir-contra").textContent = "";

    const usuario = document.getElementById("usuario").value.trim();
    const contra = document.getElementById("contra").value.trim();
    const repetirContra = document.getElementById("repetir-contra").value.trim();

    if (!validarUsuario(usuario)){
        document.getElementById("error-usuario").textContent = ERROR_MESSAGES.errorusuario;
    }

    if (!validarCaracteres(contra)){
        document.getElementById("error-contra-caracteres").textContent = ERROR_MESSAGES.errorContraCaracteres;
    }

    if(!validarLongitud(contra)){
        document.getElementById("error-contra-longitud").textContent = ERROR_MESSAGES.errorContraLongitud;
    }

    if (!contraseñasIguales(contra, repetirContra)){
        document.getElementById("error-repetir-contra").textContent = ERROR_MESSAGES.errorContraIguales;
    }

    if (validarUsuario(usuario) && validarCaracteres(contra) && validarLongitud(contra) && contraseñasIguales(contra, repetirContra)){
        window.location.href = "form-bienvenida.html";
    }
})
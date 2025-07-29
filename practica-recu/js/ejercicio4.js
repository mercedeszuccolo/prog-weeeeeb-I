// Ejercicio 8: Evaluar contraseña
// Ingresá una contraseña. Al hacer clic:
//Si tiene menos de 6 caracteres → "Contraseña demasiado corta"
//Si contiene la palabra 123 → "Contraseña insegura"
//Si no, → "Contraseña válida"

const ERROR_MESSAGES = {
    contra_insegura: "Contraseña insegura",
    contra_corta: "Contraseña demasiado corta",
    contra_valida: "Contraseña valida"
};

//Trae la contraseña
document.getElementById("mostrarContra").addEventListener("click", function(e){
    e.preventDefault();

    const contra = document.getElementById("idContrasenia").value.trim();
    const error = document.getElementById("error-contrasenia");

    let validate = true;

    if (contra.length < 6){
        error.textContent = ERROR_MESSAGES.contra_corta;
        validate = false;
    } else if (contra.includes("123")){
        error.textContent = ERROR_MESSAGES.contra_insegura;
        validate=false;
    } else {
        error.textContent = ERROR_MESSAGES.contra_valida;
        validate = true;
    }
});

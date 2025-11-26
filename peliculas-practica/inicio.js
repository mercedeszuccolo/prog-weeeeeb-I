const usuario = document.getElementById("correo");
const password = document.getElementById("password");
const errorcorreo = document.getElementById("error-correo");
const errorpass = document.getElementById("error-pass");
const enviar = document.getElementById("enviar");

function validarUsuario(correo) {
  const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexemail.test(correo)) {
    errorcorreo.textContent = "Ingrese un correo valido";
    return false;
  }
  errorcorreo.textContent = "";
  return true;
}

function validarContra(pass) {
  const regexpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!regexpass.test(pass) && pass.length < 8) {
    errorpass.textContent =
      "La contraseña debe tener 8 caracteres, y minimo 1 numero y 1 letra";
    return false;
  }
  errorpass.textContent = "";
  return true;
}

enviar.addEventListener("click", function () {
  const correo = usuario.value;
  const pass = password.value;

  const correoValido = validarUsuario(correo);
  const passvalida = validarContra(pass);

  if (correoValido && passvalida) {
    alert("Bienvenido");
  }
});

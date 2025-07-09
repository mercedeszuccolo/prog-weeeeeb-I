//Seleccionar referencia del DOM
const boton = document.querySelector('button');
const color = document.getElementById('color'); //elemento p parrafo

function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i= 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random()*16); //usamos 16 q sn los 16 opciones posibles del let digitos
        colorHex += digitos[indiceAleatorio]; //expande la cadena de caracteres con el color hexa
    }

    return colorHex;
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio();
    //Actualizar el texto
    color.textContent = colorAleatorio;
    //Actualizar color de fondo
    document.body.style.backgroundColor = colorAleatorio;
})

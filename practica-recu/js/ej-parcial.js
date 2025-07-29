
//Concatenar numeros en string de un input
/*document.getElementById("btn-mostrar").addEventListener("click", function(){
    //siempre llamar a los valores adentro del evento para que los tome
    const numero1 = document.getElementById("numero1").value.trim(); //ponerle el value a los inputs
    const numero2 = document.getElementById("numero2").value.trim();
    const resultado = document.getElementById("resultado");

    if (numero1 !== "" && numero2 !== ""){
        resultado.textContent = "La concatenacion es: " + numero1 + numero2;
    } else {
        resultado.textContent = "Ambos campos deben estar completos."
    }
});*/


//Sumar numeros de un input
document.getElementById("btn-mostrar").addEventListener("click", function(){
    //siempre llamar a los valores adentro del evento para que los tome
    const valor1 = document.getElementById("numero1").value.trim(); //ponerle el value a los inputs
    const valor2 = document.getElementById("numero2").value.trim();
    const resultado = document.getElementById("resultado");
    
    if(valor1 !== "" && valor2 !== ""){
    resultado.textContent = "Resultado: " + (Number(valor1) + Number(valor2));
    } else {
        resultado.textContent = "Ambos campos deben estar completos."
    }
});


/*document.addEventListener("DOMContentLoaded", function(){
    const selects = document.querySelectorAll(".selects");
    const notaFinal = document.getElementById("notaFinal");

    function colorNotalFinal(valor){
        if(valor<4){
            notaFinal.style.backgroundColor = "pink";
        } else if (valor >= 7){
            notaFinal.style.backgroundColor = "green";
        } else {
            notaFinal.style.backgroundColor = "yellow";
        }
    }

    function cambiarNota(){
        let contadorNota = 0;

        selects.forEach(seleccion => {
            const valor = parseFloat(seleccion.value);

            const article = seleccion.closest("article");

            const textarea = article.querySelector("textarea");

            if (valor === 0){
                textarea.style.backgroundColor = "pink"
            } else if (valor === 0.5){
                textarea.style.backgroundColor = "yellow";
            } else if (valor===1){
                textarea.style.backgroundColor = "green";
            } else {
                textarea.style.backgroundColor = "white";
            }

            if (!isNaN(valor)){
                contadorNota+=valor;
            }
        });

        notaFinal.textContent = contadorNota;

        colorNotalFinal(contadorNota);
    }

    selects.forEach(seleccion => {
        seleccion.addEventListener("change", cambiarNota)
    });
})*/



document.addEventListener("DOMContentLoaded", function(){
    const selects = document.querySelectorAll(".selects");
    const notaFinal = document.getElementById("notaFinal");
    const columna1 = document.getElementById("columna1");
    const columna2 = document.getElementById("columna2");
    const contenedor = document.getElementById("columna");

    function cambiarColorNotaFinal(valor){
        if(valor<4){
            notaFinal.style.backgroundColor = "green";
        } else if(valor>=7){
            notaFinal.style.backgroundColor = "pink";
        } else {
            notaFinal.style.backgroundColor = "yellow";
        }
    }

    function cambiarValorNotaFinal(){
        let contadorDeNota = 0;

        selects.forEach(select => {
            const valor = parseFloat(select.value);
            const article = select.closest("article");
            const textarea = article.querySelector("textarea");

            if(valor===0){
                textarea.style.backgroundColor = "green";
            } else if (valor===0.5){
                textarea.style.backgroundColor = "yellow";
            } else if(valor===1){
                textarea.style.backgroundColor = "pink"
            } else {
                textarea.style.backgroundColor = "white";
            }
            if (!isNaN(valor)){
            contadorDeNota += valor;
            }
        });

        notaFinal.textContent = contadorDeNota;
        cambiarColorNotaFinal(contadorDeNota);
    }

    selects.forEach(select => {
        select.addEventListener("change", cambiarValorNotaFinal)
    });

    columna1.addEventListener("change", () => {
        contenedor.classList.remove("dos-columnas");
        contenedor.classList.add("una-columna");
    });

    columna2.addEventListener("change", () => {
        contenedor.classList.remove("una-columa");
        contenedor.classList.add("dos-columnas")
    });
})
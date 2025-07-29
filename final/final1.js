document.addEventListener("DOMContentLoaded", function(){
    const selects = document.querySelectorAll(".select")
    const notaFinal = document.getElementById("notaFinal");
    console.log(selects);


    function colorNotaFinal(valor){
        if (valor < 4){
            notaFinal.style.backgroundColor = "pink";
        } else if (valor >= 7){
            notaFinal.style.backgroundColor = "green";
        } else {
            notaFinal.style.backgroundColor = "yellow"
        }
    }



    function cambiarNota(){
        let contadorDeNota = 0;

        selects.forEach(select => {
            const valor = parseFloat(select.value);

           // 1. Buscar el <article> padre de cada select
        const article = select.closest("article");

        // 2. Dentro de ese article, buscar el textarea
        const textarea = article.querySelector("textarea");

        // 3. Cambiar color del textarea según valor
        if (valor === 0) {
            textarea.style.backgroundColor = "pink";
        } else if (valor === 0.5) {
            textarea.style.backgroundColor = "yellow";
        } else if (valor === 1) {
            textarea.style.backgroundColor = "green";
        } else {
            textarea.style.backgroundColor = "white";
        }

            
            if (!isNaN(valor)){
                contadorDeNota+=valor;
            }
        });
        
        notaFinal.textContent = contadorDeNota;

        colorNotaFinal(contadorDeNota)

    }


        selects.forEach(select => {
        select.addEventListener("change", cambiarNota) 
        
    });


    const unaColumna = document.getElementById("columna1");
const dosColumnas = document.getElementById("columna2");
const contenedor = document.getElementById("columnas");

unaColumna.addEventListener("change", () => {
  contenedor.classList.remove("dos-columnas");
  contenedor.classList.add("una-columna");
});

dosColumnas.addEventListener("change", () => {
  contenedor.classList.remove("una-columna");
  contenedor.classList.add("dos-columnas");
});

}
)




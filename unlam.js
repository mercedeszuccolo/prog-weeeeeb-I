const input = document.getElementById("nombre-uni");
const nombreCambiado = document.getElementById("id-universidad");
const violeta = document.getElementById("violeta");
const celeste = document.getElementById("celeste");
const naranja = document.getElementById("naranja");
const reestablecer = document.getElementById("reestablecer");
const articleUniversidad = document.getElementById("articleUni");
const articleDatos = document.getElementById("articleDatos");

input.addEventListener("input", function(){
    
    nombreCambiado.textContent = input.value;
})

violeta.addEventListener("click", function(){
    articleUniversidad.style.backgroundColor = "violet";
    articleUniversidad.style.color = "white";
})

celeste.addEventListener("click", function(){
    articleUniversidad.style.backgroundColor = "aqua";
    articleUniversidad.style.color = "white";
})

naranja.addEventListener("click", function(){
    articleUniversidad.style.backgroundColor = "orange";
    articleUniversidad.style.color = "white";
})

reestablecer.addEventListener("click", function(){
    articleUniversidad.style.backgroundColor = "white";
    articleUniversidad.style.color="black";
})
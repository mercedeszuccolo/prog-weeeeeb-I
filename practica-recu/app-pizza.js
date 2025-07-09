const albahaca = document.getElementById('albahaca');



function mostrarClic(e){
    console.log(e.target);
}

albahaca.addEventListener('click', mostrarClic);
document.addEventListener("DOMContentLoaded", main);

function main() {
    console.log('loaded');

    //Desactivamos poder arrastrar (ghosting) la imagen
    document.getElementById('cuadrado').setAttribute('draggable', false);

    let cuadrado = document.getElementById('cuadrado');
    let contenedor = document.getElementById('contenedor');
    let contador = document.getElementById('contador');

    cuadrado.addEventListener('mousedown', function(e) {
        console.log(e.type);
        contenedor.classList.remove("sm");
        contenedor.classList.add("lg");
        contador.textContent = parseInt(contador.textContent) + 1;
        console.log(contador.textContent);
    })

    cuadrado.addEventListener('mouseup', function(e) {
        console.log(e.type);
        contenedor.classList.remove("lg");
        contenedor.classList.add("sm");
    })
}
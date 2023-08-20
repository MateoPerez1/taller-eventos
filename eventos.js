function saludarDesdeDiv() {
    alert('¡Hola! Soy el div');
}


const divContenedor = document.querySelector('.boton-container');


divContenedor.addEventListener('click', saludarDesdeDiv);
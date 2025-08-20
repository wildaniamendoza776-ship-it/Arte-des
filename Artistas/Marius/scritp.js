document.addEventListener('DOMContentLoaded', () => {

    // Carrusel de banners
    const images = document.querySelectorAll('.banner-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Cambia la imagen cada 5 segundos
    setInterval(showNextImage, 5000);

    // Lógica para el botón de navegación
    const navButton = document.getElementById('enlace-a-otra-pagina');
    navButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('¡Has hecho clic para ir a la página de Artistas!');
        
         window.location.href = '../index.html';
    });

    // Lógica para actualizar el output del range
    const opinionRange = document.getElementById('opinion');
    const opinionOutput = opinionRange.nextElementSibling;

    opinionRange.addEventListener('input', () => {
        opinionOutput.value = opinionRange.value;
    });

});

// Lógica para la barra de progreso
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progressPercentage = (scrollPosition / totalHeight) * 100;
    
    progressBar.style.width = progressPercentage + '%';
});
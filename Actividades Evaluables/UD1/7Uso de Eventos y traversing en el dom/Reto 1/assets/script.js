const mainImage = document.querySelector('.main img');
const thumbnails = document.querySelectorAll('.thumbnails img');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');
const colors = document.querySelectorAll('.colors .color');
const mainContainer = document.querySelector('.main');

let sizeInicial = 1; // Tamaño inicial
const step = 1; // Incremento/disminución
const scaleStep = 1;
const minScale = 0.2; // Escala mínima para evitar deformación

// Cambiar imagen principal al hacer clic o arrastrar
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
    thumbnail.addEventListener('dragstart', event => {
        event.preventDefault();
        mainImage.src = thumbnail.src;
    });
});

// Cambiar tamaño de la imagen principal
function zoom(step) {
    sizeInicial = Math.max(minScale, sizeInicial + step * scaleStep);
    mainImage.style.transform = `scale(${sizeInicial})`;
}

// Eventos para las lupas
zoomInButton.addEventListener('click', () => zoom(1));
zoomOutButton.addEventListener('click', () => zoom(-1));

// Cambiar color del borde
colors.forEach(color => {
    color.addEventListener('click', event => {
        if (event.ctrlKey) {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            mainContainer.style.borderColor = randomColor;
        } else {
            mainContainer.style.borderColor = color.style.backgroundColor;
        }
    });
});

// Click derecho para reducir tamaño tres veces
mainImage.addEventListener('contextmenu', event => {
    event.preventDefault();
    for (let i = 0; i < 3; i++) zoom(-1);
});

// Click izquierdo para aumentar tamaño tres veces
mainImage.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) zoom(1);
});

// Restaurar tamaño original con el botón del scroll
mainImage.addEventListener('mousedown', event => {
    if (event.button === 1) { // Botón de scroll
        event.preventDefault();
        sizeInicial = 1;
        mainImage.style.transform = 'scale(1)';
    }
});

// Asegurar que la imagen no tiene transformaciones adicionales al cargar
window.addEventListener('load', () => {
    mainImage.style.transformOrigin = 'center';
    mainImage.style.transform = `scale(${sizeInicial})`;
});
/* Ejercicio 1: Click y Doble Click.
Ejemplo: Cambiar el tamaño de un div al hacer clic y al hacer doble clic.

Reto: Haz que al hacer clic en el div, cambie tanto el color como el tamaño, y al hacer doble
clic, vuelva a sus valores iniciales.*/

const cuadrado = document.getElementById("miCuadro");

// Valores iniciales del cuadrado
cuadrado.style.width = "200px";
cuadrado.style.height = "200px";
cuadrado.style.backgroundColor = "lightblue";
cuadrado.style.transition = "all 0.3s ease"; // Suaviza los cambios

// Función para cambiar el tamaño y color al hacer clic
cuadrado.addEventListener("click", () => {
    cuadrado.style.width = "300px";
    cuadrado.style.height = "300px";
    cuadrado.style.backgroundColor = "coral";
});

// Función para restablecer el tamaño y color al hacer doble clic
cuadrado.addEventListener("dblclick", () => {
    cuadrado.style.width = "200px";
    cuadrado.style.height = "200px";
    cuadrado.style.backgroundColor = "lightblue";
});


/* Ejercicio 2: Hover con mouseenter y mouseleave.
Ejemplo: Cambiar el color de texto de un párrafo cuando el ratón pasa por encima. 

Reto: Haz que al pasar el ratón sobre el texto, el tamaño también cambie junto al color, y
vuelve a sus valores iniciales al salir.*/

const parrafo = document.getElementById("miParrafo");

// Establecemos los valores iniciales del párrafo
parrafo.style.fontSize = "16px";
parrafo.style.color = "black";
parrafo.style.transition = "all 0.3s ease"; // Suaviza los cambios

// Evento para cambiar color y tamaño al pasar el ratón por encima
parrafo.addEventListener("mouseenter", () => {
    parrafo.style.fontSize = "20px";
    parrafo.style.color = "blue";
});

// Evento para restablecer color y tamaño al quitar el ratón
parrafo.addEventListener("mouseleave", () => {
    parrafo.style.fontSize = "16px";
    parrafo.style.color = "black";
});

/* Ejercicio 3: preventDefault en Formularios.
Ejemplo: El método preventDefault() evita la acción predeterminada de un evento. En
formularios, puede usarse para evitar su envío hasta que se cumpla una condición. Prevenir
el envío de un formulario hasta que un campo determinado esté relleno.

Reto: Añade validación para que no se permita enviar el formulario si otro campo de correo
electrónico está vacío o mal formado. */

const formularioEmail = document.getElementById("miFormulario");
const emailInput = document.getElementById("email");
const Error = document.getElementById("mensajeError");

formularioEmail.addEventListener("submit", function (event) {
    if (!emailInput.value || !validarEmail(emailInput.value)) {
        event.preventDefault(); // Prevenir envío si el correo es inválido
    }
});

// Función para validar el formato de correo electrónico
function validarEmail(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

/* Ejercicio 4: keydown y keyup. 
Ejemplo: keydown se activa al presionar una tecla y keyup cuando se libera. Estos
eventos permiten capturar y manipular entradas de teclado en tiempo real. Mostrar un
mensaje cuando se presiona la tecla Enter en un campo de texto. 

Reto: Crea un contador que aumente cada vez que se presiona la tecla de espacio y se
reinicie cuando se suelte.*/

let contador = 0;
const contadorDisplay = document.getElementById("contador");

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        contador++;
        contadorDisplay.textContent = `Contador: ${contador}`;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        contador = 0;
        contadorDisplay.textContent = `Contador: ${contador}`;
    }
});

/* Ejercicio 5: focus y blur en Formularios.
Ejemplo: focus y blur son eventos de formulario que indican cuando un campo obtiene o
pierde el foco, útiles para cambiar el estilo del campo. Mostrar un mensaje al obtener el foco
y ocultarlo al perderlo. 

Reto: Haz que al enfocar el campo, cambie el texto de placeholder, y que vuelva al
original al desenfocarlo.*/

const campoTexto = document.getElementById("miCampoTexto");
const placeholderOriginal = campoTexto.placeholder;

campoTexto.addEventListener("focus", () => {
    campoTexto.placeholder = "Escribe algo...";
});

campoTexto.addEventListener("blur", () => {
    campoTexto.placeholder = placeholderOriginal;
});

/* Ejercicio 6: addEventListener y removeEventListener.
Ejemplo: addEventListener permite agregar múltiples listeners a un evento, mientras
removeEventListener quita un listener. Esto es útil para modular el manejo de eventos.
Cambiar el color del fondo de una sección al hacer clic y eliminar el evento tras dos clics. 

Reto: Usa addEventListener para activar un contador que se incrementa en cada clic, y
luego desactiva el evento una vez que llegue a 5.*/

let clickCount = 0;
const section = document.getElementById("miSeccion");

function handleClick() {
    clickCount++;
    section.style.backgroundColor = clickCount % 2 === 0 ? "lightgreen" : "lightcoral";
    if (clickCount >= 5) {
        section.removeEventListener("click", handleClick);
    }
}

section.addEventListener("click", handleClick);

/* Ejercicio 7: Propagación de Eventos con stopPropagation.
Ejemplo: stopPropagation() evita que el evento se propague a otros elementos. Útil en
estructuras anidadas donde se requiere que el evento solo afecte al elemento inmediato.
Crear dos divs anidados, donde solo el más interno responda al evento click.

Reto: Añade un tercer nivel de div anidado y haz que el click solo dispare el alert en el
div más interno. */

document.getElementById("outer").onclick = function () {
    alert("Contenedor externo clickeado");
}

document.getElementById("inner").onclick = function (event) {
    alert("Contenedor interno clickeado");
}

document.getElementById("inner2").onclick = function (event) {
    event.stopPropagation();
    alert("Contenedor interno 2 clickeado");
}



/* Ejercicio 8: Resize con Eventos de Navegador.
Ejemplo: El evento resize se activa al cambiar el tamaño de la ventana del navegador, útil
para ajustar el diseño en respuesta al tamaño de pantalla. Mostrar el tamaño de la ventana
en un párrafo que se actualice en cada cambio.

Reto: Cambia el color de fondo a rojo si el ancho de la ventana es menor a 600px, y a verde
si es mayor.  */

const tamañoVentana = document.getElementById("tamañoVentana");

function actualizarVentana() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    tamañoVentana.textContent = `Tamaño de la ventana: ${ancho}px x ${alto}px`;

    if (ancho < 600) {
        tamañoVentana.style.backgroundColor = "red";
    } else {
        tamañoVentana.style.backgroundColor = "green";
    }
}

window.addEventListener("resize", actualizarVentana);

actualizarVentana();



/* Ejercicio 9: keydown, keyup y keypress para detectar teclas.
Ejemplo: keydown: se activa cuando se mantiene presionada una tecla. keyup: se dispara
al liberar la tecla. keypress: registra la tecla pulsada y repite el evento mientras se
mantenga presionada (en desuso y poco recomendado en algunos navegadores). Mostrar
un mensaje cuando el usuario presiona la tecla “Enter”. 

Reto: Detecta cuando el usuario escribe la letra “a” y muestra un mensaje en pantalla. */

document.getElementById('miInput').addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        document.getElementById('mensaje').textContent = '¡Presionaste Enter!';
    } else if (event.key === 'a') {
        document.getElementById('mensaje').textContent = '¡Presionaste la letra "a"!';

    } else {
        document.getElementById('mensaje').textContent = '';
    }
});



/* Ejercicio 10: Evento input en Formularios.
Ejemplo: El evento input se activa cuando se cambia el contenido de un input, incluyendo
texto y selección. Mostrar la longitud del texto ingresado en un párrafo aparte. 

Reto: Agrega una advertencia si la longitud supera los 10 caracteres. */

const textInput = document.getElementById('textInput');
const textLength = document.getElementById("textLength");
const warning = document.getElementById("warning");

textInput.addEventListener("input", (event) => {
    const length = event.target.value.length;
    
    textLength.textContent = `Longitud del texto: ${length}`;
    
    if (length > 10) {
        warning.style.display = "block";
    } else {
        warning.style.display = "none";
    }
});


/* Ejercicio 11: focus y blur en Formularios.
Ejemplo: focus: se dispara cuando el elemento gana el foco. blur: se activa cuando el
elemento pierde el foco. Restaurar el color de fondo al perder el foco.

Reto: Cambia el color de fondo a rojo si el usuario deja el input vacío. */

const inputFocusBlur = document.getElementById("inputFocusBlur");

inputFocusBlur.addEventListener("focus", () => {
    inputFocusBlur.style.backgroundColor = "";
});

inputFocusBlur.addEventListener("blur", () => {
    if (inputFocusBlur.value.trim() === "") {
        inputFocusBlur.style.backgroundColor = "red";
    } else {
        inputFocusBlur.style.backgroundColor = "";
    }
});




/* Ejercicio 12: submit y preventDefault().
Ejemplo: submit: permite capturar el envío de formularios. preventDefault(): evita el
comportamiento por defecto, como recargar la página en el envío de un formulario. Mostrar
un mensaje en pantalla en lugar de enviar el formulario.
 
Reto: Haz que el mensaje sea rojo si el campo está vacío y verde si tiene texto. */

// Selecciona el formulario, el campo de entrada y el párrafo del mensaje
const formulario = document.getElementById("miFormulario");
const nombreInput = document.getElementById("nombreInput");
const mensaje = document.getElementById("mensaje");

// Escucha el evento submit en el formulario
formulario.addEventListener("submit", (event) => {
    // Evita el envío del formulario
    event.preventDefault();

    // Verifica si el campo de entrada está vacío
    if (nombreInput.value.trim() === "") {
        mensaje.textContent = "Por favor, completa el campo.";
        mensaje.style.color = "red"; // Mensaje en rojo si está vacío
    } else {
        mensaje.textContent = "Formulario enviado con éxito.";
        mensaje.style.color = "green"; // Mensaje en verde si tiene texto
    }
});


/* Ejercicio 13: mouseenter y mouseleave para Hovers.
Ejemplo: mouseenter: activa cuando el cursor entra en un elemento. mouseleave: activa
cuando el cursor sale de un elemento. Mostrar un mensaje temporal al pasar el cursor por
encima de un elemento.

Reto: Agrega un mensaje diferente al poner el cursor y al retirarlo. */

// Selecciona el área del div y el elemento del mensaje
const hoverDiv = document.getElementById("hoverDiv");
const hoverMessage = document.getElementById("hoverMessage");

// Evento mouseenter: muestra un mensaje al entrar en el área
hoverDiv.addEventListener("mouseenter", () => {
    hoverMessage.textContent = "¡Has pasado el cursor sobre el contenedor!";
});

// Evento mouseleave: muestra un mensaje al salir del área
hoverDiv.addEventListener("mouseleave", () => {
    hoverMessage.textContent = "Has retirado el cursor del contenedor.";
});




/* Ejercicio 14: Propiedad pageX y pageY en Eventos de Ratón.
Ejemplo: Actualizar las coordenadas en tiempo real mientras el ratón se mueve.

Reto: Restringe la visualización de las coordenadas a una sección específica de la pantalla. */

// Selecciona el área de seguimiento y el párrafo de coordenadas
const trackingArea = document.getElementById("trackingArea");
const coordinates = document.getElementById("coordinates");

// Evento mousemove: actualiza las coordenadas dentro del área
trackingArea.addEventListener("mousemove", (event) => {
    const x = event.pageX - trackingArea.offsetLeft;
    const y = event.pageY - trackingArea.offsetTop;
    coordinates.textContent = `Posición del ratón: X: ${x}, Y: ${y}`;
});

// Eventos mouseleave y mouseenter para limpiar o restaurar el mensaje
trackingArea.addEventListener("mouseleave", () => {
    coordinates.textContent = "Posición del ratón: Fuera del área";
});


/* Ejercicio 15: target y currentTarget en Eventos.
Ejemplo: target: el elemento que disparó el evento. currentTarget: el elemento actual que
maneja el evento. Mostrar el texto del elemento clicado.

Reto: Agregar un borde rojo al elemento clicado y eliminarlo cuando se clica en otro. */

const clickArea = document.getElementById("clickArea");
const output = document.getElementById("output");

let previousClickedElement = null;

clickArea.addEventListener("click", (event) => {
    if (event.target.classList.contains("clickable")) {
        
        output.textContent = `Has clicado en: ${event.target.textContent}`;

        if (previousClickedElement) {
            previousClickedElement.style.border = "";
        }

        event.target.style.border = "2px solid red";
        previousClickedElement = event.target;
    }
});


/* Ejercicio 16: stopPropagation().
Ejemplo: Evita que un evento se propague a otros elementos padres. Mostrar un mensaje
en el padre y otro en el hijo.

Reto: Agrega otro nivel anidado y evita que el evento se propague hasta el abuelo. */

const grandpa = document.getElementById("grandpa");
const father = document.getElementById("father");
const son = document.getElementById("son");
const showMessage = document.getElementById("showMessage");

grandpa.addEventListener("click", () => {
    showMessage.textContent = "Evento en el abuelo";
});

father.addEventListener("click", () => {
    showMessage.textContent = "Evento en el padre";
});

son.addEventListener("click", (event) => {
    showMessage.textContent = "Evento en el hijo";
    event.stopPropagation(); // Evita que el evento se propague hasta el padre y el abuelo
});



/* Ejercicio 17: DOMContentLoaded.
Ejemplo: DOMContentLoaded: se activa cuando el contenido HTML ha sido
completamente cargado, antes de los recursos externos. Ocultar un mensaje de carga una
vez el contenido se haya cargado. 

Reto: Muestra un saludo en lugar del mensaje de carga una vez el contenido esté listo.*/

document.addEventListener("DOMContentLoaded", () => {
    const messageLoad = document.getElementById("messageLoad");

    // Cambia el texto del mensaje una vez el contenido esté completamente cargado
    messageLoad.textContent = "¡Bienvenido a la página!";
});


/* Ejercicio 18: scroll en el Navegador.
Ejemplo: scroll: se activa cuando la página o un elemento desplazable es desplazado.
Mostrar el porcentaje de scroll que ha hecho el usuario. 

Reto: Cambia el color de fondo a medida que el usuario se desplaza por la página.*/

// Selecciona el elemento para mostrar el porcentaje de scroll
const porcentajeScroll = document.getElementById("porcentajeScroll");

// Escucha el evento scroll en la ventana
window.addEventListener("scroll", () => {
    // Calcula el porcentaje de desplazamiento en función de la altura total y el desplazamiento actual
    const scrollTop = window.scrollY; // Cantidad de píxeles desplazados desde la parte superior
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;

    // Muestra el porcentaje de scroll
    porcentajeScroll.textContent = `Porcentaje de scroll: ${Math.round(scrollPercent)}%`;

    // Cambia el color de fondo en función del porcentaje de scroll
    // Va de un tono claro a uno más oscuro conforme se desplaza
    document.body.style.backgroundColor = `rgb(${255 - scrollPercent * 2.55}, ${255 - scrollPercent * 1.55}, ${255})`;
});



/* Ejercicio 19: dragenter y dragleave para Elementos Arrastrables.
Ejemplo: dragenter: se dispara cuando un elemento arrastrable entra en un área de
destino. dragleave: se activa cuando el elemento arrastrable sale del área de destino.
Mostrar el porcentaje de scroll que ha hecho el usuario.

Reto: Muestra una alerta al soltar el elemento arrastrado dentro del contenedor. */

const arrastrable = document.getElementById("arrastrable");
const areaDestino = document.getElementById("areaDestino");

areaDestino.addEventListener("dragenter", (event) => {
    event.preventDefault();
    areaDestino.style.borderColor = "blue";
});

areaDestino.addEventListener("dragleave", () => {
    areaDestino.style.borderColor = "gray";
});

areaDestino.addEventListener("drop", (event) => {
    event.preventDefault();
    areaDestino.style.borderColor = "gray";
    alert("Elemento soltado en el área de destino");
});

areaDestino.addEventListener("dragover", (event) => {
    event.preventDefault();
});



/*  Ejercicio 20: drop para Completar Arrastres
Ejemplo: drop: se activa cuando un elemento arrastrable es soltado en el área de destino.
Necesita habilitarse con dragenter y dragover para que el área sea un “destino de
arrastre” válido. Cambiar el texto de un contenedor cuando un elemento se suelta en él.. 

Reto: Cambia el color de fondo del contenedor al soltar el elemento y restaura el color
original después de 2 segundos.*/

const draggable = document.getElementById("draggable");
const destinationArea = document.getElementById("destinationArea");

destinationArea.addEventListener("dragenter", (event) => {
    event.preventDefault();
});

destinationArea.addEventListener("dragover", (event) => {
    event.preventDefault();
});

destinationArea.addEventListener("drop", (event) => {
    event.preventDefault();

    destinationArea.textContent = "¡Elemento soltado!";
    destinationArea.style.backgroundColor = "lightgreen";

    setTimeout(() => {
        destinationArea.textContent = "Suelta aquí";
        destinationArea.style.backgroundColor = "white";
    }, 2000);
});

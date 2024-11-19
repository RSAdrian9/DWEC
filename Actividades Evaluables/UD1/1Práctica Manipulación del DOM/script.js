/*1. Utilizando document.getElementById, selecciona el título con id titulo-principal y 
modifica su contenido usando innerText y luego outerHTML. Muestra los resultados en consola. */

const tituloPrincipal = document.getElementById('titulo-principal');

tituloPrincipal.innerText = 'título'; // Modifica el contenido del elemento
console.log(tituloPrincipal.innerText);

tituloPrincipal.outerHTML = '<h1 id="titulo-principal">hola que tal</h1>';
console.log(tituloPrincipal.outerHTML);

/*2. Selecciona la lista con document.querySelector y añade un nuevo elemento li a través de innerHTML.
 Verifica si el elemento se agregó correctamente con un console.log. */
 
const listaTareas = document.querySelector("#lista-tareas");

listaTareas.innerHTML += '<li class="tarea">Nueva Tarea</li>'; // Agregar un nuevo elemento li
console.log("Lista de tareas después de agregar un elemento:", listaTareas.innerHTML);


/*3. Selecciona la tabla y añade una nueva fila. Usa classList para agregar clases 
alternadas (par/impar) y luego muestra la tabla actualizada en consola.  */

const tablaDatos = document.getElementById("tabla-datos").querySelector("tbody");
const nuevaFila = document.createElement("tr"); // Crear una nueva fila

nuevaFila.classList.add(tablaDatos.children.length % 2 === 0 ? "fila-par" : "fila-impar"); // Agregar clase par o impar a la nueva fila
nuevaFila.innerHTML = "<td>Nuevo Nombre</td><td>Edad</td>"; // Agregar celdas a la nueva fila
tablaDatos.appendChild(nuevaFila); // Agregar la nueva fila a la tabla

console.log("Tabla después de agregar una nueva fila:", tablaDatos.innerHTML);



/*4. Usa querySelectorAll para seleccionar las filas de la tabla y elimina la última. 
Muestra el resultado en consola. */

const filasTabla = document.querySelectorAll("#tabla-datos tbody tr");

// Verificar si hay filas para eliminar
if (filasTabla.length > 0) {
    const ultimaFila = filasTabla[filasTabla.length - 1];
    ultimaFila.parentNode.removeChild(ultimaFila);

    console.log("Tabla después de eliminar la última fila:", document.querySelector("#tabla-datos tbody").innerHTML);
} else {
    console.log("No hay filas para eliminar.");
}

/*5. Modifica una fila específica para simular que está "marcada" usando 
classList.toggle. */

const primeraFila = document.querySelector("#tabla-datos tbody tr");

// Marcar o desmarcar la fila
if (primeraFila) {
    primeraFila.classList.toggle("marcada");
    console.log("Fila marcada:", primeraFila);
} else {
    console.log("No hay filas para marcar.");
}

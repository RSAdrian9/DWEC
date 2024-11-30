// 1. Dado el siguiente código, utiliza traversing para seleccionar todos los elementos <p> dentro del div con id "contenedor".
const parrafos = document.querySelectorAll('#contenedor p');
console.log('Parrafos dentro de #contenedor:', parrafos);

// Ejercicio 2: Encontrar el elemento padre del <li> con id "elemento".
const liElemento = document.getElementById("elemento");
const padreLI = liElemento.parentElement;
console.log("Padre del <li>#elemento:", padreLI);

// 3. Selecciona el elemento hermano inmediato que sigue al span con id "inicio".
const spanInicio = document.getElementById('inicio');
const hermanoSiguiente = spanInicio.nextElementSibling;
console.log('Hermano inmediato de #inicio:', hermanoSiguiente);

// 4. Encuentra el hermano anterior del <span> con id "medio".
const spanMedio = document.getElementById('medio');
const hermanoAnterior = spanMedio.previousElementSibling;
console.log('Hermano anterior de #medio:', hermanoAnterior);

// 5. Recorre todos los nodos hijos del div (incluyendo nodos de texto) y muestra su tipo y contenido en consola.
const lista = document.getElementById("lista");
const hijosLista = lista.childNodes;
hijosLista.forEach((nodo) => {
  console.log(`Tipo de nodo: ${nodo.nodeType}, Contenido: "${nodo.textContent.trim()}"`);
});

// 6. Crea un nuevo elemento <li> con el texto "Elemento 3" y añádelo al final de la lista.
const ulListas = document.querySelectorAll("ul");
const segundaUl = ulListas[1];

if (segundaUl) {
  const nuevaLI = document.createElement("li");
  nuevaLI.textContent = "Elemento 3";
  segundaUl.appendChild(nuevaLI);
  console.log("Nuevo <li> añadido a la segunda <ul>:", nuevaLI);
}

// 7. Elimina el <p> con id "eliminar" usando JavaScript.
const parrafoEliminar = document.getElementById('eliminar');
if (parrafoEliminar) {
    parrafoEliminar.parentElement.removeChild(parrafoEliminar);
    console.log('Elemento eliminado:', parrafoEliminar);
}
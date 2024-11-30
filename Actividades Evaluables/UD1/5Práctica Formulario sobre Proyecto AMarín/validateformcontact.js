document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (e) => {
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();
        let errores = [];

        // Validar que el nombre no esté vacío
        if (nombre === "") {
            errores.push("El nombre es obligatorio.");
        }

        // Validar que el correo tenga un formato correcto
        let regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexCorreo.test(email)) {
            errores.push("Por favor ingresa un correo electrónico válido.");
        }

        // Validar que el mensaje no esté vacío
        if (mensaje === "") {
            errores.push("El mensaje no puede estar vacío.");
        }

        // Si hay errores, mostrar alerta y prevenir envío
        if (errores.length > 0) {
            alert(errores.join("\n"));
            e.preventDefault(); // Evitar que se envíe el formulario
        }
    });
});

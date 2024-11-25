        // Variables globales para la validación
        const N = 8; // Mínimo de caracteres para la contraseña
        const caracteresEspeciales = "!@#$%^&*()_+[]{}|;:,.<>?"; // Caracteres especiales permitidos

        // Función para validar contraseña
        function validaPassword(password) {
            let errores = [];

            // Validaciones básicas
            if (password.length < N) {
                errores.push(`La contraseña debe tener al menos ${N} caracteres.`);
            }
            if (!/[A-Z]/.test(password)) {
                errores.push("Debe contener al menos una letra mayúscula.");
            }
            if (!/[a-z]/.test(password)) {
                errores.push("Debe contener al menos una letra minúscula.");
            }
            if (!/[0-9]/.test(password)) {
                errores.push("Debe contener al menos un número.");
            }
            if (!new RegExp(`[${caracteresEspeciales.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`).test(password)) {
                errores.push("Debe contener al menos un carácter especial.");
            }
            

            return errores;
        }

        // Función para validar DNI
        function validaDNI(dni) {
            let errores = [];
            const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

            if (dni.length !== 9) {
                errores.push("El DNI debe tener 9 caracteres.");
            } else {
                const numeros = dni.slice(0, 8);
                const letra = dni.charAt(8);

                if (!/^\d{8}$/.test(numeros)) {
                    errores.push("Los primeros 8 caracteres deben ser números.");
                }
                if (!/^[A-Z]$/i.test(letra)) {
                    errores.push("El último carácter debe ser una letra.");
                }
                if (/^\d{8}$/.test(numeros) && /^[A-Z]$/i.test(letra)) {
                    const indice = parseInt(numeros) % 23;
                    if (letra.toUpperCase() !== letras[indice]) {
                        errores.push("La letra no corresponde al DNI.");
                    }
                }
            }

            return errores;
        }

        // Manejo del formulario
        document.getElementById("formulario").addEventListener("submit", function (event) {
            event.preventDefault();

            document.getElementById("error-password").textContent = "";
            document.getElementById("error-dni").textContent = "";

            const password = document.getElementById("password").value;
            const dni = document.getElementById("dni").value;

            const erroresPassword = validaPassword(password);
            const erroresDNI = validaDNI(dni);

            if (erroresPassword.length > 0) {
                const listaErrores = document.createElement("ul");
                erroresPassword.forEach(error => {
                    const listItem = document.createElement("li");
                    listItem.textContent = error;
                    listaErrores.appendChild(listItem);
                });
                const errorPasswordElement = document.getElementById("error-password");
                errorPasswordElement.textContent = "";
                errorPasswordElement.appendChild(listaErrores);
            }
            if (erroresDNI.length > 0) {
                const listaErrores = document.createElement("ul");
                erroresDNI.forEach(error => {
                    const listItem = document.createElement("li");
                    listItem.textContent = error;
                    listaErrores.appendChild(listItem);
                });
                const errorDNIElement = document.getElementById("error-dni");
                errorDNIElement.textContent = "";
                errorDNIElement.appendChild(listaErrores);
            }

            if (erroresPassword.length === 0 && erroresDNI.length === 0) {
                alert("Formulario enviado correctamente.");
            }
        });
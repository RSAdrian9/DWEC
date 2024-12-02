let giftText = "";

function convertToGIFT() {
    const input = document.getElementById("input").value;
    const penaltySingle = document.getElementById("penaltySingle").value; // Penalización para respuesta única
    const penaltyMultiple = document.getElementById("penaltyMultiple").value; // Penalización para respuesta múltiple
    const questionType = document.getElementById("questionType").value;
    const output = document.getElementById("output");

    // Dividimos por bloques separados por líneas vacías.
    const questions = input.split(/\n\s*\n/);
    giftText = questions
        .map((block) => {
            const lines = block.split("\n").filter((line) => line.trim() !== "");
            if (lines.length < 2) return ""; // Si el bloque tiene menos de dos líneas, lo ignoramos.

            const question = lines[0].trim(); // Primera línea es la pregunta.
            const answers = lines.slice(1); // Resto son respuestas.

            let giftQuestion = `::${question}:: {`;

            // Procesamos según el tipo de pregunta
            switch (questionType) {
                case "single":
                    // Pregunta de respuesta única
                    answers.forEach((answer) => {
                        const isCorrect = answer.startsWith("*");
                        const cleanAnswer = isCorrect ? answer.slice(1).trim() : answer.trim();
                        if (isCorrect) {
                            giftQuestion += ` =%100%${cleanAnswer}\n`; // Correcta al 100%
                        } else {
                            giftQuestion += ` ~%${penaltySingle}%${cleanAnswer}\n`; // Incorrecta con penalización
                        }
                    });
                    break;
                case "multiple":
                    // Pregunta de respuesta múltiple
                    answers.forEach((answer) => {
                        const isCorrect = answer.startsWith("*");
                        const cleanAnswer = isCorrect ? answer.slice(1).trim() : answer.trim();
                        if (isCorrect) {
                            giftQuestion += ` =%50%${cleanAnswer}\n`; // Correcta con ponderación del 50%
                        } else {
                            giftQuestion += ` ~%${penaltyMultiple}%${cleanAnswer}\n`; // Incorrecta con penalización
                        }
                    });
                    break;
                case "auto":
                    // Elección automática
                    const correctAnswers = answers.filter(answer => answer.startsWith("*")).length;
                    if (correctAnswers === 1) {
                        // Pregunta de respuesta única
                        answers.forEach((answer) => {
                            const isCorrect = answer.startsWith("*");
                            const cleanAnswer = isCorrect ? answer.slice(1).trim() : answer.trim();
                            if (isCorrect) {
                                giftQuestion += ` =%100%${cleanAnswer}\n`; // Correcta al 100%
                            } else {
                                giftQuestion += ` ~%${penaltySingle}%${cleanAnswer}\n`; // Incorrecta con penalización
                            }
                        });
                    } else {
                        // Pregunta de respuesta múltiple
                        answers.forEach((answer) => {
                            const isCorrect = answer.startsWith("*");
                            const cleanAnswer = isCorrect ? answer.slice(1).trim() : answer.trim();
                            if (isCorrect) {
                                giftQuestion += ` =%50%${cleanAnswer}\n`; // Correcta con ponderación del 50%
                            } else {
                                giftQuestion += ` ~%${penaltyMultiple}%${cleanAnswer}\n`; // Incorrecta con penalización
                            }
                        });
                    }
                    break;
                default:
                    // Otras configuraciones
                    break;
            }

            giftQuestion += "}";
            return giftQuestion;
        })
        .filter((q) => q !== "") // Eliminamos preguntas vacías.
        .join("\n\n");

    output.textContent = giftText; // Mostramos la salida en la vista previa.
}

function downloadFile() {
    if (!giftText) {
        alert("Primero convierte tus preguntas al formato GIFT.");
        return;
    }

    const blob = new Blob([giftText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "preguntas.txt";
    link.click();
}

function copyToClipboard() {
    const output = document.getElementById("output");
    const text = output.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        alert("Error al copiar el texto: " + err);
    });
}

function clearTextarea() { 
    document.getElementById("input").value = ""; 
    document.getElementById("output").textContent = "";
}

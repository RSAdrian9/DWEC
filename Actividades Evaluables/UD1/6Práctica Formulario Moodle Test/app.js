// Clase para manejar las preguntas
class Pregunta {
    constructor(texto, respuesta, tipo = "truefalse") {
        this.texto = texto;
        this.respuesta = respuesta; // "VERDADERO" o "FALSO"
        this.tipo = tipo;
    }

    // Método para convertir la pregunta a formato GIFT
    toGIFT() {
        return `${this.texto} {\n\t${this.respuesta.toUpperCase() === "VERDADERO" ? "T" : "F"}\n}`;
    }
}

// Clase para manejar el banco de preguntas
class BancoPreguntas {
    constructor() {
        this.preguntas = [];
    }

    // Añadir una pregunta
    agregarPregunta(pregunta) {
        this.preguntas.push(pregunta);
    }

    // Generar formato GIFT completo
    generarGIFT() {
        return this.preguntas.map(pregunta => pregunta.toGIFT()).join("\n\n");
    }
}

// Inicializar banco de preguntas
const banco = new BancoPreguntas();

document.getElementById("generate").addEventListener("click", () => {
    const inputText = document.getElementById("input").value;
    const lines = inputText.split("\n");

    // Parsear preguntas desde el texto ingresado
    lines.forEach(line => {
        const [texto, respuesta] = line.split(";");
        if (texto && respuesta) {
            banco.agregarPregunta(new Pregunta(texto.trim(), respuesta.trim()));
        }
    });

    // Generar archivo GIFT
    const giftContent = banco.generarGIFT();
    const blob = new Blob([giftContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Configurar enlace de descarga
    const downloadLink = document.getElementById("download");
    downloadLink.href = url;
    downloadLink.download = "preguntas.txt";
    downloadLink.style.display = "block";
    downloadLink.textContent = "Descargar archivo GIFT";
});

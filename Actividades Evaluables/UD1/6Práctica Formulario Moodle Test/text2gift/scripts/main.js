// Cambiar entre secciones
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    });
});

// Lógica para convertir preguntas
// Función para convertir preguntas al formato GIFT
document.getElementById('convertButton').addEventListener('click', () => {
    const input = document.getElementById('questions').value.trim();
    const questionType = document.getElementById('questionType').value;
    const penalty = parseInt(document.getElementById('penalty').value, 10) || 0;
    const examId = document.getElementById('examId').value.trim();

    if (!input) {
        alert('Please paste some questions!');
        return;
    }

    const blocks = input.split('\n\n'); // Separar preguntas por bloques
    const giftFormat = blocks.map(block => {
        const lines = block.split('\n');
        const question = lines[0]; // Primera línea: pregunta
        const answers = lines.slice(1).map(answer => {
            if (answer.startsWith('*')) {
                return questionType === 'multiple' ? '=' + answer.slice(1) : answer;
            }
            return '-' + answer;
        });

        // Penalización si es pregunta única y hay error
        const penaltyLine = penalty > 0 && questionType === 'single' ? `~%-${penalty}%` : '';

        return `${question}\n${answers.join('\n')}\n${penaltyLine}`;
    }).join('\n\n');

    // Agregar identificador si está definido
    const outputText = examId ? `// Exam ID: ${examId}\n${giftFormat}` : giftFormat;

    // Mostrar resultado
    document.getElementById('output').value = outputText;
    document.getElementById('resultSection').classList.remove('hidden');
});

// Función para descargar el archivo GIFT
document.getElementById('downloadButton').addEventListener('click', () => {
    const output = document.getElementById('output').value;
    const blob = new Blob([output], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'questions.txt';
    link.click();
});


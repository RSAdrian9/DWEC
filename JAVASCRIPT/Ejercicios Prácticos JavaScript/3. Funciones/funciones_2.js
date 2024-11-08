function calcAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcAreaRectangulo(base, altura) {
    return base * altura;
}

function areas(base, altura, callback) {
    let resultado = callback(base, altura);
    return resultado;
}

console.log(areas(10, 5, calcAreaTriangulo));
// 1. Función básica
const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // Salida: 8
// En este caso, la función sumar recibe dos parámetros y retorna la suma de ambos.

// 2. Función con un solo parámetro
const cuadrado = a => a * a;
console.log(cuadrado(4)); // Salida: 16
// Cuando hay un solo parámetro, se pueden omitir los paréntesis.

// 3. Función sin parámetros
const saludar = () => console.log('Hola Mundo!');
saludar(); // Salida: Hola Mundo!
// Aquí se utilizan paréntesis vacíos para indicar que la función no recibe parámetros.

// 4. Función con múltiples parámetros
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 4)); // Salida: 8
// En este caso, la función multiplicar recibe dos parámetros y retorna el producto de ambos.
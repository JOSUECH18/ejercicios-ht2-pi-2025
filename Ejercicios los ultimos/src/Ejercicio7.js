// Requiere Node.js para ejecutarse
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}


function mostrarSaludo(nombre) {
  console.log("Hola, " + nombre + ". Bienvenido al sistema de geometría");
}


readline.question("Ingresa tu nombre: ", (nombre) => {
  mostrarSaludo(nombre);

  readline.question("Ingresa la base del triángulo: ", (baseInput) => {
    readline.question("Ingresa la altura del triángulo: ", (alturaInput) => {
      const base = parseFloat(baseInput);
      const altura = parseFloat(alturaInput);
      const area = calcularAreaTriangulo(base, altura);

      console.log("El área del triángulo es: " + area);
      readline.close();
    });
  });
});

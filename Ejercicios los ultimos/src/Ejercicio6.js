import readline from 'readline-sync'
const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José'];
const notas = [70, 85, 55, 90, 60];


for (let i = 0; i < estudiantes.length; i++) {
  let saludo = estudiantes[i].endsWith('a') ? 'Bienvenida' : 'Bienvenido';
  console.log(`${saludo}, ${estudiantes[i]}`);
}


let suma = 0;
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}
let promedio = Math.round(suma / notas.length);

console.log(`El promedio del grupo es: ${promedio}`);

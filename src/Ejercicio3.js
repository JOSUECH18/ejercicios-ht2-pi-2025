import readline from 'readline-sync'

// Paso 1: Solicitar fecha de nacimiento
 const fechaNacimientoTexto = readline.question("Ingresa Fecha De Nacimiento ")
const fechaNacimiento =  parseInt(fechaNacimientoTexto)
 const anioNacimiento =  readline.question("Ingresa ano nacimiento ")
const anioActual =  readline.question("Ingresa ano actual ")
 const edad = readline.question("Ingresa tu edad ")

 //Paso 2: Evaluar grupo etario
if (edad >= 0 && edad <= 12) {
  console.log("Estás en la etapa de la niñez.")
} else if (edad >= 13 && edad <= 17) {
  console.log("Estás en la adolescencia.")
} else if (edad >= 18 && edad <= 29) {
  console.log("Estás en la adultez joven.")
} else if (edad >= 30) {
  console.log("Estás en la adultez.")
} else {
  console.log("Edad no válida.")
}

// Paso 3: Solicitar nota del examen
const notaTexto = readline.question("Ingresa la nota ")
 const nota = parseInt(notaTexto)

// Paso 4: Evaluar calificación con else if
if (nota >= 60 && nota <= 70) {
  console.log("Inapteptable.")
} else if (nota >= 70 && nota <= 80) {
  console.log(" Muy Bueno.")
} else if (nota >= 80 && nota <= 90) {
  console.log("Excelente")
} else if (nota >= 95) {
  console.log("Muy Excelente")
} 
  

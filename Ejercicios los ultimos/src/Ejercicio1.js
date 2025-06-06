import readline from 'readline-sync'
// 👉 Paso 1: Solicitar entrada de datos
 const nombre = readline.question("Ingresa tu nombre")
 const edadTexto = readline.question("Ingresa tu edad")
 const activoTexto =readline.question("Esta activo si no")

// 👉 Paso 2: Declarar y convertir datos
 const edad = 25;
 const activo = true

// 👉 Paso 3: Imprimir mensaje personalizado
 console.log(console.log(`Hola, soy ${nombre}, tengo ${edad} años y estoy ${activo ? "activo" : "inactiva"}.`))

// 👉 Paso 4: Imprimir tipos de datos usando typeof
console.log(`Tipo de nombre:`, typeof nombre)
 console.log(`Tipo de edad:`, typeof edad)
console.log('Tipo de activo:', typeof activo)

// 👉 Paso 5: Declarar variables especiales y mostrar su tipo
 let valorNulo = null
 let valorNoAsignado;
 console.log(`Tipo de valorNulo:`, typeof valorNulo )
 console.log('Tipo de valorNoAsignado:', typeof valorNoAsignado )
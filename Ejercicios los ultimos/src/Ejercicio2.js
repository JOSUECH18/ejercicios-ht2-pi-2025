import readline from 'readline-sync'

// Paso 1: Solicitar precio y descuento
const precioTexto =  readline.question("Ingresa Precio Q ")
 const descuentoTexto = readline.question("Ingresa Descuento  %  ")

// Paso 2: Convertir a número y calcular precio final
 const precio = "160"
 const descuento = "25"
 const total = precio-(precio*(descuento/100))

// Paso 3: Imprimir resultado del cálculo
console.log(`Precio Total es de Q${total.toFixed(2)}`)

// Paso 4: Solicitar estatura
const estaturaTexto = readline.question("Ingresa su estatura ")
 const estatura = parseInt(estaturaTexto)

// Paso 5: Verificar si puede subirse al juego
if(estatura >= 120){
    console.log("Puede jugar al juego")
}else{
    console.log("No se puede subir al juego")
}




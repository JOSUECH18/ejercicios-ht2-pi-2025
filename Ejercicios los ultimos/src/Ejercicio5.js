import readline from 'readline-sync'

let opcion = String


do {
  console.log(" Menu")
  console.log("1. Saludar")
  console.log("2. Mostrar hora")
  console.log("3. Salir")

  opcion = readline.question("Seleccione una opción: ")

  switch (opcion) {
    case "1":
      console.log("¡Hola!")
      break
    case "2":
      console.log("Hora actual:", new Date().toLocaleTimeString())
      break
    case "3":
      console.log("Saliendo del programa...")
      break
    default:
      console.log("Opción inválida.")
  }

} while (opcion !== "3")

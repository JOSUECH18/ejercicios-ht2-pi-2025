import readline from 'readline-sync'

// Paso 1: Solicitar número de día
 const numeroDiaTexto = readline.question("Ingresa tu numero de dia ")
const numeroDia = parseInt(numeroDiaTexto)

// Paso 2: switch para días de la semana
 switch (numeroDia) {
    case 1:

         console.log("Lunes")

       break
       
      case 2:
        
         console.log("Martes")

       break

      case 3:

         console.log("Miercoles")

       break 

      case 4:

         console.log("Jueves")

       break
    
      case 5:

      console.log("Viernes") 

       break

      case 6:

      console.log("Sabado")
         
       break
     
      case 7:
         
      console.log("Domingo")

       break
    

     default:
     console.log("Opcion no valida")
    
 }

// Paso 3: Solicitar color del semáforo
 const color = readline.question("Ingre un color del semaforo ")

// Paso 4: switch para interpretar semáforo
 switch (color) {
    case 'verde':
        console.log("Pasar")
        break

    case 'amarillo':
        console.log("Paso peatonal")
        break

        case 'rojo':
        console.log("Stop")
        break

   default:
         console.log("Opcion invalida")
}
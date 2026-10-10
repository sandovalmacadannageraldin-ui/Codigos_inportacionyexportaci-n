import Clientes from "./clientes.js"
import Entrenadores from "./Entrenadores.js"
import Rutinas from "./Rutinas.js"

let cliente1 = new Clientes("Nathalia", "12345", "3001234567", 17)
let cliente2 = new Clientes("Danna", "67890", "3109876543", 20)

let entrenador1 = new Entrenadores("Carlos", "Musculacion", "3001112233")
let entrenador2 = new Entrenadores("Laura", "Cardio", "3104445566")

let rutina1 = new Rutinas("Pecho", "Fuerza", "60 minutos", entrenador1.nombre)
let rutina2 = new Rutinas("Pierna", "Resistencia", "50 minutos", entrenador2.nombre)

cliente1.asignarRutina(rutina1.nombre)
cliente2.asignarRutina(rutina2.nombre)

entrenador1.asignarRutina(rutina1.nombre)
entrenador2.asignarRutina(rutina2.nombre)

cliente1.verRutinas()
cliente2.verRutinas()
entrenador1.verRutinas()
entrenador2.verRutinas()
rutina1.verRutina()
rutina2.verRutina()
import Pacientes from "./Pacientes.js"
import Medicos from "./Medicos.js"
import Citas from "./Citas.js"

let paciente1 = new Pacientes("Nathalia", "12345", 17, "3001234567")
let paciente2 = new Pacientes("Danna", "67890", 20, "3109876543")

let medico1 = new Medicos("Carlos", "11111", "General", "3001112233")
let medico2 = new Medicos("Laura", "22222", "Pediatria", "3104445566")

let cita1 = new Citas(
    "08/10/2026",
    "08:00",
    "Consulta",
    paciente1.nombre,
    medico1.nombre
)

let cita2 = new Citas(
    "09/10/2026",
    "10:00",
    "Control",
    paciente2.nombre,
    medico2.nombre
)

paciente1.asignarCita(cita1.medico)
paciente2.asignarCita(cita2.medico)

paciente1.verCitas()
paciente2.verCitas()
medico1.verMedico()
medico2.verMedico()
cita1.verCita()
cita2.verCita()
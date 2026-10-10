class Citas {

    fecha
    hora
    motivo
    paciente
    medico

    constructor(fecha, hora, motivo, paciente, medico) {
        this.fecha = fecha
        this.hora = hora
        this.motivo = motivo
        this.paciente = paciente
        this.medico = medico
    }

    verCita() {
        console.log("Datos de la cita:")
        console.log("Fecha: " + this.fecha)
        console.log("Hora: " + this.hora)
        console.log("Motivo: " + this.motivo)
        console.log("Paciente: " + this.paciente)
        console.log("Medico: " + this.medico)
    }
}

export default Citas
class Pacientes {

    nombre
    documento
    edad
    telefono

    constructor(nombre, documento, edad, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.edad = edad
        this.telefono = telefono
        this.citas = []
    }

    asignarCita(cita) {
        this.citas.push(cita)
    }

    verCitas() {
        console.log("Datos del paciente:")
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Edad: " + this.edad)
        console.log("Telefono: " + this.telefono)

        console.log("Citas:")

        for (let i = 0; i < this.citas.length; i++) {
            console.log(this.citas[i])
        }
    }
}

export default Pacientes
class Medicos {

    nombre
    documento
    especialidad
    telefono

    constructor(nombre, documento, especialidad, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.especialidad = especialidad
        this.telefono = telefono
    }

    verMedico() {
        console.log("Datos del medico:")
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Especialidad: " + this.especialidad)
        console.log("Telefono: " + this.telefono)
    }
}

export default Medicos
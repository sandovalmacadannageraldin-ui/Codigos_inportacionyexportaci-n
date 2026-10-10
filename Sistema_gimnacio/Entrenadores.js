class Entrenadores {
    nombre
    especialidad
    telefono

    constructor(nombre, especialidad, telefono) {
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
        this.rutinas = []
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina)
    }

    verRutinas() {
        console.log("Datos del entrenador:")
        console.log("Nombre: " + this.nombre)
        console.log("Especialidad: " + this.especialidad)
        console.log("Telefono: " + this.telefono)

        console.log("Rutinas:")

        for (let i = 0; i < this.rutinas.length; i++) {
            console.log(this.rutinas[i])
        }
    }
}

export default Entrenadores
class Rutinas {

    nombre
    objetivo
    duracion
    entrenador

    constructor(nombre, objetivo, duracion, entrenador) {
        this.nombre = nombre
        this.objetivo = objetivo
        this.duracion = duracion
        this.entrenador = entrenador
    }

    verRutina() {
        console.log("Datos de la rutina:")
        console.log("Nombre: " + this.nombre)
        console.log("Objetivo: " + this.objetivo)
        console.log("Duracion: " + this.duracion)
        console.log("Entrenador: " + this.entrenador)
    }
}

export default Rutinas
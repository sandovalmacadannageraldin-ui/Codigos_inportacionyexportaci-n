class Alquileres {

    fechaInicio
    fechaFinalizacion
    cliente
    vehiculo

    constructor(fechaInicio, fechaFinalizacion, cliente, vehiculo) {
        this.fechaInicio = fechaInicio
        this.fechaFinalizacion = fechaFinalizacion
        this.cliente = cliente
        this.vehiculo = vehiculo
    }

    verAlquiler() {
        console.log("Datos del alquiler:")
        console.log("Inicio: " + this.fechaInicio)
        console.log("Finalizacion: " + this.fechaFinalizacion)
        console.log("Cliente: " + this.cliente)
        console.log("Vehiculo: " + this.vehiculo)
    }
}

export default Alquileres
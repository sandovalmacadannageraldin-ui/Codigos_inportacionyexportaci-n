class Clientes {

    nombre
    documento
    telefono

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.alquileres = []
    }

    asignarAlquiler(alquiler) {
        this.alquileres.push(alquiler)
    }

    verAlquileres() {
        console.log("Datos del cliente:")
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Telefono: " + this.telefono)

        console.log("Alquileres:")

        for (let i = 0; i < this.alquileres.length; i++) {
            console.log(this.alquileres[i])
        }
    }
}

export default Clientes
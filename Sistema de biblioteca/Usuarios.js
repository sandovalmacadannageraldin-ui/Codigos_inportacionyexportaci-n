class Usuarios {

    nombre
    documento
    telefono

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.prestamos = []
    }

    asignarPrestamo(prestamo) {
        this.prestamos.push(prestamo)
    }

    verPrestamos() {
        console.log("Datos del usuario:")
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Telefono: " + this.telefono)

        console.log("Prestamos:")

        for (let i = 0; i < this.prestamos.length; i++) {
            console.log(this.prestamos[i])
        }
    }
}

export default Usuarios












class Prestamos {

    fechaPrestamo
    fechaDevolucion
    libro

    constructor(fechaPrestamo, fechaDevolucion, libro) {
        this.fechaPrestamo = fechaPrestamo
        this.fechaDevolucion = fechaDevolucion
        this.libro = libro
    }

    verPrestamo() {
        console.log("Prestamo:")
        console.log("Fecha: " + this.fechaPrestamo)
        console.log("Devolucion: " + this.fechaDevolucion)
        console.log("Libro: " + this.libro)
    }
}

export default Prestamos
class Clientes {

    nombre
    documento
    telefono
    edad

    constructor(nombre, documento, telefono, edad) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.edad = edad
        this.rutinas = []
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina)
    }

    verRutinas() {
        console.log("Datos del cliente:")
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Telefono: " + this.telefono)
        console.log("Edad: " + this.edad)

        console.log("Rutinas:")

        for (let i = 0; i < this.rutinas.length; i++) {
            console.log(this.rutinas[i])
        }
    }
}

export default Clientes
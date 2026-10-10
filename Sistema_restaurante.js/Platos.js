class Platos {

    nombre
    categoria
    precio
    disponibilidad

    constructor(nombre, categoria, precio, disponibilidad) {
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.disponibilidad = disponibilidad
    }

    verPlato() {
        console.log("Datos del plato:")
        console.log("Nombre: " + this.nombre)
        console.log("Categoria: " + this.categoria)
        console.log("Precio: " + this.precio)
        console.log("Disponibilidad: " + this.disponibilidad)
    }
}

export default Platos
class Clientes {

    nombre
    documento
    telefono

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.pedidos = []
    }

    asignarPedido(pedido) {
        this.pedidos.push(pedido)
    }

    verPedidos() {
        console.log("Datos del cliente:")
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Telefono: " + this.telefono)

        console.log("Pedidos:")

        for (let i = 0; i < this.pedidos.length; i++) {
            console.log(this.pedidos[i])
        }
    }
}

export default Clientes
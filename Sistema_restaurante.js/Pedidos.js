class Pedidos {

    fecha
    numeroPedido
    cliente

    constructor(fecha, numeroPedido, cliente) {
        this.fecha = fecha
        this.numeroPedido = numeroPedido
        this.cliente = cliente
        this.platos = []
    }

    asignarPlato(plato) {
        this.platos.push(plato)
    }

    verPedido() {
        console.log("Datos del pedido:")
        console.log("Fecha: " + this.fecha)
        console.log("Numero: " + this.numeroPedido)
        console.log("Cliente: " + this.cliente)

        console.log("Platos:")

        for (let i = 0; i < this.platos.length; i++) {
            console.log(this.platos[i])
        }
    }
}

export default Pedidos
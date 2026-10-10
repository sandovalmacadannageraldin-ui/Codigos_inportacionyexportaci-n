import Platos from "./Platos.js"
import Clientes from "./Clientes.js"
import Pedidos from "./Pedidos.js"

let plato1 = new Platos("Hamburguesa", "Rapida", 18000, "Disponible")
let plato2 = new Platos("Pizza", "Italiana", 25000, "Disponible")

let cliente1 = new Clientes("Nathalia", "12345", "3001234567")
let cliente2 = new Clientes("Danna", "67890", "3109876543")

let pedido1 = new Pedidos("07/10/2026", 1, cliente1.nombre)
let pedido2 = new Pedidos("07/10/2026", 2, cliente2.nombre)

pedido1.asignarPlato(plato1.nombre)
pedido2.asignarPlato(plato2.nombre)

cliente1.asignarPedido(pedido1.numeroPedido)
cliente2.asignarPedido(pedido2.numeroPedido)

plato1.verPlato()
plato2.verPlato()
cliente1.verPedidos()
cliente2.verPedidos()
pedido1.verPedido()
pedido2.verPedido()
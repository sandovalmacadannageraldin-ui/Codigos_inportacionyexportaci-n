import Vehiculos from "./Vehiculos.js"
import Clientes from "./Clientes.js"
import Alquileres from "./Alquileres.js"

let vehiculo1 = new Vehiculos("ABC123", "Toyota", "2022", "Automovil")
let vehiculo2 = new Vehiculos("XYZ789", "Chevrolet", "2023", "Camioneta")

let cliente1 = new Clientes("Nathalia", "12345", "3001234567")
let cliente2 = new Clientes("Danna", "67890", "3109876543")

let alquiler1 = new Alquileres(
    "07/10/2026",
    "10/10/2026",
    cliente1.nombre,
    vehiculo1.placa
)

let alquiler2 = new Alquileres(
    "08/10/2026",
    "12/10/2026",
    cliente2.nombre,
    vehiculo2.placa
)

cliente1.asignarAlquiler(alquiler1.vehiculo)
cliente2.asignarAlquiler(alquiler2.vehiculo)

vehiculo1.verVehiculo()
vehiculo2.verVehiculo()
cliente1.verAlquileres()
cliente2.verAlquileres()
alquiler1.verAlquiler()
alquiler2.verAlquiler()
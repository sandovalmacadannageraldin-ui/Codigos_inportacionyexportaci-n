class Vehiculos {

    placa
    marca
    modelo
    tipo

    constructor(placa, marca, modelo, tipo) {
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
        this.tipo = tipo
    }

    verVehiculo() {
        console.log("Datos del vehiculo:")
        console.log("Placa: " + this.placa)
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
        console.log("Tipo: " + this.tipo)
    }
}

export default Vehiculos
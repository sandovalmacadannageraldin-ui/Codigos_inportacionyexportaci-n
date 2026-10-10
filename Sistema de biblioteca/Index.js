import Libros from "./libros.js"
import Usuarios from "./Usuarios.js"
import Prestamos from "./Prestamos.js"

let libro1 = new Libros("El Principito", "Antoine", "Fantasia", 1943)
let libro2 = new Libros("Don Quijote", "Cervantes", "Novela", 1605)

let usuario1 = new Usuarios("Nathalia", "12345", "3001234567")
let usuario2 = new Usuarios("Danna", "67890", "3109876543")

let prestamo1 = new Prestamos("02/10/2026", "05/10/2026", libro1.titulo)
let prestamo2 = new Prestamos("03/10/2026", "06/10/2026", libro2.titulo)

usuario1.asignarPrestamo(prestamo1.libro)
usuario2.asignarPrestamo(prestamo2.libro)

libro1.verLibros()
libro2.verLibros()
usuario1.verPrestamos()
usuario2.verPrestamos()
prestamo1.verPrestamo()
prestamo2.verPrestamo()
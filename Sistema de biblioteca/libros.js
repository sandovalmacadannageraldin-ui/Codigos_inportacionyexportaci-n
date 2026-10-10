class Libros {

    titulo
    autor
    genero
    anioPublicacion

    constructor(titulo, autor, genero, anioPublicacion) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.anioPublicacion = anioPublicacion
    }

    verLibros() {
        console.log("Datos del libro:")
        console.log("Titulo: " + this.titulo)
        console.log("Autor: " + this.autor)
        console.log("Genero: " + this.genero)
        console.log("Año: " + this.anioPublicacion)
    }
}

export default Libros                                   
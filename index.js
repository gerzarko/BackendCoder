class Usuario{

    constructor(nombre,apellido,mascotas= [],libros = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this. mascotas = mascotas;
        this.libros = libros;

    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return `${this.mascotas.length}`
    }

    addBook(libro){
        this.libros.push(libro)
    }

    getBookNames(){
        return this.libros.map(libro =>`${libro.nombre}`);
    }


}

// Inicializacion del objeto
const usuario1 = new Usuario("German","Zarkovich");
console.log(usuario1.getFullName())


usuario1.addBook({libro: "A la deriva", autor: "horacio Quiroga"});
console.log(usuario1.libros[0].libro);


usuario1.addMascota("yaris");
console.log(usuario1.countMascotas())


console.log(usuario1);







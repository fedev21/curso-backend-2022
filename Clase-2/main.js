class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.apellido}, ${this.nombre} `
    }

    addMascota(newMascota) {
        this.mascotas.push(newMascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor });
    }

    getBookNames() {
        const nombresLibros = this.libros.map(({ nombre }) => nombre);
        return nombresLibros;
    }
}

const usuarioUno = new Usuario('Richard', 'Gonzalez', [{ nombre: 'Rayuela', autor: 'Cortazar' }], ['Perro', 'Conejo']);

console.log('Nombre completo: ', usuarioUno.getFullName());

usuarioUno.addMascota('Rocko');
usuarioUno.addMascota('Firulais');
usuarioUno.addMascota('Homero');

console.log('Cantidad de mascotas: ', usuarioUno.countMascotas());

usuarioUno.addBook('Casa tomada', 'Julio Cortazar');
usuarioUno.addBook('Fundacion', 'Isaac Asimov');
usuarioUno.addBook('Martin Fierro', 'Jose Hernandez');

console.log('Libros: ', usuarioUno.getBookNames())
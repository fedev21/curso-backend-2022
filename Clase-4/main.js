//Crear clase contenedor(nombre arvicho)

//metodos
//save(objeto): number return id asignado 
//getByid(number): - product recibe id returna objeto o null
//getall():-product[] devuelve array de los objetos presentes en el archivo
//deletebyid(number):- void elimina el objeto con el id dado
//deleteall(): void - elimina todos los objetos del archivo

const fs = require('fs');

/** Used to generate unique IDs. */
var newId = 0;

class Contenedor {

    constructor(fileName) {
        this.ruta = fileName;
    }

    async save(product) {
        const products = await this.getAll();
        newId++;

        products.push({
            ...product,
            id: newId
        });

        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(products))
            return newId
        } catch (err) {
            throw new Error('No se pudo guardar')
        }
    }

    async getById(idToSearch) {
        const products = await this.getAll();
        const product = !!products?.length && products.find(({ id }) => id === idToSearch);
        if (product) {
            return product
        } else {
            return null
        }
    }

    async getAll() {
        try {
            const products = await fs.promises.readFile(this.ruta, 'utf-8')
            return JSON.parse(products)
        } catch (err) {
            return [];
        }
    }

    async deleteById(idToDelete) {
        const products = await this.getAll()
        const product = !!products?.length && products.findIndex(({ id }) => id === idToDelete);
        if (product != -1) {
            products.splice(product, 1);
            await fs.promises.writeFile(this.ruta, JSON.stringify(products))
        }
    }

    async deleteAll() {
        await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
    }
}

module.exports = Contenedor
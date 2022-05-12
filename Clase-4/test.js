const Contenedor = require('./main.js')

const db = new Contenedor('productos.txt');


const test = async () => {
    console.log(await db.save({ title: 'primero', price: 15, thumbnail: 'www.google.com' }));
    console.log(await db.save({ title: 'segundo', price: 16, thumbnail: 'www.google.com' }));
    console.log(await db.save({ title: 'tercero', price: 17, thumbnail: 'www.google.com' }));
    console.log(await db.save({ title: 'cuarto', price: 18, thumbnail: 'www.google.com' }));
    console.log(await db.save({ title: 'quinto', price: 19, thumbnail: 'www.google.com' }));
    console.log('db.getAll(): ',await db.getAll());

    console.log('db.getById(2): ',await db.getById(2));
    console.log('db.getById(5): ',await db.getById(5));

    console.log('db.deleteById(2): ',await db.deleteById(2));
    console.log('db.getById(2): ',await db.getById(2));

    console.log('db.deleteById(10): ',await db.deleteById(10));
    console.log('db.getAll(): ',await db.getAll());

    // console.log(await db.deleteAll());

}
test()
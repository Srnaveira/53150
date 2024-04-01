const ProductManager = require('./ProductManager.js')


const pManager = new ProductManager()

/*
pManager.getProducts();


console.log("---------------------------------------------------")
console.log("Lista de producto: \n");
pManager.getProductById(1)     
console.log("---------------------------------------------------")  
console.log("Actualiza el producto: \n");


pManager.updatProduct( 1, {price: 1600000})
console.log("---------------------------------------------------")    
*/
pManager.getProducts();



//pManager.deleteProduct(2);

//pManager.updatProduct( 1, {price: 2000000})

//Crea productos:

pManager.addProduct({
    title: "Mesa de Madera",
    description: "Mesa de Madera roble 4 Metros x 1.5 Metros",
    price: 1300000,
    thumbnail: 'ruta/imagenA.jpg',
    code: '101MESA',
    stock: 30
})


pManager.addProduct({
    title: "Mesa de Madera",
    description: "Mesa de Madera roble 6 Metros x 1.5 Metros",
    price: 1700000,
    thumbnail: 'ruta/imagenB.jpg',
    code:  "102MESA",
    stock: 10
})

pManager.addProduct({
    title: "Silla de Madera",
    description: "Silla de Madera roble",
    price: 150000,
    thumbnail: 'ruta/imagenC.jpg',
    code: '101SILLA',
    stock: 45
})

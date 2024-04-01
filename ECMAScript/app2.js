class ProductManager {

    constructor(){
        this.products = [];
        this.nexId = 1;
    }


    addProduct(product){
        if(!this.isProductValid(product)){
            console.log("Error: El producto no es válido");
            return;
        }

        if(this.isCodeDuplicated(product.code)){
            console.log("Error: El codigo del producto ya esta en uso");
            return;
        }

        product.id = this.nexId++;

        this.products.push(product);


    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const product = this.products.find((p) => p.id === id)
        if(!product){
            console.log("Error: Producto no encontrado")
            return;  
        
        } else {
            return product;
        }
    }

    isProductValid(product){
        return(
            product.title &&
            product.description &&
            product.price !== undefined &&
            product.price > 0 &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        );
    }

    isCodeDuplicated(code){
        return this.products.some((p) => p.code === code); 
        //La función .some() en JavaScript se utiliza para verificar si al menos uno de los elementos de un arreglo cumple con una condición determinada. Retorna un valor booleano (true o false) dependiendo del resultado de la evaluación.  
    }

}

const productManager = new ProductManager()

productManager.addProduct({
    title: "Mesa de Madera",
    description: "Mesa de Madera roble 4 Metros x 1.5 Metros",
    price: 1300000,
    thumbnail: 'ruta/imagenA.jpg',
    code: '101MESA',
    stock: 30
})


productManager.addProduct({
    title: "Mesa de Madera",
    description: "Mesa de Madera roble 6 Metros x 1.5 Metros",
    price: 1700000,
    thumbnail: 'ruta/imagenB.jpg',
    code:  "102MESA",
    stock: 10
})

productManager.addProduct({
    title: "Silla de Madera",
    description: "Silla de Madera roble",
    price: 150000,
    thumbnail: 'ruta/imagenC.jpg',
    code: '101SILLA',
    stock: 45
})


const productos = productManager.getProducts()
const producto = productManager.getProductById(2)

console.log(producto)
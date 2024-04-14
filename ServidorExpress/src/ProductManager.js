const fs = require('fs').promises;

class ProductManager {
    constructor() {
        this.productsFile = 'products.json';
        this.path = "./listProducts/";
    }

    async addProduct(product) {
        try {
            if (!this.isProductValid(product)) {
                console.log("Error: El producto no es válido");
                return;
            }

            if (await this.isCodeDuplicated(product.code)) {
                console.log("Error: El código del producto ya está en uso");
                return;
            }
            let productos = await this.cargarProducts();
            
            const lastId = productos.length > 0 ? productos[productos.length - 1].id : 0;
            product.id = lastId + 1;
 
            productos.push(product);
            console.log(productos);

            await fs.writeFile(`${this.path}${this.productsFile}`, JSON.stringify( productos , null, 2));
            console.log("Se cargó correctamente el producto");
        } catch (error) {
            console.error("No se pudo agregar el producto", error);
        }
    
        
    }

    isProductValid(product) {
        return (
            product.title &&
            product.description &&
            product.price > 0 &&
            product.price !== undefined &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        );
    }

    async isCodeDuplicated(code) {
        try {
            const dataProduct = await this.cargarProducts();
            return dataProduct.some(p => p.code === code); // Corregido: usa 'some' para verificar duplicados
        } catch (error) {
             return false;
        }
        
    }

    async cargarProducts() {
        try {
            const products = await fs.readFile(`${this.path}${this.productsFile}`, 'utf8');
            return JSON.parse(products);
        } catch (error) {
            if (error.code === 'ENOENT') {
                return []
            } else {
                throw error
            } 
        }
        
    }

    async getProducts(){
            const products = await this.cargarProducts();
            console.log(products);
    }

    async getProductById(id) {
        const data = await this.cargarProducts();
        const data2 = data.find(product => product.id === id);
        if(!data2){
            console.log(`El id ingresado: ${id} no corresponde a ningun id de productos`);
            return;
        }
        console.log(data2);
        return data2;
    }

    async updatProduct(id, infoUpdate){
        try {
            const products = await this.cargarProducts();
            const productIndex = products.findIndex(element => element.id === id);
            if (productIndex === -1) {
                console.log(`No se encontró ningún producto con id ${id}.`);
                return;
            }
            
            Object.assign(products[productIndex], infoUpdate);
            await fs.writeFile(`${this.path}${this.productsFile}`, JSON.stringify(products, null, 2));
            console.log("Producto actualizado correctamente.");
        } catch (error) {
            console.error("No se pudo actualizar el producto:", error);                
        }

    }

    async deleteProduct(id){
        try {
            const dataProduct = await this.cargarProducts();
            const data2 = [];
            if(dataProduct.find(p => p.id === id)) {
                dataProduct.forEach(element => {
                    if(element.id ===id){
                    } else {
                    data2.push(element);
                    }
                });
            } else {
                console.log(`El producto id ingresado: ${id} no existe`)
                return;
            }

        console.log(data2);
        await fs.writeFile(`${this.path}${this.productsFile}`, JSON.stringify( data2 , null, 2))
            
        } catch (error) {
            console.error("Dio este mensaje de error ", error);
        }
    }

}

module.exports = ProductManager;




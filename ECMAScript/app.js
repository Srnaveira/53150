
class ProductManager {
    constructor() {
        this.products = [];

    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(title  && (typeof(title) === "string") && description && (typeof(description) === "string") && price && (typeof(price) === "number") && thumbnail && (typeof(thumbnail) === "string") && code && (typeof(code) === "string")  && stock && (typeof(stock) === "number") ){
            console.log("se agregaron todos los campos correctamente");

        } else {
            console.log("alguno de los datos no fue ingresado correctamente");
                return;
        }
        const findCode = this.products.find((a) => a.code === code);
        if(findCode){
            console.log(`El codigo del producto: ${code} ya se encuentra asignado a un producto`)
            return;
        }
        const product_id = this.products.length + 1;

        const product = {
            id: product_id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(product);


    }

    getProducts(){
        return this.products;
    }

    getProductByld(id_product){
        const findProduct = this.products.find((a) => a.id === id_product);
        if(!findProduct){
            console.log("Not found");
            return
        }
        return findProduct;
    }


}

const productManager = new ProductManager();

//Se agrega producto correctamente
productManager.addProduct("Mesa de Madera", "Mesa de Madera roble 4 Metros x 1.5 Metros", 1300000, "./imagens/aaa.jpg" , "101MESA" , 30);

//Se agrega producto correctamente
productManager.addProduct("Mesa de Madera", "Mesa de Madera roble 6 Metros x 1.5 Metros", 1700000, "./imagens/aaB.jpg" , "102MESA" , 10); 

//Falla por que no se ingreso el precio en el articulo
productManager.addProduct("Silla de Madera", "Silla de Madera roble", "./imagens/abc.jpg" , "101SILLA" , 45); 

//Falla por que se cargo el precio como un string en vez de un number.
productManager.addProduct("Silla de Madera", "Silla de Madera roble", "150000", "./imagens/abc.jpg" , "101SILLA" , 45); 

//Se agrega producto correctamente al cambiar el precio de string a number
productManager.addProduct("Silla de Madera", "Silla de Madera roble", 150000, "./imagens/abc.jpg" , "101SILLA" , 45); 



const contenido_products = productManager.getProducts();



console.log(contenido_products);

const product_id = productManager.getProductByld(1);

console.log(`El producto buscad0o es el producto= ID: ${product_id.id}, Title: ${product_id.title}, Code: ${product_id.code}.`)


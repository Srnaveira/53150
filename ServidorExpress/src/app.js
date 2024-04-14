const ProductManager = require('./ProductManager.js')
const express = require('express');
const app = express()
const PORT = 8080;
app.use(express.urlencoded({extended: true}));


app.use(express.json());

const productManagment = new ProductManager();


app.get('/products', async (req, res) =>{  
    try {
        let limit = parseInt(req.query.limit) 
        const listProducts = await productManagment.cargarProducts();
        if(listProducts){
            if(limit){
                const listProductsLimit = listProducts.slice(0, limit)
                return res.json(listProductsLimit);
            }
            res.json(listProducts);
        } else {
            console.log("Elemento vacio");
        }    
    } catch (error) {
        console.error("error al leer el archivo", error)
    }
})


app.get('/products/:pid', async (req, res)=>{
    try {
        let pId = parseInt(req.params.pid)
        const listproducts = await productManagment.getProductById(pId);
        if(!listproducts){
            return res.send(`El producto con ID: ${pId} no existe`);
        }
        res.json(listproducts);
    } catch (error) {
        console.log("hubo algun problema: ", error)
    }
})



app.listen(PORT, () =>{
    console.log(`!!Listening in the Port: ${PORT}.¡¡`);
})
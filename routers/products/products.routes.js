const { Router } = require("express");
const ProductsController = require("../../controllers/products.controller");

const productsRoutes = Router();

productsRoutes.get('/', ProductsController.getProducts);
productsRoutes.get('/:id', ProductsController.getProductsById);
productsRoutes.post('/', ProductsController.saveProducts);
productsRoutes.put('/:id', ProductsController.updateProducts);
productsRoutes.delete('/:id', ProductsController.deleteProducts);
productsRoutes.post('/populate', ProductsController.populate);


module.exports = productsRoutes;
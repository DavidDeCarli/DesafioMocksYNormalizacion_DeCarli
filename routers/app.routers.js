const { Router } = require("express");

const carritoRoutes = require('./carrito/carrito.routes');
const productsRoutes = require('./products/products.routes');

const apiRoutes = Router();

apiRoutes.use('/carts', carritoRoutes);
apiRoutes.use('/products', productsRoutes);

module.exports = apiRoutes;
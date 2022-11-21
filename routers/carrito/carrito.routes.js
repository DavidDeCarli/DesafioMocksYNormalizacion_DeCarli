const { Router } = require("express");
const CarritoController = require("../../controllers/carrito.controller");

const carritoRoutes = Router();

carritoRoutes.get('/', CarritoController.getCarrito);
carritoRoutes.get('/:id', CarritoController.getCarritoById);
carritoRoutes.post('/', CarritoController.saveCarrito);
carritoRoutes.put('/:id', CarritoController.updateCarrito);
carritoRoutes.delete('/:id', CarritoController.deleteCarrito);

module.exports = carritoRoutes;
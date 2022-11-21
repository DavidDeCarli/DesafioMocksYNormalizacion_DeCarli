const { HTTP_STATUS } = require("../constants/api.constants");
const { CarritoDao } = require("../models/daos/app.daos");
const { successResponse } = require("../utils/api.utils");

const carritoDao = new CarritoDao();

class CarritoController {

	async getCarrito(req, res, next) {
		try {
			const carrito = await carritoDao.getAll();
			const response = successResponse(carrito);
			return res.status(HTTP_STATUS.OK).json(response);
		}
		catch(error) {
			next(error);
		}
	}

	async getCarritoById(req, res, next) {
		const { id } = req.params;

		try {
			const carrito = await usersDao.getCarritoById(id);
			const response = successResponse(carrito);
			return res.status(HTTP_STATUS.OK).json(response);
		}
		catch(error) {
			next(error);
		}
	}

	async saveCarrito(req, res, next) {
		try {
			const newCarrito = await carritoDao.save(req.body);
			const response = successResponse(newCarrito);
			return res.status(HTTP_STATUS.CREATED).json(response);
		}
		catch(error) {
			next(error);
		}
	}

	async updateCarrito(req, res, next) {
		const { id } = req.params;
		
		try {
			const updateCarrito = await carritoDao.update(id, req.body);
			const response = successResponse(updateCarrito);
			return res.status(HTTP_STATUS.OK).json(response);
		}
		catch(error) {
			next(error);
		}
	}

	async deleteCarrito(req, res, next) {
		const { id } = req.params;

		try {
			const deletedCarrito = await carritoDao.delete(id);
			const response = successResponse(deletedCarrito);
			return res.status(HTTP_STATUS.OK).json(response);
		}
		catch(error) {
			next(error);
		}
	}

	async populate(req, res, next) {
        const { qty } = req.query;
        try {
            const populate = await carritoDao.populate(qty);
            const response = successResponse(populate);
            return res.status(HTTP_STATUS.OK).json(response);
        }
        catch(error) {
            next(error);
        }
    }
}

module.exports = new CarritoController();
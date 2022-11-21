const { HTTP_STATUS } = require("../constants/api.constants");
const MockContainer = require("../models/containers/mock.container");
const { successResponse } = require("../utils/api.utils");

const productModel = new MockContainer('product');

class ProductsController {
    
    async getProducts(req, res, next) {
        try {
            const users = await productModel.getAll();
            const response = successResponse(users);
            return res.status(HTTP_STATUS.OK).json(response);
        }
        catch(error) {
            next(error);
        }
    }

    async getProductsById(req, res, next) {
        const { id } = req.params;

        try {
            const user = await productModel.getById(id);
            const response = successResponse(user);
            return res.status(HTTP_STATUS.OK).json(response);
        }
        catch(error) {
            next(error);
        }
    }

    async saveProducts(req, res, next) {
        try {
            const newProduct = await productModel.save(req.body);
            const response = successResponse(newProduct);
            return res.status(HTTP_STATUS.CREATED).json(response);
        }
        catch(error) {
            next(error);
        }
    }

    async updateProducts(req, res, next) {
        const { id } = req.params;

        try {
            const updateProducts = await productModel.update(id, req.body);
            const response = successResponse(updateProducts);
            return res.status(HTTP_STATUS.OK).json(response);
        }
        catch(error) {
            next(error);
        }
    }

    async deleteProducts(req, res, next) {
        const { id } = req.params;

        try {
            const deletedProduct = await productModel.delete(id);
            const response = successResponse(deletedProduct);
            return res.status(HTTP_STATUS.OK).json(response);
        }
        catch(error) {
            next(error);
        }
    }

    async populate(req, res, next) {
        const { qty } = req.query;
        try {
            const populate = await productModel.populate(qty);
            const response = successResponse(populate);
            return res.status(HTTP_STATUS.OK).json(response);
        }
        catch(error) {
            next(error);
        }
    }
}

module.exports = new ProductsController();
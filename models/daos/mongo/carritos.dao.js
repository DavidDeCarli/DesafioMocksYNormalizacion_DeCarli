const { Schema } = require('mongoose');
const MongoContainer = require("../../containers/mongo.container");

const collection = 'carritos';

const carritoSchema = new Schema({
    title: { type: String, require: true, unique: true },
    price: { type: Number, require: true },
    thumbnail: { type: String, required: true },
    stock: { type: Number, require: true },
});

class CarritoMongoDao extends MongoContainer {
	constructor() {
		super(collection, carritoSchema);
	}

	async getAllCarts() {
		return await this.getAll();
	}

	async getCartById(id) {
		return await this.getById(id);
	}

	async saveCart(item) {
		return await this.save(item);
	}

	async updateCart(id, item) {
		return await this.update(id, item);
	}

	async deleteCart(id) {
		return await this.delete(id);
	}

	async addProductToCar(idCarrito, idProducto) {
		this.model.updateOne({ _id: idCarrito }, {
			$push: {
				productos: [idProducto]
			}
		});
	}
}

module.exports = CarritoMongoDao;
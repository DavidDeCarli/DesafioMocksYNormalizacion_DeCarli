const { Schema } = require('mongoose');
const MongoContainer = require("../../containers/mongo.container");

const collection = 'products';

const productsSchema = new Schema({
    title: { type: String, require: true, unique: true },
    price: { type: Number, require: true },
    thumbnail: { type: String, required: true },
    stock: { type: Number, require: true }
});

class ProductsMongoDao extends MongoContainer {
	constructor() {
		super(collection, productsSchema);
	}

	async getAllProducts() {
		return await this.getAll();
	}

	async getProductById(id) {
		return await this.getById(id);
	}

	async saveProduct(item) {
		return await this.save(item);
	}

	async updateProduct(id, item) {
		return await this.update(id, item);
	}

	async deleteProduct(id) {
		return await this.delete(id);
	}
}

module.exports = ProductsMongoDao;
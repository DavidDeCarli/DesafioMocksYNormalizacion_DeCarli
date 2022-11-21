const FirebaseContainer = require("../../containers/firebase.container");

const collection = 'products';

class ProductsFirebaseDao extends FirebaseContainer {
	constructor() {
		super(collection);
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

module.exports = ProductsFirebaseDao;
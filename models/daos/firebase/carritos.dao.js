const FirebaseContainer = require("../../containers/firebase.container");

const collection = 'carritos';

class CarritoFirebaseDao extends FirebaseContainer {
	constructor() {
		super(collection);
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
		const docRef = this.query.doc(idCarrito);

		if (!docRef) {
			const message = `Resource with id ${id} does not exist in our records`;
			throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
		}

		// Actualizar carrito haciendo push en documento de firebase ...
		//return await docRef.update(...);
	}
}

module.exports = CarritoFirebaseDao;
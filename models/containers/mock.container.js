const MemoryContainer = require("./memory.container");
const { createFakeProduct } = require("../../utils/api.products.utils");

class MockContainer extends MemoryContainer {
  constructor(resource) {
    super(resource)
  }

  populate(qty = 50) {
    this.items = [];
    for (let i = 1; i <= qty; i++) {
      const newItem = createFakeProduct();
      this.items.push(newItem);
    }
    return this.items;
  }

  save(_item) {
    const newProduct = createFakeProduct();
    this.items.push(newProduct);
    return newProduct;
  }
}

module.exports = MockContainer;
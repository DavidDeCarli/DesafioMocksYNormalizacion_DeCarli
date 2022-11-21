const { faker } = require('@faker-js/faker');
const { v4: uuid } = require('uuid');

faker.locale = "es";

const createFakeProduct = () => {
  return{
    id: uuid(),
    product: faker.commerce.productName('Tijeras'),
    price: faker.commerce.price(100, 200, 0, '$'),
    image: faker.image.avatar()
  }
};

console.log(createFakeProduct);

module.exports={
  createFakeProduct
};
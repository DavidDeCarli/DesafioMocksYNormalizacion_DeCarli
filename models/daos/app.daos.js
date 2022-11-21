const envConfig = require("../../envConfig");

let appDaos = false;

if (envConfig.DATASOURCE) {
	appDaos = {
		ProductsDao: require('./' + envConfig.DATASOURCE + '/products.dao.js'),
		CarritoDao: require('./' + envConfig.DATASOURCE + '/carritos.dao.js'),
	}
}

module.exports = appDaos;

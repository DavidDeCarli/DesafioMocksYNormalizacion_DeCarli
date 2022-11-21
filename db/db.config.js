const envConfig = require('./../envConfig');
const firebaseConfig = require('./firebase.config.json');

module.exports = {
	mongodb: {
		uri: `mongodb+srv://daviddc488:${envConfig.DB_PASSWORD}@CoderHouse.beyxfsg.mongodb.net/?retryWrites=true&w=majority`,
	},
	firebase: {
		credentials: firebaseConfig,
	},
}
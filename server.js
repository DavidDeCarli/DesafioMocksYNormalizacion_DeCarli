const expressServer = require("./expressServer");
const envConfig = require("./envConfig");

const PORT = process.env.PORT || 8080;

const ASYNC_DATASOURCE = {
    mongo: require("./models/containers/mongo.container"),
    firebase: require("./models/containers/firebase.container"),
}

expressServer.listen(PORT, () => {
    if (!envConfig.DATASOURCE) {
        console.log('Error al intentar conectar con la base de datos...');
        return false;
    }
    
    if (Object.keys(ASYNC_DATASOURCE).includes(envConfig.DATASOURCE || '')) {
        ASYNC_DATASOURCE[envConfig.DATASOURCE].connect().then(() => {
            console.log("Connected to " + envConfig.DATASOURCE);
        })
    }

    console.log(`Server is up and running on port: `, PORT);
});

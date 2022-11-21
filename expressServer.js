const express = require('express');
const errorMiddleware = require('./middleware/error.middleware');
const apiRoutes = require('./routers/app.routers');

const expressServer = express();

// Middlewares
expressServer.use(express.json());
expressServer.use(express.urlencoded({ extended: true }));

// Routes
expressServer.use('/api', apiRoutes);

expressServer.use(errorMiddleware);

module.exports = expressServer;
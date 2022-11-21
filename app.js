const express = require('express');
const apiRoutes = require('./routers/app.routers');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send("Hello Everyones");
})

// Routes
app.use('/api', apiRoutes);

app.use(errorMiddleware);

module.exports = app;
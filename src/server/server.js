const express = require('express');
const router = require('../routes/patientRoutes');
const routeError = require('../utils/middleware/errorsMiddleware');


const server = express();



server.use(express.json());

server.use(router)

server.use(routeError);

module.exports = server;
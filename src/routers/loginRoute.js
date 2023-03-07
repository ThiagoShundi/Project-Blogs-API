const express = require('express');
const { loginController } = require('../controllers');

const loginRoute = express.Router();

loginRoute.post('/', loginController.create);

module.exports = loginRoute;
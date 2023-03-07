const express = require('express');
const { categoryController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

const categoryRoute = express.Router();

categoryRoute.post('/', validateToken, categoryController.createCategory);

categoryRoute.get('/', validateToken, categoryController.getCategory);

module.exports = categoryRoute;
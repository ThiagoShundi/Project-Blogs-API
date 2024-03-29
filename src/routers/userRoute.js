const express = require('express');
const { userController } = require('../controllers');
const { validateUser } = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');

const userRoute = express.Router();

userRoute.get('/', validateToken, userController.getUsers);

userRoute.get('/:id', validateToken, userController.getUserbyId);

userRoute.post('/', validateUser, userController.createUser);

module.exports = userRoute;
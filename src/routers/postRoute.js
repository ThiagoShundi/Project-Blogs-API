const express = require('express');
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const { validatePost } = require('../middlewares/validatePost');

const postRoute = express.Router();

postRoute.post('/', validateToken, validatePost, postController.createPost);

postRoute.get('/', validateToken, postController.getPost);

postRoute.get('/:id', validateToken, postController.getPostbyId);

module.exports = postRoute;
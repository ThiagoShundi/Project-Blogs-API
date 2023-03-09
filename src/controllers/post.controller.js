require('dotenv/config');
// const Sequelize = require('sequelize');
// const config = require('../config/config');
const { verifyToken } = require('../auth/authFunctions');

// const env = process.env.NODE_ENV || 'development';

const { postService, categoryService, postCategoryService } = require('../services');

// const sequelize = new Sequelize(config[env]);

const getPost = async (_req, res) => {
  try {
    const post = await postService.getAllPost();

    if (!post) throw Error;

    res.status(200).json(post);
  } catch (err) {
    // console.error(err);
    res.status(500).json({
      message: 'Erro ao buscar usuários no banco',
      error: err.message,
    });
  }
};

const getPostbyId = async (req, res) => {
    const { id } = req.params;

    const post = await postService.getById(id);

    if (!post) {
        return res.status(404).json({ message: 'Post does not exist' });
      }

    res.status(200).json(post);
  };

const createPost = async (req, res) => {
    // const t = await sequelize.transaction();
    try {
        const { title, content, categoryIds } = req.body;
        const { authorization } = req.headers;

        const veryfyCategoryId = await Promise.all(categoryIds
            .map((e) => categoryService.getCategoryById(e)));
        
        if (veryfyCategoryId.includes(null)) {
          return res.status(400).json({ message: 'one or more "categoryIds" not found' });
        }

        const userId = verifyToken(authorization).data.id;

        const resultPost = await postService
            .createPosts({ userId, title, content });

        await Promise.all(categoryIds.map((e) => postCategoryService
        .createPostCategory({ postId: resultPost.dataValues.id, categoryId: e })));

        res.status(201).json(resultPost);
    } catch (err) {
        return res.status(500).json({ message: 'Erro interno', error: err.message });
    }
  };

module.exports = { getPost, getPostbyId, createPost };
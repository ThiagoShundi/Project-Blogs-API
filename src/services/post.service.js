const { BlogPost, User, Category } = require('../models');

const getAllPost = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const getById = async (id) => {
  const course = await BlogPost.findByPk(id, { 
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

  return course;
};

const createPosts = ({ userId, title, content }) => BlogPost
.create({ title,
content,
userId,
published: new Date(),
updated: new Date(), 
});

  module.exports = {
    getAllPost,
    getById,
    createPosts,
  };
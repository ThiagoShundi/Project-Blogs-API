const { PostCategory } = require('../models');

const createPostCategory = ({ postId, categoryId }) => { 
    console.log({ postId, categoryId });
    PostCategory.create({
  postId,
  categoryId,
});
};

module.exports = {
  createPostCategory,
};
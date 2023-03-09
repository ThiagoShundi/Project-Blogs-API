const { Category } = require('../models');

const getAllCategory = () => Category.findAll();

const createCategorys = ({ name }) => Category.create({ name });

const getCategoryById = (userId) => Category.findByPk(userId);

  module.exports = {
    getAllCategory,
    createCategorys,
    getCategoryById,
  };
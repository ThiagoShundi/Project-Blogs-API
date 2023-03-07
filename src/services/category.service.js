const { Category } = require('../models');

const getAllCategory = () => Category.findAll();

const createCategorys = ({ name }) => Category.create({ name });

// const getByEmailUser = (email) => Category.findOne({ where: { email } });

// const getByUserId = (userId) => Category.findByPk(userId, { attributes: { exclude: 'password' } });

  module.exports = {
    getAllCategory,
    createCategorys,
    // getByEmailUser,
    // getByUserId,
  };
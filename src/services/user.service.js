const { User } = require('../models');

const getUsers = () => User.findAll({ attributes: { exclude: 'password' } });

const getAllUsers = () => User.findAll();

const createUsers = ({ displayName, email, password, image }) => User
.create({ displayName, email, password, image });

const getByEmailUser = (email) => User.findOne({ where: { email } });

  module.exports = {
    getUsers,
    getAllUsers,
    createUsers,
    getByEmailUser,
  };
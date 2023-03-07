const { User } = require('../models');

// const verifyUser = ({ username, password }) => User.create({ username, password });

const getByEmail = (email) => User.findOne({ where: { email } });

const getByPassword = (password) => User.findOne({ where: { password } });

  module.exports = {
    // verifyUser,
    getByEmail,
    getByPassword, 
  };  

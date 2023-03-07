require('dotenv/config');
const { createToken } = require('../auth/authFunctions');
const { userService } = require('../services');

const getUsers = async (_req, res) => {
  try {
    const users = await userService.getUsers();

    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao buscar usuários no banco',
      error: err.message,
    });
  }
};

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;

        const allUsers = await userService.getAllUsers();

         if (allUsers.some((e) => e.email === email)) {
          return res.status(409).json({ message: 'User already registered' });
        }

        await userService.createUsers({ displayName, email, password, image });       

        const emailToken = await userService.getByEmailUser(email);
    
        const token = createToken({ data: { emailToken } });

        res.status(201).json({ token });
      } catch (err) {
        return res.status(500).json({ message: 'Erro interno', error: err.message });
      }
  };

module.exports = { getUsers, createUser };
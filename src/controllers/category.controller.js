require('dotenv/config');
const { categoryService } = require('../services');

const getCategory = async (_req, res) => {
  try {
    const category = await categoryService.getAllCategory();

    if (!category) throw Error;

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao buscar usuários no banco',
      error: err.message,
    });
  }
};

// const getUserbyId = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const users = await userService.getByUserId(id);

//     if (!users) throw Error;

//     res.status(200).json(users);
//   } catch (err) {
//     res.status(404).json({ message: 'User does not exist' });
//   }
// };

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (name === undefined) {
          return res.status(400).json({ message: '"name" is required' });
        }

        const resultCategory = await categoryService.createCategorys({ name });       
   
        res.status(201).json(resultCategory);
      } catch (err) {
        return res.status(500).json({ message: 'Erro interno', error: err.message });
      }
  };

module.exports = { getCategory, createCategory };
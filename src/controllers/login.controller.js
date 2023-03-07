require('dotenv/config');
const { createToken } = require('../auth/authFunctions');
const { loginService } = require('../services');

const isBodyValid = (email, password) => email && password;

const create = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        if (!isBodyValid(email, password)) {
          return res.status(400).json({ message: 'Some required fields are missing' });
        }

        const emailValid = await loginService.getByEmail(email);
        const passwordValid = await loginService.getByPassword(password);

        if (!emailValid || !passwordValid) {
          return res.status(400).json({ message: 'Invalid fields' });
        }
    
        const token = createToken({ data: { emailValid } });

        console.log(token);

        res.status(200).json({ token });
      } catch (err) {
        return res.status(500).json({ message: 'Erro interno', error: err.message });
      }
  };

module.exports = { create };
const User = require('../models/esquemas'); 

// Listar todos los usuarios
const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar los usuarios', error });
  }
};

module.exports = {
  listarUsuarios
};
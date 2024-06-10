const User = require('../models/esquemas'); 

// Buscar un usuario por ID
const buscarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await User.findOne({ id });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el usuario', error });
  }
};

module.exports = {
  buscarUsuario
};
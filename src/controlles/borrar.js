const User = require('../models/esquemas'); 

// Borrar un usuario por ID
const borrarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await User.findOneAndDelete({ id });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario borrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar el usuario', error });
  }
};

module.exports = {
  borrarUsuario
};
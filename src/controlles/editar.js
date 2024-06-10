const User = require('../models/esquemas');

// Modificar usuario
const modificarUsuario = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    // Encuentra el usuario por su ID y actualiza los datos
    const updatedUser = await User.findOneAndUpdate({ id }, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al modificar el usuario', error });
  }
};

module.exports = { modificarUsuario };
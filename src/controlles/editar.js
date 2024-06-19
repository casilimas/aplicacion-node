
const User = require('../models/esquemas');
const { emailValidator, nameValidator, idValidator } = require('../../src/helpers/validacion');


// Modificar usuario
const modificarUsuario = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  // Validaciones
  if (updateData.nombres && !nameValidator(updateData.nombres)) {
    return res.status(400).json({ message: 'Nombres deben contener solo letras y tener un máximo de 50 caracteres.' });
  }

  if (updateData.apellidos && !nameValidator(updateData.apellidos)) {
    return res.status(400).json({ message: 'Apellidos deben contener solo letras y tener un máximo de 50 caracteres.' });
  }

  if (updateData.id && !idValidator(updateData.id)) {
    return res.status(400).json({ message: 'ID debe contener solo números y tener un máximo de 11 caracteres.' });
  }

  if (updateData.correo && !emailValidator(updateData.correo)) {
    return res.status(400).json({ message: 'Correo debe ser una dirección válida de @hotmail.com.' });
  }

  try {
    // Verificar si el usuario existe por el ID proporcionado
    const existingUser = await User.findOne({ id });

    if (!existingUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Actualizar los datos del usuario encontrado
    if (updateData.nombres) existingUser.nombres = updateData.nombres;
    if (updateData.apellidos) existingUser.apellidos = updateData.apellidos;
    if (updateData.id) existingUser.id = updateData.id;
    if (updateData.correo) existingUser.correo = updateData.correo;
    if (updateData.profesion) existingUser.profesion = updateData.profesion;

    // Guardar los cambios en la base de datos
    await existingUser.save();

    res.status(200).json(existingUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al modificar el usuario', error });
  }
};

module.exports = {
  modificarUsuario
};

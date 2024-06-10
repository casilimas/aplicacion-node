
const User = require('../models/esquemas'); 
const { emailValidator, nameValidator, idValidator } = require('../helpers/validacion');

// Crear nuevos usuarios
const createUser = async (req, res) => {
  const { nombres, apellidos, id, correo, profesion } = req.body;

  // Validaciones
  if (!nameValidator(nombres)) {
    return res.status(400).json({ message: 'Nombres deben contener solo letras y tener un máximo de 50 caracteres.' });
  }

  if (!nameValidator(apellidos)) {
    return res.status(400).json({ message: 'Apellidos deben contener solo letras y tener un máximo de 50 caracteres.' });
  }

  if (!idValidator(id)) {
    return res.status(400).json({ message: 'ID debe contener solo números y tener un máximo de 11 caracteres.' });
  }

  if (!emailValidator(correo)) {
    return res.status(400).json({ message: 'Correo debe ser una dirección válida de @hotmail.com.' });
  }

  try {
    // Verificar si el ID ya existe
    const existingUserById = await User.findOne({ id });
    if (existingUserById) {
      return res.status(400).json({ message: 'ID ya existe.' });
    }

    // Verificar si el correo ya existe
    const existingUserByEmail = await User.findOne({ correo });
    if (existingUserByEmail) {
      return res.status(400).json({ message: 'Correo ya existe.' });
    }

    // Crear y guardar el nuevo usuario
    const newUser = new User({ nombres, apellidos, id, correo, profesion });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({ message: 'Error al crear el usuario', error });
  }
};

module.exports = {
  createUser
};

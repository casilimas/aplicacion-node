
const express = require('express');
const router = express.Router();
const userController = require('../controlles/crear');


// Definir rutas



// Ruta para crear un nuevo usuario
router.post('/api/crear', userController.createUser);

// Definir tus rutas 
router.get('/', (req, res) => {
  res.send('ruta de prueba');
});

module.exports = router;
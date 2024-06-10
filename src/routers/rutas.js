
const express = require('express');
const router = express.Router();
const userController = require('../controlles/crear');
const { modificarUsuario } = require('../controlles/editar');
const { listarUsuarios } = require('../controlles/listar');


// Definir rutas
// Ruta para crear un nuevo usuario
router.post('/api/crear', userController.createUser);
router.put('/api/modificar/:id', modificarUsuario);
router.get('/api/listar', listarUsuarios);

// Definir tus rutas 
router.get('/', (req, res) => {
  res.send('ruta de prueba');
});

module.exports = router;




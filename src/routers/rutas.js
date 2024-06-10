
const express = require('express');
const router = express.Router();
const userController = require('../controlles/crear');
const { modificarUsuario } = require('../controlles/editar');
const { listarUsuarios } = require('../controlles/listar');
const { borrarUsuario } = require('../controlles/borrar');


// Definir rutas
// Ruta para crear un nuevo usuario
router.post('/api/crear', userController.createUser);
router.put('/api/modificar/:id', modificarUsuario);
router.get('/api/listar', listarUsuarios);
router.delete('/api/borrar/:id', borrarUsuario);

// Definir tus rutas 
router.get('/', (req, res) => {
  res.send('ruta de prueba');
});

module.exports = router;





const express = require('express');
const router = express.Router();

// Definir tus rutas 
router.get('/', (req, res) => {
  res.send('ruta de prueba');
});

module.exports = router;
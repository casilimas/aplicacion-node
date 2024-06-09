const express = require('express');
const connectDB = require('./db/connection');
require('dotenv').config();

const rutas = require('./routers/rutas'); 
const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares y rutas
app.use(express.json());
app.use('/aplicacion', rutas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto  ${PORT}`));
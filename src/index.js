const express = require('express');
const connectDB = require('./db/connection');
require('dotenv').config();
const cors = require('cors');

const rutas = require('./routers/rutas'); 
const app = express();
app.use(cors({
    origin: 'http://localhost:5173' 
  }));

// Conectar a la base de datos
connectDB();

// Middlewares y rutas
app.use(express.json());
app.use('/api', rutas);
app.use('/aplicacion', rutas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto  ${PORT}`));
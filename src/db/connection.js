const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Carga las variables de entorno desde el archivo .env
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST; 
const dbPort = process.env.DB_PORT; 
const dbName = process.env.DB_NAME; 
const mongoUri = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('Conexión a la base de datos exitosamente');
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
    process.exit(1); // Detiene la aplicación si no puede conectar a la base de datos
  }
};

module.exports = connectDB;
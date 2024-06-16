

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Carga las variables de entorno desde el archivo .env
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST; 
const dbPort = process.env.DB_PORT; 
const dbName = process.env.DB_NAME;

// Construye la cadena de conexión para la base de datos local
const localUri = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;

// Usa la cadena de conexión del clúster si está definida, de lo contrario, usa la local
const mongoUri = process.env.DB_URI || localUri;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos exitosamente');
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
    process.exit(1); // Detiene la aplicación si no puede conectar a la base de datos
  }
};

module.exports = connectDB;

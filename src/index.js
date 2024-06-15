const express = require('express');
const connectDB = require('./db/connection');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');  //https://www.npmjs.com/package/helmet#cross-origin-resource-policy
                                  //middleware de Node.js que mejora la seguridad HTTP configurando varios 
                                  //encabezados de seguridad para proteger aplicaciones Express.
const rutas = require('./routers/rutas'); 
const app = express();

                                                                //Configuración de CORS con origen dinámico, 
// Lista de orígenes permitidos dependiendo del entorno           permite orígenes específicos según el entorno 
const permitirOrigenes = process.env.NODE_ENV === 'production'  //(localhost para desarrollo y producción), 
  ? ['https://frontend-produccion.com']                         //utilizando Helmet para seguridad HTTP y Express 
  : ['http://localhost:5173']; //desarrollo                       para manejar rutas y conexión a la base de datos.
                                                                //https://www.npmjs.com/package/cors
  app.use(cors({                                                
    origin: function (origin, callback) {
      if (!origin || permitirOrigenes.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('No permitida por CORS'));
      }
    }
  }));;

// Usar Helmet para seguridad HTTP
app.use(helmet());
// Conectar a la base de datos
connectDB();

// Middlewares y rutas
app.use(express.json());
app.use('/api', rutas);
app.use('/aplicacion', rutas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto  ${PORT}`));
const express = require('express');
const connectDB = require('./db/connection');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const axios = require('axios');
const bodyParser = require('body-parser');
const rutas = require('./routers/rutas');

const app = express();

// Lista de orígenes permitidos dependiendo del entorno
const permitirOrigenes = process.env.NODE_ENV === 'production'
  ? ['https://casilimas.github.io']
  : ['http://localhost:5173', 'http://192.168.31.166:5173'];

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('Orígenes permitidos:', permitirOrigenes);

app.use(cors({
  origin: function (origin, callback) {
    console.log('Solicitando desde origen:', origin);
    if (!origin || permitirOrigenes.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.error('No permitida por CORS:', origin);
      callback(new Error('No permitida por CORS'));
    }
  }
}));

// Usar Helmet para seguridad HTTP
app.use(helmet());

// Conectar a la base de datos
connectDB();

// Middlewares y rutas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', rutas);
app.use('/aplicacion', rutas);

// Ruta para crear usuario y verificar reCAPTCHA
app.post('/api/crear', async (req, res) => {
  const recaptchaResponse = req.body.recaptchaToken;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

  try {
    const response = await axios.post(verificationURL);
    if (response.data.success) {
      res.json({ success: true, message: 'reCAPTCHA verificado con éxito' });
    } else {
      res.json({ success: false, message: 'Falló la verificación de reCAPTCHA' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al verificar reCAPTCHA' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

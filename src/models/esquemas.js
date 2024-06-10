//  https://mongoosejs.com/docs/schematypes.html


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({   //Define la estructura y validaciones de documentos en Mongo
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  profesion: {
    type: String,
    required: false
  }
}, {
  timestamps: true // fecha y hora de creacion
});

const User = mongoose.model('User', userSchema);

module.exports = User;
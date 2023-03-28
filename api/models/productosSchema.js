const mongoose = require("mongoose");
const { Schema } = mongoose;
// Creamos la estructura de un tipo de documento (users)
const productosSchema = new Schema({
  codigo: Number,
  nombre: {
    type: String,
    required: true,
  },
  fabrica: {
    type: String,
    required: true,
  },
  precio: Number,
  fechaCreacion: { type: Date, default: Date.now },
  activo: Boolean,
});
// Como primer parametro, va el nombre de la coleccion
module.exports = mongoose.model("Productos", productosSchema);

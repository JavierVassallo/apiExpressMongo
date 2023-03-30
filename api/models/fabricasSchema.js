const mongoose = require("mongoose");
const { Schema } = mongoose;

const fabricasSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: String,
  fechaCreacion: { type: Date, default: Date.now },
  activa: Boolean,
});
module.exports = mongoose.model("Fabricas", fabricasSchema);

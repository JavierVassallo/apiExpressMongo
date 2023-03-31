const mongoose = require("mongoose");
const { Schema } = mongoose;

const publicacionSchema = new Schema({
  _autor: { type: Number, ref: "autor" },
  titulo: String,
});
module.exports = mongoose.model("publicaciones", publicacionSchema);

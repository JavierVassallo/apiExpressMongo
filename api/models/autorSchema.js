const mongoose = require("mongoose");
const { Schema } = mongoose;

const autorSchema = new Schema({
  _id: Number,
  nombre: String,

  publicaciones: [
    {
      type: Schema.Types.ObjectId,
      ref: "publicacions",
    },
  ],
});
module.exports = mongoose.model("autor", autorSchema);

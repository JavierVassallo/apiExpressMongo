const fabricasSchema = require("../../models/fabricasSchema");

let fabricasController = {};

/* GET */

fabricasController.getFabricas = async () => {
  return fabricasSchema.find();
};

fabricasController.getFabrica = async (nombre) => {
  return fabricasSchema.find({ nombre: nombre });
};

/* POST */

fabricasController.postFabricas = async (body) => {
  const fabrica = fabricasSchema(body);
  return fabrica.save();
};

/* PUT */

fabricasController.putFabrica = async (nombre, body) => {
  return fabricasSchema.findOneAndUpdate({ nombre: nombre }, body);
};

/* DELETE */

fabricasController.deleteFabrica = async (nombre) => {
  return fabricasSchema.deleteOne({ nombre: nombre });
};

module.exports = fabricasController;

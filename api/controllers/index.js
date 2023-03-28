const helpers = require("../helpers");
const productosSchema = require("../models/productosSchema");

let productosController = {};

/* GET */

productosController.getProductos = async () => {
  return productosSchema.find();
};

productosController.getProducto = async (id) => {
  return productosSchema.find({ codigo: parseInt(id) });
};

/* POST */

productosController.postProductos = async (producto) => {
  const Producto = productosSchema(producto);
  return Producto.save();
};

/* PUT */

productosController.putProducto = async (codigo, precio) => {
  return productosSchema.findOneAndUpdate(
    { codigo: codigo },
    { precio: precio, nombre: "otra leche" }
  );
};

/* DELETE */

productosController.deleteProducto = async (nombre) => {
  return productosSchema.deleteOne({ nombre: nombre });
};

module.exports = productosController;

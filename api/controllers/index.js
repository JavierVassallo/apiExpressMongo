const helpers = require("../helpers");

let productosController = {};

productosController.getProductos = async () => {
  let data = await helpers.dataAsincrona();
  return { success: true, data };
};

productosController.postProductos = (producto) => {
  if (producto.fabrica) {
    return {
      success: true,
      data: "se creo el producto de la fabrica " + producto.fabrica,
    };
  } else {
    return {
      success: false,
      data: "el producto no tenia fabrica, porfavor enviarla",
    };
  }
};

module.exports = productosController;

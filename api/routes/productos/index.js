const express = require("express");
const productosController = require("../../controllers/productosController");

const router = express.Router();

/* GET */

router.get("/productos", async (req, res) => {
  try {
    let respuesta = await productosController.getProductos();
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.get("/producto", async (req, res) => {
  const { query } = req;
  try {
    let respuesta = await productosController.getProducto(query.codigo);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

/* POST  */

router.post("/productos", async (req, res) => {
  try {
    let respuesta = await productosController.postProductos(req.body);

    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

/* PUT */

router.put("/producto", async (req, res) => {
  let { codigo, precio } = req.body;
  try {
    let respuesta = await productosController.putProducto(codigo, precio);

    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

/* DELETE */

router.delete("/producto", async (req, res) => {
  let { nombre } = req.body;
  try {
    let respuesta = await productosController.deleteProducto(nombre);

    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

module.exports = router;

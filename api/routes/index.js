const express = require("express");
const productosController = require("../controllers");

const router = express.Router();

router.get("/productos", async (req, res) => {
  let respuesta = await productosController.getProductos();
  res.json(respuesta);
});

router.post("/productos", (req, res) => {
  let respuesta = productosController.postProductos(req.body);
  res.json(respuesta);
});

module.exports = router;

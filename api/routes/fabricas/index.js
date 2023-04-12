const express = require("express");
const fabricasController = require("../../controllers/fabricasControllers");
const admin = require("../../middleware/jwtAdmin");
const authenticateToken = require("../../middleware/jwtVerify");

const router = express.Router();

router.get("/fabricas", authenticateToken, async (req, res) => {
  console.log("jwtDecodificado", req.jwtDecodificado);
  try {
    let respuesta = await fabricasController.getFabricas();
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.get("/fabrica", async (req, res) => {
  const { query } = req;
  try {
    let respuesta = await fabricasController.getFabrica(query.nombre);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.post("/fabrica", admin, async (req, res) => {
  try {
    let respuesta = await fabricasController.postFabricas(req.body);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.put("/fabrica", async (req, res) => {
  let { nombre, body } = req.body;
  try {
    let respuesta = await fabricasController.putFabrica(nombre, body);

    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.delete("/fabrica", async (req, res) => {
  let { nombre } = req.body;
  try {
    let respuesta = await fabricasController.deleteFabrica(nombre);

    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

module.exports = router;

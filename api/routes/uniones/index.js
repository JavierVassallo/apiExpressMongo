const express = require("express");
const fabricasController = require("../../controllers/fabricasControllers");
const unionController = require("../../controllers/union");

const router = express.Router();

router.get("/union", async (req, res) => {
  try {
    let respuesta = await unionController.getUnion();
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

module.exports = router;

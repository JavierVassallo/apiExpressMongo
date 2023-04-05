const express = require("express");
const usuariosController = require("../../controllers/usuariosControllers");

const router = express.Router();

/* GET */

router.get("/usuario", async (req, res) => {
  const { query } = req;
  try {
    let respuesta = await usuariosController.getUsuario(query.user);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

/* POST  */

router.post("/usuario", async (req, res) => {
  try {
    let respuesta = await usuariosController.postUsuario(req.body);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.post("/login", async (req, res) => {
  let { user, password } = req.body;

  try {
    let respuesta = await usuariosController.login(user, password);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

module.exports = router;

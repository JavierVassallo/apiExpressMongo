const { hashPass, comparePasswaord } = require("../../helpers");
const usuariosSchema = require("../../models/usuariosSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
let usuariosController = {};

/* GET */

usuariosController.getUsuario = async (user) => {
  return usuariosSchema.find({ username: user });
};

/* POST */

usuariosController.postUsuario = async (body) => {
  let newBody = { ...body };
  newBody.password = await hashPass(newBody.password);
  const usuarioNuevo = usuariosSchema(newBody);
  return usuarioNuevo.save();
};

usuariosController.login = async (user, password) => {
  let usuarioBase = await usuariosSchema.findOne({ username: user });

  if (usuarioBase) {
    let comparacion = await comparePasswaord(password, usuarioBase.password);
    if (comparacion) {
      let usuario = {
        nombre: usuarioBase.nombre,
        username: usuarioBase.username,
        rol: "Administrador",
      };
      let llave = process.env.SECRET_KEY;
      let token = jwt.sign(usuario, llave, { expiresIn: "30s" });

      return { succes: true, mensaje: "usuario logueado correctamente", token };
    } else {
      return { succes: false, mensaje: "passsword incorrecto" };
    }
  } else {
    return { succes: false, mensaje: "usuario inexistente" };
  }
};

module.exports = usuariosController;

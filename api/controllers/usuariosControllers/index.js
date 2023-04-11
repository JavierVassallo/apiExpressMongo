const { hashPass, comparePasswaord } = require("../../helpers");
const usuariosSchema = require("../../models/usuariosSchema");

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
      return { succes: true, mensaje: "usuario logueado correctamente" };
    } else {
      return { succes: false, mensaje: "passsword incorrecto" };
    }
  } else {
    return { succes: false, mensaje: "usuario inexistente" };
  }
};

module.exports = usuariosController;

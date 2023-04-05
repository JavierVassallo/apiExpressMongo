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
  console.log("pre cambio de pass", newBody);
  newBody.password = await hashPass(newBody.password);
  console.log("despues cambio de pass", newBody);
  const fabrica = usuariosSchema(newBody);
  return fabrica.save();
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
  /*let newBody = { ...body };
    console.log("pre cambio de pass", newBody);
    newBody.password = await hashPass(newBody.password);
    console.log("despues cambio de pass", newBody);
    const fabrica = usuariosSchema(newBody);
    return fabrica.save();*/
};

module.exports = usuariosController;

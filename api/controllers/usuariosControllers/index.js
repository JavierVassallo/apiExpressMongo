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
  console.log("pre cambio de pass", newBody);
  newBody.password = await hashPass(newBody.password);
  console.log("despues cambio de pass", newBody);
  const fabrica = usuariosSchema(newBody);
  return fabrica.save();
};

usuariosController.login = async (user, password) => {
  let llave = process.env.SECRET_KEY;
  console.log("llave", llave);
  let usuarioBase = await usuariosSchema.findOne({ username: user });

  if (usuarioBase) {
    let comparacion = await comparePasswaord(password, usuarioBase.password);
    if (comparacion) {
      let usuario = {
        name: usuarioBase.nombre,
        userName: usuarioBase.username,
      };
      let token = jwt.sign(usuario, process.env.SECRET_KEY, {
        expiresIn: "180s",
      });
      console.log("jwt_decode(token)", jwt.decode(token));
      return { succes: true, mensaje: "usuario logueado correctamente", token };
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

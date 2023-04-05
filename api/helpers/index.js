const bcrypt = require("bcrypt");
let helpers = {};

helpers.dataAsincrona = async () => {
  return [1, 2, 3, 4, 5, 6];
};

helpers.hashPass = (password) => {
  var salt_round = 12;

  return bcrypt.hash(password, salt_round);
};

helpers.comparePasswaord = (passwordEntrante, passwordBase) => {
  return bcrypt.compare(passwordEntrante, passwordBase);
};

module.exports = helpers;

const express = require("express");
const cors = require("cors");
const routerProductos = require("./routes/productos");
const routerFabricas = require("./routes/fabricas");
const routerUnion = require("./routes/uniones");
const app = express();

require("./database/database.js");

app.set("PORT", process.env.PORT || 5000);

app.use(cors());
app.use(express.json());
app.use(routerProductos);
app.use(routerFabricas);
app.use(routerUnion);

app.listen(app.get("PORT"), () => {
  console.log(`Servidor ejecutándose en puerto
    ${app.get("PORT")}`);
});

const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname+ "/public")));

const mainRutas = require('./src/routers/main.js');

app.use("/", mainRutas);

app.listen(3002, () => {
    console.log("Servidor funcionando en puerto", 3002);
});

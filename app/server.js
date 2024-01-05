const express = require("express");

const app = express();

let productos = [
    {id: 1, nombre: "Producto 1"},
    {id: 2, nombre: "Producto 2"},
    {id: 3, nombre: "Producto 3"},

];
app.get("/api/productos", (req, res) => {
    res.json({productos})
})


app.get("*", (req, res) => {
    res.status(404).send("Ruta no existente");
})

module.exports = app;
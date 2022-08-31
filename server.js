const express = require('express')
const Manager = require('./manager.js')

const app = express();

const server = app.listen(8080, () => console.log("Server Up!"));
server.on("error", (error) => console.log(`Error en el servidor`));

let numeroAleatorio = 0;
let productoRandom = [];
const fileSystem = new Manager("products.json");

const main = async () => {
  const productos = await fileSystem.getAll();

  app.get("/productos", (req, res) => {
    res.json(productos);
  });
  app.get("/productoRandom", (req, res) => {
    numeroAleatorio = Math.floor(Math.random() * productos.length) + 1;
    productoRandom = productos.find((producto) => producto.id === numeroAleatorio);
    res.json(productoRandom);
  });
};
main();
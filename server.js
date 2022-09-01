const express = require('express')
const Contenedor = require('./contenedor.js')
const obtenerProductos = new Contenedor()
const app = express();

const server = app.listen(8080, () => console.log("Server Up!"));
server.on("error", (error) => console.log(`Error en el servidor`));

app.get('/', (request, response) => {
    response.send("<h1 style= 'color:blue' align = 'center'>Hola Mundo desde express</h1>");
    })
app.get('/productos', (request, response) => {
    obtenerProductos.getAll().then(result => response.send(result))
    })
app.get('/productoRandom', (request, response) => {
    obtenerProductos.getRandom().then(result => response.send(result))
   
    });    
app.get('/*', (request,response) => {
    response.status(404,).send("<h1 style = 'color:red' align = 'center'>PAGINA NO ENCONTRADA</h1>")
    })    
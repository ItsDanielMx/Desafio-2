const fs = require('fs')
const pathToFile = './products.json'

class Contenedor {
        getAll = async () => {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            return {productos}
        }
        getRandom = async () => {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            let cantidad = productos.length
            let random = Math.floor(Math.random()* cantidad)+1;
            let producto = productos.find(producto => producto.id === random)
            return {producto}
        }
}

module.exports = Contenedor
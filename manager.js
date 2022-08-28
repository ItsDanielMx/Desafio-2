const fs = require('fs')
/*
product = {
    name: String  (Required)
    description: String  (Required)
    price: Number  (Required)
    image: String
}
*/
const pathToFile = './products.json'
class Manager {
    save = async (product) => {
        if (!product.name || !product.description || !product.price) return {status: "error", message: "Missing fields"}
        try {
            if (fs.existsSync(pathToFile)) {
                fs.appendFile
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let products = JSON.parse(data)
                let id = products[products.length-1].id+1
                product.id = id
                products.push(product)
                await fs.promises.writeFile(pathToFile, JSON.stringify(products, null, 2))
                return {status: "success", message: "Product created"}
            } else {
                product.id = 1
                await fs.promises.writeFile(pathToFile, JSON.stringify([product], null, 2))
                return {status: "success", message: "Product created"}
            }
        } catch(err) {
            return {status: "error", message: err.message}
        }
    }
    
    getAll = async () => {
        if (fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            return {status: "success", message: products}
        } else {
            return {status: "error", message: err.message}
        }
    }

    getById = async (id) => {
        if (fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let product = products.find(user => user.id === id)
            if (product) return {status: "success", message: product}
            return {status: "error", message: "Product not found"}
        } else {
            return {status: "error", message: err.message}
        }
    }

    updateProduct = async (id, updatedProduct) => {
        if (fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let newProduct = products.map(product => {
                if (product.id === id) {
                    updatedProduct.id = id
                    return updatedProduct
                } else return product
            })
            await fs.promises.writeFile(pathToFile, JSON.stringify(newProduct, null, 2))
            return {status: "success", message: "Product updated"}
        } else {
            return {status: "error", message: err.message}
        }
    }

    deleteById = async (id) => {
        if (fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let newProduct = products.filter(product => product.id !== id)
            await fs.promises.writeFile(pathToFile, JSON.stringify(newProduct, null, 2))
            return {status: "success", message: "Product deleted"}
        } else {
            return {status: "error", message: err.message}
        }
    }

    deleteAll = async () => {
        await fs.promises.writeFile(pathToFile, JSON.stringify([], null, 2))
        return {status: "success", message: "Products deleted"}
    }

}

module.exports = Manager
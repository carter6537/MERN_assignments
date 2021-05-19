const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({allProducts}))
        .catch(err => res.send(err))
}

module.exports.findAProduct = (req, res) => {
    Product.find()
        .then(product => res.json({product}))
        .catch(err => res.send(err))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({newProduct}))
        .catch(err => res.send(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json({updatedProduct}))
        .catch(err => res.send(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json({result}))
        .catch(err => res.send(err))
}
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "product title is required"]
    },
    price : {
        type: Number,
        required: [true, "product price is required"]
    },
    description : {
        type: String
    }
},{timestamps : true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
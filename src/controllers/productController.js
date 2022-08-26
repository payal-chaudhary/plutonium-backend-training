const product = require("../models/productModel")

const createProduct = async function(req,res){
    let data = req.body;
    let createproduct = await product.create(data)
    res.send({msg:data})

}


module.exports.createProduct=createProduct
const author = require("../models/assiauthor")



const createAuthor = async function(req,res){
    let data = req.body
    let printAuthor = await author.create(data)
    console.log(data)
    res.send({msg : printAuthor})
    
}

module.exports.createAuthor= createAuthor

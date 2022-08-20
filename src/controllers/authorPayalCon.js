const authorPayal = require("../models/authorPayal")

const createAuthorPayal= async function (req, res) {
    let data= req.body
    let authorCreated = await authorPayal.create(data)
    res.send({msg: authorCreated})
}


module.exports.createAuthorPayal=createAuthorPayal
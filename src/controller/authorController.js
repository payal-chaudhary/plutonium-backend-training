const authorModel= require("../model/authorModel")

const createAuthor = async function(req,res){
    try{let data = req.body
    let saveData = await authorModel.create(data)
    res.status(200).send({msg:saveData})
}catch(err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}

module.exports.createAuthor=createAuthor
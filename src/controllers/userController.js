const UserModel= require("../models/userModel")
const books =require("../books/books.js")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const allBooks = async function(req,res){
    let data1 = req.body;
    let saveData1 = await books.create(data1)
    res.send({msg:saveData1})
}

const getBooks= async function (req, res) {
    let getAll= await books.find()
    res.send({msg: getAll})
}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.allBooks= allBooks
module.exports.getBooks= getBooks

const Assi = require("../models/assignmentbook")

////question 1/////
const createBooks =async function(req,res){
    let data = req.body
    let saveBookData = await Assi.create(data)
    res.send({msg :saveBookData})
}
////question 2/////
const booklist= async function (req, res) {
    let bookAndAuthor= await Assi.find().select({authorName : 1, bookName : 1, _id:0 });
    res.send({msg : bookAndAuthor})
}
////question 3/////
const getBooksInYear =async function(req,res){
    let bookYear = req.body.year

    let bookInYear = await Assi.find({year:{$eq:bookYear}})
    res.send({msg :bookInYear})
}
////question 4/////
const getParticular= async function(req,res){
    let obj =req.body
    let key = Object.keys(obj)[0]
    let value = obj[key]
let printBook = await Assi.find( {[key]:value}) 
res.send({msg: printBook})
}
////question 5/////
const getXINRBook= async function (req, res) {
    let booksprice= await Assi.find({"price.indianPrice" : {$nin : ["400 INR" , "300 INR" , "350 INR", "250INR", "1000INR"]}}).select({bookName : 1,price : 1, _id : 0});
    res.send({msg : booksprice})
}



////question 6/////
const getRandomBooks  =async function(req,res){
    let stocksOrPages = await Assi.find({
        $or : [{stockAvailable: true}, {totalPages:{$eq:500}}]
    })
    res.send({msg :stocksOrPages})
}





module.exports.createBooks =createBooks
module.exports.booklist = booklist
module.exports.getBooksInYear=getBooksInYear

module.exports.getXINRBook=getXINRBook
module.exports.getRandomBooks=getRandomBooks
module.exports.getParticular= getParticular




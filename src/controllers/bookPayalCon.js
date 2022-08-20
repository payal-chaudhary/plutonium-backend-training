const bookPayal = require("../models/bookPayal")
const author =require("../models/authorPayal")
const publish =require("../models/publisherPayal")

const createBookPayal= async function (req, res) {
    let data= req.body
    isAuthorValid= await author.findById(data.author)
    isPublisherValid = await publish.findById(data.publisher)
    if(!data.author){
        res.send("Please Provide Author detail")
    }
    else if(!isAuthorValid){
        res.send("Please Provide valid detail")
    }
    else if (!data.publisher){
        res.send("Provide publisher Details")
    }
    else if(!isPublisherValid){
        res.send("Please Provide Vaild Publisher")
    }
    else{
        let bookCreated = await bookPayal.create(data)

        res.send({msg: bookCreated})}
    }

    const getBooksPayal = async function (req, res) {
        let specificBook = await bookPayal.find().populate('author').populate("publisher")
        res.send({msg: specificBook})
    
    }

    const updateCover = async function (req, res) {

        let publisherId = await publish.find({name: ["Penguin", "HarperCollins"]}).select({_id:1})
        let updateNewBook = await bookPayal.updateMany({publisher:publisherId},{$set:{isHardCover:true, new:true, upsert:true}})
        let authorId = await author.find({rating:{$gt:3.5}}).select({_id:1})
        let updateRating = await bookPayal.updateMany({author:authorId},{$inc:{price:10}})
    
        res.send("update all")
    
    }

    

module.exports.createBookPayal=createBookPayal
module.exports.getBooksPayal=getBooksPayal
module.exports.updateCover=updateCover 
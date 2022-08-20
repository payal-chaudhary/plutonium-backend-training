const publisherPayal = require("../models/publisherPayal")

const createPublisherPayal= async function (req, res) {
    let data= req.body
    let publisherCreated = await publisherPayal.create(data)
    res.send({msg: publisherCreated})
}


module.exports.createPublisherPayal=createPublisherPayal
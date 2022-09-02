const { default: axios } = require("axios")

let memeHandler= async function(req,res){
    try{
        let template_id= req.query.template_id
        let text0= req.query.text0
        let text1=req.query.text1
        let user = req.query.username
        let password =req.query.password
        var options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${user}&password=${password}`
        }
    let result=await axios(options)
        res.send({data:result.data})
    }catch(error){
        console.log(error)
        res.status(500).send({status:false, msg:"server error"})
    }
}

module.exports.memeHandler=memeHandler
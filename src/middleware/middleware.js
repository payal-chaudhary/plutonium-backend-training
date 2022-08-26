const statusCheck= function ( req, res, next) {
    let {isfreeappuser}=req.headers
    if(isfreeappuser === undefined|| isfreeappuser==""){
        res.send("Request is missing a mandatory header")
    }else{
    req.isFreeAppUser=Boolean(req.headers.isfreeappuser);
    next()
    }
}




//const isFreeAppUser = function(req,res,next){
//     if(req.headers.isFreeAppUser===undefined)
//     res.send({msg:"The request is missing a mandortry header"})
//     else{
//         next()
//     }
// }

module.exports.statusCheck=statusCheck
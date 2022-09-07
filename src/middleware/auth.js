























/////Authorization/////

const authorise = function(req, res, next) {

let requesteduserId = req.params.userId
if(requesteduserId!==req.loggedInUser){
  return res.send({status:false, msg:"permission denied"})
}
next()
}

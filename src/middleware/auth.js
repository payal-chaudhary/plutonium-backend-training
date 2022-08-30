const jwt= require("jsonwebtoken")
const newUser= require("../models/newUserModel")



const authenticate = function(req, res, next) {

  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken){
      return res.send({ status: false, msg: "token is invalid" });
              }
    req.loggedInUser=decodedToken.userId
            
        

    next()
}



const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request

let requesteduserId = req.params.userId
if(requesteduserId!==req.loggedInUser){
  return res.send({status:false, msg:"permission denied"})
}
next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise

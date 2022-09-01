const jwt= require("jsonwebtoken")
const newUser= require("../models/newUserModel")

// 2xx -all fine
// 4xx- client error
// 5xx- server error
//400- bad request error
//401-authentication error
//403- forbidden error
//404- source error

const authenticate = function(req, res, next) {
try{
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
catch(err){ return res.status(401).send({msg:"server error or token is not valid"})}
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
try{
let requesteduserId = req.params.userId
if(requesteduserId!==req.loggedInUser){
  return res.send({status:false, msg:"permission denied"})
}
next()
}
catch(err){return res.status(403).send({msg:"server issue"})}
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise

const jwt =require("jsonwebtoken")
const newUser= require("../models/newUserModel")

const statusCheck= async function(req,res,next){
  let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
              if (!decodedToken)
                return res.send({ status: false, msg: "token is invalid" });
            
          



      next()}

    
module.exports.jwtvalidation=jwtvalidation;
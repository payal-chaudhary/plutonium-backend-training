const jwt = require("jsonwebtoken");

//////Authenticate//////

const authenticate = function (req, res, next) {
  try {
    let token = req.headers[`x-api-key`]

    if (!token) return res.status(404).send({ status: false, msg: "token must be present" });
  
    decodedToken = jwt.verify(token, "project-blog team 67")
    next();
  } catch (error) {
    return res.status(500).send({status:false, msg:error.message})
  }
 
}


/////Authorization/////

const authorise = function (req, res, next) {

  let requestedId = req.query.authorId
  let bodyId = decodedToken.authorId
  if (requestedId !== bodyId) {
    return res.status(401).send({ status: false, msg: "permission denied" })
  }
  next()
}

module.exports = { authenticate, authorise }

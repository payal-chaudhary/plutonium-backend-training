const jwt = require("jsonwebtoken");

//////Authenticate//////

const authenticate = function (req, res, next) {
  try {
    let token = req.headers[`x-api-key`]

    if (!token) return res.status(404).send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "project-blog team 67", function(err, decode){
      if(err){
        return res.send("invalid")
      }
      return decode
    })
    req.token = decodedToken
    next();
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message })
  }

}


/////Authorization/////

const authorise = function (req, res, next) {

  let requestedId = req.query.authorId
  if (requestedId !== req.token.authorId) {
    return res.status(401).send({ status: false, msg: "permission denied" })
  }
  next()
}

module.exports = { authenticate, authorise }

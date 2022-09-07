const jwt = require("jsonwebtoken");

//////Authenticate//////

const authenticate = function (req, res, next) {
  let token = req.headers[`x-api-key`]

  if (!token) return res.status(404).send({ status: false, msg: "token must be present" });

  decodedToken = jwt.verify(token, "project-blog team 67")
  if (decodedToken) {
    next();
  } else {
    return res.status(400).send({ status: false, message: 'Token is not valid' })
  }
}


/////Authorization/////

const authorise = function (req, res, next) {

  let requesteduserId = req.params.userId
  if (requesteduserId !== req.decodedToken.userId) {
    return res.status(401).send({ status: false, msg: "permission denied" })
  }
  next()
}

module.exports = { authenticate, authorise }

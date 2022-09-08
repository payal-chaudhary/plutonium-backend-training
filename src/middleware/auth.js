const jwt = require("jsonwebtoken");
const blogModel = require("../model/blogModel");
//////Authenticate//////

const authenticate = function (req, res, next) {
  try {
    let token = req.headers[`x-api-key`];

    if (!token)
      return res
        .status(404)
        .send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(
      token,
      "project-blog team 67",
      function (err, decode) {
        if (err) {
          return res.send("invalid");
        }
        return decode;
      }
    );
    req.token = decodedToken;
    next();
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

/////Authorization/////

const authorise = async function (req, res, next) {
  
  let getBlogByParam = req.params.blogId;
  if (!getBlogByParam) {
    let getBlogByQuery = req.query;
    if (getBlogByQuery.authorId == req.token.authorId) {
      next();
    }if(!getBlogByParam)
    getBlogByQuery.authorId = req.token.authorId;
    let getBlogId = await blogModel.find(getBlogByQuery);
    if (!getBlogId) {
      return res.status(401).send({ status: false, msg: "permission denied" });
    }
    next();
  }
};

module.exports = { authenticate, authorise };

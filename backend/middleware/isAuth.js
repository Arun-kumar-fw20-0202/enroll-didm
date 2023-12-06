let jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const authToken = req.cookies.auth_token;
    if (!authToken) {
      return res.status(400).send({ message: "No token found please login", status: false });
    }
    let decode = jwt.verify(authToken, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(400).send({ message: "Access Denied False token provided", status: false });
    }
    req.profile = decode;
    next();
  } catch (error) {
    return res.status(400).send({ message: error.message, status: false });
  }
};

module.exports = isAuth;

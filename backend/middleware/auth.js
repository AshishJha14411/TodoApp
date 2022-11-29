const config = require( '../config/index')
const jwt = require("jsonwebtoken");

const auth = (req, res) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, Authentication Failed" });
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded.user
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not Valid" });
  }
};

module.exports = auth;

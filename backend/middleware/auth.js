const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    console.log(req.cookies);
    const {token} = req.cookies
    //check if token is present in cookies i.e person is logged in and token didnt expire
    if(!token){
        return res.status(403).send("Token is Missing")
    }
    //verification of token
    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decode)
        req.user = decode
    } catch (error) {
        res.status(403).send("Token is Invalid")
        
    }
    return next()

}


module.exports = auth
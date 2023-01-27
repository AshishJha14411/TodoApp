const jwt = require('jsonwebtoken')
const config = require('../config')

const auth = (req, res, next) => {
  
    const token =  req.header('token')

    // Authorization: "Bearer longtokenvalue"
    // const token = req.header("Authorization").replace("Bearer ", "")


    //what if token is not there
    if (!token) {
        return res.status(403).send('token is missing')
    }

    //verify token
    try {
        const user = jwt.verify(token, config.JWT_SECRET)
       
        req.user ={
            user_id:user.id
        }

    } catch (error) {
        res.status(403).send('token is invalid')
    }

    return next()
}

module.exports = auth
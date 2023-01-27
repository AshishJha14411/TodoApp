const dotenv = require('dotenv');

dotenv.config()

const config = {
    JWT_SECRET: process.env.SECRET_KEY,
    MONGO_URI: process.env.MONGO_URI
}

module.exports = config
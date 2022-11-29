const dotenv = require('dotenv');

dotenv.config()

const config = {
    JWT_SECRET: process.env.SECREt_KEY,
}

module.exports = config
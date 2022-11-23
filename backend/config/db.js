const mongoose = require("mongoose")
//connecting to the database core code
const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URI).then((conn) => {
        console.log(`ConnectedDB: ${conn.connection.host}`)
    }).catch((err) => {
        console.log(err.message);
        process.exit(1)
    })
}

module.exports = connectToDB
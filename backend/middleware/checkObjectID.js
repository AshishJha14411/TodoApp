const mongoose = require("mongoose");

//middleware function to check for a valid object id
exports.checkObjectId = (idToCheck) => (req,res,next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params[idToCheck]))
    return res.status(400).json({
        success: false,
        message: "Invalid User ID"
    })
}
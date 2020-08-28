const mongoose = require('mongoose')

/**
 * ENV
 */
require('dotenv').config()

const dbConnect = async (req, res, next) => {
    try {
        dbUri = process.env.MONGO_URL;
        dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(dbUri, dbOptions)
        next()
    } catch (error) {
        res.send('Error DB Connection!');
    }
}

module.exports = {
    dbConnect
}
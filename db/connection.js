require('dotenv').config()
const mongoose = require("mongoose")

const connectToDb = async ()=>{
    await mongoose.connect(process.env.ATLAS_URI);
    console.log(`connected to mongoose`)
}

module.exports = connectToDb;
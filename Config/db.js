// IMPORTING MONGOOOSE
const mongoose = require("mongoose")

// REQUIRING DOTENV
require("dotenv").config();

// FUNCTION DBCONNECT FOR CONNECTING TO THE DATABASE
const dbConnect = async () => {
    try{
    await mongoose.connect(process.env.DB_URL)
    console.log("Connected to the database....");
    }
    catch (error){
        console.log("error");
    }
}

// EXPORTING FUCNTION DBCONNECT 
module.exports = dbConnect()
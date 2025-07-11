const mongoose = require("mongoose");
const express = require("express");

const dbConnect = async ()=>{
try{
    await mongoose.connect(
        "mongodb+srv://bisanbasnet36:bisanbasnet36@cluster0.1yzzeif.mongodb.net/"
    )
    console.log("Database Connection Successfull");

}catch(e){
    console.log("Error is coming in dbconnect", e);
}
}

module.exports = dbConnect;
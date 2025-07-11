const express = require("express");
const mongoose = require("mongoose");

const suggestSchema = new mongoose.Schema({
    suggesttext:{
        type:String,
        require:true
    },
  
}, {timestamps: true});

module.exports = mongoose.model("suggest", suggestSchema);
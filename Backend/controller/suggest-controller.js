const express = require("express");
const mongoose = require("mongoose");
const suggest = require("../model/suggest-model");

const insertintodb = async (req, res) => {
  const { suggesttext, userid } = req.body;

  try {
    const insert = await suggest.create({ suggesttext });
    

    return res.status(201).json({
      status: true,
      message: "Successfully inserted data in database"
    });
  } catch (err) {
    console.error(err);
    return res.status(401).json({
      status: false,
      message: "Data not inserted"
    });
  }
};


module.exports = insertintodb;
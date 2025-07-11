const express = require("express");
const mongoose = require("mongoose");
const user = require("../model/register-model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

const existingUser = await user.findOne({ name });
    if (existingUser) {   
      return res.status(400).json({
        status: false,
        message: "User already exists with this name"
      });
    }    

    const existingEmail = await user.findOne({ email });
    if (existingEmail) {   
      return res.status(400).json({
        status: false,
        message: "User already exists with this email"
      });
    }    

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const insert = await user.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address
    });

    if (insert) {
      console.log("User registered successfully");
      return res.status(201).json({
        status: true,
        message: "User registered successfully",
        user: { name, email, phone, address } // ✅ Don't return hashed password
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "Error registering user"
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await user.findOne({ email });

    if (!userData) {
      return res.status(404).json({
        status: false,
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, userData.password);
    if (isMatch) {
      return res.status(200).json({
        status: true,
        message: "Login successful",
        user: { name: userData.name, email: userData.email, phone: userData.phone, address: userData.address }
      });
    } else {
      return res.status(401).json({
        status: false,
        message: "Invalid password"
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "Error logging in"
    });
  }
};

module.exports = {
  register,
  login
};

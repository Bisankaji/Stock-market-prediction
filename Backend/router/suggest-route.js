const express = require("express");
const mongoose = require("mongoose");
const {insertintodb} = require("../controller/suggest-controller");
const{ register} = require("../controller/register-controller")
const{ login }= require("../controller/register-controller")
const { getAllSuggestions } = require("../controller/suggest-controller");

const router = express.Router();

router.post("/suggest", insertintodb);
router.post("/auth/register", register );
router.post("/auth/login", login);
router.get("/getsuggestions", getAllSuggestions);

module.exports = router;
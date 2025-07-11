const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ import cors
const dbConnect = require("./dbConnection/dbConnection");
const router = require("./router/suggest-route");
const PORT = 8000;

const app = express();

app.use(cors()); // ✅ enable CORS
app.use(express.json());

dbConnect();

app.use("/stock", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

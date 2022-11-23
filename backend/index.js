require("dotenv").config();
const { json } = require("express");
const express = require("express");
const connectToDB = require("./config/db");
const app = express();
const todoRoutes = require("./routes/todoRoutes")
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectToDB();
app.use("/", todoRoutes)
module.exports = app;

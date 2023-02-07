require("dotenv").config();
const { json } = require("express");
const express = require("express");
const connectToDB = require("./config/db");
const cors = require("cors");
const app = express();

const todoRoutes = require("./routes/todoRoutes");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

connectToDB();
app.use("/", todoRoutes);
module.exports = app;

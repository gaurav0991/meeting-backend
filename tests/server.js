const express = require("express");
const connectDb = require("../db");
var cors = require("cors");
const meetingRoute = require("../routes/meetingRoute");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", meetingRoute);

const PORT = 5000;
connectDb();
module.exports = app;

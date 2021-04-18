const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./db");
var cors = require("cors");
const meetingRoute = require("./routes/meetingRoute");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", meetingRoute);

const PORT = 5000;
connectDb();
app.listen(PORT, console.log(`Listening on PORT ${PORT}`));

const express = require("express");
const Meeting = require("../models/meetingModel");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { name, number, date, startTime, endTime } = req.body;
    console.log(req.body);
    const meeting = await Meeting.create({
      meetingName: name,
      numberPeople: number,
      DateOfMeeting: date,
      startTime: startTime,
      endTime: endTime,
    });
    return res.json(meeting);
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "error" });
  }
});
router.post("/search", async (req, res) => {
  try {
    const { meetingName } = req.body;
    let m;
    if (meetingName == "") {
      m = await Meeting.find();
    } else {
      console.log(meetingName);
      m = await Meeting.find({
        meetingName: { $regex: new RegExp("^" + meetingName, "i") },
      });
    }
    console.log(m);
    res.send(m);
  } catch (e) {
    return res.status(401).send({ message: "error" });
  }
});
router.post("/delete", async (req, res) => {
  try {
    const m = await Meeting.findById(req.body.id);
    m.delete();
    res.send({ success: true });
  } catch (e) {
    res.status(401).send({ message: "error" });
  }
});
router.get("/meetings", async (req, res) => {
  const m = await Meeting.find();
  res.send({ data: m });
});
module.exports = router;

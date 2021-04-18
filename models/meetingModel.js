const mongoose = require("mongoose");

const meetingSchema = mongoose.Schema(
  {
    meetingName: {
      type: String,
      required: true,
    },
    numberPeople: {
      type: Number,
      required: true,
    },
    DateOfMeeting: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Meeting = mongoose.model("metting", meetingSchema);
module.exports = Meeting;

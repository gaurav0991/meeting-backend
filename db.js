const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const cnn = await mongoose.connect(
      "mongodb+srv://Gaurav:Gaurav@cluster0.wmdwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log("MONGO CONNECTED");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;

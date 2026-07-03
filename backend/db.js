const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/bookstore";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(mongoURL);

    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectToMongo;
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const logger = require("morgan");
const mainRoute = require("./routes/index.js");
const PORT = 3000;
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
//middlewares
app.use(logger("dev"));
app.use(express.json());

app.use("/api", mainRoute);

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});

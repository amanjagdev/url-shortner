const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");

//connecting to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("MONGODB Connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
connectDB();

//Setup Server
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

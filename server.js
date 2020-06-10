const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//connecting to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: false }));


//Importing APIs
const urlAPI = require("./api/url");
const redirectAPI = require("./api/redirect");

app.use("/api/url", urlAPI);
app.use("/re", redirectAPI);

//Client Setup
app.use('/css',express.static(__dirname + '/public/css'))
app.use('/js',express.static(__dirname + '/public/js'))
app.get('/',(req,res) => {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

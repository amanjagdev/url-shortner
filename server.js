const express = require("express");

//Setup Server
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json({extended: false}));

app.get('/', (req,res) => {
    res.send("hi");
});

app.listen(port,() => {
    console.log(`Server started at ${port}`);
});
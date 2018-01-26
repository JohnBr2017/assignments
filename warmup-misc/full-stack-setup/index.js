const express = require("express");
const bodyParser = require("body-parser");
const bountyRoute = require("./routes/bounty.js")
const config = require("./config")
const cors = require("cors")

const app = express();
//middleware
app.use(bodyParser.json());
app.use(cors());
//routes
app.use("/bounty", bountyRoute);

app.listen(config.port, ()=>{
    console.log("listening on port " + config.port);
})  
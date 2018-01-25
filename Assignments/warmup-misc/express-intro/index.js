const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const coinRoute = require("./routes/coins.js");



const app = express();
let port = 8080;

//middleware
app.use(bodyParser.json())

//routes
app.use("/coins", coinRoute);



app.listen(port, () => {
    console.log("listening on port" + port)
})
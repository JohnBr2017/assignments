//express
const express = require("express");
const app = express();
//mongoose
const mongoose = require("mongoose");
//body-parser
const bodyParser = require("body-parser");
//routes
const inventoryRoutes = require("./routes/inventory")

mongoose.connect("mongodb://localhost/inventory", (err) =>{
    if (err) throw err;
    console.log("Connected to the database");
});

app.use(bodyParser.json());
app.use("/inventory", inventoryRoutes);

app.listen(8080, ()=>{
    console.log("Server is running on port 8080")
});
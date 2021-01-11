const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require('cors');
const auth = require('./routes/authRoute');
const followUpRoutes = require('./routes/followUpRoutes');

dotenv.config()

const app =  express();

app.use(cors());
app.use(bodyparser.json());
app.use('/user',authRoute);
app.use("/followUpRoutes",followUpRoutes);

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true},
    (error) => {
        if(error) console.log("Error connecting to the Database: " +error)
        else console.log("DataBase Connected")
    }
)

let port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("The server is up and running" +port)
})


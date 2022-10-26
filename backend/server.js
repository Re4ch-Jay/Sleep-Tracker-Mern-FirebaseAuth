const express = require('express')
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI)
    .then(res => app.listen(process.env.PORT, () => {
        console.log(`Sever is running on PORT ${process.env.PORT}`);
        console.log("Connected to database")
    }))
    .catch(err => console.log(err))


app.use(morgan("dev"))
app.use(express.json())   

app.use("/api/sleep", require("./routes/sleepRoutes"))
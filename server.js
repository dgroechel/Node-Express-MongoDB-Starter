const express = require("express");
const mongoose = require("mongoose");

// .env variables
require('dotenv').config()

const app = express();

//BodyParser
app.use(express.json());

//DB Config
const db = process.env.MONGODB

// Connect To DB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Set port and connect
port = 5000
app.listen(port)
console.log(`🚀 Server ready at http://localhost:${port}`);
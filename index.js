//const userRouter = require('./src/routes/user.js');

const dotenv =  require("dotenv");
dotenv.config()

const express = require('express')
const app = express()
const mysql = require('mysql2/promise')


const connection =  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

//app.use("/users", userRouter);

app.get('/',(req,res) =>{
    res.send('hello world');
})

app.listen(3001, () =>{
    console.log('running on port 3001');
})
//const userRouter = require('./src/routes/user.js');

import dotenv from "dotenv";
dotenv.config()

import express from 'express';
const app = express()
import mysql from 'mysql2/promise';
import userRouter from "./src/routes/user.js";


const connection =  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/user", userRouter);

app.get('/',(req,res) =>{
    res.send('hello world');
})


app.listen(3001, () =>{
    console.log('running on port 3001');
})
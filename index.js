//const userRouter = require('./src/routes/user.js');

import dotenv from "dotenv";
dotenv.config()

import express from 'express';
const app = express()
import userRouter from "./src/routes/user.js";
import productRouter from './src/routes/products.js';
import wishlistRouter from './src/routes/wishlists.js';

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/user", userRouter);
app.use("/product", productRouter);

app.use("/wishlist",wishlistRouter);
app.get('/',(req,res) =>{
    res.send('hello world');
})


app.listen(3001, () =>{
    console.log('running on port 3001');
})
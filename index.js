import dotenv from "dotenv";
import express from 'express';
import userRouter from "./src/routes/user.js";
import productRouter from './src/routes/products.js';
import wishlistRouter from './src/routes/wishlists.js';
import userwishlistsRouter from './src/routes/userwishlists.js';
import groupRouter from './src/routes/group.js';
import chatRouter from './src/routes/chat.js';
import cors from 'cors';
import schedule from 'node-schedule';
import user from "./src/services/user.js";

dotenv.config()
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/user", userRouter);

app.use("/product", productRouter);

app.use("/wishlist",wishlistRouter);

app.use("/userwishlist",userwishlistsRouter);

app.use("/group",groupRouter);

app.use("/chat",chatRouter);

app.get('/',(req,res) =>{
    res.send('hello world');
})


app.listen(3001, () =>{
    console.log('running on port 3001');
})


const job = schedule.scheduleJob('14 21 * * *',() => {
    try {
        user.getBirthdays();
    } catch (error) {
        console.log(error);
    }
});
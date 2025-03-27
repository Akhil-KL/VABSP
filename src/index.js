/* yeh bhi ek tarika hai db connect karne ka
but it make the main index file sort of messy
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();
;( async () => {
    try {
        await mongoose.conmect(`${process.env.MONGODB_URI}/${DB_NAME}` )
        app.on("error", (error) =>{
            console.error("ERROR", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR", error)
        throw err

    }
})()
*/
// require('dotenv').config({path: `./env`}); or we can use
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

connectDB();

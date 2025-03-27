import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR", error);
        process.exit(1);
    }
};

export default connectDB;
/*
abhi tak humne index,js mein db connect kara using
conventional approach now we will use second method
at 24:14
*/

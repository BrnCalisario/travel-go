import mongoose from "mongoose";

const URL = process.env.DATABASE_URL;

if(!URL)
    throw Error("Database not provided");

const connectDB = () => {
    mongoose.connect(URL)
        .then(res => {
            console.log("DB connected!");
        })
        .catch(err => {
            console.log("Database Error");
        });
}
 
export default connectDB;
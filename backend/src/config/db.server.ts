import mongoose from "mongoose";

const URL : string = process.env.DATABASE_URL;

const connectDB = () => {
    mongoose.connect(URL)
        .then(res => {
            console.log("DB connected!");
        })
        .catch(err => {
            console.log("Error");
        });
}
 
export default connectDB;
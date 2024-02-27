import mongoose, { ObjectId } from "mongoose";

const { Schema, model } = mongoose;

export interface IUser {
    _id : string;
    email : string,
    fullName: string,
    cpf : string,
    password : string, 
    isAdmin : boolean
    // amenity : {
    //     name : string,
    // }
// favorites: [{ type : ObjectId, ref: 'Hotel'}]
}

const userSchema = new Schema<IUser>({
    email : { type : String, required : true, unique : true },
    fullName :  { type : String, required : true },
    cpf :  { type : String, required : true, unique : true},
    password : String,
    isAdmin : { type: Boolean, default : false }
    // amenity : {
    //     name : String
    // }
});

const User = model<IUser>('User', userSchema);

export default User;
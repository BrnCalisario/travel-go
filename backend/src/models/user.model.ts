import mongoose from "mongoose";

const { Schema, model } = mongoose;

export interface IUser {
    email : string,
    fullName: string,
    cpf : string,
    password : string, 
    isAdmin : boolean
}

const userSchema = new Schema<IUser>({
    email : { type : String, required : true, unique : true },
    fullName :  { type : String, required : true },
    cpf :  { type : String, required : true, unique : true},
    password : String,
    isAdmin : { type: Boolean, default : false }
});

const User = model<IUser>('User', userSchema);

export default User;
import mongoose, { ObjectId } from "mongoose";
import { hotelSchema, IHotel } from "./hotel.model";

const { Schema, model } = mongoose;

export interface IUser {
    _id:       string;
    email:     string,
    fullName:  string,
    cpf:       string,
    password:  string,
    isAdmin:   boolean,
    favorites: IHotel[]
}

const userSchema = new Schema<IUser>({
    email:     { type: String, required: true, unique: true },
    fullName:  { type: String, required: true },
    cpf:       { type: String, required: true, unique: true },
    password:  String,
    isAdmin:   { type: Boolean, default: false },
    favorites: [ hotelSchema ]
});

const User = model<IUser>('User', userSchema);

export default User;
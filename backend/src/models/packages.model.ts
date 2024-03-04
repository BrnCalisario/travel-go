import mongoose, { ObjectId } from "mongoose";
import { hotelSchema, IHotel } from "./hotel.model";
import { IUser } from "./user.model";

const { Schema, model } = mongoose;


export interface IReservation {
    hotel: IHotel,
    checkIn: Date,
    checkOut: Date,
}

export interface ITicket {
    depart: Date,
    return: Date,
    from: string,
    to: string
}

export interface IPackages {
    reservation: IReservation,
    ticket: ITicket,
    user: IUser
}

const packagesSchema = new Schema<IPackages>({
    reservation: [{
        hotel: {
            name: { type: String, required: true, unique: true },
            cep: { type: String, required: true },
            city: { type: String, required: true },
            number: { type: String, required: true },
            amenities: { type: [String], required: true },
            image: Buffer,
            price: { type: Number, required: true },
            state: { type: String, required: true },
            rating: [{
                date: { type: Date, default: new Date() },
                review: String,
                rating: { type: Number, required: true }
            }]
        },
        checkIn: { type: Date, default: new Date() },
        checkOut: { type: Date, default: new Date() }
    }],
    ticket: [{
        depart: { type: Date, default: new Date() },
        return: { type: Date, default: new Date() },
        from: { type: String, required: true },
        to: { type: String, required: true }
    }],
    user: [{
        email: { type: String, required: true, unique: true },
        fullName: { type: String, required: true },
        cpf: { type: String, required: true, unique: true },
        password: String,
        isAdmin: { type: Boolean, default: false },
        favorites: [hotelSchema]
    }],
});

const Packages = model<IPackages>('Packages', packagesSchema);

export default Packages;
export { packagesSchema };
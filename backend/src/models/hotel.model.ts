import mongoose, { ObjectId } from "mongoose";

const { Schema, model } = mongoose;

export interface IRating {
    date : Date,
    review : string,
    rating : number
} 

export interface IHotel {
    _id:       string;
    name:      string,
    cep:       string,
    city:      string,
    number:    string,
    amenities: string[],
    image:     string,
    price:     number,
    state:     string,
    rating:    IRating[]
}

const hotelSchema = new Schema<IHotel>({
    name:      { type: String, required: true, unique : true },
    cep:       { type: String, required: true },
    city:      { type: String, required: true },
    number:    { type: String, required: true },
    amenities: { type: [ String ], required: true },
    image:     Buffer,
    price:     { type: Number, required: true },
    state:     { type: String, required: true },
    rating:    [{
                    date : { type : Date, default : new Date()},
                    review : String,
                    rating : { type : Number, required : true }
    }]
});

const Hotel = model<IHotel>('Hotel', hotelSchema);

export default Hotel;
export { hotelSchema };
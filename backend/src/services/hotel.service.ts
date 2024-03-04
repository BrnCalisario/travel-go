import { IHotel } from "../models/hotel.model";
import HotelRepository from "../repository/hotel/hotel.repository";
import { BaseService } from "./base.service";

export class HotelService extends BaseService<IHotel> {
    
    constructor() {
        super(new HotelRepository())
    }
}
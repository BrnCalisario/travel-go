import { injectable, inject } from "tsyringe";
import Hotel, { IHotel } from "../models/hotel.model";
import HotelRepository from "../repository/hotel/hotel.repository";
import { BaseRepository } from "../repository/repository";
import { BaseService } from "./base.service";


@injectable()
export class HotelService extends BaseService<IHotel, HotelRepository> {

    constructor(@inject("HotelRepository") protected _repository : HotelRepository) {
        super();
    }
}
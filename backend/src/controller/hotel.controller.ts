import { inject, injectable } from "tsyringe";
import { IHotel } from "../models/hotel.model";
import HotelRepository from "../repository/hotel/hotel.repository";
import { BaseService } from "../services/base.service";
import { HotelService } from "../services/hotel.service";
import { BaseController, IRoute } from "./base.controller";

@injectable()
export default class HotelController extends BaseController<IHotel, HotelService> {

    public path: string = "api/hotel";

    protected routes : IRoute[] = [];

    constructor(@inject("HotelService") protected _service : HotelService) {
        super()
    }
}
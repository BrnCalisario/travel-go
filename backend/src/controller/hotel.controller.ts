import { inject, injectable } from "tsyringe";
import { IHotel } from "../models/hotel.model";
import { BaseService } from "../services/base.service";
import { BaseController, IRoute } from "./base.controller";

@injectable()
export default class HotelController extends BaseController<IHotel> {

    public path: string = "api/hotel";

    protected routes : IRoute[] = [];

    constructor(@inject("HotelService") protected _service : BaseService<IHotel>) {
        super()
    }
}
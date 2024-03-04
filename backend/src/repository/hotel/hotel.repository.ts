import Hotel, { IHotel } from "../../models/hotel.model";
import { BaseRepository } from "../repository";

class HotelRepository extends BaseRepository<IHotel> {

	constructor() {
		super(Hotel);
	}

	async findByName(name : string) : Promise<IHotel[]> {
		const result = await this._model.find({ name : name })

		return result;
	}
}

export default HotelRepository;
import Hotel, { IHotel } from "../../models/hotel.model";
import { BaseRepository } from "../repository";

class HotelRepository extends BaseRepository<IHotel> {

	constructor() {
		super(Hotel);
	}
}

export default HotelRepository;
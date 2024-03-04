import { inject, injectable } from "tsyringe";
import Hotel, { IHotel } from "../../models/hotel.model";
import { BaseRepository } from "../repository";
import UserRepository from "../user/user.repository";

@injectable()
class HotelRepository extends BaseRepository<IHotel> {

	constructor(
		@inject("UserRepository") protected _userRepository : UserRepository) {
		super(Hotel);
	}

	async findByName(name : string) : Promise<IHotel[]> {
		const result = await this._model.find({ name : name })

		return result;
	}

	async getFavoritesByUserId(id: string) : Promise<IHotel[]>{
		
		const user = await this._userRepository.getById(id);

		if(!user)
			throw Error("Invalid user id");
		
		const result = user.favorites

		return result;
	}
}

export default HotelRepository;
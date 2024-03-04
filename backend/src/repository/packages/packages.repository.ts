import { IHotel } from "../../models/hotel.model";
import Packages, { IPackages } from "../../models/packages.model";
import { BaseRepository } from "../repository";

class PackagesRepository extends BaseRepository<IPackages> {

	constructor() {
		super(Packages);
	}

	async findByDepart(depart : Date) : Promise<IPackages[]> {
		const result = await this._model.find({ ticket: { depart : depart } })

		return result;
	}

	async findByFavorites(favorites : IHotel[]) : Promise<IPackages[]> {
		const result = await this._model.find({ $in : favorites })

		return result;
	}
}

export default PackagesRepository;
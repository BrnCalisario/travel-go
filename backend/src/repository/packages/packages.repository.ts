import Packages, { IPackages } from "../../models/packages.model";
import { BaseRepository } from "../repository";

class PackagesRepository extends BaseRepository<IPackages> {

	constructor() {
		super(Packages);
	}

	async findByName(name : string) : Promise<IPackages[]> {
		const result = await this._model.find({ name : name })

		return result;
	}
}

export default PackagesRepository;
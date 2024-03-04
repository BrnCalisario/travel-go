import User, { IUser } from "../../models/user.model";
import { BaseRepository } from "../repository";

class UserRepository extends BaseRepository<IUser> {

	constructor() {
		super(User);
	}

	async findByName(name : string) : Promise<IUser[]> {
		const result = await this._model.find({ fullName : name })

		return result;
	}
}

export default UserRepository;
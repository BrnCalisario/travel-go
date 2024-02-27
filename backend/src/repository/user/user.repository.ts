import User, { IUser } from "../../models/user.model";
import { BaseRepository } from "../repository";

class UserRepository extends BaseRepository<IUser> {

	constructor() {
		super(User);
	}
}

export default UserRepository;
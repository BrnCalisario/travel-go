import { IUser } from "../models/user.model";
import UserRepository from "../repository/user/user.repository";
import { BaseService } from "./base.service";

export class UserService extends BaseService<IUser> {
    constructor() {
        super(new UserRepository())
    }

    create(item : IUser) : Promise<IUser> {

        const hashed = this.hashPassword(item.password);

        item.password = hashed;

        return super.create(item);
    }

    private hashPassword(password : string) : string {
        // TODO : Import lib and hash
        return "#" + password;
    }
}
import { inject, injectable } from "tsyringe";
import { IUser } from "../models/user.model";
import UserRepository from "../repository/user/user.repository";
import { BaseService } from "./base.service";

@injectable()
export class UserService extends BaseService<IUser, UserRepository> {
    
    constructor(@inject("UserRepository") protected _repository : UserRepository) {
        super()
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